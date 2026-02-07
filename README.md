# 📚 Manual de WordPress - Curso Interactivo

> **WordPress en 10 días**: De cero a publicar 2 proyectos reales (Portfolio + Tienda) trabajando con LocalWP

Un manual interactivo desarrollado en React para aprender WordPress de forma práctica y profesional. Este proyecto te guía desde los fundamentos básicos hasta la creación de sitios web completos y funcionales.

## 🌟 Características

- **Interfaz moderna e interactiva** construida con React y Vite
- **12 módulos estructurados** con contenido progresivo
- **Componentes educativos especializados**: TipBox, PracticeBox, WarningBox, ActivityBox
- **Navegación intuitiva** con sidebar y enlaces contextuales
- **Resaltado de sintaxis** con Highlight.js para código
- **Diseño responsive** adaptado para diferentes dispositivos

## 🎯 Objetivos del Curso

Este manual está diseñado para:

- ✅ **Dominar WordPress** desde nivel básico hasta avanzado
- ✅ **Crear 2 proyectos reales**: Portfolio personal y Tienda online
- ✅ **Trabajar profesionalmente** con entorno de desarrollo local (LocalWP)
- ✅ **Entender el ecosistema WordPress**: temas, plugins, personalización
- ✅ **Prepararse para el mercado laboral** como desarrollador/diseñador WordPress

## 📖 Contenido del Curso

### 🏠 **Módulo 0**: Introducción
- Presentación del curso y metodología

### 🧩 **Módulo 1**: Fundamentos de WordPress
- ¿Qué es WordPress y por qué dominarlo?
- WordPress.com vs WordPress.org
- El mercado laboral y WordPress
- Metodología de trabajo profesional

### 💻 **Módulo 2**: Entorno de desarrollo local
- Instalación y configuración de LocalWP
- Crear tu primer sitio WordPress
- Estructura de archivos y carpetas

### 🔧 **Módulo 3**: Anatomía de WordPress
- El dashboard: centro de control
- Usuarios y roles profesionales
- Gestión de contenido y medios

### 🎨 **Módulo 4**: Temas profesionales
- Anatomía de un tema
- Personalización con Customizer
- Temas gratuitos vs premium

### 🔌 **Módulo 5**: Plugins esenciales
- Gestión e instalación de plugins
- Plugins imprescindibles
- Desarrollo de plugins personalizados

### 🏗️ **Módulo 6**: Gutenberg y bloques
- Editor de bloques moderno
- Personalización avanzada
- Creación de bloques custom

### 🛒 **Módulo 7**: Proyecto WooCommerce
- Tienda online completa
- Configuración de pagos y envíos
- Personalización del catálogo

### 👤 **Módulo 8**: Portfolio personal
- Sitio web profesional
- Optimización SEO
- Integración con redes sociales

### 🚀 **Módulo 9**: Hosting y migración
- Subida a servidor en vivo
- Configuración de dominio
- Optimización de rendimiento

### 📊 **Módulo 10**: SEO y Analytics
- Posicionamiento web
- Google Analytics y Search Console
- Herramientas de análisis

### 🔒 **Módulo 11**: Seguridad y respaldos
- Protección del sitio web
- Sistemas de backup
- Actualizaciones seguras

### 🎓 **Módulo 12**: Profesionalización
- Flujo de trabajo profesional
- Cliente y mantenimiento
- Próximos pasos en tu carrera

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd manual-wordpress

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

### Scripts disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Construir para producción
- `npm run lint` - Ejecutar ESLint para verificar código
- `npm run preview` - Preview de la build de producción

## 🛠️ Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca de interfaz de usuario
- **Vite** (rolldown-vite) - Build tool y servidor de desarrollo
- **React Router DOM 7.12.0** - Navegación entre páginas
- **Highlight.js 11.11.1** - Resaltado de sintaxis
- **ESLint 9.39.1** - Linting y calidad de código

## 📁 Estructura del Proyecto

```
manual-wordpress/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ContentBoxes.jsx # Cajas educativas (Tip, Practice, etc.)
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Sidebar.jsx      # Navegación lateral
│   │   └── TopicLayout.jsx  # Layout base para temas
│   ├── pages/               # Páginas del manual
│   │   ├── Home.jsx         # Página principal
│   │   ├── tema0/           # Módulo 0: Introducción
│   │   ├── tema1/           # Módulo 1: Fundamentos
│   │   ├── ...              # Módulos 2-12
│   │   └── tema12/          # Módulo 12: Profesionalización
│   ├── data/
│   │   └── menuItems.js     # Estructura de navegación
│   └── assets/              # Recursos estáticos
├── styles/
│   └── global.css           # Estilos globales
└── public/                  # Archivos públicos
```

## 🎨 Componentes Educativos

Este manual incluye componentes especializados para mejorar la experiencia de aprendizaje:

- **`<TipBox>`** - Consejos y trucos profesionales
- **`<PracticeBox>`** - Ejercicios prácticos guiados
- **`<WarningBox>`** - Advertencias importantes
- **`<ActivityBox>`** - Actividades interactivas

## 📱 Características Responsivas

El manual está optimizado para:
- 💻 **Desktop** - Experiencia completa con sidebar
- 📱 **Tablet** - Navegación adaptada
- 📱 **Mobile** - Interfaz móvil optimizada

## 🤝 Contribución

Si deseas contribuir a este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto es un material educativo. Todos los derechos reservados.

## ✨ Autor

Desarrollado con ❤️ para la comunidad de WordPress

---

**¿Listo para dominar WordPress en 10 días?** 🚀

Comienza tu viaje desde [localhost:5173](http://localhost:5173) después de ejecutar `npm run dev`
