export const menuItems = [
  { title: "🏠 Inicio del curso", path: "/" },

  {
    title: "M0 · Introducción a WordPress",
    path: "/tema0",
    children: [
      { title: "0.1 ¿Qué es WordPress?", path: "/tema0#que-es-wordpress" },
      { title: "0.2 ¿Por qué elegir WordPress?", path: "/tema0#por-que-elegir" },
      { title: "0.3 WordPress.org vs WordPress.com", path: "/tema0#tipos-wordpress" },
    ],
  },

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

  {
    title: "M13 · CSS avanzado: sombras, capas y efectos",
    path: "/tema13",
    children: [
      { title: "13.1 Objetivo y resultado final", path: "/tema13#objetivo" },
      { title: "13.2 Chuleta de propiedades", path: "/tema13#chuleta" },
      { title: "13.3 Estructura de la tarjeta", path: "/tema13#estructura" },
      { title: "13.4 Capas: imagen + píldora encima", path: "/tema13#capas" },
      { title: "13.5 Metadatos pequeños con iconos", path: "/tema13#metadatos" },
      { title: "13.6 Sombra, relieve y efecto hover", path: "/tema13#efectos" },
      { title: "13.7 Ejercicio guiado", path: "/tema13#ejercicio" },
      { title: "13.8 Repaso y checklist", path: "/tema13#repaso" },
    ],
  },

  {
    title: "M14 · Contenedores: fundamentos y diseño profesional",
    path: "/tema16",
    children: [
      { title: "14.1 Objetivo + regla de oro", path: "/tema16#objetivo" },
      { title: "14.2 Fundamentos (submenú)", path: "/tema16#fundamentos" },
      { title: "14.3 Propiedades del contenedor", path: "/tema16#propiedades" },
      { title: "14.4 Patrones: guardar y reutilizar contenedores", path: "/tema16#patrones" },
      { title: "14.5 Ejemplo final: Tarjeta PRO", path: "/tema16#tarjeta-pro" },
    ],
  },

  {
    title: "M15 · Gutenberg (Editor de bloques)",
    path: "/tema15",
    children: [
      { title: "15.1 Qué es Gutenberg", path: "/tema15#que-es-gutenberg" },
      { title: "15.2 Bloques, estructura y jerarquía", path: "/tema15#bloques-y-estructura" },
      { title: "15.3 Dónde se usa: entradas, páginas y plantillas", path: "/tema15#donde-se-usa" },
      { title: "15.4 ¿Se puede usar Gutenberg 'sin tema'?", path: "/tema15#sin-tema" },
      { title: "15.5 Primeros pasos guiados", path: "/tema15#primeros-pasos" },
      { title: "15.6 Buenas prácticas (pro)", path: "/tema15#buenas-practicas" },
      { title: "15.7 Ejercicio práctico", path: "/tema15#ejercicio" },
      { title: "15.8 Repaso final", path: "/tema15#repaso" },
    ],
  },

  {
    title: "M16 · Sección 'Consejos rápidos'",
    path: "/tema14",
    children: [
      { title: "16.1 Resultado final y objetivos", path: "/tema14#resultado" },
      { title: "16.2 Esquema de contenedores", path: "/tema14#esquema" },
      { title: "16.3 Construcción paso a paso", path: "/tema14#paso-a-paso" },
      { title: "16.4 Propiedades que entrenamos", path: "/tema14#propiedades" },
      { title: "16.5 Ejercicio guiado", path: "/tema14#ejercicio" },
      { title: "16.6 Checklist final", path: "/tema14#checklist" },
    ],
  },

  {
    title: "M17 · Nuestra primera tienda",
    path: "/tema17",
  },

  {
    title: "M18 · Custom Post Types desde cero",
    path: "/tema18",
    children: [
      { title: "18.1 Fundamentos: ¿Qué es un Custom Post Type?", path: "/tema18#fundamentos" },
      { title: "18.2 Tema hijo: Base profesional obligatoria", path: "/tema18#child-theme" },
      { title: "18.3 Cuándo usar CPT vs páginas normales", path: "/tema18#cuando-usar" },
      { title: "18.4 Planificación del proyecto: Caso 'Rutas turísticas'", path: "/tema18#planificacion" },
      { title: "18.5 Plugin necesario: Custom Post Type UI", path: "/tema18#instalacion-plugins" },
      { title: "18.6 Crear el Custom Post Type paso a paso", path: "/tema18#crear-cpt" },
      { title: "18.7 Estructura de archivos y convenciones", path: "/tema18#estructura-archivos" },
      { title: "18.8 Crear la plantilla single-rutas.php", path: "/tema18#plantilla-single" },
      { title: "18.9 Testing y depuración", path: "/tema18#testing" },
      { title: "18.10 Mejores prácticas profesionales", path: "/tema18#mejores-practicas" },
    ],
  },

  {
    title: "M19 · Advanced Custom Fields (ACF)",
    path: "/tema19",
    children: [
      { title: "19.1 Fundamentos: ¿Qué es ACF y por qué es revolucionario?", path: "/tema19#fundamentos-acf" },
      { title: "19.2 Instalación y configuración inicial", path: "/tema19#instalacion" },
      { title: "19.3 Tipos de campos: Del básico al avanzado", path: "/tema19#tipos-campos" },
      { title: "19.4 Crear tu primer grupo de campos para rutas", path: "/tema19#crear-grupo" },
      { title: "19.5 Integrar ACF en single-rutas.php", path: "/tema19#plantilla-acf" },
      { title: "19.6 Campos avanzados: Repetidores, mapas y galerías", path: "/tema19#campos-avanzados" },
      { title: "19.7 Crear archive-rutas.php con tarjetas dinámicas", path: "/tema19#archive-template" },
      { title: "19.8 Filtros y taxonomías personalizadas", path: "/tema19#filtros-taxonomias" },
      { title: "19.9 Optimización y mejores prácticas", path: "/tema19#optimizacion" },
      { title: "19.10 Casos de uso profesionales reales", path: "/tema19#casos-reales" },
    ],
  },

  {
    title: "M20 · Formularios Profesionales en WordPress",
    path: "/tema20",
    children: [
      { title: "20.1 Fundamentos estratégicos", path: "/tema20#fundamentos" },
      { title: "20.2 Objetivos básicos y barrera de conversión", path: "/tema20#objetivos-basicos" },
      { title: "20.3 Comparativa profesional de plugins", path: "/tema20#comparativa-plugins" },
      { title: "20.4 SureForms: Implementación profesional", path: "/tema20#sureforms" },
      { title: "20.5 Contact Form 7: Dominio técnico", path: "/tema20#contact-form-7" },
      { title: "20.6 Fluent Forms: Configuración avanzada", path: "/tema20#fluent-forms" },
      { title: "20.7 Integración con email marketing", path: "/tema20#email-marketing" },
      { title: "20.8 Seguridad en formularios", path: "/tema20#seguridad" },
      { title: "20.9 UX/UI Optimization", path: "/tema20#ux-optimization" },
      { title: "20.10 Analítica y métricas de conversión", path: "/tema20#analitica" },
      { title: "20.11 Casos de éxito profesionales", path: "/tema20#casos-exito" },
    ],
  },

  // Sección de Ejercicios
  {
    title: "📚 Ejercicios Prácticos",
    path: "/ejercicios",
    children: [
      { title: "Ejercicio 1: Contenedores", path: "/ejercicios/contenedores" },
    ],
  },
];
