import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema5Index() {
  return (
    <TopicLayout
      title="M5 · Plugins: funcionalidades esenciales"
      subtitle="Domina los plugins de WordPress: qué son, cuáles instalar y cómo gestionar un ecosistema seguro"
    >
    
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 5</div>
          <h1>Plugins: funcionalidades esenciales</h1>
          <p className="doc-lead">
            Domina los plugins de WordPress: qué son, cuáles instalar y cómo gestionar un ecosistema seguro
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#que-son-plugins">Qué son los plugins y cómo funcionan</a></li>
            <li><a href="#instalacion">Instalación y gestión</a></li>
            <li><a href="#plugins-esenciales">Plugins esenciales para todo sitio</a></li>
            <li><a href="#seguridad-plugins">Seguridad y mantenimiento</a></li>
            <li><a href="#problemas-comunes">Problemas comunes y solución</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Los plugins extienden las funcionalidades de WordPress. Al finalizar este módulo sabrás seleccionar, 
            instalar y gestionar plugins como un profesional, evitando los errores que pueden arruinar un sitio web.
          </p>
        </TipBox>

      

<section className="doc-section" id="que-son-plugins">
  <h2>5.1 Qué son los plugins y cómo funcionan</h2>

          <details className="dd" open>
            <summary>Definición y arquitectura</summary>
            <div className="dd-body">
      <p>
        Los plugins son piezas de software que extienden WordPress sin modificar su código central.
        Es como instalar apps en tu móvil: cada plugin añade nuevas funcionalidades específicas.
      </p>

      <h3>🧩 WordPress + Plugins = Sitio completo</h3>
      <ul>
        <li><strong>WordPress core:</strong> Funcionalidades básicas (posts, páginas, usuarios)</li>
        <li><strong>+ Plugin SEO:</strong> Optimización para buscadores</li>
        <li><strong>+ Plugin seguridad:</strong> Protección contra ataques</li>
        <li><strong>+ Plugin formularios:</strong> Contacto, suscripciones, presupuestos</li>
        <li><strong>+ Plugin backups:</strong> Copias de seguridad automáticas</li>
        <li><strong>= Sitio web profesional completo</strong></li>
      </ul>

      <p><strong>¿Cómo funcionan técnicamente?</strong></p>
      <p>
        WordPress tiene un sistema de <em>hooks</em> (ganchos) que permiten a los plugins ejecutar código
        en momentos específicos sin modificar el core. Es una arquitectura muy inteligente y flexible.
      </p>

      <p>
        WordPress tiene un sistema de "hooks" (ganchos) que permiten a los plugins "engancharse"
        a diferentes momentos de ejecución. Por ejemplo:
      </p>

      <pre style={{
        background: '#01080f',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'auto'
      }}>
<code>{`Usuario visita página → WordPress carga →
Plugin SEO añade metadatos →
Plugin caché optimiza →
Plugin seguridad verifica →
Página se muestra`}</code>
      </pre>
    </div>
  </details>
</section>
<section className="doc-section" id="que-son-plugins">
  <h2>5.2 Plugins imprescindibles para cualquier web</h2>

          <details className="dd" open>
            <summary>Plugins que tienes que conocer</summary>
            <div className="dd-body"></div>
     
    

      <p>
        Hay plugins que te vas a encontrar en el 95% de proyectos. 
        Son tan esenciales como los cimientos de una casa.
      </p>

      <WarningBox>
        <p>
          <strong>⚠️ Regla de oro:</strong> Menos plugins = mejor sitio. Cada plugin añade código, 
          potenciales vulnerabilidades y puntos de fallo. Solo instala lo que realmente necesites.
        </p>
      </WarningBox>
      <section className="doc-section">
  <h2>Introducción a los plugins en WordPress</h2>

  <div className="media">
    <div className="media-video">
      <iframe
        src="https://www.youtube.com/embed/iZ-CjF9-pB8"
        title="Introducción a los plugins en WordPress"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <p className="muted">
      Vídeo explicativo sobre qué son los plugins y cómo amplían las funcionalidades de WordPress.
    </p>
  </div>

  <p>
    En este vídeo se explica qué son los <strong>plugins de WordPress</strong> y por qué son una
    pieza fundamental del sistema. Los plugins permiten <strong>añadir nuevas funciones sin
    necesidad de programar</strong>, como formularios de contacto, tiendas online, mejoras de
    seguridad, optimización SEO o copias de seguridad. Gracias a ellos, WordPress puede adaptarse
    a casi cualquier tipo de proyecto sin modificar el núcleo del sistema.
  </p>
</section>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', margin: '20px 0' }}>
        <div style={{ padding: '16px', background: '#e8f5e8', border: '1px solid #c3e6c3', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#155724' }}>🔍 SEO</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>Yoast SEO (gratuito)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Optimización para buscadores. Títulos, descripciones, sitemaps, 
            análisis de contenido. Imprescindible para aparecer en Google.
          </p>
        </div>

        <div style={{ padding: '16px', background: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#856404' }}>🛡️ SEGURIDAD</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>Wordfence (gratuito)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Firewall, scanner de malware, bloqueo de IPs maliciosas. 
            Tu primera línea de defensa contra ataques.
          </p>
        </div>

        <div style={{ padding: '16px', background: '#d1ecf1', border: '1px solid #bee5eb', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#0c5460' }}>💾 COPIAS</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>UpdraftPlus (gratuito)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Copias automáticas a Google Drive, Dropbox, etc. 
            Cuando algo sale mal, esto te salvará el proyecto.
          </p>
        </div>

        <div style={{ padding: '16px', background: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#721c24' }}>📝 FORMULARIOS</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>Contact Form 7 (gratuito)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Formularios de contacto, presupuestos, suscripciones. 
            Fácil de usar y extremadamente flexible.
          </p>
        </div>

        <div style={{ padding: '16px', background: '#e2e3ff', border: '1px solid #c5c6ff', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#3730a3' }}>⚡ RENDIMIENTO</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>WP Rocket (premium) / W3 Total Cache (gratuito)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Caché, minificación, compresión de imágenes. 
            Sitios 3x más rápidos = mejor SEO y conversiones.
          </p>
        </div>

        <div style={{ padding: '16px', background: '#fce4ec', border: '1px solid #f8bbd9', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 8px', color: '#880e4f' }}>🏗️ CONSTRUCCIÓN</h4>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>Elementor (freemium)</p>
          <p style={{ margin: '8px 0 0', fontSize: '0.95rem' }}>
            Constructor visual drag & drop. Perfecto para crear 
            páginas complejas sin tocar código.
          </p>
        </div>
      </div>

      <ActivityBox title="🔧 Instalación del stack básico profesional">
        <p><strong>Vamos a instalar los 4 plugins esenciales:</strong></p>
        <ol>
          <li>Ve a <strong>Plugins → Añadir nuevo</strong></li>
          <li><strong>Busca e instala:</strong>
            <ul>
              <li>"Yoast SEO" → Instalar → Activar</li>
              <li>"Wordfence Security" → Instalar → Activar</li>
              <li>"UpdraftPlus" → Instalar → Activar</li>
              <li>"Contact Form 7" → Instalar → Activar</li>
            </ul>
          </li>
          <li><strong>¡Perfecto!</strong> Ya tienes la base de plugins que usa todo profesional</li>
        </ol>
        <p><em>Configuraremos cada uno en sus respectivos módulos (SEO en M8, etc.)</em></p>
      </ActivityBox>
  </details>
</section>
<section className="doc-section" id="plugins-hosting">
  <h2>5.3 ¿Siempre hay que instalar plugins?</h2>

  <details className="dd">
    <summary>Plugins vs funcionalidades del hosting</summary>
    <div className="dd-body">

      <p>
        Un error habitual es pensar que todo se resuelve instalando plugins.
        En muchos proyectos profesionales, el <strong>hosting ya cubre funciones clave</strong>.
      </p>

      <h4>🔐 Seguridad</h4>
      <ul>
        <li>Firewall</li>
        <li>Bloqueo de fuerza bruta</li>
        <li>Escaneo de malware</li>
      </ul>

      <h4>⚡ Caché y rendimiento</h4>
      <ul>
        <li>Caché a nivel servidor</li>
        <li>CDN</li>
        <li>Optimización PHP</li>
      </ul>

      <WarningBox>
        <p>
          <strong>Conclusión:</strong> antes de instalar plugins de seguridad o caché,
          revisa qué incluye tu hosting.
        </p>
      </WarningBox>

    </div>
  </details>
</section>


<section className="doc-section" id="tema-vs-plantilla">
          <h2>5.4 Plugins por tipo de proyecto</h2>

          <details className="dd" open>
            <summary>¿Para qué se usa cada plugin?</summary>
            <div className="dd-body"></div>
      

      <p>
        Según el tipo de sitio web que construyas, necesitarás plugins específicos. Como ya sabes lo primero es siempre tener una idea clara de que necesitamos, qué funcionalidades y qué objetivos tiene el proyecto.
      
        Aquí tienes los stacks profesionales por sector más habituales. 
        Un stack profesional es el “equipo de herramientas” que necesita una web según lo que tenga que hacer. 
        Siempre dependerá de nuestro diseño y de lo negociado con el cliente. 
      </p>

      <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 12px', color: '#16a66d' }}>🏢 WEB CORPORATIVA</h4>
        <ul>
          <li><strong>Stack básico</strong> + Testimonials, Events Calendar, Team Members</li>
        </ul>

        <h4 style={{ margin: '16px 0 12px', color: '#16a66d' }}>🛒 TIENDA ONLINE</h4>
        <ul>
          <li><strong>Stack básico</strong> + WooCommerce, Payment Gateway, Inventory Management</li>
        </ul>

        <h4 style={{ margin: '16px 0 12px', color: '#16a66d' }}>📝 BLOG/REVISTA</h4>
        <ul>
          <li><strong>Stack básico</strong> + Social Share, Related Posts, Email Subscription</li>
        </ul>

        <h4 style={{ margin: '16px 0 12px', color: '#16a66d' }}>🎨 PORTFOLIO</h4>
        <ul>
          <li><strong>Stack básico</strong> + Gallery, Lightbox, Portfolio Post Type</li>
        </ul>
      </div>
    </details>
  </section>

  <section className="doc-section" id="instalacion">
    <h2>5.5 Instalación y gestión de plugins</h2>
     <details className="dd" open>
    <summary>Instalación y gestión de plugins</summary>
    <div className="dd-body">

      <p>
        Hay varias formas de instalar plugins. Cada método tiene su momento según 
        el origen del plugin y el contexto del proyecto.
      </p>

      <PracticeBox title="📦 Métodos de instalación de plugins">
        <h4>Método 1: Repositorio WordPress (plugins gratuitos)</h4>
        <ol>
          <li>Plugins → Añadir nuevo</li>
          <li>Buscar por nombre o funcionalidad</li>
          <li>Verificar valoraciones y descargas</li>
          <li>Instalar → Activar</li>
        </ol>

        <h4>Método 2: Subir ZIP (plugins premium)</h4>
        <ol>
          <li>Plugins → Añadir nuevo → Subir plugin</li>
          <li>Seleccionar archivo .zip</li>
          <li>Instalar → Activar</li>
        </ol>

        <h4>Método 3: FTP (desarrolladores)</h4>
        <ol>
          <li>Descomprimir plugin en <code>/wp-content/plugins/</code></li>
          <li>Activar desde wp-admin</li>
        </ol>
      </PracticeBox>
    </div>
  </details>
</section>
<section className="doc-section" id="seguridad-plugins">
  <h2>5.6 Seguridad: qué plugins evitar</h2>

  <details className="dd" open>
    <summary>Riesgos reales al instalar plugins</summary>
    <div className="dd-body">

      <p>
        No todos los plugins son seguros. Un solo plugin mal elegido puede
        <strong> comprometer completamente tu sitio web</strong>, robar datos,
        insertar malware o provocar caídas constantes.
      </p>

      <p>
        La seguridad en WordPress no consiste en instalar muchos plugins,
        sino en <strong>saber cuáles NO instalar</strong>.
      </p>

      <WarningBox>
        <p>
          <strong>Idea clave:</strong> la mayoría de hackeos en WordPress
          no se producen por el core, sino por plugins inseguros o mal mantenidos.
        </p>
      </WarningBox>

      <h3>🚨 Plugins que debes evitar SIEMPRE</h3>
      <ul>
        <li>
          ❌ <strong>Plugins “nulled” o pirateados:</strong><br />
          Versiones premium modificadas que suelen incluir puertas traseras,
          malware o código oculto.
        </li>
        <li>
          ❌ <strong>Plugins descargados fuera del repositorio oficial:</strong><br />
          Sitios de descargas no oficiales o foros dudosos.
        </li>
        <li>
          ❌ <strong>Plugins sin actualizaciones:</strong><br />
          Si no se actualizan desde hace más de 1–2 años, son un riesgo.
        </li>
        <li>
          ❌ <strong>Plugins con muy pocas instalaciones activas:</strong><br />
          Menos de 1.000 instalaciones suele indicar falta de mantenimiento o pruebas.
        </li>
        <li>
          ❌ <strong>Plugins con malas valoraciones repetidas:</strong><br />
          Especialmente si hablan de errores graves o problemas de seguridad.
        </li>
      </ul>

      <h3>🚩 Señales claras de peligro antes de instalar</h3>
      <div
        style={{
          background: "#f8d7da",
          padding: "16px",
          border: "1px solid #f5c6cb",
          borderRadius: "12px",
          marginBottom: "16px",
        }}
      >
        <ul>
          <li>🚩 Última actualización hace más de 12 meses</li>
          <li>🚩 No es compatible con la versión actual de WordPress</li>
          <li>🚩 Solicita permisos excesivos sin explicación</li>
          <li>🚩 No tiene documentación ni soporte</li>
          <li>🚩 Promete “hacer de todo” en un solo plugin</li>
        </ul>
      </div>

      <h3>🧠 Errores típicos de principiantes</h3>
      <ul>
        <li>Instalar plugins “por probar” y dejarlos activos</li>
        <li>Desactivar pero no desinstalar plugins</li>
        <li>Duplicar funcionalidades (dos plugins haciendo lo mismo)</li>
        <li>No revisar compatibilidad tras actualizar WordPress</li>
      </ul>

      <TipBox title="🔍 Checklist de seguridad antes de instalar un plugin">
        <ol>
          <li>✅ ¿Está en el repositorio oficial de WordPress?</li>
          <li>✅ ¿Tiene más de 10.000 instalaciones activas?</li>
          <li>✅ ¿Se ha actualizado en los últimos 6 meses?</li>
          <li>✅ ¿Tiene valoración media de 4 estrellas o más?</li>
          <li>✅ ¿El desarrollador es conocido o tiene otros plugins?</li>
          <li>✅ ¿Realmente necesito esta funcionalidad?</li>
        </ol>
      </TipBox>

      <p>
        Si un plugin no pasa este checklist, <strong>no se instala</strong>.
        No hay excepciones en proyectos profesionales.
      </p>

    </div>
  </details>
</section>


      <section className="doc-section" id="woocommerce">
  <h2>5.7 WooCommerce: la tienda online</h2>

 <details className="dd">
  <summary>Por qué WooCommerce es un plugin y cómo convierte WordPress en una tienda</summary>
  <div className="dd-body">

    <p>
      WordPress no es una tienda online por defecto. De forma nativa, WordPress solo gestiona
      contenidos (entradas, páginas, usuarios).  
      <strong>WooCommerce es el plugin que añade toda la lógica de comercio electrónico</strong>.
    </p>

    <h4>🛒 ¿Qué añade WooCommerce a WordPress?</h4>
    <ul>
      <li>Gestión de <strong>productos</strong> (simples, variables, descargables)</li>
      <li>Sistema de <strong>carrito</strong> y proceso de compra (checkout)</li>
      <li>Gestión de <strong>pedidos</strong> y estados</li>
      <li>Configuración de <strong>pagos</strong> (tarjeta, PayPal, transferencia…)</li>
      <li>Control de <strong>stock</strong> y envíos</li>
      <li>Emails automáticos al cliente y al administrador</li>
    </ul>

    <p>
      Técnicamente, WooCommerce crea nuevos tipos de contenido, añade tablas propias a la base de datos
      y se integra profundamente en el sistema de hooks de WordPress.
    </p>

    <h4>❓ ¿Es el único plugin para crear tiendas online?</h4>
    <p>
      <strong>No.</strong> Existen otros plugins de comercio electrónico, pero WooCommerce es,
      con mucha diferencia, el estándar profesional.
    </p>

    <ul>
      <li><strong>WooCommerce:</strong> El más usado, flexible y con mayor ecosistema</li>
      <li><strong>Easy Digital Downloads:</strong> Especializado en productos digitales</li>
      <li><strong>SureCart / Ecwid:</strong> Soluciones más cerradas o externas</li>
    </ul>

    <WarningBox>
      <p>
        <strong>Conclusión profesional:</strong><br />
        Si el proyecto es una tienda general (física o digital),
        <strong>WooCommerce es la opción recomendada en el 95% de los casos</strong>.
      </p>
    </WarningBox>

    <h4>🔌 Plugins que suelen ir ligados a WooCommerce</h4>
    <p>
      WooCommerce rara vez se usa solo. En proyectos reales suele acompañarse de plugins
      específicos según las necesidades de la tienda.
    </p>

    <ul>
      <li><strong>Pasarelas de pago:</strong> Stripe, PayPal, Redsys</li>
      <li><strong>Envíos:</strong> Envío por zonas, tarifas avanzadas</li>
      <li><strong>Facturación:</strong> Facturas PDF automáticas</li>
      <li><strong>SEO:</strong> Integración con Yoast / Rank Math</li>
      <li><strong>Optimización:</strong> Caché compatible con WooCommerce</li>
      <li><strong>Marketing:</strong> Cupones, descuentos, emails</li>
    </ul>

    <TipBox title="🎯 Idea clave para el alumno">
      <p>
        WooCommerce no es “un plugin más”.  
        Es el <strong>motor completo de la tienda</strong>.
        El resto de plugins solo amplían o especializan su funcionamiento.
      </p>
    </TipBox>

  </div>
</details>

</section>
<section className="doc-section" id="formularios">
  <h2>5.8 Plugins de formularios</h2>

  <details className="dd" open>
    <summary>Contacto, presupuestos, inscripciones y newsletters</summary>
    <div className="dd-body">

      <p>
        Los formularios son esenciales para cualquier web profesional:
        <strong> sin formularios no hay contactos, leads ni negocio</strong>.
        Son el principal punto de entrada de usuarios hacia el cliente.
      </p>

      <h4>📌 Usos habituales de los formularios</h4>
      <ul>
        <li><strong>Contacto:</strong> mensajes directos desde la web</li>
        <li><strong>Presupuestos:</strong> solicitudes estructuradas</li>
        <li><strong>Inscripciones:</strong> cursos, eventos, citas</li>
        <li><strong>Newsletter:</strong> captación de correos</li>
        <li><strong>Procesos internos:</strong> formularios privados o internos</li>
      </ul>

      <h3>🔌 Plugins más usados para formularios</h3>

      <h4>📝 Contact Form 7 (gratuito)</h4>
      <p>
        Es el plugin de formularios más clásico de WordPress.
        Muy ligero, fiable y ampliamente compatible.
      </p>
      <ul>
        <li>Ideal para formularios simples</li>
        <li>Contacto, solicitudes básicas</li>
        <li>Requiere algo de configuración manual</li>
      </ul>

      <h4>🧩 WPForms (freemium)</h4>
      <p>
        Enfocado a usuarios que quieren rapidez y facilidad.
        Utiliza constructor visual tipo drag & drop.
      </p>
      <ul>
        <li>Formularios visuales sin código</li>
        <li>Muy usado para pequeñas empresas</li>
        <li>Funciones avanzadas en versión de pago</li>
      </ul>

      <h4>⚙️ Gravity Forms (premium)</h4>
      <p>
        Solución profesional para proyectos complejos.
        Muy potente y extensible.
      </p>
      <ul>
        <li>Formularios avanzados y condicionales</li>
        <li>Integraciones con pagos, CRM, automatizaciones</li>
        <li>Muy usado en proyectos grandes y a medida</li>
      </ul>

      <h3>📩 Formularios de newsletter</h3>
      <p>
        Para captación de correos electrónicos no siempre se usa
        un plugin de formularios general.
      </p>

      <ul>
        <li><strong>Mailchimp for WordPress:</strong> integración directa con Mailchimp</li>
        <li><strong>Newsletter Plugin:</strong> gestión de newsletters desde WordPress</li>
        <li><strong>WPForms / Gravity Forms:</strong> con integraciones externas</li>
      </ul>

      <TipBox title="💡 Consejo profesional">
        <p>
          Para newsletters y marketing, lo habitual es
          <strong> conectar el formulario con una herramienta externa</strong>
          (Mailchimp, Brevo, etc.), no gestionar los correos directamente en WordPress.
        </p>
      </TipBox>

      <h3>🛠️ ¿Cómo se crea un formulario en WordPress?</h3>
      <ol>
        <li>Se instala el plugin de formularios</li>
        <li>Se crea el formulario desde el panel del plugin</li>
        <li>Se definen los campos (nombre, email, mensaje…)</li>
        <li>Se configuran notificaciones por email</li>
        <li>Se inserta en la página mediante bloque o shortcode</li>
      </ol>

      <WarningBox>
        <p>
          <strong>Importante:</strong> siempre prueba el formulario tras crearlo.
          Muchos errores en webs reales vienen de formularios que nadie comprobó.
        </p>
      </WarningBox>

    </div>
  </details>
</section>

<section className="doc-section" id="reservas">
  <h2>5.9 Plugins de reservas</h2>

  <details className="dd" open>
    <summary>Cuándo usar un sistema de reservas y qué plugin elegir</summary>
    <div className="dd-body">

      <p>
        Los plugins de reservas se utilizan cuando una web necesita
        <strong> gestionar citas, horarios, disponibilidad o aforos</strong>.
        No es solo mostrar información: es permitir que el usuario reserve.
      </p>

      <h4>📌 Casos habituales donde se usan plugins de reservas</h4>
      <ul>
        <li><strong>Clínicas y consultas:</strong> médicos, psicólogos, fisioterapia</li>
        <li><strong>Servicios profesionales:</strong> peluquerías, talleres, asesorías</li>
        <li><strong>Clases y formación:</strong> academias, yoga, idiomas</li>
        <li><strong>Alojamientos:</strong> hoteles, casas rurales, apartamentos</li>
        <li><strong>Eventos:</strong> visitas guiadas, actividades con plazas limitadas</li>
      </ul>

      <h3>🔌 Plugins de reservas más usados en WordPress</h3>

<p>
  En WordPress no existe un sistema de reservas por defecto.
  Para gestionar citas, horarios o disponibilidad necesitamos instalar
  <strong>un plugin de reservas</strong>.
</p>

<p>
  Existen plugins <strong>gratuitos</strong>, <strong>freemium</strong> (gratis con límites)
  y <strong>premium</strong>. La elección depende del tipo de proyecto y del presupuesto.
</p>

<h4>📅 Bookly (freemium)</h4>
<p>
  Uno de los plugins de reservas más populares y usados en formación.
  Muy visual y fácil de entender para reservas por horas.
</p>

<ul>
  <li>Calendario con reservas por <strong>fecha y hora</strong></li>
  <li>Gestión básica de <strong>horarios</strong></li>
  <li>Confirmaciones por <strong>email</strong></li>
  <li>Versión gratuita suficiente para <strong>aprender y prototipos</strong></li>
  <li>Funciones avanzadas (pagos, varios empleados, extras) en versión de pago</li>
</ul>

<TipBox title="Uso recomendado">
  <p>
    Bookly en su versión gratuita es ideal para aprender cómo funciona
    un sistema de reservas y para proyectos sencillos.
  </p>
</TipBox>

<h4>🗓️ Amelia (freemium / premium)</h4>
<p>
  Plugin profesional pensado para negocios de servicios.
  Muy usado en proyectos reales de clientes.
</p>

<ul>
  <li>Calendario de reservas por <strong>fecha y hora</strong></li>
  <li>Gestión de <strong>servicios y empleados</strong></li>
  <li>Eventos y citas</li>
  <li>Interfaz moderna y muy clara</li>
</ul>

<p>
  <strong>Importante:</strong> Amelia tiene una versión gratuita (Amelia Lite)
  que permite trabajar con reservas básicas y es el que vamos a usar en este curso.
  Las funciones avanzadas (pagos online, múltiples empleados, automatizaciones)
  están en la versión premium.
</p>

<h4>🏨 WP Hotel Booking / MotoPress</h4>
<p>
  Plugins orientados específicamente a <strong>alojamientos</strong>
  (hoteles, casas rurales, apartamentos turísticos).
</p>

<ul>
  <li>Reservas por <strong>noches</strong>, no por horas</li>
  <li>Gestión de <strong>habitaciones y tarifas</strong></li>
  <li>Calendarios de ocupación</li>
</ul>

<p>
  No son adecuados para citas médicas o servicios por horas,
  pero sí para proyectos de alojamiento.
</p>

<h4>🛒 WooCommerce + reservas</h4>
<p>
  En algunos proyectos, las reservas se integran dentro de WooCommerce.
</p>

<ul>
  <li>WooCommerce Bookings</li>
  <li>Las reservas se tratan como <strong>productos</strong></li>
  <li>Pagos obligatorios durante la reserva</li>
  <li>Ideal cuando hay venta directa o cobro anticipado</li>
</ul>

<WarningBox>
  <p>
    <strong>Conclusión profesional:</strong><br />
    Para aprender y para proyectos sencillos, <strong>Bookly o Amelia Lite</strong> son suficientes.
    Cuando hay pagos, varios empleados o negocio real,
    se pasa a versiones premium o a WooCommerce.
  </p>
</WarningBox>

      <TipBox title="🎯 Idea clave">
        <p>
          Si hay <strong>horarios y disponibilidad</strong>, necesitas un plugin de reservas.  
          Si además hay <strong>pagos</strong>, suele combinarse con WooCommerce.
        </p>
      </TipBox>

      <h3>🛠️ ¿Cómo funciona un sistema de reservas?</h3>
      <ol>
        <li>El administrador define horarios y servicios</li>
        <li>El usuario elige fecha y hora disponible</li>
        <li>El sistema valida la disponibilidad</li>
        <li>Se confirma la reserva (y pago si aplica)</li>
        <li>Se envían notificaciones automáticas</li>
      </ol>

      <WarningBox>
        <p>
          <strong>Importante:</strong> los sistemas de reservas afectan directamente al negocio.
          Siempre prueba reservas reales antes de entregar la web al cliente.
        </p>
      </WarningBox>

    </div>
  </details>
</section>

      
     

<section className="doc-section" id="rendimiento">
  <h2>5.10 Rendimiento y optimización</h2>

  <details className="dd" open>
    <summary>Optimizar el uso de plugins</summary>

    <div className="dd-body">
      <p>
        Cada plugin añade código que se ejecuta en tu sitio. Muchos plugins = sitio lento.
        La gestión profesional de plugins incluye optimización constante.
      </p>

      <h3>Impacto real en rendimiento</h3>
      <div
        style={{
          background: "#fff3cd",
          padding: "16px",
          border: "1px solid #ffeaa7",
          borderRadius: "12px",
          marginBottom: "16px",
        }}
      >
        <p><strong>Ejemplo real de mis proyectos:</strong></p>
        <ul>
          <li><strong>0 plugins:</strong> Sitio carga en 0.5 segundos</li>
          <li><strong>5 plugins esenciales:</strong> 1.2 segundos (aceptable)</li>
          <li><strong>15 plugins mal elegidos:</strong> 4+ segundos (desastre)</li>
          <li><strong>15 plugins optimizados:</strong> 1.8 segundos (profesional)</li>
        </ul>
        <p><em>La diferencia no está en la cantidad, sino en la calidad y configuración.</em></p>
      </div>

      <ActivityBox title="🏃‍♂️ Auditoría de rendimiento de plugins">
        <p><strong>Herramientas para medir impacto:</strong></p>
        <ol>
          <li><strong>Query Monitor (plugin gratuito):</strong> Ve qué plugins consumen más recursos</li>
          <li><strong>GTmetrix.com:</strong> Analiza velocidad general del sitio</li>
          <li><strong>P3 Plugin Profiler:</strong> Mide rendimiento específico de cada plugin</li>
        </ol>

        <p><strong>Práctica:</strong></p>
        <ol>
          <li>Instala "Query Monitor"</li>
          <li>Ve al frontend de tu sitio</li>
          <li>Mira la barra inferior: tiempo de carga y queries</li>
          <li>Identifica plugins que consumen más recursos</li>
          <li>Evalúa si realmente los necesitas</li>
        </ol>
      </ActivityBox>

      <h3>Estrategias de optimización</h3>
      <ul>
        <li>🎯 <strong>Plugin único vs múltiples:</strong> Un plugin que hace 3 cosas &gt; 3 plugins específicos</li>
        <li>🔄 <strong>Rotación de plugins:</strong> Desactiva los que no uses constantemente</li>
        <li>🧹 <strong>Limpieza regular:</strong> Desinstala (no solo desactives) lo que no uses</li>
        <li>⚙️ <strong>Configuración óptima:</strong> Desactiva características innecesarias</li>
        <li>💾 <strong>Caché de plugins:</strong> Usa sistemas de caché que optimicen la carga</li>
      </ul>

      <div
        style={{
          background: "linear-gradient(135deg, #16a66d, #147a57)",
          color: "white",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "24px",
        }}
      >
        <h3 style={{ margin: "0 0 12px" }}>🔌 ¡Dominas el ecosistema de plugins!</h3>
        <p style={{ margin: "0 0 12px", opacity: "0.95" }}>
          Ya sabes seleccionar, instalar y gestionar plugins como un profesional. Tu sitio tiene
          las funcionalidades esenciales y está optimizado para rendimiento y seguridad.
        </p>
        <p style={{ margin: "0", fontWeight: "bold" }}>
          📚 Siguiente paso: M6 · Editor de bloques (crear contenido como un pro)
        </p>
      </div>

      <TipBox title="📝 Arsenal de plugins profesionales">
        <ul>
          <li>✅ Entiendes qué son y cómo funcionan los plugins</li>
          <li>✅ Tienes instalado el stack básico profesional</li>
          <li>✅ Conoces plugins específicos por tipo de proyecto</li>
          <li>✅ Dominas todos los métodos de instalación</li>
          <li>✅ Sabes identificar y evitar plugins peligrosos</li>
          <li>✅ Puedes auditar y optimizar el rendimiento</li>
          <li>✅ Gestionas un ecosistema de plugins seguro y eficiente</li>
        </ul>
      </TipBox>
    </div>
  </details>
</section>
    </TopicLayout>
  );
}
