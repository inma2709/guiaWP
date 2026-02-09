import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function TemaGutenbergIndex() {
  return (
    <TopicLayout
      title="Tema · Gutenberg (Editor de bloques)"
      subtitle="Qué es, cómo funciona y cómo empezar desde cero con el editor nativo de WordPress"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">WordPress · Fundamentos</div>
          <h1>Gutenberg: el editor de bloques</h1>
          <p className="doc-lead">
            Gutenberg es el <strong>editor visual nativo</strong> de WordPress. En lugar de escribir “todo”
            en un único texto, construyes la página con <strong>bloques</strong> (párrafos, imágenes,
            columnas, botones, etc.). En este tema vas a entender qué es, por qué existe y cómo empezar a usarlo
            con buen criterio desde el primer día.
          </p>
        </div>

        {/* ÍNDICE */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li>
              <a href="#que-es-gutenberg">Qué es Gutenberg</a>
            </li>
            <li>
              <a href="#bloques-y-estructura">Bloques, estructura y jerarquía</a>
            </li>
            <li>
              <a href="#donde-se-usa">Dónde se usa: entradas, páginas y plantillas</a>
            </li>
            <li>
              <a href="#sin-tema">¿Se puede usar Gutenberg “sin tema”?</a>
            </li>
            <li>
              <a href="#primeros-pasos">Primeros pasos guiados</a>
            </li>
            <li>
              <a href="#buenas-practicas">Buenas prácticas (pro)</a>
            </li>
            <li>
              <a href="#ejercicio">Ejercicio práctico</a>
            </li>
            <li>
              <a href="#repaso">Repaso final</a>
            </li>
          </ol>
        </nav>

        {/* SECCIÓN 1 */}
        <section id="que-es-gutenberg" className="doc-section">
          <h2>Qué es Gutenberg</h2>

          <details className="dd" open>
            <summary>Idea clave</summary>
            <div className="dd-body">
              <p>
                Gutenberg es el editor de WordPress basado en <strong>bloques</strong>. Cada bloque es una pieza
                de contenido o de layout: un título, un párrafo, una imagen, una columna, un botón, etc.
              </p>
              <p>
                Esto hace que el contenido sea más <strong>modular</strong>, más <strong>reutilizable</strong> y
                más fácil de mantener que el editor clásico.
              </p>
            </div>
          </details>

          <details className="dd">
            <summary>¿Por qué se llama “editor de bloques”?</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Porque construyes la página como si fueran “piezas LEGO”: añades, mueves, duplicas, agrupas y
                  reorganizas bloques.
                </li>
                <li>
                  Porque cada bloque tiene sus <strong>ajustes</strong> (tipografía, color, espaciado, alineación…).
                </li>
                <li>
                  Porque separa mejor el contenido (texto, imágenes) de la estructura (grupos, columnas).
                </li>
              </ul>
            </div>
          </details>

          <TipBox title="Mentalidad correcta">
            No pienses “estoy escribiendo una página”. Piensa: <strong>estoy componiendo bloques</strong>.
            Eso te evita el 80% de problemas de maquetación.
          </TipBox>
        </section>

        {/* SECCIÓN 2 */}
        <section id="bloques-y-estructura" className="doc-section">
          <h2>Bloques, estructura y jerarquía</h2>

          <div className="two-columns">
            <div>
              <details className="dd" open>
                <summary>Bloques de contenido (lo que se ve)</summary>
                <div className="dd-body">
                  <ul>
                    <li>
                      <strong>Encabezado</strong> (H1, H2, H3…)
                    </li>
                    <li>
                      <strong>Párrafo</strong>
                    </li>
                    <li>
                      <strong>Imagen</strong> / Galería
                    </li>
                    <li>
                      <strong>Lista</strong>
                    </li>
                    <li>
                      <strong>Botón</strong>
                    </li>
                    <li>
                      <strong>Vídeo</strong> / Embeds
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            <div>
              <details className="dd" open>
                <summary>Bloques de estructura (lo que ordena)</summary>
                <div className="dd-body">
                  <ul>
                    <li>
                      <strong>Grupo</strong> (contenedor base)
                    </li>
                    <li>
                      <strong>Columnas</strong> (layout en 2 o más columnas)
                    </li>
                    <li>
                      <strong>Fila / Stack</strong> (depende de versión / tema)
                    </li>
                    <li>
                      <strong>Separador</strong> y espaciadores
                    </li>
                  </ul>
                  <p>
                    Regla práctica: si estás “peleándote” con alineaciones, probablemente te falta{" "}
                    <strong>un bloque contenedor</strong> (Grupo o Columnas).
                  </p>
                </div>
              </details>
            </div>
          </div>

          <WarningBox title="Error típico de principiantes">
            Meter estilos a lo loco en cada bloque sin una estructura clara. Primero crea una jerarquía:
            <strong> sección → contenedor → contenido</strong>. Luego ajustas.
          </WarningBox>
        </section>

        {/* SECCIÓN 3 */}
        <section id="donde-se-usa" className="doc-section">
          <h2>Dónde se usa: entradas, páginas y plantillas</h2>

          <details className="dd" open>
            <summary>Usos más comunes</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <strong>Páginas</strong>: home, about, servicios, contacto.
                </li>
                <li>
                  <strong>Entradas</strong>: blog, noticias, artículos.
                </li>
                <li>
                  <strong>Reutilización</strong>: patrones y bloques reutilizables.
                </li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>¿Y las cabeceras/footers?</summary>
            <div className="dd-body">
              <p>
                Depende del tipo de tema:
              </p>
              <ul>
                <li>
                  Con un <strong>tema clásico</strong>, normalmente editas páginas/entradas con bloques, pero el
                  header/footer viene del tema (Customizer, opciones del tema…).
                </li>
                <li>
                  Con un <strong>tema de bloques (FSE)</strong>, también puedes editar <strong>plantillas</strong>{" "}
                  y <strong>partes</strong> (header/footer) desde el Editor del sitio.
                </li>
              </ul>
            </div>
          </details>

          <TipBox title="Idea para clase">
            Primer ejemplo: Gutenberg en páginas (sin FSE). Segundo ejemplo: Gutenberg + patrones. Tercero:
            tema de bloques (FSE) para enseñar plantillas.
          </TipBox>
        </section>

        {/* SECCIÓN 4 */}
        <section id="sin-tema" className="doc-section">
          <h2>¿Se puede usar Gutenberg “sin tema”?</h2>

          <details className="dd" open>
            <summary>Respuesta corta (importante)</summary>
            <div className="dd-body">
              <p>
                En WordPress <strong>siempre necesitas un tema activo</strong> para que el sitio renderice
                (aunque sea uno mínimo). Lo que sí puedes hacer es:
              </p>
              <ul>
                <li>
                  Usar Gutenberg <strong>sin maquetadores</strong> (sin Elementor, sin Spectra, etc.).
                </li>
                <li>
                  Elegir un tema muy “neutro” para aprender: que no interfiera demasiado.
                </li>
                <li>
                  Usar un <strong>tema de bloques</strong> si quieres aprender también plantillas (FSE).
                </li>
              </ul>
            </div>
          </details>

          <WarningBox title="Traducción práctica">
            No existe “sin tema”, pero sí existe “solo Gutenberg”. Y eso es justo lo ideal para tu primer ejemplo.
          </WarningBox>
        </section>

        {/* SECCIÓN 5 */}
        <section id="primeros-pasos" className="doc-section">
          <h2>Primeros pasos guiados</h2>

          <details className="dd" open>
            <summary>Paso a paso narrado (hazlo tal cual)</summary>
            <div className="dd-body">
              <ol>
                <li>
                  Ve a <strong>Páginas → Añadir nueva</strong>.
                </li>
                <li>
                  Escribe el <strong>título</strong> de la página (arriba).
                </li>
                <li>
                  Pulsa <strong>+</strong> para añadir un bloque: empieza con un <strong>Encabezado</strong>.
                </li>
                <li>
                  Añade un <strong>Párrafo</strong> con 2–3 líneas.
                </li>
                <li>
                  Inserta una <strong>Imagen</strong> (biblioteca o subir).
                </li>
                <li>
                  Crea una sección: añade un bloque <strong>Grupo</strong> y dentro mete 2–3 bloques.
                </li>
                <li>
                  Para dos columnas: inserta <strong>Columnas</strong> y dentro coloca contenido (imagen + texto).
                </li>
                <li>
                  Abre la barra lateral (icono de engranaje) y ajusta: <strong>alineación</strong>,{" "}
                  <strong>anchura</strong> (si aparece), <strong>espaciado</strong>.
                </li>
                <li>
                  Guarda como borrador y luego <strong>Publica</strong>.
                </li>
              </ol>
              <p>
                Repite el proceso 2–3 veces. Gutenberg se aprende por repetición y por “ojo” (jerarquía y
                espacio).
              </p>
            </div>
          </details>

          <PracticeBox title="Mini práctica express (5 minutos)">
            Crea una página “Sobre mí” con:
            <ul>
              <li>1 Encabezado (H2) + 1 párrafo</li>
              <li>1 bloque Columnas: imagen a la izquierda, texto a la derecha</li>
              <li>1 botón al final (“Contactar”)</li>
            </ul>
          </PracticeBox>
        </section>

        {/* SECCIÓN 6 */}
        <section id="buenas-practicas" className="doc-section">
          <h2>Buenas prácticas (pro)</h2>

          <details className="dd" open>
            <summary>Checklist de oro</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Usa <strong>H1 solo una vez</strong> por página (normalmente lo gestiona el título).
                </li>
                <li>
                  Agrupa por secciones: <strong>Grupo</strong> → dentro contenido.
                </li>
                <li>
                  Evita “espaciadores” en exceso: mejor usa <strong>padding/margin</strong> del contenedor si está disponible.
                </li>
                <li>
                  Duplica bloques (⋮ → Duplicar) para mantener consistencia.
                </li>
                <li>
                  Reutiliza: <strong>Patrones</strong> para secciones repetidas.
                </li>
                <li>
                  Menos es más: 2 tipografías y 2 tamaños base como norma.
                </li>
              </ul>
            </div>
          </details>

          <TipBox title="Regla visual para que todo “se vea pro”">
            Consistencia: mismos bordes, mismos márgenes, mismas alturas de imagen, mismos estilos de botón.
            Si algo no se ve bien, casi siempre es por <strong>espaciado inconsistente</strong>.
          </TipBox>
        </section>

        {/* SECCIÓN 7 */}
        <section id="ejercicio" className="doc-section">
          <h2>Ejercicio práctico</h2>

          <ActivityBox title="Reto · Landing simple solo con Gutenberg">
            Objetivo: crear una landing de 1 página con 4 secciones.
            <ol>
              <li>
                <strong>Hero</strong>: título + texto + botón
              </li>
              <li>
                <strong>Servicios</strong>: 3 columnas con icono (puede ser emoji) + título + texto
              </li>
              <li>
                <strong>Portfolio</strong>: 2 columnas con imagen + descripción
              </li>
              <li>
                <strong>Contacto</strong>: texto + botón
              </li>
            </ol>
            Reglas:
            <ul>
              <li>No usar plugins de bloques.</li>
              <li>Usar Grupo/Columnas para estructurar.</li>
              <li>Mantener la coherencia visual (espaciados y tipografías).</li>
            </ul>
          </ActivityBox>

          <details className="dd">
            <summary>Entrega y evaluación rápida</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Entrega: URL de la página publicada + 1 captura del editor (vista bloques).
                </li>
                <li>
                  Evaluación: estructura (40%), coherencia visual (40%), accesibilidad básica (20%).
                </li>
              </ul>
            </div>
          </details>
        </section>

        {/* SECCIÓN 8 */}
        <section id="repaso" className="doc-section">
          <h2>Repaso final</h2>

          <details className="dd" open>
            <summary>Lo que tienes que saber “sí o sí”</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Gutenberg = editor nativo por bloques.
                </li>
                <li>
                  Hay bloques de <strong>contenido</strong> y de <strong>estructura</strong>.
                </li>
                <li>
                  No existe WordPress “sin tema”, pero sí existe trabajar <strong>solo con Gutenberg</strong>.
                </li>
                <li>
                  La clave es la jerarquía: sección → contenedor → contenido.
                </li>
              </ul>
            </div>
          </details>
        </section>

        {/* CIERRE */}
        <div className="doc-hero" style={{ marginTop: "1.1rem" }}>
          <div className="doc-kicker">Checklist final</div>
          <h2 style={{ margin: 0 }}>¿List@ para pasar al siguiente nivel?</h2>
          <p className="doc-lead">
            Si dominas esto, ya puedes aprender Spectra/Astra (o cualquier plugin) sin perder el control.
          </p>

          <TipBox title="Checklist (márcalo mentalmente)">
            <ul>
              <li>Sé crear una página con 4 secciones usando Grupo y Columnas.</li>
              <li>Sé ajustar tipografía, alineación y espaciado sin “romper” el diseño.</li>
              <li>Sé duplicar bloques y mantener consistencia visual.</li>
              <li>Entiendo la diferencia entre contenido y estructura.</li>
            </ul>
          </TipBox>
        </div>

        <div className="doc-next">
          <a className="btn btn-primary" href="/fundamentos/patrones-y-reutilizables">
            Siguiente: Patrones y bloques reutilizables →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
