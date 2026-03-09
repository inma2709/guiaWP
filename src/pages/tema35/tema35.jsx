import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function TemaWooCommerceBloquesMaquetacion() {
  return (
    <TopicLayout
      title="Maquetar páginas con bloques de WooCommerce"
      description="Tema completo sobre cuándo usar Elementor, cuándo usar bloques nativos de WooCommerce y cómo combinarlos con criterio profesional en páginas como tienda, producto, carrito y checkout."
    >
      <article className="doc">
        <header className="doc-hero">
          <p className="doc-kicker">Tema · WordPress · WooCommerce · Gutenberg</p>
          <h1>Cómo maquetar páginas con bloques de WooCommerce</h1>
          <p className="doc-lead">
            Cuando empezamos a trabajar con WooCommerce solemos pensar que todas las páginas de la tienda deben diseñarse con
            Elementor. Sin embargo, en proyectos reales no siempre es la mejor decisión. WooCommerce incorpora bloques nativos
            que permiten construir partes fundamentales de una tienda online con una integración mucho más limpia con el sistema
            de productos, el carrito y el proceso de compra. En este tema vas a aprender a decidir con criterio qué páginas conviene
            hacer con Elementor, cuáles conviene construir con bloques de WooCommerce y cómo aprovechar esos bloques para conseguir
            una maquetación profesional, mantenible y coherente.
          </p>
          <p className="doc-lead">
            La idea central es sencilla: no se trata de usar una herramienta porque sea más visual, sino de elegir la que mejor se
            adapta a la función de cada página. Una landing comercial, una home corporativa o una página de servicios puede resolverse
            muy bien con Elementor. En cambio, páginas como tienda, carrito, checkout o algunos listados de productos suelen funcionar
            mejor con bloques nativos de WooCommerce porque están diseñados para mostrar información dinámica y para respetar el flujo
            real de compra.
          </p>
        </header>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li><a href="#vision-general">1. Visión general: Elementor y bloques de WooCommerce</a></li>
            <li><a href="#criterio-paginas">2. Qué páginas conviene hacer con cada sistema</a></li>
            <li><a href="#tabla-decision">3. Esquema de decisión por tipo de página</a></li>
            <li><a href="#bloques-aportan">4. Bloques de WooCommerce que más aportan</a></li>
            <li><a href="#pagina-tienda">5. Maquetar la página Tienda</a></li>
            <li><a href="#pagina-producto">6. Aplicación en páginas de producto</a></li>
            <li><a href="#pagina-carrito-checkout">7. Aplicación en carrito y checkout</a></li>
            <li><a href="#metodologia">8. Metodología profesional de trabajo</a></li>
            <li><a href="#errores">9. Errores frecuentes</a></li>
            <li><a href="#practica-guiada">10. Práctica guiada</a></li>
            <li><a href="#actividad">11. Actividad para el alumnado</a></li>
            <li><a href="#resumen">12. Resumen final</a></li>
          </ol>
        </nav>

        <section id="vision-general" className="doc-section">
          <h2>1. Visión general: Elementor y bloques de WooCommerce</h2>
          <p>
            Antes de maquetar una tienda, el alumnado debe entender una idea de arquitectura. WordPress tiene un único tema activo,
            y sobre ese tema editamos páginas con un sistema principal. Cuando usamos Gutenberg, trabajamos con bloques. Cuando usamos
            Elementor, trabajamos con un constructor visual externo. WooCommerce, además, añade sus propios bloques para integrar el
            catálogo y el proceso de compra dentro del editor nativo.
          </p>
          <p>
            Esto significa que no todas las páginas deben resolverse con la misma herramienta. La elección depende de la finalidad de la
            página. Si la prioridad es el diseño libre, la composición visual y la parte comercial, Elementor puede ser muy útil. Si la
            prioridad es mostrar productos, filtrar, listar artículos, gestionar el carrito o facilitar el pago, los bloques de
            WooCommerce suelen ofrecer una base más robusta.
          </p>

          <TipBox title="Idea clave para memorizar">
            <p>
              En WooCommerce no gana la herramienta más vistosa, sino la que mejor respeta la lógica de la tienda. Elementor sirve muy
              bien para vender visualmente; los bloques de WooCommerce sirven muy bien para vender funcionalmente.
            </p>
          </TipBox>
        </section>

        <section id="criterio-paginas" className="doc-section">
          <h2>2. Qué páginas conviene hacer con cada sistema</h2>
          <p>
            Una tienda online no es una sola página. Tiene una home, listados, fichas de producto, páginas legales, carrito, checkout,
            cuenta de usuario y, en muchos casos, páginas promocionales o estacionales. Cada una cumple una función distinta. Por eso
            conviene decidir con criterio qué editor usar en cada caso.
          </p>

          <details className="dd dd-nested" open>
            <summary>Cuándo conviene usar Elementor</summary>
            <div className="dd-body">
              <p>
                Elementor es recomendable cuando necesitamos libertad de diseño, bloques decorativos, composiciones visuales complejas,
                llamadas a la acción muy marcadas y una narrativa de marca más fuerte que la estructura propia del catálogo. Es ideal
                para páginas de presentación y captación.
              </p>
              <ul>
                <li>Home de la tienda.</li>
                <li>Landing de campaña o temporada.</li>
                <li>Página “Sobre nosotros”.</li>
                <li>Página de servicios complementarios.</li>
                <li>Página de contacto o captación de leads.</li>
                <li>Landing de una colección concreta con storytelling.</li>
              </ul>
            </div>
          </details>

          <details className="dd dd-nested" open>
            <summary>Cuándo conviene usar bloques de WooCommerce</summary>
            <div className="dd-body">
              <p>
                Los bloques de WooCommerce convienen cuando la página necesita datos vivos del catálogo, interacción comercial directa,
                actualización automática del carrito o una estructura alineada con el proceso de compra. Aquí la prioridad no es decorar,
                sino vender con fiabilidad.
              </p>
              <ul>
                <li>Página Tienda o catálogo principal.</li>
                <li>Páginas de categorías o listados por colección.</li>
                <li>Carrito.</li>
                <li>Checkout.</li>
                <li>Bloques de productos destacados dentro de páginas informativas.</li>
                <li>Zonas de recomendación: nuevos, rebajados, más vendidos, relacionados.</li>
              </ul>
            </div>
          </details>

          <WarningBox title="Matiz importante">
            <p>
              Que una página esté hecha con Elementor no significa que no puedas mostrar productos. Puedes insertar productos con
              shortcodes o widgets. Pero si toda la página gira alrededor del comportamiento de la tienda, muchas veces es más estable y
              más lógico trabajar con bloques nativos de WooCommerce dentro de Gutenberg.
            </p>
          </WarningBox>
        </section>

        <section id="tabla-decision" className="doc-section">
          <h2>3. Esquema de decisión por tipo de página</h2>
          <div className="table-wrap" tabIndex="0">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Página</th>
                  <th>Herramienta recomendada</th>
                  <th>Motivo principal</th>
                  <th>Nivel de personalización</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Inicio / Home</th>
                  <td>Elementor</td>
                  <td>Permite storytelling, hero, banners, testimonios, secciones promocionales y composición libre.</td>
                  <td>Muy alto</td>
                </tr>
                <tr>
                  <th scope="row">Landing de campaña</th>
                  <td>Elementor</td>
                  <td>Es una página de conversión, no un listado puro de catálogo.</td>
                  <td>Muy alto</td>
                </tr>
                <tr>
                  <th scope="row">Tienda / Catálogo</th>
                  <td>Bloques de WooCommerce</td>
                  <td>Necesita mostrar productos, filtros, orden y estructura comercial estable.</td>
                  <td>Medio-alto</td>
                </tr>
                <tr>
                  <th scope="row">Categorías</th>
                  <td>Bloques de WooCommerce</td>
                  <td>Facilitan la navegación del catálogo y el acceso por colecciones.</td>
                  <td>Medio</td>
                </tr>
                <tr>
                  <th scope="row">Producto individual</th>
                  <td>Plantilla WooCommerce + bloques complementarios</td>
                  <td>Depende de la ficha, los atributos, las variaciones y el botón de compra.</td>
                  <td>Medio</td>
                </tr>
                <tr>
                  <th scope="row">Carrito</th>
                  <td>Bloque Cart de WooCommerce</td>
                  <td>Integra cálculo de importes, cupones, cantidades y actualización automática.</td>
                  <td>Medio</td>
                </tr>
                <tr>
                  <th scope="row">Checkout</th>
                  <td>Bloque Checkout de WooCommerce</td>
                  <td>Mejora el flujo de compra y centraliza los pasos esenciales del pedido.</td>
                  <td>Medio</td>
                </tr>
                <tr>
                  <th scope="row">Mi cuenta</th>
                  <td>WooCommerce</td>
                  <td>Es una página funcional que depende de endpoints y lógica interna.</td>
                  <td>Bajo-medio</td>
                </tr>
                <tr>
                  <th scope="row">Contacto / Sobre nosotros</th>
                  <td>Elementor</td>
                  <td>Prima la comunicación visual y la presentación de marca.</td>
                  <td>Alto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="Conclusión operativa">
            <p>
              En una tienda profesional es habitual combinar ambos sistemas: Elementor para las páginas comerciales y de marca, y bloques
              de WooCommerce para las páginas del proceso de compra y del catálogo.
            </p>
          </TipBox>
        </section>

        <section id="bloques-aportan" className="doc-section">
          <h2>4. Bloques de WooCommerce que más aportan a la maquetación</h2>
          <p>
            No todos los bloques tienen el mismo valor didáctico ni práctico. Algunos se usan poco o dependen mucho del tema. Otros, en
            cambio, son muy útiles porque permiten construir páginas reales con rapidez y con una lógica comercial clara. Estos son los
            que más interesa dominar al empezar.
          </p>

          <h3>4.1 Products by Category / Productos por categoría</h3>
          <p>
            Es uno de los bloques más útiles para crear secciones temáticas dentro de una página. Permite mostrar productos de una
            categoría concreta, por ejemplo “Camisetas”, “Tazas”, “Papelería” o “Accesorios”. Aporta orden visual y ayuda a trabajar la
            navegación por familias de producto.
          </p>
          <ul>
            <li>Muy útil en la home para destacar una colección.</li>
            <li>Permite dividir la tienda en bloques temáticos.</li>
            <li>Ayuda al alumnado a entender la importancia de clasificar bien el catálogo.</li>
          </ul>

          <h3>4.2 Featured Products / Productos destacados</h3>
          <p>
            Este bloque es ideal para seleccionar manualmente productos importantes: novedades, productos estrella, artículos con mejor
            margen o referencias que queremos empujar comercialmente. Introduce al alumnado en la idea de curar el escaparate digital.
          </p>

          <h3>4.3 Best Selling Products / Más vendidos</h3>
          <p>
            Tiene una gran fuerza comercial porque utiliza prueba social implícita. El cliente interpreta que esos productos ya funcionan
            bien y por tanto merecen atención. En términos de maquetación, añade credibilidad y jerarquía a la página.
          </p>

          <h3>4.4 On Sale Products / Productos rebajados</h3>
          <p>
            Muy útil para campañas promocionales, rebajas y páginas de ofertas. Puede combinarse con banners y llamadas a la acción para
            construir bloques de conversión muy potentes.
          </p>

          <h3>4.5 Newest Products / Productos nuevos</h3>
          <p>
            Funciona bien en home, en páginas de novedades y en proyectos donde el catálogo se actualiza con frecuencia. Aporta sensación
            de tienda viva y en movimiento.
          </p>

          <h3>4.6 Product Categories List / Lista de categorías</h3>
          <p>
            Este bloque aporta estructura. Es menos visual que otros, pero muy útil para orientar al usuario y ayudarle a llegar rápido a
            la parte del catálogo que le interesa. En una maquetación bien pensada, la orientación también es diseño.
          </p>

          <h3>4.7 All Products / Todos los productos</h3>
          <p>
            Es probablemente el bloque más importante para la página Tienda. Permite construir el catálogo principal con opciones de
            orden, paginación y filtros según la configuración disponible. Es la base para una tienda organizada dentro del editor de
            bloques.
          </p>

          <h3>4.8 Mini Cart / Cart / Checkout</h3>
          <p>
            Estos bloques no son decorativos, pero aportan muchísimo porque convierten páginas funcionales y poco atractivas en zonas de
            compra mejor integradas en el diseño general del sitio. Son fundamentales para dar coherencia a la experiencia del usuario.
          </p>
        </section>

        <section id="pagina-tienda" className="doc-section">
          <h2>5. Cómo maquetar la página Tienda con bloques de WooCommerce</h2>
          <p>
            La página Tienda es uno de los mejores ejemplos para usar bloques de WooCommerce. Su finalidad no es contar una historia, sino
            facilitar la exploración del catálogo. Por eso conviene que tenga una estructura clara, limpia y centrada en la búsqueda de
            productos.
          </p>

          <h3>5.1 Estructura recomendada</h3>
          <ol>
            <li>Cabecera con título y breve texto introductorio.</li>
            <li>Bloque de categorías o navegación por familias de producto.</li>
            <li>Bloque principal de catálogo con All Products.</li>
            <li>Opcionalmente, una franja de productos destacados o rebajados.</li>
            <li>Zona final con confianza: envíos, devoluciones, pago seguro o preguntas frecuentes.</li>
          </ol>

          <h3>5.2 Por qué esta estructura funciona</h3>
          <p>
            Porque responde a tres preguntas esenciales del usuario: qué vendo, cómo puedo explorar el catálogo y por qué me conviene
            comprar aquí. La maquetación de una tienda no consiste solo en “poner productos”, sino en facilitar el recorrido lógico del
            comprador.
          </p>

          <details className="dd dd-nested" open>
            <summary>Ejemplo de composición de la página Tienda</summary>
            <div className="dd-body">
              <ol>
                <li>Bloque de portada con un titular claro: “Descubre toda nuestra colección”.</li>
                <li>Texto corto con propuesta de valor.</li>
                <li>Lista de categorías para que el usuario no entre a ciegas.</li>
                <li>Bloque All Products como núcleo principal del catálogo.</li>
                <li>Bloque “Más vendidos” para reforzar la confianza.</li>
                <li>Bloque “Productos rebajados” si hay promoción activa.</li>
              </ol>
            </div>
          </details>

          <PracticeBox title="Aplicación profesional">
            <p>
              En lugar de llenar la página Tienda con banners, sliders y secciones decorativas, conviene centrar el diseño en la utilidad.
              Un catálogo limpio suele vender mejor que una página recargada.
            </p>
          </PracticeBox>
        </section>

        <section id="pagina-producto" className="doc-section">
          <h2>6. Aplicación en páginas de producto</h2>
          <p>
            La ficha de producto normalmente depende mucho del tema y de la plantilla de WooCommerce, pero los bloques siguen siendo muy
            útiles para enriquecer el contexto alrededor del producto. No siempre se trata de rehacer la ficha completa, sino de añadir
            bloques estratégicos en otras páginas o en zonas complementarias.
          </p>

          <ul>
            <li>Bloques de productos relacionados en páginas de contenido.</li>
            <li>Bloques de productos destacados al final de artículos del blog.</li>
            <li>Bloques de categorías para guiar al usuario a colecciones similares.</li>
            <li>Bloques de novedades para acompañar lanzamientos.</li>
          </ul>

          <p>
            También es importante que el alumnado entienda una limitación: la ficha individual de producto no siempre se diseña igual que
            una página normal. Muchas veces se personaliza mediante la plantilla del tema, ajustes de WooCommerce o constructores
            específicos. Por eso, en fase inicial, lo más rentable es aprender a dominar bien la tienda, el carrito y el checkout.
          </p>
        </section>

        <section id="pagina-carrito-checkout" className="doc-section">
          <h2>7. Aplicación en carrito y checkout</h2>
          <p>
            Carrito y checkout son dos páginas críticas. Aquí el objetivo no es impresionar visualmente, sino reducir fricción. Los bloques
            modernos de WooCommerce para Cart y Checkout ayudan precisamente a eso: ofrecen una estructura clara, más adaptable y mejor
            orientada al flujo de compra que las páginas clásicas basadas solo en shortcodes.
          </p>

          <h3>7.1 Qué aporta el bloque Cart</h3>
          <ul>
            <li>Vista más integrada del resumen de compra.</li>
            <li>Actualización de cantidades y subtotales con mejor experiencia.</li>
            <li>Mejor coherencia visual con el editor de bloques.</li>
            <li>Más margen para ordenar y presentar la información.</li>
          </ul>

          <h3>7.2 Qué aporta el bloque Checkout</h3>
          <ul>
            <li>Estructura más clara del formulario de compra.</li>
            <li>Resumen del pedido más visible.</li>
            <li>Proceso más moderno para el usuario.</li>
            <li>Mayor sensación de checkout profesional.</li>
          </ul>

          <WarningBox title="Criterio docente importante">
            <p>
              En carrito y checkout no debemos obsesionarnos con decorar. La regla es simple: cuanto menos ruido visual haya, más fácil es
              completar la compra. La maquetación aquí debe servir a la conversión.
            </p>
          </WarningBox>
        </section>

        <section id="metodologia" className="doc-section">
          <h2>8. Metodología profesional de trabajo</h2>
          <p>
            Para que el alumnado aplique esto con orden, conviene seguir un proceso fijo. De esa forma no improvisa página a página, sino
            que construye la tienda con criterio técnico y pedagógico.
          </p>

          <ol>
            <li>Definir las páginas de marca y las páginas de compra.</li>
            <li>Decidir qué editor usará cada una antes de empezar a maquetar.</li>
            <li>Organizar categorías, etiquetas y productos correctamente.</li>
            <li>Crear primero la página Tienda con bloques de WooCommerce.</li>
            <li>Configurar después carrito, checkout y mi cuenta.</li>
            <li>Usar Elementor solo en las páginas donde el diseño libre aporte un valor real.</li>
            <li>Revisar navegación, consistencia visual y experiencia de compra.</li>
          </ol>

          <TipBox title="Buenas prácticas">
            <ul>
              <li>Usa pocos bloques, pero bien elegidos.</li>
              <li>No dupliques información sin necesidad.</li>
              <li>Prioriza claridad, filtros y navegación antes que decoración.</li>
              <li>Comprueba siempre el recorrido completo: tienda → producto → carrito → checkout.</li>
            </ul>
          </TipBox>
        </section>

        <section id="errores" className="doc-section">
          <h2>9. Errores frecuentes</h2>
          <ul>
            <li>Intentar maquetar toda la tienda solo con Elementor sin pensar en la lógica de WooCommerce.</li>
            <li>Mezclar demasiados sistemas en una misma página.</li>
            <li>Llenar la tienda de banners y elementos decorativos que dificultan ver los productos.</li>
            <li>No trabajar bien las categorías y luego no poder aprovechar los bloques por colección.</li>
            <li>Usar páginas de carrito y checkout con exceso de distracciones.</li>
            <li>Confundir diseño atractivo con diseño útil.</li>
          </ul>

          <WarningBox title="Error conceptual muy común">
            <p>
              Muchos alumnos piensan: “si Elementor me deja diseñar más, entonces debo usarlo en todo”. En realidad, una tienda se vende
              mejor cuando las páginas clave respetan la lógica del proceso de compra. Más libertad visual no siempre significa mejor
              resultado comercial.
            </p>
          </WarningBox>
        </section>

        <section id="practica-guiada" className="doc-section">
          <h2>10. Práctica guiada</h2>
          <p>
            Vamos a plantear una práctica realista para una tienda de productos creativos. El objetivo es decidir qué páginas harás con
            Elementor y cuáles con bloques de WooCommerce, y después montar la página Tienda con una estructura clara.
          </p>

          <PracticeBox title="Práctica paso a paso">
            <ol>
              <li>Instala y activa WooCommerce.</li>
              <li>Crea al menos tres categorías de producto.</li>
              <li>Añade entre seis y nueve productos de ejemplo.</li>
              <li>Crea la página de inicio con un editor visual como Elementor.</li>
              <li>Crea una página Tienda con Gutenberg.</li>
              <li>Inserta una lista de categorías.</li>
              <li>Añade el bloque All Products como núcleo del catálogo.</li>
              <li>Debajo, inserta un bloque de productos destacados o más vendidos.</li>
              <li>Revisa la navegación completa hasta carrito y checkout.</li>
            </ol>
          </PracticeBox>

          <p>
            El aprendizaje aquí no está solo en “colocar bloques”, sino en justificar por qué cada página se ha diseñado con una
            herramienta concreta.
          </p>
        </section>

        <section id="actividad" className="doc-section">
          <h2>11. Actividad para el alumnado</h2>
          <ActivityBox title="Diseña la arquitectura de una tienda pequeña">
            <p>
              Imagina una tienda online que vende camisetas, libretas y tazas para amantes de la programación. Debes proponer la
              arquitectura de páginas del sitio indicando:
            </p>
            <ul>
              <li>Qué páginas crearías.</li>
              <li>Cuáles maquetarías con Elementor.</li>
              <li>Cuáles maquetarías con bloques de WooCommerce.</li>
              <li>Qué bloques de WooCommerce usarías en la página Tienda.</li>
              <li>Qué bloques usarías para mejorar el carrito o reforzar la home.</li>
            </ul>
            <p>
              Después, justifica cada decisión en términos de diseño, navegación y conversión.
            </p>
          </ActivityBox>
        </section>

        <section id="resumen" className="doc-section">
          <h2>12. Resumen final</h2>
          <div className="topic-summary">
            <div className="topic-summary__grid">
              <div className="topic-summary__card">
                <h3 className="topic-summary__title">Qué debes recordar</h3>
                <ul className="topic-summary__list">
                  <li><strong>Elementor</strong> conviene para páginas de marca, promoción y captación.</li>
                  <li><strong>Los bloques de WooCommerce</strong> convienen para catálogo, carrito y checkout.</li>
                  <li>La página <strong>Tienda</strong> es uno de los mejores lugares para usar bloques nativos.</li>
                  <li>Los bloques más útiles son <strong>All Products</strong>, categorías, destacados, más vendidos y rebajados.</li>
                  <li>En una tienda profesional la prioridad es la <strong>experiencia de compra</strong>, no solo la decoración.</li>
                </ul>
              </div>

              <div className="topic-summary__card">
                <h3 className="topic-summary__title">Regla práctica</h3>
                <ul className="topic-summary__list">
                  <li>Usa Elementor para atraer.</li>
                  <li>Usa WooCommerce para organizar el catálogo.</li>
                  <li>Usa Cart y Checkout para facilitar la compra.</li>
                  <li>Evita mezclar herramientas sin necesidad.</li>
                  <li>Diseña siempre pensando en el recorrido completo del cliente.</li>
                </ul>
              </div>
            </div>
          </div>

          <TipBox title="Idea final del tema">
            <p>
              Maquetar bien una tienda no consiste en elegir entre Elementor o WooCommerce como si fueran rivales. Consiste en entender
              qué papel cumple cada uno y usarlos con estrategia. Cuando el alumnado aprende eso, deja de construir páginas aisladas y
              empieza a diseñar tiendas coherentes.
            </p>
          </TipBox>
        </section>

        <section className="doc-hero" aria-labelledby="cierre-tema" style={{ marginTop: "1.25rem" }}>
          <h2 id="cierre-tema">Cierre</h2>
          <p className="doc-lead">
            En el siguiente paso puedes ampliar este tema con una práctica avanzada: crear una home con Elementor y una página Tienda con
            bloques de WooCommerce para comparar qué aporta cada enfoque en un proyecto real.
          </p>
          <div className="doc-next">
            <button className="btn btn-primary">Siguiente tema</button>
          </div>
        </section>
      </article>
    </TopicLayout>
  );
}
