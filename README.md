# jacquesbelmont.com

Novo site pessoal de Jacques Belmont: engenharia de software, inteligência artificial, projetos acadêmicos e publicações científicas.

**Stack:** Astro estático, TypeScript, Markdown/MDX e GitHub Pages.

## Instalação

```bash
npm install
npm run dev
npm run build
```

## Deploy

O workflow `.github/workflows/deploy.yml` compila e publica o site no GitHub Pages. Configurar em **Settings → Pages → Build and deployment → GitHub Actions**.

Prévia planejada: https://jacquesbelmont.github.io/jacquesbelmont.com/

O deploy só estará disponível após compilação e configuração bem-sucedidas. O repositório `jacquesbelmont/site`, o domínio e o DNS **não são modificados**.

## Conteúdo editorial

- `src/data/projects.ts`: cards e estudos de caso.
- `src/content/projects`: projetos profissionais.
- `src/content/academic-projects`: projetos acadêmicos e experimentos.
- `src/content/publications`: artigos científicos com status editorial e DOI quando confirmados.
- `src/content/articles`: estudos e artigos técnicos.

### Antes de publicar definitivamente

Substituir a fotografia ilustrativa por retrato autorizado, adicionar URL de vídeo real, validar currículo e dados acadêmicos, incluir imagens próprias e conferir publicações com fontes originais. Não divulgar dados privados ou código de clientes.

### Verificação

O código foi enviado sem execução local de `npm run build` porque as dependências npm não puderam ser instaladas neste ambiente; o GitHub Actions é responsável pela primeira compilação verificável. O workflow utiliza `npm install`; após gerar e versionar `package-lock.json`, trocar para `npm ci`.
