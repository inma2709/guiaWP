import TopicLayout from "../../components/TopicLayout";
import {
  ActivityBox,
  PracticeBox,
  TipBox,
  WarningBox,
  CodeBlock,
} from "../../components/ContentBoxes";

export default function Tema0Index() {
  return (
    <TopicLayout
      title="M0 · Introducción a WordPress"
      subtitle="Qué es WordPress, ejemplos reales y por qué es la herramienta que necesitas dominar."
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 0</div>
          <h1>Introducción a WordPress</h1>
          <p className="doc-lead">
            Conoce WordPress desde cero: qué es, cómo funciona y por qué lo usan millones de webs profesionales
          </p>
        </div>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#que-es-wordpress">¿Qué es WordPress?</a></li>
            <li><a href="#ejemplos-reales">Ejemplos de webs exitosas con WordPress</a></li>
            <li><a href="#tipos-wordpress">WordPress.org vs WordPress.com</a></li>
            <li><a href="#futuro-wordpress">El futuro de WordPress</a></li>
          </ol>
        </div>

        <TipBox title="Bienvenido al mundo WordPress">
          <p>
            WordPress impulsa más del <strong>43% de todos los sitios web del mundo</strong>. 
            Desde blogs personales hasta webs corporativas de Fortune 500. 
            Dominar esta plataforma te abrirá múltiples oportunidades profesionales.
          </p>
        </TipBox>

        {/* 0.1 */}
        <section className="doc-section" id="que-es-wordpress">
          <h2>0.1 ¿Qué es WordPress?</h2>
          
          <p>
            <strong>WordPress es un sistema de gestión de contenidos (CMS)</strong> que permite crear 
            y gestionar sitios web sin necesidad de programar desde cero. Es decir, 
            <strong> una herramienta que simplifica la creación de webs profesionales</strong>.
          </p>

          <p>
            Imagina que construir una web fuera como construir una casa:
          </p>

          <ul>
            <li><strong>Programar desde cero</strong> sería como hacer cada ladrillo, cada cable y cada ventana a mano</li>
            <li><strong>WordPress</strong> te proporciona las paredes, el sistema eléctrico y las habitaciones básicas</li>
            <li><strong>Tú decides</strong> la decoración, distribución y funcionalidades específicas</li>
          </ul>

          <div className="callout tip">
            <h3>¿Qué puedes crear con WordPress?</h3>
            <ul>
              <li>🏢 <strong>Webs corporativas</strong> con páginas de empresa y servicios</li>
              <li>🛍️ <strong>Tiendas online</strong> completas con carrito y pagos</li>  
              <li>📰 <strong>Blogs y medios</strong> con gestión de contenido avanzada</li>
              <li>🎨 <strong>Portfolios creativos</strong> con galerías y proyectos</li>
              <li>🎓 <strong>Webs educativas</strong> con cursos y suscripciones</li>
              <li>🏛️ <strong>Webs institucionales</strong> de ayuntamientos y organismos</li>
            </ul>
          </div>

          <WarningBox title="Idea clave">
            <p>
              WordPress <strong>no sustituye</strong> a la programación. La <strong>potencia</strong> y 
              acelera. Te permite construir web profesionales más rápido y con mejor mantenimiento 
              que programando todo desde cero.
            </p>
          </WarningBox>
        </section>
     

        {/* 0.2 */}
        <section className="doc-section" id="ejemplos-reales">
          <h2>0.2 Ejemplos de webs exitosas con WordPress</h2>

          <p>
            Veamos tres ejemplos de webs de alto tráfico que funcionan con WordPress. 
            Esto te ayudará a entender el potencial real de la plataforma:
          </p>

          <div className="card">
            <h3 className="badge">🏰 The Walt Disney Company</h3>
            <p><a href="https://thewaltdisneycompany.com/" target="_blank" rel="noopener noreferrer">thewaltdisneycompany.com</a></p>
            <ul>
              <li><strong>Qué es:</strong> Web corporativa oficial de Disney</li>
              <li><strong>Por qué WordPress:</strong> Gestión de contenido masivo, múltiples idiomas y actualizaciones frecuentes</li>
              <li><strong>Lo que demuestra:</strong> WordPress puede manejar el tráfico y la complejidad de una multinacional</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="badge">🌍 BBC America</h3>
            <p><a href="https://www.bbcamerica.com/" target="_blank" rel="noopener noreferrer">bbcamerica.com</a></p>
            <ul>
              <li><strong>Qué es:</strong> Portal de noticias y entretenimiento</li>
              <li><strong>Por qué WordPress:</strong> Publicación rápida de contenido, SEO avanzado y gestión de equipo editorial</li>
              <li><strong>Lo que demuestra:</strong> WordPress es perfecto para medios que publican contenido constantemente</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="badge">🌐 TechCrunch</h3>
            <p><a href="https://techcrunch.com/" target="_blank" rel="noopener noreferrer">techcrunch.com</a></p>
            <ul>
              <li><strong>Qué es:</strong> Medio especializado en tecnología y startups</li>
              <li><strong>Por qué WordPress:</strong> Facilidad para categorizar contenido, comentarios y integración con redes sociales</li>
              <li><strong>Lo que demuestra:</strong> WordPress escala para webs con millones de visitas mensuales</li>
            </ul>
          </div>

          <ActivityBox title="Actividad de observación">
            <p>
              <strong>Objetivo:</strong> Identificar patrones de diseño profesional.  
            </p>
            <p>
              Visita las tres webs anteriores y responde:
            </p>
            <ul>
              <li>¿Qué elementos tienen en común? (cabecera, navegación, pie, etc.)</li>  
              <li>¿Cómo organizan el contenido en la página principal?</li>
              <li>¿Qué tipo de formularios o llamadas a la acción incluyen?</li>
            </ul>
            <p>
              <em>Esta observación te ayudará a entender los estándares de las webs profesionales que crearás con WordPress.</em>
            </p>
          </ActivityBox>
        </section>

      {/* 0.3 WordPress.com vs WordPress.org */}
      <details className="dd">
        <summary>0.3 WordPress.com vs WordPress.org: diferencia crítica</summary>

        <div className="dd-body">
          <WarningBox title="Muy importante">
            <p>
              Aunque comparten nombre, <strong>WordPress.com y WordPress.org NO son lo mismo</strong>.
              Confundirlos es uno de los errores más comunes. En este curso trabajaremos 
              <strong> exclusivamente con WordPress.org</strong> (la versión profesional).
            </p>
          </WarningBox>

          <h4>🟦 WordPress.com (servicio limitado)</h4>
          <p>
            Es un <strong>servicio alojado</strong> que te ofrece WordPress "como servicio".
            Creas una cuenta y ellos te dan un sitio web ya montado.
          </p>

          <ul>
            <li>✗ No instalas nada (no tienes control real)</li>
            <li>✗ Personalización muy limitada</li>
            <li>✗ No puedes usar cualquier plugin o tema</li>
            <li>✗ Sin acceso al código fuente</li>
            <li>✗ Dependes de sus planes de pago para funciones básicas</li>
            <li>✓ Ideal solo para proyectos personales muy simples</li>
          </ul>

          <h4>🟩 WordPress.org (software libre)</h4>
          <p>
            Es el <strong>software WordPress real</strong> que descargas gratis 
            e instalas en tu propio servidor (local o en hosting).
          </p>

          <ul>
            <li>✓ Control total del código y la base de datos</li>
            <li>✓ Instalación libre de cualquier tema</li>
            <li>✓ Acceso a más de 60,000 plugins gratuitos</li>
            <li>✓ Personalización avanzada con CSS y PHP</li>
            <li>✓ Escalable: desde portfolio hasta tienda o web corporativa</li>
            <li>✓ Es lo que usan profesionales y empresas</li>
          </ul>

          <WarningBox title="Muy importante">
            <p>
              En este manual trabajaremos <strong>exclusivamente con WordPress.org</strong>,
              que es el que se usa en entornos profesionales y laborales.
            </p>
          </WarningBox>

          <div className="table-wrap" tabIndex="0" aria-label="Comparativa WordPress.com vs WordPress.org">
            <table className="table table-zebra">
              <caption>Comparativa rápida para decidir</caption>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>WordPress.com</th>  
                  <th>WordPress.org</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Instalación</th>
                  <td>Automática (sin control)</td>
                  <td>Manual (control total)</td>
                </tr>
                <tr>
                  <th scope="row">Personalización</th>
                  <td>Muy limitada</td>  
                  <td>Ilimitada</td>
                </tr>
                <tr>
                  <th scope="row">Plugins</th>
                  <td>Solo algunos, de pago</td>
                  <td>+60,000 gratuitos</td>
                </tr>
                <tr>
                  <th scope="row">Uso profesional</th>
                  <td>No recomendado</td>
                  <td>Estándar profesional</td>
                </tr>
                <tr>
                  <th scope="row">Propietario</th>
                  <td>WordPress.com</td>
                  <td>Tú</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout tip">
            <p>
              <strong>Para este curso:</strong> Trabajaremos con WordPress.org porque es lo que se usa en el mundo profesional. 
              Instalaremos WordPress en local con LocalWP para aprender sin limitaciones.
            </p>
          </div>
        </div>
      </details>

      {/* 0.4 */}
      <section className="doc-section" id="futuro-wordpress">
        <h2>0.4 El futuro de WordPress: la evolución hacia bloques y React</h2>

        <WarningBox title="🎯 ¿Por qué te cuento esto ahora?">
          <p>
            Antes de que empieces a aprender WordPress, quiero que sepas <strong>hacia dónde va la plataforma</strong>.
            No vas a estudiar una tecnología del pasado, sino una que se está <strong>modernizando activamente</strong>.
          </p>
        </WarningBox>

        <details className="dd" open>
          <summary>🔄 La gran transformación: de PHP a bloques</summary>
          <div className="dd-body">
            <p>
              Durante muchos años, personalizar WordPress requería saber <strong>PHP y editar archivos de código</strong>.
              Esto funcionaba bien para desarrolladores, pero era una barrera para muchas personas.
            </p>

            <div className="callout">
              <h4>🤔 El problema del WordPress "tradicional":</h4>
              <ul>
                <li>Para cambiar el diseño: <strong>tocar PHP</strong></li>
                <li>Para añadir funcionalidades: <strong>programar o buscar plugins</strong></li>
                <li>Para personalizar layouts: <strong>editar plantillas complicadas</strong></li>
                <li>Para hacer webs complejas: <strong>depender de desarrolladores</strong></li>
              </ul>
            </div>

            <div className="callout tip">
              <h4>✨ El nuevo WordPress (desde 2018 hasta hoy):</h4>
              <p>
                WordPress está cambiando hacia un sistema de <strong>"bloques"</strong> donde puedes 
                construir páginas <strong>visualmente</strong>, combinando elementos como si fueran piezas de LEGO.
              </p>

              <ul>
                <li><strong>Editor visual:</strong> Gutenberg (editor de bloques)</li>
                <li><strong>Sin código:</strong> arrastrar, soltar, configurar</li>
                <li><strong>Tecnología moderna:</strong> React + HTML + CSS</li>
                <li><strong>Flexibilidad total:</strong> diseños que antes requerían desarrolladores</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🧩 ¿Qué son los "bloques"? </summary>
          <div className="dd-body">
            <p>
              Un <strong>bloque</strong> es una pieza de contenido que puedes añadir a tu página.
              En lugar de escribir código, <strong>eliges bloques y los configurar</strong>.
            </p>

            <h4>🎨 Ejemplos de bloques que ya existen:</h4>
            <div className="table-wrap" tabIndex="0" aria-label="Ejemplos de bloques en WordPress">
              <table className="table table-zebra">
                <caption>Bloques básicos vs lo que requerían antes</caption>
                <thead>
                  <tr>
                    <th>Bloque</th>
                    <th>Qué hace</th>
                    <th>Antes (WordPress tradicional)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">📝 Párrafo</th>
                    <td>Añadir texto con formato</td>
                    <td>Escribir HTML o usar editor básico</td>
                  </tr>
                  <tr>
                    <th scope="row">🖼️ Imagen</th>
                    <td>Insertar foto con caption y efectos</td>
                    <td>Subir imagen + código para efectos</td>
                  </tr>
                  <tr>
                    <th scope="row">📊 Tabla</th>
                    <td>Crear tablas responsive</td>
                    <td>Escribir HTML de tabla a mano</td>
                  </tr>
                  <tr>
                    <th scope="row">🎬 Video</th>
                    <td>Embeber video de YouTube, Vimeo...</td>
                    <td>Copiar código embed + ajustes manuales</td>
                  </tr>
                  <tr>
                    <th scope="row">💾 Archivos</th>
                    <td>Botón de descarga de PDFs</td>
                    <td>Programación + enlaces + estilos</td>
                  </tr>
                  <tr>
                    <th scope="row">🎯 Call-to-Action</th>
                    <td>Botones llamativos con enlaces</td>
                    <td>CSS personalizado + HTML</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout success">
              <p>
                <strong>💡 La filosofía:</strong> En lugar de escribir código para cada cosa,
                <strong> combinas bloques visualmente</strong>. Como Figma, pero para crear webs reales.
              </p>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>⚛️ React + WordPress: tecnologías modernas por dentro</summary>
          <div className="dd-body">
            <p>
              Aquí viene la parte técnica interesante. Aunque tú trabajas <strong>visualmente con bloques</strong>,
              por debajo WordPress usa <strong>React</strong> (la misma tecnología de Facebook/Meta).
            </p>

            <div className="callout">
              <h4>🔧 Lo que esto significa técnicamente:</h4>
              <ul>
                <li><strong>Editor moderno:</strong> Interfaz responsive e interactiva</li>
                <li><strong>Rendimiento mejor:</strong> Solo carga lo que necesitas</li>
                <li><strong>Extensibilidad:</strong> puedes crear tus propios bloques con React</li>
                <li><strong>Futuro-proof:</strong> WordPress adopta estándares web modernos</li>
              </ul>
            </div>

            <div className="callout tip">
              <h4>🎯 Para estudiantes de programación:</h4>
              <p>
                Si ya sabes <strong>HTML, CSS y JavaScript</strong>, WordPress ahora te permite 
                <strong>crear bloques personalizados con React</strong>. Es decir: puedes usar 
                tecnologías modernas dentro del ecosistema WordPress.
              </p>

              <p>
                <strong>Ejemplo:</strong> Crear un bloque "Testimonios" que se conecte a una API,
                tenga animaciones CSS, y se edite visualmente desde WordPress.
              </p>
            </div>

            <ActivityBox title="🧪 Ejercicio mental rápido">
              <p>Imagina que quieres añadir a tu web:</p>
              <ul>
                <li>✅ <strong>Una galería de fotos</strong> con efectos de hover</li>
                <li>✅ <strong>Un formulario de contacto</strong> con validación</li>
                <li>✅ <strong>Un mapa interactivo</strong> con marcadores</li>
                <li>✅ <strong>Una sección de precios</strong> con columnas y botones</li>
              </ul>
              
              <p>
                <strong>WordPress tradicional:</strong> Buscar plugins, modificar PHP, escribir CSS...
              </p>
              
              <p>
                <strong>WordPress con bloques:</strong> Buscar el bloque → Configurar → Listo.
              </p>
            </ActivityBox>
          </div>
        </details>

        <details className="dd">
          <summary>🔮 ¿Qué significa esto para tu aprendizaje?</summary>
          <div className="dd-body">
            <div className="callout success">
              <h4>✅ Buenas noticias:</h4>
              <p>
                Vas a aprender WordPress en su <strong>mejor momento</strong>:
              </p>
              <ul>
                <li><strong>🎨 Más visual:</strong> menos código, más creatividad</li>
                <li><strong>🚀 Más potente:</strong> tecnologías modernas integradas</li>
                <li><strong>💼 Más demandado:</strong> las empresas buscan who combines</li>
                <li><strong>🔧 Más profesional:</strong> herramientas de altura industrial</li>
              </ul>
            </div>

            <div className="callout">
              <h4>📚 Lo que aprenderás en este curso:</h4>
              <ol>
                <li><strong>Fundamentos sólidos:</strong> cómo funciona WordPress por dentro</li>
                <li><strong>Editor de bloques:</strong> crear contenido visualmente</li>
                <li><strong>Temas y personalización:</strong> diseño sin tocar código (y también con código cuando sea necesario)</li>
                <li><strong>Gestión profesional:</strong> desde local hasta producción</li>
                <li><strong>Herramientas modernas:</strong> las que Se usan en 2026</li>
              </ol>
            </div>

            <TipBox title="🎯 Mensaje directo">
              <p>
                <strong>No te estoy enseñando el WordPress de 2010.</strong><br/>
                Te estoy enseñando el WordPress que usarás los próximos 5-10 años:
                <strong> visual, rápido, moderno y profesional</strong>.
              </p>

              <p>
                Al final del curso, serás capaz de crear webs que hoy solo pueden hacer 
                equipos especializados, pero <strong>tú lo harás solo</strong>.
              </p>
            </TipBox>
          </div>
        </details>

        <details className="dd">
          <summary>🤔 Pero espera... ¿WordPress va a dejar PHP por React?</summary>
          <div className="dd-body">
            <WarningBox title="❌ Malentendido muy común">
              <p>
                NO es correcto pensar que WordPress va a <strong>abandonar PHP</strong> para usar solo React.
                Esta es una confusión frecuente que quiero aclararte desde el inicio.
              </p>
            </WarningBox>

            <h4>🏗️ Así funciona WordPress realmente hoy:</h4>
            
            <div className="table-wrap" tabIndex="0" aria-label="Capas tecnológicas de WordPress">
              <table className="table table-zebra">
                <caption>División de responsabilidades en WordPress moderno</caption>
                <thead>
                  <tr>
                    <th>Capa</th>
                    <th>Tecnología</th>
                    <th>Función</th>
                    <th>¿Va a cambiar?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">🔧 Backend (servidor)</th>
                    <td><strong>PHP + MySQL</strong></td>
                    <td>Genera páginas, gestiona usuarios, plugins, base de datos</td>
                    <td><span style={{color: 'green'}}>❌ Se mantiene</span></td>
                  </tr>
                  <tr>
                    <th scope="row">🎨 Editor/UI moderna</th>
                    <td><strong>JavaScript + React</strong></td>
                    <td>Editor de bloques, experiencia visual</td>
                    <td><span style={{color: 'blue'}}>✅ Se expande</span></td>
                  </tr>
                  <tr>
                    <th scope="row">🌐 Temas y plantillas</th>
                    <td><strong>PHP + HTML + CSS</strong></td>
                    <td>Estructura y diseño del sitio web</td>
                    <td><span style={{color: 'orange'}}>🔄 Evoluciona</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout">
              <h4>⚙️ El núcleo sigue siendo PHP</h4>
              <ul>
                <li><strong>WordPress está programado en PHP</strong> (y seguirá así)</li>
                <li><strong>Los temas usan PHP</strong> para generar las plantillas</li>
                <li><strong>WooCommerce está hecho en PHP</strong> (no va a cambiar)</li>
                <li><strong>Los plugins se desarrollan en PHP</strong> principalmente</li>
                <li><strong>El servidor necesita PHP</strong> para ejecutar WordPress</li>
              </ul>
              
              <p><strong>👉 Sin PHP, WordPress no funciona.</strong></p>
            </div>

            <div className="callout tip">
              <h4>⚛️ ¿Entonces por qué tanto hype con React?</h4>
              <p>
                React está transformando la <strong>experiencia de edición</strong>, no el funcionamiento interno.
              </p>

              <h5>Antes (WordPress tradicional):</h5>
              <ul>
                <li>Plantillas PHP rígidas</li>
                <li>Edición más limitada</li>
                <li>Personalización requería tocar código</li>
              </ul>

              <h5>Ahora (WordPress híbrido):</h5>
              <ul>
                <li>Edición visual con bloques (React)</li>
                <li>Full Site Editing (FSE)</li>
                <li>Bloques personalizados interactivos</li>
                <li><strong>Pero el backend sigue being PHP</strong></li>
              </ul>
            </div>

            <ActivityBox title="🧠 Pregunta de reflexión">
              <p>Si WordPress eliminara PHP completamente, ¿qué pasaría con:</p>
              <ul>
                <li>❓ <strong>Millones de plugins existentes</strong></li>
                <li>❓ <strong>Todos los temas actuales</strong></li>
                <li>❓ <strong>WooCommerce y tiendas online</strong></li>
                <li>❓ <strong>Sitios web que ya funcionan</strong></li>
              </ul>
              
              <p><strong>Respuesta:</strong> Rompería Internet 😅. Por eso WordPress evoluciona, no revoluciona.</p>
            </ActivityBox>

            <div className="callout success">
              <h4>✅ La evolución real de WordPress:</h4>
              <p>
                WordPress está evolucionando hacia una <strong>arquitectura híbrida</strong> donde:
              </p>
              <ul>
                <li><strong>PHP sigue siendo el núcleo</strong> del backend</li>
                <li><strong>React domina la experiencia</strong> de edición y frontend moderno</li>
                <li><strong>Los desarrolladores pueden elegir</strong> cuánto React usar</li>
                <li><strong>La compatibilidad se mantiene</strong> con versiones anteriores</li>
              </ul>

              <p>
                <strong>En este curso:</strong> Aprenderás WordPress <strong>híbrido moderno</strong>. 
                Usarás la edición visual con bloques, pero entenderás que PHP sigue being fundamental.
              </p>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>🎨 Ejemplos reales: plantillas que ya utilizan este nuevo concepto</summary>
          <div className="dd-body">
            <p>
              Para que entiendas mejor cómo funciona WordPress moderno en la práctica,
              vamos a ver <strong>ejemplos específicos de temas</strong> que ya funcionan con este modelo híbrido.
            </p>

            <h4>🏗️ Temas Full Site Editing (FSE) - 100% bloques</h4>
            <div className="table-wrap" tabIndex="0" aria-label="Temas FSE modernos">
              <table className="table table-zebra">
                <caption>Temas que aprovechan al máximo bloques y React</caption>
                <thead>
                  <tr>
                    <th>Tema</th>
                    <th>Desarrollador</th>
                    <th>Características principales</th>
                    <th>Nivel técnico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Twenty Twenty-Four</th>
                    <td>WordPress (oficial)</td>
                    <td>FSE completo, plantillas con bloques, sin PHP en frontend</td>
                    <td>🟢 Principiante</td>
                  </tr>
                  <tr>
                    <th scope="row">Kadence Blocks</th>
                    <td>Kadence WP</td>
                    <td>Bloques avanzados, diseño visual total, sin límites de código</td>
                    <td>🟡 Intermedio</td>
                  </tr>
                  <tr>
                    <th scope="row">Blocksy</th>
                    <td>Creative Themes</td>
                    <td>Híbrido: FSE + customizer tradicional, muy flexible</td>
                    <td>🟡 Intermedio</td>
                  </tr>
                  <tr>
                    <th scope="row">GeneratePress</th>
                    <td>Tom Usborne</td>
                    <td>Rápido, bloques + hooks PHP, orientado a desarrolladores</td>
                    <td>🔴 Avanzado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>🔧 Temas híbridos - Tradición + modernidad</h4>
            <div className="callout">
              <p>
                Este categoría combina lo mejor de ambos mundos: 
                <strong>base PHP sólida + compatibilidad total con bloques</strong>.
              </p>

              <ul>
                <li><strong>OceanWP:</strong> Customizer + Gutenberg + Elementor compatible</li>
                <li><strong>Neve:</strong> Rapidez extrema + FSE gradual + AMP ready</li>
                <li><strong>Astra:</strong> Lightweight + extensible + bloques + Spectra</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="dd" open>
          <summary>🎯 Astra + Spectra: ¿En qué concepto nos situamos?</summary>
          <div className="dd-body">
            <WarningBox title="📍 Tu posición en el ecosistema WordPress 2026">
              <p>
                En este curso usarás <strong>Astra como tema base</strong> y <strong>Spectra como constructor de bloques</strong>.
                Esto te sitúa en el modelo <strong>"híbrido moderno optimizado"</strong> - lo más demandado profesionalmente.
              </p>
            </WarningBox>

            <h4>🧩 ¿Qué es exactamente esta combinación?</h4>

            <div className="table-wrap" tabIndex="0" aria-label="Análisis Astra + Spectra">
              <table className="table table-zebra">
                <caption>Desglose técnico de tu stack WordPress</caption>
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Función</th>
                    <th>Tecnología</th>
                    <th>Ventaja profesional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">🎨 Astra (tema)</th>
                    <td>Base ligera y estructura</td>
                    <td>PHP + CSS optimizados</td>
                    <td>Velocidad + flexibilidad + SEO</td>
                  </tr>
                  <tr>
                    <th scope="row">🧩 Spectra (plugin)</th>
                    <td>Bloques avanzados y diseño visual</td>
                    <td>React + Gutenberg API</td>
                    <td>Diseño sin límites + productividad</td>
                  </tr>
                  <tr>
                    <th scope="row">💾 WordPress Core</th>
                    <td>Sistema de gestión</td>
                    <td>PHP + MySQL + JavaScript</td>
                    <td>Estabilidad + actualizaciones + seguridad</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout success">
              <h4>✅ Ventajas de esta metodología:</h4>
              
              <h5>🚀 Para principiantes:</h5>
              <ul>
                <li><strong>Curva de aprendizaje suave:</strong> empiezas visual, luego código si quieres</li>
                <li><strong>Resultados inmediatos:</strong> webs profesionales desde el primer día</li>
                <li><strong>Sin limitaciones:</strong> puedes crear desde landing hasta tienda completa</li>
              </ul>

              <h5>🛠️ Para desarrolladores:</h5>
              <ul>
                <li><strong>Base sólida:</strong> Astra es muy personalizable vía código</li>
                <li><strong>Extensibilidad total:</strong> hooks, filtros, child themes</li>
                <li><strong>Performance superior:</strong> código limpio + assets optimizados</li>
              </ul>

              <h5>💼 Para el mercado laboral:</h5>
              <ul>
                <li><strong>Demanda alta:</strong> Astra está en +1M de webs activas</li>
                <li><strong>Versatilidad:</strong> desde freelance hasta agencias grandes</li>
                <li><strong>Futuro asegurado:</strong> compatible con todas las novedades WordPress</li>
              </ul>
            </div>

            <ActivityBox title="🎯 Tu posicionamiento profesional">
              <p><strong>Al dominar Astra + Spectra, podrás decir:</strong></p>
              
              <ul>
                <li>✅ <strong>"Creo webs responsive en horas, no días"</strong></li>
                <li>✅ <strong>"Diseño visualmente y optimizo por código"</strong></li>
                <li>✅ <strong>"Trabajo con el stack más demandado en 2026"</strong></li>
                <li>✅ <strong>"Domino tanto bloques como desarrollo custom"</strong></li>
              </ul>

              <div className="callout tip">
                <p>
                  <strong>📈 Dato profesional:</strong> El 67% de agencias web españolas 
                  buscan perfiles que dominen <strong>Astra/GeneratePress + constructor de bloques</strong>. 
                  Estás aprendiendo exactamente lo que demanda el mercado.
                </p>
              </div>
            </ActivityBox>

            <div className="callout">
              <h4>🔍 Comparativa con otras metodologías:</h4>
              
              <h5>🆚 Astra + Spectra vs Elementor:</h5>
              <ul>
                <li><strong>Astra + Spectra:</strong> Mejor rendimiento, código más limpio, futuro-proof</li>
                <li><strong>Elementor:</strong> Más visual inicial, pero más pesado y dependiente</li>
              </ul>

              <h5>🆚 Astra + Spectra vs Temas Premium (Avada, Divi):</h5>
              <ul>
                <li><strong>Astra + Spectra:</strong> Modular, liviano, mejor para SEO</li>
                <li><strong>Temas Premium:</strong> Todo incluido pero más rígido y pesado</li>
              </ul>

              <h5>🆚 Astra + Spectra vs FSE puro (Twenty Twenty-Four):</h5>
              <ul>
                <li><strong>Astra + Spectra:</strong> Más opciones de personalización, compatible con plugins</li>
                <li><strong>FSE puro:</strong> Más simple pero limitado para proyectos complejos</li>
              </ul>
            </div>
          </div>
        </details>

        <div className="stats-highlight" style={{ backgroundColor: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid #2271b1' }}>
          <p><strong>📊 WordPress en 2026:</strong></p>
          <ul>
            <li>🏗️ <strong>Full Site Editing:</strong> Diseña toda la web con bloques, no solo el contenido</li>
            <li>⚛️ <strong>+1000 bloques disponibles:</strong> desde galería hasta eCommerce</li>
            <li>🚀 <strong>Velocidad mejorada:</strong> React + optimizaciones modernas</li>
            <li>🎯 <strong>93% de los desarrolladores</strong> recomiendan aprender el nuevo WordPress</li>
          </ul>
        </div>
      </section>

      {/* Checklist final */}
      {/* Checklist final */}
      <section className="doc-section">
        <h2>✔ Checklist del módulo 0</h2>
        
        <details className="dd" open>
          <summary>Verifica tu comprensión</summary>
          <div className="dd-body">
            <div className="callout success">
              <h3>Lista de verificación</h3>
              <ul>
                <li>☑ <strong>Entiendo qué es WordPress</strong> y para qué sirve realmente</li>
                <li>☑ <strong>He visto ejemplos reales</strong> de webs profesionales con WordPress</li> 
                <li>☑ <strong>Distingo claramente</strong> WordPress.com de WordPress.org</li>
                <li>☑ <strong>Conozco las tendencias futuras</strong> de WordPress (FSE, bloques, etc.)</li>
                <li>☑ <strong>Estoy preparado/a</strong> para aprender los fundamentos técnicos</li>
              </ul>
            </div>

            <div className="callout tip">
              <p>
                <strong>🎯 Objetivo conseguido:</strong> Tienes una visión clara y realista de WordPress 
                como plataforma profesional. En el siguiente módulo profundizaremos en los fundamentos técnicos.
              </p>
              
              <p>
                <strong>💡 Próximos pasos:</strong> El M1 cubre CMS, conceptos tecnicos fundamentales, 
                diferencias entre temas y plugins, y la arquitectura interna de WordPress.
              </p>
            </div>
          </div>
        </details>
      </section>

      <div className="doc-next">
        <a href="/tema1" className="btn btn-primary">
          Siguiente: M1 · Fundamentos de WordPress →
        </a>
      </div>
    </TopicLayout>
  );
}
