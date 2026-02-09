import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema4Index() {
  return (
    <TopicLayout
      title="M4 · Temas: la apariencia profesional"
      subtitle="Diferencia tema vs plantilla, elige bien desde el principio y prepara tu web (y tu futura tienda) con criterio"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 4</div>
          <h1>Temas: la apariencia profesional</h1>
          <p className="doc-lead">
            En este módulo vamos a aprender a elegir e instalar temas con criterio profesional.
            Lo primero: <strong>tema</strong> no es lo mismo que <strong>plantilla</strong>.
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#tema-vs-plantilla">Tema vs plantilla: diferencias y ejemplos reales</a></li>
            <li><a href="#descarga">Cuándo descargar un tema o una plantilla (y desde dónde)</a></li>
            <li><a href="#un-solo-tema">Regla importante: solo un tema activo a la vez</a></li>
            <li><a href="#gratuitos-premium-mixtos">Temas gratis, de pago y “mixtos”</a></li>
            <li><a href="#kadence">Empezamos con Astra: nuestro tema elegido.</a></li>
            <li><a href="#temas-woocommerce">Temas recomendados para WooCommerce</a></li>
            <li><a href="#anatomia-tema">Anatomía de un tema de WordPress</a></li>
            <li><a href="#instalacion">Instalación y activación</a></li>
            <li><a href="#personalizacion">Personalización con el Customizer</a></li>
            <li><a href="#tema-hijo">Temas hijo: modificaciones seguras</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Al finalizar este módulo sabrás distinguir <strong>tema</strong> de <strong>plantilla</strong>,
            elegir el tema correcto según el proyecto, instalarlo con seguridad y empezar a personalizar
            como un profesional (sin romper nada).
          </p>
        </TipBox>

        {/* 4.1 Tema vs plantilla */}
        <section className="doc-section" id="tema-vs-plantilla">
          <h2>4.1 Tema vs plantilla: diferencias y ejemplos reales</h2>

          <details className="dd" open>
            <summary>Ver la diferencia (sin confusiones)</summary>
            <div className="dd-body">
              <p>
                En WordPress, mucha gente dice “plantilla” para referirse a todo. Pero en un uso profesional,
                conviene diferenciar:
              </p>

              <div className="table-wrap" tabIndex="0" aria-label="Tema vs Plantilla en WordPress">
                <table className="table table-zebra">
                  <caption>Tema vs plantilla: qué es cada cosa</caption>
                  <thead>
                    <tr>
                      <th>Concepto</th>
                      <th>Qué es</th>
                      <th>Ejemplo típico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Tema</th>
                      <td>
                        El “pack” que define la apariencia general y la estructura del sitio:
                        estilos, tipografías, cabecera, pie, plantillas, etc.
                      </td>
                      <td>
                        Astra, Kadence, GeneratePress, Twenty Twenty-Four…
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Plantilla</th>
                      <td>
                        Un diseño concreto dentro del tema (o de un maquetador) para una página/sección.
                        Es una “pieza” reutilizable, no el sistema completo.
                      </td>
                      <td>
                        “Plantilla de Home”, “Plantilla de landing”, “Plantilla de portfolio”
                        (a veces se importan como “Starter Sites”).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <TipBox title="Traducción rápida para clase">
                <p>
                  <strong>Tema = la base de tu casa.De hecho cuando inicias un proyecto wp te pone un tema por defecto. Sin tema no funciona wp.</strong> <br />
                  <strong>Plantilla = la distribución y decoración de una habitación.</strong>
                </p>
              </TipBox>

              <WarningBox>
                <p>
                  Cuando descargues una “plantilla” de demos (“Starter Site”), casi siempre estás importando
                  <strong>contenido + diseño </strong> que depende de un tema (y a veces de plugins).
                  Por eso hay que hacerlo con criterio.
                </p>
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 4.2 Descarga: cuándo y desde dónde */}
        <section className="doc-section" id="descarga">
          <h2>4.2 Cuándo descargar un tema o una plantilla (y desde dónde)</h2>

          <details className="dd" open>
            <summary>Ver reglas profesionales (evitar errores típicos)</summary>
            <div className="dd-body">
              <p>
                No se descarga “por descargar”. En WordPress, <strong>el tema se elige según el proyecto</strong>.
                Y la plantilla/demos se importan solo si sabes lo que estás metiendo.
              </p>

              <div className="card">
                <h3 className="badge">¿Cuándo descargar un TEMA?</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Recuerda que tu sitio por defecto ya tiene un tema activo (actualmente Twenty Twenty-Five).</li>
                  <li>Cuando quieres definir la base visual y técnica del sitio</li>
                  <li>Cuando necesitas compatibilidad con plugins (por ejemplo, WooCommerce)</li>
                  <li>Cuando buscas rendimiento y buena estructura</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="badge">¿Cuándo descargar una PLANTILLA / Starter Site?</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Cuando estás prototipando rápido o necesitas inspiración</li>
                  <li>Cuando el estilo encaja y vas a adaptar textos e imágenes</li>
                  <li>Cuando aceptas que puede requerir plugins extra</li>
                </ul>
              </div>

              <WarningBox>
                <p>
                  <strong>Nunca</strong> descargues temas/plantillas de sitios “raros” o “gratis premium”.
                  En proyectos reales eso es un riesgo serio (seguridad, malware, sin actualizaciones).
                </p>
              </WarningBox>

              <TipBox title="Fuentes recomendadas">
                <ul>
                  <li><strong>Repositorio oficial de WordPress:</strong> Apariencia → Temas</li>
                  <li><strong>Web del desarrollador del tema:</strong> (descarga oficial + documentación)</li>
                  <li><strong>Marketplaces conocidos:</strong> solo si son oficiales y con licencia</li>
                </ul>
              </TipBox>
            </div>
          </details>
        </section>

        {/* 4.3 Solo un tema */}
        <section className="doc-section" id="un-solo-tema">
          <h2>4.3 Regla importante: solo un tema activo a la vez</h2>

          <details className="dd" open>
            <summary>Ver cómo funciona (y por qué es así)</summary>
            <div className="dd-body">
              <p>
                En WordPress puedes tener <strong>varios temas instalados</strong>, pero solo
                <strong> uno puede estar activo</strong> al mismo tiempo.
              </p>

              <ul>
                <li><strong>Tema activo:</strong> el que controla el diseño y plantillas del sitio ahora mismo</li>
                <li><strong>Temas instalados (inactivos):</strong> están disponibles, pero no afectan al sitio</li>
              </ul>

              <TipBox title="Por qué esto es importante">
                <p>
                  Cambiar de tema <strong>cambia la “capa de presentación”</strong>. En muchos casos no pierdes el contenido,
                  pero sí pueden cambiar menús, widgets o zonas del diseño.
                </p>
              </TipBox>
            </div>
          </details>
        </section>

        {/* 4.4 Gratis, pago y mixtos */}
        <section className="doc-section" id="gratuitos-premium-mixtos">
          <h2>4.4 Temas gratis, de pago y “mixtos”</h2>

          <details className="dd" open>
            <summary>Ver comparativa simple (para elegir bien)</summary>
            <div className="dd-body">
              <p>
                En WordPress encontrarás tres escenarios habituales:
              </p>

              <div className="two-columns">
                <div className="column">
                  <h4>🆓 Gratis</h4>
                  <ul>
                    <li>Buenas bases para aprender</li>
                    <li>Repositorios revisados si vienen de WordPress.org</li>
                    <li>Menos opciones y soporte limitado</li>
                  </ul>
                </div>

                <div className="column">
                  <h4>💎 Premium</h4>
                  <ul>
                    <li>Más opciones y diseños avanzados</li>
                    <li>Soporte del desarrollador</li>
                    <li>Licencia y renovaciones (según proveedor)</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <h3 className="badge">🌓 “Mixtos” (freemium)</h3>
                <p style={{ marginTop: 0 }}>
                  Son temas con una versión gratuita y una versión Pro (de pago).
                  Es un modelo muy común y totalmente normal en el ecosistema WordPress.
                </p>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Empiezas con la versión gratuita</li>
                  <li>Si el proyecto crece, pasas a Pro</li>
                  <li>Ideal para aprender y escalar a proyectos cliente</li>
                </ul>
              </div>

              <WarningBox>
                <p>
                  <strong>Evita los “nulled”:</strong> temas premium pirateados. No tienen actualizaciones,
                  pueden traer malware y en proyectos reales son un problema serio.
                </p>
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 4.5 Kadence */}
       <section className="doc-section" id="astra">
  <h2>4.5 Empezamos con Astra</h2>

  <details className="dd" open>
    <summary>¿Por qué elegimos Astra en este curso?</summary>
    <div className="dd-body">
      <p>
        En este curso vamos a trabajar con <strong>Astra</strong> como tema base.
        No lo elegimos por moda ni por diseño espectacular, sino porque es un tema
        <strong>pensado para aprender WordPress de forma correcta</strong>.
      </p>

      <p>
        Astra es un tema ligero, limpio y muy respetuoso con el editor de bloques.
        Esto nos permite centrarnos en lo importante: entender cómo funciona WordPress,
        cómo se estructura una web y cómo se crea contenido con criterio.
      </p>

      <TipBox title="Por qué Astra es ideal para empezar">
        <ul>
          <li>No impone diseños cerrados ni estructuras rígidas</li>
          <li>Funciona perfectamente con el editor de bloques (Gutenberg)</li>
          <li>Tiene un rendimiento muy alto incluso en su versión gratuita</li>
          <li>Permite aprender la diferencia entre tema y contenido</li>
          <li>Es muy usado en entornos profesionales reales</li>
        </ul>
      </TipBox>

      <WarningBox>
        <p>
          Astra <strong>no hace la web por ti</strong>. Y eso es precisamente lo que lo
          hace perfecto para este curso.
        </p>
        <p>
          Aquí aprenderás a construir páginas con bloques, a tomar decisiones de diseño
          y a entender la estructura de WordPress, no a depender de plantillas cerradas
          o maquetadores visuales.
        </p>
      </WarningBox>

      <p>
        A lo largo del manual verás que Astra actúa como una base estable sobre la que
        iremos construyendo paso a paso, siempre con una lógica clara y profesional.
      </p>
    </div>
  </details>
