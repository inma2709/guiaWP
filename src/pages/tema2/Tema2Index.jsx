import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema2Index() {
  return (
    <TopicLayout
      title="M2 · Entorno de desarrollo local"
      subtitle="Trabajaremos con LocalWP: el entorno más simple y profesional para aprender WordPress sin complicaciones"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 2</div>
          <h1>Entorno de desarrollo local</h1>
          <p className="doc-lead">
            En este curso vamos a trabajar en local para aprender WordPress de forma segura y profesional.
            <strong> Usaremos LocalWP</strong> (no XAMPP) para crear y gestionar nuestros sitios sin dolores de cabeza.
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#localwp-vs-xampp">LocalWP vs XAMPP: diferencias, ventajas e inconvenientes</a></li>
            <li><a href="#primer-sitio">Cómo comenzar: crear tu primer sitio en LocalWP</a></li>
            <li><a href="#ajustes-iniciales">Ajustes iniciales imprescindibles (para tu primer sitio)</a></li>
            <li><a href="#estructura-archivos">Estructura de archivos y carpetas (para orientarte)</a></li>
          </ol>
        </div>

        {/* 2.1 LocalWP vs XAMPP */}
        <section className="doc-section" id="localwp-vs-xampp">
          <h2>2.1 LocalWP vs XAMPP: ¿por qué usamos LocalWP en este curso?</h2>

          <details className="dd" open>
            <summary>Ver explicación clara para alumnado de programación</summary>
            <div className="dd-body">
              <p>
                Si vienes de programación, probablemente ya conoces <strong>XAMPP</strong>: instalas Apache + MySQL +
                PHP y puedes montar proyectos PHP en local. Eso funciona, pero para WordPress tiene un problema:
                <strong> te obliga a configurar demasiadas cosas “a mano”</strong>.
              </p>

              <p>
                En este curso vamos a usar <strong>LocalWP</strong> porque está diseñado específicamente para WordPress.
                El objetivo no es “hacerte perder nivel técnico”, sino <strong>quitar fricción</strong> y centrarte en
                lo que importa: <strong>WordPress + proyectos reales</strong>.
              </p>

              <div className="table-wrap" tabIndex="0" aria-label="Comparativa LocalWP vs XAMPP">
                <table className="table table-zebra">
                  <caption>Comparativa práctica: LocalWP vs XAMPP (para aprender WordPress)</caption>
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>LocalWP</th>
                      <th>XAMPP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Objetivo</th>
                      <td>WordPress “out of the box”</td>
                      <td>Servidor genérico para proyectos PHP</td>
                    </tr>
                    <tr>
                      <th scope="row">Crear un sitio WP</th>
                      <td>En minutos, asistente guiado</td>
                      <td>Más pasos: descargar WP, mover carpetas, crear BD…</td>
                    </tr>
                    <tr>
                      <th scope="row">Gestión de múltiples sitios</th>
                      <td>Muy cómoda (lista de sites)</td>
                      <td>Manual (virtual hosts / carpetas)</td>
                    </tr>
                    <tr>
                      <th scope="row">HTTPS / SSL local</th>
                      <td>Sencillo (un clic, según configuración)</td>
                      <td>Más complejo (certificados y configuración Apache)</td>
                    </tr>
                    <tr>
                      <th scope="row">Cambiar versión de PHP</th>
                      <td>Muy accesible (según opciones del entorno)</td>
                      <td>Más manual (depende del paquete instalado)</td>
                    </tr>
                    <tr>
                      <th scope="row">Acceso a DB</th>
                      <td>Incluido / integrado</td>
                      <td>phpMyAdmin + configuración</td>
                    </tr>
                    <tr>
                      <th scope="row">Aprendizaje en este curso</th>
                      <td>Enfocado a WordPress (cero ruido)</td>
                      <td>Más “ruido”: servidor, puertos, permisos, rutas…</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <TipBox title="Decisión del curso (muy importante)">
                <p>
                  Elegimos <strong>LocalWP</strong> porque queremos que aprendas WordPress de forma rápida y profesional.
                  XAMPP es una opción válida para ciertos casos, pero en este curso lo dejaremos para más adelante,
                  cuando ya domines WordPress y quieras practicar un enfoque más “manual”.
                </p>
              </TipBox>

              <WarningBox>
                <p>
                  <strong>Inconvenientes reales de LocalWP:</strong> como cualquier herramienta, no es perfecta.
                  Puede consumir más recursos que una instalación mínima y algunas funciones (como compartir enlaces externos)
                  dependen de condiciones concretas. <strong>Pero para aprender y trabajar en local, es la opción más equilibrada</strong>.
                </p>
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 2.2 Crear primer sitio */}
        <section className="doc-section" id="primer-sitio">
          <h2>2.2 Cómo comenzar: crear tu primer sitio en LocalWP</h2>

          <details className="dd" open>
            <summary>Ver pasos (sin complicaciones)</summary>
            <div className="dd-body">
              <PracticeBox>
                <p><strong>Objetivo:</strong> crear un sitio WordPress local que funcione y al que puedas acceder desde wp-admin.</p>
                <ol>
                  <li>Abre <strong>LocalWP</strong></li>
                  <li>Clic en <strong>“+ Create a new site”</strong></li>
                  <li>
                    <strong>Site name:</strong> usa un nombre claro, por ejemplo{" "}
                    <code>portfolio-diseniador</code>
                  </li>
                  <li>
                    <strong>Environment:</strong> selecciona <strong>Preferred</strong> (recomendado)
                  </li>
                  <li>
                    <strong>WordPress admin:</strong>
                    <ul>
                      <li><strong>Username:</strong> elige uno tuyo (evita “admin” en proyectos reales)</li>
                      <li><strong>Password:</strong> una segura</li>
                      <li><strong>Email:</strong> tu correo</li>
                    </ul>
                  </li>
                  <li>Finaliza y espera a que Local cree el sitio</li>
                </ol>
              </PracticeBox>

              <TipBox title="Comprobación rápida (lo mínimo para seguir)">
                <ul>
                  <li>✅ Puedes abrir el sitio con <strong>“Open Site”</strong></li>
                  <li>✅ Puedes entrar al panel con <strong>“WP Admin”</strong></li>
                  <li>✅ Ves el escritorio de WordPress sin errores</li>
                </ul>
                <p>
                  Si esto funciona, ya estamos listos. En este curso <strong>no vamos a complicarnos</strong> ahora con
                  configuraciones avanzadas.
                </p>
              </TipBox>
            </div>
          </details>
        </section>

        {/* 2.3 Ajustes iniciales */}
        <section className="doc-section" id="ajustes-iniciales">
          <h2>2.3 Ajustes iniciales imprescindibles (para tu primer sitio)</h2>

          <details className="dd">
            <summary>Ver checklist inicial (lo que SIEMPRE hacemos)</summary>
            <div className="dd-body">
              <p>
                Antes de empezar a diseñar páginas, hay una serie de ajustes básicos que conviene configurar desde el
                principio. No son “avanzados”: son el <strong>mínimo profesional</strong> para evitar problemas después.Nos vamos 
                a ajustes y vamos a empezar a hacer una configuración inicial. 
              </p>

              <ActivityBox title="Checklist de ajustes iniciales (obligatorio)">
                <ol>
                  <li>
                    <strong>Idioma y zona horaria:</strong> Ajustes → Generales → Idioma, zona horaria y formato de fecha.
                  </li>
                  <li>
                    <strong>Título del sitio y descripción:</strong> Ajustes → Generales → define el nombre del proyecto.
                  </li>
                  <li>
                    <strong>Enlaces permanentes:</strong> Ajustes → Enlaces permanentes → selecciona{" "}
                    <strong>“Nombre de la entrada”</strong>.
                  </li>
                  <li>
                    <strong>Usuarios:</strong> usa un usuario administrador propio (evita “admin” en entornos reales).
                  </li>
                  <li>
                    <strong>Eliminar contenido de ejemplo:</strong> borra la entrada y página de muestra si estorban.
                  </li>
                 
                </ol>
                <p>
                  <em>Nota:</em> Aún no tocamos seguridad avanzada, SSL, Live Links ni debugging. Eso vendrá más adelante.
                </p>
              </ActivityBox>

              <TipBox title="Regla de oro">
                <p>
                  Primero <strong>estructura</strong> (páginas, menú, contenido base). Después <strong>diseño</strong>.
                  Y solo cuando todo funcione, <strong>optimización</strong>.
                </p>
              </TipBox>
            </div>
          </details>
        </section>

        {/* 2.4 Estructura de archivos */}
        <section className="doc-section" id="estructura-archivos">
          <h2>2.4 Estructura de archivos y carpetas (para orientarte)</h2>

          <details className="dd">
            <summary>Ver estructura típica creada por LocalWP</summary>
            <div className="dd-body">
              <p>
                No necesitas memorizar esto ahora, pero sí entender <strong>dónde vive tu WordPress</strong> para cuando
                tengas que tocar temas, plugins o subir recursos.
              </p>
              <p>
  Estas carpetas no están “dentro de WordPress”, sino en <strong>tu propio ordenador</strong>.
  LocalWP crea una carpeta real en tu disco duro para cada sitio que desarrollas en local.
</p>

<p>
  Puedes acceder a ellas de dos formas:
</p>

<ul>
  <li>
    <strong>Desde LocalWP (recomendado):</strong> selecciona tu sitio y pulsa
    <em>“Go to site folder”</em>.
  </li>
  <li>
    <strong>Desde el explorador de archivos:</strong> normalmente en
    <code>C:\Users\TU_USUARIO\Local Sites\</code>.
  </li>
</ul>

<p>
  Dentro de la carpeta <strong>app/public</strong> vive realmente WordPress:
  ahí encontrarás <strong>wp-content</strong>, <strong>wp-admin</strong> y
  el archivo <strong>wp-config.php</strong>.
</p>


              <pre>
                <code>
{`Local Sites/
├── portfolio-diseniador/
    ├── app/
    │   ├── public/           # Tu WordPress (archivos del sitio)
    │   │   ├── wp-content/   # Temas, plugins, uploads
    │   │   ├── wp-admin/     # Panel de administración
    │   │   └── wp-config.php # Configuración
    │   └── sql/              # Base de datos
    └── logs/                 # Registros del servidor`}
                </code>
              </pre>

              <TipBox title="Carpeta clave">
                <p>
                  Si algún día te piden “pásame el tema” o “dónde están las imágenes”, lo más importante es:
                  <strong> wp-content</strong>. Ahí vivirán tus temas, plugins y uploads.
                </p>
              </TipBox>
            </div>
          </details>
        </section>

        <div className="doc-next">
          <a href="/tema3" className="btn btn-primary">
            Siguiente: M3 · Anatomía de WordPress →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
