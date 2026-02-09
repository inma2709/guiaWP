import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function TemaContenedoresSpectraIndex() {
  return (
    <TopicLayout
      title="M · Contenedores Spectra (UAGB) · Fundamentos + Tarjeta PRO"
      subtitle="El contenedor como herramienta base: aprende qué significa cada ajuste y cuál elegir según el efecto"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Micro-módulo</div>
          <h1>Contenedores Spectra: elegir bien cada propiedad</h1>
          <p className="doc-lead">
            El <strong>contenedor</strong> es tu bloque principal en Gutenberg + Spectra.
            Si entiendes sus propiedades, puedes construir <strong>secciones</strong>, <strong>tarjetas</strong>,
            <strong>grids</strong> y <strong>layouts</strong> de forma controlada y profesional.
          </p>
        </div>

        {/* INDEX PRINCIPAL */}
        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#objetivo">Objetivo + regla de oro</a></li>
            <li><a href="#fundamentos">Fundamentos (submenú)</a></li>
            <li><a href="#propiedades">Propiedades del contenedor (con mini-tablas)</a></li>
            <li><a href="#patrones">Patrones: guardar y reutilizar contenedores</a></li>
            <li><a href="#tarjeta-pro">Ejemplo final: Tarjeta PRO (paso a paso)</a></li>
            <li><a href="#repaso">Repaso + checklist + mini-test</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Que el alumno pueda responder siempre a esto:
            <strong> “Si quiero X efecto, ¿qué propiedad toco y qué valor elijo?”</strong>
          </p>          <p>
            🔧 <strong>Conexión práctica:</strong> Para ver estos fundamentos aplicados paso a paso
            en una construcción real, revisa el <strong>M16 · Sección 'Consejos rápidos'</strong>
            donde construimos secciones completas usando estos principios.
          </p>        </TipBox>

        <WarningBox>
          <p>
            <strong>⚠️ Error típico:</strong> construir la página con bloques sueltos sin una “caja madre”.
            Resultado: espaciados inconsistentes, layouts rotos y dependencia del tema.
          </p>
        </WarningBox>

        {/* 1) OBJETIVO */}
        <section className="doc-section" id="objetivo">
          <h2>1) Regla de oro: caja → contenido → comportamiento</h2>

          <details className="dd">
            <summary>La mentalidad correcta (para no ir a ciegas)</summary>
            <div className="dd-body">
              <ol>
                <li>
                  <strong>Caja:</strong> ancho, padding, fondo, bordes, sombra.
                </li>
                <li>
                  <strong>Contenido:</strong> imagen, título, texto, botones.
                </li>
                <li>
                  <strong>Comportamiento:</strong> columnas, responsive, hover, overflow, capas.
                </li>
              </ol>

              <div className="callout tip">
                Si el alumno sigue este orden, deja de “probar cosas” y empieza a <strong>diseñar</strong>.
              </div>
            </div>
          </details>

          <TipBox title="📌 Regla memorizable">
            <p>
              Si algo no respeta un borde redondeado (imagen/badge): casi siempre necesitas{" "}
              <strong>overflow: hidden</strong> en el contenedor correcto.
            </p>
          </TipBox>
        </section>

        {/* 2) FUNDAMENTOS SUBMENÚ */}
        <section className="doc-section" id="fundamentos">
          <h2>2) Fundamentos</h2>
          <p>
            Este submenú es tu “panel de control”: enlaza a todas las decisiones habituales en contenedores.
          </p>

          <details className="dd" open>
            <summary>Submenú · Fundamentos (propiedades + práctica)</summary>
            <div className="dd-body">
              <div className="two-columns">
                <div className="column">
                  <h4>Propiedades</h4>
                  <ul>
                    <li><a href="#ancho">Ancho y alineación</a></li>
                    <li><a href="#espaciado">Padding y margin</a></li>
                    <li><a href="#fondo">Fondo (color/degradado/imagen)</a></li>
                    <li><a href="#bordes">Bordes y border-radius</a></li>
                    <li><a href="#sombra">Sombra (box-shadow)</a></li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Comportamiento</h4>
                  <ul>
                    <li><a href="#overflow">Overflow</a></li>
                    <li><a href="#layout">Layout (row/column + gap)</a></li>
                    <li><a href="#capas">Capas (position + z-index)</a></li>
                    <li><a href="#responsive">Responsive</a></li>
                    <li><a href="#tarjeta-pro">Ejemplo final: Tarjeta PRO</a></li>
                  </ul>
                </div>
              </div>

              <div className="callout tip">
                Sugerencia docente: en clase, “pasamos lista” por este submenú y cada alumno explica 1 propiedad en 30s.
              </div>
            </div>
          </details>
        </section>

        {/* 3) PROPIEDADES */}
        <section className="doc-section" id="propiedades">
          <h2>3) Propiedades del contenedor (una a una)</h2>
          <p>
            Cada bloque tiene: <strong>qué significa</strong> + <strong>qué elegir</strong> +{" "}
            <strong>por qué</strong>.
          </p>

          {/* 3.1 ANCHO */}
          <section className="doc-section" id="ancho">
            <h3>3.1 Ancho y alineación</h3>

            <details className="dd">
              <summary>Qué controla exactamente</summary>
              <div className="dd-body">
                <p>
                  Define si el contenedor ocupa el ancho del contenido, el ancho “normal” del sitio o el ancho
                  completo de pantalla (full).
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
                        <th scope="row">Auto / contenido</th>
                        <td>La caja se adapta al contenido</td>
                        <td>Badges, chips, mini-cajas, icono+texto</td>
                      </tr>
                      <tr>
                        <th scope="row">Normal (centrado)</th>
                        <td>Respeta el ancho legible del tema</td>
                        <td>Secciones de lectura y contenido educativo</td>
                      </tr>
                      <tr>
                        <th scope="row">Full width</th>
                        <td>Ocupa todo el ancho de la pantalla</td>
                        <td>Hero con fondo, bandas, separadores</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TipBox title="Truco pro">
                  <p>
                    “Full con contenido centrado” = <strong>padre full</strong> + <strong>hijo normal</strong>.
                    Así el fondo cubre, pero el texto no se estira demasiado.
                  </p>
                </TipBox>
              </div>
            </details>
          </section>

          {/* 3.2 ESPACIADO */}
          <section className="doc-section" id="espaciado">
            <h3>3.2 Padding y margin</h3>

            <details className="dd">
              <summary>Cómo elegir valores sin adivinar</summary>
              <div className="dd-body">
                <p>
                  <strong>Padding</strong> = aire interno. <strong>Margin</strong> = separación externa.
                  El espaciado es el 50% de que algo se vea “premium”.
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
                        <td>Tarjetas, cajas de texto, recursos</td>
                      </tr>
                      <tr>
                        <th scope="row">32–64px</th>
                        <td>Sección amplia</td>
                        <td>Hero, bloques principales, bandas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <WarningBox>
                  <p>
                    Si “todo cambia a la vez”, revisa si tienes los valores vinculados (candado) o si estás editando
                    el contenedor padre en lugar del hijo.
                  </p>
                </WarningBox>
              </div>
            </details>
          </section>

          {/* 3.3 FONDO */}
          <section className="doc-section" id="fondo">
            <h3>3.3 Fondo: color, degradado, imagen y overlay</h3>

            <details className="dd">
              <summary>Qué elegir según el efecto visual</summary>
              <div className="dd-body">
                <div className="table-wrap" tabIndex={0}>
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Tipo</th>
                        <th>Qué aporta</th>
                        <th>Mejor uso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Color sólido</th>
                        <td>Claridad y estabilidad</td>
                        <td>Didáctico y profesional (la opción segura)</td>
                      </tr>
                      <tr>
                        <th scope="row">Degradado</th>
                        <td>Impacto sin foto</td>
                        <td>Hero, CTA, banners (suave y con contraste)</td>
                      </tr>
                      <tr>
                        <th scope="row">Imagen</th>
                        <td>Emoción y marca</td>
                        <td>Hero o secciones clave (siempre con overlay si hay texto)</td>
                      </tr>
                      <tr>
                        <th scope="row">Overlay</th>
                        <td>Legibilidad sobre foto</td>
                        <td>Texto encima de imagen (obligatorio casi siempre)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout warn">
                  Si el texto “no se lee” sobre imagen, no es un fallo raro: falta overlay o falta contraste.
                </div>
              </div>
            </details>
          </section>

          {/* 3.4 BORDES */}
          <section className="doc-section" id="bordes">
            <h3>3.4 Bordes y border-radius</h3>

            <details className="dd">
              <summary>Valores típicos y efecto “moderno”</summary>
              <div className="dd-body">
                <div className="table-wrap" tabIndex={0}>
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Valor</th>
                        <th>Look</th>
                        <th>Ideal para</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">8px</th>
                        <td>Suave</td>
                        <td>Cajas simples, módulos discretos</td>
                      </tr>
                      <tr>
                        <th scope="row">16px</th>
                        <td>Moderno</td>
                        <td>Tarjetas, bloques de contenido</td>
                      </tr>
                      <tr>
                        <th scope="row">24px</th>
                        <td>Premium</td>
                        <td>Cards protagonistas, recursos top</td>
                      </tr>
                      <tr>
                        <th scope="row">999px</th>
                        <td>Píldora</td>
                        <td>Badges, chips, etiquetas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TipBox title="Conexión importante">
                  <p>
                    Radius + imagen: si no hay <strong>overflow: hidden</strong>, la imagen “rompe” la forma.
                  </p>
                </TipBox>
              </div>
            </details>
          </section>

          {/* 3.5 SOMBRA */}
          <section className="doc-section" id="sombra">
            <h3>3.5 Sombra (box-shadow)</h3>

            <details className="dd">
              <summary>Cómo decidir si usar sombra o no</summary>
              <div className="dd-body">
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
                        <td>Elegante y realista</td>
                        <td>Tarjetas premium, recursos, módulos</td>
                      </tr>
                      <tr>
                        <th scope="row">Sombra dura</th>
                        <td>“Pegatina”</td>
                        <td>Evitar salvo estética muy marcada</td>
                      </tr>
                      <tr>
                        <th scope="row">Sin sombra</th>
                        <td>Plano</td>
                        <td>Secciones grandes con fondo diferenciado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout tip">
                  Si hay “muchas sombras”, la web se vuelve ruidosa. Mejor pocas y consistentes.
                </div>
              </div>
            </details>
          </section>

          {/* 3.6 OVERFLOW */}
          <section className="doc-section" id="overflow">
            <h3>3.6 Overflow</h3>

            <details className="dd">
              <summary>El ajuste que arregla el 80% de “se sale”</summary>
              <div className="dd-body">
                <div className="table-wrap" tabIndex={0}>
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Valor</th>
                        <th>Qué hace</th>
                        <th>Cuándo usarlo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">visible</th>
                        <td>Deja salir el contenido</td>
                        <td>Overlays que quieras fuera (casos raros)</td>
                      </tr>
                      <tr>
                        <th scope="row">hidden</th>
                        <td>Recorta al borde del contenedor</td>
                        <td>Tarjetas con imagen + radius (casi siempre)</td>
                      </tr>
                      <tr>
                        <th scope="row">auto</th>
                        <td>Scroll si hace falta</td>
                        <td>Tablas/código en móvil o contenido largo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </section>

          {/* 3.7 LAYOUT */}
          <section className="doc-section" id="layout">
            <h3>3.7 Layout interno: row/column + gap</h3>

            <details className="dd">
              <summary>Cómo alinear elementos sin pelearte</summary>
              <div className="dd-body">
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
                        <td>Elementos en línea</td>
                        <td>Icono + texto, metadatos, botones</td>
                      </tr>
                      <tr>
                        <th scope="row">Column (columna)</th>
                        <td>Elementos apilados</td>
                        <td>Tarjetas, secciones, bloques de lectura</td>
                      </tr>
                      <tr>
                        <th scope="row">Gap</th>
                        <td>Espacio uniforme entre hijos</td>
                        <td>Mejor que margin suelto (más consistente)</td>
                      </tr>
                      <tr>
                        <th scope="row">Justify / Align</th>
                        <td>Distribuye y alinea</td>
                        <td>Centrar, separar extremos, alinear vertical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <TipBox title="Regla práctica">
                  <p>
                    Si la separación “no obedece”: primero revisa <strong>gap</strong> del contenedor correcto.
                    Luego ya miras padding/margin.
                  </p>
                </TipBox>
              </div>
            </details>
          </section>

          {/* 3.8 CAPAS */}
          <section className="doc-section" id="capas">
            <h3>3.8 Capas: position + z-index</h3>

            <details className="dd">
              <summary>Cómo poner una píldora encima de una imagen</summary>
              <div className="dd-body">
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
                        <td>Marca el marco del absoluto</td>
                        <td>En el wrapper de imagen</td>
                      </tr>
                      <tr>
                        <th scope="row">position: absolute</th>
                        <td>Se coloca encima con top/right</td>
                        <td>En la píldora/badge</td>
                      </tr>
                      <tr>
                        <th scope="row">z-index</th>
                        <td>Orden de capas</td>
                        <td>2–5 para overlays</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <PracticeBox title="🧩 CSS mínimo (cuando el editor no llega)">
                  <pre>
                    <code>{`.img-wrapper{ position: relative; }
.badge{ position: absolute; top: 12px; right: 12px; z-index: 3; }`}</code>
                  </pre>
                  <p>
                    Pon la clase <code>img-wrapper</code> al contenedor de imagen y <code>badge</code> a la píldora.
                  </p>
                </PracticeBox>
              </div>
            </details>
          </section>

          {/* 3.9 RESPONSIVE */}
          <section className="doc-section" id="responsive">
            <h3>3.9 Responsive</h3>

            <details className="dd">
              <summary>Decisiones que evitan que “se rompa” en móvil</summary>
              <div className="dd-body">
                <div className="table-wrap" tabIndex={0}>
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Decisión</th>
                        <th>Efecto</th>
                        <th>Recomendación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">2 columnas → 1</th>
                        <td>Lectura cómoda</td>
                        <td>En móvil casi todo va en una columna</td>
                      </tr>
                      <tr>
                        <th scope="row">Reducir padding</th>
                        <td>Evita “demasiado aire”</td>
                        <td>32–64px desktop → 16–24px móvil</td>
                      </tr>
                      <tr>
                        <th scope="row">Usar gap consistente</th>
                        <td>Orden visual</td>
                        <td>Gap antes que márgenes aleatorios</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </section>
        </section>

        {/* 4) PATRONES */}
        <section className="doc-section" id="patrones">
          <h2>4) Patrones: guardar y reutilizar contenedores</h2>

          <details className="dd">
            <summary>No sincronizado vs sincronizado (lo justo y necesario)</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <strong>No sincronizado:</strong> cada copia se edita independiente (ideal para tarjetas).
                </li>
                <li>
                  <strong>Sincronizado:</strong> si cambias uno, cambian todos (ideal para CTA o avisos).
                </li>
              </ul>
              <div className="callout tip">
                Para aprender contenedores y practicar variantes: usa <strong>no sincronizado</strong>.
              </div>
            </div>
          </details>

          <ActivityBox title="🧾 Rutina profesional (paso a paso)">
            <ol>
              <li>Crea el contenedor “modelo” con propiedades completas.</li>
              <li>Duplica 2–3 veces para probar variantes.</li>
              <li>Cuando esté perfecto, guárdalo como patrón no sincronizado.</li>
              <li>Nómbralo con versión: “Tarjeta PRO · v1”.</li>
            </ol>
          </ActivityBox>
        </section>

        {/* 5) EJEMPLO FINAL: TARJETA PRO */}
        <section className="doc-section" id="tarjeta-pro">
          <h2>5) Ejemplo final: construir una Tarjeta PRO</h2>

          <TipBox title="🎯 Qué vamos a conseguir">
            <p>
              Una tarjeta con: <strong>imagen pegada</strong>, <strong>píldora encima</strong>,{" "}
              <strong>contenido con padding</strong>, <strong>metadatos con iconos</strong>,{" "}
              <strong>sombra premium</strong> y <strong>hover suave</strong>.
            </p>
          </TipBox>

          <details className="dd" open>
            <summary>Paso 1 · Contenedor raíz (la tarjeta)</summary>
            <div className="dd-body">
              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Ajuste</th>
                      <th>Valor recomendado</th>
                      <th>Por qué</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Fondo</th>
                      <td>Blanco</td>
                      <td>Tarjeta limpia, legible</td>
                    </tr>
                    <tr>
                      <th scope="row">Border-radius</th>
                      <td>24px</td>
                      <td>Look premium</td>
                    </tr>
                    <tr>
                      <th scope="row">Overflow</th>
                      <td>hidden</td>
                      <td>Recorta imagen y respeta el radio</td>
                    </tr>
                    <tr>
                      <th scope="row">Sombra</th>
                      <td>Suave</td>
                      <td>Relieve sin ruido</td>
                    </tr>
                    <tr>
                      <th scope="row">Padding</th>
                      <td>0</td>
                      <td>La imagen debe ir pegada arriba</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <WarningBox>
                <p>
                  Si pones padding al contenedor raíz, la imagen ya no irá “pegada”.
                  La solución profesional es: <strong>padding 0 en raíz</strong> y padding en el contenedor body.
                </p>
              </WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 2 · Contenedor “media” (imagen + píldora encima)</summary>
            <div className="dd-body">
              <p>
                Dentro de la tarjeta, crea un contenedor para la imagen. Ahí es donde normalmente hacemos la capa.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Ajuste</th>
                      <th>Valor recomendado</th>
                      <th>Objetivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Padding</th>
                      <td>0</td>
                      <td>Imagen a borde</td>
                    </tr>
                    <tr>
                      <th scope="row">position</th>
                      <td>relative (si usas CSS)</td>
                      <td>Marco para el badge absolute</td>
                    </tr>
                    <tr>
                      <th scope="row">Imagen</th>
                      <td>100% ancho</td>
                      <td>Que cubra la tarjeta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PracticeBox title="Estructura recomendada (bloques)">
                <pre>
                  <code>{`Contenedor tarjeta (card)
  ├─ Contenedor media (img-wrapper)
  │   ├─ Imagen
  │   └─ Badge/Píldora (badge)
  └─ Contenedor body (content)
      ├─ Título (Heading)
      ├─ Metadatos (row)
      └─ Descripción (párrafo)`}</code>
                </pre>
              </PracticeBox>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 3 · Contenedor “body” (contenido con padding)</summary>
            <div className="dd-body">
              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Ajuste</th>
                      <th>Valor recomendado</th>
                      <th>Por qué</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Padding</th>
                      <td>16–24px</td>
                      <td>Lectura cómoda</td>
                    </tr>
                    <tr>
                      <th scope="row">Layout</th>
                      <td>Column</td>
                      <td>Texto apilado</td>
                    </tr>
                    <tr>
                      <th scope="row">Gap</th>
                      <td>8–12px</td>
                      <td>Separación uniforme</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <TipBox title="Detalle pro">
                <p>
                  La tarjeta “se ve cara” cuando el body tiene padding consistente y el gap está bien medido.
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 4 · Metadatos con iconos (fila perfecta)</summary>
            <div className="dd-body">
              <p>Los metadatos no son una lista. Son una mini UI: icono + texto alineado con flex.</p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Ajuste</th>
                      <th>Valor recomendado</th>
                      <th>Objetivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Layout</th>
                      <td>Row</td>
                      <td>Icono y texto en línea</td>
                    </tr>
                    <tr>
                      <th scope="row">Gap</th>
                      <td>12–16px</td>
                      <td>Separación limpia</td>
                    </tr>
                    <tr>
                      <th scope="row">Align</th>
                      <td>Center</td>
                      <td>Que el icono no “baile”</td>
                    </tr>
                    <tr>
                      <th scope="row">Texto</th>
                      <td>13–14px</td>
                      <td>Estilo “metadata”</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 5 · Hover premium (opcional con CSS)</summary>
            <div className="dd-body">
              <p>
                En muchos casos el editor no te dará el hover perfecto. Si quieres “nivel pro”, usa una clase.
              </p>

              <PracticeBox title="CSS recomendado (tarjeta premium + hover)">
                <pre>
                  <code>{`.card{
  background:#fff;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 10px 25px rgba(0,0,0,.08);
  transform:translateY(0) scale(1);
  transition:transform .25s ease, box-shadow .25s ease;
}
.card:hover{
  transform:translateY(-4px) scale(1.02);
  box-shadow:0 16px 35px rgba(0,0,0,.12);
}`}</code>
                </pre>
                <p>Asigna la clase <code>card</code> al contenedor raíz de la tarjeta.</p>
              </PracticeBox>

              <TipBox title="♿ Accesibilidad">
                <p>
                  Si aplicas animaciones, respeta <code>prefers-reduced-motion</code> en tu CSS global
                  (reduce transform/transition).
                </p>
              </TipBox>
            </div>
          </details>

          <ActivityBox title="🧪 Actividad evaluable (10–15 min)">
            <ol>
              <li>Crea 1 Tarjeta PRO con la estructura completa.</li>
              <li>Duplica 2 veces y crea 3 variantes: “Fácil”, “Moderada”, “Difícil”.</li>
              <li>Cambia imagen, título, metadatos y color del badge.</li>
              <li>Guárdalo como <strong>patrón no sincronizado</strong>.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="✅ Rúbrica rápida (auto-check)">
            <ul>
              <li>La imagen está pegada a borde y respeta el radio.</li>
              <li>El badge queda encima, bien colocado y legible.</li>
              <li>El body tiene padding coherente y gap consistente.</li>
              <li>Los metadatos están alineados con row + align center.</li>
              <li>En móvil no se rompe (se ve bien en una columna).</li>
            </ul>
          </PracticeBox>
        </section>

        {/* 6) REPASO */}
        <section className="doc-section" id="repaso">
          <h2>6) Repaso + checklist + mini-test</h2>

          <TipBox title="🧠 Resumen ultra útil (lo que deben memorizar)">
            <ul>
              <li><strong>Full width</strong> = fondo a pantalla completa (mejor con hijo centrado)</li>
              <li><strong>Padding</strong> crea “calidad” (aire) · <strong>Gap</strong> crea orden</li>
              <li><strong>Radius + overflow hidden</strong> = tarjeta perfecta con imagen</li>
              <li><strong>Row + align center</strong> = icono+texto que no baila</li>
              <li><strong>Relative + absolute + z-index</strong> = capas (badge encima)</li>
            </ul>
          </TipBox>

          <ActivityBox title="🧩 Mini-test (para clase o Moodle)">
            <ol>
              <li>¿Qué propiedad recorta una imagen para que respete el borde redondeado?</li>
              <li>Si dos elementos no se separan como esperas, ¿qué revisas primero?</li>
              <li>¿Qué combinación necesitas para poner una píldora encima de una imagen?</li>
              <li>¿Cuándo usarías “full width” en vez de “normal”?</li>
            </ol>
          </ActivityBox>

          <TipBox title="🧾 Checklist final">
            <ul>
              <li>✅ Sé elegir el ancho según el efecto (normal/full)</li>
              <li>✅ Diferencio padding (interno) y margin (externo)</li>
              <li>✅ Uso gap para separación consistente</li>
              <li>✅ Combino radius + overflow hidden cuando hay imagen</li>
              <li>✅ Sé crear capas con position + z-index</li>
              <li>✅ Ajusto el responsive con intención</li>
              <li>✅ Guardo como patrón no sincronizado</li>
            </ul>
          </TipBox>
        </section>

        {/* CIERRE */}
        <div
          className="doc-hero"
          style={{ marginTop: "3rem", background: "linear-gradient(135deg, #13aa52, #16c264)" }}
        >
          <h3>🏁 Dominar contenedores = dominar Spectra</h3>
          <p>
            Si el alumno domina este módulo y construye la Tarjeta PRO, tiene los <strong>fundamentos teóricos</strong>:
            ya no depende de "bloques mágicos", puede diseñar con intención.
          </p>
          <p>
            🔧 <strong>Próximo paso:</strong> Aplica estos fundamentos construyendo la sección completa del M16.
          </p>
        </div>

        <div className="doc-next">
          <a className="btn btn-primary" href="#fundamentos">
            Ir al submenú de Fundamentos →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
