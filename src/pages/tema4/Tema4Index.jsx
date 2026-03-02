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
          <h2>4.8 Instalación, activación y gestión de temas</h2>

          <p>
            Gestionar temas profesionalmente incluye saber instalar, activar, cambiar y <strong>eliminar</strong>
            temas de forma segura. Cada acción tiene sus momentos apropiados y consideraciones técnicas.
          </p>

          <details className="dd" open>
            <summary>1) Instalar temas (métodos profesionales)</summary>
            <div className="dd-body">
              <h4>Método 1: Desde el repositorio de WordPress (temas gratuitos verificados)</h4>
              <ol>
                <li>Ve a <strong>Apariencia → Temas</strong></li>
                <li>Clic en <strong>"Añadir nuevo"</strong></li>
                <li>
                  Explora o busca: <code>"Astra"</code>, <code>"Kadence"</code> o <code>"GeneratePress"</code>
                </li>
                <li>Clic en <strong>"Instalar"</strong> → <strong>"Activar"</strong></li>
                <li><strong>¡Listo!</strong> El tema controla ya el diseño del sitio</li>
              </ol>

              <div className="callout tip">
                <strong>Ventaja:</strong> Los temas del repositorio oficial están revisados por seguridad 
                y se actualizan automáticamente.
              </div>

              <h4>Método 2: Subir archivo ZIP (temas premium o personalizados)</h4>
              <ol>
                <li>Ve a <strong>Apariencia → Temas</strong></li>
                <li>Clic en <strong>"Añadir nuevo"</strong> → <strong>"Subir tema"</strong></li>
                <li>Selecciona el archivo .zip del tema (sin descomprimir)</li>
                <li>Clic en <strong>"Instalar ahora"</strong></li>
                <li>Una vez instalado, <strong>"Activar"</strong></li>
              </ol>

              <div className="callout warn">
                <strong>Importante:</strong> Solo sube temas .zip de fuentes oficiales. 
                Los temas "nulled" o de sitios no confiables pueden contener malware.
              </div>

              <h4>Método 3: Por FTP (desarrolladores avanzados)</h4>
              <p>Subes la carpeta del tema directamente a <code>/wp-content/themes/</code> vía FTP o cPanel. 
              Útil cuando el archivo es muy grande o tienes restricciones de subida.</p>
            </div>
          </details>

          <details className="dd" open>
            <summary>2) Cambiar entre temas instalados</summary>
            <div className="dd-body">
              <p>Puedes cambiar de tema activo en cualquier momento <strong>sin perder contenido</strong>, 
              pero algunas configuraciones visuales pueden cambiar.</p>

              <h4>Proceso profesional de cambio:</h4>
              <ol>
                <li><strong>Documento el estado actual:</strong> haz capturas de las páginas principales</li>
                <li><strong>Ve a Apariencia → Temas</strong> y selecciona el tema nuevo</li>
                <li><strong>Clic en "Activar"</strong></li>
                <li><strong>Revisa inmediatamente:</strong> página de inicio, menús y configuraciones</li>
                <li><strong>Reconfigura si es necesario:</strong> logos, colores, menús de navegación</li>
              </ol>

              <div className="callout tip">
                <strong>Qué se mantiene:</strong> páginas, entradas, menús, usuarios y configuración general.<br/>
                <strong>Qué puede cambiar:</strong> diseño, posición de elementos, opciones del Customizer.
              </div>
            </div>
          </details>

          <details className="dd" open>
            <summary>3) Eliminar temas que no usas (buenas prácticas)</summary>
            <div className="dd-body">
              <p>Mantener temas innecesarios consumé espacio y puede ser un riesgo de seguridad. 
              <strong>Es buena práctica eliminar temas que no uses</strong>.</p>

              <h4>Cuándo eliminar un tema:</h4>
              <ul>
                <li>✅ <strong>No lo estás usando</strong> y no planeas usarlo</li>
                <li>✅ <strong>Es muy antiguo</strong> y no recibe actualizaciones</li>
                <li>✅ <strong>Duplicas funcionalidad</strong> con otro tema mejor</li>
                <li>✅ <strong>Limpieza de servidor</strong> antes de pasar a producción</li>
              </ul>

              <div className="callout warn">
                <strong>NUNCA elimines:</strong> el tema que está actualmente activo o un tema hijo 
                si tienes tema padre activo.
              </div>

              <h4>Procedimiento seguro para eliminar:</h4>
              <ol>
                <li><strong>Confirma que otro tema está activo:</strong> nunca elimines el tema activo</li>
                <li><strong>Ve a Apariencia → Temas</strong></li>
                <li><strong>Localiza el tema a eliminar</strong> (debe aparecer como "inactivo")</li>
                <li><strong>Clic en "Detalles del tema"</strong> en la esquina del tema</li>
                <li><strong>Clic en "Eliminar"</strong> (aparece solo si el tema no está activo)</li>
                <li><strong>Confirma la eliminación</strong></li>
              </ol>

              <div className="callout tip">
                <strong>Consejo profesional:</strong> antes de eliminar, haz backup de tu sitio por seguridad. 
                Aunque es una operación segura, siempre es mejor prevenir.
              </div>

              <h4>Alternativa por FTP (usuarios avanzados):</h4>
              <p>Puedes eliminar la carpeta del tema desde <code>/wp-content/themes/nombre-del-tema/</code> 
              vía FTP o administrador de archivos del hosting.</p>
            </div>
          </details>

          <details className="dd">
            <summary>4) Gestión de plantillas y starter sites</summary> 
            <div className="dd-body">
              <p>Las <strong>plantillas o starter sites</strong> son diferentes a los temas: son diseños completos 
              importados que incluyen páginas, contenido y configuraciones prediseñadas.</p>

              <h4>¿Qué son las plantillas/demos?</h4>
              <ul>
                <li><strong>Starter Sites:</strong> diseños completos con contenido de ejemplo</li>
                <li><strong>Templates:</strong> páginas individuales prediseñadas</li>
                <li><strong>Demos:</strong> sitios de muestra que puedes importar</li>
              </ul>

              <h4>Dónde encontrar plantillas profesionales:</h4>
              <ul>
                <li><strong>Biblioteca del tema:</strong> Astra, Kadence y otros incluyen +100 plantillas</li>
                <li><strong>Elementor/Spectra:</strong> bibliotecas de bloques y páginas prediseñadas</li>
                <li><strong>WordPress.org/patterns:</strong> patrones de bloques oficiales</li>
                <li><strong>Templatekits.com:</strong> plantillas premium verificadas</li>
              </ul>

              <h4>Cómo eliminar/limpiar plantillas importadas:</h4>
              <ol>
                <li><strong>Eliminar páginas creadas:</strong> ve a Páginas → Papelera y elimina definitivamente</li>
                <li><strong>Limpiar biblioteca de medios:</strong> elimina imágenes que no necesites</li>
                <li><strong>Revisar menús:</strong> elimina elementos de navegación innecesarios</li>
                <li><strong>Resetear Customizer:</strong> vuelve a colores y tipografías por defecto</li>
                <li><strong>Limpiar widgets:</strong> elimina widgets generados automáticamente</li>
              </ol>

              <div className="callout warn">
                <strong>Importante:</strong> importar plantillas puede instalar plugins dependientes. 
                Revisa en Plugins → Plugins instalados qué se añadió.
              </div>

              <h4>Plugin recomendado para limpiezas completas:</h4>
              <p><strong>"WordPress Reset"</strong> permite volver WordPress a estado inicial 
              manteniendo archivos y usuarios. Útil para empezar de cero tras experimentar con plantillas.</p>
            </div>
          </details>

          <div className="box box--activity">
            <h3 className="box__title">Práctica: Gestión completa de temas</h3>
            <ol>
              <li>Instala <strong>Astra</strong> desde el repositorio oficial</li>
              <li>Actívalo y comprueba que tu sitio cambia de diseño</li>
              <li>Vuelve al tema anterior (Twenty Twenty-Five o el que tenías)</li>
              <li>Elimina <strong>Astra</strong> siguiendo el procedimiento seguro</li>
              <li>Vuelve a instalar <strong>Astra</strong> y déjalo como tema activo</li>
            </ol>
            <p><em>Esta práctica te da confianza en la gestión de temas sin miedo a "romper" nada.</em></p>
          </div>
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
  <h2>4.10 Temas hijo: el papel de calco del desarrollo WordPress</h2>

  <WarningBox>
    <p>
      <strong>⚠️ Regla de oro de WordPress profesional:</strong> Nunca modifiques directamente los archivos del tema que has instalado.
      Si el tema se actualiza, <strong>pierdes tus cambios para siempre</strong>. Para eso existe el <strong>tema hijo</strong>.
    </p>
  </WarningBox>

  <div className="card">
    <h3>🏗️ La analogía del Arquitecto: Explicado como un profesional</h3>
    <p>
      Esta es una de las dudas más comunes y, a la vez, <strong>la base para ser un desarrollador de WordPress profesional</strong>. 
      Para entenderlo, olvida por un momento el código y piensa en un <strong>"Papel de Calco"</strong>.
    </p>

    <details className="dd" open>
      <summary>El ejemplo que lo explica todo</summary>
      <div className="dd-body">
        <p>
          Imagina que el <strong>Tema Padre</strong> es un plano de una casa de 100 páginas que ha diseñado un arquitecto famoso. 
          Si tú borras una pared en ese plano original, cuando el arquitecto saque una <strong>"Versión 2.0"</strong> de su plano, 
          tus cambios desaparecerán porque él te dará un libro nuevo.
        </p>

        <p>
          El <strong>Tema Hijo</strong> es una hoja en blanco que pones encima de ese plano. Solo dibujas lo que quieres cambiar. 
          Si el arquitecto actualiza su libro de 100 páginas, tu hoja de calco sigue arriba, intacta, tapando lo que tú decidiste modificar.
        </p>

        <TipBox title="Traducción profesional">
          <p>
            <strong>Tema padre = la base de tu casa.</strong> De hecho cuando inicias un proyecto WordPress te pone un tema por defecto. Sin tema no funciona WordPress.<br />
            <strong>Tema hijo = la distribución y decoración de una habitación específica.</strong>
          </p>
        </TipBox>
      </div>
    </details>
  </div>
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
    <summary>¿Para quién es un tema hijo? (cuándo lo vas a necesitar)</summary>
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

  <ActivityBox title="👶 Crear tu primer tema hijo ">
    <p>
      Vamos a crear una carpeta nueva donde vivan <strong>solo tus cambios</strong>.
      El tema padre seguirá instalado y actualizable.
    </p>
    

  <h2>4.11 Crear un tema hijo manualmente </h2>

  <details className="dd" open>
    <summary>¿Por qué aprender a hacerlo manualmente?</summary>
    <div className="dd-body">
      <p>
        Crear un tema hijo manualmente es entender <strong>cómo funciona WordPress por dentro</strong>.
        No dependes de plugins y sabes exactamente qué está ocurriendo.
      </p>

      <p>
        Un tema hijo permite modificar estilos, plantillas y funciones sin tocar el tema padre.
        Así, cuando Astra se actualice, <strong>no perderás tus cambios</strong>.
      </p>
    </div>
  </details>

 

    <h4>Paso 1 — Localiza la carpeta de temas</h4>
    <p>
      En LocalWP ve a:
    </p>
    <pre><code>/app/public/wp-content/themes/</code></pre>

    <h4>Paso 2 — Crea la carpeta del tema hijo</h4>
    <p>
      Crea una nueva carpeta con este formato:
    </p>
    <pre><code>astra-child</code></pre>
    <p>
      (Regla profesional: nombre-del-tema + <code>-child</code>)
    </p>

    <h4>Paso 3 — Crea el archivo <strong>style.css</strong></h4>
    <p>
      Dentro de la carpeta crea un archivo llamado <strong>style.css</strong>
      y añade este encabezado obligatorio:
    </p>

    <pre>
      <code>{`/*
Theme Name: Astra Child
Template: astra
Description: Tema hijo de Astra para modificaciones seguras
Version: 1.0
*/

/* Aquí irán tus estilos personalizados */`}</code>
    </pre>

    <p>
      🔎 Lo importante aquí es <strong>Template: astra</strong>.  
      Esa línea le dice a WordPress quién es el tema padre.
    </p>

    <h4>Paso 4 — Crea el archivo <strong>functions.php</strong></h4>

    <p>
      Este archivo se encargará de cargar correctamente los estilos.
      Vamos a usar una versión profesional compatible con Astra:
    </p>

    <pre>
      <code>{`<?php
// Seguridad básica
if ( !defined( 'ABSPATH' ) ) exit;

// Cargar estilos del hijo después del padre
add_action('wp_enqueue_scripts', function () {

  wp_enqueue_style(
    'astra-child',
    get_stylesheet_directory_uri() . '/style.css',
    ['astra-theme-css'], // dependencia del CSS de Astra
    wp_get_theme()->get('Version')
  );

}, 10);`}</code>
    </pre>

    <p>
      ✔️ Esto garantiza que el CSS del hijo se cargue después del padre.  
      ✔️ Evita problemas de caché usando versionado automático.  
      ✔️ Es el estándar profesional actual.
    </p>

    <h4>Paso 5 — (Opcional pero recomendable) Añade screenshot</h4>
    <p>
      Puedes añadir una imagen llamada <strong>screenshot.png</strong>
      (1200x900px recomendado) dentro de la carpeta.
    </p>
    <p>
      Esto hará que el tema se vea correctamente en 
      <strong>Apariencia → Temas</strong>.
    </p>

    <h4>Paso 6 — Activa el tema hijo</h4>
    <p>
      Ve a <strong>Apariencia → Temas</strong> y activa <strong>Astra Child</strong>.
    </p>

    <p>
      Desde ahora, todas tus modificaciones deben hacerse en el hijo.
    </p>

  </ActivityBox>

  <details className="dd">
    <summary>Ventajas del método manual</summary>
    <div className="dd-body">

      <ul>
        <li>✔️ No dependes de plugins adicionales</li>
        <li>✔️ Entiendes cómo funciona WordPress internamente</li>
        <li>✔️ Código más limpio y controlado</li>
        <li>✔️ Ideal para entornos profesionales</li>
        <li>✔️ No hay bloques “auto-generated” difíciles de entender</li>
      </ul>

    </div>
  </details>

  <details className="dd">
    <summary>Inconvenientes del método manual</summary>
    <div className="dd-body">

      <ul>
        <li>⚠️ Requiere acceder a archivos del servidor</li>
        <li>⚠️ Un error en PHP puede dejar la web en blanco</li>
        <li>⚠️ No incluye configuraciones avanzadas (RTL, etc.) automáticamente</li>
        <li>⚠️ Puede asustar a principiantes absolutos</li>
      </ul>

    </div>
  </details>

  <TipBox title="🚀 Método alternativo: Child Theme Configurator">
    <p>
      Si prefieres automatizar el proceso, puedes usar el plugin
      <strong>Child Theme Configurator</strong>.
    </p>
    <p>
      Genera el tema hijo en 1 clic e incluye soporte RTL y estructura automática.
    </p>
   <TipBox title="🧩 Plugin temporal: ¿lo dejamos instalado?">

  <p>
    Una vez que el tema hijo está creado, el plugin generador ya ha cumplido su función.
  </p>

  <ul>
    <li>El tema ya está creado correctamente.</li>
    <li>No necesitamos volver a generarlo.</li>
    <li>Menos plugins activos = mejor mantenimiento y rendimiento.</li>
  </ul>

  <p>
    <strong>Conclusión profesional:</strong>
  </p>

  <p>
    🚀 <strong>El mejor plugin es el que puedes desinstalar cuando ya ha cumplido su función.</strong>
  </p>

