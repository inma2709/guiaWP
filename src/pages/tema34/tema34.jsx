import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function TemaWooElementorShortcodes() {
  return (
    <TopicLayout
      title="WooCommerce en páginas creadas con Elementor: shortcodes, límites y personalización CSS"
      description="Aprende a integrar productos, categorías y listados de WooCommerce dentro de una landing page construida con Elementor. En este tema veremos por qué no se mezclan directamente los bloques de WooCommerce con Elementor, cómo generar shortcodes útiles y cómo aplicar CSS para personalizar el resultado."
    >
      <article className="doc">
      <header className="doc-hero">
  <p className="doc-kicker">Tema · WordPress · WooCommerce · Elementor</p>

  <h1>Usar shortcodes de WooCommerce dentro de una página hecha con Elementor</h1>

  <p className="doc-lead">
    En WordPress es importante entender primero cómo se construye una página.
    Cada sitio tiene <strong>un único tema activo</strong> que define el diseño general
    (cabecera, pie, estilos, estructura) y cada página se edita normalmente con
    <strong>un solo editor de contenido</strong>.
  </p>

  <p className="doc-lead">
    Por ejemplo, si una página se crea con <strong>Elementor</strong>, esa página se gestiona
    completamente dentro de Elementor. No es recomendable intentar mezclar en la
    misma página distintos constructores visuales porque cada uno genera su propio
    HTML, CSS y estructura interna. Cuando se mezclan editores, el resultado suele
    ser una página difícil de mantener y con posibles conflictos de estilos.
  </p>

  <p className="doc-lead">
    El único caso donde la convivencia es más natural es el editor nativo de WordPress,
    <strong>Gutenberg</strong>. Al formar parte del núcleo de WordPress, puede ampliarse con
    plugins como <strong>Spectra</strong> y convivir con otros sistemas. Aun así, incluso en ese
    caso, en proyectos profesionales se recomienda mantener una lógica clara y
    evitar combinar múltiples editores en la misma página.
  </p>

  <p className="doc-lead">
    Aquí aparece una situación muy común: la página principal está diseñada con
    Elementor, pero necesitamos mostrar contenido dinámico de la tienda
    WooCommerce (productos, categorías, ofertas o destacados).
  </p>

  <p className="doc-lead">
    Cuando utilizamos <strong>Elementor Free</strong>, muchos de los bloques de WooCommerce
    no están disponibles como widgets. En estos casos la solución técnica correcta
    es utilizar <strong>shortcodes</strong>. Los shortcodes son pequeños fragmentos de código que
    WordPress interpreta para mostrar contenido dinámico dentro de cualquier editor.
  </p>

  <p className="doc-lead">
    En este tema aprenderás qué son los shortcodes de WooCommerce, cómo generarlos,
    cómo modificarlos y cómo utilizarlos dentro de Elementor para integrar la tienda
    sin romper la arquitectura de la web.
  </p>
</header>

        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice del tema</h2>
          <ol>
            <li><a href="#objetivos">Objetivos del tema</a></li>
            <li><a href="#arquitectura">Arquitectura: Gutenberg, Elementor y WooCommerce</a></li>
            <li><a href="#por-que-no-se-mezclan">Por qué no se mezclan Elementor y los bloques de WooCommerce</a></li>
            <li><a href="#que-es-shortcode">Qué es un shortcode y por qué aquí es la solución</a></li>
            <li><a href="#como-insertarlo">Cómo insertar un shortcode dentro de Elementor</a></li>
            <li><a href="#generar-shortcodes">Cómo generar shortcodes útiles de WooCommerce</a></li>
            <li><a href="#parametros">Parámetros más importantes de los shortcodes</a></li>
            <li><a href="#ejemplos">Ejemplos prácticos para una landing page</a></li>
            <li><a href="#css">Cómo modificar el CSS del resultado</a></li>
            <li><a href="#flujo">Flujo profesional de trabajo</a></li>
            <li><a href="#errores">Errores frecuentes del equipo</a></li>
            <li><a href="#actividad">Actividad guiada</a></li>
            <li><a href="#resumen">Resumen final del tema</a></li>
          </ol>
        </nav>

        <section id="objetivos" className="doc-section">
          <h2>1. Objetivos del tema</h2>
          <p>Al finalizar este tema el equipo será capaz de:</p>
          <ul>
            <li>Entender la diferencia entre editor de bloques, constructor visual y plugin de tienda.</li>
            <li>Explicar por qué una página hecha con Elementor no usa los bloques de WooCommerce.</li>
            <li>Insertar shortcodes de WooCommerce en una landing page creada con Elementor.</li>
            <li>Modificar parámetros de los shortcodes para mostrar exactamente los productos deseados.</li>
            <li>Personalizar el diseño visual mediante CSS sin tocar el core del plugin.</li>
            <li>Aplicar una metodología profesional y mantenible en proyectos de tienda online.</li>
          </ul>

          <TipBox title="Idea clave">
            Cuando una página está construida con Elementor, WooCommerce no deja de funcionar. Lo que cambia es la forma
            de mostrar su contenido dentro de esa página. En lugar de usar bloques, usamos shortcodes.
          </TipBox>
        </section>

        <section id="arquitectura" className="doc-section">
          <h2>2. Arquitectura: Gutenberg, Elementor y WooCommerce</h2>
          <p>
            Antes de colocar productos en una landing page, conviene entender la arquitectura de WordPress. Muchos
            errores aparecen porque el desarrollador mezcla herramientas que cumplen funciones diferentes.
          </p>

          <div className="table-wrap" tabIndex="0" aria-label="Tabla comparativa de herramientas">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Herramienta</th>
                  <th>Tipo</th>
                  <th>Función principal</th>
                  <th>Qué aporta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Gutenberg</th>
                  <td>Editor nativo</td>
                  <td>Crear contenido por bloques</td>
                  <td>Párrafos, imágenes, columnas y bloques de plugins como WooCommerce</td>
                </tr>
                <tr>
                  <th scope="row">Elementor</th>
                  <td>Constructor visual</td>
                  <td>Diseñar páginas con su propio sistema</td>
                  <td>Widgets, secciones, columnas, contenedores y estilos visuales</td>
                </tr>
                <tr>
                  <th scope="row">WooCommerce</th>
                  <td>Plugin de tienda</td>
                  <td>Gestionar catálogo, carrito y checkout</td>
                  <td>Productos, categorías, stock, precio, bloques y shortcodes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            La clave es esta: <strong>WooCommerce puede mostrar información de varias formas</strong>. Puede hacerlo con
            plantillas propias, con bloques de Gutenberg o con shortcodes. Elementor, por su parte, no usa bloques de
            Gutenberg dentro de una página editada con su interfaz. Por eso necesitamos una vía intermedia.
          </p>
        </section>

        <section id="por-que-no-se-mezclan" className="doc-section">
          <h2>3. Por qué no se mezclan Elementor y los bloques de WooCommerce</h2>
          <p>
            Cuando una página está editada con Elementor, esa página deja de renderizar el contenido como una página de
            Gutenberg. Elementor sustituye el editor nativo por su propio sistema de widgets y maquetación.
          </p>

          <div className="callout warn">
            No es que WooCommerce sea incompatible con Elementor. Lo que ocurre es que los <strong>bloques de
            WooCommerce están pensados para Gutenberg</strong> y Elementor trabaja con otra lógica distinta.
          </div>

          <details className="dd" open>
            <summary>Explicación sencilla para el equipo</summary>
            <div className="dd-body">
              <p>
                Si una página está construida con Gutenberg, insertamos un bloque de WooCommerce. Si una página está
                construida con Elementor, insertamos un widget de Elementor. Como Elementor Free no ofrece todos los
                widgets de WooCommerce, usamos el widget <code>Shortcode</code> y dejamos que WooCommerce pinte el
                contenido.
              </p>
            </div>
          </details>

          <WarningBox title="Error muy frecuente">
            Intentar buscar en Elementor los mismos bloques de WooCommerce que sí aparecen en el editor nativo de
            WordPress. Son sistemas distintos. El desarrollador debe asumir que cada constructor tiene su propia forma de
            insertar contenido dinámico.
          </WarningBox>
        </section>

        <section id="que-es-shortcode" className="doc-section">
          <h2>4. Qué es un shortcode y por qué aquí es la solución</h2>
          <p>
            Un shortcode es una instrucción corta entre corchetes que WordPress interpreta en tiempo de ejecución.
            Cuando WordPress encuentra ese código, no lo muestra como texto: lo transforma en contenido real.
          </p>

          <pre><code>{`[gallery]
[contact-form]
[featured_products limit="4" columns="4"]`}</code></pre>

          <p>
            En WooCommerce, los shortcodes permiten pedir al sistema que muestre determinados productos, categorías o
            listados dentro de cualquier zona capaz de renderizar contenido de WordPress, incluido el widget de
            shortcode de Elementor.
          </p>

          <TipBox title="Ventaja didáctica">
            El shortcode separa dos capas: Elementor maqueta la página y WooCommerce se encarga de generar la salida de
            tienda. Esa separación evita depender de Elementor Pro para muchas tareas comunes.
          </TipBox>
        </section>

        <section id="como-insertarlo" className="doc-section">
          <h2>5. Cómo insertar un shortcode dentro de Elementor</h2>
          <p>El procedimiento que debe aprender el equipo es siempre el mismo:</p>
          <ol>
            <li>Entrar en la página y pulsar <strong>Editar con Elementor</strong>.</li>
            <li>Añadir un contenedor o una sección donde irá el contenido de tienda.</li>
            <li>Buscar el widget <strong>Shortcode</strong>.</li>
            <li>Arrastrarlo a la zona deseada.</li>
            <li>Pegar el shortcode de WooCommerce.</li>
            <li>Actualizar la página y revisar el resultado en frontend.</li>
          </ol>

          <pre><code>{`[featured_products limit="4" columns="4"]`}</code></pre>

          <p>
            Ese shortcode renderizará los productos que previamente hayamos marcado como destacados. Elementor solo
            actúa como contenedor visual; el listado real lo genera WooCommerce.
          </p>

          <PracticeBox title="Comprobación rápida">
            Si el shortcode no muestra nada, casi siempre ocurre una de estas tres cosas: no existen productos que
            cumplan la condición, la categoría o atributo está mal escrito, o el slug usado en el shortcode no coincide
            con el slug real de WooCommerce.
          </PracticeBox>
        </section>

        <section id="generar-shortcodes" className="doc-section">
          <h2>6. Cómo generar shortcodes útiles de WooCommerce</h2>
          <p>
            Aquí es donde hay que ampliar bien la explicación. Un shortcode de WooCommerce no se inventa al azar: se
            construye a partir de una <strong>base</strong> y de una serie de <strong>parámetros</strong> que modifican
            qué queremos mostrar y cómo queremos mostrarlo.
          </p>

          <details className="dd" open>
            <summary>Estructura general de un shortcode</summary>
            <div className="dd-body">
              <pre><code>{`[nombre_del_shortcode parametro1="valor" parametro2="valor"]`}</code></pre>
              <p>
                El nombre del shortcode identifica la función. Los parámetros afinan el resultado: cantidad de
                productos, número de columnas, categoría, orden, etc.
              </p>
            </div>
          </details>

          <h3>6.1. Primer nivel: elegir qué queremos mostrar</h3>
          <p>La primera decisión es el tipo de contenido que queremos pintar en la landing.</p>
          <ul>
            <li><strong>Categorías</strong> → para que el usuario explore la tienda.</li>
            <li><strong>Productos destacados</strong> → para promocionar manualmente ciertos artículos.</li>
            <li><strong>Productos recientes</strong> → para mostrar novedades.</li>
            <li><strong>Productos en oferta</strong> → para campañas y descuentos.</li>
            <li><strong>Productos de una categoría concreta</strong> → para secciones específicas.</li>
            <li><strong>Selección manual</strong> → para controlar exactamente qué productos aparecerán.</li>
          </ul>

          <h3>6.2. Segundo nivel: elegir la base del shortcode</h3>
          <p>
            Una vez decidido el tipo de contenido, elegimos la base correspondiente. Aquí conviene hacer una precisión muy
            importante para el equipo: <strong>algunos shortcodes son específicos</strong>, como
            <code>[featured_products]</code> o <code>[sale_products]</code>, pero el shortcode más versátil y más útil a
            nivel profesional es <code>[products]</code>.
          </p>

          <div className="table-wrap" tabIndex="0" aria-label="Bases de shortcodes de WooCommerce">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Objetivo</th>
                  <th>Base del shortcode</th>
                  <th>Uso didáctico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mostrar categorías</th>
                  <td><code>[product_categories]</code></td>
                  <td>Ideal para la entrada a la tienda</td>
                </tr>
                <tr>
                  <th scope="row">Mostrar destacados</th>
                  <td><code>[featured_products]</code></td>
                  <td>Promociones manuales</td>
                </tr>
                <tr>
                  <th scope="row">Mostrar recientes</th>
                  <td><code>[recent_products]</code></td>
                  <td>Novedades</td>
                </tr>
                <tr>
                  <th scope="row">Mostrar ofertas</th>
                  <td><code>[sale_products]</code></td>
                  <td>Campañas y rebajas</td>
                </tr>
                <tr>
                  <th scope="row">Mostrar por categoría</th>
                  <td><code>[products category="slug"]</code></td>
                  <td>Secciones específicas</td>
                </tr>
                <tr>
                  <th scope="row">Mostrar selección manual</th>
                  <td><code>[products ids="1,2,3"]</code></td>
                  <td>Control absoluto del escaparate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Esta tabla ayuda a empezar, pero metodológicamente interesa que el desarrollador comprenda que muchos de esos casos
            pueden resolverse con una sola base: <code>[products]</code>. WooCommerce considera este shortcode como uno
            de los más robustos, porque permite mostrar productos por ID, SKU, categorías, atributos, etiquetas,
            ordenación y paginación. De hecho, la documentación oficial explica que <code>[products]</code> puede cubrir
            casos que antes se resolvían con shortcodes más específicos.
          </p>

          <details className="dd dd-nested" open>
            <summary>¿Por qué conviene enseñar bien el shortcode [products]?</summary>
            <div className="dd-body">
              <p>
                Porque es el shortcode más flexible y el que mejor ayuda a entender la lógica real del sistema. En lugar
                de memorizar muchos códigos sueltos, el desarrollador aprende una base general y después la adapta con
                parámetros.
              </p>
              <p>
                Por ejemplo, estas tres órdenes son variaciones de la misma base:
              </p>
              <pre><code>{`[products category="camisetas"]
[products ids="12,18,35"]
[products limit="8" columns="4" orderby="date" order="DESC"]`}</code></pre>
            </div>
          </details>

          <h4>6.2.1. El shortcode [products] como base general</h4>
          <p>
            Cuando usamos <code>[products]</code>, lo que hacemos es pedir a WooCommerce que construya una consulta de
            productos. Después, mediante atributos, le indicamos qué subconjunto queremos mostrar y cómo queremos
            ordenarlo.
          </p>

          <div className="table-wrap" tabIndex="0" aria-label="Usos frecuentes del shortcode products">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Necesidad</th>
                  <th>Shortcode</th>
                  <th>Qué hace</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Productos de una categoría</th>
                  <td><code>[products category="camisetas"]</code></td>
                  <td>Muestra solo los productos cuyo slug de categoría sea camisetas</td>
                </tr>
                <tr>
                  <th scope="row">Productos concretos</th>
                  <td><code>[products ids="12,18,35"]</code></td>
                  <td>Muestra únicamente los productos cuyos IDs coincidan</td>
                </tr>
                <tr>
                  <th scope="row">Productos ordenados por fecha</th>
                  <td><code>[products orderby="date" order="DESC"]</code></td>
                  <td>Muestra primero los más recientes</td>
                </tr>
                <tr>
                  <th scope="row">Productos con paginación</th>
                  <td><code>[products limit="8" paginate="true"]</code></td>
                  <td>Muestra 8 por página y añade paginación</td>
                </tr>
                <tr>
                  <th scope="row">Productos por atributo</th>
                  <td><code>[products attribute="pa_color" terms="negro"]</code></td>
                  <td>Filtra por un atributo de producto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Esta forma de enseñar tiene una ventaja clara: el desarrollador deja de pensar en shortcodes como comandos cerrados
            y empieza a verlos como una estructura configurable. Esa competencia le servirá también cuando trabaje con
            otros plugins de WordPress.
          </p>

          <TipBox title="Regla muy útil para clase">
            Si la necesidad es simple, puedes usar un shortcode específico como <code>[sale_products]</code>. Si la
            necesidad exige más control, conviene pasar a <code>[products]</code> y trabajar con parámetros.
          </TipBox>

          <details className="dd dd-nested" open>
            <summary>Documentación oficial recomendada</summary>
            <div className="dd-body">
              <p>
                Para consultar la lista general de shortcodes y la documentación detallada del shortcode
                <code>[products]</code>, utiliza la documentación oficial de WooCommerce. En el manual podemos remitir al
                equipo a la guía general de shortcodes y a la página específica del shortcode <code>[products]</code>,
                porque ahí aparecen los atributos disponibles y ejemplos reales de uso.
              </p>
            </div>
          </details>
          <WarningBox title="Explora más shortcodes de WooCommerce">
  <p>
    Los shortcodes que hemos visto en este tema son solo una parte de lo que ofrece WooCommerce.
    Si quieres profundizar y descubrir más posibilidades, te recomendamos consultar estos
    recursos. Cada uno tiene un enfoque diferente y complementario.
  </p>

  <ul>
    <li>
      <strong>Documentación oficial de WooCommerce</strong><br/>
      👉 <a 
        href="https://woocommerce.com/document/woocommerce-shortcodes/#woocommerce-shortcodes" 
        target="_blank" 
        rel="noopener noreferrer">
        Ver documentación oficial
      </a><br/>
      Es la fuente más fiable y completa. Aquí encontrarás todos los shortcodes disponibles,
      sus atributos, parámetros y ejemplos oficiales de uso.
    </li>

    <li>
      <strong>Tutorial de Hostinger</strong><br/>
      👉 <a 
        href="https://www.hostinger.com/es/tutoriales/shortcodes-woocommerce" 
        target="_blank" 
        rel="noopener noreferrer">
        Leer tutorial de Hostinger
      </a><br/>
      Explica de forma muy clara qué son los shortcodes de WooCommerce y muestra muchos ejemplos
      prácticos que puedes probar directamente en tu tienda.
    </li>

    <li>
      <strong>Tutorial de Joan Boluda</strong><br/>
      👉 <a 
        href="https://boluda.com/tutorial/shortcodes-para-woocommerce/" 
        target="_blank" 
        rel="noopener noreferrer">
        Ver tutorial de Joan Boluda
      </a><br/>
      Un enfoque muy didáctico y orientado a proyectos reales. Ideal para entender cómo utilizar
      los shortcodes en páginas, landings o estrategias de marketing dentro de una tienda online.
    </li>
  </ul>

  <p>
    <strong>Consejo:</strong> no intentes memorizar todos los shortcodes. Aprende a localizar la
    documentación y a construirlos combinando <em>base + parámetros</em>. Esa es la habilidad que
    usan los desarrolladores profesionales de WordPress.
  </p>
</WarningBox>

         

          <h3>6.3. Tercer nivel: construir el shortcode con parámetros</h3>
          <p>
            Una vez elegida la base, añadimos parámetros. Esto es exactamente lo que más debe practicar el equipo,
            porque aquí se convierte una orden genérica en una orden útil.
          </p>

          <details className="dd dd-nested" open>
            <summary>Ejemplo: productos destacados</summary>
            <div className="dd-body">
              <pre><code>{`[featured_products limit="4" columns="4"]`}</code></pre>
              <p>
                La base es <code>featured_products</code>. Añadimos <code>limit</code> para indicar cuántos productos se
                verán y <code>columns</code> para definir el número de columnas del grid.
              </p>
            </div>
          </details>

          <details className="dd dd-nested" open>
            <summary>Ejemplo: categoría concreta</summary>
            <div className="dd-body">
              <pre><code>{`[products category="sudaderas" limit="8" columns="4"]`}</code></pre>
              <p>
                Aquí usamos el shortcode más flexible, <code>products</code>, y le indicamos el slug de la categoría.
                Después añadimos la cantidad y las columnas.
              </p>
            </div>
          </details>

          <details className="dd dd-nested" open>
            <summary>Ejemplo: selección manual por IDs</summary>
            <div className="dd-body">
              <pre><code>{`[products ids="34,51,78" columns="3"]`}</code></pre>
              <p>
                Este caso es muy útil en landings promocionales, porque no dependemos de categoría ni de destacado:
                elegimos exactamente los productos por su identificador interno.
              </p>
            </div>
          </details>

         
        </section>

        <section id="parametros" className="doc-section">
          <h2>7. Parámetros más importantes de los shortcodes</h2>
          <p>
            Los parámetros son la parte verdaderamente operativa del shortcode. Son los que convierten una orden genérica
            en una orden específica. Estos son los más útiles para una landing page y conviene memorizarlos.
          </p>

          <div className="table-wrap" tabIndex="0" aria-label="Parámetros frecuentes en WooCommerce">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Qué controla</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><code>limit</code></th>
                  <td>Número de productos a mostrar</td>
                  <td><code>limit="4"</code></td>
                </tr>
                <tr>
                  <th scope="row"><code>columns</code></th>
                  <td>Número de columnas del listado</td>
                  <td><code>columns="4"</code></td>
                </tr>
                <tr>
                  <th scope="row"><code>category</code></th>
                  <td>Slug de categoría de producto</td>
                  <td><code>category="camisetas"</code></td>
                </tr>
                <tr>
                  <th scope="row"><code>ids</code></th>
                  <td>Productos concretos por ID</td>
                  <td><code>ids="12,16,21"</code></td>
                </tr>
                <tr>
                  <th scope="row"><code>orderby</code></th>
                  <td>Criterio de ordenación</td>
                  <td><code>orderby="date"</code></td>
                </tr>
                <tr>
                  <th scope="row"><code>order</code></th>
                  <td>Orden ascendente o descendente</td>
                  <td><code>order="DESC"</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <pre><code>{`[products category="camisetas" limit="6" columns="3" orderby="date" order="DESC"]`}</code></pre>

          <p>
            Este ejemplo pide a WooCommerce que muestre seis productos de la categoría <code>camisetas</code>, en tres
            columnas y ordenados de más nuevo a más antiguo.
          </p>

          <TipBox title="Consejo metodológico">
            Haz que el equipo practique siempre sobre el slug real de la categoría, no sobre el nombre visible. En
            WordPress el slug y el nombre no tienen por qué coincidir exactamente.
          </TipBox>
        
        </section>

        <section id="ejemplos" className="doc-section">
          <h2>8. Ejemplos prácticos para una landing page</h2>
          <p>
            Imaginemos una landing page hecha con Elementor para una tienda de ropa tecnológica. Queremos que mantenga la
            parte visual de Elementor, pero que incluya contenido real de WooCommerce.
          </p>

          <h3>Estructura de la landing</h3>
          <ol>
            <li>Hero principal</li>
            <li>Categorías destacadas</li>
            <li>Productos recomendados</li>
            <li>Productos en oferta</li>
            <li>Llamada final a la acción</li>
          </ol>

          <h3>Shortcodes correspondientes</h3>
          <pre><code>{`[product_categories columns="3"]

[featured_products limit="4" columns="4"]

[sale_products limit="4" columns="4"]`}</code></pre>

          <p>
            Esta es una arquitectura muy común: Elementor se ocupa de la cabecera, los fondos, los bloques de texto y
            las llamadas a la acción; WooCommerce se ocupa de los listados de producto mediante shortcodes.
          </p>

          <PracticeBox title="Escenario profesional">
            Si una tienda cambia el orden de prioridad de sus productos, bastará con modificar el shortcode o los
            productos marcados como destacados. No es necesario rehacer toda la landing en Elementor.
          </PracticeBox>
        </section>

        <section id="css" className="doc-section">
  <h2>9. Cómo modificar el CSS del resultado del shortcode</h2>

  <p>
    El shortcode genera HTML de WooCommerce. Eso significa que, una vez impreso en pantalla,
    podemos inspeccionar su estructura y personalizar su aspecto con CSS. Aquí hay una idea
    clave que el alumno debe comprender desde el principio: <strong>no modificamos el shortcode en sí,
    sino el HTML que WooCommerce genera cuando el shortcode se renderiza</strong>.
  </p>

  <p>
    En proyectos profesionales no conviene meter este CSS directamente en el panel del builder
    ni mezclarlo con estilos generales del tema. Lo correcto es <strong>crear un archivo CSS independiente</strong>,
    guardarlo dentro del tema hijo y encolarlo desde <code>functions.php</code>. De este modo mantenemos
    el código ordenado, reutilizable y fácil de mantener.
  </p>

  <details className="dd" open>
    <summary>Paso 1: envolver el shortcode en un contenedor con clase propia</summary>
    <div className="dd-body">
      <p>
        Como Elementor Free no siempre permite añadir clases cómodamente al contenedor,
        una solución muy práctica es envolver el shortcode en un <code>div</code> manual
        con una clase propia. Esa clase será nuestra “zona de trabajo” para aplicar estilos
        sin afectar al resto de la tienda.
      </p>

      <p>
        Por ejemplo, si queremos mostrar productos destacados, podemos escribir el shortcode así:
      </p>

      <pre><code>{`<div class="producto-tienda">
  [products featured="true" limit="4" columns="4"]
</div>`}</code></pre>

      <p>
        La clase <code>producto-tienda</code> actúa como contenedor padre. Gracias a ella,
        todo el CSS irá dirigido únicamente a este bloque.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso 2: inspeccionar la estructura HTML que genera WooCommerce</summary>
    <div className="dd-body">
      <p>
        Una vez renderizado el shortcode, WooCommerce genera un listado con clases propias.
        Normalmente veremos elementos como <code>.products</code>, <code>.product</code>,
        <code>.woocommerce-loop-product__title</code>, <code>.price</code> y <code>.button</code>.
      </p>

      <pre><code>{`<div class="producto-tienda">
  <div class="woocommerce columns-4">
    <ul class="products columns-4">
      <li class="product">
        <a class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
          <img />
          <h2 class="woocommerce-loop-product__title">Nombre del producto</h2>
          <span class="price">29,90 €</span>
        </a>
        <a class="button">Añadir al carrito</a>
      </li>
    </ul>
  </div>
</div>`}</code></pre>

      <p>
        Este paso es fundamental porque el CSS no se inventa: <strong>se escribe a partir
        de la estructura real que vemos en el navegador</strong>. Por eso el inspector
        del navegador forma parte del trabajo habitual del desarrollador.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso 3: crear un archivo CSS independiente dentro del tema hijo</summary>
    <div className="dd-body">
      <p>
        En lugar de escribir todo en <code>style.css</code>, vamos a crear un archivo específico
        para esta portada o bloque destacado. Esto mejora la organización del proyecto.
      </p>

      <p>La estructura recomendada sería la siguiente:</p>

      <pre><code>{`generatepress-child/
├── assets/
│   └── css/
│       └── productoportada.css
├── functions.php
├── style.css
└── screenshot.png`}</code></pre>

      <p>
        En este caso el archivo que vamos a crear será:
      </p>

      <pre><code>{`/wp-content/themes/generatepress-child/assets/css/productoportada.css`}</code></pre>

      <p>
        Este enfoque es mucho más profesional porque separa estilos generales del tema
        y estilos concretos de una sección determinada.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso 4: encolar el archivo CSS en functions.php</summary>
    <div className="dd-body">
      <p>
        Una vez creado el archivo, debemos cargarlo correctamente desde <code>functions.php</code>.
        No se trata de copiar estilos al azar, sino de decirle a WordPress que cargue ese fichero
        cuando renderice la web.
      </p>

      <pre><code>{`function mi_tienda_styles() {
    wp_enqueue_style(
        'productoportada-css',
        get_stylesheet_directory_uri() . '/assets/css/productoportada.css',
        array('generate-style'),
        '1.0',
        'all'
    );
}
add_action('wp_enqueue_scripts', 'mi_tienda_styles');`}</code></pre>

      <p>
        Observa varios detalles importantes:
      </p>

      <ul>
        <li>
          <code>get_stylesheet_directory_uri()</code> apunta al <strong>tema hijo</strong>, no al tema padre.
        </li>
        <li>
          El archivo se carga desde <code>assets/css/productoportada.css</code>.
        </li>
        <li>
          La dependencia <code>array('generate-style')</code> hace que se cargue después del estilo principal
          del tema, lo que ayuda a sobrescribir solo cuando sea necesario.
        </li>
        <li>
          No estamos editando archivos internos de GeneratePress ni de WooCommerce.
        </li>
      </ul>

      <p>
        Este punto es esencial: <strong>no “pisamos” el CSS de GeneratePress ni el de WooCommerce
        de forma global</strong>. Lo que hacemos es añadir una capa de estilos propia, controlada y
        limitada al contenedor <code>.producto-tienda</code>.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso 5: escribir un CSS aislado para el shortcode de productos destacados</summary>
    <div className="dd-body">
      <p>
        Ahora sí podemos escribir el CSS de nuestro bloque. La clave está en comenzar siempre
        por la clase contenedora <code>.producto-tienda</code>. Así evitamos que los cambios afecten
        a otros listados de productos de la tienda.
      </p>

      <pre><code>{`/* =========================================
   PRODUCTOS DESTACADOS - WOOCOOMMERCE
   4 tarjetas en una fila real
========================================= */

.producto-tienda{
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 2rem 0;
}

.producto-tienda .woocommerce{
  width: 100%;
  max-width: 100%;
}

/* CONTENEDOR DEL LOOP */
.producto-tienda .woocommerce ul.products,
.producto-tienda ul.products{
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 24px !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  clear: none !important;
}

/* RESET MUY FUERTE DEL PRODUCTO */
.producto-tienda .woocommerce ul.products li.product,
.producto-tienda ul.products li.product,
.producto-tienda .woocommerce-page ul.products li.product,
.producto-tienda ul.products.columns-4 li.product,
.producto-tienda ul.products[class*="columns-"] li.product{
  float: none !important;
  clear: none !important;
  width: auto !important;
  max-width: 100% !important;
  min-width: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  left: auto !important;
  right: auto !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-self: stretch !important;
  background: #ffffff !important;
  border: 1px solid rgba(15, 23, 42, 0.08) !important;
  border-radius: 22px !important;
  overflow: hidden !important;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07) !important;
  transition: transform .25s ease, box-shadow .25s ease !important;
}

/* ANULAR FIRST / LAST / NTH-CHILD HEREDADOS */
.producto-tienda .woocommerce ul.products li.first,
.producto-tienda .woocommerce ul.products li.last,
.producto-tienda ul.products li.first,
.producto-tienda ul.products li.last,
.producto-tienda .woocommerce ul.products li.product:nth-child(n),
.producto-tienda ul.products li.product:nth-child(n){
  clear: none !important;
  margin-right: 0 !important;
}

/* pseudo-elementos heredados del loop */
.producto-tienda .woocommerce ul.products::before,
.producto-tienda .woocommerce ul.products::after,
.producto-tienda ul.products::before,
.producto-tienda ul.products::after{
  display: none !important;
  content: none !important;
}

/* HOVER */
.producto-tienda .woocommerce ul.products li.product:hover,
.producto-tienda ul.products li.product:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12) !important;
}

/* ENLACE PRINCIPAL */
.producto-tienda .woocommerce ul.products li.product a.woocommerce-LoopProduct-link,
.producto-tienda ul.products li.product a.woocommerce-LoopProduct-link{
  display: block !important;
  text-decoration: none !important;
  color: inherit !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* IMAGEN */
.producto-tienda .woocommerce ul.products li.product img,
.producto-tienda ul.products li.product img{
  display: block !important;
  width: 100% !important;
  height: 260px !important;
  object-fit: cover !important;
  object-position: center center !important;
  margin: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transform: none !important;
}

/* TITULO */
.producto-tienda .woocommerce ul.products li.product .woocommerce-loop-product__title,
.producto-tienda ul.products li.product .woocommerce-loop-product__title{
  margin: 0 !important;
  padding: 14px 18px 8px !important;
  font-size: 1.05rem !important;
  line-height: 1.35 !important;
  font-weight: 700 !important;
  color: #0f172a !important;
  min-height: 3.8em !important;
  word-break: break-word !important;
}

/* PRECIO */
.producto-tienda .price{
  display: block !important;
  margin: 0 18px 16px !important;
  padding: 0 !important;
  color: #1d4ed8 !important;
  font-size: 1rem !important;
  font-weight: 800 !important;
  line-height: 1.3 !important;
}

/* BOTÓN */
.producto-tienda .woocommerce ul.products li.product a.button,
.producto-tienda ul.products li.product a.button{
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  align-self: center !important;
  width: calc(100% - 36px) !important;
  min-height: 54px !important;
  margin: auto 18px 18px !important;
  padding: 0.95rem 1.1rem !important;
  background: #1e40af !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 999px !important;
  text-align: center !important;
  text-decoration: none !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  white-space: normal !important;
  box-shadow: none !important;
  transition: background .25s ease, transform .25s ease !important;
}

.producto-tienda .woocommerce ul.products li.product a.button:hover,
.producto-tienda ul.products li.product a.button:hover{
  background: #163799 !important;
  color: #ffffff !important;
  transform: translateY(-1px);
}

/* BADGE OFERTA */
.producto-tienda .onsale{
  top: 12px !important;
  left: 12px !important;
  right: auto !important;
  min-width: auto !important;
  min-height: auto !important;
  padding: .45rem .75rem !important;
  border-radius: 999px !important;
  background: #dc2626 !important;
  color: #ffffff !important;
  font-size: .8rem !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  z-index: 3 !important;
}

/* TABLET */
@media (max-width: 1024px){
  .producto-tienda .woocommerce ul.products,
  .producto-tienda ul.products{
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

/* MÓVIL */
@media (max-width: 640px){
  .producto-tienda .woocommerce ul.products,
  .producto-tienda ul.products{
    grid-template-columns: 1fr !important;
  }

  .producto-tienda .woocommerce-loop-product__title,
  .producto-tienda ul.products .woocommerce-loop-product__title{
    min-height: auto !important;
  }
}`}</code></pre>

      <p>
        Fíjate en que todos los selectores comienzan por <code>.producto-tienda</code>.
        Esa es la razón por la que este CSS no rompe la tienda completa ni modifica
        otros productos mostrados por WooCommerce en otras zonas de la web.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso 6: comprobar que el archivo realmente se está cargando</summary>
    <div className="dd-body">
      <p>
        Después de encolar el archivo, debemos verificar que WordPress lo está cargando.
        Para ello podemos abrir la web, pulsar <strong>F12</strong> y revisar el panel
        de red o el código del <code>&lt;head&gt;</code>.
      </p>

      <p>Deberíamos ver una ruta similar a esta:</p>

      <pre><code>{`/wp-content/themes/generatepress-child/assets/css/productoportada.css`}</code></pre>

      <p>
        Una comprobación rápida consiste en añadir temporalmente una regla muy visible:
      </p>

      <pre><code>{`.producto-tienda{
  outline:4px solid red;
}`}</code></pre>

      <p>
        Si el borde aparece en pantalla, significa que el archivo está bien encolado
        y que el navegador lo está leyendo correctamente.
      </p>
    </div>
  </details>

  <details className="dd" open>
    <summary>Resumen técnico del proceso</summary>
    <div className="dd-body">
      <ol>
        <li>Insertamos el shortcode envuelto en un <code>div</code> con clase propia.</li>
        <li>Inspeccionamos el HTML que WooCommerce genera.</li>
        <li>Creamos un archivo CSS independiente en <code>assets/css</code>.</li>
        <li>Encolamos ese archivo desde <code>functions.php</code>.</li>
        <li>Escribimos selectores acotados con la clase contenedora.</li>
        <li>Comprobamos en el navegador que el CSS se está cargando y aplicando.</li>
      </ol>

      <p>
        Este es el flujo correcto en un proyecto profesional con tema hijo:
        <strong>shortcode → HTML generado por WooCommerce → archivo CSS propio → encolado en functions.php</strong>.
      </p>
    </div>
  </details>

  <WarningBox title="Buena práctica profesional">
    No modifiques archivos internos de GeneratePress, WooCommerce ni Elementor para cambiar
    estilos. La vía correcta es crear una capa propia de CSS en el tema hijo, en un archivo
    independiente, y acotar los selectores con una clase contenedora para que el cambio no
    afecte al resto del proyecto.
  </WarningBox>
</section>
        <section id="flujo" className="doc-section">
          <h2>10. Flujo profesional de trabajo</h2>
          <p>Este es el flujo ordenado que conviene enseñar y repetir en clase:</p>
          <ol>
            <li>Crear los productos y categorías en WooCommerce.</li>
            <li>Decidir qué queremos mostrar en la landing.</li>
            <li>Construir el shortcode con la base y parámetros correctos.</li>
            <li>Insertarlo en Elementor mediante el widget <code>Shortcode</code>.</li>
            <li>Comprobar la salida HTML en frontend.</li>
            <li>Aplicar una clase contenedora propia.</li>
            <li>Personalizar el diseño con CSS.</li>
            <li>Revisar responsive y consistencia visual.</li>
          </ol>

          <TipBox title="Secuencia didáctica correcta">
            Primero se consigue que el contenido salga. Después se mejora el diseño. Muchos desarrolladors intentan maquetar
            antes de comprobar que el shortcode devuelve los productos correctos.
          </TipBox>
        </section>

        <section id="errores" className="doc-section">
          <h2>11. Errores frecuentes del equipo</h2>
          <ul>
            <li>Buscar bloques de WooCommerce dentro de Elementor como si fueran widgets nativos.</li>
            <li>Escribir el nombre visible de la categoría en lugar del slug real.</li>
            <li>Usar productos destacados sin haber marcado previamente la estrella de destacado.</li>
            <li>No limitar el CSS a una clase contenedora y alterar toda la tienda por accidente.</li>
            <li>Pensar que el shortcode se diseña solo desde Elementor, sin tocar CSS.</li>
            <li>Confundir una categoría llamada “destacados” con el estado interno de producto destacado de WooCommerce.</li>
          </ul>

          <WarningBox title="Confusión clásica">
            La categoría “Destacados” no sustituye al estado de producto destacado. Una organiza; la otra promociona.
          </WarningBox>
        </section>

        <section class="doc-section" id="optimizacion-imagenes">

<h2>12.Optimización de imágenes en WordPress y WooCommerce</h2>

<p>
Las imágenes suelen ser el recurso más pesado de una página web. En una tienda online,
donde cada producto incluye varias fotografías, una mala optimización puede provocar
tiempos de carga lentos, mala experiencia de usuario y peor posicionamiento en buscadores.
Optimizar imágenes significa reducir su tamaño y peso sin perder calidad visual.
</p>

<details open>
<summary>¿Por qué es importante optimizar imágenes?</summary>

<p>
Cuando un navegador carga una página web descarga todos los recursos necesarios
para mostrarla: HTML, CSS, JavaScript e imágenes. Si las imágenes son demasiado
grandes o pesadas, el tiempo de carga aumenta considerablemente.
</p>

<ul>
<li><strong>Mejora el rendimiento</strong>: páginas más rápidas.</li>
<li><strong>Mejora el SEO</strong>: Google penaliza páginas lentas.</li>
<li><strong>Reduce consumo de servidor</strong>.</li>
<li><strong>Mejora la experiencia del usuario</strong>.</li>
<li><strong>Optimiza métricas Core Web Vitals</strong> (LCP, CLS, FID).</li>
</ul>

<p>
En WooCommerce este aspecto es especialmente crítico porque una tienda puede
contener decenas o cientos de imágenes de productos.
</p>

</details>

<details>
<summary>Flujo profesional para optimizar imágenes</summary>

<p>
La optimización no debería comenzar en WordPress, sino antes de subir la imagen.
Los diseñadores y desarrolladores suelen seguir este flujo de trabajo:
</p>

<ol>
<li>Exportar la imagen desde el programa de diseño (Figma, Photoshop, Illustrator).</li>
<li>Reducir el tamaño al necesario para la web.</li>
<li>Comprimir la imagen con herramientas externas.</li>
<li>Subir la imagen optimizada a WordPress.</li>
<li>Aplicar optimización automática mediante plugin.</li>
</ol>

<p>
Este proceso evita subir imágenes excesivamente pesadas al servidor.
</p>

</details>

<details>
<summary>Tamaño recomendado de imágenes en WooCommerce</summary>

<p>
Las dimensiones correctas dependen del diseño de la tienda. Sin embargo, en la mayoría
de proyectos WooCommerce se utilizan las siguientes referencias:
</p>

<ul>
<li><strong>Imagen principal de producto</strong>: 800px – 1200px</li>
<li><strong>Imagen de catálogo</strong>: 600px – 800px</li>
<li><strong>Miniaturas</strong>: 300px – 400px</li>
</ul>

<p>
El peso ideal de cada imagen debería mantenerse aproximadamente en:
</p>

<ul>
<li>Imágenes grandes: <strong>menos de 200 KB</strong></li>
<li>Miniaturas: <strong>menos de 80 KB</strong></li>
</ul>

</details>

<details>
<summary>Formatos de imagen recomendados</summary>

<p>
Elegir el formato correcto es fundamental para optimizar el rendimiento.
</p>

<ul>
<li><strong>JPEG</strong>: ideal para fotografías.</li>
<li><strong>PNG</strong>: adecuado para gráficos con transparencias.</li>
<li><strong>WebP</strong>: formato moderno que reduce peso hasta un 30-40%.</li>
<li><strong>AVIF</strong>: formato aún más eficiente (soporte creciente).</li>
</ul>

<p>
Actualmente la mayoría de tiendas modernas utilizan <strong>WebP</strong> como formato principal.
</p>

</details>

<details>
<summary>Herramientas externas para comprimir imágenes</summary>

<p>
Antes de subir imágenes a WordPress, es recomendable utilizar herramientas de compresión:
</p>

<ul>
<li><strong>Squoosh</strong> (Google): permite ajustar calidad y formatos.</li>
<li><strong>TinyPNG / TinyJPG</strong>: compresión rápida y sencilla.</li>
<li><strong>ImageOptim</strong>: aplicación de escritorio para Mac.</li>
</ul>

<p>
Estas herramientas permiten reducir el peso de la imagen sin pérdida visible de calidad.
</p>

</details>

<details>
<summary>Plugins de optimización de imágenes</summary>

<p>
Los plugins permiten automatizar la compresión y conversión de imágenes dentro de WordPress.
</p>

<ul>
<li><strong>Optimole</strong>: optimización automática con CDN de imágenes.</li>
<li><strong>ShortPixel</strong>: compresión avanzada y conversión a WebP.</li>
<li><strong>Smush</strong>: optimización sencilla y muy popular.</li>
</ul>

<p>
Estos plugins pueden realizar tareas como:
</p>

<ul>
<li>compresión automática al subir imágenes</li>
<li>generación de versiones WebP</li>
<li>lazy loading (carga diferida)</li>
<li>redimensionado automático</li>
</ul>

</details>

<details>
<summary>Buenas prácticas en tiendas WooCommerce</summary>

<ul>
<li>Usar siempre imágenes del mismo tamaño.</li>
<li>Evitar subir imágenes directamente desde la cámara.</li>
<li>Utilizar formatos modernos como WebP.</li>
<li>Optimizar las imágenes antes de subirlas.</li>
<li>Comprobar el rendimiento con herramientas como PageSpeed Insights.</li>
</ul>

<p>
Una tienda bien optimizada puede mejorar significativamente su rendimiento y
su posicionamiento en buscadores.
</p>

</details>

<details>
<summary>Actividad práctica</summary>

<p><strong>Objetivo:</strong> aprender a optimizar imágenes antes de subirlas a WordPress.</p>

<ol>
<li>Descarga una imagen grande (por ejemplo 3000px).</li>
<li>Reduce su tamaño a 1200px de ancho.</li>
<li>Comprímela utilizando Squoosh o TinyPNG.</li>
<li>Comprueba el peso antes y después de la compresión.</li>
<li>Sube la imagen optimizada a WordPress.</li>
</ol>

<p>
Analiza cuánto se ha reducido el tamaño del archivo y cómo afecta al tiempo
de carga de la página.
</p>

</details>

</section>

        <section id="actividad" className="doc-section">
          <h2>13. Actividad guiada</h2>
          <ActivityBox title="Práctica del tema">
            <p>Vas a transformar una landing page hecha con Elementor en una portada comercial funcional.</p>
            <ol>
              <li>Crea tres categorías de producto en WooCommerce.</li>
              <li>Marca cuatro productos como destacados.</li>
              <li>Asigna oferta a dos productos.</li>
              <li>Inserta en Elementor tres widgets shortcode.</li>
              <li>Usa los shortcodes adecuados para categorías, destacados y ofertas.</li>
              <li>Añade una clase de contenedor propia a cada bloque.</li>
              <li>Personaliza las tarjetas con CSS para que tengan fondo, borde redondeado y botón coherente con la landing.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="Shortcodes mínimos para la práctica">
            <pre><code>{`[product_categories columns="3"]
[featured_products limit="4" columns="4"]
[sale_products limit="2" columns="2"]`}</code></pre>
          </PracticeBox>
        </section>

        <section id="resumen" className="doc-section">
          <h2>13. Resumen final del tema</h2>
          <div className="topic-summary">
            <div className="topic-summary__grid">
              <section className="topic-summary__card">
                <h3 className="topic-summary__title">Ideas clave</h3>
                <ul className="topic-summary__list">
                  <li><strong>Elementor y Gutenberg no editan la página del mismo modo.</strong></li>
                  <li><strong>Los bloques de WooCommerce están pensados para Gutenberg.</strong></li>
                  <li><strong>En Elementor Free la vía habitual es el widget shortcode.</strong></li>
                  <li><strong>El shortcode se construye con una base y parámetros.</strong></li>
                  <li><strong>El diseño final se ajusta con CSS sobre la salida HTML.</strong></li>
                </ul>
              </section>

              <section className="topic-summary__card">
                <h3 className="topic-summary__title">Regla profesional</h3>
                <ul className="topic-summary__list">
                  <li><strong>Gutenberg + WooCommerce</strong> → bloques.</li>
                  <li><strong>Elementor + WooCommerce</strong> → shortcodes o widgets específicos.</li>
                  <li><strong>Maquetación</strong> y <strong>renderizado del catálogo</strong> deben entenderse como capas distintas.</li>
                </ul>
              </section>
            </div>
          </div>

          <TipBox title="Fórmula de examen y de proyecto real">
            Elementor maqueta, WooCommerce genera, el shortcode conecta y el CSS afina el resultado.
          </TipBox>
        </section>

        <div className="doc-hero" style={{ marginTop: "1.2rem" }}>
          <h2 style={{ margin: 0 }}>Cierre del tema</h2>
          <p className="doc-lead">
            Este enfoque permite trabajar con Elementor Free sin renunciar al contenido dinámico de WooCommerce. Es una
            solución muy útil en home pages, landings promocionales, páginas de campaña y escaparates comerciales donde
            queremos diseño visual y catálogo al mismo tiempo.
          </p>
        </div>

        <TipBox title="Checklist final del equipo">
          <ul>
            <li>¿He entendido por qué no aparecen los bloques de WooCommerce dentro de Elementor?</li>
            <li>¿Sé elegir la base correcta del shortcode?</li>
            <li>¿Sé usar parámetros como <code>limit</code>, <code>columns</code>, <code>category</code> e <code>ids</code>?</li>
            <li>¿He añadido una clase contenedora propia antes de escribir el CSS?</li>
            <li>¿He comprobado el resultado en móvil y escritorio?</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">Siguiente tema</a>
        </div>
      </article>
    </TopicLayout>
  );
}
