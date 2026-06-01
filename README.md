# AÇÚCAR 37 — Website institucional

Website estático bilingue (Português / Inglês) para **AÇÚCAR 37 - Cooperativa de Atividades Culturais, CRL**.

O projecto foi criado para publicação directa no GitHub Pages, sem backend, frameworks ou dependências obrigatórias. O objectivo é apresentar a cooperativa de forma clara, institucional e transparente, incluindo informação útil para processos de validação de organizações sem fins lucrativos.

> Nota: o ficheiro `assets/logo.svg` preserva exactamente o logótipo fornecido. Não deve ser redesenhado, recriado ou substituído por uma aproximação visual.

## Ficheiros

- `index.html` — estrutura semântica, SEO, Open Graph, logótipo e dados estruturados Schema.org.
- `style.css` — estilos responsivos, paleta visual inspirada no logótipo, acessibilidade e layout.
- `script.js` — selector de idioma PT / EN, menu mobile e ano automático no rodapé.
- `sitemap.xml` — mapa do site para motores de pesquisa.
- `robots.txt` — instruções básicas de indexação.
- `README.md` — instruções de manutenção e publicação.
- `assets/logo.svg` — logótipo original fornecido, embebido num SVG textual sem alterações de design.


### Nota sobre ficheiros binários

Alguns fluxos de criação de PR não aceitam ficheiros binários. Por isso, o logótipo original foi embebido em `assets/logo.svg` como SVG textual com uma imagem PNG em Base64. Isto mantém o desenho visual fornecido sem recriação, mas evita adicionar um ficheiro binário ao repositório.

## Publicação no GitHub Pages

1. Criar um repositório no GitHub ou utilizar o repositório existente.
2. Colocar estes ficheiros na raiz do repositório.
3. Confirmar que o ficheiro principal se chama `index.html`.
4. Fazer commit e push para a branch principal (`main` ou `master`).
5. No GitHub, abrir **Settings** → **Pages**.
6. Em **Build and deployment**, escolher:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (ou a branch usada)
   - **Folder**: `/ (root)`
7. Guardar as alterações.
8. Aguardar a publicação. O GitHub Pages indicará o URL público.

## Domínio próprio

O site está preparado para `https://acucar37.pt/`. Se for usado outro domínio:

1. Actualizar as URLs em `index.html`:
   - `link rel="canonical"`
   - `link rel="alternate"`
   - propriedades Open Graph (`og:url`)
   - campo `url` nos dados estruturados Schema.org
2. Actualizar `sitemap.xml` com o domínio correcto.
3. Actualizar `robots.txt` com o URL correcto do sitemap.
4. Configurar o domínio em **Settings** → **Pages** → **Custom domain**.
5. Criar os registos DNS indicados pelo GitHub Pages.

## Logótipo e identidade visual

O site usa `assets/logo.svg`, o logótipo fornecido embebido num SVG textual, sem alterações de design. A paleta do website foi ajustada para conviver com o fundo terracota, a moldura preta e o lettering creme do logótipo.

Para substituir por um ficheiro oficial final:

1. Manter a pasta `assets/` na raiz do projecto.
2. Substituir `assets/logo.svg` por uma versão oficial optimizada em formato textual, mantendo o mesmo design.
3. Se o nome do ficheiro mudar, actualizar em `index.html`:
   - `link rel="icon"`
   - `link rel="preload"`
   - imagem do cabeçalho (`.brand-logo`)
   - `og:image`, `twitter:image`, `logo` e `image` nos dados estruturados
4. Ajustar dimensões no CSS, se necessário.

## Editar textos e traduções

O idioma predefinido é Português. O conteúdo em Inglês é aplicado sem recarregar a página através de `script.js`.

Para alterar ou adicionar textos:

1. Abrir `script.js`.
2. Editar o objecto `translations`.
3. Manter a mesma chave em `pt` e `en`.
4. No HTML, associar o texto a um atributo `data-i18n="nomeDaChave"`.

Exemplo:

```html
<p data-i18n="novoTexto">Texto em Português por defeito.</p>
```

```js
translations.pt.novoTexto = "Texto em Português";
translations.en.novoTexto = "Text in English";
```

## Redes sociais

Os botões de Instagram, Facebook, YouTube e LinkedIn estão ocultos enquanto não existirem perfis oficiais publicados. Quando os perfis forem criados, adicionar as ligações oficiais na secção `#contactos` de `index.html`.

## Documentos institucionais

A secção de Transparência inclui cartões preparados para:

- Estatutos
- Relatórios de Actividades
- Documentação Institucional

Quando os documentos forem publicados:

1. Criar uma pasta `docs/`.
2. Guardar os PDFs com nomes claros, por exemplo `docs/estatutos-acucar37.pdf`.
3. Substituir o texto de estado por ligações directas para cada documento.

## SEO e validação institucional

O site inclui:

- HTML semântico.
- Meta tags de descrição e indexação.
- Open Graph e Twitter Cards.
- `hreflang` para Português e Inglês.
- Dados estruturados Schema.org com nome legal, NIF, email, morada e natureza cultural.
- `sitemap.xml` e `robots.txt`.

Estas informações ajudam motores de pesquisa e avaliadores de programas para organizações sem fins lucrativos a identificar a entidade, a morada, o estatuto não lucrativo, o sector cultural e o contacto oficial.

## Acessibilidade e performance

- Navegação por teclado com foco visível.
- Link para saltar para o conteúdo principal.
- Contraste adequado.
- Layout responsivo para telemóvel e desktop.
- CSS e JavaScript sem bibliotecas externas.
- Mapa carregado com `loading="lazy"`.

## Teste local

Pode abrir `index.html` directamente no navegador. Para testar com um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois abrir:

```text
http://localhost:8000
```