</TipBox>
  </TipBox>

  <PracticeBox title="🎓 Actividad para el alumno">
    <ol>
      <li>Crea el tema hijo manualmente.</li>
      <li>Actívalo y comprueba que la web no cambia visualmente.</li>
      <li>Añade un estilo simple en <code>style.css</code> (ej: cambiar color de enlaces).</li>
      <li>Comprueba que el cambio solo existe en el hijo.</li>
      <li>Actualiza Astra y verifica que tu cambio permanece.</li>
    </ol>
  </PracticeBox>

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

  
</section>


        <div className="doc-next">
          <a href="/tema5" className="btn btn-primary">
            Siguiente: M5 · Plugins esenciales →
          </a>
        </div>

        {/* Sección ampliada sobre gestión avanzada de temas hijo y eliminación */}
        <section className="doc-section" id="gestion-avanzada-temas">
          <h2>Gestión avanzada de temas y temas hijo</h2>

          <details className="dd" open>
            <summary>Cuándo y cómo eliminar un tema hijo de manera segura</summary>
            <div className="dd-body">
              <p>
                Eliminar un tema hijo requiere más cuidado que eliminar un tema normal, porque 
                puede contener personalizaciones importantes que quieres conservar.
              </p>

              <h4>Antes de eliminar un tema hijo:</h4>
              <ol>
                <li><strong>Haz backup del tema hijo completo:</strong> copia toda la carpeta</li>
                <li><strong>Documenta las personalizaciones:</strong> anota qué CSS y funciones añadiste</li>
                <li><strong>Activa otro tema primero:</strong> nunca elimines el tema activo</li>
                <li><strong>Confirma que no necesitas las modificaciones</strong></li>
              </ol>

              <h4>Proceso de eliminación segura:</h4>
              <ol>
                <li>Activa el <strong>tema padre</strong> (por ejemplo, Astra) o cualquier otro tema</li>
                <li>Ve a <strong>Apariencia → Temas</strong></li>
                <li>Busca tu tema hijo en la lista de temas instalados</li>
                <li>Clic en <strong>"Detalles del tema"</strong></li>
                <li>Clic en <strong>"Eliminar"</strong></li>
                <li>Confirma la eliminación</li>
              </ol>

              <div className="callout warn">
                <strong>Importante:</strong> Una vez eliminado, perderás TODOS los cambios personalizados 
                que estaban en el tema hijo (CSS, funciones PHP, templates modificados).
              </div>

              <h4>Alternativa: desactivar sin eliminar</h4>
              <p>Si tienes dudas, simplemente <strong>activa otro tema</strong> sin eliminar el hijo. 
              Así mantienes tus personalizaciones "dormidas" por si las necesitas en el futuro.</p>
            </div>
          </details>

          <details className="dd" open>
            <summary>Migrar personalizaciones de un tema hijo a otro</summary>
            <div className="dd-body">
              <p>
                Si quieres cambiar de tema padre pero conservar algunas personalizaciones, 
                puedes migrar partes específicas del tema hijo.
              </p>

              <h4>Lo que se puede migrar:</h4>
              <ul>
                <li>✅ <strong>CSS personalizado:</strong> casi siempre funciona en otros temas</li>
                <li>✅ <strong>Funciones generales:</strong> hooks que no dependen del tema específico</li>
                <li>❌ <strong>Templates específicos:</strong> requieren adaptación manual</li>
                <li>❌ <strong>Configuraciones del Customizer:</strong> cada tema tiene las suyas</li>
              </ul>

              <h4>Proceso de migración:</h4>
              <ol>
                <li>Crea un <strong>nuevo tema hijo</strong> para el tema padre nuevo</li>
                <li><strong>Copia el CSS reusable</strong> del tema hijo antiguo</li>
                <li><strong>Adapta el CSS</strong> a las clases del nuevo tema</li>
                <li><strong>Prueba las funciones PHP</strong> una por una</li>
                <li><strong>Recrea los templates</strong> si los necesitas</li>
              </ol>
            </div>
          </details>

          <details className="dd">
            <summary>Anatomía completa de un tema hijo profesional</summary>
            <div className="dd-body">
              <p>
                Un tema hijo profesional puede ser muy sofisticado. Aquí tienes la estructura 
                completa que usan desarrolladores en proyectos grandes.
              </p>

              <h4>Estructura expandida profesional:</h4>
              <pre><code>nombre-tema-child/
