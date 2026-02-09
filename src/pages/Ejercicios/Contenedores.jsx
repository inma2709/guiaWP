import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function AprendiendoContenedoresIndex() {
  return (
    <TopicLayout
      title="Fundamentos · Contenedores en Spectra (sin imágenes)"
      subtitle="Página laboratorio con colores para entender contenedor padre/hijo, layout, spacing y overflow"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Fundamentos</div>
          <h1>Aprendiendo contenedores</h1>
          <p className="doc-lead">
            Esta página es un <strong>laboratorio</strong>: solo usaremos{" "}
            <strong>contenedores con colores</strong> para que entiendas de verdad
            cómo se construyen diseños en WordPress con Spectra (padre/hijo, ancho, alto,
            padding, gap, flex y overflow).
          </p>
        </div>

        {/* ÍNDICE */}
        <div className="doc-index">
          <h2>Contenido</h2>
          <ol>
            <li><a href="#reglas">Reglas del laboratorio</a></li>
            <li><a href="#montaje">Montaje rápido en Spectra</a></li>
            <li><a href="#lab1">Lab 1: Padre + 3 hijos en fila</a></li>
            <li><a href="#lab2">Lab 2: Columna, separación y ritmo vertical</a></li>
            <li><a href="#lab3">Lab 3: Altura mínima (px vs vh)</a></li>
            <li><a href="#lab4">Lab 4: Overflow (solo concepto, sin imágenes)</a></li>
            <li><a href="#reto">Reto final: tu página de prueba lista</a></li>
          </ol>
        </div>

        {/* REGLAS */}
        <section className="doc-section" id="reglas">
          <h2>1) Reglas del laboratorio</h2>

          <details className="dd" open>
            <summary>Qué SÍ hacemos</summary>
            <div className="dd-body">
              <ul>
                <li>Usamos <strong>solo contenedores</strong>.</li>
                <li>Aplicamos <strong>colores fuertes</strong> para ver límites.</li>
                <li>Probamos <strong>1 propiedad cada vez</strong> y observamos el cambio.</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Qué NO hacemos todavía</summary>
            <div className="dd-body">
              <ul>
                <li>No usamos imágenes.</li>
                <li>No usamos “bloques mágicos” ni plantillas.</li>
                <li>No buscamos “bonito”: buscamos <strong>entender</strong>.</li>
              </ul>
            </div>
          </details>

          <TipBox title="🎯 Objetivo final del alumno">
            <p>
              Terminar con una página de prueba donde al mirar los colores se entienda:
              <strong> quién es el padre</strong>, <strong>quién es el hijo</strong>,{" "}
              <strong>qué es padding</strong>, <strong>qué es gap</strong> y{" "}
              <strong>qué significa overflow</strong>.
            </p>
          </TipBox>
        </section>

        {/* MONTAJE */}
        <section className="doc-section" id="montaje">
          <h2>2) Montaje rápido en Spectra</h2>

          <ActivityBox title="Pasos (sin perderte)">
            <ol>
              <li>Crea una página nueva: <strong>“aprendiendo contenedores”</strong>.</li>
              <li>Inserta un <strong>Container</strong> (será el contenedor principal del laboratorio).</li>
              <li>Dentro iremos creando secciones: cada “Lab” será <strong>un contenedor padre</strong>.</li>
              <li>Para ver límites, en cada contenedor aplica:
                <strong> background</strong> + <strong>borde</strong> (aunque sea 2px).
              </li>
            </ol>
          </ActivityBox>

          <WarningBox>
            <p>
              <strong>⚠️ Error típico:</strong> seleccionar el bloque equivocado.
              Si cambias un ajuste y “no pasa nada”, suele ser porque estás tocando el hijo
              pensando que estás en el padre (o al revés).
            </p>
          </WarningBox>
        </section>

        {/* LAB 1 */}
        <section className="doc-section" id="lab1">
          <h2>3) Lab 1: Contenedor padre + 3 hijos en fila</h2>

          <details className="dd" open>
            <summary>Qué vamos a demostrar</summary>
            <div className="dd-body">
              <ul>
                <li>Un contenedor padre puede organizar hijos en <strong>fila</strong> (layout horizontal).</li>
                <li><strong>Gap</strong> separa hijos sin usar márgenes raros.</li>
                <li>El ancho de los hijos puede ser “auto” o repartido (flex).</li>
              </ul>
            </div>
          </details>

          <ActivityBox title="Construcción paso a paso">
            <ol>
              <li>Crea un contenedor padre “Lab 1” con <strong>fondo rojo</strong> y padding 16–24.</li>
              <li>Dentro, crea 3 contenedores hijos:
                <strong> verde</strong>, <strong>azul</strong> y <strong>amarillo</strong>.</li>
              <li>En el padre, pon <strong>Layout: Row/Fila</strong>.</li>
              <li>Activa <strong>Gap</strong> (por ejemplo 16px).</li>
              <li>Observa: ¿se separan? ¿cambian al reducir pantalla?</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="Checklist de comprensión">
            <ul>
              <li>Identifico visualmente el <strong>padre</strong> (rojo) y los <strong>hijos</strong> (verde/azul/amarillo).</li>
              <li>Entiendo que <strong>gap</strong> separa elementos en un layout.</li>
              <li>Si cambio a Column, los hijos pasan de fila a columna.</li>
            </ul>
          </PracticeBox>

          <details className="dd">
            <summary>Mini tabla: qué tocar y qué efecto ver</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Layout → Row</strong>: hijos en línea.</li>
                <li><strong>Gap</strong>: aparece espacio entre hijos.</li>
                <li><strong>Padding del padre</strong>: se crea “aire” entre borde rojo y cajas hijas.</li>
              </ul>
            </div>
          </details>
        </section>

        {/* LAB 2 */}
        <section className="doc-section" id="lab2">
          <h2>4) Lab 2: Columna, separación y ritmo vertical</h2>

          <details className="dd" open>
            <summary>Qué vamos a demostrar</summary>
            <div className="dd-body">
              <ul>
                <li>Diseño típico web: <strong>secciones apiladas</strong> (una debajo de otra).</li>
                <li>Diferencia entre <strong>margin</strong> (separación externa) y <strong>padding</strong> (aire interno).</li>
              </ul>
            </div>
          </details>

          <ActivityBox title="Construcción">
            <ol>
              <li>Crea un contenedor padre “Lab 2” con fondo gris claro (o blanco) y borde 2px.</li>
              <li>Dentro añade 3 contenedores hijos “barras” (por ejemplo negro con borde verde como en tu captura).</li>
              <li>Pon el padre en <strong>Layout: Column</strong>.</li>
              <li>Da a cada hijo <strong>altura fija</strong> (ej. 40px) para que parezcan barras.</li>
              <li>Ahora crea separación:
                <strong>usa gap en el padre</strong> o <strong>margin-bottom en los hijos</strong> (elige uno).
              </li>
            </ol>
          </ActivityBox>

          <TipBox title="Regla didáctica">
            <p>
              Para layouts modernos: <strong>gap</strong> suele ser más limpio que meter margins por todas partes.
            </p>
          </TipBox>
        </section>

        {/* LAB 3 */}
        <section className="doc-section" id="lab3">
          <h2>5) Lab 3: Altura mínima (px vs vh)</h2>

          <details className="dd" open>
            <summary>Qué vamos a demostrar</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Minimum height</strong> crea secciones con “presencia” aunque haya poco contenido.</li>
                <li><strong>px</strong> = fijo; <strong>vh</strong> = relativo a la pantalla.</li>
              </ul>
            </div>
          </details>

          <ActivityBox title="Construcción">
            <ol>
              <li>Crea un contenedor padre “Lab 3” con fondo suave.</li>
              <li>Minimum Height: prueba <strong>240px</strong> y observa.</li>
              <li>Luego cambia a <strong>40vh</strong> y observa.</li>
              <li>Dentro mete un contenedor pequeño (hijo) para ver el centrado.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="Resultado esperado">
            <ul>
              <li>Con px: la sección es siempre igual.</li>
              <li>Con vh: crece o se reduce según el alto de la pantalla.</li>
            </ul>
          </PracticeBox>
        </section>

        {/* LAB 4 */}
        <section className="doc-section" id="lab4">
          <h2>6) Lab 4: Overflow (solo concepto, sin imágenes)</h2>

          <details className="dd" open>
            <summary>Qué vamos a demostrar</summary>
            <div className="dd-body">
              <p>
                <strong>Overflow no hace crecer</strong> nada. Solo decide qué pasa si el contenido
                <strong> se sale</strong>.
              </p>
            </div>
          </details>

          <ActivityBox title="Prueba visual con colores">
            <ol>
              <li>Crea un contenedor padre pequeño (fondo rojo) con <strong>altura 60px</strong>.</li>
              <li>Dentro mete un contenedor hijo más alto (fondo negro) con <strong>altura 120px</strong>.</li>
              <li>Cambia overflow del padre: <strong>visible</strong> → <strong>hidden</strong> → <strong>auto</strong>.</li>
              <li>Observa: con hidden se recorta; con auto aparece scroll.</li>
            </ol>
          </ActivityBox>

          <TipBox title="Frase que deben memorizar">
            <p>
              <strong>Overflow no crea el desbordamiento.</strong> Solo lo gestiona.
            </p>
          </TipBox>
        </section>

        {/* RETO */}
        <section className="doc-section" id="reto">
          <h2>7) Reto final: tu página de prueba lista</h2>

          <ActivityBox title="Reto guiado (lo que debe entregar el alumno)">
            <ol>
              <li>Una sección Lab 1 (padre rojo + 3 hijos en fila con gap).</li>
              <li>Una sección Lab 2 (3 barras apiladas con separación clara).</li>
              <li>Una sección Lab 3 (min-height en px y luego en vh).</li>
              <li>Una sección Lab 4 (overflow visible/hidden/auto con cajas de colores).</li>
              <li>Guardar al final como <strong>Patrón</strong> (no sincronizado) para reutilizarlo.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="Checklist de evaluación rápida (auto-check)">
            <ul>
              <li>Se reconoce el padre y los hijos solo con el color.</li>
              <li>El alumno puede explicar qué hace gap sin dudar.</li>
              <li>El alumno diferencia padding vs margin con un ejemplo real.</li>
              <li>El alumno entiende overflow porque lo ha visto recortar/scroll.</li>
            </ul>
          </PracticeBox>
        </section>
        {/* =========================================================
   LAB 5: ALINEACIÓN (centrado sin espaciadores)
   ========================================================= */}
