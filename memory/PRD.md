# AÇÚCAR 37 — Website institucional · PRD

## Problema original
Revê a página disponível neste repositório. Melhora o design, incorpora melhor o logótipo (em anexo), etc. O site serve acima de tudo como "prova de vida" e para ajudar a processos de verificação de non profit na Goodstack e afins (apesar de ser uma cooperativa que em Portugal é sempre sem objectivo comercial e portanto é uma non-profit, eles não reconhecem; talvez o não ter site não esteja a ajudar). Revê tudo e sugere o que queres acrescentar, melhorar.

## Tipo de projecto
Static website (HTML + CSS + JS, sem backend) preparado para GitHub Pages e domínio `acucar37.pt`.

## Personas
- **Verificadores de non-profit** (Goodstack, TechSoup, Google for Nonprofits, Meta, Microsoft, Stripe) — precisam de dados oficiais claros para validar a entidade.
- **Imprensa / parceiros culturais** — querem entender o objecto social e contactar.
- **Comunidade de Lisboa / Marvila** — quer perceber o que é o espaço.
- **Cooperadores e órgãos sociais** — querem partilhar a página como “prova de vida” institucional.

## Requisitos estáticos (não mudam)
- Cooperativa cultural sem fins lucrativos sediada em Lisboa (Marvila).
- NIPC 518 910 130 · Data de constituição 28-07-2025.
- 5 cooperadores fundadores e órgãos sociais com mandato 2025–2029.
- CAE 82300-R4 (principal) + 90310, 90390, 90200 (secundárias).
- Email oficial `geral@acucar37.pt`.

## Implementado nesta sessão (Jan 2026)
- **Design redesenhado** abraçando a estética do logótipo (terracota oxidada + creme + tipografia condensada Anton) sem perder sobriedade institucional. Paleta consolidada via CSS variables.
- **Logótipo incorporado em três níveis**: header (44px), hero (520px com `drop-shadow` e rotação subtil), footer (40px); todos os tamanhos em WebP/PNG optimizados (favicon-128, logo-256, logo-600.webp, logo-800.png, logo-1200.webp). Original 1600×1600 preservado em `logo.png`.
- **Tipografia**: Anton (display), Archivo Narrow (UI condensada), Newsreader (corpo serif distinto), IBM Plex Mono (dados técnicos). Google Fonts com `preconnect`.
- **Quick facts strip** no hero com NIPC, data de constituição, forma legal e sector.
- **Secção Governance & Direção** com nomes reais dos órgãos sociais retirados dos estatutos.
- **Secção "Ficha Institucional / For Verification"** (dark) dedicada exclusivamente a verificadores: denominação legal, NIPC, CAE principal e secundárias, capital social, jurisdição, quadro legal, instruções para verificação pública e CTA de download.
- **Secção Documentos** com `assets/documentos/estatutos-acucar37.pdf` disponível para download + placeholders para relatórios anuais.
- **Formulário de contacto** que compõe `mailto:geral@acucar37.pt` pré-preenchido (sem backend), com subject pré-definido por categoria.
- **JSON-LD Schema.org** alargado: `Organization` + `NGO` + `PerformingArtsTheater`, com `taxID`, `vatID`, `iso6523Code`, `foundingDate`, `nonprofitStatus`, endereço completo e `knowsAbout`.
- **i18n PT/EN** totalmente actualizada para as novas secções; data de constituição traduzível.
- **Responsivo** (breakpoints 960px e 560px), acessível (skip-link, focus-visible, reduced-motion), com `data-testid` em CTAs principais.

## Roadmap / backlog
- **P1** Adicionar fotos / imagery do espaço Rua do Açúcar 37 (quando disponíveis) numa secção "Espaço".
- **P1** Publicar Relatório de Actividades 2025 quando fechar o exercício.
- **P2** Adicionar página/secção para "Programação" quando começarem eventos.
- **P2** Adicionar redes sociais ao footer quando perfis oficiais estiverem activos.
- **P2** Criar versão "imprimível" (one-pager PDF gerado a partir da ficha institucional) para enviar a verificadores por email.
- **P2** Integrar formulário de contacto com Formspree, Web3Forms ou Cloudflare Workers para envio sem `mailto:` (e armazenar/encaminhar verificações).
- **P3** Newsletter (Buttondown / Substack embed).
- **P3** Adicionar política de privacidade + cookies (vai ser necessária quando entrarem analíticas).
