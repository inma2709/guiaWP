import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function SeccionConsejosRapidosIndex() {
  return (
    <TopicLayout
      title="Micro · Sección 'Consejos rápidos'"
      subtitle="Practica contenedores, columnas, listas con iconos y diseño de tarjetas reutilizables"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Sección práctica</div>
          <h1>Consejos rápidos</h1>
          <p className="doc-lead">
            Vamos a construir una sección sencilla (pero muy potente) para practicar{" "}
            <strong>contenedores</strong>, <strong>columnas</strong>, <strong>flex</strong>,{" "}
            <strong>espaciados</strong>, <strong>border-radius</strong>, <strong>overflow</strong> y{" "}
            <strong>sombra</strong>. Es un “laboratorio” perfecto para entender cómo se diseña una web real.
          </p>
        </div>

        {/* INDEX */}
        <div className="doc-index">
          <h2>Contenido</h2>
          <ol>
            <li>
              <a href="#resultado">Resultado final y objetivos</a>
            </li>
            <li>
              <a href="#esquema">Esquema de contenedores</a>
            </li>
            <li>
              <a href="#paso-a-paso">Construcción paso a paso</a>
            </li>
            <li>
              <a href="#propiedades">Propiedades que entrenamos</a>
            </li>
            <li>
              <a href="#ejercicio">Ejercicio guiado</a>
            </li>
            <li>
              <a href="#checklist">Checklist final</a>
            </li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo didáctico">
          <p>
            Crear una sección de 2 columnas con 2 tarjetas (cada una con su título) y dentro una lista de
            “mini-items” con icono + texto. Todo con una estética limpia: fondo suave, tarjetas blancas,
            esquinas redondeadas, y elementos con padding y bordes suaves.
          </p>          <p>
            💡 <strong>Conexión con M14:</strong> Para entender en detalle cada propiedad de contenedores
            (padding, border-radius, overflow, etc.), consulta el <strong>M14 · Contenedores Spectra</strong>
            donde se explican los fundamentos teóricos con tablas y ejemplos.
          </p>        </TipBox>

        <WarningBox>
          <p>
            <strong>⚠️ Error típico:</strong> intentar hacerlo con un bloque de lista (List) y pelear con
            la viñeta/flecha. Para este diseño, lo correcto es pensar en{" "}
            <strong>contenedores repetibles</strong> (cada item es una mini-tarjeta), no en una lista clásica.
          </p>
        </WarningBox>

        {/* RESULTADO */}
        <section className="doc-section" id="resultado">
          <h2>1) Resultado final y objetivos</h2>
          <p>
            La sección “Consejos rápidos” se compone de:
          </p>
          <ul>
            <li>
              Un <strong>título</strong> (“Consejos rápidos”) y un <strong>texto introductorio</strong>.
            </li>
            <li>
              Un <strong>layout en 2 columnas</strong> (en escritorio) que se convierte en 1 columna (en móvil).
            </li>
            <li>
              Dos <strong>tarjetas grandes</strong> (“Antes de salir” y “Durante la ruta”).
            </li>
            <li>
              Dentro de cada tarjeta: varios <strong>items</strong> con icono + texto, cada uno con su fondo suave.
            </li>
          </ul>

          <TipBox title="🧠 Idea clave">
            <p>
              Este tipo de sección aparece en webs profesionales como: checklist, ventajas, requisitos,
              recursos, “lo que incluye”, “antes/después”… Si dominas esta estructura, podrás reutilizarla
              en muchísimas páginas.
            </p>
          </TipBox>
        </section>

        {/* ESQUEMA */}
        <section className="doc-section" id="esquema">
          <h2>2) Esquema de contenedores</h2>
          <p>
            Antes de tocar estilos, necesitas ver la estructura como un árbol. Este esquema te ayuda a
            seleccionar bien cada contenedor y entender dónde aplicar padding, sombra, radios, etc.
          </p>

          <PracticeBox title="🌳 Árbol de contenedores (estructura recomendada)">
            <pre className="code-example">
              <code>{`Sección (wrapper)
├─ Heading H2 (título)
├─ Párrafo (intro)
└─ Grid/Columnas (2 columnas)
   ├─ Card (tarjeta izquierda)
   │  ├─ Heading H3 (título tarjeta)
   │  └─ List (lista de items)  ← NO es ul “clásica”, son contenedores repetidos
   │     ├─ Item (mini-tarjeta)
   │     │  ├─ Icono (emoji o icono)
   │     │  └─ Texto
   │     ├─ Item
   │     ├─ Item
   │     └─ Item
   └─ Card (tarjeta derecha)
      ├─ Heading H3 (título tarjeta)
      └─ List de items
         ├─ Item
         ├─ Item
         ├─ Item
         └─ Item`}</code>
            </pre>
          </PracticeBox>

          <ActivityBox title="🔍 ¿Dónde se aplican los estilos importantes?">
            <ul>
              <li>
                <strong>Sección (wrapper):</strong> padding general y fondo suave.
              </li>
              <li>
                <strong>Grid/Columnas:</strong> gap entre tarjetas y responsive.
              </li>
              <li>
                <strong>Card (tarjeta grande):</strong> fondo blanco, border-radius, sombra y padding.
              </li>
              <li>
                <strong>Item (mini-tarjeta):</strong> flex (icono + texto), padding, fondo gris claro, border-radius.
              </li>
            </ul>
          </ActivityBox>
        </section>

        {/* PASO A PASO */}
        <section className="doc-section" id="paso-a-paso">
          <h2>3) Construcción paso a paso</h2>

          <ActivityBox title="🧱 Paso 1 — Crea el wrapper de sección">
            <ol>
              <li>Inserta un <strong>Container</strong> que será el wrapper.</li>
              <li>
                Dale un <strong>padding vertical</strong> generoso (ej. 48px) para que respire.
              </li>
              <li>
                Pon un <strong>fondo suave</strong> (gris muy claro) para separar la sección del resto.
              </li>
              <li>
                Dentro añade: <strong>H2</strong> (título) + <strong>párrafo</strong> (intro).
              </li>
            </ol>
          </ActivityBox>

          <ActivityBox title="🧩 Paso 2 — Crea el contenedor de columnas / grid">
            <ol>
              <li>
                Inserta un contenedor para las dos tarjetas y define el layout:{" "}
                <strong>Columnas (2)</strong> o <strong>Grid</strong>.
              </li>
              <li>
                Ajusta el <strong>gap</strong> entre columnas (24px es un valor muy habitual).
              </li>
              <li>
                Asegura que en móvil se convierta en <strong>1 columna</strong> (responsive).
              </li>
            </ol>
          </ActivityBox>

          <ActivityBox title="🗂️ Paso 3 — Crea la tarjeta grande (Card)">
            <ol>
              <li>En cada columna, añade un <strong>Container</strong> que será la tarjeta.</li>
              <li>
                Estilos típicos de tarjeta:
                <ul>
                  <li><strong>background:</strong> blanco</li>
                  <li><strong>border-radius:</strong> 24px (premium)</li>
                  <li><strong>padding:</strong> 24px</li>
                  <li><strong>box-shadow:</strong> suave (relieve)</li>
                </ul>
              </li>
              <li>
                Dentro, añade un <strong>H3</strong> (título de tarjeta).
              </li>
            </ol>
          </ActivityBox>

          <ActivityBox title="🧾 Paso 4 — Crea los items (mini-tarjetas con icono + texto)">
            <ol>
              <li>
                Dentro de la tarjeta, crea un contenedor “lista” (otro <strong>Container</strong>).
              </li>
              <li>
                Crea un <strong>Item</strong> (Container) y pon dentro:
                <ul>
                  <li>Un icono (emoji o icono)</li>
                  <li>Un texto (párrafo)</li>
                </ul>
              </li>
              <li>
                Al Item aplícale:
                <ul>
                  <li><strong>display: flex</strong> (fila)</li>
                  <li><strong>align-items: center</strong> (centrado vertical)</li>
                  <li><strong>gap:</strong> 12px</li>
                  <li><strong>padding:</strong> 12–16px</li>
                  <li><strong>background:</strong> gris muy claro</li>
                  <li><strong>border-radius:</strong> 14–16px</li>
                </ul>
              </li>
              <li>
                Duplica el Item 3–4 veces para completar la tarjeta.
              </li>
            </ol>
          </ActivityBox>

          <TipBox title="📌 Trucos de consistencia (que elevan el resultado)">
            <ul>
              <li>Todos los items deben tener el <strong>mismo alto visual</strong> (padding igual).</li>
              <li>Todos los iconos deben tener <strong>tamaño parecido</strong>.</li>
              <li>Usa <strong>gap</strong> entre items (12–16px) en lugar de márgenes locos.</li>
              <li>Texto en items: tamaño 14–16px, color ligeramente suave.</li>
            </ul>
          </TipBox>
        </section>

        {/* PROPIEDADES */}
        <section className="doc-section" id="propiedades">
          <h2>4) Propiedades que entrenamos</h2>

          <div className="two-columns">
            <div className="column">
              <h4>📦 Box model</h4>
              <ul>
                <li><strong>padding:</strong> aire interno (tarjeta e items)</li>
                <li><strong>margin / gap:</strong> separación entre elementos</li>
                <li><strong>max-width:</strong> contenido centrado y legible</li>
              </ul>

              <h4>🧱 Forma y jerarquía</h4>
              <ul>
                <li><strong>border-radius:</strong> tarjeta (24px) e items (16px)</li>
                <li><strong>box-shadow:</strong> relieve suave</li>
              </ul>
            </div>

            <div className="column">
              <h4>🧭 Layout</h4>
              <ul>
                <li><strong>grid/columns:</strong> 2 columnas en desktop</li>
                <li><strong>flex:</strong> icono + texto alineados</li>
                <li><strong>align-items:</strong> centrado vertical</li>
              </ul>

              <h4>📱 Responsive</h4>
              <ul>
                <li>Colapsar a 1 columna en móvil</li>
                <li>Espaciado coherente (no apretado)</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>⚠️ Ojo:</strong> si usas un bloque de lista (List) tendrás viñetas/flechas y estilos heredados.
              Para este diseño, lo más limpio es tratar cada “línea” como una mini tarjeta (Container + flex).
            </p>
          </WarningBox>
        </section>

        {/* EJERCICIO */}
        <section className="doc-section" id="ejercicio">
          <h2>5) Ejercicio guiado</h2>

          <ActivityBox title="🧪 Reto práctico (15–20 min)">
            <ol>
              <li>Crea la sección completa con 2 tarjetas.</li>
              <li>En cada tarjeta, añade 4 items con icono y texto.</li>
              <li>Cambia la temática (ej.: “Antes de clase” / “Durante el examen”).</li>
              <li>Haz una versión con 3 columnas (desktop) y comprueba el responsive.</li>
              <li>Guárdalo como <strong>patrón</strong> para reutilizarlo en otras páginas.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="✅ Criterios de calidad">
            <ul>
              <li>Las dos tarjetas se ven equilibradas (mismo estilo, mismo padding).</li>
              <li>Los items son coherentes (mismo fondo, mismo radio, mismo espaciado).</li>
              <li>Iconos alineados verticalmente con el texto (flex + align-items).</li>
              <li>En móvil, la sección se lee fácil (1 columna, sin apretar).</li>
            </ul>
          </PracticeBox>
        </section>
