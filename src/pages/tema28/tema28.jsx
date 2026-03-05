import React from "react";
import TopicLayout from "../../components/TopicLayout";
import { TipBox, WarningBox, PracticeBox, ActivityBox } from "../../components/ContentBoxes";

export default function TemaHooksWordPress() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="doc-kicker">UF1841 · M24 · WordPress · Desarrollo profesional</p>
        <h1>Hooks en WordPress: Actions y Filters</h1>
        <p className="doc-lead">
          Ya has usado hooks sin saber que eran hooks. En este tema vas a entender qué están haciendo por dentro,
          para qué sirven y cómo crear el tuyo propio desde cero.
        </p>

        <TipBox title="🎯 Objetivo del tema">
          <p>
            Entender el sistema de hooks de WordPress: qué son, cómo funcionan, la diferencia entre
            <strong> actions</strong> y <strong>filters</strong>, y crear tu primer hook personalizado.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <section className="doc-index" aria-label="Índice del tema">
        <h2>Contenido</h2>
        <ol>
          <li><a href="#ya-los-usaste">Ya los has usado sin saberlo</a></li>
          <li><a href="#que-es-un-hook">¿Qué es un hook?</a></li>
          <li><a href="#como-funciona">Cómo funciona por dentro</a></li>
          <li><a href="#actions">Action Hooks: ejecutar código</a></li>
          <li><a href="#filters">Filter Hooks: modificar datos</a></li>
          <li><a href="#diferencia">Diferencia entre Action y Filter</a></li>
          <li><a href="#primer-hook">Crea tu primer hook (paso a paso)</a></li>
          <li><a href="#hooks-comunes">Hooks más usados en WordPress</a></li>
          <li><a href="#ejemplo-proyecto">Ejemplo real: encolado condicional de estilos</a></li>
          <li><a href="#hooks-astra">Hooks del tema Astra</a></li>
          <li><a href="#practica">Práctica evaluable</a></li>
          <li><a href="#apendice">Apéndice: versión extendida (sin perder contenido)</a></li>
        </ol>
      </section>

      {/* SECCIÓN 1 */}
      <section id="ya-los-usaste" className="doc-section">
        <h2>1) Ya los has usado sin saberlo</h2>

        <p>
          Si has trabajado con el archivo <code>functions.php</code> en algún momento del curso, ya has usado hooks.
          Por ejemplo, cuando encolaste estilos escribiste algo así:
        </p>

        <pre><code>{`add_action( 'wp_enqueue_scripts', 'ps_enqueue_styles' );

function ps_enqueue_styles() {
    wp_enqueue_style( 'mi-estilo', get_stylesheet_uri() );
}`}</code></pre>

        <p>
          En ese momento sabías que funcionaba, pero quizás no tenías claro <em>por qué</em> había que escribirlo
          así, o qué era exactamente <code>add_action</code>.
        </p>

        <TipBox title="💡 La buena noticia">
          <p>
            Lo que acabas de leer <strong>es un hook</strong>. Ya tienes experiencia práctica.
            En este tema vas a poner nombre y estructura a algo que ya conoces.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 2 */}
      <section id="que-es-un-hook" className="doc-section">
        <h2>2) ¿Qué es un hook?</h2>

        <details className="dd" open>
          <summary>La metáfora del gancho</summary>
          <div className="dd-body">
            <p>
              La palabra <strong>hook</strong> significa <em>gancho</em> en inglés.
            </p>
            <p>
              Imagina que WordPress es una cadena de montaje. En distintos puntos de esa cadena
              hay <strong>ganchos</strong> donde se puede colgar código adicional.
              WordPress pasa por esos puntos durante la carga de la página, y si hay algo colgado,
              lo ejecuta o lo pasa por ese código.
            </p>
            <p>
              Tú no tocas la cadena de montaje (el core de WordPress). Simplemente <strong>cuelgas
              tu código en los ganchos disponibles</strong>.
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>La definición técnica</summary>
          <div className="dd-body">
            <p>
              Un <strong>hook</strong> es un punto específico en el código de WordPress (o de un tema o plugin)
              donde se permite añadir o modificar comportamiento sin editar ese código directamente.
            </p>
            <p>Los hooks permiten:</p>
            <ul>
              <li>Añadir código que se ejecuta en un momento concreto de la carga.</li>
              <li>Modificar datos antes de que se muestren al usuario.</li>
              <li>Extender WordPress, temas y plugins sin tocar sus archivos.</li>
              <li>Que el tema hijo "hable" con el tema padre de forma limpia.</li>
            </ul>
          </div>
        </details>

        <WarningBox title="⚠️ ¿Por qué no editamos el core directamente?">
          <p>
            Porque cualquier actualización de WordPress, del tema o del plugin
            <strong> sobreescribiría tus cambios</strong>. Los hooks son la solución:
            tu código vive en tu tema hijo y sobrevive a las actualizaciones.
          </p>
        </WarningBox>
      </section>

      {/* SECCIÓN 3 */}
      <section id="como-funciona" className="doc-section">
        <h2>3) Cómo funciona por dentro</h2>

        <details className="dd" open>
          <summary>El flujo completo en 3 pasos</summary>
          <div className="dd-body">
            <p><strong>Paso 1 — WordPress (o el tema/plugin) crea el hook:</strong></p>
            <pre><code>{`// En algún archivo del core o del tema:
do_action( 'wp_footer' );`}</code></pre>

            <p>
              <code>do_action()</code> es como decir: <em>"Aquí estoy. Si alguien quiere ejecutar
              algo en este punto, adelante."</em>
            </p>

            <p><strong>Paso 2 — Tú conectas tu función a ese hook:</strong></p>
            <pre><code>{`add_action( 'wp_footer', 'mi_funcion' );`}</code></pre>

            <p>
              <code>add_action()</code> es como decir: <em>"Cuando llegues al hook wp_footer,
              ejecuta mi función."</em>
            </p>

            <p><strong>Paso 3 — WordPress llega al hook y ejecuta tu función:</strong></p>
            <pre><code>{`function mi_funcion() {
    echo '<p>¡Hola desde el footer!</p>';
}`}</code></pre>
          </div>
        </details>

        <PracticeBox title="📌 El diagrama visual">
          <pre><code>{`WordPress carga la página
        │
        ▼
[...código del core...]
        │
        ▼
   do_action('wp_footer')   ◄── punto del hook
        │
        ├──► mi_funcion()   ◄── tu código se ejecuta aquí
        │
        ▼
[...continúa la carga...]`}</code></pre>
        </PracticeBox>
      </section>

      {/* SECCIÓN 4 */}
      <section id="actions" className="doc-section">
        <h2>4) Action Hooks: ejecutar código en un momento concreto</h2>

        <details className="dd" open>
          <summary>¿Para qué sirven los Actions?</summary>
          <div className="dd-body">
            <p>
              Los <strong>Action Hooks</strong> permiten <strong>ejecutar código</strong> en un punto
              específico de la carga de WordPress.
            </p>
            <p>
              Sirven cuando quieres <em>añadir algo</em>: un mensaje, un script, un estilo,
              un bloque HTML, una notificación...
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>Sintaxis de add_action()</summary>
          <div className="dd-body">
            <pre><code>{`add_action( 'nombre_del_hook', 'nombre_de_tu_funcion' );`}</code></pre>
            <table className="table">
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Qué es</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>nombre_del_hook</code></td>
                  <td>El punto del código donde se cuelga</td>
                  <td><code>'wp_footer'</code></td>
                </tr>
                <tr>
                  <td><code>nombre_de_tu_funcion</code></td>
                  <td>La función que quieres ejecutar</td>
                  <td><code>'mi_mensaje_footer'</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo completo</summary>
          <div className="dd-body">
            <pre><code>{`// 1. Conectamos nuestra función al hook wp_footer
add_action( 'wp_footer', 'mi_mensaje_footer' );

// 2. Definimos qué hace la función
function mi_mensaje_footer() {
    echo '<p style="text-align:center; color:#666;">
            Sitio creado por mí como práctica del curso.
          </p>';
}`}</code></pre>
            <p>
              Cuando WordPress termina de renderizar el cuerpo de la página y llega al footer,
              ejecuta <code>mi_mensaje_footer()</code> y el mensaje aparece.
            </p>
          </div>
        </details>
      </section>

      {/* SECCIÓN 5 */}
      <section id="filters" className="doc-section">
        <h2>5) Filter Hooks: modificar datos antes de mostrarlos</h2>

        <details className="dd" open>
          <summary>¿Para qué sirven los Filters?</summary>
          <div className="dd-body">
            <p>
              Los <strong>Filter Hooks</strong> permiten <strong>modificar un dato</strong> antes
              de que WordPress lo muestre o lo devuelva.
            </p>
            <p>
              La diferencia clave con los actions: los filters siempre reciben un valor y
              <strong> deben devolverlo</strong> (modificado o no).
            </p>
          </div>
        </details>

        <details className="dd">
          <summary>Sintaxis de add_filter()</summary>
          <div className="dd-body">
            <pre><code>{`add_filter( 'nombre_del_hook', 'nombre_de_tu_funcion' );

function nombre_de_tu_funcion( $valor ) {
    // modifica $valor
    return $valor; // OBLIGATORIO devolver algo
}`}</code></pre>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo: añadir un prefijo al título de cada entrada</summary>
          <div className="dd-body">
            <pre><code>{`add_filter( 'the_title', 'prefijo_en_titulos' );

function prefijo_en_titulos( $titulo ) {
    // Solo en el frontend, no en el admin
    if ( is_admin() ) {
        return $titulo;
    }
    return '📍 Paseo: ' . $titulo;
}`}</code></pre>
            <p>
              WordPress pasa el título al filter. Tu función lo recibe en <code>$titulo</code>,
              le añade el prefijo y lo devuelve. WordPress muestra el valor devuelto.
            </p>
          </div>
        </details>

        <WarningBox title="⚠️ Regla fundamental de los filters">
          <p>
            Siempre debes escribir <code>return</code> al final de la función de un filter.
            Si olvidas el <code>return</code>, el dato se pierde y puede romper la página
            (título vacío, contenido desaparecido...).
          </p>
        </WarningBox>
      </section>

      {/* SECCIÓN 6 */}
      <section id="diferencia" className="doc-section">
        <h2>6) Diferencia entre Action y Filter</h2>

        <details className="dd" open>
          <summary>Resumen visual</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>ACTION</th>
                  <th>FILTER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>¿Qué hace?</strong></td>
                  <td>Ejecuta código</td>
                  <td>Modifica un dato</td>
                </tr>
                <tr>
                  <td><strong>Función de WordPress</strong></td>
                  <td><code>add_action()</code></td>
                  <td><code>add_filter()</code></td>
                </tr>
                <tr>
                  <td><strong>Cómo se define el hook</strong></td>
                  <td><code>do_action()</code></td>
                  <td><code>apply_filters()</code></td>
                </tr>
                <tr>
                  <td><strong>¿Devuelve algo?</strong></td>
                  <td>No (usa echo o hace algo)</td>
                  <td>Sí, siempre (<code>return</code>)</td>
                </tr>
                <tr>
                  <td><strong>Ejemplo de uso</strong></td>
                  <td>Añadir un mensaje al footer</td>
                  <td>Modificar el título de una entrada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <TipBox title="💡 Truco para recordarlo">
          <p>
            <strong>Action = Acción.</strong> Haces algo (imprimir, enviar, registrar).<br />
            <strong>Filter = Filtro.</strong> Un dato entra, pasa por tu filtro y sale modificado.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 7 — PRIMER HOOK PASO A PASO */}
      <section id="primer-hook" className="doc-section">
        <h2>7) Crea tu primer hook (paso a paso)</h2>

        <p>
          Vamos a crear un hook que muestra un mensaje de créditos en el footer de tu sitio.
          Es sencillo, visible y te permite ver el resultado inmediatamente.
        </p>

        <details className="dd" open>
          <summary>Paso 1 — Abre el archivo functions.php del tema hijo</summary>
          <div className="dd-body">
            <p>
              Navega en el escritorio de WordPress a <strong>Apariencia → Editor de archivos de tema</strong>
              y selecciona tu tema hijo. O ábrelo directamente desde Local WP en:
            </p>
            <pre><code>{`wp-content/themes/tu-tema-hijo/functions.php`}</code></pre>
            <p>
              Si el archivo está vacío o es nuevo, debe tener al menos la etiqueta de apertura de PHP:
            </p>
            <pre><code>{`<?php`}</code></pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 2 — Escribe add_action()</summary>
          <div className="dd-body">
            <p>
              Debajo del <code>&lt;?php</code> (o al final del archivo si ya tiene contenido),
              escribe:
            </p>
            <pre><code>{`add_action( 'wp_footer', 'mis_creditos_footer' );`}</code></pre>
            <p>
              Con esto le dices a WordPress: <em>"Cuando llegues al punto wp_footer,
              ejecuta la función llamada mis_creditos_footer."</em>
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 3 — Define la función</summary>
          <div className="dd-body">
            <p>A continuación define qué hace la función:</p>
            <pre><code>{`function mis_creditos_footer() {
    echo '<div style="
        text-align: center;
        padding: 1rem;
        background: #f0f4ff;
        color: #333;
        font-size: 0.9rem;
        border-top: 2px solid #0073aa;
    ">
        <p>🎓 Proyecto creado durante el curso de WordPress · 2026</p>
    </div>';
}`}</code></pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 4 — Guarda y comprueba</summary>
          <div className="dd-body">
            <ol>
              <li>Guarda el archivo <code>functions.php</code>.</li>
              <li>Ve al frontend de tu sitio web (la parte pública, no el admin).</li>
              <li>Baja hasta el pie de página.</li>
              <li>Deberías ver el mensaje de créditos justo antes del cierre del body.</li>
            </ol>
          </div>
        </details>

        <PracticeBox title="📌 El código completo que va en functions.php">
          <pre><code>{`<?php

// ─── Hook: mensaje de créditos en el footer ─────────────────────────
add_action( 'wp_footer', 'mis_creditos_footer' );

function mis_creditos_footer() {
    echo '<div style="
        text-align: center;
        padding: 1rem;
        background: #f0f4ff;
        color: #333;
        font-size: 0.9rem;
        border-top: 2px solid #0073aa;
    ">
        <p>🎓 Proyecto creado durante el curso de WordPress · 2026</p>
    </div>';
}`}</code></pre>
        </PracticeBox>

        <TipBox title="✅ Si funciona, ya entiendes los hooks">
          <p>
            Has creado un hook desde cero: conectaste tu función a un punto del código de WordPress
            sin tocar ningún archivo del core ni del tema padre.
            A partir de aquí, el mecanismo es siempre el mismo para cualquier hook.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 8 */}
      <section id="hooks-comunes" className="doc-section">
        <h2>8) Hooks más usados en WordPress</h2>

        <details className="dd" open>
          <summary>Action hooks del core</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Hook</th>
                  <th>Cuándo se ejecuta</th>
                  <th>Uso típico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>wp_enqueue_scripts</code></td>
                  <td>Al cargar CSS/JS del frontend</td>
                  <td>Añadir estilos o scripts</td>
                </tr>
                <tr>
                  <td><code>wp_head</code></td>
                  <td>Dentro del <code>&lt;head&gt;</code> HTML</td>
                  <td>Añadir meta tags, scripts inline</td>
                </tr>
                <tr>
                  <td><code>wp_footer</code></td>
                  <td>Antes de cerrar el <code>&lt;/body&gt;</code></td>
                  <td>Scripts, mensajes, créditos</td>
                </tr>
                <tr>
                  <td><code>init</code></td>
                  <td>Al iniciar WordPress (muy temprano)</td>
                  <td>Registrar CPTs, taxonomías</td>
                </tr>
                <tr>
                  <td><code>admin_init</code></td>
                  <td>Al inicializar el área de admin</td>
                  <td>Settings, opciones de admin</td>
                </tr>
                <tr>
                  <td><code>save_post</code></td>
                  <td>Al guardar una entrada o página</td>
                  <td>Ejecutar lógica al guardar</td>
                </tr>
                <tr>
                  <td><code>wp_login</code></td>
                  <td>Cuando un usuario hace login</td>
                  <td>Registrar accesos, redirigir</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <details className="dd">
          <summary>Filter hooks del core más habituales</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Hook</th>
                  <th>Qué dato filtra</th>
                  <th>Uso típico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>the_title</code></td>
                  <td>El título de entradas y páginas</td>
                  <td>Añadir prefijos, modificar texto</td>
                </tr>
                <tr>
                  <td><code>the_content</code></td>
                  <td>El contenido completo de una entrada</td>
                  <td>Añadir texto antes o después</td>
                </tr>
                <tr>
                  <td><code>the_excerpt</code></td>
                  <td>El extracto de la entrada</td>
                  <td>Personalizar el resumen</td>
                </tr>
                <tr>
                  <td><code>body_class</code></td>
                  <td>Las clases CSS del <code>&lt;body&gt;</code></td>
                  <td>Añadir clases condicionales</td>
                </tr>
                <tr>
                  <td><code>excerpt_length</code></td>
                  <td>Número de palabras del extracto</td>
                  <td>Acortar o alargar el extracto</td>
                </tr>
                <tr>
                  <td><code>login_redirect</code></td>
                  <td>URL de redirección tras login</td>
                  <td>Redirigir a una página concreta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </section>

      {/* SECCIÓN 9 */}
      <section id="ejemplo-proyecto" className="doc-section">
        <h2>9) Ejemplo real: encolado condicional de estilos</h2>

        <p>
          Este es el hook que has usado en el proyecto de paseos para cargar un CSS
          solo en las páginas de tipo "paseo":
        </p>

        <pre><code>{`// Solo cargamos el CSS si estamos viendo un paseo individual
add_action( 'wp_enqueue_scripts', 'ps_enqueue_styles' );

function ps_enqueue_styles() {

    if ( is_singular( 'paseo' ) ) {

        wp_enqueue_style(
            'ps-paseos-style',
            get_stylesheet_directory_uri() . '/assets/css/paseos.css',
            [],       // sin dependencias
            '1.0.0'   // versión del archivo (útil para caché)
        );

    }

}`}</code></pre>

        <details className="dd">
          <summary>¿Qué está pasando aquí línea a línea?</summary>
          <div className="dd-body">
            <ul>
              <li>
                <code>add_action( 'wp_enqueue_scripts', 'ps_enqueue_styles' )</code> — cuando WordPress carga los assets del frontend, ejecuta nuestra función.
              </li>
              <li>
                <code>is_singular( 'paseo' )</code> — comprueba si la página actual es una entrada individual del CPT "paseo". Solo en ese caso cargamos el CSS.
              </li>
              <li>
                <code>wp_enqueue_style()</code> — la función de WordPress para añadir un archivo CSS de forma correcta (con control de caché y dependencias).
              </li>
            </ul>
          </div>
        </details>

        <TipBox title="💡 Por qué no ponemos el CSS con &lt;link&gt; directamente">
          <p>
            Podríamos copiar una etiqueta <code>&lt;link&gt;</code> en la cabecera, pero eso es frágil y poco profesional.
            Usando <code>wp_enqueue_style()</code> dentro de un hook, WordPress gestiona el orden de carga, la versión del archivo y evita duplicados automáticamente.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 10 */}
      <section id="hooks-astra" className="doc-section">
        <h2>10) Hooks del tema Astra</h2>

        <p>
          Los temas también crean sus propios hooks. Astra incluye puntos de anclaje específicos
          que te permiten añadir contenido en zonas concretas del tema sin modificar sus archivos.
        </p>

        <details className="dd" open>
          <summary>Hooks de Astra más útiles</summary>
          <div className="dd-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Hook de Astra</th>
                  <th>Dónde se coloca el contenido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>astra_before_header</code></td>
                  <td>Justo antes del header</td>
                </tr>
                <tr>
                  <td><code>astra_header</code></td>
                  <td>Dentro del header, en su inicio</td>
                </tr>
                <tr>
                  <td><code>astra_after_header</code></td>
                  <td>Justo después del header</td>
                </tr>
                <tr>
                  <td><code>astra_before_content</code></td>
                  <td>Antes del área de contenido</td>
                </tr>
                <tr>
                  <td><code>astra_after_content</code></td>
                  <td>Después del área de contenido</td>
                </tr>
                <tr>
                  <td><code>astra_before_footer</code></td>
                  <td>Justo antes del footer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo: aviso encima del header</summary>
          <div className="dd-body">
            <pre><code>{`add_action( 'astra_before_header', 'aviso_reservas' );

function aviso_reservas() {
    echo '<div style="
        background: #fff3cd;
        color: #856404;
        text-align: center;
        padding: .6rem;
        font-size: .9rem;
    ">
        📅 Reservas abiertas para Semana Santa.
        <a href="/paseos">Ver paseos disponibles →</a>
    </div>';
}`}</code></pre>
          </div>
        </details>
      </section>

      {/* PRÁCTICA */}
      <section id="practica" className="doc-section">
        <h2>11) Práctica evaluable</h2>

        <ActivityBox title="🧪 Actividad: crea 3 hooks en tu tema hijo">
          <p>Abre el <code>functions.php</code> de tu tema hijo y crea los siguientes hooks:</p>
          <ol>
            <li>
              <strong>Hook 1 — Mensaje en el footer (action):</strong><br />
              Muestra un párrafo con tu nombre, la fecha del proyecto y el nombre del curso, justo antes del cierre del body. Usa el hook <code>wp_footer</code>.
            </li>
            <li>
              <strong>Hook 2 — Aviso encima del header (action con Astra):</strong><br />
              Usa <code>astra_before_header</code> para mostrar una barra de aviso de color amarillo con el texto que quieras.
            </li>
            <li>
              <strong>Hook 3 — Modificar la longitud del extracto (filter):</strong><br />
              Usa el filter <code>excerpt_length</code> para cambiar la longitud del extracto a 20 palabras. La función debe recibir <code>$length</code> y devolver <code>20</code>.
            </li>
          </ol>
          <pre><code>{`// Pista para el hook 3:
add_filter( 'excerpt_length', 'mi_longitud_extracto' );

function mi_longitud_extracto( $length ) {
    return 20;
}`}</code></pre>
        </ActivityBox>

        <PracticeBox title="✅ Criterios de evaluación">
          <ul>
            <li>Los 3 hooks funcionan correctamente en el frontend.</li>
            <li>El código está en <code>functions.php</code> del tema hijo, no del padre.</li>
            <li>Los nombres de las funciones son únicos (no genéricos como <code>mi_funcion</code>).</li>
            <li>Hay un comentario encima de cada hook explicando qué hace.</li>
            <li>Ningún hook rompe la web (el filter siempre devuelve el valor).</li>
          </ul>
        </PracticeBox>
      </section>

      {/* APÉNDICE: tu contenido suelto (integrado sin perder líneas) */}
      <section id="apendice" className="doc-section">
        <h2>Apéndice: versión extendida (contenido íntegro)</h2>

        <p>
          Un <strong>hook</strong> es un punto específico del código de WordPress donde se permite
          añadir o modificar funcionalidades sin modificar el código original.
        </p>

        <p>
          Es como si WordPress dijera:
        </p>

        <pre><code>{`"Aquí voy a ejecutar algo.
Si alguien quiere añadir código en este punto, puede hacerlo."`}</code></pre>

        <p>
          Gracias a los hooks podemos:
        </p>

        <ul>
          <li>Modificar el comportamiento de WordPress</li>
          <li>Añadir funcionalidades nuevas</li>
          <li>Modificar el contenido antes de mostrarse</li>
          <li>Extender temas y plugins sin modificar su código</li>
        </ul>
      </section>

      {/* SECCIÓN 2 */}
      <section className="doc-section">
        <h2>2. Quién crea los hooks</h2>

        <p>
          Los hooks no los creamos nosotros normalmente.
        </p>

        <p>Los hooks pueden venir de tres lugares:</p>

        <ul>
          <li>WordPress (core)</li>
          <li>Temas (por ejemplo Astra)</li>
          <li>Plugins</li>
        </ul>

        <pre><code>{`WORDPRESS / TEMA / PLUGIN

define un hook con

do_action('nombre_hook')`}</code></pre>

        <p>
          Ese hook se convierte en un punto donde podemos conectar nuestras funciones.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className="doc-section">
        <h2>3. Cómo conectamos nuestro código</h2>

        <p>
          Para conectar nuestro código usamos:
        </p>

        <pre><code>{`add_action()`}</code></pre>

        <p>
          Esta función pertenece al core de WordPress y sirve para conectar nuestra
          función a un hook existente.
        </p>

        <pre><code>{`add_action('wp_footer', 'mi_funcion');

function mi_funcion() {
  echo "Hola alumnos";
}`}</code></pre>

        <p>
          Cuando WordPress llega al hook <code>wp_footer</code>, ejecuta nuestra función.
        </p>
      </section>

      {/* SECCIÓN 4 */}
      <section className="doc-section">
        <h2>4. Qué hace realmente add_action()</h2>

        <p>
          La función <code>add_action()</code> conecta nuestra función con un hook existente.
        </p>

        <p>Su estructura básica es:</p>

        <pre><code>{`add_action( 'nombre_del_hook', 'nombre_de_la_funcion' );`}</code></pre>

        <table className="table">
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Significado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>nombre_del_hook</td>
              <td>hook creado con do_action()</td>
            </tr>

            <tr>
              <td>nombre_de_la_funcion</td>
              <td>función que nosotros definimos</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* SECCIÓN 5 */}
      <section className="doc-section">
        <h2>5. Tipos de Hooks</h2>

        <p>Existen dos tipos de hooks:</p>

        <ul>
          <li><strong>Action Hooks</strong></li>
          <li><strong>Filter Hooks</strong></li>
        </ul>
      </section>

      {/* ACTION */}
      <section className="doc-section">
        <h2>6. Action Hooks</h2>

        <p>
          Los <strong>Action Hooks</strong> ejecutan código en un momento concreto.
        </p>

        <p>Ejemplo:</p>

        <pre><code>{`add_action('wp_footer', 'mensaje_footer');

function mensaje_footer() {
 echo "<p>Gracias por visitar la web</p>";
}`}</code></pre>

        <p>
          Este código se ejecutará cuando WordPress llegue al hook <code>wp_footer</code>.
        </p>
      </section>

      {/* FILTER */}
      <section className="doc-section">
        <h2>7. Filter Hooks</h2>

        <p>
          Los <strong>Filter Hooks</strong> permiten modificar datos antes de mostrarlos.
        </p>

        <pre><code>{`add_filter('the_title', 'cambiar_titulo');

function cambiar_titulo($title) {
 return "Paseo: " . $title;
}`}</code></pre>

        <p>
          Aquí estamos modificando el título antes de que se muestre.
        </p>
      </section>

      {/* DIFERENCIA */}
      <section className="doc-section">
        <h2>Diferencia entre Action y Filter</h2>

        <pre><code>{`ACTION
ejecuta código

add_action()

FILTER
modifica datos

add_filter()`}</code></pre>
      </section>

      {/* ASTRA */}
      <section className="doc-section">
        <h2>8. Hooks del tema Astra</h2>

        <p>
          Los temas también crean sus propios hooks.
        </p>

        <p>Por ejemplo Astra incluye hooks como:</p>

        <pre><code>{`astra_before_header
astra_after_header
astra_before_content
astra_after_content`}</code></pre>

        <p>Ejemplo:</p>

        <pre><code>{`add_action('astra_before_header', 'mensaje');

function mensaje() {
 echo "Bienvenidos a nuestra web";
}`}</code></pre>
      </section>

      {/* EJEMPLO REAL */}
      <section className="doc-section">
        <h2>9. Ejemplo aplicado al proyecto de paseos</h2>

        <p>
          En nuestro proyecto utilizamos un hook para cargar estilos en páginas de paseo.
        </p>

        <pre><code>{`function ps_enqueue_styles() {

 if ( is_singular('paseo') ) {

  wp_enqueue_style(
    'ps-paseos-style',
    get_stylesheet_directory_uri() . '/assets/css/paseos.css'
  );

 }

}

add_action('wp_enqueue_scripts', 'ps_enqueue_styles');`}</code></pre>
      </section>

      {/* DIAGRAMA */}
      <section className="doc-section">
        <h2>Cómo funciona internamente el sistema de hooks</h2>

        <pre><code>{`WORDPRESS / TEMA / PLUGIN

define un hook

do_action('wp_footer')

        │
        │
        ▼

add_action('wp_footer', 'mi_funcion')

        │
        ▼

WordPress ejecuta

mi_funcion()`}</code></pre>
      </section>

      {/* EJERCICIO */}
      <section className="doc-section">
        <ActivityBox title="Ejercicio práctico">
          <p>
            Crear un hook que muestre un mensaje antes del footer.
          </p>

          <pre><code>{`add_action('wp_footer', 'mensaje_footer');

function mensaje_footer() {
 echo "<p>Gracias por visitar nuestra web</p>";
}`}</code></pre>
        </ActivityBox>
      </section>

      {/* RESUMEN */}
      <section className="doc-section">
        <TipBox title="Gran resumen del tema">
          <ul>
            <li>Los hooks permiten modificar WordPress sin tocar el core.</li>
            <li>Los hooks pueden venir de WordPress, de un tema o de un plugin.</li>
            <li>Los hooks se crean con <code>do_action()</code> o <code>apply_filters()</code>.</li>
            <li>Nosotros conectamos funciones usando <code>add_action()</code> o <code>add_filter()</code>.</li>
            <li>Las funciones suelen colocarse en <code>functions.php</code> del tema hijo.</li>
            <li>Los hooks son la base del desarrollo profesional en WordPress.</li>
          </ul>
        </TipBox>
      </section>

      {/* CIERRE */}
      <footer className="doc doc-hero" style={{ marginTop: "1.2rem" }}>
        <h2 style={{ margin: 0 }}>Resumen del tema</h2>
        <p className="doc-lead">
          Los hooks son el mecanismo que hace WordPress extensible sin tocar su código.
          Ahora que entiendes cómo funcionan, todo lo que has hecho antes cobra sentido.
        </p>

        <TipBox title="🧠 Lo que debes recordar">
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li><strong>Hook</strong> = punto de anclaje en el código de WordPress.</li>
            <li><strong>Action</strong> = ejecuta código → usa <code>add_action()</code>.</li>
            <li><strong>Filter</strong> = modifica un dato → usa <code>add_filter()</code> y siempre <code>return</code>.</li>
            <li>Tu código va siempre en <code>functions.php</code> del tema hijo.</li>
            <li>Nunca edites el core ni los archivos del tema padre.</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#ya-los-usaste">Repasar desde el inicio</a>
        </div>
      </footer>
    </TopicLayout>
  );
}