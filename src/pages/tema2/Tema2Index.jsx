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

<p className="doc-lead">
  Es importante entender desde el principio que <strong>WordPress siempre necesita un tema activo para funcionar</strong>.
  No es posible trabajar en WordPress “sin tema”, ya que el tema es el encargado de mostrar la estructura básica
  de la web (cabecera, contenido y pie).
</p>

<p className="doc-lead">
  Aun así, <strong>tener un tema no significa depender de sus diseños o plantillas</strong>.
  En este curso aprenderemos a usar el tema únicamente como base técnica,
  construyendo el diseño paso a paso con bloques y estilos propios.
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
                El objetivo no es centrarnos en la configuración del servidor, sino en lo que importa: <strong>WordPress + proyectos reales</strong>. No obstante, es importante que entiendas las diferencias entre ambos enfoques para que puedas elegir el que mejor se adapte a tus necesidades en el futuro.

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
            <summary>Ver primeros pasos</summary>
            <div className="dd-body">
              <PracticeBox>
                <p><strong>Objetivo:</strong> crear un sitio WordPress local que funcione y al que puedas acceder desde wp-admin.</p>
                <ol>
                  <li>Descarga e instala LocalWP desde su sitio oficial</li>
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

        {/* =========================
           TEMA X — INSTALACIÓN EN LOCAL CON LOCAL WP
           ========================= */}
        <section className="doc-section" id="instalar-wp-local-localwp">
          <h2>Instalación profesional de WordPress en local con Local WP</h2>

          <p>
            En clase vamos a montar WordPress en nuestro ordenador usando{" "}
            <strong>Local WP (Local by Flywheel)</strong>. Esto nos permite trabajar
            rápido, sin pagar hosting y sin tocar FTP ni bases de datos manualmente.
          </p>

          <div className="callout tip">
            <strong>Idea clave:</strong> con Local <strong>NO</strong> necesitas descargar
            WordPress desde WordPress.org antes. Local lo descarga e instala por ti.
          </div>

          <details className="dd" open>
            <summary>1) ¿Qué estás instalando realmente cuando instalas "Local"?</summary>
            <div className="dd-body">
              <p>
                Local crea un entorno igual que un hosting real, pero en tu ordenador.
                Por dentro incluye:
              </p>
              <ul>
                <li><strong>Servidor web</strong> (Apache o Nginx)</li>
                <li><strong>PHP</strong> (para ejecutar WordPress)</li>
                <li><strong>Base de datos</strong> (MySQL)</li>
                <li><strong>WordPress</strong> (se instala automáticamente)</li>
              </ul>

              <div className="callout">
                Piensa en Local como un <strong>simulador de hosting</strong>: todo ocurre
                en tu PC, pero igual que si estuviera en Internet.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>2) Paso a paso: descarga e instalación de Local WP</summary>
            <div className="dd-body">
              <ol>
                <li>
                  En Google busca <strong>Local WP</strong> o entra a la web oficial de Local.
                </li>
                <li>
                  Pulsa <strong>Download / Install Local</strong>.
                </li>
                <li>
                  Descarga la versión de tu sistema (<strong>Windows / macOS</strong>).
                </li>
                <li>
                  Instala como cualquier programa: <strong>Siguiente → Siguiente → Instalar</strong>.
                </li>
                <li>
                  Abre Local y comprueba que ves el panel principal (la lista de sitios).
                </li>
              </ol>

              <div className="callout warn">
                Si tu antivirus pregunta si permites que Local use red o puertos,
                responde <strong>Permitir</strong> (Local necesita levantar un servidor local).
              </div>
            </div>
          </details>

          <details className="dd" open>
            <summary>3) Paso a paso: crear un WordPress nuevo con Local</summary>
            <div className="dd-body">
              <p>
                Ahora vamos a crear un sitio WordPress listo para trabajar con{" "}
                <strong>Astra + Spectra</strong>.
              </p>

              <ol>
                <li>
                  Pulsa el botón <strong>+ Create a new site</strong>.
                </li>
                <li>
                  En <strong>Site name</strong>, escribe un nombre claro, por ejemplo:
                  <code> senderos-viajes</code> o <code> agencia-senderismo</code>.
                </li>
                <li>
                  Elige el entorno:
                  <ul>
                    <li><strong>Preferred</strong> (recomendado para clase, más rápido)</li>
                    <li>
                      <strong>Custom</strong> (solo si quieres elegir versión de PHP o servidor)
                    </li>
                  </ul>
                </li>
                <li>
                  Crea el usuario administrador:
                  <ul>
                    <li><strong>Username</strong>: <code>admin</code> (o tu nombre)</li>
                    <li><strong>Password</strong>: una contraseña segura</li>
                    <li><strong>Email</strong>: tu correo</li>
                  </ul>
                </li>
                <li>
                  Pulsa <strong>Add Site</strong> y espera a que termine.
                </li>
                <li>
                  Cuando aparezca el sitio en la lista, pulsa:
                  <strong> Start site</strong>.
                </li>
                <li>
                  Pulsa <strong>WP Admin</strong> para entrar al panel de WordPress.
                </li>
              </ol>

              <div className="callout tip">
                Si todo va bien, Local te abrirá el navegador con tu WordPress funcionando
                en una URL tipo <code>http://tusitio.local</code>.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>4) Comprobación rápida: "¿Está bien instalado?"</summary>
            <div className="dd-body">
              <p>Antes de seguir, hacemos 3 comprobaciones:</p>
              <ol>
                <li>
                  En el panel de WordPress, ves el menú lateral:
                  <strong> Entradas, Páginas, Apariencia, Plugins</strong>.
                </li>
                <li>
                  En <strong>Escritorio → Actualizaciones</strong> no aparece ningún error.
                </li>
                <li>
                  Puedes crear una página de prueba en <strong>Páginas → Añadir nueva</strong>.
                </li>
              </ol>

              <div className="callout">
                <strong>Regla de oro:</strong> si puedes entrar a <code>/wp-admin</code> y crear una página,
                tu WordPress está correctamente instalado.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>5) Errores típicos y soluciones rápidas</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <strong>El sitio no abre (pantalla en blanco o error):</strong>{" "}
                  prueba a parar y arrancar el sitio (Stop/Start) desde Local.
                </li>
                <li>
                  <strong>WP Admin no carga:</strong>{" "}
                  revisa que el sitio esté en estado <strong>Running</strong>.
                </li>
                <li>
                  <strong>Puerto ocupado:</strong>{" "}
                  cierra programas que usen servidores locales (XAMPP, WAMP, otros).
                </li>
                <li>
                  <strong>Windows pide permisos:</strong>{" "}
                  permite el acceso en el firewall/antivirus.
                </li>
              </ul>

              <div className="callout warn">
                Importante: no instales Local y XAMPP "para lo mismo" a la vez si no sabes
                gestionarlo. Para clase, nos quedamos con <strong>Local</strong>.
              </div>
            </div>
          </details>

          <div className="box box--activity">
            <h3 className="box__title">Actividad (para entregar)</h3>
            <ol>
              <li>
                Crea un sitio nuevo en Local llamado <strong>senderos-viajes</strong>.
              </li>
              <li>
                Entra a <strong>WP Admin</strong> y crea una página llamada{" "}
                <strong>"Inicio"</strong>.
              </li>
              <li>
                Escribe un texto breve de 3 líneas (lorem o real).
              </li>
              <li>
                Haz una captura donde se vea Local (sitio Running) y otra del WP Admin.
              </li>
            </ol>
          </div>

          <div className="box box--practice">
            <h3 className="box__title">Mini-repaso (preguntas rápidas)</h3>
            <ul>
              <li>¿Por qué no hace falta descargar WordPress.org si usamos Local?</li>
              <li>¿Qué significa que el sitio esté en estado "Running"?</li>
              <li>¿Qué URL sueles usar para entrar al panel de administración?</li>
            </ul>
          </div>
        </section>

        {/* 2.3 Ajustes iniciales */}
        <section className="doc-section" id="ajustes-iniciales">
          <h2>2.3 Ajustes iniciales imprescindibles (para tu primer sitio)</h2>

          <details className="dd">
            <summary>1) Configuración general del sitio (identidad básica)</summary>
            <div className="dd-body">
              <p>
                Lo primero es configurar la identidad del sitio y aspectos técnicos básicos. 
                Esto afecta a cómo se muestra tu web y cómo funcionan internamente las URLs.
              </p>

              <div className="callout">
                <strong>Ruta:</strong> desde el panel de WordPress → <strong>Ajustes → Generales</strong>
              </div>

              <h4>Paso a paso:</h4>
              <ol>
                <li>
                  <strong>Título del sitio:</strong> cambia "Mi sitio WordPress" por el nombre real del proyecto.
                  <br />Ejemplo: <code>Senderos y Viajes</code> o <code>Agencia de Senderismo</code>
                </li>
                <li>
                  <strong>Descripción corta:</strong> escribe en una línea qué hace o vende el negocio.
                  <br />Ejemplo: <code>Rutas de senderismo por la Sierra de Madrid</code>
                </li>
                <li>
                  <strong>Idioma del sitio:</strong> cambia a <strong>Español</strong> si no está ya configurado.
                </li>
                <li>
                  <strong>Zona horaria:</strong> selecciona tu zona. En España → <strong>Madrid</strong>.
                </li>
                <li>
                  <strong>Formato de fecha y hora:</strong> elige el más natural para tu país.
                </li>
              </ol>

              <div className="callout tip">
                <strong>¿Por qué es importante?</strong> El título aparece en el navegador y buscadores. 
                La zona horaria afecta a las fechas de publicación. El idioma cambia textos del tema.
              </div>
            </div>
          </details>

          <p>
            Una vez que tienes WordPress funcionando, <strong>NUNCA empieces a diseñar directamente</strong>. 
            Primero configuramos la base: idioma, URLs, estructura básica. 
            Son 10 minutos que evitan dolores de cabeza después.
          </p>

          <div className="callout tip">
            <strong>Filosofía del curso:</strong> configurar bien desde el principio es más rápido 
            que arreglar problemas después. Estos ajustes son <strong>obligatorios</strong>, no opcionales.
          </div>

          <details className="dd" open>
            <summary>2) Enlaces permanentes (URLs amigables)</summary>
            <div className="dd-body">
              <p>
                Esta configuración decide <strong>cómo se ven las URLs</strong> de tu web. 
                Por defecto, WordPress crea URLs feas como <code>/?p=123</code>. 
                Necesitamos URLs profesionales como <code>/sobre-nosotros/</code>.
              </p>

              <div className="callout">
                <strong>Ruta:</strong> <strong>Ajustes → Enlaces permanentes</strong>
              </div>

              <h4>Configuración obligatoria:</h4>
              <ol>
                <li>
                  Selecciona <strong>"Nombre de la entrada"</strong> (no "Estructura personalizada" ni otros).
                </li>
                <li>
                  Pulsa <strong>Guardar cambios</strong> (¡importante! no lo olvides).
                </li>
                <li>
                  Comprueba que las URLs se ven bien: crea una página de prueba y mira su URL.
                </li>
              </ol>

              <div className="callout warn">
                <strong>Cuidado:</strong> NO cambies esta configuración una vez que el sitio esté en producción 
                o tengas contenido importante. Cambiar URLs rompe enlaces externos.
              </div>

              <div className="callout">
                <strong>URLs antes:</strong> <code>http://tusitio.local/?page_id=5</code><br />
                <strong>URLs después:</strong> <code>http://tusitio.local/sobre-nosotros/</code>
              </div>
            </div>
          </details>

          <details className="dd" open>
            <summary>3) Configuración de lectura (página de inicio)</summary>
            <div className="dd-body">
              <p>
                Decides qué ve el usuario cuando llega a tu web: ¿un blog con entradas recientes 
                o una página estática que tú diseñes?
              </p>

              <div className="callout">
                <strong>Ruta:</strong> <strong>Ajustes → Lectura</strong>
              </div>

              <h4>Para sitios web corporativos (recomendado en este curso):</h4>
              <ol>
                <li>
                  <strong>Tu página de inicio muestra:</strong> selecciona <strong>"Una página estática"</strong>.
                </li>
                <li>
                  <strong>Página de inicio:</strong> crea primero una página llamada "Inicio" y selecciónala aquí.
                </li>
                <li>
                  <strong>Página de entradas:</strong> si planeas tener blog, crea una página "Blog" y asígnala.
                </li>
                <li>
                  Guarda cambios y comprueba que el sitio muestra la página que elegiste.
                </li>
              </ol>

              <div className="callout tip">
                <strong>¿Blog o web estática?</strong> En este curso haremos webs estáticas (como una empresa). 
                Si fuera solo blog, dejarías "Tus últimas entradas".
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>4) Limpieza de contenido de ejemplo</summary>
            <div className="dd-body">
              <p>
                WordPress instala contenido de ejemplo que sobra: artículos, páginas y comentarios de prueba. 
                Mejor eliminarlo antes de empezar con contenido real.
              </p>

              <h4>Qué eliminar:</h4>
              <ol>
                <li>
                  <strong>Entradas de ejemplo:</strong> ve a <strong>Entradas → Todas las entradas</strong> y borra "¡Hola, mundo!".
                </li>
                <li>
                  <strong>Páginas de ejemplo:</strong> ve a <strong>Páginas → Todas las páginas</strong> y borra "Página de ejemplo".
                </li>
                <li>
                  <strong>Comentarios de ejemplo:</strong> ve a <strong>Comentarios</strong> y borra comentarios de prueba.
                </li>
                <li>
                  <strong>Plugins innecesarios:</strong> en <strong>Plugins → Plugins instalados</strong>, desactiva "Akismet" y "Hello Dolly" si no los necesitas.
                </li>
              </ol>

              <div className="callout tip">
                <strong>Tip profesional:</strong> antes de crear contenido real, siempre limpia. 
                Es más fácil empezar desde cero que borrar después mezclado con contenido bueno.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>5) Seguridad básica del usuario administrador</summary>
            <div className="dd-body">
              <p>
                Si usaste "admin" como usuario en Local, está bien para desarrollo. 
                Pero es bueno crear un usuario con nombre personalizado para practicar seguridad.
              </p>

              <h4>Crear usuario administrador personalizado:</h4>
              <ol>
                <li>
                  Ve a <strong>Usuarios → Añadir nuevo</strong>.
                </li>
                <li>
                  <strong>Nombre de usuario:</strong> tu nombre o iniciales (ejemplo: <code>ivan_martinez</code>).
                </li>
                <li>
                  <strong>Correo electrónico:</strong> tu email real.
                </li>
                <li>
                  <strong>Rol:</strong> <strong>Administrador</strong>.
                </li>
                <li>
                  <strong>Generar contraseña:</strong> usa una segura (WordPress sugiere una).
                </li>
                <li>
                  Pulsa <strong>Añadir nuevo usuario</strong>.
                </li>
                <li>
                  Cierra sesión y entra con el usuario nuevo para comprobar que funciona.
                </li>
              </ol>

              <div className="callout warn">
                <strong>Solo en local:</strong> no te preocupes demasiado por la seguridad ahora. 
                En un sitio real, nunca uses "admin" y siempre contraseñas muy seguras.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>6) Configuración de comentarios y discusión</summary>
            <div className="dd-body">
              <p>
                Para webs corporativas normalmente no queremos comentarios abiertos en todas las páginas. 
                Mejor configurarlo desde el principio.
              </p>

              <div className="callout">
                <strong>Ruta:</strong> <strong>Ajustes → Comentarios</strong>
              </div>

              <h4>Para sitios corporativos típicos:</h4>
              <ul>
                <li>
                  <strong>Desactiva:</strong> "Permitir que otros dejen comentarios en los artículos nuevos"
                </li>
                <li>
                  <strong>Desactiva:</strong> "Intentar notificar a cualquier blog enlazado desde el artículo"
                </li>
                <li>
                  El resto puedes dejarlo como está de momento.
                </li>
              </ul>

              <div className="callout">
                <strong>Nota:</strong> si planeas un blog activo con comunidad, deja los comentarios activados. 
                Para webs de empresa, mejor desactivados.
              </div>
            </div>
          </details>

          <div className="box box--activity">
            <h3 className="box__title">Checklist de comprobación (antes de seguir)</h3>
            <p>Marca cada punto cuando lo hayas completado:</p>
            <ul>
              <li>✅ Título del sitio cambiado (no "Mi sitio WordPress")</li>
              <li>✅ Zona horaria configurada correctamente</li>
              <li>✅ Enlaces permanentes en "Nombre de la entrada"</li>
              <li>✅ Página estática como inicio (no blog de entradas)</li>
              <li>✅ Contenido de ejemplo eliminado</li>
              <li>✅ Usuario administrador personalizado creado (opcional pero recomendado)</li>
            </ul>
            <p>
              <strong>Comprobación final:</strong> navega por el sitio desde la página de inicio 
              y verifica que las URLs se ven profesionales.
            </p>
          </div>

          <div className="box box--practice">
            <h3 className="box__title">Errores típicos y cómo evitarlos</h3>
            <ul>
              <li>
                <strong>Olvidar guardar cambios:</strong> WordPress NO guarda automáticamente en ajustes. 
                Siempre pulsa "Guardar cambios".
              </li>
              <li>
                <strong>No crear página de inicio antes:</strong> si eliges "página estática" pero no existe la página, verás errores.
              </li>
              <li>
                <strong>Cambiar permalinks con contenido:</strong> hazlo solo al principio. 
                Después rompes enlaces existentes.
              </li>
              <li>
                <strong>No comprobar el frontend:</strong> después de cada cambio, mira cómo se ve el sitio público.
              </li>
            </ul>
          </div>

          <TipBox title="Regla de oro para este curso">
            <p>
              Primero <strong>configuración</strong> (estos ajustes). Después <strong>estructura</strong> (páginas, menú). 
              Luego <strong>contenido</strong>. Y solo al final <strong>diseño y optimización</strong>. Nunca al revés.
            </p>
          </TipBox>

          <details className="dd" open>
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
