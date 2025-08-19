# SGSI — Gasolinera Puma (Plantilla Web)
Proyecto de una página (SPA) para presentar el Plan de Tratamiento de Ciberseguridad (SGSI).

## Estructura
```
puma-sgsi-web/
├── index.html
└── assets/
    ├── css/style.css
    ├── js/app.js
    └── img/
```

## Cómo ejecutar
1. Abra la carpeta `puma-sgsi-web` en VS Code.
2. Instale la extensión **Live Server** (si no la tiene).
3. Haga clic derecho sobre `index.html` → **Open with Live Server**.
4. Use la barra superior para navegar por las secciones.
5. Para exportar a PDF, use el botón **Exportar a PDF** o `Ctrl/Cmd + P` → **Imprimir**.

## Personalización rápida
- Edite el contenido de cada sección en `index.html`.
- Agregue o cambie riesgos en `assets/js/app.js` (array `risks`). El nivel se calcula automáticamente.
- Ajuste colores/estilos en `assets/css/style.css`.
