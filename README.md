# 🦕 La Casa del Frappesaurio

> Landing page oficial de **La Casa del Frappesaurio**, una cafetería con personalidad propia que combina el amor por el café con un diseño único de temática "Mesozoica". Construida con React + Vite + Tailwind CSS.

---

## ☕ Sobre el proyecto

La Casa del Frappesaurio es una cafetería que ofrece una amplia variedad de bebidas y productos, entre ellos:

- ☕ Café
- 🧋 Frappes
- 🍫 Chocolate
- 🍵 Té y tisanas
- 🫘 Granos de café entero o molido

Este repositorio contiene el código fuente de su landing page, una aplicación de una sola página (SPA) dividida en cuatro secciones principales que articulan la esencia y el encanto del lugar.

---

## 📄 Secciones

| Sección | Descripción |
|---|---|
| **Inicio** | Presentación principal de la cafetería con llamada a la acción |
| **Sobre Nosotros** | Historia, valores y lo que hace única a la cafetería |
| **Menú** | Catálogo de productos y bebidas disponibles |
| **Contacto** | Información de contacto y formulario para comunicarse |

---

## 🛠️ Tecnologías utilizadas

- [React 19](https://react.dev/) — Biblioteca principal de UI
- [Vite 7](https://vitejs.dev/) — Bundler y servidor de desarrollo ultrarrápido
- [Tailwind CSS 4](https://tailwindcss.com/) — Framework de estilos utilitarios
- [Framer Motion](https://www.framer.com/motion/) — Animaciones fluidas
- [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/) — Íconos
- [ESLint](https://eslint.org/) — Linter para mantener calidad del código

---

## 🚀 Instalación y uso local

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) v9 o superior (o el gestor de paquetes de tu preferencia)

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/raul-hernandez-dev/La_casa_del_frappesaurio.git

# 2. Entra al directorio del proyecto
cd La_casa_del_frappesaurio

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o en la IP de tu red local si accedes desde otro dispositivo).

---

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo (con acceso en red local) |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para revisar el código |

---

## 📁 Estructura del proyecto

```
La_casa_del_frappesaurio/
├── public/             # Archivos estáticos públicos
├── src/                # Código fuente principal
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes reutilizables
│   ├── sections/       # Secciones de la landing page
│   │   ├── Inicio/
│   │   ├── SobreNosotros/
│   │   ├── Menu/
│   │   └── Contacto/
│   ├── App.jsx         # Componente raíz
│   └── main.jsx        # Punto de entrada
├── index.html          # HTML principal
├── vite.config.js      # Configuración de Vite
├── eslint.config.js    # Configuración de ESLint
└── package.json        # Dependencias y scripts
```