<section className="doc-section" id="lab5">
  <h2>8) Lab 5: Alineación (centrado sin “espaciadores”)</h2>

  <details className="dd" open>
    <summary>Qué vas a aprender (la habilidad más usada)</summary>
    <div className="dd-body">
      <p>
        Alinear elementos dentro de un contenedor es el 80% del trabajo en Spectra:
        <strong> centrar</strong>, <strong>alinear a la izquierda/derecha</strong> y{" "}
        <strong>colocar arriba/centro/abajo</strong>… sin usar bloques Espaciador.
      </p>
      <ul>
        <li><strong>Horizontal:</strong> start / center / end</li>
        <li><strong>Vertical:</strong> top / center / bottom</li>
      </ul>
    </div>
  </details>

  <ActivityBox title="Construcción paso a paso (solo contenedores y color)">
    <ol>
      <li>Crea un contenedor padre “Lab 5” (fondo gris claro + borde 2px) con <strong>min-height 40vh</strong>.</li>
      <li>Dentro, crea un contenedor hijo pequeño (fondo negro) con <strong>ancho 160px</strong> y <strong>alto 60px</strong>.</li>
      <li>En el padre, busca las opciones de <strong>Alignment / Align Items / Justify Content</strong>.</li>
      <li>Prueba estas 3 combinaciones y observa:</li>
    </ol>
    <ul>
      <li><strong>Centro-centro:</strong> el hijo queda centrado perfecto.</li>
      <li><strong>Izquierda-centro:</strong> el hijo se va a la izquierda pero se mantiene centrado en vertical.</li>
      <li><strong>Derecha-abajo:</strong> el hijo queda en esquina inferior derecha.</li>
    </ul>
  </ActivityBox>

  <PracticeBox title="Checklist (si lo entiendes, ya sabes maquetar)">
    <ul>
      <li>✅ Puedo centrar un bloque sin usar Espaciador.</li>
      <li>✅ Sé diferenciar “alinear en horizontal” vs “alinear en vertical”.</li>
      <li>✅ Sé colocar un elemento en una esquina con controles (sin CSS).</li>
    </ul>
  </PracticeBox>

  <TipBox title="Regla docente">
    <p>
      Antes de meter espaciadores: <strong>primero prueba alineación</strong>. La mayoría de diseños se resuelven
      con Align/Justify + padding.
    </p>
  </TipBox>
