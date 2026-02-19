import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function NuestraPrimeraTienda() {
  return (
    <TopicLayout
      title="Nuestra primera tienda"
      description="Analizamos la plantilla Plant Store de Astra para entender cómo se monta una tienda con WooCommerce y poder replicarla después."
    >
      {/* HERO */}
      <header className="doc-hero">
        <p className="kicker">Astra + Spectra + WooCommerce</p>
        <h1>Nuestra primera tienda</h1>
        <p className="lead">
          En esta lección no “instalamos una plantilla y listo”. Vamos a{" "}
          <strong>desmontar</strong> Plant Store (tienda de plantas) para
          entender qué crea WooCommerce, qué aporta Astra y cómo se organiza una
          tienda real para vender.
        </p>
        <TipBox title="Objetivo didáctico">
          Al terminar, el alumno sabrá <strong>en qué fijarse</strong> (estructura,
          páginas dinámicas, bloques, conversión, responsive) para poder{" "}
          <strong>replicar</strong> una tienda similar sin depender de una plantilla.
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice de la lección">
        <h2>En esta lección</h2>
        <ol>
          <li>
            <a href="#que-vamos-a-hacer">1) Qué vamos a hacer</a>
          </li>
          <li>
            <a href="#instalacion">2) Instalación de Plant Store</a>
          </li>
          <li>
            <a href="#que-se-ha-creado">3) Qué se ha creado (páginas y piezas)</a>
          </li>
          <li>
            <a href="#analisis-home">4) Análisis de la Home (landing comercial)</a>
          </li>
          <li>
            <a href="#analisis-tienda">5) Análisis de la página Tienda</a>
          </li>
          <li>
            <a href="#analisis-producto">6) Análisis de una ficha de producto</a>
          </li>
          <li>
            <a href="#checklist-replicar">7) Checklist para replicarla</a>
          </li>
          <li>
            <a href="#actividades">8) Actividades obligatorias</a>
          </li>
          <li>
            <a href="#errores-comunes">9) Errores comunes</a>
          </li>
          <li>
            <a href="#siguiente">10) Siguiente paso</a>
          </li>
        </ol>
      </nav>

      {/* ================= 1) QUÉ VAMOS A HACER ================= */}
      <section className="doc-section" id="que-vamos-a-hacer">
        <details className="dd" open>
          <summary>1) Qué vamos a hacer</summary>
          <div className="dd-body">
            <p>
              Una tienda online es un sistema con muchas piezas:{" "}
              <strong>páginas dinámicas</strong>, <strong>productos</strong>,{" "}
              <strong>carrito</strong>, <strong>checkout</strong>,{" "}
              <strong>estilos</strong> y <strong>elementos de confianza</strong>.
              Una plantilla puede ocultarte esa realidad… o enseñártela, si la
              analizas con método.
            </p>

            <div className="two-columns">
              <div>
                <h3>Lo que haremos</h3>
                <ul>
                  <li>Importar la plantilla <strong>Plant Store</strong>.</li>
                  <li>Identificar qué es <strong>WooCommerce</strong> y qué es <strong>Astra</strong>.</li>
                  <li>Analizar Home, Tienda y Producto con “gafas” de e-commerce.</li>
                  <li>Aplicar un checklist para poder replicar la estructura.</li>
                </ul>
              </div>
              <div>
                <h3>Lo que NO haremos</h3>
                <ul>
                  <li>No vamos a “copiar por copiar”.</li>
                  <li>No vamos a quedarnos en “qué bonito”.</li>
                  <li>No vamos a tocar configuraciones avanzadas todavía.</li>
                  <li>No vamos a añadir 30 plugins.</li>
                </ul>
              </div>
            </div>

            <WarningBox title="Idea clave">
              Si no sabes distinguir lo <strong>dinámico</strong> (WooCommerce) de lo{" "}
              <strong>estático</strong> (bloques/maquetación), no podrás replicar una tienda.
            </WarningBox>
          </div>
        </details>
      </section>

      {/* ================= 2) INSTALACIÓN ================= */}
      <section className="doc-section" id="instalacion">
        <details className="dd" open>
          <summary>2) Instalación de Plant Store</summary>
          <div className="dd-body">
            <p>
              Vamos a instalar la plantilla para que WordPress cree páginas,
              estilos y contenido de ejemplo. Esto nos da un “caso real” para
              analizar.
            </p>

            <h3>Paso a paso (ruta exacta)</h3>
            <ol>
              <li>
                Ve a <strong>Apariencia → Starter Templates</strong>.
              </li>
              <li>
                Filtra por <strong>E-commerce</strong>.
              </li>
              <li>
                Selecciona el constructor <strong>Bloques / Gutenberg</strong>.
              </li>
              <li>
                Elige <strong>Plant Store</strong> y pulsa <strong>Import</strong>.
              </li>
              <li>
                Espera a que termine la instalación de tema + plugins + contenido.
              </li>
            </ol>

            <TipBox title="Consejo de profe">
              En aula, todos deben instalar el <strong>mismo</strong> modelo para que las
              capturas, nombres de páginas y análisis sean idénticos.
            </TipBox>

            <PracticeBox title="Mini comprobación">
              Cuando termine, abre tu web en una pestaña nueva y asegúrate de que:
              <ul>
                <li>La home carga con secciones e imágenes.</li>
                <li>La página Tienda lista productos.</li>
                <li>Puedes entrar a un producto y ver el botón “Añadir al carrito”.</li>
              </ul>
            </PracticeBox>
          </div>
        </details>
      </section>

      {/* ================= 3) QUÉ SE HA CREADO ================= */}
      <section className="doc-section" id="que-se-ha-creado">
        <details className="dd" open>
          <summary>3) Qué se ha creado (páginas y piezas)</summary>
          <div className="dd-body">
            <p>
              Ahora empieza el trabajo de verdad: detectar qué cosas son
              “estructura de tienda” y cuáles son “maquetación/marketing”.
            </p>

            <div className="two-columns">
              <div>
                <h3>Revisa páginas</h3>
                <p>
                  Ve a <strong>Páginas → Todas las páginas</strong> y anota cuáles
                  existen.
                </p>

                <ActivityBox title="Pregunta clave">
                  ¿Cuáles crees que ha creado <strong>WooCommerce</strong> automáticamente?
                  ¿Cuáles pertenecen a la plantilla?
                </ActivityBox>
              </div>

              <div>
                <h3>Revisa productos</h3>
                <p>
                  Ve a <strong>Productos → Todos los productos</strong> y comprueba
                  que hay productos de ejemplo (nombre, precio, imagen).
                </p>
                <TipBox title="Pista">
                  Sin productos, la página Tienda no puede mostrar nada útil.
                </TipBox>
              </div>
            </div>

            <h3>Qué crea WooCommerce siempre</h3>
            <ul>
              <li><strong>Tienda</strong> (Shop)</li>
              <li><strong>Carrito</strong></li>
              <li><strong>Finalizar compra</strong> (Checkout)</li>
              <li><strong>Mi cuenta</strong></li>
            </ul>

            <WarningBox title="Error típico">
              Editar “Carrito/Checkout” como si fueran una landing normal. Son páginas
              dinámicas: su contenido depende del estado del carrito y del usuario.
            </WarningBox>
          </div>
        </details>
      </section>

      {/* ================= X) ANÁLISIS DE PLUGINS INSTALADOS ================= */}