<section className="doc-section" id="sombras">
  <h2>7.X Sombras (Box Shadow): profundidad y jerarquía visual</h2>

  <p>
    Las sombras no son decoración: son una herramienta de <strong>jerarquía visual</strong>.
    Indican qué elementos están “por encima” del fondo y cuáles son interactivos.
    En diseño web moderno, una tarjeta sin sombra suele percibirse como plana y poco importante.
  </p>

  <TipBox title="🧠 Idea clave">
    <p>
      El ojo humano interpreta la sombra como altura:
      <strong>más sombra = más protagonismo</strong>.
      Por eso las tarjetas, botones y CTAs casi siempre llevan sombra.
    </p>
  </TipBox>

  <h3>Propiedades de la sombra (una a una)</h3>

  <ActivityBox title="🎛️ 1) Horizontal (X)">
    <p>
      Desplaza la sombra a izquierda o derecha.
    </p>
    <ul>
      <li><strong>0:</strong> sombra centrada (lo más habitual)</li>
      <li><strong>Valor positivo:</strong> sombra hacia la derecha</li>
      <li><strong>Valor negativo:</strong> sombra hacia la izquierda</li>
    </ul>
    <p>
      👉 En tarjetas normales se deja casi siempre en <strong>0</strong>.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 2) Vertical (Y)">
    <p>
      Controla cuánto “flota” el elemento respecto al fondo.
    </p>
    <ul>
      <li><strong>Valores bajos (6–12):</strong> sombra muy sutil</li>
      <li><strong>Valores medios (16–24):</strong> tarjeta claramente elevada</li>
      <li><strong>Valores altos:</strong> efecto exagerado (poco profesional)</li>
    </ul>
    <p>
      👉 En tarjetas: <strong>16–20</strong> suele funcionar muy bien.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 3) Blur (desenfoque)">
    <p>
      Define lo suave o dura que es la sombra.
    </p>
    <ul>
      <li><strong>Blur bajo:</strong> sombra dura, poco natural</li>
      <li><strong>Blur medio (20–40):</strong> sombra elegante y moderna</li>
      <li><strong>Blur muy alto:</strong> efecto “niebla” poco definido</li>
    </ul>
    <p>
      👉 Regla práctica: el blur suele ser <strong>el doble</strong> del valor vertical.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 4) Spread (expansión)">
    <p>
      Controla si la sombra se expande o se contrae.
    </p>
    <ul>
      <li><strong>0:</strong> valor estándar (el más usado)</li>
      <li><strong>Negativo:</strong> sombra más concentrada</li>
      <li><strong>Positivo:</strong> sombra grande y pesada</li>
    </ul>
    <p>
      👉 En diseño profesional, casi siempre se deja en <strong>0</strong>.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 5) Position: Outset vs Inset">
    <ul>
      <li>
        <strong>Outset:</strong> sombra hacia fuera → tarjetas, botones, elementos flotantes
      </li>
      <li>
        <strong>Inset:</strong> sombra hacia dentro → campos de formulario, cajas hundidas
      </li>
    </ul>
    <p>
      👉 Para tarjetas: <strong>Outset siempre</strong>.
    </p>
  </ActivityBox>

  <PracticeBox title="📌 Sombra recomendada para tarjetas">
    <ul>
      <li><strong>Horizontal:</strong> 0</li>
      <li><strong>Vertical:</strong> 16–20</li>
      <li><strong>Blur:</strong> 30–40</li>
      <li><strong>Spread:</strong> 0</li>
      <li><strong>Position:</strong> Outset</li>
      <li><strong>Color:</strong> negro/gris con poca opacidad</li>
    </ul>
  </PracticeBox>

  <WarningBox>
    <p>
      <strong>⚠️ Error típico:</strong> usar sombras muy oscuras o muy duras.
      El resultado parece antiguo o poco profesional.
      Mejor una sombra suave que apenas se note.
    </p>
  </WarningBox>