</section>


{/* =========================================================
   LAB 6: EQUAL HEIGHT / STRETCH (tarjetas iguales)
   ========================================================= */}
<section className="doc-section" id="lab6">
  <h2>9) Lab 6: Equal Height (Stretch) — “tarjetas” de la misma altura</h2>

  <details className="dd" open>
    <summary>Qué significa Equal Height (en palabras sencillas)</summary>
    <div className="dd-body">
      <p>
        <strong>Equal Height</strong> hace que los hijos del contenedor se “estiren” para tener{" "}
        <strong>la misma altura</strong>. Esto se usa muchísimo en secciones de tarjetas: aunque una tarjeta tenga
        más texto que otra, todas quedan alineadas y “pro”.
      </p>
      <p>
        En muchos casos, activar Equal Height cambia internamente a <strong>align-items: stretch</strong>.
      </p>
    </div>
  </details>

  <ActivityBox title="Prueba visual con colores (sin texto, sin imágenes)">
    <ol>
      <li>Crea un contenedor padre “Lab 6” (fondo rojo suave + padding 16–24).</li>
      <li>Pon el padre en <strong>Layout: Row</strong> y activa <strong>Gap</strong> (16–24px).</li>
      <li>Crea 3 contenedores hijos (verde, azul, amarillo), cada uno con una altura distinta:</li>
    </ol>
    <ul>
      <li>Hijo 1: alto 60px</li>
      <li>Hijo 2: alto 120px</li>
      <li>Hijo 3: alto 90px</li>
    </ul>
    <ol start={4}>
      <li>Activa <strong>Equal Height</strong> en el padre.</li>
      <li>Observa el cambio: ¿se igualan? ¿se estiran?</li>
    </ol>
  </ActivityBox>

  <PracticeBox title="Checklist de comprensión">
    <ul>
      <li>✅ Entiendo que Equal Height afecta a los <strong>hijos</strong> (no al padre).</li>
      <li>✅ Veo que sirve para “tarjetas iguales” sin tocar cada una.</li>
      <li>✅ Si no cambia nada, compruebo que estoy en el contenedor padre y que hay varios hijos.</li>
    </ul>
  </PracticeBox>

  <WarningBox>
    <p>
      <strong>⚠️ Ojo:</strong> si a los hijos les has puesto una altura fija muy “mandona”, puede que no notes el stretch.
      Para ver el efecto, prueba quitando altura fija o usando alturas distintas sin bloquearlos.
    </p>
  </WarningBox>
