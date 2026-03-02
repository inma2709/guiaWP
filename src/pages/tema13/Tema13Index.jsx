import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function TemaContenedoresSpectraIndex() {
  return (
    <TopicLayout
      title="M · Contenedores Spectra (UAGB) · La herramienta base"
      subtitle="Aprende a elegir cada ajuste del contenedor según el efecto visual que buscas (con mini-tablas por propiedad)"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Micro-módulo</div>
          <h1>Contenedores de Spectra: características y cuándo usarlas</h1>
          <p className="doc-lead">
            El <strong>contenedor</strong> es tu “bloque LEGO” principal en Gutenberg + Spectra.
            Si dominas sus propiedades, puedes construir <strong>secciones</strong>, <strong>tarjetas</strong>,
            <strong>grids</strong>, <strong>hero</strong>, <strong>banners</strong> y <strong>layouts</strong>
            sin depender de “bloques mágicos”.
          </p>
        </div>

        {/* INDEX */}
        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#objetivo">Objetivo, mentalidad y regla de oro</a></li>
            <li><a href="#que-es">Qué es un contenedor en Spectra (y por qué es la base)</a></li>
            <li><a href="#anatomia">Anatomía: contenedor padre vs contenedor hijo</a></li>
            <li><a href="#propiedades">Propiedades del contenedor (una a una con mini-tablas)</a></li>
            <li><a href="#patrones">Patrones: cómo guardar y reutilizar contenedores</a></li>
            <li><a href="#practica">Práctica guiada: 3 contenedores = 3 efectos</a></li>
            <li><a href="#repaso">Repaso + checklist + mini-test</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Que el alumno entienda <strong>qué hace cada propiedad</strong> del contenedor y pueda decidir:
            <em> “si quiero X efecto, activo Y ajuste”</em>.
            Esto convierte el contenedor en tu herramienta base para todo el curso.
          </p>
        </TipBox>

        <WarningBox>
          <p>
            <strong>⚠️ Error típico:</strong> intentar construir layouts con bloques sueltos (párrafos, listas, etc.)
            sin un contenedor que gobierne el diseño. Resultado: “nada cuadra”, todo depende del azar del tema.
          </p>
        </WarningBox>

        {/* 1) OBJETIVO */}
        <section className="doc-section" id="objetivo">
          <h2>1) Regla de oro: piensa en “capas” y “cajas”</h2>

          <details className="dd">
            <summary>La mentalidad correcta para no perderte</summary>
            <div className="dd-body">
              <ol>
                <li>
                  <strong>Primero</strong> creas la caja (contenedor): ancho, padding, fondo, bordes, sombra.
                </li>
                <li>
                  <strong>Después</strong> metes contenido: imagen, título, texto, botones.
                </li>
                <li>
                  <strong>Por último</strong> ajustas comportamiento: columnas, responsive, hover, overflow, capas.
                </li>
              </ol>
              <div className="callout tip">
               Terminaremos el tema entendiendo la relación “caja → contenido → comportamiento" y así dejaremos de confiar en la suerte 
               para que todo cuadre. 
              </div>
              <section className="doc-section" id="overflow-hidden">
  <h2>¿Qué significa overflow: hidden?</h2>

  <p>
    <strong>overflow</strong> controla qué ocurre cuando el contenido de un contenedor
    <strong>se sale de sus límites</strong>.
    El valor <strong>hidden</strong> significa literalmente:
    <em>“recorta todo lo que sobresalga”</em>.
  </p>

  <TipBox title="🧠 Idea mental (la más importante)">
    <p>
      Piensa en el contenedor como una <strong>ventana</strong> o un <strong>marco</strong>.
      Con <strong>overflow: hidden</strong> solo se ve lo que cabe dentro del marco.
      Todo lo que sobresale… <strong>desaparece</strong>.
    </p>
  </TipBox>

  <details className="dd" open>
    <summary>Qué problema resuelve overflow: hidden</summary>
    <div className="dd-body">
      <p>
        En diseño web es muy común que un elemento interno (imagen, badge, vídeo)
        sea más grande que su contenedor o tenga esquinas rectas.
      </p>

      <ul>
        <li>La imagen se “sale” del borde redondeado</li>
        <li>Un badge sobresale y rompe la forma</li>
        <li>Un hover con scale rompe la tarjeta</li>
      </ul>

      <p>
        <strong>overflow: hidden</strong> fuerza a que todo respete la forma del contenedor.
      </p>
    </div>
  </details>

  <details className="dd">
    <summary>Ejemplo típico: tarjeta con imagen</summary>
    <div className="dd-body">
      <p>
        Imagina una tarjeta con <strong>border-radius: 24px</strong> y una imagen dentro.
        Si <strong>NO</strong> usas overflow hidden:
      </p>

      <ul>
        <li>La tarjeta tiene esquinas redondeadas</li>
        <li>La imagen sigue siendo rectangular</li>
        <li>Resultado: la imagen “rompe” el diseño</li>
      </ul>

      <p>
        Al añadir <strong>overflow: hidden</strong> al contenedor:
      </p>

      <ul>
        <li>La imagen queda recortada</li>
        <li>Respeta el borde redondeado</li>
        <li>La tarjeta se ve limpia y profesional</li>
      </ul>

      <div className="callout tip">
        Regla profesional: <strong>border-radius + imagen = overflow: hidden</strong>
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Valores de overflow (para entender hidden)</summary>
    <div className="dd-body">
      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Valor</th>
              <th>Qué hace</th>
              <th>Uso habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">visible</th>
              <td>El contenido puede salirse</td>
              <td>Por defecto (rara vez es lo que quieres)</td>
            </tr>
            <tr>
              <th scope="row">hidden</th>
              <td>Recorta lo que sobresale</td>
              <td>Tarjetas, imágenes, bordes redondeados</td>
            </tr>
            <tr>
              <th scope="row">auto</th>
              <td>Añade scroll si hace falta</td>
              <td>Tablas grandes, código largo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Casos reales donde DEBES usar overflow: hidden</summary>
    <div className="dd-body">
      <ul>
        <li>Tarjetas con imagen superior</li>
        <li>Hero con imagen o vídeo de fondo</li>
        <li>Badges o etiquetas encima de imágenes</li>
        <li>Hover con <code>scale()</code></li>
        <li>Diseños con bordes redondeados</li>
      </ul>

      <WarningBox>
        <p>
          Si ves que “algo se sale” del contenedor y no entiendes por qué,
          el 80% de las veces falta <strong>overflow: hidden</strong>.
        </p>
      </WarningBox>
    </div>
  </details>

  <details className="dd">
    <summary>Cuándo NO usar overflow: hidden</summary>
    <div className="dd-body">
      <ul>
        <li>Cuando necesitas que algo sobresalga a propósito</li>
        <li>Cuando quieres que aparezca scroll</li>
        <li>En contenedores que deban mostrar todo el contenido</li>
      </ul>

      <div className="callout warn">
        Usarlo sin pensar puede “cortar” contenido importante.
        Siempre pregúntate: <em>¿quiero recortar o mostrar?</em>
      </div>
    </div>
  </details>

  <ActivityBox title="🧪 Mini-práctica (5 minutos)">
    <ol>
      <li>Crea una tarjeta con <strong>border-radius: 24px</strong>.</li>
      <li>Inserta una imagen dentro.</li>
      <li>Quita y pon <strong>overflow: hidden</strong> en el contenedor.</li>
      <li>Observa la diferencia (antes / después).</li>
    </ol>
  </ActivityBox>

  <TipBox title="✅ Resumen para recordar">
    <p>
      <strong>overflow: hidden</strong> = “todo lo que se salga, se recorta”.
      Si hay imagen + borde redondeado → es casi obligatorio.
    </p>
  </TipBox>
</section>
<section className="doc-section" id="overflow-opciones">
  <h2>Opciones de overflow: qué hace cada una y cuándo usarla</h2>

  <p>
    La propiedad <strong>overflow</strong> controla qué pasa cuando el contenido
    <strong>supera el tamaño del contenedor</strong>.
    No todas las opciones sirven para lo mismo y elegir mal puede romper el diseño o la experiencia.
  </p>

  <details className="dd" open>
    <summary>Resumen rápido (visión global)</summary>
    <div className="dd-body">
      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Valor</th>
              <th>Qué hace</th>
              <th>Uso típico</th>
              <th>Evítalo si…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">visible</th>
              <td>El contenido se muestra aunque se salga</td>
              <td>Overlays que deben sobresalir</td>
              <td>Quieres bordes limpios o radius respetado</td>
            </tr>
            <tr>
              <th scope="row">hidden</th>
              <td>Recorta todo lo que sobresale</td>
              <td>Tarjetas, imágenes, bordes redondeados</td>
              <td>El contenido puede ser más grande</td>
            </tr>
            <tr>
              <th scope="row">auto</th>
              <td>Añade scroll solo si hace falta</td>
              <td>Tablas, código, listas largas</td>
              <td>No quieres barras de scroll visibles</td>
            </tr>
            <tr>
              <th scope="row">scroll</th>
              <td>Fuerza scroll siempre</td>
              <td>Casos muy concretos</td>
              <td>Buscas diseño limpio (casi siempre)</td>
            </tr>
            <tr>
              <th scope="row">clip</th>
              <td>Recorta sin permitir scroll</td>
              <td>Diseños modernos (avanzado)</td>
              <td>Necesitas compatibilidad total</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <figure className="media">
  <img
    src="/imagenes/overflow-comparativa.png"
    alt="Comparativa visual de overflow: visible, hidden y auto en una tarjeta"
    loading="lazy"
  />
  <figcaption>
    Comparativa de <code>overflow</code>: visible (se sale), hidden (recorta) y auto (scroll si hace falta)
  </figcaption>
</figure>

  </details>

  <details className="dd">
    <summary>1) overflow: visible (valor por defecto)</summary>
    <div className="dd-body">
      <p>
        <strong>visible</strong> significa que el contenido puede salirse del contenedor.
        Es el comportamiento por defecto del navegador.
      </p>

      <ul>
        <li><strong>Ventaja:</strong> nada se corta.</li>
        <li><strong>Desventaja:</strong> rompe bordes, radius y layouts.</li>
      </ul>

      <p>
        En WordPress suele ser problemático porque:
      </p>
      <ul>
        <li>Las imágenes no respetan el borde redondeado</li>
        <li>Los hover con scale rompen tarjetas</li>
        <li>Los badges sobresalen sin control</li>
      </ul>

      <div className="callout warn">
        <strong>Conclusión:</strong> visible es el default, pero rara vez el correcto en tarjetas.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>2) overflow: hidden (el más usado)</summary>
    <div className="dd-body">
      <p>
        <strong>hidden</strong> recorta todo lo que se sale del contenedor.
        Es el valor estrella para diseño limpio.
      </p>

      <ul>
        <li>Hace que las imágenes respeten el <code>border-radius</code></li>
        <li>Evita que hover y badges rompan la caja</li>
        <li>Da sensación de orden y calidad</li>
      </ul>

      <TipBox title="Regla profesional">
        <p>
          Si algo se sale y no debería → prueba primero <strong>overflow: hidden</strong>.
        </p>
      </TipBox>
    </div>
  </details>

  <details className="dd">
    <summary>3) overflow: auto (scroll inteligente)</summary>
    <div className="dd-body">
      <p>
        <strong>auto</strong> muestra barras de scroll <em>solo si son necesarias</em>.
      </p>

      <ul>
        <li><strong>Útil para:</strong> tablas grandes, código, contenido largo</li>
        <li><strong>Ventaja:</strong> no rompe el layout</li>
        <li><strong>Desventaja:</strong> puede añadir scroll dentro de scroll</li>
      </ul>

      <div className="callout tip">
        En WordPress se usa mucho para:
        <strong>bloques de código</strong> y <strong>tablas en móvil</strong>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>4) overflow: scroll (scroll forzado)</summary>
    <div className="dd-body">
      <p>
        <strong>scroll</strong> fuerza la aparición de barras de scroll
        incluso cuando el contenido cabe.
      </p>

      <ul>
        <li><strong>Ventaja:</strong> comportamiento consistente</li>
        <li><strong>Gran desventaja:</strong> estética pobre</li>
      </ul>

      <WarningBox>
        <p>
          En diseño web moderno casi nunca se recomienda.
          Si necesitas scroll, normalmente <strong>auto</strong> es mejor opción.
        </p>
      </WarningBox>
    </div>
  </details>

  <details className="dd">
    <summary>5) overflow: clip (avanzado)</summary>
    <div className="dd-body">
      <p>
        <strong>clip</strong> es similar a hidden, pero <strong>no permite scroll ni desplazamiento</strong>.
      </p>

      <ul>
        <li>Recorta de forma más “dura”</li>
        <li>No crea contexto de scroll</li>
        <li>Es más moderno y específico</li>
      </ul>

      <div className="callout warn">
        En WordPress y Spectra aún no es habitual.
        Para enseñanza básica/profesional → <strong>hidden</strong>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>overflow-x y overflow-y (control fino)</summary>
    <div className="dd-body">
      <p>
        Puedes controlar el overflow por eje:
      </p>

      <ul>
        <li><code>overflow-x</code> → horizontal</li>
        <li><code>overflow-y</code> → vertical</li>
      </ul>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Ejemplo</th>
              <th>Qué hace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">overflow-x: hidden</th>
              <td>Evita scroll horizontal accidental</td>
            </tr>
            <tr>
              <th scope="row">overflow-y: auto</th>
              <td>Scroll vertical solo si hace falta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox title="Uso muy habitual">
        <p>
          En móviles es común usar <strong>overflow-x: hidden</strong> para evitar
          desplazamientos laterales indeseados.
        </p>
      </TipBox>
    </div>
  </details>

  <ActivityBox title="🧪 Mini-práctica comparativa (10 min)">
    <ol>
      <li>Crea una tarjeta con imagen y border-radius.</li>
      <li>Duplica la tarjeta 3 veces.</li>
      <li>Aplica: <code>visible</code>, <code>hidden</code> y <code>auto</code>.</li>
      <li>Compara el resultado visual y el comportamiento.</li>
    </ol>
  </ActivityBox>

  <TipBox title="✅ Resumen para que no se te olvide">
    <ul>
      <li><strong>visible</strong> → deja salir (default, poco usado)</li>
      <li><strong>hidden</strong> → recorta (tarjetas limpias)</li>
      <li><strong>auto</strong> → scroll solo si hace falta</li>
      <li><strong>scroll</strong> → scroll forzado (evitar)</li>
      <li><strong>clip</strong> → recorte moderno (avanzado)</li>
    </ul>
  </TipBox>
