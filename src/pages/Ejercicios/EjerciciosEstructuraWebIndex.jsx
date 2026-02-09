import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function EjerciciosEstructuraWebIndex() {
  return (
    <TopicLayout
      title="Ejercicios · Estructura básica de una página web"
      subtitle="Aprende a pensar una web por secciones antes de diseñar"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Ejercicios guiados</div>
          <h1>Estructura básica de una página web</h1>
          <p className="doc-lead">
            Antes de hacer héroes, tarjetas o efectos, hay que entender algo fundamental:
            <strong> una web es una suma de secciones</strong>, y cada sección se construye
            con <strong>contenedores</strong>.
          </p>
        </div>

        {/* 1. QUÉ ES UNA SECCIÓN */}
        <section className="doc-section" id="que-es-seccion">
          <h2>1) ¿Qué es una sección en una página web?</h2>

          <details className="dd" open>
            <summary>Definición clara (sin tecnicismos)</summary>
            <div className="dd-body">
              <p>
                Una <strong>sección</strong> es un bloque horizontal de una página web
                que cumple una <strong>función concreta</strong>: presentar, explicar,
                convencer o guiar al usuario.
              </p>
              <p>
                En WordPress con Astra + Spectra, una sección suele corresponderse con
                <strong> un contenedor padre</strong> que agrupa otros contenedores y bloques.
              </p>
            </div>
          </details>

          <TipBox title="🧠 Idea clave">
            <p>
              Si sabes identificar secciones, sabes maquetar una web.
              El diseño visual viene después.
            </p>
          </TipBox>

          <WarningBox>
            <p>
              <strong>⚠️ Error habitual:</strong> empezar a diseñar sin saber qué sección estás creando.
              Primero define la función de la sección, luego su forma.
            </p>
          </WarningBox>
        </section>

        {/* 2. SECCIONES BÁSICAS */}
        <section className="doc-section" id="secciones-basicas">
          <h2>2) Secciones básicas de una página web</h2>

          <details className="dd" open>
            <summary>Las que se repiten en casi todos los proyectos</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Header / Cabecera</strong> → logo y navegación principal</li>
                <li><strong>Hero</strong> → mensaje principal + llamada a la acción</li>
                <li><strong>Contenido principal</strong> → servicios, rutas, productos, información</li>
                <li><strong>Secciones de apoyo</strong> → beneficios, iconos, testimonios</li>
                <li><strong>CTA</strong> → acción clara (contactar, registrarse, comprar)</li>
                <li><strong>Footer / Pie</strong> → enlaces legales, contacto, créditos</li>
              </ul>
            </div>
          </details>

          <PracticeBox title="Traducción directa a Spectra">
            <ul>
              <li>Cada sección = <strong>un contenedor padre</strong></li>
              <li>Dentro del contenedor: columnas, filas y bloques</li>
              <li>No mezclar funciones: <strong>una sección, una intención</strong></li>
            </ul>
          </PracticeBox>
        </section>

        {/* 3. PÁGINAS MÍNIMAS */}
        <section className="doc-section" id="paginas-minimas">
          <h2>3) Páginas que debe tener cualquier proyecto web</h2>

          <details className="dd" open>
            <summary>Páginas esenciales (nivel profesional)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Inicio (Home)</strong> → visión general del proyecto</li>
                <li><strong>Sobre mí / Sobre nosotros</strong> → quién hay detrás</li>
                <li><strong>Servicios / Productos / Contenido</strong> → núcleo del proyecto</li>
                <li><strong>Contacto</strong> → formulario o datos claros</li>
                <li><strong>Páginas legales</strong> → aviso legal, privacidad, cookies</li>
              </ul>
            </div>
          </details>

          <TipBox title="🎓 Para proyectos formativos">
            <p>
              En prácticas y portafolios, con
              <strong> Home + una página de contenido + Contacto</strong>
              es suficiente si están bien estructuradas.
            </p>
          </TipBox>
        </section>

        {/* 4. EJERCICIO ESTRUCTURA */}
        <section className="doc-section" id="ejercicio-estructura">
          <h2>4) Ejercicio: dibuja la estructura con contenedores</h2>

          <ActivityBox title="Ejercicio visual (solo contenedores con color)">
            <ol>
              <li>Crea una página nueva en WordPress.</li>
              <li>Añade un contenedor por cada sección:
                <ul>
                  <li>Hero</li>
                  <li>Contenido</li>
                  <li>CTA</li>
                  <li>Footer</li>
                </ul>
              </li>
              <li>Asigna un <strong>color distinto</strong> a cada contenedor.</li>
              <li>No pongas imágenes ni texto real.</li>
              <li>Observa la página como si fuera el <strong>esqueleto</strong> de una web.</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="Resultado esperado">
            <ul>
              <li>La página se entiende solo por bloques de color.</li>
              <li>Se ve claramente dónde empieza y acaba cada sección.</li>
              <li>No hay mezcla de funciones.</li>
            </ul>
          </PracticeBox>
        </section>

        {/* CIERRE INTERMEDIO */}
        <div className="doc-hero" style={{ marginTop: "3rem" }}>
          <h3>🧠 Diseñar una web empieza por la estructura</h3>
          <p>
            Antes de pensar en colores o imágenes, piensa en contenedores.
            Si la estructura es clara, el diseño fluye.
          </p>
        </div>

        {/* HERO OVERLAY */}
        <section className="doc-section" id="hero-overlay">
          <h2>Práctica guiada: Hero con overlay (imagen + texto + 2 botones)</h2>

          <TipBox title="🎯 Objetivo didáctico">
            <p>
              En esta práctica aprenderás dos conceptos clave en Spectra:
              <strong> anidamiento de contenedores</strong> y
              <strong> overlay</strong> (capa de color para mejorar la legibilidad).
            </p>
          </TipBox>

          <details className="dd" open>
            <summary>Resultado final esperado</summary>
            <div className="dd-body">
              <ul>
                <li>Hero con altura flexible (vh).</li>
                <li>Imagen como fondo del contenedor.</li>
                <li>Overlay oscuro semitransparente.</li>
                <li>Texto y dos botones encima.</li>
              </ul>
            </div>
          </details>

          <WarningBox>
            <p>
              <strong>⚠️ Error típico:</strong> usar un bloque Imagen para el fondo.
              En un hero profesional, la imagen suele ir como
              <strong> background del contenedor</strong>.
            </p>
          </WarningBox>

          <ActivityBox title="Paso a paso en Spectra">
            <ol>
              <li>Crea un <strong>Container padre</strong> (Hero) con min-height en vh.</li>
              <li>Aplica la imagen como <strong>background</strong> (cover + center).</li>
              <li>Crea un <strong>Container hijo</strong> con fondo negro semitransparente (overlay).</li>
              <li>Dentro, crea otro contenedor para el contenido.</li>
              <li>Añade texto y un contenedor en fila para los botones.</li>
              <li>Ajusta alineación: centro-centro o centro-izquierda.</li>
            </ol>
          </ActivityBox>

          <details className="dd">
            <summary>Mapa mental del anidamiento</summary>
            <div className="dd-body">
              <pre>
                <code>{`Container HERO
  └─ Container OVERLAY
      └─ Container CONTENIDO
          ├─ Texto
          └─ Container CTA (fila con botones)`}</code>
              </pre>
            </div>
          </details>

          <PracticeBox title="Checklist de evaluación">
            <ul>
              <li>✅ Uso correcto de vh</li>
              <li>✅ Overlay mejora contraste</li>
              <li>✅ Anidamiento claro y ordenado</li>
              <li>✅ Botones alineados con gap</li>
            </ul>
          </PracticeBox>
        </section>

        {/* CHECKLIST FINAL */}
        <TipBox title="Checklist final de la página">
          <ul>
            <li>✅ Identifico secciones</li>
            <li>✅ Distingo páginas mínimas</li>
            <li>✅ Sé crear estructura con contenedores</li>
            <li>✅ Puedo construir un hero profesional</li>
          </ul>
        </TipBox>
      </div>
    </TopicLayout>
  );
}
