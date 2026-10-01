---
description: Roda o squad de design completo (guardião, redator, diretor de arte, revisor) e entrega a peça para aprovação
argument-hint: carrossel|post|criativo + tema, link do post ou foto
---

Pedido: $ARGUMENTS

Rode o squad de design em sequência:

1. **guardiao-marca**: confira se `design/formato-base.md` está preenchido (se não estiver, pare e peça para rodar `/marca`). Escolha o modelo de peça e monte o briefing de marca.
2. **redator**: escreva o roteiro slide a slide e a legenda. Se o pedido tiver um link, leia o conteúdo e use só fatos de lá.
3. **diretor-arte**: monte os slides em HTML a partir de `templates/slide-base.html`, exporte com `node scripts/exportar.mjs` e confira os PNG.
4. **revisor**: revise cada PNG e a legenda com o checklist, salve `revisao.md`. Se devolver, corrija e revise de novo.

No fim, me mostre os PNG, a legenda e o resumo da revisão, e pergunte se aprovo.
Não publique nada. Se eu pedir uma mudança que vale para sempre, peça ao guardiao-marca para registrar no formato base.

Tipos:
- **carrossel**: 5 a 7 slides 1080x1350
- **post**: 1 imagem 1080x1350
- **criativo**: 1 imagem 1080x1350 para anúncio, com a chamada bem visível e pouco texto
