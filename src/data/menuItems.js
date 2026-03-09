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
    title: "M14 · Sección 'Consejos rápidos'",
    path: "/tema14",
    children: [
      { title: "14.1 Resultado final y objetivos", path: "/tema14#resultado" },
      { title: "14.2 Esquema de contenedores", path: "/tema14#esquema" },
      { title: "14.3 Construcción paso a paso", path: "/tema14#paso-a-paso" },
      { title: "14.4 Propiedades que entrenamos", path: "/tema14#propiedades" },
      { title: "14.5 Ejercicio guiado", path: "/tema14#ejercicio" },
      { title: "14.6 Checklist final", path: "/tema14#checklist" },
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
    title: "M16 · Contenedores: fundamentos y diseño profesional",
    path: "/tema16",
    children: [
      { title: "16.1 Objetivo + regla de oro", path: "/tema16#objetivo" },
      { title: "16.2 Fundamentos (submenú)", path: "/tema16#fundamentos" },
      { title: "16.3 Propiedades del contenedor", path: "/tema16#propiedades" },
      { title: "16.4 Patrones: guardar y reutilizar contenedores", path: "/tema16#patrones" },
      { title: "16.5 Ejemplo final: Tarjeta PRO", path: "/tema16#tarjeta-pro" },
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

  {
    title: "M21 · Bloque HTML Personalizado",
    path: "/tema21",
    children: [
      { title: "21.1 ¿Qué es el bloque HTML personalizado?", path: "/tema21#introduccion" },
      { title: "21.2 Cuándo usar HTML personalizado vs otros bloques", path: "/tema21#cuando-usar" },
      { title: "21.3 Cómo agregar un bloque HTML personalizado", path: "/tema21#como-agregar" },
      { title: "21.4 Sintaxis HTML básica en WordPress", path: "/tema21#sintaxis-basica" },
      { title: "21.4.1 🎨 ¿Dónde poner el CSS? Tres enfoques", path: "/tema21#css-en-html" },
      { title: "21.5 Ejemplos prácticos y casos de uso", path: "/tema21#ejemplos-practicos" },
      { title: "21.6 HTML avanzado: formularios, tablas y multimedia", path: "/tema21#html-avanzado" },
      { title: "21.7 Mejores prácticas y consideraciones de seguridad", path: "/tema21#buenas-practicas" },
      { title: "21.8 Ejercicios prácticos", path: "/tema21#ejercicios" },
    ],
  },

  {
    title: "M22 · Sistema de Login de Cliente",
    path: "/tema22",
    children: [
      { title: "22.1 Fundamentos: ¿Por qué necesitas login de cliente?", path: "/tema22#fundamentos" },
      { title: "22.2 Herramientas: Plugins que resuelven login de cliente", path: "/tema22#herramientas" },
      { title: "22.3 Ultimate Member: Nuestra elección", path: "/tema22#ultimate-member" },
      { title: "22.4 Implementación paso a paso", path: "/tema22#instalacion" },
      { title: "22.5 Saludo en el menú + enlace Login/Logout", path: "/tema22#menu-saludo" },
      { title: "22.6 Perfil 'Rutas reservadas' (placeholder)", path: "/tema22#perfil-rutas" },
      { title: "22.7 Práctica final", path: "/tema22#practica" },
    ],
  },

  {
    title: "M23 · Plugins de Reservas en WordPress",
    path: "/tema23",
    children: [
      { title: "23.1 Fundamentos: ¿Por qué automatizar reservas?", path: "/tema23#fundamentos" },
      { title: "23.2 Panorama de plugins disponibles", path: "/tema23#panorama-plugins" },
      { title: "23.3 Simply Schedule Appointments: análisis completo", path: "/tema23#analisis-detallado" },
      { title: "23.4 Instalación y configuración paso a paso", path: "/tema23#instalacion" },
      { title: "23.5 Uso práctico: primeras reservas", path: "/tema23#uso-practico" },
      { title: "23.6 Casos prácticos por sector", path: "/tema23#casos-practicos" },
      { title: "23.7 Optimización y mejores prácticas", path: "/tema23#optimizacion" },
      { title: "23.8 Resolución de problemas", path: "/tema23#problemas-comunes" },
    ],
  },

  {
    title: "M24 · Elementor: El Page Builder",
    path: "/tema24",
    children: [
      { title: "24.1 ¿Qué es Elementor y por qué existe?", path: "/tema24#que-es-elementor" },
      { title: "24.2 Comparativa detallada: Elementor vs Astra/Spectra", path: "/tema24#comparativa-detallada" },
    ],
  },

  {
    title: "M25 · Proyecto E-Commerce: WooCommerce + GeneratePress + Elementor",
    path: "/tema25",
    children: [
      { title: "25.1 Principios básicos de un e-commerce", path: "/tema25#principios-ecommerce" },
      { title: "25.2 Cómo funciona WooCommerce", path: "/tema25#como-funciona-woocommerce" },
      { title: "25.3 GeneratePress: el theme base ideal", path: "/tema25#generatepress-ecommerce" },
      { title: "25.4 El rol de Elementor en un e-commerce", path: "/tema25#elementor-ecommerce" },
      { title: "25.5 Primera instalación con WPZip", path: "/tema25#wpzip-primera-instalacion" },
      { title: "25.6 Arquitectura completa del stack", path: "/tema25#arquitectura-stack" },
      { title: "25.7 Actividades prácticas", path: "/tema25#actividades" },
    ],
  },

  {
    title: "M26 · Diseñando la Home de tu Tienda con Elementor",
    path: "/tema26",
    children: [
      { title: "26.1 Diagnóstico post-WPZip", path: "/tema26#diagnostico-wpzip" },
      { title: "26.2 Menú de navegación profesional", path: "/tema26#menu-navegacion" },
      { title: "26.3 Los 9 bloques irrenunciables", path: "/tema26#bloques-irrenunciables" },
      { title: "26.4 SEO on-page en la home", path: "/tema26#seo-home" },
      { title: "26.5 Workflow en Elementor", path: "/tema26#workflow-elementor" },
      { title: "26.6 Actividades prácticas", path: "/tema26#actividades" },
    ],
  },

  {
    title: "M27 · Subir tu proyecto WordPress a GitHub",
    path: "/tema27",
    children: [
      { title: "27.1 Qué es Git y qué aporta a WordPress", path: "/tema27#que-es-git" },
      { title: "27.2 Qué se sube a GitHub y qué NO", path: "/tema27#que-subir" },
      { title: "27.3 Estructura recomendada del repositorio", path: "/tema27#estructura-repo" },
      { title: "27.4 Crear el .gitignore (WordPress + seguridad)", path: "/tema27#gitignore" },
      { title: "27.5 Crear un README profesional", path: "/tema27#readme" },
      { title: "27.6 Dónde guardar pantallazos para el README", path: "/tema27#pantallazos" },
      { title: "27.7 Cómo subirlo a GitHub (paso a paso)", path: "/tema27#subir-a-github" },
      { title: "27.8 Checklist final + errores típicos", path: "/tema27#checklist" },
      { title: "27.9 Práctica evaluable", path: "/tema27#practica" },
    ],
  },

  {
    title: "M28 · Hooks en WordPress: Actions y Filters",
    path: "/tema28",
    children: [
      { title: "28.1 Ya los has usado sin saberlo", path: "/tema28#ya-los-usaste" },
      { title: "28.2 ¿Qué es un hook?", path: "/tema28#que-es-un-hook" },
      { title: "28.3 Cómo funciona por dentro", path: "/tema28#como-funciona" },
      { title: "28.4 Action Hooks: ejecutar código", path: "/tema28#actions" },
      { title: "28.5 Filter Hooks: modificar datos", path: "/tema28#filters" },
      { title: "28.6 Diferencia entre Action y Filter", path: "/tema28#diferencia" },
      { title: "28.7 Crea tu primer hook (paso a paso)", path: "/tema28#primer-hook" },
      { title: "28.8 Hooks más usados en WordPress", path: "/tema28#hooks-comunes" },
      { title: "28.9 Ejemplo real: encolado condicional", path: "/tema28#ejemplo-proyecto" },
      { title: "28.10 Hooks del tema Astra", path: "/tema28#hooks-astra" },
      { title: "28.11 Práctica evaluable", path: "/tema28#practica" },
    ],
  },

  {
    title: "M29 · Exportar tu proyecto WordPress con LocalWP",
    path: "/tema29",
    children: [
      { title: "29.1 ¿Qué hay que exportar exactamente?", path: "/tema29#que-se-exporta" },
      { title: "29.2 Exportar el sitio desde LocalWP", path: "/tema29#localwp-export" },
      { title: "29.3 ¿Qué contiene el archivo exportado?", path: "/tema29#que-contiene-el-zip" },
      { title: "29.4 Llevarte el archivo a casa", path: "/tema29#llevar-archivo" },
      { title: "29.5 Instalar LocalWP en casa", path: "/tema29#instalar-localwp" },
      { title: "29.6 Importar el sitio en LocalWP", path: "/tema29#importar" },
      { title: "29.7 Primeros pasos después de importar", path: "/tema29#primeros-pasos" },
      { title: "29.8 Problemas comunes y soluciones", path: "/tema29#problemas-comunes" },
      { title: "29.9 Práctica evaluable", path: "/tema29#practica" },
    ],
  },

  {
    title: "M30 · Configuración de Productos en WooCommerce",
    path: "/tema30",
    children: [
      { title: "30.1 Qué estamos construyendo cuando creamos un producto", path: "/tema30#vision-general" },
      { title: "30.2 Anatomía completa de una ficha de producto en WooCommerce", path: "/tema30#estructura-ficha" },
      { title: "30.3 Producto simple: la base de todo", path: "/tema30#producto-simple" },
      { title: "30.4 Producto variable: tallas, colores y combinaciones", path: "/tema30#producto-variable" },
      { title: "30.5 Atributos y variaciones", path: "/tema30#atributos-variaciones" },
      { title: "30.6 Inventario, stock y SKU", path: "/tema30#inventario-stock" },
      { title: "30.7 Imágenes de producto: coherencia visual del catálogo", path: "/tema30#imagenes-producto" },
      { title: "30.8 Títulos, descripciones y SEO de producto", path: "/tema30#textos-seo-producto" },
      { title: "30.9 Categorías, etiquetas y organización del catálogo", path: "/tema30#categorias-etiquetas" },
      { title: "30.10 Workflow profesional para cargar productos", path: "/tema30#workflow-profesional" },
      { title: "30.11 Actividades prácticas", path: "/tema30#actividades" },
    ],
  },

  {
    title: "M36 · La estructura de WordPress: cómo se organiza una web",
    path: "/tema36",
    children: [
      { title: "36.1 Arquitectura general de WordPress", path: "/tema36#arquitectura-general" },
      { title: "36.2 Elementos estructurales de una página", path: "/tema36#elementos-estructurales" },
      { title: "36.3 El papel del tema en la estructura", path: "/tema36#tema" },
      { title: "36.4 Desde dónde se controla la estructura", path: "/tema36#donde-se-controla" },
      { title: "36.5 Relación con constructores como Elementor", path: "/tema36#constructores" },
      { title: "36.6 Estructura de una tienda WooCommerce", path: "/tema36#estructura-tienda" },
      { title: "36.7 Widgets en WordPress", path: "/tema36#widgets" },
      { title: "36.8 Flujo profesional para diseñar un sitio", path: "/tema36#flujo-profesional" },
      { title: "36.9 Diagrama de la arquitectura de WordPress", path: "/tema36#diagrama-arquitectura-wordpress" },
      { title: "36.10 Cómo se genera una página paso a paso", path: "/tema36#flujo-render-wordpress" },
    ],
  },

  {
    title: "M31 · Carrito, Checkout y Proceso de Compra en WooCommerce",
    path: "/tema31",
    children: [
      { title: "31.1 El flujo completo de compra: de la intención al pedido", path: "/tema31#flujo-compra" },
      { title: "31.2 La página de carrito: primera gran prueba de confianza", path: "/tema31#pagina-carrito" },
      { title: "31.3 La página de checkout: donde se gana o se pierde la venta", path: "/tema31#pagina-checkout" },
      { title: "31.4 Métodos de pago: qué opciones activar", path: "/tema31#metodos-pago" },
      { title: "31.5 Envíos: zonas, métodos y lógica comercial", path: "/tema31#metodos-envio" },
      { title: "31.6 Estados del pedido y emails automáticos", path: "/tema31#estados-emails" },
      { title: "31.7 Abandono de carrito: por qué ocurre y cómo reducirlo", path: "/tema31#abandono-carrito" },
      { title: "31.8 Plugins útiles para mejorar carrito y checkout", path: "/tema31#plugins-checkout" },
      { title: "31.9 Workflow profesional: prueba real de compra", path: "/tema31#workflow-prueba" },
      { title: "31.10 Actividades prácticas", path: "/tema31#actividades" },
    ],
  },

  {
    title: "M32 · Diseño y Optimización de la Ficha de Producto en WooCommerce",
    path: "/tema32",
    children: [
      { title: "32.1 Por qué la ficha de producto es la página más crítica", path: "/tema32#importancia-ficha" },
      { title: "32.2 Anatomía completa de una ficha de producto profesional", path: "/tema32#anatomia-ficha" },
      { title: "32.3 Los bloques que más influyen en la conversión", path: "/tema32#bloques-clave" },
      { title: "32.4 Descripción larga, información adicional y reseñas", path: "/tema32#pestanas-inferiores" },
      { title: "32.5 Productos relacionados, upselling y cross-selling", path: "/tema32#relacionados-upsell" },
      { title: "32.6 SEO on-page en la ficha de producto", path: "/tema32#seo-ficha" },
      { title: "32.7 La ficha en móvil: donde más se rompe el diseño", path: "/tema32#mobile-producto" },
      { title: "32.8 Workflow profesional para revisar una ficha antes de publicarla", path: "/tema32#workflow-ficha" },
      { title: "32.9 Actividades prácticas", path: "/tema32#actividades" },
    ],
  },

  {
    title: "M33 · WooCommerce en Elementor: shortcodes, límites y CSS",
    path: "/tema34",
    children: [
      { title: "33.1 Objetivos del tema", path: "/tema34#objetivos" },
      { title: "33.2 Arquitectura: Gutenberg, Elementor y WooCommerce", path: "/tema34#arquitectura" },
      { title: "33.3 Por qué no se mezclan Elementor y WooCommerce", path: "/tema34#por-que-no-se-mezclan" },
      { title: "33.4 Qué es un shortcode y por qué es la solución", path: "/tema34#que-es-shortcode" },
      { title: "33.5 Cómo insertar un shortcode en Elementor", path: "/tema34#como-insertarlo" },
      { title: "33.6 Cómo generar shortcodes de WooCommerce", path: "/tema34#generar-shortcodes" },
      { title: "33.7 Parámetros más importantes de los shortcodes", path: "/tema34#parametros" },
      { title: "33.8 Ejemplos prácticos para una landing page", path: "/tema34#ejemplos" },
      { title: "33.9 Modificar el CSS del resultado del shortcode", path: "/tema34#css" },
      { title: "33.10 Flujo profesional de trabajo", path: "/tema34#flujo" },
      { title: "33.11 Errores frecuentes del alumnado", path: "/tema34#errores" },
      { title: "33.12 Actividad guiada", path: "/tema34#actividad" },
      { title: "33.13 Resumen final del tema", path: "/tema34#resumen" },
    ],
  },

  {
    title: "M34 · Maquetar páginas con bloques de WooCommerce",
    path: "/tema35",
    children: [
      { title: "34.1 Visión general: Elementor y bloques de WooCommerce", path: "/tema35#vision-general" },
      { title: "34.2 Qué páginas conviene hacer con cada sistema", path: "/tema35#criterio-paginas" },
      { title: "34.3 Esquema de decisión por tipo de página", path: "/tema35#tabla-decision" },
      { title: "34.4 Bloques de WooCommerce que más aportan", path: "/tema35#bloques-aportan" },
      { title: "34.5 Maquetar la página Tienda", path: "/tema35#pagina-tienda" },
      { title: "34.6 Aplicación en páginas de producto", path: "/tema35#pagina-producto" },
      { title: "34.7 Aplicación en carrito y checkout", path: "/tema35#pagina-carrito-checkout" },
      { title: "34.8 Metodología profesional de trabajo", path: "/tema35#metodologia" },
      { title: "34.9 Errores frecuentes", path: "/tema35#errores" },
      { title: "34.10 Práctica guiada", path: "/tema35#practica-guiada" },
      { title: "34.11 Actividad para el alumnado", path: "/tema35#actividad" },
      { title: "34.12 Resumen final", path: "/tema35#resumen" },
    ],
  },

  {
    title: "M35 · SEO para WooCommerce: Arquitectura, Fichas, Categorías e Imágenes",
    path: "/tema33",
    children: [
      { title: "35.1 Qué significa hacer SEO en WooCommerce", path: "/tema33#seo-ecommerce" },
      { title: "35.2 Arquitectura SEO: categorías, subcategorías y productos", path: "/tema33#arquitectura-categorias" },
      { title: "35.3 URLs, títulos SEO y meta descriptions", path: "/tema33#urls-metadatos" },
      { title: "35.4 SEO de categorías y SEO de fichas: diferencias clave", path: "/tema33#seo-categorias-fichas" },
      { title: "35.5 Por qué optimizar imágenes es obligatorio en WooCommerce", path: "/tema33#imagenes-seo" },
      { title: "35.6 Optimización de imágenes de forma externa", path: "/tema33#optimizacion-externa" },
      { title: "35.7 Optimización de imágenes dentro de WordPress", path: "/tema33#optimizacion-interna" },
      { title: "35.8 Cómo afecta esto específicamente a WooCommerce", path: "/tema33#imagenes-woocommerce" },
      { title: "35.9 Nombre de archivo, texto alternativo y contexto semántico", path: "/tema33#nombres-alt" },
      { title: "35.10 Checklist SEO de rendimiento para una tienda WooCommerce", path: "/tema33#velocidad-checklist" },
      { title: "35.11 Actividades prácticas", path: "/tema33#actividades" },
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
