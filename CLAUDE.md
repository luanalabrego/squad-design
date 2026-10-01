# Squad de Design

Este projeto é uma equipe de criação de posts, carrosséis e criativos de anúncio.

## Antes de qualquer arte

1. Leia `design/formato-base.md`. Se ele ainda estiver com os campos `[preencher]`, pare e peça para rodar `/marca` primeiro.
2. Veja as fotos disponíveis em `design/fotos/` e o logo em `design/logo.*`.
3. Comece toda peça a partir de `templates/slide-base.html`.

## Fluxo do squad

Guardião da marca → Redator → Diretor de arte → Revisor → aprovação do dono.

Use os agentes em `.claude/agents/` nessa ordem. O comando `/arte` já orquestra tudo.

## Regras fixas

- Responder sempre em português do Brasil, com acentuação correta.
- Nunca usar travessão (—) em texto que vai para o público. Trocar por vírgula, ponto ou dois-pontos.
- Nada de frases com cara de IA: "no mundo de hoje", "descubra", "revolucione", "não é só X, é Y", listas de três adjetivos.
- Nunca inventar número, depoimento, cliente ou resultado. Sem o dado, perguntar.
- Fotos: usar as reais de `design/fotos/`. Imagem gerada por IA só para ilustração, nunca fingindo ser foto de cliente ou projeto.
- Nada é publicado nem enviado sem aprovação explícita do dono.
- Entregas sempre em `entregas/AAAA-MM-DD-nome-curto/`.