├── style.css                    ← Identificación del tema + CSS base
├── functions.php                ← Funciones y configuraciones
├── screenshot.png               ← Preview del tema (1200x900px)
├── README.md                    ← Documentación del proyecto
├── 
├── templates/                   ← Templates personalizados  
│   ├── single-producto.php      ← Template para productos
│   ├── page-landing.php         ← Template para landings
│   └── archive-eventos.php      ← Template para archivo eventos
│
├── template-parts/              ← Partes reutilizables
│   ├── header-custom.php        ← Cabecera personalizada
│   └── footer-custom.php        ← Pie personalizado
│
├── assets/                      ← Recursos del tema
│   ├── css/
│   │   ├── custom-styles.css    ← CSS adicional
│   │   └── responsive.css       ← Ajustes responsive
│   ├── js/
│   │   ├── custom-scripts.js    ← JavaScript personalizado
│   │   └── animations.js        ← Animaciones custom
│   └── images/
│       ├── logo-custom.png      ← Recursos gráficos
│       └── backgrounds/
│
├── languages/                   ← Traducciones
│   ├── es_ES.po                 ← Español
│   └── en_US.po                 ← Inglés
│
└── includes/                    ← Funcionalidades modulares
    ├── customizer.php           ← Opciones del Customizer
    ├── post-types.php           ← Custom Post Types
    └── shortcodes.php           ← Shortcodes personalizados</code></pre>

              <h4>functions.php expandido (ejemplo profesional):</h4>
              <pre><code>{`<?php
/**
 * Funciones del tema hijo - Proyecto [NOMBRE]
 * Version: 1.0.0
 * Author: [TU NOMBRE]
 */

// Evitar acceso directo
if (!defined('ABSPATH')) {
    exit;
}

/* ====================================
   CARGA DE ESTILOS Y SCRIPTS
   ==================================== */

function proyecto_enqueue_assets() {
    $version = wp_get_theme()->get('Version');
    
    // CSS del tema padre
    wp_enqueue_style(
        'parent-style', 
        get_template_directory_uri() . '/style.css',
        [],
        $version
    );
    
    // CSS personalizado
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        ['parent-style'],
        $version
    );
    
    // CSS responsive adicional
    wp_enqueue_style(
        'child-responsive',
        get_stylesheet_directory_uri() . '/assets/css/responsive.css',
        ['child-style'],
        $version
    );
    
    // JavaScript personalizado
    wp_enqueue_script(
        'child-scripts',
        get_stylesheet_directory_uri() . '/assets/js/custom-scripts.js',
        ['jquery'],
        $version,
        true
    );
}
add_action('wp_enqueue_scripts', 'proyecto_enqueue_assets');

/* ====================================
   CONFIGURACIÓN DEL TEMA
   ==================================== */

// Soporte adicional para el tema
function proyecto_theme_support() {
    // Imágenes destacadas
    add_theme_support('post-thumbnails');
    
    // Tamaños de imagen personalizados
    add_image_size('proyecto-hero', 1920, 800, true);
    add_image_size('proyecto-card', 400, 300, true);
    add_image_size('proyecto-thumb', 150, 150, true);
    
    // Soporte para logo personalizable
    add_theme_support('custom-logo', [
        'height' => 100,
        'width' => 300,
        'flex-height' => true,
        'flex-width' => true
    ]);
    
    // Menús personalizados
    register_nav_menus([
        'footer-menu' => __('Menú Footer', 'textdomain'),
        'legal-menu' => __('Menú Legal', 'textdomain')
    ]);
}
add_action('after_setup_theme', 'proyecto_theme_support');

/* ====================================
   FUNCIONES PERSONALIZADAS
   ==================================== */

// Shortcode personalizado para botones
function proyecto_boton_shortcode($atts) {
    $atts = shortcode_atts([
        'texto' => 'Leer más',
        'url' => '#',
        'estilo' => 'primario'
    ], $atts);
    
    return sprintf(
        '<a href="%s" class="btn btn-%s">%s</a>',
        esc_url($atts['url']),
        esc_attr($atts['estilo']),
        esc_html($atts['texto'])
    );
}
add_shortcode('boton', 'proyecto_boton_shortcode');

// Incluir archivos modulares
$includes = [
    'includes/customizer.php',
    'includes/post-types.php',
    'includes/shortcodes.php'
];

foreach ($includes as $file) {
    $filepath = get_stylesheet_directory() . '/' . $file;
    if (file_exists($filepath)) {
        require_once $filepath;
    }
}`}</code></pre>
            </div>
          </details>

          <div className="box box--activity">
            <h3 className="box__title">Práctica avanzada: Tema hijo profesional completo</h3>
            <ol>
              <li><strong>Crea la estructura expandida:</strong> carpetas assets, includes, templates</li>
              <li><strong>Implementa un shortcode personalizado</strong> usando el ejemplo de arriba</li>
              <li><strong>Añade CSS responsive</strong> en archivo separado</li>
              <li><strong>Crea un template personalizado</strong> para una página específica</li>
              <li><strong>Documenta todo</strong> en un README.md</li>
              <li><strong>Haz backup completo</strong> de tu tema hijo</li>
            </ol>
            <p><strong>Objetivo:</strong> Tener un sistema de personalización escalable y profesional.</p>
          </div>
        </section>
      </div>
    </TopicLayout>
  );
}