</section>

        {/* 4.6 Temas WooCommerce */}
        <section className="doc-section" id="temas-woocommerce">
          <h2>4.6 Temas recomendados para WooCommerce</h2>

          <details className="dd" open>
            <summary>Qué temas tienen sentido para una tienda (sin complicarse)</summary>
            <div className="dd-body">
              <p>
                Para WooCommerce conviene usar temas que sean <strong>compatibles</strong> y estén
                bien mantenidos. WooCommerce añade muchas pantallas (tienda, producto, carrito, checkout)
                y el tema debe responder bien.
              </p>

              <TipBox title="Opciones fundamentales para empezar">
                <ul>
                  <li>
                    <strong>Storefront:</strong> tema oficial de WooCommerce. Muy buena base para tienda y pruebas.
                  </li>
                  <li>
                    <strong>Twenty Twenty-Three / Twenty Twenty-Four:</strong> temas oficiales de WordPress, limpios y estables.
                    Son buenos para aprender estructura y luego adaptar.
                  </li>
                </ul>
              </TipBox>

              <ActivityBox title="Recomendación didáctica">
                <p>
                  Para aprender WooCommerce sin ruido, es muy útil comenzar con <strong>Storefront</strong>
                  o un <strong>Twenty</strong>. Cuando entiendas bien la tienda, entonces pasas a un tema
                  más “de marca” si el proyecto lo necesita.
                </p>
              </ActivityBox>
            </div>
          </details>
        </section>

        {/* --- Mantengo el resto de tu contenido original, ya reordenado --- */}

        <section className="doc-section" id="anatomia-tema">
          <h2>4.7 Anatomía de un tema de WordPress</h2>

          <p>
            Un tema de WordPress es mucho más que "cómo se ve" tu sitio. Es el sistema completo
            que controla diseño, funcionalidades, velocidad y experiencia de usuario.
          </p>

          <TipBox title="🏗️ Un tema profesional incluye">
            <ul>
              <li><strong>Templates:</strong> Plantillas para diferentes tipos de contenido</li>
              <li><strong>Estilos CSS:</strong> Diseño visual y responsive</li>
              <li><strong>Funcionalidades PHP:</strong> Características especiales del tema</li>
              <li><strong>Customizer:</strong> Panel de personalización en vivo</li>
              <li><strong>Widgets y menús:</strong> Áreas personalizables</li>
              <li><strong>Compatibilidad:</strong> Con plugins populares y estándares web</li>
            </ul>
          </TipBox>

          <h3>¿Cómo funciona internamente?</h3>
          <p>
            WordPress busca templates específicos para cada situación. Por ejemplo, cuando alguien
            visita tu página "Sobre Nosotros", WordPress busca en este orden:
          </p>

          <PracticeBox title="Jerarquía de templates">
            <ol>
              <li><strong>page-sobre-nosotros.php</strong> - Específico para esa página</li>
              <li><strong>page.php</strong> - Template general de páginas</li>
              <li><strong>index.php</strong> - Template por defecto</li>
            </ol>
          </PracticeBox>
        </section>

        <section className="doc-section" id="instalacion">
          <h2>4.8 Instalación y activación</h2>

          <p>
            Hay varias formas de instalar temas. Cada método tiene su momento apropiado según
            el origen del tema y las circunstancias del proyecto.
          </p>

          <ActivityBox title="🚀 Práctica: Instalar tu primer tema profesional">
            <h4>Método 1: Desde el repositorio de WordPress (temas gratuitos)</h4>
            <ol>
              <li>Ve a <strong>Apariencia → Temas</strong></li>
              <li>Clic en <strong>"Añadir nuevo"</strong></li>
              <li>
                Explora o busca: <code>"Kadence"</code>, <code>"Astra"</code> o <code>"GeneratePress"</code>
              </li>
              <li>Clic en <strong>"Instalar"</strong> y luego <strong>"Activar"</strong></li>
              <li><strong>¡Listo!</strong> Tu sitio ya tiene un tema instalado</li>
            </ol>

            <h4>Método 2: Subir archivo ZIP (temas premium)</h4>
            <ol>
              <li>Ve a <strong>Apariencia → Temas</strong></li>
              <li>Clic en <strong>"Añadir nuevo"</strong> → <strong>"Subir tema"</strong></li>
              <li>Selecciona el archivo .zip del tema</li>
              <li>Clic en <strong>"Instalar ahora"</strong></li>
              <li>Una vez instalado, <strong>"Activar"</strong></li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="personalizacion">
          <h2>4.9 Personalización con el Customizer</h2>

          <p>
            El Customizer de WordPress es tu herramienta de personalización en tiempo real.
            Ves los cambios instantáneamente mientras los haces.
          </p>

          <PracticeBox title="🎨 Personalización básica profesional">
            <p><strong>Ve a Apariencia → Personalizar y configura:</strong></p>

            <h4>1. Identidad del sitio</h4>
            <ul>
              <li><strong>Logo:</strong> Sube el logo de la empresa/proyecto</li>
              <li><strong>Título:</strong> Confirma que sea correcto</li>
              <li><strong>Descripción:</strong> Slogan o descripción breve</li>
              <li><strong>Icono del sitio:</strong> Favicon (32x32px mínimo)</li>
            </ul>

            <h4>2. Colores</h4>
            <ul>
              <li><strong>Colores primarios:</strong> Los de la marca del cliente</li>
              <li><strong>Colores de enlace:</strong> Que contrasten bien para accesibilidad</li>
              <li><strong>Fondo:</strong> Generalmente blanco o muy claro para legibilidad</li>
            </ul>

            <h4>3. Tipografía</h4>
            <ul>
              <li><strong>Fuente principal:</strong> Legible y profesional</li>
              <li><strong>Espaciado:</strong> Suficiente para buena legibilidad</li>
            </ul>
          </PracticeBox>
        </section>

      <section className="doc-section" id="tema-hijo">
  <h2>4.10 Temas hijo: modificaciones seguras</h2>

  <WarningBox>
    <p>
      <strong>⚠️ Regla de oro:</strong> Nunca modifiques directamente los archivos del tema que has instalado.
      Si el tema se actualiza, <strong>puedes perder tus cambios</strong>. Para eso existe el <strong>tema hijo</strong>.
    </p>
  </WarningBox>

  <details className="dd" open>
    <summary>Qué es un tema hijo (explicado sin líos)</summary>
    <div className="dd-body">
      <p>
        Un <strong>tema hijo</strong> es un tema “pequeño” que depende de otro tema, llamado <strong>tema padre</strong>.
        El tema padre es el que trae el diseño y las funciones principales.
      </p>

      <p>
        El tema hijo <strong>no empieza de cero</strong>: hereda todo del tema padre y solo contiene
        <strong>tus cambios personalizados</strong>.
      </p>

      <div className="callout tip">
        <p>
          <strong>Idea fácil:</strong><br />
          El tema padre es el “producto original”.<br />
          El tema hijo es tu “capa de personalización” que se mantiene aunque el padre se actualice.
        </p>
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>¿Para qué vale un tema hijo?</summary>
    <div className="dd-body">
      <p>
        Sirve para hacer modificaciones <strong>seguras y mantenibles</strong>. En WordPress, los temas se actualizan
        (por seguridad, mejoras y compatibilidad). Si tú modificas el tema padre directamente, el día que actualice:
        <strong> tus cambios se pueden sobrescribir</strong>.
      </p>

      <p><strong>Con un tema hijo, tus cambios viven “aparte”:</strong></p>
      <ul>
        <li>✅ Puedes añadir <strong>CSS personalizado</strong> sin tocar el tema padre</li>
        <li>✅ Puedes añadir <strong>funciones en PHP</strong> (por ejemplo, hooks o pequeñas mejoras)</li>
        <li>✅ Puedes modificar una plantilla concreta (template) sin romper el resto</li>
        <li>✅ Puedes actualizar el tema padre con tranquilidad</li>
      </ul>

      <TipBox title="Resumen profesional">
        <p>
          Un tema hijo es la forma correcta de <strong>personalizar sin romper el mantenimiento</strong>.
          Es una práctica estándar cuando trabajas para clientes.
        </p>
      </TipBox>
    </div>
  </details>

  <details className="dd">
    <summary>¿Para quién es un tema hijo? (cuándo lo necesitas de verdad)</summary>
    <div className="dd-body">
      <p>
        No todo el mundo necesita un tema hijo desde el minuto 1. Depende del tipo de proyecto y del tipo de cambios.
      </p>

      <div className="table-wrap" tabIndex="0" aria-label="Cuándo usar tema hijo">
        <table className="table table-zebra">
          <caption>Cuándo tiene sentido crear un tema hijo</caption>
          <thead>
            <tr>
              <th>Situación</th>
              <th>¿Tema hijo?</th>
              <th>Por qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Estás aprendiendo y solo cambias colores desde el editor</th>
              <td>No obligatorio</td>
              <td>Si no tocas archivos, no hay riesgo de perder cambios por actualización</td>
            </tr>
            <tr>
              <th scope="row">Vas a meter CSS personalizado en archivos</th>
              <td>Sí</td>
              <td>Tu CSS queda separado del tema padre</td>
            </tr>
            <tr>
              <th scope="row">Proyecto para un cliente</th>
              <td>Sí</td>
              <td>Necesitas mantenimiento y actualizaciones sin sustos</td>
            </tr>
            <tr>
              <th scope="row">Vas a tocar PHP, hooks o templates</th>
              <td>Sí</td>
              <td>Es la forma correcta de personalizar sin modificar el tema padre</td>
            </tr>
          </tbody>
        </table>
      </div>

      <WarningBox>
        <p>
          <strong>Importante:</strong> Si solo estás usando el editor de WordPress (bloques, estilos globales, FSE),
          puede que no necesites tema hijo todavía. Pero si vas a <strong>tocar archivos</strong>,
          el tema hijo es la opción profesional.
        </p>
      </WarningBox>
    </div>
  </details>

  <h3>¿Cuándo necesitas un tema hijo?</h3>
  <ul>
    <li>✅ <strong>Modificar CSS:</strong> Cambios de diseño personalizados (en archivos o código)sin miedo a que se te borren</li>
    <li>✅ <strong>Cambiar templates:</strong> Ajustar estructura de páginas (cuando el tema lo permite)</li>
    <li>✅ <strong>Añadir funciones:</strong> Pequeñas mejoras con PHP (hooks, snippets)</li>
    <li>✅ <strong>Proyectos cliente:</strong> Siempre que haya personalización real y mantenimiento</li>
  </ul>

  <ActivityBox title="👶 Crear tu primer tema hijo (versión clara)">
    <p>
      Vamos a crear una carpeta nueva donde vivan <strong>solo tus cambios</strong>.
      El tema padre seguirá instalado y actualizable.
    </p>

    <h4>Método manual (15 minutos):</h4>
    <ol>
      <li>
        En LocalWP, ve a la carpeta: <code>/app/public/wp-content/themes/</code>
      </li>
      <li>
        Crea una nueva carpeta: <code>astra-child</code> (o el nombre de tu tema + <code>-child</code>)
      </li>
      <li>Dentro, crea <strong>style.css</strong> con este contenido:</li>
    </ol>

    <pre>
      <code>{`/*
Theme Name: Astra Child
Template: astra
Description: Tema hijo de Astra para modificaciones seguras
Version: 1.0
*/

/* Aquí van tus estilos personalizados */`}</code>
    </pre>

    <p>4. Crea <strong>functions.php</strong>:</p>
    <pre>
      <code>{`<?php
function cargar_estilos_tema_hijo() {
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'cargar_estilos_tema_hijo');`}</code>
    </pre>

    <p>5. Ve a <strong>Apariencia → Temas</strong> y activa tu tema hijo</p>
    <p>6. A partir de ahora, los cambios los harás en el hijo y podrás actualizar el padre sin miedo</p>
  </ActivityBox>

  <TipBox title="🚀 Método rápido: Child Theme Configurator">
    <p>
      Si prefieres no hacerlo manual, instala el plugin <strong>"Child Theme Configurator"</strong>.
      Crea el tema hijo automáticamente en 1 clic.
    </p>
  </TipBox>