<section className="doc-section" id="analisis-plugins">
  <details className="dd" open>
    <summary>X) Análisis de plugins instalados (Plant Store) + plugins habituales</summary>
    <div className="dd-body">
      <p>
        Cuando importamos una plantilla como <strong>Plant Store</strong>, no solo se
        descargan páginas y estilos: también se instalan <strong>plugins</strong> que
        añaden funcionalidades concretas. En esta sección vamos a aprender a mirar
        una lista de plugins con mentalidad profesional:{" "}
        <strong>¿para qué sirve cada uno?</strong>,{" "}
        <strong>si es imprescindible</strong> y{" "}
        <strong>qué riesgos tiene</strong> (rendimiento, dependencia, compatibilidad).
      </p>

      <TipBox title="Regla de oro en WooCommerce">
        En una tienda, cada plugin extra puede afectar a:
        <ul>
          <li><strong>Velocidad</strong> (más scripts y CSS)</li>
          <li><strong>Compatibilidad</strong> (conflictos entre plugins)</li>
          <li><strong>Seguridad</strong> (más superficie de ataque)</li>
          <li><strong>Mantenimiento</strong> (actualizaciones y fallos)</li>
        </ul>
        Por eso no “coleccionamos plugins”: <strong>los justificamos</strong>.
      </TipBox>

      <h3>1) Plugins que trae la plantilla (los de tu instalación)</h3>
      <p>
        Estos son los plugins típicos que aparecen al importar Plant Store con Astra.
        No todos son obligatorios para que una tienda funcione, pero sí aportan
        mejoras concretas.
      </p>

      <div className="two-columns">
        <div>
          <h4>Starter Templates (Plantillas de inicio)</h4>
          <p>
            Es el plugin que te permite <strong>importar</strong> la plantilla:
            instala el tema, añade páginas, bloques, imágenes y ajustes.
          </p>
          <ul>
            <li><strong>Cuándo lo necesito:</strong> durante la importación.</li>
            <li>
              <strong>Después:</strong> puedes desactivarlo si ya no vas a importar
              más plantillas (no rompe el contenido importado).
            </li>
          </ul>

          <h4>Spectra</h4>
          <p>
            Añade <strong>bloques avanzados</strong> al editor Gutenberg: contenedores,
            grids, llamadas a la acción, iconos, etc. Muchas secciones bonitas de la home
            suelen estar construidas con Spectra.
          </p>
          <ul>
            <li><strong>Si lo desactivas:</strong> puedes perder el diseño de páginas que usen sus bloques.</li>
            <li><strong>Uso correcto:</strong> usar Spectra para maquetar, no para “arreglar” problemas de WooCommerce.</li>
          </ul>

          <h4>SureForms</h4>
          <p>
            Plugin para crear <strong>formularios</strong> (contacto, newsletter,
            soporte…). Es útil si la plantilla incluye una página de contacto
            con un formulario ya montado.
          </p>
          <ul>
            <li><strong>Alternativas:</strong> WPForms, Contact Form 7, Fluent Forms.</li>
            <li><strong>Cuándo lo mantengo:</strong> si realmente usamos formularios en el proyecto.</li>
          </ul>
        </div>

        <div>
          <h4>SureRank SEO</h4>
          <p>
            Herramienta ligera de <strong>SEO</strong> para títulos, meta-descripciones,
            sitemap, etc. En un proyecto educativo sirve para introducir:
            “si no optimizo, no me encuentran”.
          </p>
          <ul>
            <li><strong>Alternativas:</strong> Yoast, Rank Math, SEOPress.</li>
            <li><strong>Recomendación didáctica:</strong> usarlo solo para lo básico (título + descripción + sitemap).</li>
          </ul>

          <h4>Variation Swatches for WooCommerce</h4>
          <p>
            Mejora la experiencia de compra mostrando variaciones (color/talla) como
            <strong>muestras</strong> visuales en vez de desplegables.
          </p>
          <ul>
            <li><strong>Cuándo tiene sentido:</strong> moda, decoración, productos con colores.</li>
            <li><strong>Riesgo:</strong> si el tema ya tiene swatches nativos, puede duplicar estilos.</li>
          </ul>

          <h4>Cart Abandonment Recovery for WooCommerce</h4>
          <p>
            Recupera carritos abandonados: captura email en checkout y envía
            recordatorios automáticos. Es una funcionalidad de <strong>marketing</strong>.
          </p>
          <ul>
            <li><strong>Cuándo usarlo:</strong> tiendas reales con tráfico y estrategia de email.</li>
            <li>
              <strong>En aula:</strong> lo analizamos como concepto, pero no es imprescindible
              para una mini tienda de práctica.
            </li>
          </ul>
        </div>
      </div>

      <h4>CartFlows + Modern Cart Starter</h4>
      <p>
        Estos dos suelen venir juntos en plantillas orientadas a conversión:
      </p>
      <ul>
        <li>
          <strong>CartFlows</strong>: crea <strong>funnels</strong> (flujos de venta),
          optimiza checkout y permite páginas de pago más “marketing”.
        </li>
        <li>
          <strong>Modern Cart Starter</strong>: mejora la experiencia del carrito con
          más opciones y un diseño moderno.
        </li>
      </ul>

      <WarningBox title="Ojo (muy importante)">
        CartFlows puede modificar el flujo natural de WooCommerce (carrito/checkout).
        Para aprender bien, es mejor dominar primero el checkout estándar y{" "}
        <strong>después</strong> introducir funnels. Si no, el alumnado confunde
        “WooCommerce” con “un plugin que cambia WooCommerce”.
      </WarningBox>

      <PracticeBox title="Mini auditoría (5 minutos)">
        Ve a <strong>Plugins</strong> y marca en una hoja:
        <ul>
          <li><strong>Imprescindibles</strong> para que la web se vea igual (normalmente Spectra).</li>
          <li><strong>Útiles</strong> pero no obligatorios (SureForms, SureRank).</li>
          <li><strong>Avanzados</strong> para marketing/conversión (CartFlows, Abandonment).</li>
        </ul>
        La idea es aprender a decidir, no a instalar por inercia.
      </PracticeBox>

      <hr />

      <h3>2) Plugins habituales en tiendas (los más comunes) — sin entrar aún en WooCommerce/WooPayments</h3>
      <p>
        Además de los que trae la plantilla, en un proyecto real es normal encontrarse
        este tipo de plugins. Aquí solo los presentamos para que el alumno sepa{" "}
        <strong>para qué categoría sirve cada uno</strong>. Más adelante veremos en profundidad
        el corazón del e-commerce (WooCommerce) y los pagos (WooPayments) en su propia lección.
      </p>

      <details className="dd">
        <summary>Seguridad</summary>
        <div className="dd-body">
          <ul>
            <li><strong>Wordfence</strong> / <strong>iThemes Security</strong>: firewall, escaneo, bloqueos.</li>
            <li><strong>Limit Login Attempts</strong>: limitar intentos de acceso.</li>
          </ul>
          <TipBox title="En aula">
            La seguridad se enseña como hábito: contraseñas fuertes, mínimo de plugins,
            actualizaciones y copias.
          </TipBox>
        </div>
      </details>

      <details className="dd">
        <summary>Rendimiento y caché</summary>
        <div className="dd-body">
          <ul>
            <li><strong>LiteSpeed Cache</strong> (si el servidor lo soporta) / <strong>WP Super Cache</strong>.</li>
            <li><strong>Autoptimize</strong>: optimización de CSS/JS.</li>
            <li><strong>Smush</strong> / <strong>ShortPixel</strong>: compresión de imágenes.</li>
          </ul>
          <WarningBox title="Cuidado">
            En WooCommerce, la caché mal configurada puede romper carrito/checkout.
            Se optimiza con método, no “activando todo”.
          </WarningBox>
        </div>
      </details>

      <details className="dd">
        <summary>Copias de seguridad</summary>
        <div className="dd-body">
          <ul>
            <li><strong>UpdraftPlus</strong>: copias programadas y restauración.</li>
            <li><strong>Duplicator</strong>: migración y clonación.</li>
          </ul>
          <TipBox title="Idea clave">
            Una tienda sin copias es una tienda “a la ruleta”. Copias y restauración
            se consideran parte del trabajo profesional.
          </TipBox>
        </div>
      </details>

      <details className="dd">
        <summary>Email y entregabilidad</summary>
        <div className="dd-body">
          <ul>
            <li><strong>WP Mail SMTP</strong>: mejora el envío de emails (contacto, notificaciones).</li>
            <li><strong>FluentSMTP</strong>: alternativa para configurar SMTP.</li>
          </ul>
          <p>
            En e-commerce el email es crítico: confirmaciones, avisos, soporte, etc.
            Por eso se suele configurar SMTP en cuanto el proyecto pasa a “real”.
          </p>
        </div>
      </details>

      <details className="dd">
        <summary>Analítica</summary>
        <div className="dd-body">
          <ul>
            <li><strong>Site Kit by Google</strong>: Search Console + Analytics + AdSense.</li>
            <li><strong>PixelYourSite</strong>: píxeles y seguimiento (si hay campañas).</li>
          </ul>
          <TipBox title="En aula">
            La analítica se enseña como preguntas: ¿de dónde viene el tráfico?,
            ¿qué páginas convierten?, ¿dónde se abandona?
          </TipBox>
        </div>
      </details>

      <details className="dd">
        <summary>Traducción / multidioma</summary>
        <div className="dd-body">
          <ul>
            <li><strong>TranslatePress</strong>: traducción visual.</li>
            <li><strong>Polylang</strong>: multidioma por contenidos.</li>
          </ul>
          <WarningBox title="Nota">
            Multidioma en tiendas añade complejidad (productos, impuestos, envíos).
            Primero dominamos 1 idioma, después escalamos.
          </WarningBox>
        </div>
      </details>

      <details className="dd">
        <summary>Maquetación adicional</summary>
        <div className="dd-body">
          <ul>
            <li><strong>Elementor</strong>: maquetador visual (si el proyecto lo exige).</li>
            <li><strong>Blocks extra</strong> (Kadence Blocks, GenerateBlocks): alternativas a Spectra.</li>
          </ul>
          <TipBox title="Criterio para elegir">
            Elige 1 sistema principal de maquetación: Gutenberg+Spectra o Elementor.
            Mezclar sin criterio suele generar inconsistencia y problemas.
          </TipBox>
        </div>
      </details>

      <WarningBox title="Importante (próxima lección)">
        <strong>WooCommerce</strong> y <strong>WooPayments</strong> los trabajaremos
        en una lección completa aparte: configuración, páginas clave, productos,
        impuestos, envíos, checkout y pruebas de compra.
      </WarningBox>

      <ActivityBox title="Actividad (para entregar)">
        Haz una tabla con 3 columnas:
        <ol>
          <li><strong>Plugin</strong></li>
          <li><strong>Qué aporta</strong> (1 frase)</li>
          <li><strong>¿Lo dejarías en una mini tienda?</strong> (Sí/No + por qué)</li>
        </ol>
        Incluye al menos estos: Starter Templates, Spectra, SureForms, SureRank SEO,
        CartFlows, Modern Cart Starter, Abandonment Recovery, Variation Swatches.
      </ActivityBox>
    </div>
  </details>
