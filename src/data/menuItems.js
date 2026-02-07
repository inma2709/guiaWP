export const menuItems = [
  { title: "🏠 Inicio del curso", path: "/" },

  {
    title: "M1 · Fundamentos de WordPress",
    path: "/tema1",
    children: [
      { title: "1.1 ¿Qué es WordPress y por qué dominarlo?", path: "/tema1#que-es-wordpress" },
      { title: "1.2 WordPress.com vs WordPress.org", path: "/tema1#com-vs-org" },
      { title: "1.3 El mercado laboral y WordPress", path: "/tema1#mercado-laboral" },
      { title: "1.4 Metodología de trabajo profesional", path: "/tema1#metodologia" },
      { title: "1.5 Herramientas que necesitarás", path: "/tema1#herramientas" },
    ],
  },

  {
    title: "M2 · Entorno de desarrollo local",
    path: "/tema2",
    children: [
      { title: "2.1 ¿Por qué trabajar en local?", path: "/tema2#por-que-local" },
      { title: "2.2 Instalación de LocalWP", path: "/tema2#instalacion-localwp" },
      { title: "2.3 Crear tu primer sitio WordPress", path: "/tema2#primer-sitio" },
      { title: "2.4 Estructura de archivos y carpetas", path: "/tema2#estructura-archivos" },
      { title: "2.5 Configuración avanzada de LocalWP", path: "/tema2#configuracion-avanzada" },
      { title: "2.6 Solución de problemas comunes", path: "/tema2#problemas-comunes" },
    ],
  },

  {
    title: "M3 · Anatomía de WordPress",
    path: "/tema3",
    children: [
      { title: "3.1 El dashboard: tu centro de control", path: "/tema3#dashboard" },
      { title: "3.2 Usuarios y roles profesionales", path: "/tema3#usuarios-roles" },
      { title: "3.3 Entradas vs Páginas: cuándo usar cada una", path: "/tema3#entradas-paginas" },
      { title: "3.4 Gestión de medios y biblioteca", path: "/tema3#gestion-medios" },
      { title: "3.5 Configuración general del sitio", path: "/tema3#configuracion-general" },
      { title: "3.6 URLs amigables y permalinks", path: "/tema3#permalinks" },
    ],
  },

  {
    title: "M4 · Temas: la apariencia profesional",
    path: "/tema4",
    children: [
      { title: "4.1 Anatomía de un tema de WordPress", path: "/tema4#anatomia-tema" },
      { title: "4.2 Temas gratuitos vs premium", path: "/tema4#gratuitos-vs-premium" },
      { title: "4.3 Cómo elegir el tema perfecto", path: "/tema4#elegir-tema" },
      { title: "4.4 Instalación y activación", path: "/tema4#instalacion-tema" },
      { title: "4.5 Personalización con el Customizer", path: "/tema4#customizer" },
      { title: "4.6 Temas hijo: ¿cuándo y por qué?", path: "/tema4#temas-hijo" },
      { title: "4.7 Buenas prácticas profesionales", path: "/tema4#buenas-practicas" },
    ],
  },

  {
    title: "M5 · Plugins: funcionalidades esenciales",
    path: "/tema5",
    children: [
      { title: "5.1 Qué son los plugins y cómo funcionan", path: "/tema5#que-son-plugins" },
      { title: "5.2 Plugins imprescindibles para cualquier web", path: "/tema5#plugins-imprescindibles" },
      { title: "5.3 Plugins por tipo de proyecto", path: "/tema5#plugins-por-proyecto" },
      { title: "5.4 Instalación y gestión de plugins", path: "/tema5#gestion-plugins" },
      { title: "5.5 Seguridad: qué plugins evitar", path: "/tema5#plugins-evitar" },
      { title: "5.6 Rendimiento y optimización", path: "/tema5#optimizacion" },
    ],
  },

  {
    title: "M6 · Editor de bloques (Gutenberg)",
    path: "/tema6",
    children: [
      { title: "6.1 Revolución Gutenberg: editor moderno", path: "/tema6#revolucion-gutenberg" },
      { title: "6.2 Bloques básicos más utilizados", path: "/tema6#bloques-basicos" },
      { title: "6.3 Bloques avanzados y patrones", path: "/tema6#bloques-avanzados" },
      { title: "6.4 Reutilizable: plantillas de contenido", path: "/tema6#bloques-reutilizables" },
      { title: "6.5 Diseño responsive con bloques", path: "/tema6#responsive-bloques" },
      { title: "6.6 Productividad: atajos y trucos", path: "/tema6#trucos-productividad" },
    ],
  },

  {
    title: "M7 · Construir una web profesional",
    path: "/tema7",
    children: [
      { title: "7.1 Planificación: arquitectura de información", path: "/tema7#arquitectura-informacion" },
      { title: "7.2 Página de inicio que convierte", path: "/tema7#pagina-inicio" },
      { title: "7.3 Páginas corporativas esenciales", path: "/tema7#paginas-corporativas" },
      { title: "7.4 Sistema de navegación y menús", path: "/tema7#navegacion-menus" },
      { title: "7.5 Formularios de contacto profesionales", path: "/tema7#formularios" },
      { title: "7.6 Páginas legales imprescindibles", path: "/tema7#paginas-legales" },
      { title: "7.7 Blog corporativo: estrategia de contenidos", path: "/tema7#blog-corporativo" },
    ],
  },

  {
    title: "M8 · SEO y posicionamiento web",
    path: "/tema8",
    children: [
      { title: "8.1 SEO en WordPress: fundamentos", path: "/tema8#seo-fundamentos" },
      { title: "8.2 Configuración técnica de SEO", path: "/tema8#seo-tecnico" },
      { title: "8.3 Yoast SEO: configuración profesional", path: "/tema8#yoast-seo" },
      { title: "8.4 Optimización de contenidos", path: "/tema8#optimizacion-contenidos" },
      { title: "8.5 Imágenes y SEO", path: "/tema8#imagenes-seo" },
      { title: "8.6 Velocidad de carga: Core Web Vitals", path: "/tema8#velocidad-carga" },
      { title: "8.7 Errores SEO más comunes", path: "/tema8#errores-seo" },
    ],
  },

  {
    title: "M9 · Seguridad y mantenimiento",
    path: "/tema9",
    children: [
      { title: "9.1 Seguridad en WordPress: panorama general", path: "/tema9#seguridad-general" },
      { title: "9.2 Copias de seguridad automatizadas", path: "/tema9#copias-seguridad" },
      { title: "9.3 Actualizaciones: cuándo y cómo", path: "/tema9#actualizaciones" },
      { title: "9.4 Plugins de seguridad esenciales", path: "/tema9#plugins-seguridad" },
      { title: "9.5 Gestión de usuarios y permisos", path: "/tema9#usuarios-permisos" },
      { title: "9.6 Monitoreo y mantenimiento proactivo", path: "/tema9#monitoreo" },
      { title: "9.7 Recuperación ante problemas", path: "/tema9#recuperacion" },
    ],
  },

  {
    title: "M10 · De desarrollo a producción",
    path: "/tema10",
    children: [
      { title: "10.1 Hosting para WordPress: qué buscar", path: "/tema10#hosting-wordpress" },
      { title: "10.2 Dominios y configuración DNS", path: "/tema10#dominios-dns" },
      { title: "10.3 Migración de local a servidor", path: "/tema10#migracion" },
      { title: "10.4 Certificados SSL y HTTPS", path: "/tema10#ssl-https" },
      { title: "10.5 FTP y gestión de archivos", path: "/tema10#ftp-archivos" },
      { title: "10.6 Optimización en servidor", path: "/tema10#optimizacion-servidor" },
      { title: "10.7 Testing y lanzamiento", path: "/tema10#testing-lanzamiento" },
    ],
  },

  {
    title: "M11 · WordPress para profesionales",
    path: "/tema11",
    children: [
      { title: "11.1 Workflow profesional con Git", path: "/tema11#workflow-profesional" },
      { title: "11.2 Temas hijo avanzados", path: "/tema11#temas-hijo-avanzado" },
      { title: "11.3 Custom Post Types y taxonomías", path: "/tema11#custom-post-types" },
      { title: "11.4 Hooks y filters avanzados", path: "/tema11#hooks-filters" },
      { title: "11.5 Multisite: múltiples sitios", path: "/tema11#multisite" },
      { title: "11.6 WooCommerce: tiendas profesionales", path: "/tema11#woocommerce" },
      { title: "11.7 Optimización avanzada", path: "/tema11#optimizacion-avanzada" },
    ],
  },

  {
    title: "M12 · Casos prácticos y proyectos",
    path: "/tema12",
    children: [
      { title: "12.1 Proyecto: Web corporativa TechCorp", path: "/tema12#web-corporativa" },
      { title: "12.2 Proyecto: E-commerce Eco-Natural", path: "/tema12#ecommerce-eco" },
      { title: "12.3 Proyecto: Portal noticias Valencia", path: "/tema12#portal-noticias" },
      { title: "12.4 Proyecto: Portfolio UX Designer", path: "/tema12#portfolio-designer" },
      { title: "12.5 Troubleshooting: casos críticos", path: "/tema12#troubleshooting" },
      { title: "12.6 Gestión de clientes profesional", path: "/tema12#gestion-clientes" },
      { title: "12.7 Preparación mundo laboral", path: "/tema12#mundo-laboral" },
    ],
  },
];