</section>
<section className="doc-section" id="overflow-tabla-resumen">
  <h2>Tabla resumen: overflow (qué elegir y por qué)</h2>

  <p>
    Esta tabla resume todas las opciones de <strong>overflow</strong> que se usan en diseño web real.
    Si dudas, vuelve aquí.
  </p>

  <div className="table-wrap" tabIndex={0}>
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Qué hace</th>
          <th>Cuándo usarlo</th>
          <th>Ejemplo típico en WordPress</th>
          <th>Conclusión</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">visible</th>
          <td>El contenido puede salirse del contenedor</td>
          <td>Cuando quieres que algo sobresalga a propósito</td>
          <td>Decoraciones que flotan fuera de una sección</td>
          <td>“Déjalo salir”</td>
        </tr>

        <tr>
          <th scope="row">hidden</th>
          <td>Recorta todo lo que se sale</td>
          <td>Tarjetas, imágenes con border-radius, hover con scale</td>
          <td>Cards con imagen superior y esquinas redondeadas</td>
          <td>“Recorta y ordena”</td>
        </tr>

        <tr>
          <th scope="row">auto</th>
          <td>Añade scroll solo si hace falta</td>
          <td>Contenido largo que no debe romper el layout</td>
          <td>Tablas grandes o bloques de código en móvil</td>
          <td>“Scroll inteligente”</td>
        </tr>

        <tr>
          <th scope="row">scroll</th>
          <td>Fuerza siempre la barra de scroll</td>
          <td>Casos muy específicos (raro)</td>
          <td>Prácticamente ninguno en diseño moderno</td>
          <td>“Scroll forzado (evitar)”</td>
        </tr>

        <tr>
          <th scope="row">clip</th>
          <td>Recorta sin permitir scroll</td>
          <td>Diseños avanzados y controlados</td>
          <td>Poco usado aún en WordPress</td>
          <td>“Hidden moderno”</td>
        </tr>

        <tr>
          <th scope="row">overflow-x / overflow-y</th>
          <td>Control por eje (horizontal / vertical)</td>
          <td>Evitar scroll lateral o controlar vertical</td>
          <td>overflow-x: hidden en móvil</td>
          <td>“Control fino”</td>
        </tr>
      </tbody>
    </table>
  </div>

  <TipBox title="🧠 Regla ultra-rápida">
    <ul>
      <li>Algo se sale y no debería → <strong>hidden</strong></li>
      <li>Contenido demasiado grande → <strong>auto</strong></li>
      <li>Debe sobresalir a propósito → <strong>visible</strong></li>
    </ul>
  </TipBox>

  <ActivityBox title="🧪 Mini-test rápido">
    <ol>
      <li>Una tarjeta con imagen redondeada → ¿qué overflow?</li>
      <li>Una tabla grande en móvil → ¿qué overflow?</li>
      <li>Un adorno que debe sobresalir → ¿qué overflow?</li>
    </ol>
  </ActivityBox>