</section>
{/* ================= MINI GLOSARIO + CRITERIO DE SELECCIÓN ================= */}
<section className="doc-section" id="criterio-plugins">
  <details className="dd" open>
    <summary>Mini-glosario profesional + Criterio de selección de plugins</summary>
    <div className="dd-body">
      
      <p>
        No todos los plugins son iguales. En una tienda online debemos pensar 
        como desarrolladores profesionales: 
        <strong>¿Es imprescindible?</strong>, 
        <strong>¿mejora la experiencia?</strong>, 
        <strong>o es solo un extra?</strong>
      </p>

      <hr />

      <h3>📖 Mini-glosario para entender los plugins</h3>

      <div className="two-columns">
        <div>
          <h4>🔧 Plugin imprescindible</h4>
          <p>
            Sin él la tienda no puede funcionar correctamente.
            Afecta al sistema base (productos, carrito, checkout, pagos).
          </p>
          <ul>
            <li>Ejemplo: WooCommerce (lo veremos en la siguiente lección).</li>
          </ul>

          <h4>⚙️ Plugin estructural</h4>
          <p>
            No es obligatorio para vender, pero forma parte de la arquitectura
            visual o funcional de la web.
          </p>
          <ul>
            <li>Spectra (si hemos construido la web con sus bloques).</li>
          </ul>

          <h4>🚀 Plugin de mejora de experiencia (UX)</h4>
          <p>
            No es obligatorio, pero hace que la tienda sea más cómoda,
            clara o atractiva para el usuario.
          </p>
          <ul>
            <li>Variation Swatches</li>
            <li>Modern Cart</li>
          </ul>
        </div>

        <div>
          <h4>📈 Plugin de marketing</h4>
          <p>
            Mejora conversión, recuperación de ventas o embudos,
            pero no es necesario en una tienda básica.
          </p>
          <ul>
            <li>CartFlows</li>
            <li>Cart Abandonment Recovery</li>
          </ul>

          <h4>🛡 Plugin de mantenimiento</h4>
          <p>
            Seguridad, copias, rendimiento, SEO.
            No afectan directamente a vender,
            pero sí a la estabilidad del negocio.
          </p>
          <ul>
            <li>SEO</li>
            <li>Caché</li>
            <li>Backups</li>
          </ul>

          <h4>🎨 Plugin opcional</h4>
          <p>
            Aporta comodidad o estética,
            pero puede sustituirse o prescindirse de él.
          </p>
        </div>
      </div>

      <hr />

      <h3>🚦 Criterio profesional para elegir plugins</h3>

      <p>
        Cuando montes una tienda desde cero, usa este sistema de decisión.
      </p>

      <h4>🟢 VERDE — Necesario sí o sí</h4>
      <ul>
        <li>WooCommerce (sistema base)</li>
        <li>Plugin de pagos (lo veremos después)</li>
        <li>Plugin de copias de seguridad</li>
      </ul>

      <TipBox title="Regla básica">
        Si desactivarlo rompe la tienda o impide vender,
        es VERDE.
      </TipBox>

      <h4>🟡 AMARILLO — Mejora mucho la experiencia</h4>
      <ul>
        <li>Spectra (si lo usas para maquetar)</li>
        <li>Variation Swatches</li>
        <li>Plugin SEO</li>
        <li>Plugin de caché bien configurado</li>
      </ul>

      <p>
        No son obligatorios para vender,
        pero aumentan profesionalidad y calidad.
      </p>

      <h4>🔴 ROJO — Prescindible en una mini tienda</h4>
      <ul>
        <li>CartFlows (embudos avanzados)</li>
        <li>Recuperación de carritos en fase inicial</li>
        <li>Plugins estéticos duplicados</li>
        <li>Plugins que hacen lo mismo que otro ya activo</li>
      </ul>

      <WarningBox title="Error típico del alumno">
        Instalar muchos plugins “por si acaso”.
        Más plugins = más peso, más conflictos y más mantenimiento.
      </WarningBox>

      <hr />

      <h3>🧠 Cómo decidir correctamente</h3>

      <ol>
        <li>¿Sin este plugin puedo vender? → Si NO → probablemente es verde.</li>
        <li>¿Aporta claridad o velocidad al usuario? → amarillo.</li>
        <li>¿Solo añade efectos o marketing avanzado? → rojo en fase inicial.</li>
        <li>¿Hace lo mismo que otro plugin activo? → eliminar duplicidad.</li>
      </ol>

      <ActivityBox title="Ejercicio práctico obligatorio">
        Imagina que vas a crear tu propia mini tienda desde cero.
        Haz una lista de máximo 6 plugins:
        <ul>
          <li>Marca en verde los imprescindibles.</li>
          <li>Marca en amarillo los que mejoran experiencia.</li>
          <li>Marca en rojo los que dejarías para una fase avanzada.</li>
        </ul>
        Justifica cada elección en 1 frase.
      </ActivityBox>

      <TipBox title="Mentalidad profesional">
        Una buena tienda no es la que tiene más plugins.
        Es la que tiene los plugins correctos.
      </TipBox>

    </div>
  </details>
