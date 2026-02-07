import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema1Index() {
  return (
    <TopicLayout
      title="M1 · Fundamentos de WordPress"
      subtitle="Todo lo que necesitas saber sobre WordPress antes de comenzar tu carrera profesional"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 1</div>
          <h1>Fundamentos de WordPress</h1>
          <p className="doc-lead">
            Todo lo que necesitas saber sobre WordPress antes de comenzar tu carrera profesional
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#que-es-wordpress">¿Qué es WordPress y por qué dominarlo?</a></li>
            <li><a href="#cms">¿Qué es un CMS y para qué sirve?</a></li>
            <li><a href="#otros-cms">¿Existen más CMS además de WordPress?</a></li>
            <li><a href="#comparativa-dev">Comparativa: HTML/CSS vs WordPress (visión de programador)</a></li>
            <li><a href="#com-vs-org">WordPress.com vs WordPress.org</a></li>
            <li><a href="#mercado-laboral">El mercado laboral y WordPress</a></li>
            <li><a href="#metodologia">Metodología de trabajo profesional</a></li>
            <li><a href="#herramientas">Herramientas que necesitarás</a></li>
          </ol>
        </div>

        <TipBox title="Bienvenido al mundo WordPress">
          <p>
            WordPress impulsa más del 40% de todos los sitios web del mundo. Dominar esta
            plataforma te abrirá muchas oportunidades laborales en desarrollo web,
            marketing digital y gestión de contenidos.
          </p>
        </TipBox>

        {/* 1.1 */}
        <section className="doc-section" id="que-es-wordpress">
          <h2>1.1 ¿Qué es WordPress y por qué dominarlo?</h2>

          <details className="dd" open>
            <summary>Leer explicación y ventajas profesionales</summary>
            <div className="dd-body">
              <p>
                WordPress es un sistema de gestión de contenidos (CMS) que permite crear
                sitios web sin necesidad de programar desde cero. Es la herramienta más
                popular del mundo para crear páginas web.
              </p>

              <p><strong>Ventajas profesionales de WordPress:</strong></p>
              <ul>
                <li>Alta demanda laboral (millones de sitios lo usan)</li>
                <li>Flexibilidad total: desde blogs hasta tiendas online</li>
                <li>Comunidad enorme y recursos infinitos</li>
                <li>Curva de aprendizaje progresiva</li>
                <li>Oportunidades freelance y empleos estables</li>
              </ul>
            </div>
          </details>
        </section>

        {/* 1.2 */}
        <section className="doc-section" id="cms">
          <h2>1.2 ¿Qué es un CMS y para qué sirve?</h2>

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

        {/* 1.3 */}
        <section className="doc-section" id="otros-cms">
          <h2>1.3 ¿Existen más CMS además de WordPress?</h2>

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

        {/* ✅ NUEVO: Comparativa para alumnado de programación */}
        <section className="doc-section" id="comparativa-dev">
          <h2>1.4 Comparativa: HTML/CSS vs WordPress </h2>

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
        <section className="doc-section" id="com-vs-org">
  <h2>1.5 WordPress.com vs WordPress.org</h2>

  <details className="dd">
    <summary>Ver la diferencia crítica (muy importante)</summary>
    <div className="dd-body">
      <WarningBox>
        <p>
          <strong>Diferencia crítica:</strong> WordPress.com es un servicio alojado con
          limitaciones. WordPress.org es el software libre que instalarás en un servidor.
          Nosotros trabajamos con WordPress.org (la versión profesional).
        </p>
      </WarningBox>

      <p>
        Aunque comparten nombre, <strong>WordPress.com y WordPress.org NO son lo mismo</strong>.
        De hecho, confundirlos es uno de los errores más comunes cuando se empieza.
      </p>

      <h3>🧩 WordPress.com (servicio alojado)</h3>
      <p>
        WordPress.com es una plataforma que te ofrece <strong>WordPress como servicio</strong>.
        No instalas nada: creas una cuenta y ellos se encargan del servidor, las actualizaciones
        y la seguridad.
      </p>

      <ul>
        <li>No tienes acceso real al servidor</li>
        <li>Personalización limitada (especialmente en planes gratuitos)</li>
        <li>No puedes usar cualquier plugin o tema</li>
        <li>No tienes control total del código</li>
        <li>Ideal para proyectos personales muy simples</li>
      </ul>

      <h3>🧩 WordPress.org (software libre – versión profesional)</h3>
      <p>
        WordPress.org es el <strong>software WordPress real</strong>. Tú descargas el sistema
        e <strong>instalas WordPress en un servidor</strong> (local o remoto).
      </p>

      <ul>
        <li>Control total del código y la base de datos</li>
        <li>Instalación libre de temas y plugins</li>
        <li>Posibilidad de crear temas hijo y modificar plantillas</li>
        <li>Acceso a PHP, CSS, hooks, funciones y personalización avanzada</li>
        <li>Escalable: de portfolio a tienda online o proyecto complejo</li>
      </ul>

      <div className="table-wrap" tabIndex="0">
        <table className="table table-zebra">
          <caption>Diferencias clave WordPress.com vs WordPress.org</caption>
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
              <td>No instalas nada</td>
              <td>Instalas WordPress tú</td>
            </tr>
            <tr>
              <th scope="row">Acceso al código</th>
              <td>Muy limitado</td>
              <td>Total (PHP, CSS, JS)</td>
            </tr>
            <tr>
              <th scope="row">Plugins y temas</th>
              <td>Limitados o de pago</td>
              <td>Libres (miles disponibles)</td>
            </tr>
            <tr>
              <th scope="row">Uso profesional</th>
              <td>No recomendado</td>
              <td>Sí, estándar profesional</td>
            </tr>
            <tr>
              <th scope="row">Escalabilidad</th>
              <td>Baja</td>
              <td>Muy alta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout tip">
        <p>
          <strong>Mensaje claro para programadores:</strong>  
          Si sabes HTML, CSS o PHP, <strong>WordPress.com te limita</strong>.
          WordPress.org, en cambio, te permite aplicar tus conocimientos y
          construir soluciones profesionales sobre una base sólida.
        </p>
      </div>

      <ActivityBox title="Actividad de comprensión">
        <p>
          Responde con tus palabras:
        </p>
        <ul>
          <li>¿Por qué WordPress.com no es adecuado para un proyecto profesional?</li>
          <li>¿Qué ventajas te ofrece WordPress.org si sabes CSS o PHP?</li>
        </ul>
      </ActivityBox>
    </div>
  </details>
</section>


        <section className="doc-section" id="mercado-laboral">
  <h2>1.6 El mercado laboral y la hegemonía de WordPress</h2>

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
        {/* 1.7 */}
        <section className="doc-section" id="metodologia">
          <h2>1.7 Metodología de trabajo profesional</h2>

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

        {/* 1.8 */}
        <section className="doc-section" id="herramientas">
          <h2>1.8 Herramientas que necesitarás</h2>

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