</section>
<section className="doc-section" id="overflow-tabla-resumen">
  <h2>Tabla resumen: overflow (qué elegir y por qué)</h2>

  <p>
    Esta tabla resume todas las opciones de <strong>overflow</strong> que se usan en diseño web real.
    Si dudas, vuelve aquí.
  </p>

  <div className="table-wrap" tabIndex={0}>
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Qué hace</th>
          <th>Cuándo usarlo</th>
          <th>Ejemplo típico en WordPress</th>
          <th>Conclusión</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">visible</th>
          <td>El contenido puede salirse del contenedor</td>
          <td>Cuando quieres que algo sobresalga a propósito</td>
          <td>Decoraciones que flotan fuera de una sección</td>
          <td>“Déjalo salir”</td>
        </tr>

        <tr>
          <th scope="row">hidden</th>
          <td>Recorta todo lo que se sale</td>
          <td>Tarjetas, imágenes con border-radius, hover con scale</td>
          <td>Cards con imagen superior y esquinas redondeadas</td>
          <td>“Recorta y ordena”</td>
        </tr>

        <tr>
          <th scope="row">auto</th>
          <td>Añade scroll solo si hace falta</td>
          <td>Contenido largo que no debe romper el layout</td>
          <td>Tablas grandes o bloques de código en móvil</td>
          <td>“Scroll inteligente”</td>
        </tr>

        <tr>
          <th scope="row">scroll</th>
          <td>Fuerza siempre la barra de scroll</td>
          <td>Casos muy específicos (raro)</td>
          <td>Prácticamente ninguno en diseño moderno</td>
          <td>“Scroll forzado (evitar)”</td>
        </tr>

        <tr>
          <th scope="row">clip</th>
          <td>Recorta sin permitir scroll</td>
          <td>Diseños avanzados y controlados</td>
          <td>Poco usado aún en WordPress</td>
          <td>“Hidden moderno”</td>
        </tr>

        <tr>
          <th scope="row">overflow-x / overflow-y</th>
          <td>Control por eje (horizontal / vertical)</td>
          <td>Evitar scroll lateral o controlar vertical</td>
          <td>overflow-x: hidden en móvil</td>
          <td>“Control fino”</td>
        </tr>
      </tbody>
    </table>
  </div>

  <TipBox title="🧠 Regla ultra-rápida">
    <ul>
      <li>Algo se sale y no debería → <strong>hidden</strong></li>
      <li>Contenido demasiado grande → <strong>auto</strong></li>
      <li>Debe sobresalir a propósito → <strong>visible</strong></li>
    </ul>
  </TipBox>

  <ActivityBox title="🧪 Mini-test rápido">
    <ol>
      <li>Una tarjeta con imagen redondeada → ¿qué overflow?</li>
      <li>Una tabla grande en móvil → ¿qué overflow?</li>
      <li>Un adorno que debe sobresalir → ¿qué overflow?</li>
    </ol>
  </ActivityBox>