</section>


      {/* ================= 4) ANÁLISIS HOME ================= */}
      <section className="doc-section" id="analisis-home">
        <details className="dd" open>
          <summary>4) Análisis de la Home (landing comercial)</summary>
          <div className="dd-body">
            <p>
              La Home de una tienda no es “decoración”: es una{" "}
              <strong>landing</strong> cuyo objetivo es que el usuario avance:
              explorar productos, confiar y comprar.
            </p>

            <h3>Qué debes localizar (y por qué importa)</h3>
            <ul>
              <li>
                <strong>Hero</strong>: propuesta de valor + botón principal (CTA).
              </li>
              <li>
                <strong>Beneficios</strong>: envío, devoluciones, pago seguro…
              </li>
              <li>
                <strong>Productos destacados</strong>: atajo directo a comprar.
              </li>
              <li>
                <strong>Prueba social</strong>: reseñas, testimonios, señales de confianza.
              </li>
              <li>
                <strong>CTA final</strong>: repetir acción cuando el usuario ya está convencido.
              </li>
            </ul>

            <ActivityBox title="Actividad de observación (5 min)">
              En la Home, señala (con notas o capturas):
              <ol>
                <li>El CTA principal (texto exacto del botón).</li>
                <li>Qué “promesa” hace la tienda en el primer pantallazo.</li>
                <li>Qué bloque te da más confianza y por qué.</li>
              </ol>
            </ActivityBox>

            <h3>Modo móvil (mobile first)</h3>
            <p>
              Activa la vista móvil (o reduce la ventana). Comprueba:
            </p>
            <ul>
              <li>Las columnas se apilan sin romper el diseño.</li>
              <li>Los botones tienen tamaño cómodo para tocar con el dedo.</li>
              <li>El menú se convierte en “hamburguesa”.</li>
              <li>Los textos no quedan demasiado pequeños.</li>
            </ul>

            <TipBox title="Regla de oro">
              Si una tienda no está optimizada para móvil, pierde ventas.
            </TipBox>
          </div>
        </details>
      </section>

      {/* ================= 5) ANÁLISIS TIENDA ================= */}
      <section className="doc-section" id="analisis-tienda">
        <details className="dd" open>
          <summary>5) Análisis de la página Tienda</summary>
          <div className="dd-body">
            <p>
              La página Tienda (Shop) es un catálogo dinámico: lista productos reales
              con su precio, imagen, nombre y acciones.
            </p>

            <h3>Checklist de análisis</h3>
            <ul>
              <li>¿Cuántas columnas hay en desktop? ¿y en móvil?</li>
              <li>¿Hay ordenación (por precio, popularidad…)?</li>
              <li>¿Se ve el botón de “Añadir al carrito” o solo al entrar al producto?</li>
              <li>¿Aparecen categorías/etiquetas/filtros?</li>
              <li>¿La tarjeta de producto es clara o recargada?</li>
            </ul>

            <PracticeBox title="Prueba técnica (2 min)">
              Entra en Tienda, añade 1 producto al carrito y verifica:
              <ul>
                <li>¿Hay aviso/feedback de que se añadió?</li>
                <li>¿Dónde aparece el acceso al carrito?</li>
                <li>¿Se actualiza el contador del carrito?</li>
              </ul>
            </PracticeBox>
          </div>
        </details>
      </section>

      {/* ================= 6) ANÁLISIS PRODUCTO ================= */}
      <section className="doc-section" id="analisis-producto">
        <details className="dd" open>
          <summary>6) Análisis de una ficha de producto</summary>
          <div className="dd-body">
            <p>
              La ficha de producto es la página donde el usuario decide.
              Aquí deben estar claras tres cosas: <strong>qué es</strong>,{" "}
              <strong>cuánto cuesta</strong> y <strong>cómo comprar</strong>.
            </p>

            <div className="two-columns">
              <div>
                <h3>Elementos imprescindibles</h3>
                <ul>
                  <li>Galería de imágenes (buena calidad)</li>
                  <li>Nombre del producto</li>
                  <li>Precio</li>
                  <li>Botón “Añadir al carrito”</li>
                  <li>Descripción clara (beneficios + uso)</li>
                </ul>
              </div>
              <div>
                <h3>Elementos que aumentan conversión</h3>
                <ul>
                  <li>Reseñas/valoraciones</li>
                  <li>Información de envío y devoluciones</li>
                  <li>Productos relacionados</li>
                  <li>Badges: “Nuevo”, “Top ventas”, “Eco”…</li>
                </ul>
              </div>
            </div>

            <ActivityBox title="Análisis guiado (captura + respuesta)">
              Elige un producto de la plantilla y contesta:
              <ol>
                <li>¿Qué parte te impulsa a comprar (imagen, precio, texto, reseñas)?</li>
                <li>¿Qué mejorarías para dar más confianza?</li>
                <li>¿Qué información falta (si falta algo)?</li>
              </ol>
            </ActivityBox>

            <WarningBox title="Error típico">
              Descripciones “técnicas” sin beneficios. En e-commerce, la descripción debe
              ayudar a imaginar el uso y resolver dudas.
            </WarningBox>
          </div>
        </details>
      </section>
      {/* ================= RESPONSIVIDAD DE IMÁGENES EN WORDPRESS ================= */}
