import TopicLayout from "../../components/TopicLayout";
import { TipBox, WarningBox, PracticeBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema22LoginClienteWordPress() {
  return (
    <TopicLayout
      title="Tema 22 · Login de cliente en WordPress"
      subtitle="Registro + inicio/cierre de sesión + perfil + saludo en menú (versión gratuita)"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="kicker">Usuarios · Frontend · Experiencia cliente</div>
          <h1>Crear un login de cliente con perfil</h1>
          <p className="lead">
            Objetivo: permitir que un cliente se registre, acceda, vea su perfil y cierre sesión desde el
            frontend. Además, el menú lo saluda por su nombre. La sección “Rutas reservadas” existirá
            (por ahora vacía) para preparar el sistema.
          </p>

          <TipBox>
            <p>
              Esto no es “hacer un formulario”. Es montar una <strong>experiencia de usuario completa</strong>:
              páginas, navegación y puntos de entrada claros para clientes.
            </p>
          </TipBox>
        </div>

        {/* INDEX */}
        <nav className="doc-index">
          <a href="#requisitos">1. Requisitos y checklist</a>
          <a href="#plugins">2. Plugins disponibles y qué aporta cada uno</a>
          <a href="#recomendacion">3. Recomendación (free) y por qué</a>
          <a href="#instalacion">4. Implementación paso a paso</a>
          <a href="#menu-saludo">5. Saludo en el menú + enlace Login/Logout</a>
          <a href="#perfil-rutas">6. Perfil “Rutas reservadas” (placeholder)</a>
          <a href="#practica">7. Práctica final</a>
        </nav>

        {/* 1 */}
        <section className="doc-section" id="requisitos">
          <h2>1. Requisitos y checklist</h2>

          <details className="dd" open>
            <summary>Qué vamos a conseguir exactamente</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Registro</strong> desde una página del frontend.</li>
                <li><strong>Login</strong> desde una página del frontend.</li>
                <li><strong>Logout</strong> accesible (enlace).</li>
                <li><strong>Perfil / Cuenta</strong> con URL propia.</li>
                <li><strong>Menú con saludo</strong>: “Hola, María” si la persona está logueada.</li>
                <li><strong>Página “Rutas reservadas”</strong> dentro del perfil (de momento vacía).</li>
              </ul>

              <div className="callout warn">
                Para un “login de cliente”, lo importante es que el usuario no tenga que ir al escritorio
                de WordPress. La experiencia debe ocurrir en el sitio público.
              </div>
            </div>
          </details>
        </section>

        {/* 2 */}
        <section className="doc-section" id="plugins">
          <h2>2. Plugins disponibles y qué aporta cada uno</h2>

          <p>
            Para “login + registro + perfil” lo más habitual es usar un plugin de <strong>membership / perfiles</strong>
            (aunque no estés vendiendo membresías).
          </p>

          <div className="table-wrap" tabIndex={0} aria-label="Comparativa de plugins de login y perfiles">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Plugin</th>
                  <th>Qué resuelve bien</th>
                  <th>En free, ojo con…</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ultimate Member</strong></td>
                  <td>Registro, login, perfil/cuenta, roles y shortcodes muy directos.</td>
                  <td>Extras “social” y automatizaciones avanzadas suelen ser add-ons.</td>
                </tr>
                <tr>
                  <td>WP User Manager</td>
                  <td>Perfiles + formularios de login/registro, enfoque modular.</td>
                  <td>Algunas piezas avanzadas suelen ir por add-ons.</td>
                </tr>
                <tr>
                  <td>UsersWP</td>
                  <td>Ligero, perfiles + login/registro, buena integración con maquetadores.</td>
                  <td>Parte del ecosistema funciona por extensiones.</td>
                </tr>
                <tr>
                  <td>User Registration (WPEverest)</td>
                  <td>Registro/login muy sólido con shortcodes.</td>
                  <td>Perfil “tipo comunidad” suele requerir configuración/add-ons.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox>
            <p>
              Para el proyecto “Paseos / Rutas”, el objetivo no es una red social. Queremos un <strong>área cliente</strong>
              simple, limpia y usable.
            </p>
          </TipBox>
        </section>

        {/* 3 */}
        <section className="doc-section" id="recomendacion">
          <h2>3. Recomendación (free) y por qué</h2>

          <div className="callout tip">
            <strong>Recomendación:</strong> <strong>Ultimate Member</strong> por equilibrio entre potencia y simplicidad
            en versión gratuita: perfiles + formularios frontend + shortcodes “plug & play”. :contentReference[oaicite:1]{index=1}
          </div>

          <details className="dd" open>
            <summary>Por qué encaja con un “login de cliente”</summary>
            <div className="dd-body">
              <ul>
                <li>Permite montar <strong>páginas públicas</strong> de login y registro.</li>
                <li>Aporta <strong>página de cuenta/perfil</strong> sin tocar PHP.</li>
                <li>Se integra con menús y estructura del sitio mediante enlaces/shortcodes.</li>
              </ul>

              <WarningBox>
                <p>
                  En proyectos reales, a veces se combina con un plugin de reservas (Amelia, etc.).
                  Aquí el “perfil con rutas reservadas” se prepara como estructura: la integración con reservas
                  vendrá más adelante.
                </p>
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 4 */}
        <section className="doc-section" id="instalacion">
          <h2>4. Implementación paso a paso</h2>

          <details className="dd" open>
            <summary>4.1 Instalar y activar</summary>
            <div className="dd-body">
              <ol>
                <li>Plugins → Añadir nuevo</li>
                <li>Buscar: <strong>Ultimate Member</strong></li>
                <li>Instalar → Activar</li>
              </ol>

              <TipBox>
                <p>
                  Ultimate Member se apoya mucho en <strong>shortcodes</strong> para mostrar formularios y perfiles. :contentReference[oaicite:2]{index=2}
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>4.2 Crear páginas del área cliente (login, registro, perfil)</summary>
            <div className="dd-body">
              <p>
                Crea estas páginas (Páginas → Añadir nueva). Los nombres son orientativos, lo importante es la función:
              </p>

              <div className="table-wrap" tabIndex={0} aria-label="Páginas recomendadas para área cliente">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Página</th>
                      <th>Slug sugerido</th>
                      <th>Contenido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acceder</td>
                      <td><code>login</code></td>
                      <td>Bloque Shortcode con el shortcode de login de Ultimate Member</td>
                    </tr>
                    <tr>
                      <td>Registro</td>
                      <td><code>registro</code></td>
                      <td>Bloque Shortcode con el shortcode de registro</td>
                    </tr>
                    <tr>
                      <td>Mi Perfil</td>
                      <td><code>mi-perfil</code></td>
                      <td>Bloque Shortcode con el shortcode de perfil/cuenta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                Usa el bloque <strong>“Shortcode”</strong> (no “HTML personalizado”) para pegar los shortcodes:
                es más limpio y evita errores.
              </div>

              <p>
                Los shortcodes exactos dependen de la configuración/IDs de formularios de Ultimate Member, pero la idea es:
                <strong>login</strong>, <strong>registro</strong> y <strong>perfil</strong> mediante shortcodes. :contentReference[oaicite:3]{index=3}
              </p>
            </div>
          </details>
        </section>

        {/* 5 */}
        <section className="doc-section" id="menu-saludo">
          <h2>5. Saludo en el menú + enlace Login/Logout</h2>

          <TipBox>
            <p>
              Esto eleva mucho la sensación de “área cliente”:
              el menú cambia según si hay sesión iniciada.
            </p>
          </TipBox>

          <details className="dd" open>
            <summary>5.1 Añadir enlaces al menú (sin código)</summary>
            <div className="dd-body">
              <ol>
                <li>Apariencia → Menús</li>
                <li>Añadir las páginas: <strong>Acceder</strong>, <strong>Registro</strong>, <strong>Mi Perfil</strong></li>
                <li>Guardar menú</li>
              </ol>

              <div className="callout warn">
                El enlace de “Cerrar sesión” normalmente se gestiona con el plugin o con un enlace personalizado.
                Si tu plugin no te lo da directo, se puede resolver con un pequeño snippet.
              </div>
            </div>
          </details>

          <details className="dd" open>
            <summary>5.2 Saludo “Hola, Nombre” con un snippet (tema hijo)</summary>
            <div className="dd-body">
              <p>
                Añade este código en el tema hijo para insertar un ítem de menú con saludo (y opcionalmente Login/Logout).
                Es compatible con Astra porque se engancha al filtro de WordPress del menú.
              </p>

              <p className="ps-muted">
                Ruta: <code>/wp-content/themes/tu-tema-hijo/functions.php</code>
              </p>

              <pre><code>{`/**
 * Menú: saludo + link login/logout
 * Ajusta 'menu-principal' por el slug/ubicación real si lo necesitas.
 */
add_filter('wp_nav_menu_items', function($items, $args){

  // Opcional: limita a una ubicación concreta
  // if ($args->theme_location !== 'menu-principal') return $items;

  if ( is_user_logged_in() ) {
    $u = wp_get_current_user();
    $name = $u->display_name ? $u->display_name : $u->user_login;

    // Saludo (sin enlace)
    $items .= '<li class="menu-item menu-item--greeting"><span class="nav-greeting">Hola, ' . esc_html($name) . '</span></li>';

    // Logout (enlace)
    $items .= '<li class="menu-item"><a href="' . esc_url( wp_logout_url( home_url('/') ) ) . '">Cerrar sesión</a></li>';

  } else {
    // Login (enlace a tu página)
    $items .= '<li class="menu-item"><a href="' . esc_url( home_url('/login/') ) . '">Acceder</a></li>';
  }

  return $items;
}, 10, 2);`}</code></pre>

              <div className="callout tip">
                El saludo usa el <code>display_name</code> del usuario, que es el nombre más “humano”.
              </div>

              <details className="dd">
                <summary>CSS opcional para que el saludo quede integrado</summary>
                <div className="dd-body">
                  <pre><code>{`.menu-item--greeting .nav-greeting{
  display:inline-flex;
  align-items:center;
  padding:.45rem .75rem;
  border-radius:999px;
  background: rgba(216,164,76,.18);
  border:1px solid rgba(216,164,76,.35);
  font-weight:700;
}`}</code></pre>
                </div>
              </details>
            </div>
          </details>
        </section>

        {/* 6 */}
        <section className="doc-section" id="perfil-rutas">
          <h2>6. Perfil “Rutas reservadas” (placeholder)</h2>

          <p>
            Para preparar el área cliente, crea una sección visible “Rutas reservadas”.
            De momento estará vacía, pero el contenedor/estructura existe.
          </p>

          <details className="dd" open>
            <summary>Opción simple: sección fija dentro de “Mi Perfil”</summary>
            <div className="dd-body">
              <p>
                En la página <strong>Mi Perfil</strong>, además del shortcode del perfil, añade un bloque “Grupo/Contenedor”
                con este contenido:
              </p>

              <pre><code>{`<h2>Rutas reservadas</h2>
<p>Aquí aparecerán las reservas asociadas a esta cuenta.</p>
<p><em>Actualmente no hay reservas.</em></p>`}</code></pre>

              <div className="callout tip">
                Más adelante, esta sección se conectará con el sistema de reservas (por ejemplo Amelia) para listar
                reservas por usuario. Ahora se deja preparada la UX y la arquitectura.
              </div>
            </div>
          </details>
        </section>

        {/* 7 */}
        <section className="doc-section" id="practica">
          <h2>7. Práctica final</h2>

          <PracticeBox>
            <h3>Checklist de implementación</h3>
            <ol>
              <li>Instalar y activar <strong>Ultimate Member</strong>. :contentReference[oaicite:4]{index=4}</li>
              <li>Crear páginas: <strong>Login</strong>, <strong>Registro</strong>, <strong>Mi Perfil</strong>.</li>
              <li>Insertar los shortcodes correspondientes en cada página. :contentReference[oaicite:5]{index=5}</li>
              <li>Añadir páginas al menú (Acceder / Registro / Mi Perfil).</li>
              <li>Implementar el snippet del <strong>saludo en menú</strong> (Hola, Nombre + Cerrar sesión).</li>
              <li>En “Mi Perfil”, añadir el bloque “Rutas reservadas” (placeholder).</li>
            </ol>
          </PracticeBox>

          <ActivityBox>
            <h3>Actividad de calidad</h3>
            <ul>
              <li>Probar el flujo completo: Registro → Login → Ver “Mi Perfil” → Logout → Login de nuevo.</li>
              <li>Comprobar que el menú cambia en función de la sesión.</li>
              <li>Revisar que <strong>no se muestra el escritorio</strong> como parte del flujo habitual del cliente.</li>
            </ul>
          </ActivityBox>
        </section>

        {/* CIERRE */}
        <div className="doc-hero">
          <h2>Cierre</h2>
          <p className="lead">
            Con esto queda montada una base sólida de “área cliente”. El siguiente salto será conectar
            “Rutas reservadas” con el sistema de reservas para que el perfil muestre datos reales.
          </p>

          <TipBox>
            <p>
              Si la web ya tiene CPT + plantillas, un login de cliente es el complemento perfecto:
              convierte el sitio en un sistema con usuarios, no solo una web informativa.
            </p>
          </TipBox>

          <div className="doc-next">
            <a className="btn btn-primary" href="#requisitos">Repasar el Tema 22</a>
          </div>
        </div>
      </div>
    </TopicLayout>
  );
}