</section>


{/* =========================================================
   DEPURACIÓN: CUANDO “NO PASA NADA”
   ========================================================= */}
<section className="doc-section" id="debug">
  <h2>10) Depuración: cuando cambias algo y “no pasa nada”</h2>

  <details className="dd" open>
    <summary>Esto le pasa al 100% del alumnado (y tiene solución)</summary>
    <div className="dd-body">
      <p>
        Si cambias una propiedad y no ves ningún efecto, casi siempre es por una de estas 5 causas.
        Esta sección es tu <strong>protocolo anti-frustración</strong>.
      </p>
    </div>
  </details>

  <ActivityBox title="Checklist en 30 segundos (antes de tocar nada más)">
    <ol>
      <li>
        <strong>¿Estoy seleccionando el bloque correcto?</strong>
        <br />
        Padre ≠ hijo. En el árbol de bloques, confirma que estás en el contenedor que toca.
      </li>
      <li>
        <strong>¿La propiedad tiene sentido aquí?</strong>
        <br />
        Ejemplo: overflow solo se nota si algo se sale; equal height solo si hay varios hijos.
      </li>
      <li>
        <strong>¿Hay un valor que lo está bloqueando?</strong>
        <br />
        Alturas fijas, anchos fijos o padding/margin heredados pueden impedir ver cambios.
      </li>
      <li>
        <strong>¿El tema o Spectra está sobrescribiendo?</strong>
        <br />
        A veces Astra/Spectra ponen reglas por defecto (max-width, padding, etc.).
      </li>
      <li>
        <strong>¿Lo confirmo en DevTools?</strong>
        <br />
        Styles = lo que se intenta aplicar. Computed = lo que manda de verdad.
      </li>
    </ol>
  </ActivityBox>

  <PracticeBox title="Mini práctica: prueba de “tachado” en DevTools (muy pedagógica)">
    <ol>
      <li>Abre DevTools → pestaña <strong>Elements</strong>.</li>
      <li>Selecciona el contenedor (con la flecha 🔍).</li>
      <li>En <strong>Styles</strong>, busca <code>width</code> / <code>max-width</code> / <code>padding</code>.</li>
      <li>Si una regla está <strong>tachada</strong>, significa: “se intentó aplicar, pero perdió”.</li>
      <li>Ve a <strong>Computed</strong> para ver el valor real.</li>
    </ol>
  </PracticeBox>

  <TipBox title="Frase para el manual">
    <p>
      <strong>Si no pasa nada, no es magia:</strong> o estás en el bloque equivocado,
      o la propiedad no aplica, o algo la está sobrescribiendo.
    </p>
  </TipBox>
</section>


        {/* CIERRE */}
        <div className="doc-hero" style={{ marginTop: "3rem" }}>
          <h3>🏁 Si entiendes esta página, entiendes WordPress “de verdad”</h3>
          <p>
            Porque Spectra (y cualquier maquetador) no es magia: es <strong>contenedores</strong> +{" "}
            <strong>layout</strong> + <strong>espaciado</strong>. Cuando dominas eso, lo demás es contenido.
          </p>
        </div>

        <TipBox title="✅ Checklist final">
          <ul>
            <li>✅ Sé identificar padre/hijo</li>
            <li>✅ Sé cambiar Row/Column</li>
            <li>✅ Uso gap para separar</li>
            <li>✅ Distingo padding vs margin</li>
            <li>✅ Entiendo min-height (px vs vh)</li>
            <li>✅ Entiendo overflow (visible/hidden/auto)</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#lab1">Empezar el laboratorio</a>
        </div>
      </div>
    </TopicLayout>
  );
}