<section className="doc-section" id="imagenes-responsive">
  <details className="dd" open>
    <summary>Cómo funciona la responsividad automática de imágenes en WordPress</summary>
    <div className="dd-body">

      <p>
        Cuando subes una imagen a WordPress, el sistema no solo guarda el archivo original.
        Automáticamente genera múltiples tamaños para que la web cargue la versión adecuada
        según el dispositivo del usuario.
      </p>

      <TipBox title="Idea clave">
        Tú subes una imagen.
        WordPress genera todas las versiones necesarias.
        El navegador elige la adecuada.
      </TipBox>

      <hr />

      <h3>1) Qué ocurre exactamente al subir una imagen</h3>

      <p>
        Supongamos que subes:
      </p>

      <pre>
        <code>{`hero.jpg (1920x1080)`}</code>
      </pre>

      <p>
        WordPress crea automáticamente:
      </p>

      <pre>
        <code>{`hero.jpg
hero-150x150.jpg
hero-300x169.jpg
hero-768x432.jpg
hero-1024x576.jpg
hero-1536x864.jpg`}</code>
      </pre>

      <p>
        Además, WooCommerce puede añadir tamaños específicos para:
      </p>

      <ul>
        <li>Miniatura de producto</li>
        <li>Imagen de catálogo</li>
        <li>Imagen principal de producto</li>
      </ul>

      <WarningBox title="Importante">
        No necesitas subir todas esas versiones manualmente.
        WordPress las genera automáticamente.
      </WarningBox>

      <hr />

      <h3>2) ¿Cómo sabe el navegador cuál cargar?</h3>

      <p>
        WordPress usa una tecnología moderna de HTML llamada <strong>srcset</strong>.
      </p>

      <p>
        Cuando inspeccionas una imagen en el navegador verás algo así:
      </p>

      <pre>
        <code>{`<img 
  src="hero-1024x576.jpg"
  srcset="
    hero-300x169.jpg 300w,
    hero-768x432.jpg 768w,
    hero-1024x576.jpg 1024w,
    hero-1536x864.jpg 1536w"
  sizes="(max-width: 768px) 100vw, 50vw"
>`}</code>
      </pre>

      <p>
        Esto significa que:
      </p>

      <ul>
        <li>En móvil cargará la versión pequeña.</li>
        <li>En tablet cargará la versión media.</li>
        <li>En pantallas grandes cargará la versión grande.</li>
      </ul>

      <TipBox title="Resultado">
        Menor peso.
        Mejor velocidad.
        Mejor SEO.
        Mejor experiencia de usuario.
      </TipBox>

      <hr />

      <h3>3) Dónde se configuran estos tamaños</h3>

      <h4>🔹 Ajustes básicos</h4>
      <p>
        En <strong>Ajustes → Medios</strong> puedes definir:
      </p>

      <ul>
        <li>Tamaño miniatura</li>
        <li>Tamaño medio</li>
        <li>Tamaño grande</li>
      </ul>

      <h4>🔹 WooCommerce</h4>
      <p>
        En <strong>Apariencia → Personalizar → WooCommerce → Imágenes</strong>
        puedes configurar tamaños específicos de producto.
      </p>

      <h4>🔹 Tema (Astra)</h4>
      <p>
        El tema puede añadir tamaños personalizados mediante código interno.
      </p>

      <hr />

      <h3>4) Experimento práctico (obligatorio)</h3>

      <ActivityBox title="Actividad de laboratorio">
        1. Sube una imagen nueva (mínimo 1600px).
        2. Ve a la carpeta uploads.
        3. Observa cuántos archivos se generan.
        4. Inspecciona la imagen en el navegador.
        5. Cambia el tamaño de la ventana y mira cuál carga.
      </ActivityBox>

      <hr />

      <h3>5) Buenas prácticas profesionales</h3>

      <ul>
        <li>Subir imágenes optimizadas (no más grandes de lo necesario).</li>
        <li>Hero: máximo 1920px ancho.</li>
        <li>Productos: 800–1200px.</li>
        <li>No subir imágenes de 4000px “por si acaso”.</li>
        <li>Usar WebP si es posible.</li>
      </ul>

      <WarningBox title="Error típico del alumno">
        Pensar que WordPress hace magia infinita.
        Si subes una imagen de 8MB, seguirá pesando 8MB.
      </WarningBox>

      <hr />

      <h3>6) Conclusión técnica</h3>

      <p>
        La responsividad de imágenes en WordPress no depende de media queries CSS.
        Depende de:
      </p>

      <ul>
        <li>Generación automática de tamaños</li>
        <li>HTML con srcset</li>
        <li>Elección inteligente del navegador</li>
      </ul>

      <TipBox title="Mentalidad profesional">
        El rendimiento empieza cuando eliges el tamaño correcto de imagen,
        no cuando instalas un plugin de caché.
      </TipBox>

    </div>
  </details>
