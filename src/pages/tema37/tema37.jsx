import TopicLayout from "../../components/TopicLayout";
import { TipBox, WarningBox, PracticeBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema37Plugins() {
  return (
    <TopicLayout>
      <article className="doc">
        <header className="doc-hero">
          <p className="doc-kicker">WordPress · Ecosistema de plugins</p>
          <h1>Guía profesional de plugins para WordPress: seguridad, tipo de sitio y criterio técnico</h1>
          <p className="doc-lead">
            Un sitio WordPress bien construido no depende de cuántos plugins tiene, sino de
            cuáles tiene y por qué. En esta guía aprenderás a seleccionar plugins con criterio
            profesional: los que deben estar en <strong>todo sitio WordPress</strong> independientemente
            de su finalidad, los específicos para <strong>tiendas WooCommerce</strong>, los orientados a
            <strong> blogs profesionales</strong> y los propios de <strong>webs corporativas</strong>.
            Además, dedicamos un bloque completo a la <strong>seguridad</strong>, que nunca es
            opcional en ningún proyecto real.
          </p>
        </header>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li><a href="#filosofia">Filosofía de plugins: menos es más, pero bien elegidos</a></li>
            <li><a href="#generales">Plugins generales para todo WordPress</a></li>
            <li><a href="#seguridad">Bloque de seguridad: los plugins imprescindibles</a></li>
            <li><a href="#ecommerce">Stack de plugins para tienda WooCommerce</a></li>
            <li><a href="#blog">Stack de plugins para blog profesional</a></li>
            <li><a href="#corporativo">Stack de plugins para web corporativa</a></li>
            <li><a href="#criterio">Cómo decide un equipo técnico qué plugins instalar</a></li>
            <li><a href="#gestion">Gestión y mantenimiento del ecosistema de plugins</a></li>
            <li><a href="#borrar">Cómo eliminar plugins correctamente</a></li>
            <li><a href="#resumen">Resumen y checklist final</a></li>
          </ol>
        </nav>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li><a href="#filosofia">1. Filosofía de plugins: menos es más, pero bien elegidos</a></li>
            <li><a href="#generales">2. Plugins generales para todo WordPress</a></li>
            <li><a href="#seguridad">3. Bloque de seguridad: los plugins imprescindibles</a></li>
            <li><a href="#ecommerce">4. Stack de plugins para tienda WooCommerce</a></li>
            <li><a href="#blog">5. Stack de plugins para blog profesional</a></li>
            <li><a href="#corporativo">6. Stack de plugins para web corporativa</a></li>
            <li><a href="#criterio">7. Cómo decide un equipo técnico qué plugins instalar</a></li>
            <li><a href="#gestion">8. Gestión y mantenimiento del ecosistema de plugins</a></li>
            <li><a href="#borrar">9. Cómo eliminar plugins correctamente</a></li>
            <li><a href="#resumen">10. Resumen y checklist final</a></li>
          </ol>
        </nav>

        {/* ═══════════════════════ 1. FILOSOFÍA ═══════════════════════ */}
        <section id="filosofia" className="doc-section">
          <h2>1. Filosofía de plugins: menos es más, pero bien elegidos</h2>
          <p>
            El repositorio oficial de WordPress.org alberga más de 60 000 plugins gratuitos.
            Añadiendo los marketplaces de plugins premium como CodeCanyon, la cifra disponible
            supera los 100 000. Ante esa oferta, el error más común de quienes empiezan es
            acumular: instalan cinco plugins de formularios, tres de SEO y cuatro de redes
            sociales pensando que "más opciones siempre es mejor".
          </p>
          <p>
            En un entorno profesional ocurre exactamente lo contrario. Cada plugin que se
            instala introduce código que se ejecuta en cada petición, consultas a la base de
            datos, archivos CSS y JavaScript que el navegador tiene que descargar, y un vector
            potencial de vulnerabilidades de seguridad. Un sitio con 40 plugins mediocres es
            técnicamente más frágil que uno con 12 plugins bien elegidos.
          </p>

          <TipBox title="Principio técnico fundamental">
            <p>
              Antes de instalar cualquier plugin, el equipo debe poder responder a estas tres
              preguntas: ¿qué problema concreto resuelve este plugin?, ¿no puede resolverse ya
              con los plugins existentes o con el propio WordPress sin añadir otro?, ¿cuál es
              el coste técnico de tenerlo instalado? Si no hay respuesta clara para las tres,
              el plugin no se instala.
            </p>
          </TipBox>

          <h3>¿Qué es realmente un plugin?</h3>
          <p>
            Un plugin es un paquete de código PHP —y opcionalmente CSS, JavaScript, imágenes y
            otros recursos— que se aloja en <code>wp-content/plugins/</code> y se engancha al
            sistema de hooks de WordPress para modificar o ampliar su comportamiento. Cuando un
            plugin está activo, WordPress lo carga en cada petición al igual que carga su propio
            núcleo. Esto significa que:
          </p>
          <ul>
            <li>Aumenta el tiempo de ejecución de PHP en cada página.</li>
            <li>Puede lanzar consultas adicionales a la base de datos MySQL.</li>
            <li>Puede añadir scripts y estilos que retrasan la carga del navegador.</li>
            <li>Puede crear tablas propias, opciones y datos en <code>wp_options</code>.</li>
            <li>
              Si tiene vulnerabilidades, expone el sitio aunque el resto del código sea
              impecable.
            </li>
          </ul>

          <h3>Los tres filtros del profesional</h3>
          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Filtro</th>
                  <th>Qué preguntarse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Necesidad real</th>
                  <td>
                    ¿El plugin resuelve un problema que existe en este proyecto o lo estoy
                    instalando "por si acaso"?
                  </td>
                </tr>
                <tr>
                  <th scope="row">Calidad técnica</th>
                  <td>
                    ¿Cuándo fue la última actualización? ¿Cuántas instalaciones activas tiene?
                    ¿Tiene buenas valoraciones y respuestas en el foro de soporte? ¿Está
                    probado con la versión actual de WordPress y PHP?
                  </td>
                </tr>
                <tr>
                  <th scope="row">Impacto en el sistema</th>
                  <td>
                    ¿Cómo afecta al tiempo de carga, a la base de datos y a la compatibilidad
                    con el resto del stack ya instalado?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <WarningBox title="El síndrome del plugin acumulador">
            <p>
              Es muy habitual en proyectos heredados encontrar 50, 60 o incluso 80 plugins
              instalados. Cuando el responsable técnico analiza el inventario suele descubrir:
              plugins duplicados que hacen lo mismo, plugins de pruebas que nunca se desactivaron,
              plugins de un cliente anterior que ya no se usan, y plugins que el programador
              original instaló "para ver cómo funcionaba". El saneamiento de ese ecosistema
              suele ser la primera tarea técnica real en un proyecto de mantenimiento.
            </p>
          </WarningBox>
        </section>

        {/* ═══════════════════════ 2. PLUGINS GENERALES ═══════════════════════ */}
        <section id="generales" className="doc-section">
          <h2>2. Plugins generales para todo WordPress</h2>
          <p>
            Hay un conjunto de funciones que todo sitio WordPress necesita independientemente de
            si es una tienda, un blog o una web corporativa. Estos no son plugins opcionales:
            son la base profesional de cualquier instalación bien gestionada.
          </p>

          <details className="dd" open>
            <summary>SEO: Rank Math SEO o Yoast SEO</summary>
            <div className="dd-body">
              <p>
                El posicionamiento en buscadores es una necesidad transversal. Sin un plugin SEO
                bien configurado, WordPress publica contenido sin metadatos optimizados, sin
                control de indexación, sin sitemap XML y sin datos estructurados.
              </p>
              <ul>
                <li>
                  <strong>Rank Math SEO:</strong> es la opción más recomendada en proyectos
                  nuevos. Ofrece análisis SEO on-page en tiempo real, generación automática de
                  sitemaps, integración con Google Search Console, datos estructurados
                  (schema.org), control de redirecciones y una versión gratuita muy completa.
                </li>
                <li>
                  <strong>Yoast SEO:</strong> el estándar histórico del sector. Sigue siendo una
                  opción sólida y estable, especialmente en proyectos con equipos de contenido
                  que ya lo conocen. Algunas funciones como el control de redirecciones o el
                  generador de schema avanzado requieren la versión premium.
                </li>
              </ul>
              <p>
                Nunca instales ambos a la vez. Son incompatibles entre sí en sus funciones
                principales y generarán conflictos de metadatos duplicados.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>Caché: WP Rocket, LiteSpeed Cache o W3 Total Cache</summary>
            <div className="dd-body">
              <p>
                WordPress genera páginas dinámicamente en cada petición: consulta la base de
                datos, procesa PHP y construye el HTML. Un plugin de caché guarda ese resultado
                estático para servirlo directamente sin repetir ese proceso, reduciendo
                dramáticamente el tiempo de respuesta del servidor.
              </p>
              <ul>
                <li>
                  <strong>WP Rocket:</strong> el estándar premium más extendido en proyectos
                  profesionales. Incluye caché de página, reducción de peticiones, carga diferida
                  de imágenes, precarga, minificación de CSS y JS y optimización de base de datos.
                  Es de pago pero su ROI en rendimiento es muy alto.
                </li>
                <li>
                  <strong>LiteSpeed Cache:</strong> gratuito y extremadamente eficiente en
                  servidores LiteSpeed (muy común en hostings modernos). Incluye optimización de
                  imágenes en WebP, caché de objetos y CDN integrado.
                </li>
                <li>
                  <strong>W3 Total Cache:</strong> opción gratuita con muchas posibilidades de
                  configuración, aunque su interfaz técnica puede abrumar a perfiles sin
                  experiencia en administración de servidores.
                </li>
              </ul>
              <WarningBox title="Conflictos de caché">
                <p>
                  No instales dos plugins de caché a la vez. Los conflictos de caché son una de
                  las causas más frecuentes de comportamientos extraños en WordPress: páginas
                  que no se actualizan o errores que "solo le pasan a algunos usuarios".
                </p>
              </WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>Backups: UpdraftPlus o All-in-One WP Migration</summary>
            <div className="dd-body">
              <p>
                Ningún proyecto serio existe sin copias de seguridad. Cuando algo falla —un
                plugin que rompe el sitio, un error de actualización, un ataque o un error
                humano— la única garantía real es la copia de seguridad.
              </p>
              <ul>
                <li>
                  <strong>UpdraftPlus:</strong> el plugin de backup más instalado del ecosistema.
                  Permite programar copias automáticas de archivos y base de datos, y
                  almacenarlas en destinos remotos: Google Drive, Dropbox, Amazon S3, OneDrive
                  o FTP. La versión gratuita es más que suficiente para la mayoría de proyectos.
                </li>
                <li>
                  <strong>All-in-One WP Migration:</strong> especialmente útil para migraciones
                  entre servidores. Exporta el sitio completo en un único archivo e importa
                  íntegro en otro servidor, resolviendo automáticamente las URLs.
                </li>
              </ul>
              <TipBox title="Regla de backup profesional">
                <p>
                  Nunca almacenes las copias de seguridad solo en el mismo servidor donde está
                  el sitio. Si el servidor falla o lo comprometen, también perderás los backups.
                  Siempre en un destino externo y geográficamente separado.
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd">
            <summary>Formularios de contacto: Contact Form 7 o WPForms</summary>
            <div className="dd-body">
              <p>
                WordPress no incluye formularios de forma nativa. Cualquier sitio, sea del tipo
                que sea, necesita al menos un formulario de contacto funcional.
              </p>
              <ul>
                <li>
                  <strong>Contact Form 7:</strong> el plugin más instalado de toda la historia de
                  WordPress. Ligero, flexible y completamente gratuito. Su configuración es
                  mediante etiquetas de shortcode y requiere cierta curva de aprendizaje, pero es
                  la opción más versátil para desarrolladores.
                </li>
                <li>
                  <strong>WPForms:</strong> interfaz visual con constructor drag-and-drop. Más
                  accesible para clientes sin perfil técnico. Su versión lite es gratuita y cubre
                  formularios básicos. La versión pro añade condicionales, pagos, encuestas y
                  lógica avanzada.
                </li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Optimización de imágenes: Smush, ShortPixel o Imagify</summary>
            <div className="dd-body">
              <p>
                Las imágenes no optimizadas son la causa número uno de sitios web lentos. Un
                plugin de optimización reduce el peso de cada imagen subida —a veces entre un
                40 % y un 80 %— sin pérdida visual perceptible.
              </p>
              <ul>
                <li>
                  <strong>Smush:</strong> fácil de usar, compresión automática al subir imágenes
                  y optimización en lote. La versión gratuita cubre la mayoría de los casos.
                </li>
                <li>
                  <strong>ShortPixel:</strong> compresión con pérdida, sin pérdida y conversión
                  a WebP. Sistema de créditos por imágenes procesadas. Uno de los más eficientes
                  en ratio calidad/peso.
                </li>
                <li>
                  <strong>Imagify:</strong> del equipo de WP Rocket. Integración excelente si ya
                  usas ese plugin de caché. Interfaz clara y resultados muy buenos.
                </li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>RGPD y cookies: Complianz, CookieYes o Real Cookie Banner</summary>
            <div className="dd-body">
              <p>
                El RGPD impone obligaciones legales en cualquier sitio que opere en la Unión
                Europea o reciba visitas europeas. Esto no es opcional y no depende del tipo de
                proyecto. Un blog personal con Google Analytics ya necesita gestionar el
                consentimiento de cookies.
              </p>
              <ul>
                <li>Banner de cookies configurable con categorías y comportamiento por región.</li>
                <li>
                  Bloqueo condicional de scripts hasta que el usuario da su consentimiento.
                </li>
                <li>
                  Página de política de privacidad y política de cookies generadas o asistidas.
                </li>
                <li>Registro de consentimientos para auditorías legales.</li>
              </ul>
            </div>
          </details>

          <PracticeBox title="Stack mínimo para cualquier nuevo proyecto WordPress">
            <p>
              Antes de empezar a construir el contenido de cualquier proyecto, este es el punto
              de partida técnico recomendado:
            </p>
            <ol>
              <li>Plugin SEO (Rank Math o Yoast — nunca los dos)</li>
              <li>Plugin de caché (según el servidor disponible)</li>
              <li>Plugin de backups (UpdraftPlus configurado con destino remoto)</li>
              <li>Plugin de formularios (Contact Form 7 o WPForms)</li>
              <li>Plugin de optimización de imágenes (ShortPixel o Smush)</li>
              <li>Plugin de cumplimiento RGPD (Complianz o CookieYes)</li>
              <li>Plugin de seguridad (ver sección 3)</li>
            </ol>
          </PracticeBox>
        </section>

        {/* ═══════════════════════ 3. SEGURIDAD ═══════════════════════ */}
        <section id="seguridad" className="doc-section">
          <h2>3. Bloque de seguridad: los plugins imprescindibles</h2>
          <p>
            WordPress alimenta aproximadamente el 43 % de todos los sitios web del mundo. Esa
            popularidad lo convierte en el objetivo número uno de ataques automatizados: bots
            que escanean instalaciones sin parchear, intentos de fuerza bruta contra el login,
            exploits de plugins vulnerables, inyecciones SQL y XSS. La seguridad no es una capa
            que se añade al final: es una disciplina que atraviesa todo el ciclo de vida del
            proyecto.
          </p>

          <h3>3.1 Firewall de aplicación web: Wordfence Security</h3>
          <p>
            Wordfence es el plugin de seguridad más usado del ecosistema WordPress. Incluye:
          </p>
          <ul>
            <li>
              <strong>Firewall de aplicación web (WAF):</strong> analiza cada petición antes de
              que llegue a WordPress y bloquea tráfico malicioso basándose en reglas que se
              actualizan continuamente.
            </li>
            <li>
              <strong>Escáner de malware:</strong> detecta archivos modificados, código inyectado,
              puertas traseras y los compara con el repositorio oficial de WordPress para
              identificar alteraciones.
            </li>
            <li>
              <strong>Protección del login:</strong> bloqueo de IPs tras intentos fallidos,
              autenticación en dos factores (2FA), CAPTCHA y protección contra ataques de
              fuerza bruta.
            </li>
            <li>
              <strong>Monitorización en tiempo real:</strong> lista de IPs bloqueadas, sesiones
              activas, usuarios conectados y tráfico sospechoso con geolocalización.
            </li>
          </ul>
          <p>
            La versión gratuita es muy completa. La versión premium añade actualizaciones en
            tiempo real de las reglas del firewall (la gratuita tiene 30 días de retraso) y
            funciones avanzadas de análisis forense ante incidentes.
          </p>

          <h3>3.2 Alternativas de nivel empresarial: Sucuri Security</h3>
          <p>
            <strong>Sucuri Security</strong> es el WAF más potente cuando el proyecto requiere
            una solución de nivel empresarial. A diferencia de Wordfence, que actúa desde
            dentro del servidor, Sucuri opera como CDN y firewall perimetral: el tráfico
            malicioso se filtra antes de llegar al servidor. Tiene coste elevado pero es la
            solución preferida para sitios de alta criticidad o con historial de ataques.
          </p>

          <h3>3.3 Ocultar la URL del login: WPS Hide Login</h3>
          <p>
            Por defecto, WordPress expone su formulario de login en <code>/wp-login.php</code>.
            Cualquier bot del mundo conoce esa ruta y la ataca de forma sistemática. WPS Hide
            Login permite cambiar esa URL por cualquier otra que el equipo defina, haciendo
            ineficaces los ataques de fuerza bruta automatizados.
          </p>
          <WarningBox title="Guardar la URL personalizada del login">
            <p>
              Si cambias la URL del login con WPS Hide Login y olvidas la nueva ruta, puedes
              quedarte bloqueado fuera de tu propio sitio. Documenta la URL personalizada en la
              ficha del proyecto o en el <code>wp-config.php</code> como comentario de equipo.
            </p>
          </WarningBox>

          <h3>3.4 Hardening técnico sin plugins adicionales</h3>
          <p>
            La seguridad en WordPress no depende solo de plugins. Hay acciones de hardening a
            nivel de servidor y configuración que un equipo técnico debe aplicar en todo proyecto:
          </p>
          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Acción</th>
                  <th>Dónde</th>
                  <th>Por qué</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Desactivar edición de archivos desde el panel</th>
                  <td><code>wp-config.php</code></td>
                  <td>
                    Impide que si alguien accede al panel de admin pueda modificar archivos PHP
                    del tema o plugins directamente
                  </td>
                </tr>
                <tr>
                  <th scope="row">Forzar SSL / HTTPS en todo el sitio</th>
                  <td>Servidor + <code>wp-config.php</code></td>
                  <td>
                    Cifra toda la comunicación entre el servidor y el navegador; requisito
                    obligatorio de las pasarelas de pago
                  </td>
                </tr>
                <tr>
                  <th scope="row">Cambiar el prefijo de la base de datos</th>
                  <td><code>wp-config.php</code> en la instalación inicial</td>
                  <td>
                    Dificulta las inyecciones SQL automatizadas que asumen el prefijo por defecto
                    <code> wp_</code>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Proteger wp-config.php con .htaccess</th>
                  <td><code>.htaccess</code> en la raíz</td>
                  <td>
                    Impide el acceso directo HTTP al archivo que contiene las credenciales de la
                    base de datos y las claves de seguridad
                  </td>
                </tr>
                <tr>
                  <th scope="row">Deshabilitar XML-RPC si no se usa</th>
                  <td><code>.htaccess</code> o filtro en functions.php</td>
                  <td>
                    XML-RPC es una vía de ataque muy explotada; permite ataques de fuerza bruta
                    amplificados si no está protegido
                  </td>
                </tr>
                <tr>
                  <th scope="row">Usar contraseñas fuertes y roles mínimos</th>
                  <td>WordPress → Usuarios</td>
                  <td>
                    La mayoría de brechas se producen por credenciales débiles o permisos
                    excesivos asignados a usuarios sin necesitarlos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="La seguridad es una cadena de capas">
            <p>
              Servidor seguro + WordPress actualizado + plugins actualizados + contraseñas
              fuertes + SSL activo + backups frecuentes: cada una es una capa que complementa
              a las demás. Si falla una, las otras mitigan el daño. Nunca se confía en una
              sola medida como solución completa.
            </p>
          </TipBox>
        </section>

        {/* ═══════════════════════ 4. ECOMMERCE / WOOCOMMERCE ═══════════════════════ */}
        <section id="ecommerce" className="doc-section">
          <h2>4. Stack de plugins para tienda WooCommerce</h2>
          <p>
            WooCommerce transforma WordPress en una plataforma ecommerce, pero el motor por sí
            solo no cubre todas las necesidades de un negocio real. En un proyecto de tienda
            online, los plugins cubren áreas funcionales muy concretas del flujo de venta.
          </p>

          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Área funcional</th>
                  <th>Qué resuelve</th>
                  <th>Plugin(s) recomendado(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Motor ecommerce</th>
                  <td>Productos, carrito, pedidos, clientes, cupones</td>
                  <td>WooCommerce (núcleo)</td>
                </tr>
                <tr>
                  <th scope="row">Pasarela de pago</th>
                  <td>Cobro con tarjeta, billeteras digitales</td>
                  <td>Stripe for WooCommerce, PayPal Payments</td>
                </tr>
                <tr>
                  <th scope="row">Envíos y logística</th>
                  <td>Métodos, tracking, carriers</td>
                  <td>Advanced Shipment Tracking, ShipStation</td>
                </tr>
                <tr>
                  <th scope="row">Experiencia de producto</th>
                  <td>Fichas más visuales, variaciones, atributos</td>
                  <td>Variation Swatches, Product Gallery Slider</td>
                </tr>
                <tr>
                  <th scope="row">Conversión</th>
                  <td>Lista de deseos, comparador, upsells</td>
                  <td>YITH Wishlist, CartFlows</td>
                </tr>
                <tr>
                  <th scope="row">Email marketing</th>
                  <td>Automatización, recuperación de carritos, fidelización</td>
                  <td>Mailchimp for WooCommerce, Klaviyo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>4.1 Pasarelas de pago: la decisión más crítica del checkout</h3>
          <p>
            La pasarela de pago es la pieza más sensible de una tienda online. Una mala
            elección genera fricciones en el checkout, aumenta los abandonos y puede erosionar
            el margen con comisiones mal negociadas.
          </p>

          <details className="dd" open>
            <summary>WooCommerce Stripe Payment Gateway</summary>
            <div className="dd-body">
              <p>
                Stripe es la pasarela más recomendada para proyectos nuevos. Integración
                nativa con WooCommerce: pago con tarjeta embebido en el checkout sin
                redirecciones, Apple Pay, Google Pay y checkout acelerado. Comisiones
                transparentes y arquitectura SCA (Strong Customer Authentication) para Europa.
              </p>
              <ul>
                <li>Checkout integrado, sin salir de la tienda</li>
                <li>Soporte para múltiples divisas</li>
                <li>Modo test completo para entornos de desarrollo</li>
                <li>Dashboard de pagos, disputas y reembolsos muy cómodo</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>WooCommerce PayPal Payments</summary>
            <div className="dd-body">
              <p>
                PayPal sigue siendo la segunda opción de pago más buscada activamente por los
                compradores. Muchos usuarios prefieren pagar con PayPal porque no tienen que
                introducir su tarjeta directamente en la tienda. Esto reduce la fricción en
                perfiles desconfiados o sin costumbre de compra online.
              </p>
              <ul>
                <li>Botones de PayPal y Pay Later integrados</li>
                <li>Confianza establecida para transacciones online</li>
                <li>Ofrece financiación automática al comprador en algunos mercados</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>WooCommerce Redsys (para España)</summary>
            <div className="dd-body">
              <p>
                Redsys es la pasarela de pago de la banca española. Muchos negocios pequeños y
                medianos tienen un TPV virtual contratado con su banco que usa la plataforma
                Redsys. El plugin de integración WooCommerce-Redsys es imprescindible en
                proyectos para clientes con ese contrato bancario que no quieren o no pueden
                migrarlo a Stripe o similar.
              </p>
            </div>
          </details>

          <h3>4.2 Conversión: mejorar el embudo de venta</h3>
          <p>
            Convertir visitas en compradores es la función crítica de cualquier tienda. Estos
            plugins mejoran puntos clave del embudo:
          </p>

          <details className="dd">
            <summary>YITH WooCommerce Wishlist — Lista de deseos</summary>
            <div className="dd-body">
              <p>
                Permite a los usuarios guardar productos favoritos. Aumenta el tiempo en la
                web, favorece el retorno y es especialmente valioso en tiendas de moda,
                decoración y regalos donde la decisión de compra no siempre es inmediata.
                La versión gratuita es muy funcional para la mayoría de casos.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>Variation Swatches for WooCommerce</summary>
            <div className="dd-body">
              <p>
                Reemplaza los desplegables de variaciones (talla, color, material) por muestras
                visuales en forma de chips de color, imágenes o botones. Mejora
                significativamente la experiencia en la ficha de producto, especialmente en
                moda, calzado, cosmética y cualquier catálogo con atributos visuales que
                merezcan mostrarse de forma más gráfica.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>CartFlows — Constructor de embudos y upsells</summary>
            <div className="dd-body">
              <p>
                Permite añadir upsells, downsells y order bumps (propuestas adicionales en el
                checkout) para aumentar el ticket medio de cada compra. También permite crear
                checkouts personalizados con diseño a medida. Muy potente para tiendas con
                estrategia de ventas definida.
              </p>
            </div>
          </details>

          <h3>4.3 Email marketing y fidelización para WooCommerce</h3>
          <p>
            Una tienda que no trabaja la fidelización solo vive de captar clientes nuevos
            constantemente, encareciendo el negocio. Los plugins de email marketing conectan
            WooCommerce con plataformas especializadas:
          </p>
          <ul>
            <li>
              <strong>Mailchimp for WooCommerce:</strong> integración gratuita y robusta.
              Sincroniza clientes, pedidos y abandono de carrito para crear automatizaciones de
              email basadas en comportamiento de compra.
            </li>
            <li>
              <strong>Klaviyo:</strong> la solución más avanzada para ecommerce de volumen
              medio-alto. Segmentación precisa, flujos automáticos y análisis de ingresos por
              campaña. Tiene coste según base de datos de contactos.
            </li>
            <li>
              <strong>WooCommerce Follow-Ups:</strong> plugin oficial de WooCommerce para
              enviar correos personalizados en momentos clave del ciclo de vida del cliente:
              post-compra, inactividad, aniversario, cumpleaños.
            </li>
          </ul>

          <h3>4.4 Plugins premium para tiendas en fase de escala</h3>
          <div className="table-wrap" tabIndex="0">
            <table className="table">
              <thead>
                <tr>
                  <th>Plugin</th>
                  <th>Qué resuelve</th>
                  <th>Cuándo invertir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">WooCommerce Subscriptions</th>
                  <td>
                    Cobros recurrentes: membresías, boxes mensuales, cuotas y mantenimientos.
                    Facturación automática semanal, mensual o anual.
                  </td>
                  <td>Cuando el negocio necesita ingresos predecibles y recurrentes.</td>
                </tr>
                <tr>
                  <th scope="row">WooCommerce Bookings</th>
                  <td>
                    Reserva de servicios, citas o alojamientos directamente desde la tienda.
                    Integra calendario, disponibilidad y confirmación automática.
                  </td>
                  <td>Negocios de servicios con reserva: spa, clínicas, academias, alquileres.</td>
                </tr>
                <tr>
                  <th scope="row">WooCommerce Product Bundles</th>
                  <td>
                    Packs de productos: kits de regalo, lotes, combinaciones. Aumenta el ticket
                    medio y ayuda a dar salida a productos con menor rotación individual.
                  </td>
                  <td>Tiendas con estrategia de venta por packs o kits de temporada.</td>
                </tr>
                <tr>
                  <th scope="row">YITH Points and Rewards</th>
                  <td>
                    Programa de puntos por compra canjeables en futuras transacciones.
                    Aumenta la retención y la frecuencia de compra.
                  </td>
                  <td>Tiendas con volumen de clientes repetidores y estrategia de fidelización.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="Stack mínimo viable para lanzar una tienda WooCommerce">
            <p>
              WooCommerce + pasarela de pago (Stripe o PayPal) + optimización de imágenes +
              SEO + backup + seguridad. Todo lo demás es mejora incremental sobre esa base
              sólida. No se lanza con 40 plugins: se lanza con los imprescindibles y se escala.
            </p>
          </TipBox>
        </section>

        {/* ═══════════════════════ 5. BLOG PROFESIONAL ═══════════════════════ */}
        <section id="blog" className="doc-section">
          <h2>5. Stack de plugins para blog profesional</h2>
          <p>
            Un blog profesional no es lo mismo que un diario personal. Un blog con intención
            de posicionarse, generar audiencia y monetizar requiere una arquitectura de plugins
            centrada en SEO editorial, experiencia de lectura y construcción de comunidad.
          </p>

          <h3>5.1 SEO editorial avanzado</h3>
          <p>
            Un blog que vive del tráfico orgánico necesita trabajo SEO muy preciso en cada
            artículo. Rank Math SEO para blogs ofrece funciones clave:
          </p>
          <ul>
            <li>Análisis de densidad de keywords en tiempo real.</li>
            <li>Sugerencias de keywords relacionadas integradas mientras se escribe.</li>
            <li>Schema de artículo, receta, review o FAQ directamente en el editor.</li>
            <li>Auditoría de enlaces internos por post.</li>
            <li>
              Integración directa con Google Search Console para ver el rendimiento real de
              cada URL sin salir del panel de WordPress.
            </li>
          </ul>

          <h3>5.2 Tabla de contenidos automática</h3>
          <p>
            Los artículos largos y en profundidad son los que mejor posicionan en Google. Para
            mejorar la usabilidad de ese tipo de contenido, un plugin de tabla de contenidos
            genera un índice navegable automáticamente desde los títulos del artículo.
          </p>
          <ul>
            <li><strong>Table of Contents Plus:</strong> ligero, configurable y automático.</li>
            <li>
              <strong>Easy Table of Contents:</strong> con más opciones de diseño y mejor
              compatibilidad con el editor de bloques Gutenberg.
            </li>
          </ul>

          <h3>5.3 Compartir en redes sociales sin lastrar el rendimiento</h3>
          <p>
            Los botones de compartir deben ser ligeros. El error más frecuente es instalar
            plugins de redes sociales que cargan scripts pesados de terceros en cada página.
            La alternativa profesional es usar plugins que generen botones sin scripts de
            terceros:
          </p>
          <ul>
            <li>
              <strong>Shared Counts:</strong> extremadamente ligero, sin dependencias externas
              ni peticiones a APIs de terceros en el momento de renderizado.
            </li>
            <li>
              <strong>AddToAny Share Buttons:</strong> amplia compatibilidad con redes y
              configuración flexible de posicionamiento y diseño.
            </li>
          </ul>

          <h3>5.4 Newsletter y construcción de lista de suscriptores</h3>
          <p>
            Construir una lista de suscriptores propia es una de las estrategias más rentables
            a largo plazo para un blog. Los plugins de newsletter permiten capturar emails y
            enviar actualizaciones de contenido:
          </p>
          <ul>
            <li>
              <strong>MailPoet:</strong> plugin completo que funciona dentro de WordPress.
              Constructor visual de newsletters, gestión de listas, envío desde el propio
              servidor o SMTP y estadísticas básicas integradas en el panel.
            </li>
            <li>
              <strong>Newsletter (plugin):</strong> alternativa gratuita con muchas opciones de
              automatización y segmentación de listas.
            </li>
          </ul>

          <h3>5.5 Rendimiento específico: control de revisiones del editor</h3>
          <p>
            WordPress guarda una revisión del contenido cada vez que se guarda un borrador. En
            un blog con cientos de artículos y muchas ediciones, esto puede generar miles de
            filas en <code>wp_posts</code> que ralentizan la base de datos.
          </p>
          <p>Para controlar esto hay dos opciones complementarias:</p>
          <ul>
            <li>
              Limitar el número de revisiones guardadas añadiendo en <code>wp-config.php</code>:
              <code> define('WP_POST_REVISIONS', 5);</code>
            </li>
            <li>
              Usar un plugin de limpieza de base de datos como <strong>WP-Optimize</strong>
              para purgar revisiones antiguas periódicamente de forma programada.
            </li>
          </ul>

          <h3>5.6 Monetización del blog</h3>
          <p>
            Cuando un blog alcanza cierto volumen de tráfico, la monetización es una prioridad.
            Las opciones principales de plugins de monetización son:
          </p>
          <ul>
            <li>
              <strong>AdSanity:</strong> gestión de anuncios propios o de red sin depender de
              plugins con tracking externo invasivo.
            </li>
            <li>
              <strong>Advanced Ads:</strong> gestión avanzada de publicidad con reglas de
              visualización por usuario, dispositivo, categoría de contenido y frecuencia.
            </li>
            <li>
              <strong>WooCommerce + Easy Digital Downloads:</strong> para blogs que venden
              productos digitales (ebooks, plantillas, cursos) directamente desde el sitio.
            </li>
          </ul>

          <ActivityBox title="Actividad: stack para un blog de cocina">
            <p>
              Diseña el stack de plugins para un blog de recetas gastronómicas con estas
              necesidades:
            </p>
            <ul>
              <li>Posicionamiento en Google para búsquedas de recetas (schema de receta)</li>
              <li>Tabla de contenidos en artículos largos con más de 4 títulos</li>
              <li>Botones de compartir en Pinterest, Instagram y WhatsApp</li>
              <li>Formulario de suscripción a newsletter en el sidebar y al final de cada post</li>
              <li>Sistema de comentarios moderado con valoraciones de recetas</li>
              <li>Tiempo estimado de preparación visible en cada receta</li>
            </ul>
            <p>
              Justifica cada elección, indica si usarías versión gratuita o premium y por qué.
              Evalúa también el impacto en rendimiento de tu stack.
            </p>
          </ActivityBox>
        </section>

        {/* ═══════════════════════ 6. WEB CORPORATIVA ═══════════════════════ */}
        <section id="corporativo" className="doc-section">
          <h2>6. Stack de plugins para web corporativa</h2>
          <p>
            Una web corporativa tiene objetivos distintos a una tienda o un blog. Su función
            principal es comunicar la propuesta de valor de la empresa, generar confianza,
            capturar leads cualificados y dar soporte a la fuerza comercial. El stack de plugins
            debe estar al servicio de esos objetivos.
          </p>

          <h3>6.1 Constructor de páginas: Elementor Pro o Bricks Builder</h3>
          <p>
            Las webs corporativas suelen requerir diseños muy personalizados: páginas de
            servicio, casos de éxito, landings comerciales, páginas de equipo. Un constructor
            de páginas visual permite construir esas páginas con libertad de diseño sin tocar
            código.
          </p>
          <ul>
            <li>
              <strong>Elementor Pro:</strong> el constructor más popular del ecosistema
              WordPress. Interfaz intuitiva, amplia biblioteca de widgets, integraciones con
              herramientas de marketing, constructor de popups integrado y Theme Builder para
              cabeceras, pies y plantillas globales. La versión gratuita cubre muchos casos pero
              la Pro añade formularios, WooCommerce Builder y constructores de plantillas de
              todo el sitio.
            </li>
            <li>
              <strong>Bricks Builder:</strong> la alternativa más técnica y orientada a
              desarrolladores. Genera código más limpio que Elementor, funciona en el frontend
              y tiene una filosofía más cercana al código puro. Preferida en proyectos donde el
              rendimiento técnico y el control sobre el output HTML son prioritarios.
            </li>
          </ul>

          <h3>6.2 Formularios avanzados para captación de leads</h3>
          <p>
            En una web corporativa los formularios son herramientas comerciales. Necesitan
            lógica condicional, integración con CRM, notificaciones personalizadas y seguimiento
            de conversiones.
          </p>
          <ul>
            <li>
              <strong>WPForms Pro:</strong> indicado para webs corporativas con requisitos de
              formularios avanzados. Lógica condicional, formularios de varios pasos, abandono
              de formulario rastreado y firma digital.
            </li>
            <li>
              <strong>Gravity Forms:</strong> el estándar en proyectos enterprise WordPress.
              API muy completa para integraciones a medida. De pago, pero con un ecosistema de
              addons muy amplio para conectar con cualquier CRM, herramienta de email o sistema
              de terceros.
            </li>
          </ul>

          <h3>6.3 CRM y gestión de leads</h3>
          <p>
            Una web corporativa que genera leads necesita gestionar esos contactos. Las opciones
            son dos:
          </p>
          <ul>
            <li>
              Usar un plugin CRM dentro de WordPress como <strong>FluentCRM</strong> para
              gestionar contactos, pipelines de ventas y seguimientos dentro del propio panel.
            </li>
            <li>
              Integrar con un CRM externo (HubSpot, Salesforce, Pipedrive) mediante plugins de
              conexión nativos o vía automatización con Zapier o Make.
            </li>
          </ul>

          <h3>6.4 Chat en vivo y soporte: Tidio, LiveChat o Crisp</h3>
          <p>
            Muchas webs corporativas B2B y B2C incorporan chat en vivo como canal de captación
            y soporte. Los plugins conectan WordPress con plataformas especializadas:
          </p>
          <ul>
            <li>
              <strong>Tidio:</strong> chat + chatbot + email marketing en una sola plataforma.
              La versión gratuita es funcional para pequeñas y medianas empresas. Integración
              directa con WooCommerce para soporte en tiendas.
            </li>
            <li>
              <strong>Crisp Chat:</strong> muy popular en startups y negocios tech por su
              diseño moderno y plan gratuito generoso con funciones básicas completas.
            </li>
          </ul>

          <h3>6.5 Multiidioma: WPML o Polylang</h3>
          <p>
            Las empresas que operan en mercados internacionales necesitan contenido en varios
            idiomas. WordPress no incluye gestión multiidioma de forma nativa.
          </p>
          <ul>
            <li>
              <strong>WPML:</strong> el estándar del sector. Muy potente y compatible con la
              mayoría de plugins y temas premium. De pago pero robusto en proyectos de gran
              escala. Traduce páginas, posts, productos WooCommerce, formularios y taxonomías.
            </li>
            <li>
              <strong>Polylang:</strong> alternativa gratuita con funcionalidad sólida para la
              mayoría de proyectos que no requieren integraciones muy complejas ni soporte
              para WooCommerce multiidioma avanzado.
            </li>
          </ul>

          <h3>6.6 Analítica integrada: MonsterInsights o Site Kit</h3>
          <p>
            Una web corporativa necesita medir su rendimiento. Los plugins de analítica
            integran Google Analytics y otras herramientas dentro del panel de WordPress:
          </p>
          <ul>
            <li>
              <strong>MonsterInsights:</strong> integración completa con Google Analytics 4.
              Muestra los datos más importantes directamente en el dashboard de WordPress sin
              necesidad de acceder a la plataforma de Google. Seguimiento de formularios,
              ecommerce y eventos personalizados.
            </li>
            <li>
              <strong>Site Kit by Google:</strong> plugin oficial de Google que integra Search
              Console, Analytics, PageSpeed Insights y AdSense en el panel de WordPress.
              Gratuito y muy fácil de configurar.
            </li>
          </ul>

          <PracticeBox title="Mapa de plugins para web corporativa B2B">
            <p>Estructura recomendada para un proyecto corporativo B2B profesional:</p>
            <ul>
              <li><strong>Base técnica:</strong> Rank Math SEO + WP Rocket + UpdraftPlus + Complianz</li>
              <li><strong>Diseño:</strong> Elementor Pro con Theme Builder activo</li>
              <li><strong>Formularios:</strong> WPForms Pro o Gravity Forms con integración CRM</li>
              <li><strong>Analítica:</strong> MonsterInsights o Site Kit by Google</li>
              <li><strong>Chat y soporte:</strong> Tidio o Crisp</li>
              <li><strong>Multiidioma:</strong> WPML o Polylang (si aplica)</li>
              <li><strong>CRM:</strong> FluentCRM o integración con HubSpot/Pipedrive</li>
              <li><strong>Seguridad:</strong> Wordfence + WPS Hide Login</li>
            </ul>
          </PracticeBox>
        </section>

        {/* ═══════════════════════ 7. CRITERIO TÉCNICO ═══════════════════════ */}
        <section id="criterio" className="doc-section">
          <h2>7. Cómo decide un equipo técnico qué plugins instalar</h2>
          <p>
            En un proyecto serio, la selección de plugins no depende de preferencias personales
            ni de lo que se encontró en un tutorial. El equipo técnico evalúa cada plugin con
            una metodología sistemática que minimiza riesgos y maximiza la coherencia del stack.
          </p>

          <h3>7.1 Los ocho criterios de evaluación</h3>
          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th>Qué analizar</th>
                  <th>Señal de alerta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Necesidad real</th>
                  <td>¿Resuelve un problema específico y verificado de este proyecto?</td>
                  <td>Se instala "por si acaso" o "para tenerlo disponible"</td>
                </tr>
                <tr>
                  <th scope="row">Mantenimiento activo</th>
                  <td>¿Cuándo fue la última actualización? ¿Sigue teniendo soporte?</td>
                  <td>Sin actualización en más de 12 meses es riesgo de seguridad</td>
                </tr>
                <tr>
                  <th scope="row">Compatibilidad declarada</th>
                  <td>¿Probado con la versión actual de WordPress y PHP?</td>
                  <td>"No probado con las últimas 3 versiones principales de WordPress"</td>
                </tr>
                <tr>
                  <th scope="row">Audiencia de uso</th>
                  <td>¿Cuántas instalaciones activas? ¿Cuál es la puntuación media?</td>
                  <td>Menos de 10 000 instalaciones activas merece análisis extra</td>
                </tr>
                <tr>
                  <th scope="row">Calidad del soporte</th>
                  <td>¿Responden el foro? ¿Hay historial de resolución de bugs?</td>
                  <td>Preguntas sin respuesta del autor en el foro de WordPress.org</td>
                </tr>
                <tr>
                  <th scope="row">Impacto en rendimiento</th>
                  <td>¿Cuántos scripts y estilos añade? ¿Consultas adicionales a BD?</td>
                  <td>Plugins que añaden 15+ peticiones HTTP o scripts en todas las páginas</td>
                </tr>
                <tr>
                  <th scope="row">Coste y licencia</th>
                  <td>¿Free, freemium o premium? ¿Licencia por sitio o ilimitada?</td>
                  <td>Licencias anuales por sitio muy costosas en proyectos con muchos clientes</td>
                </tr>
                <tr>
                  <th scope="row">Solapamiento con stack existente</th>
                  <td>¿Hay ya otro plugin instalado que haga algo similar?</td>
                  <td>Dos plugins SEO, dos de caché o dos de galería con funciones idénticas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>7.2 El proceso de decisión metódico</h3>
          <ol>
            <li>
              <strong>Definir el problema:</strong> qué necesidad específica no está cubierta
              con los plugins existentes.
            </li>
            <li>
              <strong>Buscar alternativas:</strong> comparar al menos dos o tres opciones, no
              solo la primera que aparece en la búsqueda.
            </li>
            <li>
              <strong>Evaluar con los ocho criterios:</strong> descartar las que presenten
              señales de alerta.
            </li>
            <li>
              <strong>Probar en entorno de desarrollo:</strong> nunca instalar directamente en
              producción un plugin que no se ha probado antes en staging.
            </li>
            <li>
              <strong>Medir el impacto:</strong> comparar el rendimiento del sitio antes y
              después con herramientas como GTmetrix o PageSpeed Insights.
            </li>
            <li>
              <strong>Documentar la decisión:</strong> registrar qué plugin se eligió, para qué,
              quién tomó la decisión y cuándo.
            </li>
          </ol>

          <PracticeBox title="Plantilla de decisión de plugin">
            <p>Estructura para documentar cada elección técnica en el proyecto:</p>
            <pre><code>{`Nombre del plugin:
Versión instalada:
Fecha de instalación:
Problema que resuelve:
Criterios evaluados:
  - Última actualización:
  - Instalaciones activas:
  - Puntuación media (WordPress.org):
  - Probado con WordPress X.X: sí / no
  - Impacto en rendimiento estimado:
Alternativas consideradas y descartadas:
Decisión final y justificación:
Responsable técnico de la decisión:`}</code></pre>
          </PracticeBox>

          <h3>7.3 Herramientas para auditar un plugin antes de instalarlo</h3>
          <ul>
            <li>
              <strong>WordPress.org:</strong> ficha con estadísticas, historial de
              actualizaciones, foro de soporte y estado de compatibilidad declarado.
            </li>
            <li>
              <strong>WPScan Vulnerability Database:</strong> base de datos de vulnerabilidades
              conocidas en plugins y temas de WordPress. Consulta imprescindible antes de
              instalar cualquier plugin en un sitio de producción.
            </li>
            <li>
              <strong>Query Monitor:</strong> plugin de diagnóstico que muestra en detalle las
              consultas a base de datos, hooks, tiempo de carga y assets de cada plugin activo.
            </li>
            <li>
              <strong>GTmetrix o PageSpeed Insights:</strong> medición de impacto real en
              rendimiento antes y después de instalar el plugin.
            </li>
          </ul>
        </section>

        {/* ═══════════════════════ 8. GESTIÓN Y MANTENIMIENTO ═══════════════════════ */}
        <section id="gestion" className="doc-section">
          <h2>8. Gestión y mantenimiento del ecosistema de plugins</h2>
          <p>
            Instalar plugins bien es solo la mitad del trabajo. Mantenerlos, actualizarlos y
            auditar su estado de forma periódica es la parte que distingue a un equipo técnico
            serio de uno que simplemente "levanta proyectos" y los abandona.
          </p>

          <h3>8.1 Política de actualizaciones profesional</h3>
          <p>
            La mayoría de hackeos exitosos de WordPress se producen por plugins con
            vulnerabilidades conocidas que el propietario nunca actualizó. La política de
            actualizaciones de un equipo profesional debe incluir:
          </p>
          <ul>
            <li>
              <strong>Revisión semanal de actualizaciones disponibles.</strong> WordPress
              notifica en el panel cuándo hay actualizaciones pendientes.
            </li>
            <li>
              <strong>Actualización en staging antes que en producción</strong> para plugins
              críticos (WooCommerce, constructores de páginas, plugins de pago).
            </li>
            <li>
              <strong>Backup previo a cualquier actualización masiva.</strong> Si algo se
              rompe, el backup es el único recurso real y fiable.
            </li>
            <li>
              <strong>Verificación post-actualización</strong> de las páginas y flujos
              críticos del sitio tras aplicar las actualizaciones.
            </li>
          </ul>

          <h3>8.2 Actualizaciones automáticas: cuándo sí y cuándo no</h3>
          <p>
            WordPress permite configurar actualizaciones automáticas. Tiene ventajas (el sitio
            siempre actualizado) y riesgos (una actualización puede romper algo en producción).
            La postura razonada del profesional:
          </p>
          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Tipo de actualización</th>
                  <th>Automática</th>
                  <th>Por qué</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Versiones de mantenimiento del núcleo (4.x.1 → 4.x.2)</td>
                  <td>Sí, siempre</td>
                  <td>Son correcciones de seguridad críticas con bajo riesgo de rotura</td>
                </tr>
                <tr>
                  <td>Versiones mayores del núcleo (5.x → 6.x)</td>
                  <td>No en producción</td>
                  <td>Pueden introducir cambios en APIs que rompan plugins o temas</td>
                </tr>
                <tr>
                  <td>Plugins de seguridad (Wordfence, etc.)</td>
                  <td>Sí, recomendado</td>
                  <td>Las reglas de seguridad deben estar siempre al día</td>
                </tr>
                <tr>
                  <td>WooCommerce y pasarelas de pago</td>
                  <td>No en producción</td>
                  <td>Riesgo alto de rotura del flujo de compra; probar en staging</td>
                </tr>
                <tr>
                  <td>Constructores de páginas (Elementor, Bricks)</td>
                  <td>No en producción</td>
                  <td>Pueden cambiar estructuras de diseño o romper layouts existentes</td>
                </tr>
                <tr>
                  <td>Plugins de formularios críticos</td>
                  <td>No en producción</td>
                  <td>Si el formulario de captación o pago falla, el negocio pierde dinero</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>8.3 Auditoría trimestral del ecosistema</h3>
          <p>
            Cada trimestre, o antes de cada entrega de proyecto, el equipo debe realizar una
            auditoría completa del ecosistema de plugins instalados:
          </p>
          <ul>
            <li>
              <strong>Plugins activos:</strong> ¿sigue siendo necesario cada plugin activo?
              ¿Hay solapamientos que se hayan generado con el tiempo?
            </li>
            <li>
              <strong>Plugins desactivados:</strong> un plugin desactivado sigue ocupando
              disco. Si no se usa, se elimina.
            </li>
            <li>
              <strong>Versiones y compatibilidad:</strong> ¿están todos actualizados? ¿Hay
              alguno marcado como no compatible con la versión actual de WordPress?
            </li>
            <li>
              <strong>Vulnerabilidades conocidas:</strong> consultar WPScan o el informe de
              Wordfence para vulnerabilidades reportadas en el stack instalado.
            </li>
            <li>
              <strong>Rendimiento:</strong> ¿ha empeorado el tiempo de carga? ¿Hay algún
              plugin concreto que consuma recursos de forma desproporcionada?
            </li>
            <li>
              <strong>Licencias premium:</strong> ¿están vigentes? ¿Caducan pronto?
            </li>
          </ul>

          <WarningBox title="El riesgo oculto de los plugins abandonados">
            <p>
              Un plugin que no se actualiza en más de 12 meses puede funcionar perfectamente hoy
              pero ser vulnerable mañana. Si se descubre una vulnerabilidad en un plugin
              abandonado, nunca será parcheada. Lo correcto es buscar una alternativa mantenida
              activamente y migrar antes de que el riesgo se materialice.
            </p>
          </WarningBox>
        </section>

        {/* ═══════════════════════ 9. BORRAR PLUGINS ═══════════════════════ */}
        <section id="borrar" className="doc-section">
          <h2>9. Cómo eliminar plugins correctamente</h2>
          <p>
            Eliminar un plugin correctamente no es simplemente hacer clic en "Eliminar" en el
            panel de WordPress. Un proceso profesional es metódico, verificado y asegura que el
            sitio queda limpio y funcional tras el proceso.
          </p>

          <h3>Paso 1. Auditar el alcance del plugin antes de tocarlo</h3>
          <p>
            Antes de desactivar cualquier plugin, hay que identificar todos los puntos del sitio
            que dependen de él:
          </p>
          <ul>
            <li>Shortcodes del plugin usados en páginas o posts.</li>
            <li>Widgets del plugin en sidebars o áreas de widget activas.</li>
            <li>Bloques de Gutenberg propios del plugin en el editor de bloques.</li>
            <li>Diseños de Elementor u otro constructor que usen widgets del plugin.</li>
            <li>Plantillas del tema que llamen directamente a funciones del plugin.</li>
            <li>Integraciones activas con otros plugins o servicios de terceros.</li>
            <li>
              Configuraciones del plugin usadas en el checkout, formularios o correos
              automáticos.
            </li>
          </ul>

          <h3>Paso 2. Hacer una copia de seguridad completa</h3>
          <p>
            Antes de cualquier cambio significativo en un sitio de producción, backup. Sin
            excusas. Si la eliminación del plugin rompe algo inesperado, la única solución
            fiable es restaurar el estado anterior.
          </p>

          <h3>Paso 3. Desactivar el plugin</h3>
          <p>
            Desde <code>Plugins → Plugins instalados</code>, clic en <code>Desactivar</code>.
            Esta acción detiene la ejecución del plugin sin borrar sus archivos ni sus datos.
            Es el momento de comprobar si algo se rompe en el sitio.
          </p>

          <h3>Paso 4. Verificar el sitio con el plugin desactivado</h3>
          <p>
            Comprobar manualmente todos los flujos que probablemente dependan del plugin:
          </p>
          <ul>
            <li>Página de inicio y páginas principales del sitio.</li>
            <li>Formularios de contacto y captación de leads.</li>
            <li>
              Flujo de tienda si aplica: ficha de producto → carrito → checkout →
              confirmación.
            </li>
            <li>Correos automáticos si el plugin generaba notificaciones.</li>
            <li>Páginas de aterrizaje, landings y páginas de campaña.</li>
          </ul>

          <h3>Paso 5. Eliminar el plugin</h3>
          <p>
            Si todo funciona correctamente con el plugin desactivado, es el momento de
            eliminarlo definitivamente. Clic en <code>Eliminar</code> en la lista de plugins
            desactivados. WordPress borrará los archivos del plugin de
            <code> wp-content/plugins/</code>.
          </p>

          <h3>Paso 6. Limpiar residuos del sistema</h3>
          <p>
            La eliminación del plugin desde el panel no garantiza que el sistema haya quedado
            completamente limpio. Hay que verificar:
          </p>

          <details className="dd" open>
            <summary>Archivos residuales en wp-content/uploads</summary>
            <div className="dd-body">
              <p>
                Muchos plugins guardan recursos en la carpeta de uploads: CSS dinámico generado,
                imágenes optimizadas, logs, exportaciones, cachés y archivos temporales. Estos
                archivos no se eliminan cuando se borra el plugin desde el panel.
              </p>
              <p>
                Hay que identificar las carpetas que pertenecen al plugin eliminado y evaluarlas
                antes de borrar: algunos datos pueden ser útiles para auditorías o migraciones
                futuras.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>Opciones residuales en la base de datos (wp_options)</summary>
            <div className="dd-body">
              <p>
                Los plugins guardan sus configuraciones en <code>wp_options</code>. Cuando se
                eliminan, esas filas suelen quedar en la tabla para siempre. Con el tiempo, en
                webs con historial de muchos plugins instalados y eliminados,
                <code> wp_options</code> puede crecer de forma absurda con miles de filas de
                configuración de plugins que ya no existen. Esto ralentiza las consultas que
                WordPress hace a esa tabla en cada carga de página.
              </p>
              <p>La mejor forma de limpiar esto es:</p>
              <ul>
                <li>
                  Usar <strong>WP-Optimize</strong> o <strong>Advanced Database Cleaner</strong>
                  para identificar y eliminar opciones huérfanas asociadas a plugins ya eliminados.
                </li>
                <li>
                  Hacerlo siempre con backup previo: borrar filas equivocadas de
                  <code> wp_options</code> puede dejar el sitio inaccesible.
                </li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Tablas propias del plugin en MySQL</summary>
            <div className="dd-body">
              <p>
                Algunos plugins crean sus propias tablas en la base de datos. WooCommerce, por
                ejemplo, crea tablas como <code>wp_wc_orders</code>,
                <code> wp_woocommerce_sessions</code> o <code>wp_wc_product_meta_lookup</code>.
                Si se desinstala WooCommerce, esas tablas quedan en la base de datos ocupando
                espacio.
              </p>
              <p>
                Los plugins bien desarrollados preguntan durante la eliminación si se desean
                eliminar también los datos. Si no lo hacen, hay que identificar las tablas
                manualmente desde phpMyAdmin o HeidiSQL y valorarlas antes de borrarlas.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>Caché y activos generados</summary>
            <div className="dd-body">
              <p>
                Tras eliminar un plugin de caché, un constructor de páginas o un plugin de
                optimización, conviene:
              </p>
              <ul>
                <li>Vaciar la caché del servidor y del navegador.</li>
                <li>Regenerar el CSS crítico si el tema o constructor lo requiere.</li>
                <li>
                  Verificar que no quedan referencias rotas a archivos CSS o JS del plugin en
                  las páginas del sitio.
                </li>
              </ul>
            </div>
          </details>

          <PracticeBox title="Checklist completo de eliminación de plugin">
            <ul>
              <li>¿Has identificado todos los puntos del sitio que dependen de este plugin?</li>
              <li>¿Has hecho backup completo antes de empezar?</li>
              <li>¿Lo has desactivado y verificado que el sitio funciona correctamente sin él?</li>
              <li>¿Has eliminado el plugin desde el panel de WordPress?</li>
              <li>¿Has comprobado si quedan archivos residuales en <code>wp-content/uploads</code>?</li>
              <li>¿Has revisado opciones huérfanas en <code>wp_options</code>?</li>
              <li>¿Has verificado si quedaron tablas propias del plugin en MySQL?</li>
              <li>¿Has vaciado cachés y regenerado recursos si era necesario?</li>
              <li>¿Has medido antes y después para confirmar el resultado real?</li>
            </ul>
          </PracticeBox>
        </section>

        {/* ═══════════════════════ 10. RESUMEN ═══════════════════════ */}
        <section id="resumen" className="doc-section">
          <h2>10. Resumen y checklist final</h2>

          <div className="topic-summary">
            <div className="topic-summary__grid">
              <div className="topic-summary__card">
                <h3 className="topic-summary__title">Lo que debes dominar</h3>
                <ul className="topic-summary__list">
                  <li>
                    La filosofía "menos plugins, mejor elegidos" frente a la acumulación
                    indiscriminada que lastra el rendimiento y la seguridad.
                  </li>
                  <li>
                    El stack base que todo WordPress necesita sin importar el tipo de proyecto:
                    SEO, caché, backup, formularios, imágenes, RGPD y seguridad.
                  </li>
                  <li>
                    Los vectores de ataque en WordPress y cómo los plugins de seguridad los
                    mitigan en capas complementarias.
                  </li>
                  <li>
                    Las diferencias entre el stack de una tienda WooCommerce, un blog
                    profesional y una web corporativa, y por qué cada uno tiene necesidades
                    específicas distintas.
                  </li>
                  <li>
                    Los ocho criterios técnicos para evaluar si un plugin merece instalarse en
                    un proyecto real.
                  </li>
                  <li>
                    El proceso completo y correcto de eliminación de plugins con limpieza real
                    de residuos en archivos y base de datos.
                  </li>
                </ul>
              </div>

              <div className="topic-summary__card">
                <h3 className="topic-summary__title">Checklist profesional por tipo de proyecto</h3>
                <ul className="topic-summary__list">
                  <li>
                    <strong>Todos:</strong> SEO + caché + backup + RGPD + seguridad + imágenes
                  </li>
                  <li>
                    <strong>Tienda WooCommerce:</strong> WooCommerce + pasarela + envíos +
                    conversión + email marketing
                  </li>
                  <li>
                    <strong>Blog profesional:</strong> SEO editorial + tabla de contenidos +
                    compartir social + newsletter
                  </li>
                  <li>
                    <strong>Web corporativa:</strong> constructor + formularios avanzados +
                    CRM + chat + analítica + multiidioma si aplica
                  </li>
                  <li>
                    <strong>Mantenimiento:</strong> actualización controlada + auditoría
                    trimestral + limpieza de residuos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <TipBox title="El criterio técnico como ventaja profesional">
            <p>
              Saber seleccionar, configurar, mantener y eliminar plugins con criterio técnico
              es una de las competencias que más diferencia a un profesional WordPress de
              alguien que simplemente instala cosas. Un sitio bien construido con 10 plugins
              bien elegidos supera siempre a un sitio caótico con 60 plugins acumulados. Ese
              criterio es el que los clientes y los equipos valoran, y el que debe guiar cada
              decisión técnica en un proyecto real.
            </p>
          </TipBox>
        </section>

        <div className="doc-hero" style={{ marginTop: "1.2rem" }}>
          <p className="doc-kicker">Fin del tema</p>
          <h2>Ya sabes diseñar el ecosistema de plugins de cualquier proyecto WordPress</h2>
          <p className="doc-lead">
            Has recorrido la filosofía de selección, el stack base transversal, la seguridad,
            los stacks específicos para tienda, blog y web corporativa, el criterio técnico de
            evaluación, la política de mantenimiento y el proceso correcto de eliminación. El
            siguiente paso es aplicar este conocimiento en proyectos reales con análisis,
            comparativas y decisiones justificadas.
          </p>
        </div>

        <TipBox title="Checklist de competencias del alumno">
          <ul>
            <li>Sé aplicar la filosofía "menos es más, pero bien elegidos" en cualquier proyecto.</li>
            <li>Conozco el stack base que necesita todo WordPress independientemente de su propósito.</li>
            <li>Sé qué plugins de seguridad son imprescindibles y por qué actúan en capas.</li>
            <li>
              Sé diseñar el stack de plugins de una tienda WooCommerce, un blog profesional y
              una web corporativa justificando cada elección.
            </li>
            <li>Sé evaluar un plugin con criterio técnico usando los ocho factores clave.</li>
            <li>
              Sé aplicar la política de actualizaciones correcta para cada tipo de plugin
              diferenciando automáticas de manuales.
            </li>
            <li>
              Sé eliminar plugins correctamente y limpiar todos sus residuos del sistema:
              archivos, base de datos y caché.
            </li>
          </ul>
        </TipBox>

      
      </article>
    </TopicLayout>
  );
}