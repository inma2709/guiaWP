import React from "react";
import TopicLayout from "../../components/TopicLayout";
import { TipBox, WarningBox, PracticeBox, ActivityBox } from "../../components/ContentBoxes";

export default function TemaExportarLocalWP() {
  return (
    <TopicLayout>

      {/* HERO */}
      <header className="doc doc-hero">
        <p className="doc-kicker">· M29 · WordPress · Local WP</p>
        <h1>Exportar tu proyecto WordPress con LocalWP y llevártelo a casa</h1>
        <p className="doc-lead">
          Has terminado el proyecto <strong>Paseando por Sevilla</strong> en el ordenador del aula.
          En este tema aprenderás a exportarlo correctamente, llevártelo a casa en un USB o la nube,
          e instalarlo en tu propio ordenador para seguir trabajando.
        </p>

        <TipBox title="🎯 Objetivo del tema">
          <p>
            Exportar un sitio WordPress completo (archivos + base de datos) desde LocalWP,
            e importarlo en otro ordenador usando también LocalWP, sin perder ningún dato ni configuración.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <section className="doc-index" aria-label="Índice del tema">
        <h2>Contenido</h2>
        <ol>
          <li><a href="#que-se-exporta">¿Qué hay que exportar exactamente?</a></li>
          <li><a href="#localwp-export">Exportar el sitio desde LocalWP (paso a paso)</a></li>
          <li><a href="#que-contiene-el-zip">¿Qué contiene el archivo exportado?</a></li>
          <li><a href="#llevar-archivo">Llevarte el archivo a casa</a></li>
          <li><a href="#instalar-localwp">Instalar LocalWP en tu ordenador de casa</a></li>
          <li><a href="#importar">Importar el sitio en LocalWP (paso a paso)</a></li>
          <li><a href="#primeros-pasos">Primeros pasos después de importar</a></li>
          <li><a href="#problemas-comunes">Problemas comunes y soluciones</a></li>
          <li><a href="#practica">Práctica evaluable</a></li>
        </ol>
      </section>

      {/* SECCIÓN 1 */}
      <section id="que-se-exporta" className="doc-section">
        <h2>1) ¿Qué hay que exportar exactamente?</h2>

        <p>
          Un sitio WordPress tiene <strong>dos partes</strong> que deben moverse juntas.
          Si pierdes una de las dos, el sitio no funcionará en el ordenador destino.
        </p>

        <details className="dd" open>
          <summary>Las dos partes de un sitio WordPress</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Parte</th>
                  <th>Qué contiene</th>
                  <th>Dónde está</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Archivos</strong></td>
                  <td>
                    El core de WordPress, tu tema hijo, plugins instalados,
                    imágenes subidas, CSS y PHP personalizados
                  </td>
                  <td>Carpeta <code>wp-content/</code> y resto de archivos PHP</td>
                </tr>
                <tr>
                  <td><strong>Base de datos</strong></td>
                  <td>
                    Todas las entradas, páginas, menús, opciones, paseos creados,
                    usuarios, configuración de plugins...
                  </td>
                  <td>MySQL — solo accesible a través de la herramienta de administración</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <WarningBox title="⚠️ Error típico del alumno">
          <p>
            Copiar solo la carpeta del sitio (los archivos) y olvidarse de la base de datos.
            El resultado: WordPress arranca pero no hay ningún contenido, ni páginas, ni paseos, ni menús.
            Todo el trabajo desaparece.
          </p>
          <p>
            <strong>LocalWP exporta las dos partes juntas y automáticamente.</strong> Por eso vamos a usarlo.
          </p>
        </WarningBox>

        <TipBox title="💡 ¿Por qué no copiar y pegar la carpeta directamente?">
          <p>
            La carpeta del sitio en LocalWP está vinculada a una URL y una configuración local.
            Si la copias tal cual al otro ordenador, WordPress no arrancará porque las rutas
            y la URL cambiarán. LocalWP gestiona todo esto automáticamente al exportar e importar.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 2 */}
      <section id="localwp-export" className="doc-section">
        <h2>2) Exportar el sitio desde LocalWP (paso a paso)</h2>

        <p>
          LocalWP tiene una función de exportación integrada que empaqueta los archivos y la
          base de datos en un único archivo <code>.zip</code>. Es la forma más limpia y segura de mover el sitio.
        </p>

        <details className="dd" open>
          <summary>Paso 1 — Abre LocalWP en el ordenador del aula</summary>
          <div className="dd-body">
            <p>
              Abre LocalWP. Verás la lista de sitios que tienes creados.
              Localiza <strong>Paseando por Sevilla</strong> (o como hayas llamado a tu proyecto).
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 2 — Detén el sitio antes de exportar</summary>
          <div className="dd-body">
            <p>
              Antes de exportar, asegúrate de que el sitio está <strong>detenido</strong>.
              Si está en marcha, haz clic en el botón <strong>"Stop site"</strong> (botón verde arriba a la derecha).
            </p>
            <p>
              Exportar con el sitio en marcha puede generar un archivo incompleto o corrupto.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 3 — Menú contextual → Export</summary>
          <div className="dd-body">
            <p>
              Haz <strong>clic derecho</strong> sobre el nombre del sitio en la lista de la izquierda.
              Aparecerá un menú con varias opciones. Selecciona:
            </p>
            <pre><code>{`Export site`}</code></pre>
            <p>
              También puedes encontrar esta opción en el menú de tres puntos (<code>···</code>)
              que aparece al pasar el ratón por encima del sitio.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 4 — Elige qué exportar</summary>
          <div className="dd-body">
            <p>
              LocalWP te preguntará qué quieres incluir en el export. Deja las opciones
              predeterminadas activadas:
            </p>
            <ul>
              <li>✅ <strong>Database</strong> — la base de datos (imprescindible).</li>
              <li>✅ <strong>WordPress files</strong> — todos los archivos del sitio.</li>
            </ul>
            <p>
              Si quieres ahorrar espacio y el proyecto no tiene muchas imágenes subidas,
              puedes desmarcar <code>wp-content/uploads</code>, pero para llevarte el proyecto
              completo lo más cómodo es exportar todo.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 5 — Elige dónde guardar el archivo</summary>
          <div className="dd-body">
            <p>
              LocalWP te pedirá una ubicación donde guardar el archivo <code>.zip</code>.
              Elige una carpeta que recuerdes bien, por ejemplo el Escritorio o tu carpeta de Documentos.
            </p>
            <p>
              El proceso tardará unos segundos o minutos según el tamaño del sitio.
              Cuando termine verás el mensaje <strong>"Export complete"</strong>.
            </p>
          </div>
        </details>

        <PracticeBox title="📌 Resumen del proceso de exportación">
          <pre><code>{`1. Detén el sitio (Stop site)
2. Clic derecho sobre el sitio → Export site
3. Marca: ✅ Database  ✅ WordPress files
4. Selecciona la carpeta destino
5. Espera el mensaje "Export complete"
6. Resultado: archivo nombreDelSitio.zip`}</code></pre>
        </PracticeBox>
      </section>

      {/* SECCIÓN 3 */}
      <section id="que-contiene-el-zip" className="doc-section">
        <h2>3) ¿Qué contiene el archivo exportado?</h2>

        <p>
          El <code>.zip</code> que genera LocalWP no es simplemente una copia de la carpeta del sitio.
          Es un <strong>paquete especial</strong> que LocalWP sabe cómo leer cuando lo importa.
        </p>

        <details className="dd" open>
          <summary>Contenido del archivo .zip</summary>
          <div className="dd-body">
            <pre><code>{`nombreSitio.zip
├─ app/
│  └─ public/          ← todos los archivos de WordPress
│     ├─ wp-admin/
│     ├─ wp-content/
│     │  ├─ themes/
│     │  │  └─ tu-tema-hijo/
│     │  ├─ plugins/
│     │  └─ uploads/
│     └─ wp-config.php
└─ sql/
   └─ local.sql        ← volcado completo de la base de datos`}</code></pre>
            <p>
              El archivo <code>local.sql</code> es el que contiene todos tus paseos, páginas,
              menús y configuraciones. Sin él solo tendrías una instalación vacía de WordPress.
            </p>
          </div>
        </details>

        <TipBox title="💡 ¿Puedo abrir el zip yo mismo?">
          <p>
            Sí, puedes descomprimirlo y ver su contenido, pero <strong>no debes modificarlo</strong>.
            LocalWP necesita que la estructura interna esté intacta para importarlo correctamente.
            Ábrelo solo para comprobar que el archivo <code>local.sql</code> está dentro.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 4 */}
      <section id="llevar-archivo" className="doc-section">
        <h2>4) Llevarte el archivo a casa</h2>

        <details className="dd" open>
          <summary>¿Cuánto pesa el archivo?</summary>
          <div className="dd-body">
            <p>
              El tamaño depende de cuántas imágenes hayas subido a WordPress.
              Un proyecto de prácticas típico pesa entre <strong>50 MB y 500 MB</strong>,
              aunque puede ser más si tienes muchas imágenes en alta resolución.
            </p>
            <p>
              Si pesa más de 2 GB, considera desmarcar <code>wp-content/uploads</code> en el paso de exportación
              y copiar esa carpeta por separado.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Opciones para llevar el archivo</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Cuándo usarlo</th>
                  <th>Limitación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>🔌 <strong>USB / Pendrive</strong></td>
                  <td>Siempre es la opción más fiable</td>
                  <td>Necesitas el USB a mano</td>
                </tr>
                <tr>
                  <td>☁️ <strong>Google Drive / OneDrive</strong></td>
                  <td>Si el archivo es menor de 5 GB</td>
                  <td>Necesitas subir y bajar (tiempo)</td>
                </tr>
                <tr>
                  <td>📧 <strong>Email</strong></td>
                  <td>No recomendado — límite de tamaño</td>
                  <td>Máximo 25 MB en la mayoría de clientes</td>
                </tr>
                <tr>
                  <td>🔗 <strong>WeTransfer</strong></td>
                  <td>Archivos grandes sin cuenta</td>
                  <td>El enlace expira en 7 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <WarningBox title="⚠️ Antes de salir del aula, comprueba">
          <ul>
            <li>El archivo <code>.zip</code> está en el USB o subido a la nube.</li>
            <li>El archivo se puede abrir y tiene más de 1 MB (si pesa 0 bytes, algo falló).</li>
            <li>Recuerdas las credenciales del admin de WordPress (usuario y contraseña).</li>
          </ul>
        </WarningBox>
      </section>

      {/* SECCIÓN 5 */}
      <section id="instalar-localwp" className="doc-section">
        <h2>5) Instalar LocalWP en tu ordenador de casa</h2>

        <p>
          Para importar el sitio en casa necesitas tener <strong>LocalWP instalado</strong>.
          Si ya lo tienes, salta directamente a la sección 6.
        </p>

        <details className="dd" open>
          <summary>Descarga e instalación</summary>
          <div className="dd-body">
            <ol>
              <li>
                Ve a <strong>localwp.com</strong> y descarga la versión para tu sistema operativo
                (Windows, Mac o Linux).
              </li>
              <li>
                Ejecuta el instalador y sigue los pasos. No requiere configuración especial.
              </li>
              <li>
                LocalWP instalará de forma automática los componentes que necesita
                (PHP, MySQL, Nginx). Puede tardar unos minutos la primera vez.
              </li>
              <li>
                Cuando abra LocalWP por primera vez, verás la pantalla de bienvenida con
                la lista de sitios vacía. Eso es correcto.
              </li>
            </ol>
          </div>
        </details>

        <TipBox title="💡 Requisitos mínimos del sistema">
          <p>
            LocalWP funciona en Windows 10/11, macOS 10.14 o superior, y Ubuntu 18+.
            Necesita al menos <strong>4 GB de RAM</strong> y <strong>2 GB de espacio libre en disco</strong>
            (más el espacio del proyecto).
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 6 */}
      <section id="importar" className="doc-section">
        <h2>6) Importar el sitio en LocalWP (paso a paso)</h2>

        <p>
          Con LocalWP abierto en tu ordenador de casa y el archivo <code>.zip</code> a mano,
          el proceso de importación es muy sencillo.
        </p>

        <details className="dd" open>
          <summary>Método 1 — Arrastrar el .zip a LocalWP (el más rápido)</summary>
          <div className="dd-body">
            <ol>
              <li>Abre LocalWP.</li>
              <li>
                Busca el archivo <code>.zip</code> exportado en tu USB o en la carpeta de descargas.
              </li>
              <li>
                <strong>Arrastra el archivo .zip</strong> directamente sobre la ventana de LocalWP.
              </li>
              <li>
                LocalWP detectará automáticamente que es un sitio exportado y abrirá
                el asistente de importación.
              </li>
            </ol>
          </div>
        </details>

        <details className="dd" open>
          <summary>Método 2 — Menú File → Import site</summary>
          <div className="dd-body">
            <ol>
              <li>Abre LocalWP.</li>
              <li>
                En el menú superior haz clic en <strong>File → Import site</strong>
                (o usa el botón <strong>"+"</strong> de la esquina inferior izquierda
                y selecciona "Import existing site").
              </li>
              <li>
                Busca y selecciona tu archivo <code>.zip</code>.
              </li>
              <li>
                LocalWP abrirá el asistente de importación.
              </li>
            </ol>
          </div>
        </details>

        <details className="dd" open>
          <summary>El asistente de importación — qué hacer en cada pantalla</summary>
          <div className="dd-body">
            <p><strong>Pantalla 1 — Nombre del sitio local:</strong></p>
            <p>
              LocalWP te propone el nombre del sitio original. Puedes cambiarlo si quieres
              (por ejemplo <code>paseando-sevilla-casa</code>). Este nombre determina la URL local.
            </p>

            <p><strong>Pantalla 2 — Entorno (Environment):</strong></p>
            <p>
              Deja las opciones predeterminadas:
            </p>
            <ul>
              <li><strong>PHP:</strong> la versión que proponga LocalWP (normalmente 8.x).</li>
              <li><strong>Web server:</strong> nginx (recomendado) o apache.</li>
              <li><strong>MySQL:</strong> la versión que proponga.</li>
            </ul>
            <p>Si no sabes qué elegir, haz clic en <strong>"Continue"</strong> sin cambiar nada.</p>

            <p><strong>Pantalla 3 — Confirmación:</strong></p>
            <p>
              Revisa el resumen y haz clic en <strong>"Import site"</strong>.
              LocalWP descomprimirá el archivo y configurará el sitio. Puede tardar
              entre 1 y 5 minutos según el tamaño.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>¿Cómo sé que la importación ha terminado?</summary>
          <div className="dd-body">
            <p>
              Cuando termine, el sitio aparecerá en la lista de la izquierda de LocalWP
              con un indicador <strong>verde</strong> (sitio en marcha) o gris (sitio detenido).
            </p>
            <p>
              Haz clic en <strong>"Open site"</strong> para ver el frontend,
              o en <strong>"WP Admin"</strong> para entrar al escritorio de WordPress.
            </p>
          </div>
        </details>

        <PracticeBox title="📌 Resumen del proceso de importación">
          <pre><code>{`1. Abre LocalWP en tu ordenador de casa
2. Arrastra el .zip sobre LocalWP
   (o File → Import site → selecciona el .zip)
3. Ponle nombre al sitio local
4. Deja las opciones de entorno por defecto → Continue
5. Haz clic en "Import site"
6. Espera entre 1 y 5 minutos
7. Resultado: el sitio aparece en la lista ✅`}</code></pre>
        </PracticeBox>
      </section>

      {/* SECCIÓN 7 */}
      <section id="primeros-pasos" className="doc-section">
        <h2>7) Primeros pasos después de importar</h2>

        <p>
          El sitio ya está importado. Antes de seguir trabajando, comprueba que todo
          funciona correctamente con estos pasos.
        </p>

        <details className="dd" open>
          <summary>Paso 1 — Entra al escritorio de WordPress</summary>
          <div className="dd-body">
            <p>
              En LocalWP, selecciona tu sitio y haz clic en <strong>"WP Admin"</strong>.
              Se abrirá el navegador con la pantalla de login de WordPress.
            </p>
            <p>
              Usa las <strong>mismas credenciales</strong> que tenías en el aula
              (usuario y contraseña del administrador).
            </p>
            <pre><code>{`URL: http://tu-sitio.local/wp-admin
Usuario: el mismo que usabas en clase
Contraseña: la misma que usabas en clase`}</code></pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 2 — Comprueba que el contenido está</summary>
          <div className="dd-body">
            <p>Navega por el escritorio y verifica:</p>
            <ul>
              <li>✅ Los paseos están en <strong>Paseos → Todos los paseos</strong>.</li>
              <li>✅ Las páginas (Inicio, Contacto...) están en <strong>Páginas</strong>.</li>
              <li>✅ Los menús están configurados en <strong>Apariencia → Menús</strong>.</li>
              <li>✅ Los plugins aparecen en <strong>Plugins → Plugins instalados</strong>.</li>
              <li>✅ El tema hijo está activo en <strong>Apariencia → Temas</strong>.</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 3 — Visita el frontend del sitio</summary>
          <div className="dd-body">
            <p>
              En LocalWP haz clic en <strong>"Open site"</strong>. Deberías ver el sitio tal y como
              estaba en el ordenador del aula: mismo diseño, mismos paseos, mismo menú.
            </p>
            <p>
              Si ves el sitio pero sin estilos (solo texto), sigue el paso de solución de problemas
              de URLs en la sección siguiente.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>Paso 4 — Regenera los permalinks</summary>
          <div className="dd-body">
            <p>
              Después de importar, es habitual que las URLs internas de WordPress necesiten
              regenerarse. Es un proceso de 2 segundos:
            </p>
            <ol>
              <li>Ve a <strong>Ajustes → Enlaces permanentes</strong>.</li>
              <li>
                Sin cambiar nada, haz clic en el botón <strong>"Guardar cambios"</strong>.
              </li>
              <li>
                WordPress regenerará las reglas de reescritura de URLs. Los paseos y páginas
                volverán a ser accesibles correctamente.
              </li>
            </ol>
          </div>
        </details>

        <TipBox title="✅ Si ves el sitio completo con diseño y contenido, todo ha ido bien">
          <p>
            Ya tienes el proyecto funcionando en tu ordenador de casa. Puedes seguir trabajando
            exactamente desde donde lo dejaste en el aula.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 8 */}
      <section id="problemas-comunes" className="doc-section">
        <h2>8) Problemas comunes y soluciones</h2>

        <details className="dd" open>
          <summary>❌ El sitio se importa pero aparece en blanco o sin estilos</summary>
          <div className="dd-body">
            <p><strong>Causa:</strong> La URL del sitio ha cambiado (es distinta en casa que en el aula)
            y WordPress todavía tiene la URL antigua guardada en la base de datos.</p>
            <p><strong>Solución:</strong></p>
            <ol>
              <li>
                En LocalWP, haz clic en la pestaña <strong>"Database"</strong> de tu sitio
                y luego en <strong>"Open Adminer"</strong>. Se abrirá una herramienta de gestión de la base de datos.
              </li>
              <li>
                En Adminer, haz clic en la tabla <strong><code>wp_options</code></strong>.
              </li>
              <li>
                Busca las filas <code>siteurl</code> y <code>home</code> (están entre las primeras).
              </li>
              <li>
                Edita los valores y pon la nueva URL que te indica LocalWP
                (aparece en el panel del sitio, debajo del nombre, por ejemplo <code>http://paseando-sevilla.local</code>).
              </li>
              <li>
                Guarda los cambios y recarga el sitio.
              </li>
            </ol>
          </div>
        </details>

        <details className="dd">
          <summary>❌ LocalWP no reconoce el archivo .zip al importar</summary>
          <div className="dd-body">
            <p><strong>Causa:</strong> El archivo puede estar corrupto o fue generado con una versión
            muy antigua de LocalWP.</p>
            <p><strong>Solución:</strong></p>
            <ul>
              <li>Comprueba que el archivo pesa más de unos pocos kilobytes
              (un .zip vacío o corrupto pesa casi nada).</li>
              <li>Vuelve al aula y repite el proceso de exportación.</li>
              <li>
                Asegúrate de que el sitio estaba <strong>detenido</strong> antes de exportar.
              </li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>❌ Los plugins aparecen pero están desactivados</summary>
          <div className="dd-body">
            <p><strong>Causa:</strong> Algunos plugins (especialmente los de pago o de licencias)
            desactivan su licencia cuando detectan que el sitio está en un dominio diferente.</p>
            <p><strong>Solución:</strong></p>
            <ul>
              <li>
                Ve a <strong>Plugins → Plugins instalados</strong> y activa manualmente
                los que estén desactivados.
              </li>
              <li>
                Si algún plugin de licencia pide activación, usa la misma clave de licencia
                que tenías en el aula (o ignóralo si es para prácticas).
              </li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>❌ Las imágenes de los paseos no aparecen</summary>
          <div className="dd-body">
            <p><strong>Causa:</strong> Las imágenes se guardan en <code>wp-content/uploads/</code>.
            Si al exportar deseleccionaste esa carpeta, las imágenes no viajaron con el proyecto.</p>
            <p><strong>Solución:</strong></p>
            <ul>
              <li>
                Vuelve al aula, exporta de nuevo esta vez marcando <strong>wp-content/uploads</strong>,
                o copia esa carpeta manualmente al USB.
              </li>
              <li>
                En el ordenador de casa, la ruta donde LocalWP guarda los archivos del sitio es:
                <pre><code>{`Windows: C:\\Users\\TuNombre\\Local Sites\\tu-sitio\\app\\public\\wp-content\\uploads
Mac:      /Users/TuNombre/Local Sites/tu-sitio/app/public/wp-content/uploads`}</code></pre>
                Copia tu carpeta <code>uploads</code> ahí directamente.
              </li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>❌ No recuerdo la contraseña del admin</summary>
          <div className="dd-body">
            <p><strong>Solución desde LocalWP:</strong></p>
            <ol>
              <li>
                Selecciona el sitio en LocalWP y haz clic en <strong>"Open site shell"</strong>
                (o la pestaña "Shell").
              </li>
              <li>
                Se abrirá una terminal dentro del entorno del sitio. Escribe:
                <pre><code>{`wp user update admin --user_pass="nueva_contraseña"`}</code></pre>
              </li>
              <li>Ahora ya puedes entrar al admin con la nueva contraseña.</li>
            </ol>
            <p><strong>Alternativa sin terminal:</strong></p>
            <p>
              En la pantalla de login de WordPress, haz clic en
              <strong>"¿Has perdido tu contraseña?"</strong> y sigue el proceso de recuperación por email.
              LocalWP incluye un cliente de correo local: ve a la pestaña <strong>"Mailhog"</strong>
              del sitio para ver los correos generados.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>❌ LocalWP dice "Port in use" o el sitio no arranca</summary>
          <div className="dd-body">
            <p><strong>Causa:</strong> Otro programa (Skype, XAMPP, MAMP, otro servidor web)
            está usando el mismo puerto que necesita LocalWP.</p>
            <p><strong>Solución:</strong></p>
            <ul>
              <li>Cierra cualquier otro programa de servidor web que tengas abierto (XAMPP, MAMP, WampServer).</li>
              <li>
                En LocalWP, haz clic con el botón derecho en el sitio →
                <strong>"Change site domain"</strong> para asignar un puerto diferente.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* PRÁCTICA */}
      <section id="practica" className="doc-section">
        <h2>9) Práctica evaluable</h2>

        <ActivityBox title="🧪 Actividad: exportar e importar el proyecto Paseando por Sevilla">
          <ol>
            <li>
              <strong>En el aula:</strong> exporta el sitio <em>Paseando por Sevilla</em>
              desde LocalWP como archivo <code>.zip</code> incluyendo database y archivos.
            </li>
            <li>
              Guarda el archivo en tu USB o en Google Drive / OneDrive.
            </li>
            <li>
              <strong>En casa:</strong> instala LocalWP si no lo tienes.
            </li>
            <li>
              Importa el <code>.zip</code> en LocalWP.
            </li>
            <li>
              Accede al escritorio de WordPress y verifica:
              <ul>
                <li>Los paseos están presentes.</li>
                <li>El tema hijo está activo.</li>
                <li>Los plugins están instalados.</li>
                <li>El frontend se ve igual que en clase.</li>
              </ul>
            </li>
            <li>
              Regenera los permalinks (<strong>Ajustes → Enlaces permanentes → Guardar cambios</strong>).
            </li>
            <li>
              Haz una captura de pantalla del frontend del sitio funcionando en tu ordenador
              y otra del escritorio de WordPress. Entrégalas junto con la URL local del sitio.
            </li>
          </ol>
        </ActivityBox>

        <PracticeBox title="✅ Criterios de evaluación">
          <ul>
            <li>El sitio se importa correctamente sin errores.</li>
            <li>El contenido (paseos, páginas, menús) está completo.</li>
            <li>El frontend se visualiza con diseño correcto (estilos cargados).</li>
            <li>Los plugins están activos.</li>
            <li>La captura de pantalla muestra el sitio funcionando en el ordenador personal.</li>
          </ul>
        </PracticeBox>
      </section>

      {/* CIERRE */}
      <footer className="doc doc-hero" style={{ marginTop: "1.2rem" }}>
        <h2 style={{ margin: 0 }}>Resumen del tema</h2>
        <p className="doc-lead">
          Mover un sitio WordPress entre ordenadores no es copiar una carpeta: son archivos
          <strong> más</strong> base de datos, juntos. LocalWP hace ese proceso en unos pocos clics.
        </p>

        <TipBox title="🧠 Lo que debes recordar">
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>Un sitio WP = <strong>archivos + base de datos</strong>. Siempre los dos.</li>
            <li>Detén el sitio antes de exportar (<strong>Stop site</strong>).</li>
            <li>LocalWP exporta todo en un <code>.zip</code> → <strong>Export site</strong>.</li>
            <li>En casa: <strong>arrastra el .zip</strong> sobre LocalWP para importar.</li>
            <li>Después de importar: <strong>regenera los permalinks</strong> siempre.</li>
            <li>Si algo falla: revisa la tabla <code>wp_options</code> → <code>siteurl</code> y <code>home</code>.</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#que-se-exporta">Repasar desde el inicio</a>
        </div>
      </footer>

    </TopicLayout>
  );
}