</section>


      {/* ================= 7) CHECKLIST REPLICAR ================= */}
      <section className="doc-section" id="checklist-replicar">
        <details className="dd" open>
          <summary>7) Checklist para replicarla</summary>
          <div className="dd-body">
            <p>
              Ahora sí: ¿qué debe copiar el alumno para replicar esta tienda?
              No “copiar el diseño exacto”, sino su <strong>arquitectura</strong>.
            </p>

            <TipBox title="Checklist de replicación">
              <ul>
                <li>
                  <strong>Estructura:</strong> Home (landing), Tienda, Producto,
                  Carrito, Checkout, Mi cuenta.
                </li>
                <li>
                  <strong>Dinámico:</strong> Tienda y Producto conectados a productos reales.
                </li>
                <li>
                  <strong>Navegación:</strong> menú simple con enlaces a Tienda y categorías.
                </li>
                <li>
                  <strong>Confianza:</strong> beneficios (envío/pago/devolución), reseñas, contacto.
                </li>
                <li>
                  <strong>Responsive:</strong> mobile first (botones grandes, columnas apiladas).
                </li>
                <li>
                  <strong>Accesibilidad:</strong> textos claros, buen contraste, foco visible, alt en imágenes.
                </li>
              </ul>
            </TipBox>

            <PracticeBox title="Mini-reto (10 min)">
              Cambia solo 3 cosas (sin romper nada):
              <ol>
                <li>El texto del hero (promesa + CTA).</li>
                <li>Una imagen principal (hero o sección destacada).</li>
                <li>El color primario global (Astra → Personalizar).</li>
              </ol>
              <p>
                Objetivo: entender qué cambios son “seguros” y cuáles afectan al sistema.
              </p>
            </PracticeBox>
          </div>
        </details>
      </section>

      {/* ================= 8) ACTIVIDADES ================= */}
      <section className="doc-section" id="actividades">
        <details className="dd" open>
          <summary>8) Actividades obligatorias</summary>
          <div className="dd-body">
            <ActivityBox title="Actividad 1 — Radiografía de la plantilla (entrega)">
              Entrega un documento (1–2 páginas) con:
              <ul>
                <li>Lista de páginas creadas y cuáles son de WooCommerce.</li>
                <li>Mapa de secciones de la Home (qué sección + para qué sirve).</li>
                <li>Checklist de Tienda (columnas, ordenación, botones, tarjetas).</li>
                <li>Análisis de una ficha de producto (qué convence / qué falta).</li>
              </ul>
            </ActivityBox>

            <ActivityBox title="Actividad 2 — Cambiar sin romper (entrega)">
              Haz cambios mínimos:
              <ul>
                <li>Cambia colores globales.</li>
                <li>Edita 2 productos (nombre, precio, imagen).</li>
                <li>Actualiza el CTA principal de la home.</li>
              </ul>
              <p>
                Entrega 3 capturas: Home (arriba), Tienda, Producto.
              </p>
            </ActivityBox>
          </div>
        </details>
      </section>

      {/* ================= 9) ERRORES COMUNES ================= */}
      <section className="doc-section" id="errores-comunes">
        <details className="dd" open>
          <summary>9) Errores comunes</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Confundir bloques con sistema:</strong> editar “Checkout” como si fuera una landing.
              </li>
              <li>
                <strong>No revisar móvil:</strong> columnas imposibles, botones pequeños, textos minúsculos.
              </li>
              <li>
                <strong>Demasiados plugins:</strong> instalar por impulso y romper el rendimiento.
              </li>
              <li>
                <strong>No entender el catálogo:</strong> productos sin imágenes o sin precios coherentes.
              </li>
              <li>
                <strong>Sin confianza:</strong> no mostrar envíos, devoluciones, contacto, reseñas.
              </li>
            </ul>

            <WarningBox title="Regla para el curso">
              Primero entendemos el sistema base. Después, añadimos mejoras.
              Si empiezas al revés, te pierdes.
            </WarningBox>
          </div>
        </details>
      </section>

      {/* ================= 10) SIGUIENTE PASO ================= */}
      <section className="doc-section" id="siguiente">
        <details className="dd" open>
          <summary>10) Siguiente paso</summary>
          <div className="dd-body">
            <p>
              En la siguiente lección vamos a crear una mini tienda{" "}
              <strong>sin plantilla</strong>, replicando la arquitectura aprendida:
              páginas clave, catálogo mínimo, y una home tipo landing con CTA.
            </p>

            <TipBox title="Antes de pasar">
              Asegúrate de que sabes explicar con tus palabras:
              <ul>
                <li>Qué páginas son de WooCommerce.</li>
                <li>Qué significa “dinámico” en una tienda.</li>
                <li>Qué elementos aumentan confianza y conversión.</li>
              </ul>
            </TipBox>
          </div>
        </details>
      </section>

      {/* CIERRE */}
      <footer className="doc-hero">
        <h2>Checklist final</h2>
        <p className="lead">
          Si puedes responder a estas preguntas, estás listo para replicar.
        </p>
        <TipBox title="Me lo sé si…">
          <ul>
            <li>Puedo distinguir WooCommerce (dinámico) de Astra/Spectra (maquetación).</li>
            <li>Entiendo el flujo: Home → Tienda → Producto → Carrito → Checkout.</li>
            <li>He comprobado móvil y sé qué ajustar para que sea usable.</li>
            <li>He detectado elementos de confianza (envío, devoluciones, reseñas, contacto).</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a href="#" className="btn btn-primary">
            Siguiente lección → WooCommerce por dentro: productos, categorías y páginas clave
          </a>
        </div>
      </footer>
    </TopicLayout>
  );
}
