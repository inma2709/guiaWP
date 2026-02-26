import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema1Index() {
  return (
    <TopicLayout
      title="M1 · Fundamentos de WordPress"
      subtitle="Profundización técnica: CMS, metodología profesional y herramientas de desarrollo"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 1</div>
          <h1>Fundamentos de WordPress</h1>
          <p className="doc-lead">
            Profundización técnica en WordPress como CMS profesional y las herramientas que necesitas dominar
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#cms">¿Qué es un CMS y para qué sirve?</a></li>
            <li><a href="#arquitectura">🏗️ Arquitectura técnica: PHP + MySQL + WordPress</a></li>
            <li><a href="#otros-cms">Ecosistema de CMS: WordPress vs alternatives</a></li>
            <li><a href="#comparativa-dev">WordPress vs desarrollo tradicional</a></li>
            <li><a href="#mercado-laboral">Mercado laboral y oportunidades</a></li>
            <li><a href="#metodologia">Metodología de trabajo profesional</a></li>
            <li><a href="#herramientas">Herramientas que necesitarás</a></li>
          </ol>
        </div>

        <TipBox title="Profundización técnica">
          <p>
            En este módulo profundizaremos en los aspectos técnicos de WordPress. 
            Ya conoces qué es WordPress y has visto ejemplos reales (Módulo 0). 
            Ahora veremos cómo funciona internamente y cómo se posiciona frente a otras opciones.
          </p>
        </TipBox>

        {/* 1.1 */}
        <section className="doc-section" id="cms">
          <h2>1.1 ¿Qué es un CMS y para qué sirve?</h2>

          <details className="dd">
            <summary>Ver qué es un CMS (explicación completa)</summary>
            <div className="dd-body">
              <p>
                Un <strong>CMS</strong> (Content Management System), o <strong>Sistema de Gestión de Contenidos</strong>,
                es un tipo de software que te permite <strong>crear, editar y organizar</strong> una web sin tener que
                escribir todo el código a mano.
              </p>

              <p>
                Para entenderlo de forma sencilla, imagina que una web es una “casa”:
              </p>
              <ul>
                <li>El <strong>código</strong> sería como construir la casa ladrillo a ladrillo.</li>
                <li>Un <strong>CMS</strong> sería como tener un sistema modular: paredes, puertas, muebles y herramientas ya listas.</li>
                <li>Tú decides la estructura y el contenido, pero no empiezas desde cero.</li>
              </ul>

              <p><strong>¿Qué gestiona un CMS normalmente?</strong></p>
              <ul>
                <li><strong>Contenido:</strong> páginas, entradas, imágenes, categorías, etiquetas…</li>
                <li><strong>Usuarios y permisos:</strong> administrador, editor, autor, suscriptor…</li>
                <li><strong>Diseño:</strong> temas/plantillas que controlan el aspecto visual.</li>
                <li><strong>Funcionalidades:</strong> plugins/extensiones para añadir opciones (formularios, SEO, seguridad…).</li>
                <li><strong>Medios:</strong> biblioteca de archivos (imágenes, PDFs, vídeos, etc.).</li>
              </ul>

              <p>
                En un CMS, tú trabajas en un panel de administración (como el “escritorio” de WordPress) y
                el sistema se encarga de mostrarlo en la web con un diseño y estructura coherentes.
              </p>

              <WarningBox>
                <p>
                  <strong>Idea clave:</strong> un CMS no es “solo una web bonita”. Es un sistema completo para
                  <strong> administrar contenido y actualizarlo</strong> sin depender constantemente de un programador.
                  Por eso lo usan empresas, medios de comunicación, colegios, tiendas y profesionales.
                </p>
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 1.2 NUEVA SECCIÓN: Arquitectura técnica */}
        <section className="doc-section" id="arquitectura">
          <h2>1.2 🏗️ Arquitectura técnica de WordPress: PHP + MySQL + Servidor</h2>

          <WarningBox title="🧠 ¿Qué está viendo el alumno aquí?">
            <p>
              Estás viendo la <strong>infraestructura técnica</strong> que permite que WordPress funcione.
              No es la web. No es el tema. No es un plugin. Es <strong>el entorno del servidor</strong> que hace que todo funcione.
            </p>
          </WarningBox>

          <details className="dd" open>
            <summary>🔍 WordPress no funciona solo: necesita un "equipo técnico"</summary>
            <div className="dd-body">
              <p>
                WordPress no es un programa que se ejecute directamente como Word o Photoshop.
                Es un <strong>sistema web dinámico</strong> que necesita varios componentes trabajando juntos:
              </p>

              <div className="callout">
                <h3>🏗️ Esquema conceptual (dibújalo en tu mente)</h3>
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <div>👤 <strong>Usuario en navegador</strong></div>
                  <div style={{ marginLeft: '20px' }}>⬇️ Petición: "Quiero ver la página de inicio"</div>
                  <div>🌐 <strong>Servidor Web</strong> (Apache/Nginx)</div>
                  <div style={{ marginLeft: '20px' }}>⬇️ Pasa la petición a...</div>
                  <div>🐘 <strong>PHP</strong></div>
                  <div style={{ marginLeft: '20px' }}>⬇️ Ejecuta el código WordPress</div>
                  <div>🗃️ <strong>WordPress</strong> (el CMS)</div>
                  <div style={{ marginLeft: '20px' }}>⬇️ Busca contenido en...</div>
                  <div>🗄️ <strong>Base de datos MySQL</strong></div>
                  <div style={{ marginLeft: '20px' }}>⬆️ Devuelve datos</div>
                  <div>🎨 <strong>HTML/CSS generado</strong></div>
                  <div style={{ marginLeft: '20px' }}>⬆️ Vuelve al navegador</div>
                </div>
              </div>

              <p><strong>👉 Concepto clave:</strong> WordPress <strong>genera</strong> las páginas en tiempo real. No existen como archivos HTML estáticos.</p>
            </div>
          </details>

          <details className="dd">
            <summary>🐘 PHP: el "motor" de WordPress</summary>
            <div className="dd-body">
              <h4>¿Qué es PHP y por qué WordPress lo usa?</h4>
              <p>
                <strong>PHP</strong> es un lenguaje de programación diseñado específicamente para web.
                WordPress está <strong>100% construido en PHP</strong>.
              </p>

              <div className="table-wrap" tabIndex="0" aria-label="Comparativa sitio estático vs dinámico">
                <table className="table table-zebra">
                  <caption>Diferencia entre sitio estático y dinámico</caption>
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>Sitio estático (HTML)</th>
                      <th>Sitio dinámico (PHP/WordPress)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Páginas</th>
                      <td>Archivos .html ya creados</td>
                      <td>Se generan cuando las pides</td>
                    </tr>
                    <tr>
                      <th scope="row">Contenido</th>
                      <td>Fijo, hay que editar archivos</td>
                      <td>Editable desde panel de administración</td>
                    </tr>
                    <tr>
                      <th scope="row">Velocidad inicial</th>
                      <td>Muy rápida</td>
                      <td>Requiere procesamiento</td>
                    </tr>
                    <tr>
                      <th scope="row">Mantenimiento</th>
                      <td>Manual, editando código</td>
                      <td>Automático, desde WordPress</td>
                    </tr>
                    <tr>
                      <th scope="row">Usuarios</th>
                      <td>No hay sistema de usuarios</td>
                      <td>Registro, login, roles, permisos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                <h4>💡 Ejemplo práctico:</h4>
                <p>
                  Cuando visitas <code>senderossevilla.local/contacto</code>:
                </p>
                <ol>
                  <li>El servidor <strong>no busca un archivo contacto.html</strong></li>
                  <li>Ejecuta <strong>código PHP</strong> que dice "muestra la página de contacto"</li>
                  <li>PHP busca en la <strong>base de datos</strong> el contenido de esa página</li>  
                  <li>Combina el contenido con el <strong>tema activo</strong></li>
                  <li>Genera HTML y lo envía al navegador</li>
                </ol>
              </div>

              <div className="callout">
                <p><strong>📝 Para programadores:</strong> PHP en WordPress maneja:</p>
                <ul>
                  <li><strong>Lógica de templates:</strong> qué mostrar y cómo</li>
                  <li><strong>Conexión con base de datos:</strong> consultas, filtros, ordenación</li>
                  <li><strong>Hooks y filtros:</strong> sistema de extensibilidad</li>
                  <li><strong>Funciones del core:</strong> +2000 funciones disponibles</li>
                  <li><strong>APIs internas:</strong> Settings, Custom Posts, Taxonomías, etc.</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🗄️ MySQL: la "memoria" de WordPress</summary>
            <div className="dd-body">
              <h4>¿Qué es MySQL y qué guarda?</h4>
              <p>
                <strong>MySQL</strong> es el sistema de base de datos que utiliza WordPress para guardar
                <strong> absolutamente todo</strong>. Sin MySQL, WordPress no podría funcionar.
              </p>

              <div className="callout warning">
                <p>
                  <strong>⚠️ Concepto crucial:</strong> WordPress NO guarda las páginas como archivos HTML.
                  Todo el contenido vive en <strong>tablas de la base de datos</strong>.
                </p>
              </div>

              <h4>🗃️ ¿Qué se guarda en la base de datos?</h4>
              <div className="table-wrap" tabIndex="0" aria-label="Contenido guardado en base de datos WordPress">
                <table className="table table-zebra">
                  <caption>Contenido almacenado en MySQL</caption>
                  <thead>
                    <tr>
                      <th>Tipo de datos</th>
                      <th>Ejemplos</th>
                      <th>Tabla principal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">📝 Contenido</th>
                      <td>Páginas, entradas del blog, texto, HTML</td>
                      <td>wp_posts</td>
                    </tr>
                    <tr>
                      <th scope="row">👥 Usuarios</th>
                      <td>Administradores, editores, autores, suscriptores</td>
                      <td>wp_users</td>
                    </tr>
                    <tr>
                      <th scope="row">💬 Interacciones</th>
                      <td>Comentarios, valoraciones</td>
                      <td>wp_comments</td>
                    </tr>
                    <tr>
                      <th scope="row">🏷️ Organización</th>
                      <td>Categorías, etiquetas, menús</td>
                      <td>wp_terms</td>
                    </tr>
                    <tr>
                      <th scope="row">⚙️ Configuración</th>
                      <td>Ajustes do sitio, tema activo, plugins</td>
                      <td>wp_options</td>
                    </tr>
                    <tr>
                      <th scope="row">📎 Medios</th>
                      <td>Fotos, PDFs, vídeos (rutas y metadatos)</td>
                      <td>wp_posts + filesystem</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ActivityBox title="🧪 Ejemplo didáctico: ¿Dónde está mi página de inicio?">
                <p><strong>Situación:</strong> Tienes una página de inicio con el título "Bienvenidos a Senderos Sevilla"</p>
                
                <p><strong>❌ Lo que NO hay:</strong></p>
                <ul>
                  <li>No hay un archivo <code>index.html</code></li>
                  <li>No hay un archivo <code>inicio.html</code></li>
                  <li>No hay carpetas con contenido estático</li>
                </ul>

                <p><strong>✅ Lo que SÍ hay:</strong></p>
                <ul>
                  <li>Un registro en <code>wp_posts</code> con <code>post_title = "Bienvenidos a Senderos Sevilla"</code></li>
                  <li>El contenido en <code>post_content</code></li>
                  <li>El estado en <code>post_status = "publish"</code></li>
                  <li>Una configuración en <code>wp_options</code> que dice "esta página es la de inicio"</li>
                </ul>

                <p><strong>🔄 ¿Cómo se muestra?</strong></p>
                <p>
                  Cada vez que alguien visita tu web, PHP pregunta a MySQL: 
                  "¿Cuál es la página de inicio?" → MySQL responde con los datos → PHP genera el HTML.
                </p>
              </ActivityBox>

              <div className="callout">
                <p><strong>🔍 Para entender mejor:</strong></p>
                <p>
                  Cuando editas una página en WordPress, <strong>no estás editando un archivo</strong>.
                  Estás editando un <strong>registro en la base de datos</strong>. 
                  Por eso puedes tener borradores, revisiones, programar publicaciones, etc.
                </p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🌐 El servidor web: el "recepcionista"</summary>
            <div className="dd-body">
              <h4>Nginx/Apache: conectando navegador con WordPress</h4>
              <p>
                El <strong>servidor web</strong> (Nginx, Apache) es el "recepcionista" que:
              </p>

              <ul>
                <li>🔗 <strong>Recibe peticiones</strong> del navegador</li>
                <li>📋 <strong>Decide qué hacer:</strong> ¿es un archivo CSS? ¿Una imagen? ¿Una página dinámicsa?</li>
                <li>🐘 <strong>Pasa a PHP</strong> las peticiones que requieren WordPress</li>
                <li>📤 <strong>Devuelve la respuesta</strong> al navegador</li>
              </ul>

              <div className="callout tip">
                <h4>🏷️ Analizando la configuración local</h4>
                <p>En tu captura se ve:</p>
                <ul>
                  <li><strong>🏷️ Proyecto:</strong> <code>senderosSevilla</code></li>
                  <li><strong>🌍 Dominio local:</strong> <code>senderossevilla.local</code></li>
                  <li><strong>🌐 Servidor:</strong> nginx</li>
                  <li><strong>🐘 PHP:</strong> versión 8.2.27</li>
                  <li><strong>🗄️ MySQL:</strong> versión 8.0.35</li>
                  <li><strong>🏗️ WordPress:</strong> versión 6.9.1</li>
                </ul>

                <p>
                  <strong>👉 Esto significa:</strong> Tienes un entorno completo funcional en tu ordenador.
                  Puedes desarrollar <strong>sin internet</strong> y luego subir a un hosting real.
                </p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🎯 Implicaciones prácticas para desarrolladores</summary>
            <div className="dd-body">
              <div className="callout success">
                <h4>✅ Lo que esto te permite hacer:</h4>
                <ul>
                  <li><strong>Desarrollar offline:</strong> tu WordPress funciona sin internet</li>
                  <li><strong>Probar cambios sin riesgo:</strong> es tu copia local, no afecta al sitio real</li>
                  <li><strong>Entender errores:</strong> logs de PHP, MySQL y servidor</li>
                  <li><strong>Optimizar rendimiento:</strong> consultas de base de datos, cache, etc.</li>
                  <li><strong>Crear funcionalidades custom:</strong> PHP + MySQL = poder total</li>
                </ul>
              </div>

              <div className="callout warning">
                <h4>⚠️ Errores comunes por no entender la arquitectura:</h4>
                <ul>
                  <li><strong>"El sitio no funciona":</strong> suele ser problema de PHP o MySQL</li>
                  <li><strong>"Se perdieron mis cambios":</strong> no hiciste backup de la base de datos</li>
                  <li><strong>"Es muy lento":</strong> consultas mal optimizadas o servidor insuficiente</li>
                  <li><strong>"Error 500":</strong> error de PHP, hay que mirar logs</li>
                </ul>
              </div>

              <TipBox title="💡 Para programadores avanzados">
                <p>
                  Conocer esta arquitectura te permite:
                  <strong> Crear custom post types, optimizar queries, usar WP-CLI, 
                  configurar staging/production, debugear efectivamente</strong>, y entender
                  por qué WordPress puede manejar sitios con millones de páginas.
                </p>
              </TipBox>
            </div>
          </details>
        </section>

        {/* 1.3 */}
        <section className="doc-section" id="otros-cms">
          <h2>1.3 Ecosistema de CMS: WordPress vs alternativas</h2>

          <details className="dd">
            <summary>Ver otros CMS y cuándo elegirlos</summary>
            <div className="dd-body">
              <p>
                Sí. WordPress es el más popular, pero no es el único. De hecho, hay distintos tipos de CMS según el objetivo:
              </p>

              <div className="card">
                <h3 className="badge">Tipos de CMS (clasificación práctica)</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li><strong>CMS generales (webs y blogs):</strong> pensados para crear páginas y gestionar contenido.</li>
                  <li><strong>CMS para eCommerce:</strong> centrados en tiendas online.</li>
                  <li><strong>CMS “headless”:</strong> gestionan contenido pero lo muestran en apps/webs modernas vía API.</li>
                  <li><strong>Constructores / SaaS:</strong> soluciones “todo en uno” alojadas (más fáciles pero con límites).</li>
                </ul>
              </div>

              <p><strong>Ejemplos conocidos de otros CMS:</strong></p>
              <ul>
                <li><strong>Joomla:</strong> CMS tradicional, muy flexible pero menos usado hoy que WordPress.</li>
                <li><strong>Drupal:</strong> muy potente, usado en proyectos grandes, más técnico de aprender.</li>
                <li><strong>Shopify:</strong> plataforma SaaS para tiendas online (no es libre, es servicio).</li>
                <li><strong>PrestaShop:</strong> CMS de comercio electrónico (tiendas), muy común en España.</li>
                <li><strong>Magento (Adobe Commerce):</strong> eCommerce muy potente para proyectos grandes (más complejo).</li>
                <li><strong>Wix / Squarespace:</strong> constructores web alojados, fáciles, pero con límites de personalización.</li>
              </ul>

              <TipBox title="¿Por qué elegimos WordPress en este curso?">
                <p>
                  Porque es el mejor equilibrio entre <strong>facilidad, potencia y oportunidades laborales</strong>.
                  Además, te permite empezar con una web sencilla (portfolio) y luego escalar a una tienda con WooCommerce
                  sin cambiar de ecosistema.
                </p>
              </TipBox>

              <ActivityBox title="Mini-actividad (5 minutos)">
                <p>Piensa en 3 tipos de webs y decide si usarías WordPress u otra opción:</p>
                <ul>
                  <li>Una web de un restaurante con carta y reservas</li>
                  <li>Una tienda con 500 productos</li>
                  <li>Una web para un periódico digital con muchos redactores</li>
                </ul>
                <p><strong>Objetivo:</strong> entender que un CMS se elige según el proyecto, no por moda.</p>
              </ActivityBox>
            </div>
          </details>
        </section>

        {/* 1.4 NUEVO: Comparativa para alumnado de programación */}
        <section className="doc-section" id="comparativa-dev">
          <h2>1.4 WordPress vs desarrollo tradicional</h2>

          <details className="dd" open>
            <summary>¿WordPress es “menos” que programar? </summary>
            <div className="dd-body">
              <p>
                Si vienes de programación, es normal pensar: “Si puedo hacer una web en HTML/CSS, ¿para qué WordPress?”.
                La respuesta profesional es esta:
              </p>

              <p>
                <strong>WordPress no sustituye a HTML/CSS/PHP.</strong> Lo que hace es darte un sistema completo para:
                <strong> construir más rápido, mantener mejor y escalar</strong> un proyecto real.
              </p>

              <div className="callout tip">
                <p>
                  <strong>Idea clave:</strong> en el mundo real, no te pagan por “escribir más código”.
                  Te pagan por <strong>entregar un producto que funcione</strong>, se pueda actualizar y el cliente pueda usar.
                </p>
              </div>

              <div className="table-wrap" tabIndex="0" aria-label="Comparativa HTML/CSS vs WordPress">
                <table className="table table-zebra">
                  <caption>Comparativa práctica para proyectos reales</caption>
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>HTML/CSS “a medida”</th>
                      <th>WordPress (CMS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Velocidad de entrega</th>
                      <td>Alta si el sitio es muy simple, baja si se complica</td>
                      <td>Muy alta: estructura + editor + temas + plugins</td>
                    </tr>
                    <tr>
                      <th scope="row">Mantenimiento</th>
                      <td>Depende de ti: tocar archivos, subir cambios, controlar versiones</td>
                      <td>Panel de control + actualizaciones + roles + contenidos editables</td>
                    </tr>
                    <tr>
                      <th scope="row">Cliente editando contenido</th>
                      <td>Normalmente no (o necesitas panel a medida)</td>
                      <td>Sí: Gutenberg, roles, biblioteca, revisiones</td>
                    </tr>
                    <tr>
                      <th scope="row">SEO/Blog</th>
                      <td>Lo construyes tú</td>
                      <td>Listo para blog + plugins SEO + estructura amigable</td>
                    </tr>
                    <tr>
                      <th scope="row">Escalabilidad (crece el proyecto)</th>
                      <td>Más código y más complejidad</td>
                      <td>Tipos de contenido, menús, taxonomías, plugins</td>
                    </tr>
                    <tr>
                      <th scope="row">Seguridad</th>
                      <td>Tu responsabilidad total</td>
                      <td>Buenas prácticas + plugins + hardening + actualizaciones</td>
                    </tr>
                    <tr>
                      <th scope="row">Personalización avanzada</th>
                      <td>Total, pero desde cero</td>
                      <td>Total si sabes CSS/PHP (temas hijo, hooks, plantillas)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Conclusión clara:
                <strong> HTML/CSS te da control absoluto</strong>, pero WordPress te da
                <strong> velocidad + mantenimiento + sistema</strong>.
                Lo profesional es saber elegir según el proyecto.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>Lo que tú aportas como programador: CSS + PHP = “modo pro” en WordPress</summary>
            <div className="dd-body">
              <p>
                Aquí es donde WordPress se vuelve muy interesante para alguien que ya programa:
                <strong> tú no eres un usuario básico</strong>. Tú puedes ir un nivel más arriba.
              </p>

              <p><strong>Con CSS puedes:</strong></p>
              <ul>
                <li>Crear un sistema de estilos coherente (tipografías, colores, espaciados)</li>
                <li>Personalizar Gutenberg (bloques) y afinar el responsive</li>
                <li>Mejorar accesibilidad (contraste, foco visible, navegación)</li>
                <li>Optimizar apariencia con un tema hijo sin tocar el tema padre</li>
              </ul>

              <p><strong>Con PHP puedes:</strong></p>
              <ul>
                <li>Crear <strong>temas hijo</strong> y sobreescribir plantillas</li>
                <li>Usar <strong>hooks</strong> (actions/filters) para modificar comportamiento sin romper nada</li>
                <li>Crear <strong>custom post types</strong> (por ejemplo: Proyectos para un portfolio)</li>
                <li>Crear <strong>shortcodes</strong> y bloques personalizados</li>
                <li>Integrar APIs, formularios avanzados, automatizaciones y lógica de negocio</li>
              </ul>

              <div className="callout">
                <p>
                  <strong>Mensaje directo para programadores:</strong> WordPress no te “quita” nivel.
                  Te permite usar tu nivel para construir más rápido y mejor que el 90% de usuarios.
                  La diferencia entre una web “normal” y una web profesional en WordPress suele ser:
                  <strong> CSS bien aplicado + PHP con criterio + buenas prácticas</strong>.
                </p>
              </div>

              <ActivityBox title="Actividad (convenciendo al programador)">
                <p><strong>Reto rápido:</strong> piensa en el portfolio del Proyecto 1.</p>
                <ul>
                  <li>¿Qué parte sería “contenido editable” para el cliente? (WordPress lo resuelve)</li>
                  <li>¿Qué parte sería “diseño” que tú controlas con CSS?</li>
                  <li>¿Qué parte sería “lógica” donde entra PHP? (por ejemplo, listado de proyectos)</li>
                </ul>
                <p>
                  <em>Objetivo:</em> ver WordPress como un sistema sobre el que tú construyes, no como un “juguete”.
                </p>
              </ActivityBox>
            </div>
          </details>
        </section>

        {/* 1.5 */}
        <section className="doc-section" id="mercado-laboral">
          <h2>1.5 El mercado laboral y oportunidades profesionales</h2>

  <div className="stats-highlight" style={{ backgroundColor: '#f0f7ff', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid #2271b1' }}>
    <p><strong>¿Por qué especializarse en WordPress hoy?</strong></p>
    <ul>
      <li><strong>Dominio Global:</strong> WordPress impulsa el <strong>43% de todas las webs</strong> de Internet. En el sector de los CMS, ostenta una cuota de mercado del <strong>60%</strong>, dejando a competidores como Shopify o Wix en un lejano segundo plano.</li>
      <li><strong>Demanda Incesante:</strong> Con más de 500 millones de sitios activos, la necesidad de mantenimiento, seguridad y personalización genera miles de ofertas diarias en portales como LinkedIn, Indeed y plataformas de freelance.</li>
    </ul>
  </div>

  <details className="dd">
  <summary>Ver salidas profesionales, rangos y futuro del perfil WordPress</summary>

  <div className="dd-body">
    <p>
      El ecosistema WordPress no solo es el más grande en número de sitios,
      sino también uno de los más <strong>diversos y sostenibles a nivel económico</strong>.
      No existe un único perfil profesional, sino múltiples especializaciones.
    </p>

    <div className="table-wrap" tabIndex="0" aria-label="Salidas profesionales WordPress">
      <table className="table table-zebra">
        <caption>Perfiles profesionales y rangos estimados (2026)</caption>
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Rango económico orientativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Desarrollador WordPress (FSE + React)</th>
            <td>30.000€ – 55.000€ anuales</td>
          </tr>
          <tr>
            <th scope="row">Especialista en WooCommerce</th>
            <td>400€ – 1.500€ por proyecto</td>
          </tr>
          <tr>
            <th scope="row">Consultor de optimización, rendimiento e IA</th>
            <td>60€ – 120€ por hora</td>
          </tr>
          <tr>
            <th scope="row">Mantenimiento, seguridad y soporte</th>
            <td>50€ – 200€ / mes por cliente</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="callout tip">
      <p>
        <strong>Mensaje importante para perfiles técnicos:</strong><br />
        WordPress no es un “techo bajo”. Es una <strong>plataforma base</strong>.
        El valor profesional aparece cuando se combinan:
        <strong> WordPress + CSS avanzado + PHP + lógica de negocio</strong>.
      </p>
    </div>

    <div className="callout">
      <p>
        <strong>El futuro inmediato:</strong>  
        WordPress ya no es un simple creador de blogs. El crecimiento real está en:
      </p>
      <ul>
        <li><strong>Full Site Editing (FSE):</strong> control total del sitio desde bloques</li>
        <li><strong>Bloques personalizados:</strong> combinando React y WordPress</li>
        <li><strong>Automatización e IA:</strong> generación de contenido, flujos y personalización</li>
        <li><strong>Experiencias dinámicas:</strong> webs que se adaptan al usuario</li>
      </ul>
      <p>
        Los perfiles más demandados no son los que “instalan WordPress”, sino los que
        <strong> lo adaptan, lo optimizan y lo integran</strong> en proyectos reales.
      </p>
    </div>
  </div>
</details>

</section>
        {/* 1.6 */}
        <section className="doc-section" id="metodologia">
          <h2>1.6 Metodología de trabajo profesional</h2>

          <details className="dd">
            <summary>Ver metodología (local → testing → staging → producción)</summary>
            <div className="dd-body">
              <PracticeBox>
                <p>En este curso seguiremos una metodología profesional:</p>
                <ol>
                  <li><strong>Desarrollo local:</strong> Trabajamos en nuestro ordenador primero</li>
                  <li><strong>Testing:</strong> Probamos todo antes de subir</li>
                  <li><strong>Staging:</strong> Entorno de pruebas previo a producción</li>
                  <li><strong>Producción:</strong> El sitio web final que ve el público</li>
                </ol>
              </PracticeBox>
            </div>
          </details>
        </section>

        {/* 1.7 */}
        <section className="doc-section" id="herramientas">
          <h2>1.7 Herramientas que necesitarás</h2>

          <details className="dd">
            <summary>Ver herramientas necesarias + actividad</summary>
            <div className="dd-body">
              <p>Para trabajar profesionalmente con WordPress necesitarás:</p>
              <ul>
                <li><strong>LocalWP:</strong> Entorno de desarrollo local</li>
                <li><strong>Editor de código:</strong> VS Code (recomendado)</li>
                <li><strong>Cliente FTP:</strong> FileZilla</li>
                <li><strong>Navegadores:</strong> Chrome, Firefox, Safari</li>
                <li><strong>Herramientas de diseño:</strong> Figma, Canva</li>
              </ul>

              <ActivityBox>
                <p>
                  <strong>Actividad práctica:</strong> Antes de continuar, asegúrate de tener
                  instalado VS Code y un navegador actualizado. En el próximo módulo
                  instalaremos LocalWP.
                </p>
              </ActivityBox>
            </div>
          </details>
        </section>

        <div className="doc-next">
          <a href="/tema2" className="btn btn-primary">
            Siguiente: M2 · Entorno de desarrollo local →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
