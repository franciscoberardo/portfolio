# Francisco Berardo — Portfolio

Portfolio bilingüe desarrollado con React, TypeScript y Vite.

## Desarrollo local

Requiere Node.js 24 y npm.

```bash
npm ci
npm run dev
```

## GitHub Pages

Repositorio: https://github.com/franciscoberardo/portfolio

1. En el repositorio, abrir **Settings → Pages** y seleccionar **GitHub Actions** como Source.
2. Para subir este proyecto por primera vez, ejecutar desde esta carpeta:

```bash
git init
git branch -M main
git add .
git commit -m "Publish portfolio with GitHub Pages"
git remote add origin https://github.com/franciscoberardo/portfolio.git
git push -u origin main
```

El workflow `.github/workflows/deploy.yml` instala dependencias con `npm ci`, compila y publica `dist` automáticamente en cada push a `main`. También se puede ejecutar manualmente desde Actions.

URL esperada al completar el despliegue: https://franciscoberardo.github.io/portfolio/

Vite usa `/portfolio/` como base en producción y `/` durante desarrollo local. No hace falta subir `dist` ni crear una rama `gh-pages`.

## Verificar la versión de producción localmente

```bash
npm run build
npm run preview
```

Abrir http://localhost:4173/portfolio/.

## Actualizaciones

```bash
git add .
git commit -m "Update portfolio"
git push
```

Referencia: https://vite.dev/guide/static-deploy#github-pages

## Estructura del código

- `src/App.tsx`: composición y orden de las secciones.
- `src/components/`: componentes React y estilos de cada sección.
- `src/data/`: perfil, proyectos, experiencia y tecnologías.
- `src/i18n/translations.ts`: textos de interfaz en español e inglés.
- `src/hooks/useLanguage.ts`: preferencia de idioma y metadatos.
- `src/index.css`: estilos globales y variables de diseño.
- `src/styles/shared.css`: botones, títulos y etiquetas compartidos.

Para agregar un proyecto o modificar el stack, editar los archivos de `src/data/`. Los datos localizados usan las claves `en` y `es`. Los estilos responsive están junto a las reglas de cada componente.

Verificaciones antes de subir cambios:

```bash
npm run lint
npm run build
```
