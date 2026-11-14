# AutoFix — Proyecto Angular con Bootstrap

## Ejecutar
```
npm install
ng serve -o
```
(Hace falta internet: Bootstrap se carga desde un enlace CDN.)

## Dónde está cada cosa
- Enlaces de Bootstrap y favicon: `src/index.html` (favicon en `public/img/favicon.png`)
- Barra de navegación: `src/app/header/header.html`
- Pie de página: `src/app/footer/footer.html`
- Carrusel de 4 imágenes: `src/app/home/home.html` (imágenes en `public/img/slide1-4.png`)
- Nosotros (historia, misión, visión): `src/app/about/about.html`
- Servicios (3 elementos): `src/app/product/product.html`
- Contacto (formulario): `src/app/contact/contact.html`
- Rutas: `src/app/app.routes.ts`

## Publicar en GitHub Pages
1. Crea un repositorio vacío en github.com.
2. `git init`, `git add .`, `git commit -m "Proyecto Angular"`, `git branch -M main`,
   `git remote add origin https://github.com/TU_USUARIO/TU_REPO.git`, `git push -u origin main`
3. Settings > Pages > Source: **GitHub Actions**. Enlace: `https://TU_USUARIO.github.io/TU_REPO/`