</section>

            </div>
          </details>

          <TipBox title="📌 Regla de oro ">
            <p>
              Si algo “se sale” del borde redondeado (imagen, badge, vídeo, etc.), casi siempre te falta
              <strong> overflow: hidden</strong> en el contenedor correcto.
            </p>
          </TipBox>
        </section>

        {/* 2) QUÉ ES */}
        <section className="doc-section" id="que-es">
          <h2>2) ¿Qué es un contenedor en Spectra?</h2>

          <details className="dd">
            <summary>Definición clara (sin tecnicismos)</summary>
            <div className="dd-body">
              <p>
                Un <strong>contenedor</strong> es un bloque que actúa como “caja madre”:
                controla <strong>tamaño</strong>, <strong>espaciado</strong>, <strong>fondo</strong>,
                <strong>bordes</strong>, <strong>layout</strong> (fila/columna), y <strong>responsive</strong>.
              </p>
              <p>
                En Spectra lo usarás para:
              </p>
              <ul>
                <li>Secciones (hero, features, testimonios)</li>
                <li>Tarjetas (cards) y listados de tarjetas (grid)</li>
                <li>Bandas de color (bloques de fondo)</li>
                <li>Layouts 2 columnas (imagen + texto)</li>
              </ul>
            </div>
            <section className="doc-section" id="unidades">
  <h2>Unidades de medida: px vs % vs vh</h2>

  <p>
    En Spectra puedes definir tamaños con distintas unidades. No es “mejor o peor”:
    cada una sirve para un efecto diferente. La pregunta correcta es:
    <strong> ¿quiero un tamaño fijo, relativo al contenedor o relativo a la pantalla?</strong>
  </p>

  <details className="dd" open>
    <summary>📌 Resumen rápido</summary>
    <div className="dd-body">
      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Unidad</th>
              <th>Se calcula respecto a…</th>
              <th>Cuándo usarla</th>
              <th>Evítala si…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">px</th>
              <td>Un tamaño fijo (píxeles)</td>
              <td>Detalles precisos: padding, border-radius, gaps, iconos</td>
              <td>Necesitas que se adapte mucho a pantallas distintas</td>
            </tr>
            <tr>
              <th scope="row">%</th>
              <td>El tamaño del contenedor padre</td>
              <td>Layouts fluidos: ancho al 100%, columnas proporcionales</td>
              <td>El padre no tiene tamaño claro (puede “no hacer nada”)</td>
            </tr>
            <tr>
              <th scope="row">vh</th>
              <td>La altura de la pantalla (viewport height)</td>
              <td>Hero/portada: “ocupar pantalla”, secciones con altura mínima</td>
              <td>El contenido es largo (puede forzar scroll raro)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>🧠 1) px (píxeles): control total y tamaño “fijo”</summary>
    <div className="dd-body">
      <p>
        <strong>px</strong> es una medida fija: 24px siempre serán 24px (aprox) en cualquier dispositivo.
        Es ideal para mantener consistencia en “micro-diseño”.
      </p>
      <ul>
        <li><strong>Úsalo en:</strong> padding (16–24px), border-radius (16–24px), gap (12–16px), sombras.</li>
        <li><strong>Ventaja:</strong> precisión y consistencia visual.</li>
        <li><strong>Riesgo:</strong> si te pasas con px en anchos/alturas, en móvil puede quedar grande o desbordar.</li>
      </ul>

      <div className="callout tip">
        Regla práctica: <strong>px para detalles</strong>, no para “ocupar la pantalla”.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>🧩 2) % (porcentaje): tamaño “relativo al padre”</summary>
    <div className="dd-body">
      <p>
        <strong>%</strong> significa “una parte del tamaño del contenedor padre”.
        Por ejemplo, <strong>width: 100%</strong> es “ocupa todo el ancho disponible”.
      </p>

      <ul>
        <li><strong>Úsalo en:</strong> anchos fluidos (100%), imágenes a borde, columnas (50%/50%).</li>
        <li><strong>Ventaja:</strong> responsive natural (se adapta).</li>
        <li>
          <strong>Riesgo:</strong> si el padre no tiene un tamaño claro, el % puede dar resultados raros
          (por ejemplo, alturas en % suelen fallar si el padre no tiene altura definida).
        </li>
      </ul>

      <div className="callout warn">
        Truco: <strong>% funciona mejor en ancho</strong>. Para alturas suele ser más fiable usar <strong>vh</strong>
        o “min-height” en vez de height en %.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>🖥️ 3) vh (viewport height): tamaño relativo a la altura de pantalla</summary>
    <div className="dd-body">
      <p>
        <strong>vh</strong> significa “porcentaje de la altura de la pantalla”.
        <strong>100vh</strong> = toda la altura visible. <strong>50vh</strong> = la mitad.
      </p>

      <ul>
        <li><strong>Úsalo en:</strong> <em>Minimum Height</em> para hero (60–90vh), secciones “portada”.</li>
        <li><strong>Ventaja:</strong> consigues el efecto “pantalla completa” sin depender del contenido.</li>
        <li><strong>Riesgo:</strong> si el contenido crece, la sección puede volverse alta y el scroll se siente raro.</li>
      </ul>

      <div className="callout tip">
        Consejo pro: para hero usa <strong>min-height</strong> (ej. 70vh) en vez de height,
        así si hay más texto, no se corta.
      </div>
    </div>
  </details>

  <ActivityBox title="🧪 Mini-ejercicio (5 min)">
    <ol>
      <li>
        En un contenedor “Hero”, pon <strong>Minimum Height: 70vh</strong>.
      </li>
      <li>
        Pon el ancho del contenedor a <strong>100%</strong> y añade padding interior en <strong>24px</strong>.
      </li>
      <li>
        Comprueba en móvil: si el hero se ve demasiado alto, baja a <strong>60vh</strong>.
      </li>
    </ol>
  </ActivityBox>

  <TipBox title="✅ Recomendación final (para que el alumno lo memorice)">
    <ul>
      <li><strong>px</strong> = detalles (espaciados, radios, gaps).</li>
      <li><strong>%</strong> = anchuras fluidas dentro del layout (100% muy habitual).</li>
      <li><strong>vh</strong> = secciones tipo hero/portada (altura relativa a pantalla).</li>
    </ul>
  </TipBox>
