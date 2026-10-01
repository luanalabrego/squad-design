# Squad de Design para Claude Code

Uma equipe de criação dentro do Claude Code. Quatro agentes especialistas trabalham em sequência para criar posts, carrosséis e criativos de anúncio **sempre no padrão da sua marca**. Você entra no fim, aprovando.

| Agente | O que faz |
|---|---|
| **Guardião da marca** | Guarda a identidade (cores, fontes, logo, tom de voz). Barra o que sai do padrão. |
| **Redator** | Escreve gancho, texto dos slides e legenda. |
| **Diretor de arte** | Monta a peça em HTML no formato base e exporta em imagem. |
| **Revisor** | Confere texto, acento, medida, logo e se a peça vende. Só passa o que está pronto. |

Por que as artes saem em HTML e não de um gerador de imagem: o texto sai perfeito, com acento, na fonte e na cor certas, toda vez. Gerador de imagem fica para ilustração, quando precisar.

---

## Como começar (uma vez só)

**Pré-requisitos:** [Claude Code](https://code.claude.com/docs) instalado, [Node.js](https://nodejs.org) 18 ou mais novo e Google Chrome ou Microsoft Edge.

1. Baixe o squad:

   ```bash
   git clone https://github.com/luanalabrego/squad-design.git
   cd squad-design
   claude
   ```

2. Ensine a sua marca ao squad. Dentro do Claude, rode:

   ```
   /marca https://seusite.com.br
   ```

   O Guardião lê o seu site, propõe o arquivo `design/formato-base.md` (cores, fontes, logo, tom, modelos de peça) e só salva depois do seu ok.

3. Coloque **fotos reais** (projetos, loja, produtos, equipe) em `design/fotos/` e o logo em `design/logo.png` (ou `.svg`).

## Como usar (todo dia)

```
/arte carrossel dica técnica sobre o post https://seusite.com.br/blog/nome-do-post
/arte post projeto entregue com a foto design/fotos/obra-centro.jpg
/arte criativo anúncio de orçamento pelo WhatsApp
```

O squad entrega em `entregas/AAAA-MM-DD-nome/`:

- `slide-01.png`, `slide-02.png`... (1080x1350, prontos para postar)
- `legenda.txt`
- `revisao.md` (o que o Revisor conferiu)

Não gostou de algo? Diga o que mudar. Se for uma regra que vale sempre ("logo maior", "nunca usar fundo branco"), peça para o Guardião **atualizar o formato base**. Assim o erro não volta.

## Exportar à mão

O Diretor de arte já exporta sozinho, mas se precisar:

```bash
node scripts/exportar.mjs entregas/2026-10-01-meu-carrossel
```

Transforma cada `slide-*.html` da pasta em PNG 1080x1350, usando o Chrome ou o Edge instalados.

## Estrutura

```
.claude/agents/     os 4 agentes
.claude/commands/   /marca e /arte
design/             formato-base.md, logo e fotos da sua marca
templates/          slide-base.html (ponto de partida de toda peça)
scripts/            exportar.mjs (HTML para PNG)
entregas/           o que o squad produz
```

## Regras que o squad segue sempre

- Nada é publicado sem a sua aprovação.
- Uma ideia por slide, texto grande, leitura em 2 segundos no celular.
- Último slide sempre chama para a ação (WhatsApp, site, orçamento).
- Sem travessão, sem frases com cara de IA, acentuação sempre correta.
- Nada de inventar número, cliente ou resultado. Se não tem o dado, pergunta.
