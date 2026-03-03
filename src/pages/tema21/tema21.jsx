import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function tema21() {
  return (
    <TopicLayout
      title="M21 · Bloque HTML Personalizado"
      subtitle="Inserción directa de código HTML en el editor de bloques de WordPress"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 21</div>
          <h1>Bloque HTML Personalizado</h1>
          <p className="doc-lead">
            Domina la inserción de código HTML personalizado en WordPress para crear contenido avanzado que va más allá de los bloques estándar
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#introduccion">¿Qué es el bloque HTML personalizado?</a></li>
            <li><a href="#cuando-usar">🎯 Cuándo usar HTML personalizado vs otros bloques</a></li>
            <li><a href="#como-agregar">Cómo agregar un bloque HTML personalizado</a></li>
            <li><a href="#sintaxis-basica">Sintaxis HTML básica en WordPress</a>
              <ul>
                <li><a href="#css-en-html">🎨 ¿Dónde poner el CSS? Tres enfoques profesionales</a></li>
              </ul>
            </li>
            <li><a href="#ejemplos-practicos">Ejemplos prácticos y casos de uso</a></li>
            <li><a href="#html-avanzado">HTML avanzado: formularios, tablas y multimedia</a></li>
            <li><a href="#buenas-practicas">Mejores prácticas y consideraciones de seguridad</a></li>
            <li><a href="#ejercicios">Ejercicios prácticos</a></li>
          </ol>
        </div>

        <TipBox title="Nivel del módulo">
          <p>
            Este módulo asume conocimientos básicos de HTML. Si no estás familiarizado con HTML, 
            te recomendamos estudiar primero los fundamentos antes de continuar. El bloque HTML 
            personalizado es una herramienta poderosa para usuarios con conocimientos técnicos.
          </p>
        </TipBox>

        {/* 21.1 */}
        <section className="doc-section" id="introduccion">
          <h2>21.1 ¿Qué es el bloque HTML personalizado?</h2>

          <details className="dd" open>
            <summary>🔍 Introducción al bloque HTML personalizado</summary>
            <div className="dd-body">
              <p>
                El <strong>bloque HTML personalizado</strong> es uno de los bloques más potentes del editor de WordPress (Gutenberg).
                Te permite insertar directamente código HTML en tu contenido, sin restricciones de los bloques predefinidos.
              </p>

              <p><strong>¿Qué puedes hacer con él?</strong></p>
              <ul>
                <li><strong>Crear elementos personalizados:</strong> botones, tablas, formularios específicos</li>
                <li><strong>Embebido avanzado:</strong> códigos de terceros (mapas, widgets, herramientas)</li>
                <li><strong>Estilos específicos:</strong> usar clases CSS personalizadas</li>
                <li><strong>Estructuras complejas:</strong> layouts que no existen en bloques estándar</li>
                <li><strong>Compatibilidad:</strong> código HTML legacy o específico de plantillas</li>
              </ul>

              <WarningBox>
                <p>
                  <strong>Importante:</strong> El bloque HTML personalizado ejecuta el código directamente. 
                  Usalo solo si comprendes lo que estás haciendo, ya que código incorrecto puede afectar 
                  el funcionamiento de tu sitio.
                </p>
              </WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>⚙️ Cómo funciona internamente</summary>
            <div className="dd-body">
              <p>
                Cuando insertas un bloque HTML personalizado:
              </p>
              <ol>
                <li><strong>Editor:</strong> WordPress muestra un área de texto sin formato</li>
                <li><strong>Guardado:</strong> El HTML se almacena sin modificaciones en la base de datos</li>
                <li><strong>Renderizado:</strong> WordPress incluye tu HTML directamente en la página</li>
                <li><strong>Vista previa:</strong> Puedes alternar entre código y vista previa</li>
              </ol>

              <p>
                A diferencia de otros bloques, WordPress <strong>NO sanitiza</strong> el contenido del bloque HTML,
                lo que te da control total pero también responsabilidad total.
              </p>
            </div>
          </details>
        </section>

        {/* 21.2 */}
        <section className="doc-section" id="cuando-usar">
          <h2>21.2 🎯 Cuándo usar HTML personalizado vs otros bloques</h2>

          <WarningBox title="Principio de uso responsable">
            <p>
              <strong>Regla de oro:</strong> Usa siempre primero los bloques estándar. Solo recurre al HTML 
              personalizado cuando no puedas lograr lo que necesitas con los bloques existentes.
            </p>
          </WarningBox>

          <details className="dd">
            <summary>✅ Cuándo SÍ usar HTML personalizado</summary>
            <div className="dd-body">
              <h4>Casos donde es la mejor opción:</h4>
              <ul>
                <li><strong>Formularios específicos:</strong> Campos personalizados o validaciones especiales</li>
                <li><strong>Tablas complejas:</strong> Con encabezados múltiples o celdas combinadas</li>
                <li><strong>Widgets de terceros:</strong> Códigos embed que requieren HTML específico</li>
                <li><strong>Elementos interactivos:</strong> Botones con JavaScript personalizado</li>
                <li><strong>Layouts únicos:</strong> Diseños que no se pueden lograr con bloques</li>
                <li><strong>Compatibilidad legacy:</strong> Contenido importado de otros sistemas</li>
                <li><strong>SEO avanzado:</strong> Microdata, schema markup específico</li>
              </ul>

              <div className="callout tip">
                <p>
                  <strong>Ejemplo práctico:</strong> Una tabla de precios con celdas combinadas y estilos 
                  específicos sería perfecta para un bloque HTML personalizado.
                </p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>❌ Cuándo NO usar HTML personalizado</summary>
            <div className="dd-body">
              <h4>Evita HTML personalizado para:</h4>
              <ul>
                <li><strong>Texto simple:</strong> Usa el bloque Párrafo</li>
                <li><strong>Imágenes:</strong> Usa el bloque Imagen o Galería</li>
                <li><strong>Listas:</strong> Usa el bloque Lista</li>
                <li><strong>Citas:</strong> Usa el bloque Cita</li>
                <li><strong>Botones simples:</strong> Usa el bloque Botón</li>
                <li><strong>Columnas básicas:</strong> Usa el bloque Columnas</li>
                <li><strong>Videos:</strong> Usa bloques de Video o Embed</li>
              </ul>

              <div className="callout warn">
                <p>
                  <strong>Problema común:</strong> Usar HTML personalizado para tareas simples reduce 
                  la mantenibilidad y hace el contenido menos accesible para otros editores.
                </p>
              </div>
            </div>
          </details>
        </section>

        {/* 21.3 */}
        <section className="doc-section" id="como-agregar">
          <h2>21.3 Cómo agregar un bloque HTML personalizado</h2>

          <PracticeBox title="Paso a paso: Insertar bloque HTML">
            <ol>
              <li><strong>Abre el editor:</strong> Ve a Entradas → Añadir nueva (o edita una página)</li>
              <li><strong>Añade bloque:</strong> Haz clic en el símbolo + para abrir el selector de bloques</li>
              <li><strong>Busca HTML:</strong> Escribe "HTML" en la barra de búsqueda</li>
              <li><strong>Selecciona "HTML personalizado":</strong> Es el bloque con icono &lt;&gt;</li>
              <li><strong>Escribe tu código:</strong> Aparecerá un área de texto donde puedes escribir HTML</li>
              <li><strong>Vista previa:</strong> Haz clic en "Vista previa" para ver el resultado</li>
            </ol>
          </PracticeBox>

          <details className="dd">
            <summary>🎛️ Opciones y controles del bloque</summary>
            <div className="dd-body">
              <h4>Panel lateral del bloque:</h4>
              <ul>
                <li><strong>Configuración avanzada:</strong> Clases CSS adicionales</li>
                <li><strong>Anclaje HTML:</strong> ID único para enlaces directos</li>
              </ul>

              <h4>Barra de herramientas:</h4>
              <ul>
                <li><strong>Vista previa:</strong> Alternar entre código y resultado visual</li>
                <li><strong>Opciones de bloque:</strong> Duplicar, eliminar, transformar</li>
                <li><strong>Configuración:</strong> Abrir panel lateral</li>
              </ul>

              <p>
                <strong>Atajo de teclado:</strong> Puedes escribir <code>/html</code> para insertar 
                rápidamente un bloque HTML personalizado.
              </p>
            </div>
          </details>
        </section>

        {/* 21.4 */}
        <section className="doc-section" id="sintaxis-basica">
          <h2>21.4 Sintaxis HTML básica en WordPress</h2>

          <details className="dd">
            <summary>🏗️ Estructura HTML fundamental</summary>
            <div className="dd-body">
              <p>
                En el bloque HTML personalizado puedes usar cualquier etiqueta HTML válida. 
                Aquí tienes los elementos más comunes:
              </p>

              <h4>Elementos de texto:</h4>
              <pre><code>{`<!-- Párrafos -->
<p>Este es un párrafo normal</p>
<p class="destacado">Párrafo con clase CSS</p>

<!-- Énfasis -->
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<mark>Texto resaltado</mark>

<!-- Enlaces -->
<a href="https://ejemplo.com">Enlace externo</a>
<a href="#seccion">Enlace interno</a>
<a href="mailto:contacto@ejemplo.com">Enlace de email</a>`}</code></pre>

              <h4>Listas:</h4>
              <pre><code>{`<!-- Lista sin orden -->
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ul>

<!-- Lista ordenada -->
<ol>
  <li>Paso uno</li>
  <li>Paso dos</li>
  <li>Paso tres</li>
</ol>

<!-- Lista de definiciones -->
<dl>
  <dt>WordPress</dt>
  <dd>Sistema de gestión de contenidos</dd>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado de hipertexto</dd>
</dl>`}</code></pre>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Elementos visuales y multimedia</summary>
            <div className="dd-body">
              <h4>Imágenes:</h4>
              <pre><code>{`<!-- Imagen básica -->
<img src="/wp-content/uploads/2024/imagen.jpg" alt="Descripción">

<!-- Imagen con atributos completos -->
<img src="/ruta/imagen.jpg" 
     alt="Descripción detallada" 
     width="500" 
     height="300"
     class="imagen-destacada">

<!-- Figura con leyenda -->
<figure>
  <img src="/ruta/imagen.jpg" alt="Descripción">
  <figcaption>Leyenda de la imagen</figcaption>
</figure>`}</code></pre>

              <h4>Contenedores y divisiones:</h4>
              <pre><code>{`<!-- Div genérico -->
<div class="contenedor-personalizado">
  <p>Contenido dentro del div</p>
</div>

<!-- Elementos semánticos -->
<section class="seccion-especial">
  <header>
    <h3>Título de la sección</h3>
  </header>
  <article>
    <p>Contenido del artículo</p>
  </article>
  <footer>
    <p>Pie de la sección</p>
  </footer>
</section>`}</code></pre>
            </div>
          </details>
        </section>

        {/* 21.4.1 - Nueva sección sobre CSS */}
        <section className="doc-section" id="css-en-html">
          <h2>21.4.1 🎨 ¿Dónde poner el CSS? Tres enfoques profesionales</h2>

          <WarningBox title=" ¿CSS en el mismo bloque?">
            <p>
              <strong>Respuesta corta:</strong> SÍ, puedes incluir CSS en el mismo bloque HTML usando la etiqueta <code>&lt;style&gt;</code>.
              Pero hay 3 enfoques diferentes según el caso. Te explico cuál usar en cada situación.
            </p>
          </WarningBox>
<details className="dd">
  <summary>🎨 ¿Dónde colocar el CSS de un bloque HTML personalizado?</summary>

  <div className="dd-body">

    <p>
      Cuando creamos un bloque HTML personalizado en WordPress,
      tenemos varias formas de añadir el CSS.
      La elección depende del contexto del proyecto.
    </p>

    <h3>1️⃣ CSS dentro del propio bloque (inline)</h3>

    <p>
      Puedes incluir una etiqueta <code>&lt;style&gt;</code> dentro del bloque HTML.
    </p>

    <div className="callout tip">
      ✔ Rápido y práctico para pruebas o demos.<br />
      ⚠ No recomendable en proyectos grandes o reutilizables.
    </div>

    <hr />

    <h3>2️⃣ CSS en “Personalizar → CSS adicional”</h3>

    <p>
      Desde el panel de WordPress:
    </p>

    <p>
      <strong>Apariencia → Personalizar → CSS adicional</strong>
    </p>

    <p>
      El código que pegues aquí se añade como CSS global del sitio.
    </p>

    <div className="callout tip">
      ✔ Fácil y sin tocar archivos del servidor.<br />
      ✔ Útil cuando no tienes acceso al tema hijo.<br />
      ⚠ Todo el CSS se carga en todas las páginas.
    </div>

    <hr />

    <h3>3️⃣ (Profesional) Crear un archivo CSS independiente en el tema hijo</h3>

    <p>
      Esta es la opción recomendada en proyectos reales.
    </p>

    <h4>📁 Paso 1: Crear el archivo en Visual Studio Code</h4>

    <p>
      Abre tu proyecto WordPress en Visual Studio Code y crea esta estructura
      dentro del tema hijo:
    </p>

<pre><code>{`wp-content/themes/astra-child/
└── assets/
    └── css/
        └── tabla-precios.css`}</code></pre>

    <p>
      Si la carpeta <code>assets</code> no existe, créala manualmente.
    </p>

    <h4>✏ Paso 2: Escribir el CSS en ese archivo</h4>

<pre><code>{`.tabla-precios {
  margin: 2rem 0;
}

.tabla-precios table {
  width: 100%;
  border-collapse: collapse;
}`}</code></pre>

    <h4>🔗 Paso 3: Encolar el archivo en functions.php</h4>

<pre><code>{`function cargar_tabla_precios_css() {

    wp_enqueue_style(
        'tabla-precios-css',
        get_stylesheet_directory_uri() . '/assets/css/tabla-precios.css',
        array(),
        '1.0',
        'all'
    );

}
add_action('wp_enqueue_scripts', 'cargar_tabla_precios_css');`}</code></pre>

    <div className="callout tip">
      <strong>Ventaja clave:</strong><br />
      Separas estructura (HTML) y diseño (CSS).<br />
      El código es reutilizable, limpio y escalable.
    </div>

    <div className="callout warn">
      En proyectos profesionales, esta tercera opción es la más recomendable.
      Permite mantener el proyecto organizado y preparado para crecer.
    </div>
    <div className="warning">
        <strong>Importante:</strong><br />
       Recuerda tener un tema hijo para garantizar que no pierdas tus estilos en posibles actualizaciones
    </div>
<details className="dd" open>
  <summary>🧱 Estructura básica de un Tema Hijo en WordPress</summary>

  <div className="dd-body">

<pre><code>{`wp-content/
└── themes/
    ├── astra/                  # Tema padre (NO se modifica)
    └── astra-child/            # Tema hijo (aquí trabajamos)
        ├── style.css           # Hoja de estilos principal del tema hijo
        ├── functions.php       # Funciones personalizadas y encolado de assets
        │
        ├── screenshot.png      # Imagen del tema en el panel (opcional)
        │
        ├── single.php          # Plantilla individual genérica (opcional)
        ├── page.php            # Plantilla para páginas (opcional)
        ├── archive.php         # Plantilla de listados (opcional)
        │
        ├── template-parts/     # Partes reutilizables (opcional)
        │   ├── card.php
        │   └── meta.php
        │
        ├── assets/             # Recursos organizados (opcional pero profesional)
        │   ├── css/
        │   │   └── custom.css
        │   ├── js/
        │   │   └── scripts.js
        │   └── images/
        │
        └── inc/                # Funciones organizadas en archivos separados
            └── helpers.php`}</code></pre>

    <h3>🔎 ¿Qué hace cada parte?</h3>

    <ul>
      <li>
        <strong>style.css</strong> → Archivo obligatorio. 
        Define que es un tema hijo y contiene estilos globales.
      </li>
      <li>
        <strong>functions.php</strong> → Añade funcionalidades sin tocar el tema padre.
      </li>
      <li>
        <strong>Plantillas (single, page, archive…)</strong> → Sobrescriben el comportamiento visual del tema padre.
      </li>
      <li>
        <strong>assets/</strong> → Organización profesional de CSS, JS e imágenes.
      </li>
      <li>
        <strong>template-parts/</strong> → Componentes reutilizables.
      </li>
      <li>
        <strong>inc/</strong> → Código modular para mantener limpio el proyecto.
      </li>
    </ul>

    <div className="callout tip">
      <strong>Idea clave:</strong><br />
      El tema hijo hereda todo del tema padre.
      Solo añadimos o modificamos lo necesario.
    </div>

    <div className="callout warn">
      Nunca modifiques el tema padre directamente.
      Si se actualiza, perderás los cambios.
    </div>

  </div>
</details>


  </div>
</details>

          <PracticeBox title="🎯 Recomendación profesional: ¿Cuál elegir?">
            <h4>Usa cada método según el caso:</h4>
            <ul>
              <li>
                <strong>Método 1 (CSS inline):</strong> Para componentes únicos, landing pages, 
                elementos especiales que no se repetirán.
              </li>
            
              <li>
                <strong>Método 2 (Customizer):</strong> Para estilos que usarás en múltiples lugares 
                y quieres mantener centralizados.
              </li>
            </ul>

            <div className="callout">
              <h4>⚡ Ejemplo práctico de decisión:</h4>
              <ul>
               
                <li><strong>Cards de productos reutilizables:</strong> Método 3 (Customizer)</li>
              </ul>
            </div>
          </PracticeBox>
        </section>

        {/* 21.5 */}
        <section className="doc-section" id="ejemplos-practicos">
          <h2>21.5 Ejemplos prácticos y casos de uso</h2>

          <details className="dd">
            <summary>📊 Ejemplo: Tabla de precios personalizada</summary>
            <div className="dd-body">
              <p>
                Una tabla de precios con diseño personalizado que no se puede crear con bloques estándar:
              </p>

              <pre><code>{`<div class="tabla-precios">
  <table>
    <thead>
      <tr>
        <th>Plan</th>
        <th>Precio</th>
        <th>Características</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr class="plan-destacado">
        <td><strong>Profesional</strong></td>
        <td><span class="precio">29€</span>/mes</td>
        <td>
          <ul>
            <li>✓ Espacio ilimitado</li>
            <li>✓ SSL gratis</li>
            <li>✓ Soporte 24/7</li>
          </ul>
        </td>
        <td>
          <a href="/contratar" class="btn btn-primario">Contratar</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.tabla-precios { margin: 2rem 0; }
.tabla-precios table { width: 100%; border-collapse: collapse; }
.tabla-precios th, .tabla-precios td { padding: 1rem; border: 1px solid #ddd; }
.plan-destacado { background-color: #f8f9fa; }
.precio { font-size: 1.5em; color: #007cba; font-weight: bold; }
.btn-primario { 
  background: #007cba; 
  color: white; 
  padding: 0.5rem 1rem; 
  text-decoration: none; 
  border-radius: 4px; 
}
</style>`}</code></pre>

              <TipBox>
                <p>
                  <strong>Consejo:</strong> Puedes incluir CSS inline en el mismo bloque HTML 
                  para estilos específicos que no afecten al resto del sitio.
                </p>
              </TipBox>
              <WarningBox>
  <h3>🎨 ¿Meter el CSS dentro del propio bloque HTML?</h3>

  <p>
    Incluir la etiqueta <code>&lt;style&gt;</code> dentro del bloque HTML personalizado
    es una práctica válida en WordPress, pero debe usarse con criterio.
  </p>

  <h4>✅ Ventajas</h4>
  <ul>
    <li>Rápido de implementar (ideal para pruebas o demos).</li>
    <li>No necesitas acceder al tema hijo.</li>
    <li>El estilo queda “aislado” en esa página concreta.</li>
    <li>Útil en prototipos o páginas puntuales.</li>
  </ul>

  <h4>⚠️ Inconvenientes</h4>
  <ul>
    <li>No separa estructura (HTML) y diseño (CSS).</li>
    <li>Difícil de reutilizar en otras páginas.</li>
    <li>No es óptimo para mantenimiento a largo plazo.</li>
    <li>Si repites el mismo estilo en varias páginas, duplicas código.</li>
  </ul>

  <div className="callout tip">
    <strong>Criterio profesional:</strong><br />
    Para pruebas rápidas o contenido muy puntual → puede usarse inline.<br />
    Para proyectos reales y escalables → el CSS debe ir en el tema hijo
    (style.css o un archivo en assets encolado correctamente).
  </div>
</WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>📋 Ejemplo: Formulario de contacto personalizado</summary>
            <div className="dd-body">
              <p>
                Un formulario con campos específicos y validación personalizada:
              </p>

              <pre><code>{`<form id="formulario-presupuesto" method="post" action="/procesar-formulario">
  <fieldset>
    <legend>Solicitud de presupuesto</legend>
    
    <div class="campo-grupo">
      <label for="nombre">Nombre completo *</label>
      <input type="text" id="nombre" name="nombre" required 
             placeholder="Tu nombre y apellidos">
    </div>

    <div class="campo-grupo">
      <label for="email">Email *</label>
      <input type="email" id="email" name="email" required 
             placeholder="tu@email.com">
    </div>

    <div class="campo-grupo">
      <label for="servicio">Tipo de servicio</label>
      <select id="servicio" name="servicio">
        <option value="">Selecciona un servicio</option>
        <option value="web-corporativa">Página web corporativa</option>
        <option value="tienda-online">Tienda online</option>
        <option value="mantenimiento">Mantenimiento web</option>
      </select>
    </div>

    <div class="campo-grupo">
      <label for="mensaje">Describe tu proyecto *</label>
      <textarea id="mensaje" name="mensaje" rows="5" required 
                placeholder="Cuéntanos qué necesitas..."></textarea>
    </div>

    <div class="campo-grupo">
      <input type="checkbox" id="privacidad" name="privacidad" required>
      <label for="privacidad">
        Acepto la <a href="/politica-privacidad">política de privacidad</a> *
      </label>
    </div>

    <button type="submit" class="btn-enviar">Enviar solicitud</button>
  </fieldset>
</form>

<script>
document.getElementById('formulario-presupuesto').addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  
  if (!nombre.trim() || !email.trim()) {
    e.preventDefault();
    alert('Por favor, completa todos los campos obligatorios');
  }
});
</script>`}</code></pre>

              <WarningBox>
                <p>
                  <strong>Importante:</strong> Para procesar formularios necesitarás un plugin como 
                  Contact Form 7 o Gravity Forms, o configurar el procesamiento en el servidor.
                </p>
              </WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>🎯 Ejemplo: Call-to-Action personalizado</summary>
            <div className="dd-body">
              <p>
                Un banner de llamada a la acción con diseño único:
              </p>

              <pre><code>{`<div class="cta-banner">
  <div class="cta-contenido">
    <div class="cta-texto">
      <h3>¿Listo para impulsar tu negocio online?</h3>
      <p>Descarga nuestra guía gratuita con estrategias probadas para aumentar tus ventas en WordPress</p>
      <ul class="cta-beneficios">
        <li>✓ 10 estrategias de conversión</li>
        <li>✓ Plantillas de email marketing</li>
        <li>✓ Checklist de optimización</li>
      </ul>
    </div>
    <div class="cta-formulario">
      <h4>Descarga GRATIS</h4>
      <form action="/suscripcion" method="post">
        <input type="email" placeholder="Tu mejor email" 
               name="email" required class="campo-email">
        <button type="submit" class="btn-descarga">
          Descargar ahora →
        </button>
      </form>
      <p class="disclaimer">No spam. Solo contenido valioso.</p>
    </div>
  </div>
</div>

<style>
.cta-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.cta-contenido {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: center;
}

.cta-beneficios {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.cta-beneficios li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.cta-formulario {
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.campo-email {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.btn-descarga {
  width: 100%;
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-descarga:hover {
  background: #ff5252;
}

.disclaimer {
  font-size: 0.8rem;
  text-align: center;
  margin-top: 0.5rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .cta-contenido {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>`}</code></pre>
            </div>
          </details>
        </section>

        {/* 21.6 */}
        <section className="doc-section" id="html-avanzado">
          <h2>21.6 HTML avanzado: formularios, tablas y multimedia</h2>

          <details className="dd">
            <summary>📐 Tablas complejas con celdas combinadas</summary>
            <div className="dd-body">
              <p>
                Para tablas que requieren celdas combinadas (colspan/rowspan) que no se pueden
                crear con el bloque Tabla de WordPress:
              </p>

              <pre><code>{`<table class="tabla-horarios">
  <caption>Horario de cursos - Marzo 2024</caption>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
      <th>Miércoles</th>
      <th>Jueves</th>
      <th>Viernes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>9:00-10:00</th>
      <td colspan="2" class="curso-largo">WordPress Avanzado</td>
      <td>HTML/CSS</td>
      <td rowspan="2" class="curso-intensivo">
        JavaScript Intensivo
      </td>
      <td>PHP Básico</td>
    </tr>
    <tr>
      <th>10:00-11:00</th>
      <td>SEO</td>
      <td>Marketing</td>
      <td>React</td>
      <!-- JavaScript continúa -->
      <td>Consultoría</td>
    </tr>
  </tbody>
</table>

<style>
.tabla-horarios {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
}

.tabla-horarios th,
.tabla-horarios td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: center;
}

.tabla-horarios th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.curso-largo {
  background-color: #e3f2fd;
  font-weight: bold;
}

.curso-intensivo {
  background-color: #fff3e0;
  font-weight: bold;
  writing-mode: vertical-lr;
  text-orientation: mixed;
}

.tabla-horarios caption {
  caption-side: top;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>`}</code></pre>
            </div>
          </details>

          <details className="dd">
            <summary>🎵 Embebido de multimedia avanzado</summary>
            <div className="dd-body">
              <p>
                Para elementos multimedia que requieren configuración específica:
              </p>

              <pre><code>{`<!-- Audio con controles personalizados -->
<div class="reproductor-audio">
  <h4>Podcast: WordPress Tips</h4>
  <audio controls preload="metadata">
    <source src="/wp-content/uploads/audio/podcast-001.mp3" type="audio/mpeg">
    <source src="/wp-content/uploads/audio/podcast-001.ogg" type="audio/ogg">
    <p>Tu navegador no soporta audio HTML5. 
       <a href="/wp-content/uploads/audio/podcast-001.mp3">Descargar audio</a>
    </p>
  </audio>
  <div class="info-audio">
    <p><strong>Duración:</strong> 15:32 | <strong>Tema:</strong> Optimización de velocidad</p>
  </div>
</div>

<!-- Video con múltiples fuentes -->
<div class="reproductor-video">
  <video width="100%" height="400" controls poster="/ruta/poster.jpg">
    <source src="/video/tutorial.mp4" type="video/mp4">
    <source src="/video/tutorial.webm" type="video/webm">
    <track kind="subtitles" src="/video/subtitulos-es.vtt" 
           srclang="es" label="Español">
    <p>Tu navegador no soporta video HTML5.</p>
  </video>
</div>

<!-- Iframe responsivo -->
<div class="iframe-responsivo">
  <iframe src="https://www.google.com/maps/embed?pb=..." 
          width="100%" 
          height="300" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>

<style>
.reproductor-audio,
.reproductor-video {
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f8f9fa;
}

.info-audio {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.iframe-responsivo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  overflow: hidden;
}

.iframe-responsivo iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>`}</code></pre>
            </div>
          </details>
        </section>

        {/* 21.7 */}
        <section className="doc-section" id="buenas-practicas">
          <h2>21.7 Mejores prácticas y consideraciones de seguridad</h2>

          <WarningBox title="⚠️ Consideraciones de seguridad">
            <p>
              El bloque HTML personalizado ejecuta código directamente. Un HTML malicioso 
              puede comprometer la seguridad de tu sitio. Sigue siempre estas prácticas seguras.
            </p>
          </WarningBox>

          <details className="dd">
            <summary>🔒 Buenas prácticas de seguridad</summary>
            <div className="dd-body">
              <h4>QUE SÍ hacer:</h4>
              <ul>
                <li><strong>Validar código:</strong> Revisa siempre el HTML antes de publicar</li>
                <li><strong>Usar HTTPS:</strong> Para todos los recursos externos (imágenes, scripts)</li>
                <li><strong>Escapar datos:</strong> Si incluyes datos dinámicos, usa funciones de escape</li>
                <li><strong>Atributos alt:</strong> Siempre incluir descripciones en imágenes</li>
                <li><strong>Roles de usuario:</strong> Limitar quién puede usar bloques HTML</li>
                <li><strong>Backup regular:</strong> Mantener copias de seguridad frecuentes</li>
              </ul>

              <h4>QUE NO hacer:</h4>
              <ul>
                <li><strong>JavaScript no confiable:</strong> No incluir scripts de fuentes desconocidas</li>
                <li><strong>Formularios sin validación:</strong> Siempre validar datos del servidor</li>
                <li><strong>Enlaces sin rel:</strong> Usar rel="noopener" en enlaces externos</li>
                <li><strong>Código hardcodeado:</strong> Evitar URLs absolutas que cambien</li>
                <li><strong>Estilos globales:</strong> No usar estilos que afecten todo el sitio</li>
              </ul>

              <div className="callout tip">
                <p>
                  <strong>Consejo:</strong> Usa el validador HTML de W3C para verificar 
                  que tu código es válido antes de publicar.
                </p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📱 Responsividad y accesibilidad</summary>
            <div className="dd-body">
              <h4>Responsividad:</h4>
              <pre><code>{`/* Mobile first approach */
.mi-elemento {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .mi-elemento {
    width: 50%;
    padding: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .mi-elemento {
    width: 33.333%;
    padding: 2rem;
  }
}

/* Evitar overflow horizontal */
.contenedor {
  max-width: 100%;
  overflow-x: auto;
}`}</code></pre>

              <h4>Accesibilidad:</h4>
              <pre><code>{`<!-- Etiquetas semánticas -->
<main>
  <article>
    <header>
      <h1>Título principal</h1>
    </header>
    <section>
      <h2>Subsección</h2>
      <p>Contenido...</p>
    </section>
  </article>
</main>

<!-- Formularios accesibles -->
<form>
  <label for="email">Email (requerido)</label>
  <input type="email" 
         id="email" 
         name="email" 
         required 
         aria-describedby="email-help">
  <div id="email-help">Usaremos tu email solo para notificaciones</div>
</form>

<!-- Enlaces descriptivos -->
<a href="/guia-wordpress" 
   aria-label="Descargar guía completa de WordPress en PDF">
  Descargar guía →
</a>`}</code></pre>
            </div>
          </details>

          <details className="dd">
            <summary>⚡ Optimización y rendimiento</summary>
            <div className="dd-body">
              <h4>Optimización de código:</h4>
              <ul>
                <li><strong>CSS inline mínimo:</strong> Solo para estilos únicos del componente</li>
                <li><strong>JavaScript defer/async:</strong> Para scripts externos</li>
                <li><strong>Imágenes optimizadas:</strong> Usar formatos modernos (WebP)</li>
                <li><strong>Lazy loading:</strong> Para contenido multimedia pesado</li>
                <li><strong>Minificación:</strong> Remover espacios innecesarios en producción</li>
              </ul>

              <pre><code>{`<!-- Imagen optimizada -->
<img src="/imagen.webp" 
     alt="Descripción" 
     loading="lazy"
     width="800" 
     height="600">

<!-- Script optimizado -->
<script src="/mi-script.js" defer></script>

<!-- CSS crítico inline, resto diferido -->
<style>
.componente-critico {
  /* Solo estilos críticos above-the-fold */
}
</style>

<link rel="preload" href="/estilos-diferidos.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/estilos-diferidos.css"></noscript>`}</code></pre>
            </div>
          </details>
        </section>

        {/* 21.8 */}
        <section className="doc-section" id="ejercicios">
          <h2>21.8 Ejercicios prácticos</h2>

          <ActivityBox title="Ejercicio 1: Tabla de comparación">
            <p><strong>Objetivo:</strong> Crear una tabla comparativa de planes de hosting</p>
            
            <h4>Instrucciones:</h4>
            <ol>
              <li>Crea una nueva página o entrada</li>
              <li>Agrega un bloque HTML personalizado</li>
              <li>Crea una tabla con las siguientes columnas: Plan, Precio, Espacio, Ancho de banda, Soporte</li>
              <li>Incluye 3 planes diferentes (Básico, Profesional, Empresarial)</li>
              <li>Destaca visualmente el plan "recomendado"</li>
              <li>Añade estilos CSS para hacer la tabla responsive</li>
            </ol>

            <div className="callout">
              <p><strong>Bonus:</strong> Añade iconos ✓ y ✗ para las características incluidas/no incluidas</p>
            </div>
          </ActivityBox>

          <ActivityBox title="Ejercicio 2: Formulario de registro">
            <p><strong>Objetivo:</strong> Crear un formulario de registro a newsletter con validación básica</p>
            
            <h4>Requisitos técnicos:</h4>
            <ul>
              <li>Campos: Nombre, Email, Intereses (checkboxes), Acepto condiciones</li>
              <li>Validación HTML5 nativa</li>
              <li>Estilos personalizados responsive</li>
              <li>Mensaje de confirmación con JavaScript</li>
              <li>Accesibilidad: labels asociados, aria-describedby</li>
            </ul>

            <TipBox>
              <p>
                Para procesar el formulario, usa la action="/wp-admin/admin-post.php" 
                y crea una función en functions.php, o usa un plugin de formularios.
              </p>
            </TipBox>
          </ActivityBox>

          <ActivityBox title="Ejercicio 3: Card de testimonios">
            <p><strong>Objetivo:</strong> Diseñar cards de testimonios con diseño avanzado</p>
            
            <h4>Elementos a incluir:</h4>
            <ul>
              <li>Foto del cliente (circular)</li>
              <li>Testimonio entrecomillado</li>
              <li>Nombre y empresa del cliente</li>
              <li>Estrellas de valoración (★★★★★)</li>
              <li>Efectos hover sutiles</li>
              <li>Grid responsivo para múltiples testimonios</li>
            </ul>

            <div className="callout warn">
              <p>
                <strong>Reto adicional:</strong> Implementa un slider de testimonios 
                con JavaScript vanilla (sin dependencias).
              </p>
            </div>
          </ActivityBox>

          <PracticeBox title="Proyecto final: Landing page completa">
            <p>
              <strong>Desafío avanzado:</strong> Combina todo lo aprendido para crear 
              una landing page usando solo bloques HTML personalizados.
            </p>

            <h4>Secciones requeridas:</h4>
            <ol>
              <li><strong>Hero:</strong> Título, subtítulo, CTA principal, imagen/video</li>
              <li><strong>Características:</strong> Grid de 3-4 bloques con iconos</li>
              <li><strong>Testimonios:</strong> Slider o grid de testimonios</li>
              <li><strong>Precios:</strong> Tabla comparativa de planes</li>
              <li><strong>FAQ:</strong> Accordión con preguntas frecuentes</li>
              <li><strong>Contacto:</strong> Formulario completo</li>
            </ol>

            <h4>Criterios de evaluación:</h4>
            <ul>
              <li>✅ Responsividad en móvil, tablet y desktop</li>
              <li>✅ Accesibilidad (navegación por teclado, lectores de pantalla)</li>
              <li>✅ Rendimiento (imágenes optimizadas, CSS mínimo)</li>
              <li>✅ HTML semántico y válido</li>
              <li>✅ Funcionalidad sin JavaScript como fallback</li>
            </ul>
          </PracticeBox>
        </section>

        <div className="topic-summary">
          <h2>📋 Resumen del módulo</h2>
          
          <div className="topic-summary__grid">
            <div className="topic-summary__card">
              <h3 className="topic-summary__title">🎯 Conceptos clave</h3>
              <ul className="topic-summary__list">
                <li><strong>Bloque HTML personalizado:</strong> Herramienta para insertar HTML directo</li>
                <li><strong>Uso responsable:</strong> Solo cuando los bloques estándar no son suficientes</li>
                <li><strong>Seguridad:</strong> Validar siempre el código antes de publicar</li>
                <li><strong>Accesibilidad:</strong> HTML semántico y etiquetas correctas</li>
                <li><strong>Responsividad:</strong> Mobile first y media queries</li>
              </ul>
            </div>

            <div className="topic-summary__card">
              <h3 className="topic-summary__title">🛠️ Casos de uso principales</h3>
              <ul className="topic-summary__list">
                <li><strong>Tablas complejas:</strong> Con celdas combinadas</li>
                <li><strong>Formularios específicos:</strong> Campos y validaciones personalizadas</li>
                <li><strong>Call-to-actions:</strong> Diseños únicos de conversión</li>
                <li><strong>Embebidos avanzados:</strong> Multimedia y contenido externo</li>
                <li><strong>Layouts únicos:</strong> Diseños imposibles con bloques estándar</li>
              </ul>
            </div>

            <div className="topic-summary__card">
              <h3 className="topic-summary__title">⚠️ Mejores prácticas</h3>
              <ul className="topic-summary__list">
                <li><strong>Validación:</strong> Usar validador HTML de W3C</li>
                <li><strong>Seguridad:</strong> No incluir scripts no confiables</li>
                <li><strong>Rendimiento:</strong> Optimizar imágenes y CSS inline mínimo</li>
                <li><strong>Mantenibilidad:</strong> Documentar código complejo</li>
                <li><strong>Fallbacks:</strong> Proporcionar alternativas sin JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="topic-summary__actions">
            <a href="#ejercicios" className="btn btn--primary">
              🧩 Practicar ejercicios
            </a>
            <a href="/tema22" className="btn btn--secondary">
              Siguiente tema →
            </a>
          </div>
        </div>
      </div>
    </TopicLayout>
  );
}