</section>
<section className="doc-section" id="cambiar-tema">
  <h2>¿Qué pasa si cambio el tema Astra por otro?</h2>

  <details className="dd" open>
    <summary>Qué significa realmente cambiar de tema en WordPress</summary>
    <div className="dd-body">
      <p>
        En WordPress, un <strong>tema</strong> controla el aspecto general del sitio:
        cabecera, footer, colores globales, tipografías y diseño base.
      </p>

      <p>
        Cambiar de tema no borra el contenido:
        las páginas, textos e imágenes siguen existiendo.
      </p>

      <div className="callout tip">
        Cambiar de tema es cambiar la apariencia,
        no el contenido.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Qué cambia al pasar de Astra a Twenty Twenty</summary>
    <div className="dd-body">
      <ul>
        <li>Cambia el panel de <strong>Apariencia → Personalizar</strong>.</li>
        <li>Cambian las opciones de botones, colores y tipografías.</li>
        <li>El diseño por defecto es más simple.</li>
      </ul>

      <div className="callout warn">
        Cada tema tiene su propia forma de personalizarse.
        Las rutas y nombres pueden variar.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Qué NO cambia aunque cambies de tema</summary>
    <div className="dd-body">
      <ul>
        <li>Las páginas creadas</li>
        <li>Los bloques de Gutenberg</li>
        <li>Los bloques de Spectra</li>
        <li>La estructura de las secciones</li>
        <li>Los contenidos del Hero</li>
      </ul>

      <div className="callout tip">
        El editor de bloques funciona igual con cualquier tema moderno.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Idea clave para el alumnado</summary>
    <div className="dd-body">
      <p>
        Aprender un tema concreto es útil,
        pero lo importante es aprender los <strong>conceptos</strong>:
      </p>

      <ul>
        <li>estructura</li>
        <li>contenedores</li>
        <li>estilos globales vs contenido</li>
        <li>flujo de una landing</li>
      </ul>

      <div className="callout tip">
        Si entiendes esto, puedes usar cualquier tema.
      </div>
    </div>
  </details>
</section>


        <div className="doc-next">
          <a href="/tema5" className="btn btn-primary">
            Siguiente: M5 · Plugins esenciales →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