</section>
<section className="doc-section" id="sombras">
  <h2>7.X Sombras (Box Shadow): profundidad y jerarquía visual</h2>

  <p>
    Las sombras no son decoración: son una herramienta de <strong>jerarquía visual</strong>.
    Indican qué elementos están “por encima” del fondo y cuáles son interactivos.
    En diseño web moderno, una tarjeta sin sombra suele percibirse como plana y poco importante.
  </p>

  <TipBox title="🧠 Idea clave">
    <p>
      El ojo humano interpreta la sombra como altura:
      <strong>más sombra = más protagonismo</strong>.
      Por eso las tarjetas, botones y CTAs casi siempre llevan sombra.
    </p>
  </TipBox>

  <h3>Propiedades de la sombra (una a una)</h3>

  <ActivityBox title="🎛️ 1) Horizontal (X)">
    <p>
      Desplaza la sombra a izquierda o derecha.
    </p>
    <ul>
      <li><strong>0:</strong> sombra centrada (lo más habitual)</li>
      <li><strong>Valor positivo:</strong> sombra hacia la derecha</li>
      <li><strong>Valor negativo:</strong> sombra hacia la izquierda</li>
    </ul>
    <p>
      👉 En tarjetas normales se deja casi siempre en <strong>0</strong>.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 2) Vertical (Y)">
    <p>
      Controla cuánto “flota” el elemento respecto al fondo.
    </p>
    <ul>
      <li><strong>Valores bajos (6–12):</strong> sombra muy sutil</li>
      <li><strong>Valores medios (16–24):</strong> tarjeta claramente elevada</li>
      <li><strong>Valores altos:</strong> efecto exagerado (poco profesional)</li>
    </ul>
    <p>
      👉 En tarjetas: <strong>16–20</strong> suele funcionar muy bien.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 3) Blur (desenfoque)">
    <p>
      Define lo suave o dura que es la sombra.
    </p>
    <ul>
      <li><strong>Blur bajo:</strong> sombra dura, poco natural</li>
      <li><strong>Blur medio (20–40):</strong> sombra elegante y moderna</li>
      <li><strong>Blur muy alto:</strong> efecto “niebla” poco definido</li>
    </ul>
    <p>
      👉 Regla práctica: el blur suele ser <strong>el doble</strong> del valor vertical.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 4) Spread (expansión)">
    <p>
      Controla si la sombra se expande o se contrae.
    </p>
    <ul>
      <li><strong>0:</strong> valor estándar (el más usado)</li>
      <li><strong>Negativo:</strong> sombra más concentrada</li>
      <li><strong>Positivo:</strong> sombra grande y pesada</li>
    </ul>
    <p>
      👉 En diseño profesional, casi siempre se deja en <strong>0</strong>.
    </p>
  </ActivityBox>

  <ActivityBox title="🎛️ 5) Position: Outset vs Inset">
    <ul>
      <li>
        <strong>Outset:</strong> sombra hacia fuera → tarjetas, botones, elementos flotantes
      </li>
      <li>
        <strong>Inset:</strong> sombra hacia dentro → campos de formulario, cajas hundidas
      </li>
    </ul>
    <p>
      👉 Para tarjetas: <strong>Outset siempre</strong>.
    </p>
  </ActivityBox>

  <PracticeBox title="📌 Sombra recomendada para tarjetas">
    <ul>
      <li><strong>Horizontal:</strong> 0</li>
      <li><strong>Vertical:</strong> 16–20</li>
      <li><strong>Blur:</strong> 30–40</li>
      <li><strong>Spread:</strong> 0</li>
      <li><strong>Position:</strong> Outset</li>
      <li><strong>Color:</strong> negro/gris con poca opacidad</li>
    </ul>
  </PracticeBox>

  <WarningBox>
    <p>
      <strong>⚠️ Error típico:</strong> usar sombras muy oscuras o muy duras.
      El resultado parece antiguo o poco profesional.
      Mejor una sombra suave que apenas se note.
    </p>
  </WarningBox>
