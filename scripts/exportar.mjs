#!/usr/bin/env node
// Exporta cada slide-*.html de uma pasta para PNG 1080x1350 usando o Chrome ou o Edge instalados.
// Uso: node scripts/exportar.mjs entregas/2026-10-01-meu-carrossel [largura] [altura]
import { existsSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const pasta = process.argv[2];
const largura = Number(process.argv[3] || 1080);
const altura = Number(process.argv[4] || 1350);

if (!pasta || !existsSync(pasta)) {
  console.error('Uso: node scripts/exportar.mjs <pasta-da-entrega> [largura] [altura]');
  process.exit(1);
}

const candidatos = {
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ],
  win32: [
    `${process.env['PROGRAMFILES']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['LOCALAPPDATA']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['PROGRAMFILES(X86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${process.env['PROGRAMFILES']}\\Microsoft\\Edge\\Application\\msedge.exe`,
  ],
  linux: ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'],
};

const navegador = (process.env.CHROME_PATH && [process.env.CHROME_PATH] || candidatos[process.platform] || [])
  .find((p) => p && existsSync(p));

if (!navegador) {
  console.error('Não achei Chrome nem Edge. Instale um deles ou defina CHROME_PATH com o caminho do executável.');
  process.exit(1);
}

const slides = readdirSync(pasta).filter((f) => /^slide-.*\.html$/i.test(f)).sort();
if (!slides.length) {
  console.error(`Nenhum slide-*.html em ${pasta}`);
  process.exit(1);
}

const perfil = join(tmpdir(), `squad-design-chrome-${Date.now()}`);

for (const arquivo of slides) {
  const html = resolve(pasta, arquivo);
  const png = html.replace(/\.html$/i, '.png');
  try {
    execFileSync(navegador, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      `--user-data-dir=${perfil}`,
      '--force-device-scale-factor=1',
      `--window-size=${largura},${altura}`,
      '--virtual-time-budget=4000',
      `--screenshot=${png}`,
      pathToFileURL(html).href,
    ], { stdio: 'ignore', timeout: 60000 });
  } catch {
    // alguns navegadores retornam erro ao fechar mesmo tendo salvo a imagem
  }
  if (existsSync(png) && statSync(png).size > 1000) {
    console.log(`ok  ${png}`);
  } else {
    console.error(`ERRO ao exportar ${arquivo}`);
    process.exitCode = 1;
  }
}
