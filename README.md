# Portafolio Profesional — Denis Berroeta

Arquitecto de soluciones basadas en inteligencia artificial, con especialización en análisis territorial y sistemas multiagente. Este portafolio reúne proyectos, propuestas y desarrollos en torno a una línea de trabajo donde la IA no es un fin en sí misma, sino una herramienta para interpretar mejor el territorio y construir soluciones con impacto real.

## Sobre este portafolio

Mi trabajo combina ciencia de datos, sistemas inteligentes y análisis espacial para abordar problemas complejos mediante evidencia, automatización y modelos avanzados. Me interesa especialmente el diseño de arquitecturas que coordinan agentes analíticos capaces de procesar grandes volúmenes de información y apoyar la toma de decisiones en contextos territoriales.

Este espacio nace con el propósito de conectar investigación aplicada, desarrollo tecnológico y diseño de plataformas —integrando datos, modelos y usuarios en una misma arquitectura coherente.

## Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── components/
│   └── pages/
│       └── index.astro
└── package.json
```

Construido con [Astro](https://astro.build). Las páginas viven en `src/pages/` y los componentes en `src/components/`. Los recursos estáticos (imágenes, fuentes, etc.) van en `public/`.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                                  |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | Instala las dependencias                                |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`    |
| `npm run build`           | Compila el sitio para producción en `./dist/`           |
| `npm run preview`         | Previsualiza el build antes de desplegar                |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`    |

## Previsualizar antes de publicar

Se necesita Node.js 22.12 o superior. Desde la raíz del repositorio:

```bash
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

Abre `http://127.0.0.1:4321/architect-ai-solutions/`. La previsualización sirve la versión compilada en `dist/`, incluida la ruta base que usa GitHub Pages. Para revisar la entrada de Laya directamente, abre `http://127.0.0.1:4321/architect-ai-solutions/blog/laya-local-decision-model-highway-requests/`. Detén el servidor con `Ctrl+C`.

Durante la edición puedes usar `npm run dev` y abrir `http://localhost:4321/architect-ai-solutions/`. Ejecuta de nuevo `npm run build` antes de revisar la versión que se publicará.

## Publicar en GitHub Pages

Este repositorio publica desde `main` mediante [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Astro genera el sitio en `dist/`; GitHub Actions lo sube a GitHub Pages. La URL configurada es `https://denissebastian.github.io/architect-ai-solutions/`.

1. Comprueba que `npm run build` termina sin errores y revisa la previsualización local.
2. Revisa los cambios con `git status` y `git diff --check`.
3. Confirma los archivos que quieres publicar y envíalos a `main`:

   ```bash
   git add README.md src public package.json package-lock.json
   git commit -m "Publish Laya highway decision model case study"
   git push origin main
   ```

4. En GitHub, abre **Actions → Deploy to GitHub Pages** y espera a que terminen los trabajos **Build** y **Deploy**. Comprueba luego la [página publicada](https://denissebastian.github.io/architect-ai-solutions/) y la [entrada de Laya](https://denissebastian.github.io/architect-ai-solutions/blog/laya-local-decision-model-highway-requests/).

En **Settings → Pages**, la fuente de publicación debe estar configurada como **GitHub Actions**. También puedes ejecutar el workflow manualmente desde **Actions → Deploy to GitHub Pages → Run workflow**; publicará el contenido que ya esté en GitHub, no cambios locales sin enviar.