</section>

          </details>

          <PracticeBox title="🧠 Ejemplo mental (muy útil)">
            <p>
              Piensa que cada contenedor es como una <strong>carpeta</strong>. Dentro metes “archivos” (bloques).
              La carpeta decide el <strong>orden</strong>, el <strong>espacio</strong> y el <strong>aspecto</strong>.
            </p>
          </PracticeBox>
        </section>

        {/* 3) ANATOMÍA */}
        <section className="doc-section" id="anatomia">
          <h2>3) Anatomía: contenedor padre vs contenedor hijo</h2>

          <div className="two-columns">
            <div className="column">
              <h4>🧱 Contenedor padre</h4>
              <ul>
                <li>Marca el ancho (normal / full)</li>
                <li>Controla padding general</li>
                <li>Decide si es fila/columna</li>
                <li>Gestiona el responsive</li>
              </ul>
            </div>
            <div className="column">
              <h4>🧩 Contenedor hijo</h4>
              <ul>
                <li>Define piezas internas (media/body)</li>
                <li>Aplica fondos locales</li>
                <li>Alinea icono+texto (mini layouts)</li>
                <li>Hace “capas” (badges) con position</li>
              </ul>
            </div>
          </div>

          <PracticeBox title="🏗️ Estructura recomendada (plantilla universal)">
            <pre>
              <code>{`Contenedor PADRE (sección)
  ├─ Contenedor HIJO (columna izquierda)
  │   └─ Bloques (imagen / icono / etc.)
  └─ Contenedor HIJO (columna derecha)
      └─ Bloques (título / texto / botón)`}</code>
            </pre>
            <p>Esta plantilla te sirve para: hero, “sobre mí”, servicios, CTA, etc.</p>
          </PracticeBox>
        </section>
     
        {/* 4) PROPIEDADES */}
        <section className="doc-section" id="propiedades">
          <h2>4) Propiedades del contenedor (una a una)</h2>
          <p>
            Vamos a analizarlas como lo haría un profesional: <strong>qué significa</strong> +{" "}
            <strong>qué efecto produce</strong> + <strong>qué elegir</strong>.
          </p>

          {/* 4.1 ANCHO */}
          <details className="dd">
            <summary>4.1 Ancho y alineación</summary>
            <div className="dd-body">
              <p>
                Esta propiedad decide si el contenedor ocupa el ancho del contenido, el ancho del “sitio” (wrap)
                o el ancho completo (full).
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Opción</th>
                      <th>Qué significa</th>
                      <th>Úsalo cuando quieras…</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Contenido / Auto</th>
                      <td>Se adapta al contenido (no “rellena”)</td>
                      <td>Chips, badges, mini cajas, icono+texto</td>
                    </tr>
                    <tr>
                      <th scope="row">Ancho normal (centrado)</th>
                      <td>Respeta el ancho típico del tema (lectura cómoda)</td>
                      <td>Secciones de texto, bloques didácticos, artículos</td>
                    </tr>
                    <tr>
                      <th scope="row">Full width</th>
                      <td>Ocupa todo el ancho de la pantalla</td>
                      <td>Hero con fondo, franjas de color, separadores</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                Truco: para “full con contenido centrado”, usa <strong>padre full</strong> +{" "}
                <strong>hijo centrado</strong>.
              </div>
            </div>
          </details>
             {/* 4.6 OVERFLOW */}
          <details className="dd">
            <summary>4.2 Overflow: el superpoder que arregla “cosas que se salen”</summary>
            <div className="dd-body">
              <p>
                Controla qué pasa cuando el contenido supera los límites del contenedor (por ejemplo, imágenes
                con radius, badges superpuestos, sombras internas).
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Valor</th>
                      <th>Qué hace</th>
                      <th>Cuándo elegirlo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">visible</th>
                      <td>Deja que el contenido se salga. Por defecto</td>
                      <td>Overlays que quieras “fuera” (casos raros)</td>
                    </tr>
                    <tr>
                      <th scope="row">hidden</th>
                      <td>Recorta el contenido al borde</td>
                      <td>Tarjetas con imagen + radius (casi siempre)</td>
                    </tr>
                    <tr>
                      <th scope="row">auto</th>
                      <td>Aparece scroll si hace falta</td>
                      <td>Contenedores de tablas/código en móvil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* 4.2 PADDING */}
          <details className="dd">
            <summary>4.2 Padding y margin (espaciado)</summary>
            <div className="dd-body">
              <p>
                <strong>Padding</strong> = aire interno. <strong>Margin</strong> = separación externa.
                Es lo que hace que una web se vea “pro” o “apretada”.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Valor típico</th>
                      <th>Efecto</th>
                      <th>Cuándo elegirlo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">8–12px</th>
                      <td>Compacto</td>
                      <td>Badges, iconos, metadatos</td>
                    </tr>
                    <tr>
                      <th scope="row">16–24px</th>
                      <td>Cómodo</td>
                      <td>Tarjetas, cajas de contenido, bloques de texto</td>
                    </tr>
                    <tr>
                      <th scope="row">32–64px</th>
                      <td>Sección “respirable”</td>
                      <td>Hero, bandas, secciones principales</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <WarningBox>
                <p>
                  Si “no te deja” poner padding distinto por lado, suele ser porque está activado el candado (valores
                  vinculados) o estás editando el contenedor equivocado (padre vs hijo).
                </p>
              </WarningBox>
            </div>
          </details>

          {/* 4.3 BACKGROUND */}
          <details className="dd">
            <summary>4.3 Fondo: color, degradado, imagen y overlay</summary>
            <div className="dd-body">
              <p>
                El fondo define el “tono” de la sección. En Spectra suele incluir color/degradado/imagen y, a veces,
                overlay (una capa para oscurecer/teñir).
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Tipo de fondo</th>
                      <th>Qué aporta</th>
                      <th>Recomendación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Color sólido</th>
                      <td>Lectura clara y estable</td>
                      <td>Didáctico y profesional (el más seguro)</td>
                    </tr>
                    <tr>
                      <th scope="row">Degradado</th>
                      <td>Impacto visual sin imagen</td>
                      <td>Úsalo suave, con contraste AA en texto</td>
                    </tr>
                    <tr>
                      <th scope="row">Imagen</th>
                      <td>Emoción / branding</td>
                      <td>Siempre con overlay si hay texto encima</td>
                    </tr>
                    <tr>
                      <th scope="row">Overlay</th>
                      <td>Mejora legibilidad sobre imagen</td>
                      <td>Oscurece un poco, no “mate” la foto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout warn">
                Si el texto “desaparece” sobre una imagen, no es magia: falta overlay o falta contraste.
              </div>
            </div>
          </details>

          {/* 4.4 BORDER / RADIUS */}
          <details className="dd">
            <summary>4.4 Bordes y border-radius (forma)</summary>
            <div className="dd-body">
              <p>
                El <strong>border-radius</strong> determina si tu diseño se ve moderno (esquinas suaves) o “viejo” (recto).
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Valor</th>
                      <th>Look &amp; feel</th>
                      <th>Ideal para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">8px</th>
                      <td>Suave, discreto</td>
                      <td>Bloques de texto, cajas simples</td>
                    </tr>
                    <tr>
                      <th scope="row">16px</th>
                      <td>Moderno</td>
                      <td>Tarjetas, módulos, recursos</td>
                    </tr>
                    <tr>
                      <th scope="row">24px</th>
                      <td>Premium</td>
                      <td>Cards “top”, hero con fondo</td>
                    </tr>
                    <tr>
                      <th scope="row">999px</th>
                      <td>Píldora</td>
                      <td>Badges, chips, etiquetas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <TipBox title="📌 Conexión clave">
                <p>
                  Para que una imagen “respete” el radius del contenedor: <strong>overflow: hidden</strong> en el
                  contenedor que recorta.
                </p>
              </TipBox>
            </div>
          </details>

          {/* 4.5 SHADOW */}
          <details className="dd">
            <summary>4.5 Sombra (box-shadow): relieve profesional</summary>
            <div className="dd-body">
              <p>
                La sombra no es “decoración”: es jerarquía visual. Indica qué es clicable, qué es tarjeta y qué flota.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Efecto</th>
                      <th>Úsalo para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Sombra suave</th>
                      <td>Elegante, realista</td>
                      <td>Tarjetas premium, recursos, módulos</td>
                    </tr>
                    <tr>
                      <th scope="row">Sombra dura</th>
                      <td>“Pegatina”</td>
                      <td>Evitar salvo estética muy específica</td>
                    </tr>
                    <tr>
                      <th scope="row">Sin sombra</th>
                      <td>Plano</td>
                      <td>Secciones amplias con fondo ya diferenciado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

       

          {/* 4.7 LAYOUT */}
          <details className="dd">
            <summary>4.7 Layout interno: fila/columna, justify, align y gap</summary>
            <div className="dd-body">
              <p>
                Esta parte decide cómo se organizan los hijos del contenedor: en fila, en columna, centrados, separados,
                con huecos consistentes.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Ajuste</th>
                      <th>Qué provoca</th>
                      <th>Úsalo cuando…</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Row (fila)</th>
                      <td>Elementos uno al lado del otro</td>
                      <td>Icono + texto, metadatos, botones</td>
                    </tr>
                    <tr>
                      <th scope="row">Column (columna)</th>
                      <td>Elementos apilados</td>
                      <td>Tarjetas, bloques de texto, listas</td>
                    </tr>
                    <tr>
                      <th scope="row">Gap</th>
                      <td>Espacio uniforme entre hijos</td>
                      <td>Siempre que quieras orden limpio (mejor que margins sueltos)</td>
                    </tr>
                    <tr>
                      <th scope="row">Justify / Align</th>
                      <td>Distribución y alineación</td>
                      <td>Centrar, separar extremos, alinear verticalmente</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                Si el alumno dice “no se acercan”: revisa que está tocando <strong>gap</strong> del contenedor correcto
                y no padding/margin de los hijos.
              </div>
            </div>
          </details>

          {/* 4.8 POSITION */}
          <details className="dd">
            <summary>4.8 Capas: position, z-index y overlays (badge encima de imagen)</summary>
            <div className="dd-body">
              <p>
                Para superponer elementos (píldoras, etiquetas, iconos flotantes) necesitas un contenedor “referencia”
                y un elemento “superpuesto”.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Propiedad</th>
                      <th>Qué hace</th>
                      <th>Elección típica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">position: relative</th>
                      <td>Marca el “marco” donde se colocará lo absoluto</td>
                      <td>En el contenedor de imagen (wrapper)</td>
                    </tr>
                    <tr>
                      <th scope="row">position: absolute</th>
                      <td>Permite colocar encima con top/right/bottom/left</td>
                      <td>En el badge/píldora</td>
                    </tr>
                    <tr>
                      <th scope="row">z-index</th>
                      <td>Orden de capas</td>
                      <td>2–5 para overlays</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PracticeBox title="🧩 CSS mínimo (fiable) para overlay">
                <pre>
                  <code>{`.img-wrapper{ position: relative; }
.badge{ position: absolute; top: 12px; right: 12px; z-index: 3; }`}</code>
                </pre>
                <p>Clases: <code>img-wrapper</code> al contenedor de imagen y <code>badge</code> al badge.</p>
              </PracticeBox>

              <WarningBox>
                <p>
                  “Mostrar/ocultar” (condiciones) no crea capas. Capas = <strong>position</strong> + <strong>z-index</strong>.
                </p>
              </WarningBox>
            </div>
          </details>

          {/* 4.9 RESPONSIVE */}
          <details className="dd">
            <summary>4.9 Responsive: cómo decide el contenedor qué ocurre en móvil</summary>
            <div className="dd-body">
              <p>
                Lo profesional es que el contenedor “sepa” qué hacer al cambiar de pantalla: pasar de 2 columnas a 1,
                ajustar padding y reorganizar.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Decisión</th>
                      <th>Efecto</th>
                      <th>Recomendación docente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2 columnas → 1</th>
                      <td>Lectura fluida en móvil</td>
                      <td>Regla general: en móvil casi todo es 1 columna</td>
                    </tr>
                    <tr>
                      <th scope="row">Reducir padding</th>
                      <td>Evita sensación de “demasiado aire”</td>
                      <td>32–64px desktop → 16–24px móvil</td>
                    </tr>
                    <tr>
                      <th scope="row">Espaciado consistente</th>
                      <td>Orden visual</td>
                      <td>Usa gap antes que margins aleatorios</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </section>
           <section className="doc-section" id="practica-hero">
  <h2>Práctica guiada: Hero full-width con contenido centrado</h2>

  <p>
    En esta práctica vamos a construir el <strong>hero más usado en WordPress profesional</strong>:
    fondo a pantalla completa, pero texto legible y centrado.
  </p>

  <TipBox title="🎯 Objetivo de la práctica">
    <p>
      Entender y aplicar el patrón clave:
      <strong>contenedor padre full-width</strong> + <strong>contenedor hijo centrado</strong>.
      Este patrón aparece en el 80% de las webs reales.
    </p>
  </TipBox>

  <details className="dd" open>
    <summary>Paso 1 · Crear el contenedor PADRE (Hero)</summary>
    <div className="dd-body">
      <p>
        Este contenedor solo se encarga del <strong>fondo</strong> y de ocupar pantalla.
        No debe controlar el contenido interno.
      </p>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Valor recomendado</th>
              <th>Por qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Custom Width</th>
              <td>100%</td>
              <td>El fondo debe cubrir todo el ancho</td>
            </tr>
            <tr>
              <th scope="row">Minimum Height</th>
              <td>70vh</td>
              <td>Efecto “pantalla” sin cortar contenido</td>
            </tr>
            <tr>
              <th scope="row">Padding</th>
              <td>0</td>
              <td>El espaciado lo gestionará el hijo</td>
            </tr>
            <tr>
              <th scope="row">Fondo</th>
              <td>Color / degradado / imagen</td>
              <td>Impacto visual del hero</td>
            </tr>
          </tbody>
        </table>
      </div>

      <WarningBox>
        <p>
          <strong>Error típico:</strong> meter padding aquí.
          Resultado: el fondo ya no “respira” bien en los bordes.
        </p>
      </WarningBox>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 2 · Crear el contenedor HIJO (contenido centrado)</summary>
    <div className="dd-body">
      <p>
        Este contenedor controla la <strong>legibilidad</strong>:
        ancho cómodo, padding y alineación del texto.
      </p>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Valor recomendado</th>
              <th>Objetivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ancho</th>
              <td>Normal / contenido</td>
              <td>No estirar el texto</td>
            </tr>
            <tr>
              <th scope="row">Padding</th>
              <td>32–48px</td>
              <td>Aire interior cómodo</td>
            </tr>
            <tr>
              <th scope="row">Layout</th>
              <td>Column</td>
              <td>Texto apilado</td>
            </tr>
            <tr>
              <th scope="row">Align</th>
              <td>Center</td>
              <td>Hero equilibrado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox title="🧠 Idea clave">
        <p>
          El <strong>padre manda el fondo</strong>.
          El <strong>hijo manda el contenido</strong>.
          Nunca mezcles responsabilidades.
        </p>
      </TipBox>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 3 · Añadir el contenido del hero</summary>
    <div className="dd-body">
      <p>
        Dentro del contenedor hijo añade solo bloques de contenido:
      </p>

      <ul>
        <li><strong>Heading (H1)</strong> → título principal</li>
        <li><strong>Párrafo</strong> → texto introductorio</li>
        <li><strong>Botón</strong> → llamada a la acción</li>
      </ul>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Recomendación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">H1</th>
              <td>Claro, corto y legible (máx. 2 líneas)</td>
            </tr>
            <tr>
              <th scope="row">Texto</th>
              <td>16–18px, contraste alto</td>
            </tr>
            <tr>
              <th scope="row">Botón</th>
              <td>1 solo botón principal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <WarningBox>
        <p>
          <strong>Evita:</strong> meter demasiados botones o texto largo.
          El hero presenta, no explica todo.
        </p>
      </WarningBox>
    </div>
  </details>

  <details className="dd">
    <summary>Paso 4 · Ajuste responsive (clave)</summary>
    <div className="dd-body">
      <p>
        Un hero bonito en desktop puede ser un desastre en móvil si no se ajusta.
      </p>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>En móvil</th>
              <th>Ajuste recomendado</th>
              <th>Por qué</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Minimum Height</th>
              <td>60vh</td>
              <td>Evita scroll excesivo</td>
            </tr>
            <tr>
              <th scope="row">Padding</th>
              <td>16–24px</td>
              <td>Mejor uso del espacio</td>
            </tr>
            <tr>
              <th scope="row">Texto</th>
              <td>Centrado y legible</td>
              <td>Mejor jerarquía visual</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox title="📱 Regla práctica">
        <p>
          Si al abrir la web en móvil el hero “no se acaba nunca”,
          baja el <strong>vh</strong>.
        </p>
      </TipBox>
    </div>
  </details>

  <ActivityBox title="🧪 Actividad evaluable (15–20 min)">
    <ol>
      <li>Crea un hero con contenedor padre full-width.</li>
      <li>Añade un contenedor hijo centrado con título, texto y botón.</li>
      <li>Usa <strong>70vh</strong> en desktop y <strong>60vh</strong> en móvil.</li>
      <li>Cambia el fondo (color o degradado) y comprueba la legibilidad.</li>
    </ol>
  </ActivityBox>

  <PracticeBox title="✅ Checklist de corrección">
    <ul>
      <li>El fondo ocupa todo el ancho de pantalla.</li>
      <li>El texto no se estira demasiado.</li>
      <li>El hero se ve bien en desktop y móvil.</li>
      <li>Se usan correctamente <strong>%</strong>, <strong>vh</strong> y <strong>px</strong>.</li>
    </ul>
  </PracticeBox>

  <TipBox title="🧠 Lo importante que debes recordar">
    <p>
      Este patrón se repite constantemente:
      hero, banners, cabeceras de sección, CTA.
      Si lo dominas, <strong>ya sabes hacer layouts profesionales</strong>.
    </p>
  </TipBox>
