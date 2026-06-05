# AÇÚCAR 37 — Website institucional

Website estático bilingue (Português / Inglês) para **AÇÚCAR 37 — Cooperativa de Atividades Culturais, CRL**.

O projecto foi criado para publicação directa no GitHub Pages, sem backend, frameworks ou dependências obrigatórias. O objectivo é apresentar a cooperativa de forma clara, institucional e transparente, incluindo informação útil para processos de validação de organizações sem fins lucrativos (Goodstack, TechSoup, Google for Nonprofits, Meta, Microsoft for Nonprofits, Stripe, etc.).

> Nota sobre o logótipo: `assets/logo.png` (e variantes) preservam o logótipo fornecido. A versão `assets/logo.svg` mantém uma cópia textual (PNG embebido em base64) para compatibilidade com fluxos que rejeitem binários.

## Ficheiros

- `index.html` — estrutura semântica, SEO, Open Graph, dados estruturados Schema.org (incluindo `foundingDate`, `taxID`, endereço completo).
- `style.css` — estilos responsivos com paleta inspirada no logótipo (terracota / creme / preto) e tipografia condensada Anton para títulos.
- `script.js` — selector de idioma PT / EN, menu mobile, ano automático e formulário de contacto que abre `mailto:` pré-preenchido.
- `assets/logo.png` — logótipo original (1600×1600).
- `assets/logo-1200.webp`, `logo-600.webp`, `logo-800.png`, `logo-256.png`, `favicon-128.png` — variantes optimizadas para web.
- `assets/logo.svg` — wrapper SVG textual com PNG embebido em base64 (fallback para fluxos sem binários).
- `assets/documentos/estatutos-acucar37.pdf` — ata da assembleia de fundadores e estatutos.
- `sitemap.xml`, `robots.txt` — SEO base.

## Estrutura do site

1. **Hero** — logótipo, identidade visual, “quick facts” (NIPC, data de constituição, sector).
2. **Sobre** — objecto social e enquadramento jurídico.
3. **Missão** — três pilares: Criação Artística, Programação Cultural, Desenvolvimento Comunitário.
4. **Governance** — órgãos sociais com os nomes reais dos fundadores e mandato 2025–2029.
5. **Ficha institucional / For Verification** — secção dedicada a verificadores de non-profit, com todos os dados oficiais (denominação, NIPC, CAE, capital social, jurisdição, quadro legal, instruções para verificação pública).
6. **Documentos** — descarga directa dos estatutos em PDF + placeholders para relatórios anuais.
7. **Contactos** — formulário `mailto:` pré-preenchido, mapa e email oficial.

## Publicação no GitHub Pages

1. Coloque os ficheiros na raiz do repositório.
2. Confirme que o ficheiro principal se chama `index.html`.
3. Faça commit e push para a branch principal (`main`).
4. **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` · Folder: `/ (root)`
5. Aguarde a publicação.

## Domínio próprio

O site está preparado para `https://acucar37.pt/`. Para alterar o domínio, actualize:
1. `<link rel="canonical">` e `<link rel="alternate">` em `index.html`.
2. Propriedades `og:url`, `og:image`, `twitter:image`.
3. Campo `url`, `logo` e `image` no JSON-LD (Schema.org).
4. URLs em `sitemap.xml` e `robots.txt`.
5. **Settings → Pages → Custom domain** e respectivos registos DNS.

## Editar textos e traduções

O idioma predefinido é Português. As traduções são aplicadas sem recarregar a página através de `script.js`.

1. Abrir `script.js`.
2. Editar o objecto `translations` (manter a mesma chave em `pt` e `en`).
3. No HTML, associar `data-i18n="nomeDaChave"` ao elemento.

```html
<p data-i18n="novoTexto">Texto em Português por defeito.</p>
```

```js
translations.pt.novoTexto = "Texto em Português";
translations.en.novoTexto = "Text in English";
```

## Substituir o logótipo

Para substituir o logótipo:
1. Manter a pasta `assets/`.
2. Substituir `assets/logo.png` (idealmente quadrado, ≥ 1200×1200) e regenerar as variantes (`logo-1200.webp`, `logo-600.webp`, `logo-256.png`, `favicon-128.png`).
3. Se o nome do ficheiro mudar, actualizar `<link rel="icon">`, `<link rel="apple-touch-icon">`, `<link rel="preload">`, `.brand-logo`, `.hero-logo img`, `.footer-logo` em `index.html`, e `og:image` + `twitter:image`.

## Adicionar novos documentos

1. Colocar o ficheiro em `assets/documentos/`.
2. Em `index.html`, na secção `#documentos`, transformar um `<article class="doc-card pending">` num `<a class="doc-card available" href="assets/documentos/…">` com `data-testid` único.
3. Actualizar a tag `<span class="doc-tag">` para `data-i18n="docTagAvailable"`.

## Verificação institucional

O site inclui dados úteis para processos de validação non-profit, nomeadamente:

- Denominação legal completa e designação comum.
- NIPC: 518 910 130.
- Data de constituição: 28-07-2025.
- Natureza jurídica: Cooperativa cultural sem fins lucrativos (CRL).
- CAE principal: 82300-R4. CAE secundárias: 90310-R4, 90390-R4, 90200-R4.
- Capital social: variável e ilimitado, mínimo €3.000.
- Quadro legal: Código Cooperativo Português (Lei n.º 119/2015).
- Órgãos sociais com mandato 2025–2029.
- Email institucional e morada completa.
- Estatutos disponíveis para descarga directa em PDF.

Para enviar a verificadores externos, partilhar o link directo: `https://acucar37.pt/#verificacao`.

## SEO

- HTML semântico, meta tags completas, Open Graph e Twitter Cards.
- `hreflang` para PT e EN.
- JSON-LD Schema.org com `Organization`, `NGO`, `PerformingArtsTheater`, `taxID`, `foundingDate`, `address`.
- `sitemap.xml` e `robots.txt`.

## Acessibilidade e performance

- Navegação por teclado com foco visível.
- `skip-link` para o conteúdo principal.
- Contraste validado em fundo claro e secção escura.
- Layout responsivo (≤960px e ≤560px).
- Sem bibliotecas externas; apenas Google Fonts (Anton, Archivo Narrow, Newsreader, IBM Plex Mono) com `display=swap` e `preconnect`.
- Imagens optimizadas (WebP + PNG fallback).
- Mapa carregado em `loading="lazy"`.

## Teste local

```bash
python3 -m http.server 8000
```

Depois abrir [http://localhost:8000](http://localhost:8000).