</section>

        {/* CHECKLIST */}
        <section className="doc-section" id="checklist">
          <h2>6) Checklist final</h2>

          <TipBox title="🧾 Checklist rápido">
            <ul>
              <li>✅ Sección con fondo suave y padding generoso</li>
              <li>✅ Título + intro fuera de las tarjetas</li>
              <li>✅ Layout en 2 columnas con gap 24px</li>
              <li>✅ Tarjetas blancas con border-radius 24px y sombra suave</li>
              <li>✅ Items con flex, gap 12px, padding 12–16px, fondo gris claro y radio 16px</li>
              <li>✅ Responsive: 1 columna en móvil</li>
            </ul>
          </TipBox>
        </section>
        {/* ANIMACIONES */}
<section className="doc-section" id="animaciones">
  <h2>Animaciones: las más habituales (y cómo usarlas con cabeza)</h2>

  <p>
    Las animaciones ayudan a guiar la atención y dar sensación de calidad, pero si se usan en exceso
    provocan el efecto contrario: <strong>ruido visual</strong>, distracción y peor rendimiento.
    En proyectos profesionales la regla es simple: <strong>animar poco, pero bien</strong>.
  </p>

  <TipBox title="🎯 Regla de oro">
    <p>
      Usa animaciones solo si cumplen una función:{" "}
      <strong>dirigir la mirada</strong>, <strong>dar feedback</strong> (hover/click) o{" "}
      <strong>mejorar la comprensión</strong> de una sección. Si es “solo por decorar”, probablemente sobra.
    </p>
  </TipBox>

  <details className="dd" open>
    <summary>Animaciones más habituales (las que verás en Spectra y en la mayoría de themes)</summary>
    <div className="dd-body">
      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Animación</th>
              <th>Qué hace</th>
              <th>Cuándo usarla</th>
              <th>Evítala si…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Fade in</th>
              <td>Aparece suavemente (opacidad)</td>
              <td>Entradas de secciones, texto principal, CTA</td>
              <td>Todo aparece “a la vez” y parece una web de plantilla</td>
            </tr>
            <tr>
              <th scope="row">Slide up/down</th>
              <td>Entra desde abajo/arriba</td>
              <td>Tarjetas, bloques de contenido al hacer scroll</td>
              <td>Se nota “salto” o el movimiento es demasiado largo</td>
            </tr>
            <tr>
              <th scope="row">Slide left/right</th>
              <td>Entra desde lateral</td>
              <td>Layouts 2 columnas (imagen + texto)</td>
              <td>Hay mucho contenido en pantalla (marea)</td>
            </tr>
            <tr>
              <th scope="row">Zoom in / scale</th>
              <td>Crece ligeramente</td>
              <td>Hero, imagen destacada, cards clave</td>
              <td>Hay muchas imágenes (se ve “infantil”)</td>
            </tr>
            <tr>
              <th scope="row">Hover lift</th>
              <td>Sube un poco al pasar el ratón</td>
              <td>Tarjetas clicables, botones, recursos</td>
              <td>La tarjeta no es clicable (confunde al usuario)</td>
            </tr>
            <tr>
              <th scope="row">Parallax (fondo)</th>
              <td>Fondo se mueve a diferente velocidad</td>
              <td>Secciones puntuales de marca</td>
              <td>Se nota “pesado” o hay saltos en móvil</td>
            </tr>
            <tr>
              <th scope="row">Stagger (en cascada)</th>
              <td>Elementos aparecen uno tras otro</td>
              <td>Listados de tarjetas (3–6 items)</td>
              <td>La lista es larga (se hace eterno)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout tip">
        Consejo: si dudas, usa solo <strong>fade</strong> + <strong>hover suave</strong>.
        Es el combo más profesional y menos “ruidoso”.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Buenas prácticas (para que se vea pro y no “carnaval”)</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Menos es más:</strong> elige 1–2 estilos de animación para toda la web (coherencia).
        </li>
        <li>
          <strong>Duración corta:</strong> mejor 0.2s–0.4s. Si dura más, el usuario lo siente lento.
        </li>
        <li>
          <strong>Prioriza hover:</strong> una interacción sutil al pasar el ratón aporta calidad sin distraer.
        </li>
        <li>
          <strong>No animes todo:</strong> si todo se mueve, nada destaca.
        </li>
        <li>
          <strong>Rendimiento:</strong> evita parallax pesado y animaciones exageradas en móviles.
        </li>
      </ul>

      <WarningBox>
        <p>
          <strong>⚠️ Señal de abuso:</strong> si al hacer scroll “todo entra volando”, el usuario se cansa y
          la web parece una plantilla. En profesional: <strong>animación puntual + intención</strong>.
        </p>
      </WarningBox>
    </div>
  </details>

  <details className="dd">
    <summary>Accesibilidad: respeta “reducir movimiento”</summary>
    <div className="dd-body">
      <p>
        Algunas personas activan en su sistema <strong>reducir animaciones</strong>.
        Si tu web lo respeta, sube un nivel en profesionalidad y accesibilidad.
      </p>

      <PracticeBox title="CSS recomendado (global)">
        <pre>
          <code>{`@media (prefers-reduced-motion: reduce){
  *{ animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}`}</code>
        </pre>
        <p>
          Esto evita mareos y mejora la experiencia para usuarios sensibles al movimiento.
        </p>
      </PracticeBox>
    </div>
  </details>

  <ActivityBox title="🧪 Actividad rápida (5–10 min)">
    <ol>
      <li>Elige 1 animación de entrada para secciones (por ejemplo: <strong>fade</strong> o <strong>slide up</strong>).</li>
      <li>Elige 1 animación de interacción (por ejemplo: <strong>hover lift</strong> en tarjetas).</li>
      <li>Aplica solo a 2 secciones: hero y listado de tarjetas (no a toda la página).</li>
      <li>Comprueba el resultado en móvil: si se siente lento o pesado, reduce o elimina.</li>
    </ol>
  </ActivityBox>

  <TipBox title="✅ Resultado esperado (criterios)">
    <ul>
      <li>La animación ayuda a entender la página, no distrae.</li>
      <li>Hay coherencia: el mismo estilo se repite (no “una por bloque”).</li>
      <li>La web se siente rápida (sin animaciones eternas).</li>
      <li>Se respeta <code>prefers-reduced-motion</code>.</li>
    </ul>
  </TipBox>
</section>


        {/* CIERRE */}
        <div
          className="doc-hero"
          style={{
            marginTop: "3rem",
            background: "linear-gradient(135deg, #13aa52, #16c264)",
          }}
        >
          <h3>🏁 Domina esto y dominarás secciones reales</h3>
          <p>
            Esta sección es un patrón de diseño reutilizable. Si controlas contenedores + columnas + flex +
            espaciados, podrás crear módulos profesionales sin depender de plugins.
          </p>
        </div>

        <TipBox title="🧠 Lo que te llevas (PRÁCTICA APLICADA)">
          <ul>
            <li>Cómo pensar en <strong>árbol de contenedores</strong> antes de diseñar</li>
            <li>Cómo separar <strong>layout</strong> (grid/columnas) de <strong>componentes</strong> (tarjetas)</li>
            <li>Cómo construir "listas bonitas" sin usar listas clásicas (items como mini-tarjetas)</li>
            <li>Flex para icono + texto y consistencia visual</li>
            <li>📖 <strong>Fundamentos teóricos:</strong> Consulta el M14 para entender cada propiedad en detalle</li>
          </ul>
        </TipBox>

       
      </div>
    </TopicLayout>
  );
}