</section>



        {/* 5) PATRONES */}
        <section className="doc-section" id="patrones">
          <h2>5) Patrones: cómo guardar contenedores para reutilizar</h2>

          <details className="dd">
            <summary>Patrón no sincronizado vs sincronizado (lo mínimo que deben saber)</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <strong>No sincronizado:</strong> guardas la estructura y luego cada copia se edita independiente.
                  (Ideal para tarjetas).
                </li>
                <li>
                  <strong>Sincronizado:</strong> si editas uno, cambian todos. (Ideal para CTA, aviso legal, etc.).
                </li>
              </ul>
              <div className="callout tip">
                Para aprender contenedores: usa <strong>no sincronizado</strong>. Así el alumno practica variaciones.
              </div>
            </div>
          </details>

          <ActivityBox title="🧾 Rutina profesional (paso a paso)">
            <ol>
              <li>Crea el contenedor “modelo” con padding, fondo, radius, sombra y layout.</li>
              <li>Duplica 2–3 veces para probar variantes.</li>
              <li>Cuando esté fino, guárdalo como patrón (no sincronizado).</li>
              <li>Ponle nombre “Sección · Cards · v1” para versionar.</li>
            </ol>
          </ActivityBox>
        </section>

        {/* 6) PRÁCTICA */}
        <section className="doc-section" id="practica">
          <h2>6) Práctica guiada: 3 contenedores = 3 efectos</h2>

          <ActivityBox title="🧪 Reto práctico (45–60 min)">
            <p>Vas a crear tres contenedores diferentes, cada uno con una intención:</p>
            <ol>
              <li>
                <strong>Contenedor A · “Tarjeta premium”</strong>: fondo blanco + radius 24 + sombra suave + overflow hidden.
              </li>
              <li>
                <strong>Contenedor B · “Banda/Sección”</strong>: full width + fondo degradado + padding grande + contenido centrado.
              </li>
              <li>
                <strong>Contenedor C · “Fila metadatos”</strong>: row + gap 12–16 + icono + texto + alineación vertical perfecta.
              </li>
            </ol>
          </ActivityBox>

          <PracticeBox title="✅ Criterios de evaluación (auto-check)">
            <ul>
              <li>He elegido el ancho (normal/full) de forma intencional, no por casualidad.</li>
              <li>Uso padding para aire interno y gap para separar elementos.</li>
              <li>La tarjeta recorta bien (overflow hidden) y no “se escapa” la imagen.</li>
              <li>Si hay badge encima, funciona con relative/absolute y z-index.</li>
              <li>En móvil, el layout no se rompe: 2 columnas pasan a 1 cuando procede.</li>
            </ul>
          </PracticeBox>
        </section>

        {/* 7) REPASO */}
        <section className="doc-section" id="repaso">
          <h2>7) Repaso y checklist final</h2>

          <TipBox title="🧠 Lo que te llevas de este módulo">
            <ul>
              <li><strong>Ancho</strong>: normal vs full (y cómo combinarlos)</li>
              <li><strong>Espaciado</strong>: padding/margin/gap con intención</li>
              <li><strong>Fondo</strong>: color, degradado, imagen + overlay</li>
              <li><strong>Forma</strong>: radius y bordes</li>
              <li><strong>Relieve</strong>: sombras con sentido</li>
              <li><strong>Recorte</strong>: overflow hidden como “arreglatodo”</li>
              <li><strong>Layout</strong>: row/column + align/justify</li>
              <li><strong>Capas</strong>: relative/absolute + z-index</li>
              <li><strong>Responsive</strong>: decisión consciente en móvil</li>
            </ul>
          </TipBox>

          <ActivityBox title="🧩 Mini-test (para clase)">
            <ol>
              <li>¿Qué propiedad usarías para que la imagen respete el borde redondeado?</li>
              <li>Si dos elementos no “se acercan”, ¿qué revisarías antes: gap o padding?</li>
              <li>¿Qué combinación necesitas para poner una píldora encima de una imagen?</li>
              <li>¿Cuándo tiene sentido usar “full width”?</li>
            </ol>
          </ActivityBox>
        </section>

        {/* CIERRE */}
        <div
          className="doc-hero"
          style={{ marginTop: "3rem", background: "linear-gradient(135deg, #d5e6dc, #6d78f4)" }}
        >
          <h3>🏁 Si dominas contenedores, dominas Spectra</h3>
          <p>
            A partir de aquí, todo es combinación: sección + contenedor hijo + layout + detalles.
            Si el alumno entiende estas tablas, ya no depende del “bloque de moda”.
          </p>
        </div>

        <TipBox title="🧾 Checklist final">
          <ul>
            <li>✅ Sé elegir ancho (normal / full) según objetivo</li>
            <li>✅ Uso padding para aire interno y gap para separar</li>
            <li>✅ Aplico radius + overflow hidden cuando hay imagen</li>
            <li>✅ Sé crear capas (relative/absolute/z-index)</li>
            <li>✅ Adapto a móvil (columnas → 1 y padding más pequeño)</li>
            <li>✅ Guardo como patrón no sincronizado para reutilizar</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#objetivo">
            Volver arriba ↥
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
