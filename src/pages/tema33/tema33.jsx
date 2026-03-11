import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

/* ─────────────────────────────────────────
   Micro-componentes visuales de apoyo
───────────────────────────────────────── */

function SeoChip({ label, type = "info" }) {
  const styles = {
    ok: { bg: "#dcfce7", color: "#166534", border: "#22c55e" },
    warn: { bg: "#fef3c7", color: "#92400e", border: "#f59e0b" },
    danger: { bg: "#fee2e2", color: "#991b1b", border: "#ef4444" },
    info: { bg: "#dbeafe", color: "#1d4ed8", border: "#3b82f6" },
    pro: { bg: "#ede9fe", color: "#6d28d9", border: "#8b5cf6" },
  };

  const current = styles[type] || styles.info;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        background: current.bg,
        border: `1px solid ${current.border}`,
        color: current.color,
        borderRadius: "999px",
        padding: "0.15rem 0.6rem",
        fontSize: "0.75rem",
        fontWeight: 700,
      }}
    >
      {label}
    </span>
  );
}

function StepCard({ n, title, detail, color = "#2563eb" }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: "1rem",
        padding: "0.9rem",
        marginBottom: "0.75rem",
        background: "#f8fafc",
        borderRadius: "12px",
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
        }}
      >
        {n}
      </div>
      <div>
        <strong style={{ fontSize: "0.92rem", color: "#0f172a" }}>{title}</strong>
        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.86rem", color: "#475569" }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

function ConceptCard({ title, text, color = "#eff6ff", border = "#93c5fd" }) {
  return (
    <div
      style={{
        background: color,
        border: `1.5px solid ${border}`,
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h4 style={{ margin: "0 0 0.45rem 0", color: "#0f172a" }}>{title}</h4>
      <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.65, color: "#334155" }}>
        {text}
      </p>
    </div>
  );
}

export default function TemaSEODesdeCero() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="doc-kicker">WordPress · Posicionamiento</p>
        <h1>SEO desde cero: cómo conseguir visibilidad en Google con WordPress</h1>
        <p className="doc-lead">
          Tener una web publicada no significa que vaya a recibir visitas. Para que una página
          aparezca en Google y pueda atraer tráfico de calidad, hay que trabajar su SEO. En este
          tema vamos a estudiar el posicionamiento web desde cero, con lenguaje claro y enfoque
          profesional, para que el alumnado entienda qué es el SEO, cómo se aplica en WordPress,
          qué herramientas existen para analizar una página y cómo investigar también a la
          competencia.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>Entender qué es el SEO y por qué es importante</li>
            <li>Distinguir entre SEO, SEM y tráfico directo o social</li>
            <li>Comprender los conceptos básicos que usa Google para ordenar resultados</li>
            <li>Aprender las partes del SEO: técnico, on page, off page y local</li>
            <li>Conocer las herramientas esenciales para analizar una web propia</li>
            <li>Conocer herramientas y métodos para estudiar a los competidores</li>
            <li>Aplicar una metodología básica de auditoría SEO en WordPress</li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 5 horas · <strong>Nivel:</strong> Iniciación con
            proyección profesional · <strong>Enfoque:</strong> WordPress, webs corporativas,
            blogs y tiendas online.
          </p>
        </TipBox>
      </header>

      {/* ══════════════ ÍNDICE ══════════════ */}
      <nav className="doc doc-index" aria-label="Índice del tema SEO">
        <h2>Índice del tema</h2>
        <ol>
          <li><a href="#que-es-seo">Qué es el SEO</a></li>
          <li><a href="#como-funciona-google">Cómo funciona Google de forma básica</a></li>
          <li><a href="#conceptos-clave">Conceptos clave que el alumno debe dominar</a></li>
          <li><a href="#tipos-seo">Tipos de SEO</a></li>
          <li><a href="#seo-wordpress">Cómo se trabaja el SEO en WordPress</a></li>
          <li><a href="#palabras-clave">Palabras clave e intención de búsqueda</a></li>
          <li><a href="#seo-on-page">SEO on page: títulos, contenidos y estructura</a></li>
          <li><a href="#seo-tecnico">SEO técnico: rastreo, indexación y experiencia</a></li>
          <li><a href="#cache-placeholder">Hueco para sección de caché</a></li>
          <li><a href="#herramientas-propias">Herramientas para analizar nuestra propia web</a></li>
          <li><a href="#competidores">Cómo analizar el SEO de los competidores</a></li>
          <li><a href="#auditoria">Mini auditoría SEO paso a paso</a></li>
          <li><a href="#errores">Errores típicos de principiante</a></li>
          <li><a href="#actividades">Actividades prácticas</a></li>
          <li><a href="#conclusion">Conclusiones</a></li>
        </ol>
      </nav>

      {/* ══════════════ S1 ══════════════ */}
      <section className="doc doc-section" id="que-es-seo">
        <h2>1. Qué es el SEO</h2>

        <p>
          SEO significa <strong>Search Engine Optimization</strong>, es decir, optimización para
          motores de búsqueda. En términos sencillos, es el conjunto de técnicas y decisiones que
          tomamos para que una web pueda aparecer en mejores posiciones dentro de Google cuando una
          persona busca algo relacionado con nuestro contenido, nuestros servicios o nuestros
          productos.
        </p>

        <p>
          El SEO no consiste en “engañar a Google” ni en poner muchas palabras clave sin sentido.
          Consiste en construir una web que sea <strong>útil, clara, accesible, rápida,
          bien estructurada y relevante</strong> para una búsqueda concreta.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            margin: "1.25rem 0",
          }}
        >
          <ConceptCard
            title="Qué busca Google"
            text="Mostrar al usuario el resultado que mejor responde a lo que necesita en ese momento."
            color="#eff6ff"
            border="#93c5fd"
          />
          <ConceptCard
            title="Qué busca el SEO"
            text="Ayudar a Google a entender la web y demostrar que esa página merece aparecer."
            color="#f0fdf4"
            border="#86efac"
          />
          <ConceptCard
            title="Qué busca el usuario"
            text="Encontrar una respuesta rápida, fiable, clara y fácil de usar."
            color="#faf5ff"
            border="#c084fc"
          />
        </div>

        <WarningBox title="⚠️ Idea equivocada muy frecuente">
          <p>
            Muchos alumnos creen que SEO es instalar Yoast o Rank Math y esperar a que la web
            posicione sola. Eso no es SEO. Un plugin ayuda, pero no sustituye la estrategia,
            el contenido, la arquitectura ni la calidad real de la web.
          </p>
        </WarningBox>
      </section>

    {/* ══════════════ S2 ══════════════ */}
<section className="doc doc-section" id="como-funciona-google">
  <h2>2. Cómo funciona Google de forma básica</h2>

  <p>
    Para entender el SEO, primero hay que comprender qué hace Google cuando encuentra una web.
    Muchas personas imaginan que Google “mira internet” en el momento exacto en que escribimos
    una búsqueda, pero no funciona así. Google trabaja continuamente con sistemas automatizados
    que recorren la web, descubren páginas, las analizan, deciden si merece la pena guardarlas
    en su índice y, solo después, cuando un usuario hace una búsqueda, ordenan los resultados.
  </p>

  <p>
    Por eso, antes de pensar en palabras clave, títulos o plugins SEO, conviene que el alumno
    tenga muy claras las <strong>tres grandes fases del funcionamiento de Google</strong>:
    rastreo, indexación y posicionamiento.
  </p>

  <div style={{ margin: "1.2rem 0" }}>
    <StepCard
      n="1"
      title="Rastreo"
      detail="Google descubre páginas a través de enlaces, sitemaps y visitas previas de sus bots."
      color="#2563eb"
    />
    <StepCard
      n="2"
      title="Indexación"
      detail="Google analiza el contenido y decide si guarda esa página en su índice."
      color="#16a34a"
    />
    <StepCard
      n="3"
      title="Posicionamiento"
      detail="Cuando un usuario hace una búsqueda, Google ordena los resultados según relevancia, calidad y experiencia."
      color="#7c3aed"
    />
  </div>

  <div
    style={{
      background: "#0f172a",
      color: "#e2e8f0",
      borderRadius: "12px",
      padding: "1.2rem",
      fontFamily: "monospace",
      fontSize: "0.9rem",
      lineHeight: 1.9,
      margin: "1rem 0",
    }}
  >
    Google descubre páginas
    <br />
    ↓
    <br />
    Analiza si puede acceder a ellas
    <br />
    ↓
    <br />
    Decide si las guarda en su índice
    <br />
    ↓
    <br />
    Cuando alguien busca, compara resultados
    <br />
    ↓
    <br />
    Los ordena y muestra al usuario
  </div>

  <TipBox title="💡 Explicación útil para clase">
    <p>
      Puedes decirlo así: <strong>Google no lee internet en tiempo real cada vez que alguien
      busca</strong>; primero rastrea e indexa páginas y, cuando llega la búsqueda, decide qué
      resultados mostrar entre los que ya conoce.
    </p>
  </TipBox>

  <h3>Fase 1. Rastreo: cómo descubre Google una página</h3>

  <p>
    El rastreo es el proceso por el que Google encuentra nuevas URLs o vuelve a visitar otras
    que ya conocía. Para ello utiliza programas automáticos, conocidos habitualmente como
    <strong> Googlebot</strong>, que recorren enlaces y consultan información estructurada del sitio.
  </p>

  <p>
    Una página puede ser descubierta por Google de varias formas:
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>A través de enlaces internos dentro de la propia web</li>
    <li>A través de enlaces externos desde otras webs</li>
    <li>Mediante un sitemap XML</li>
    <li>Desde una inspección o solicitud puntual en Search Console</li>
    <li>Porque Google ya conocía esa zona del sitio y vuelve a revisarla</li>
  </ul>

  <h4>Herramientas de Google relacionadas con el rastreo</h4>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "1rem",
      margin: "1.2rem 0",
    }}
  >
    <div
      style={{
        background: "#eff6ff",
        border: "1px solid #93c5fd",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h5 style={{ margin: "0 0 0.4rem 0" }}>Googlebot</h5>
      <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.6 }}>
        Es el sistema automatizado que rastrea páginas y recursos para descubrir contenido.
      </p>
    </div>

    <div
      style={{
        background: "#f0fdf4",
        border: "1px solid #86efac",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h5 style={{ margin: "0 0 0.4rem 0" }}>Sitemaps</h5>
      <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.6 }}>
        Ayudan a indicar a Google qué URLs son nuevas, relevantes o actualizadas.
      </p>
    </div>

    <div
      style={{
        background: "#faf5ff",
        border: "1px solid #c084fc",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h5 style={{ margin: "0 0 0.4rem 0" }}>Search Console</h5>
      <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.6 }}>
        Permite revisar si Google puede acceder a una URL e identificar incidencias de rastreo.
      </p>
    </div>
  </div>

  <WarningBox title="⚠️ Idea importante">
    <p>
      Que una página exista no significa que Google la descubra rápido. Si no está bien enlazada,
      no aparece en el sitemap o el sitio tiene problemas técnicos, puede tardar más en ser rastreada.
    </p>
  </WarningBox>

  <h3>Fase 2. Indexación: cómo decide Google si guarda esa página</h3>

  <p>
    Una vez que Google encuentra una página, intenta analizar su contenido y decidir si merece
    la pena incorporarla a su índice. <strong>Indexar</strong> significa, en términos sencillos,
    “guardar esa página como posible resultado para futuras búsquedas”.
  </p>

  <p>
    Aquí el alumno debe entender algo muy importante:
    <strong> Google puede rastrear una página y aun así no indexarla</strong>.
    Esto ocurre cuando detecta problemas de calidad, duplicidad, falta de acceso o escaso valor.
  </p>

  <h4>Herramientas de Google relacionadas con la indexación</h4>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Herramienta</th>
          <th>Qué permite comprobar</th>
          <th>Para qué sirve</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Search Console</strong></td>
          <td>Si una URL está indexada o no</td>
          <td>Diagnóstico general de indexación</td>
        </tr>
        <tr>
          <td><strong>Inspección de URL</strong></td>
          <td>Estado concreto de una página</td>
          <td>Ver si puede indexarse y pedir indexación</td>
        </tr>
        <tr>
          <td><strong>Sitemap enviado en Search Console</strong></td>
          <td>Si Google detecta correctamente grupos de URLs</td>
          <td>Facilitar descubrimiento e inspección</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Fase 3. Posicionamiento: cómo decide Google qué mostrar primero</h3>

  <p>
    Cuando el usuario hace una búsqueda, Google no sale a buscar páginas desde cero. Lo que hace es
    revisar entre las páginas que ya tiene indexadas y decidir cuáles son las más adecuadas para esa consulta.
  </p>

  <p>
    En esa fase influyen muchos factores, pero para un alumno que está empezando conviene resumirlo así:
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Qué página responde mejor a la intención de búsqueda</li>
    <li>Qué contenido parece más útil, claro y fiable</li>
    <li>Qué experiencia ofrece la página en móvil y en velocidad</li>
    <li>Qué señales de calidad y estructura presenta el sitio</li>
  </ul>

  <TipBox title="✅ Frase docente muy útil">
    <p>
      Primero Google <strong>encuentra</strong> una página, luego decide si la
      <strong> guarda</strong> y después valora si merece <strong>mostrarla arriba</strong>.
    </p>
  </TipBox>

  <h3>¿Cómo podemos ayudar a Google a indexar nuestra página?</h3>

  <p>
    Esta es una de las preguntas más importantes del tema. No podemos obligar a Google a indexar
    una página, pero sí podemos <strong>facilitar muchísimo el proceso</strong>.
  </p>

  <p>
    Lo esencial es entender que Google necesita tres cosas:
  </p>

  <ol style={{ lineHeight: 1.8 }}>
    <li><strong>Descubrir</strong> la URL</li>
    <li><strong>Poder acceder</strong> a su contenido sin bloqueos</li>
    <li><strong>Considerarla útil y válida</strong> para su índice</li>
  </ol>

  <h4>Acciones prácticas para ayudar a Google</h4>

  <div style={{ margin: "1.2rem 0" }}>
    <StepCard
      n="1"
      title="Crear un sitemap XML y enviarlo a Search Console"
      detail="Esto ayuda a Google a detectar URLs nuevas o actualizadas y a entender la estructura importante del sitio."
      color="#2563eb"
    />
    <StepCard
      n="2"
      title="Usar enlaces internos claros"
      detail="Si una página está enlazada desde menús, categorías, artículos o páginas relacionadas, Google la descubre más fácilmente."
      color="#16a34a"
    />
    <StepCard
      n="3"
      title="Comprobar la URL con la herramienta de inspección"
      detail="Desde Search Console puedes revisar si una página está indexada y, si procede, solicitar indexación."
      color="#7c3aed"
    />
    <StepCard
      n="4"
      title="Evitar bloqueos técnicos"
      detail="Hay que revisar que la página no esté bloqueada por configuraciones erróneas, problemas de acceso o exclusiones no deseadas."
      color="#f59e0b"
    />
    <StepCard
      n="5"
      title="Cuidar la versión móvil"
      detail="Google utiliza indexación mobile-first, así que la página debe verse bien y ofrecer el contenido también en móvil."
      color="#dc2626"
    />
    <StepCard
      n="6"
      title="Publicar contenido útil, claro y original"
      detail="Si la página es pobre, duplicada o poco relevante, Google puede rastrearla pero decidir no indexarla."
      color="#0891b2"
    />
  </div>

  <h3>Herramientas concretas de Google que nos ayudan</h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1rem",
      margin: "1.2rem 0",
    }}
  >
    <div
      style={{
        background: "#eff6ff",
        border: "1px solid #93c5fd",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h4 style={{ marginTop: 0 }}>Search Console</h4>
      <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
        Permite ver cobertura, estado de indexación, rendimiento y problemas generales del sitio.
      </p>
    </div>

    <div
      style={{
        background: "#f0fdf4",
        border: "1px solid #86efac",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h4 style={{ marginTop: 0 }}>Inspección de URL</h4>
      <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
        Sirve para revisar una URL concreta, comprobar si está indexada y solicitar indexación.
      </p>
    </div>

    <div
      style={{
        background: "#faf5ff",
        border: "1px solid #c084fc",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h4 style={{ marginTop: 0 }}>Informe de sitemaps</h4>
      <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
        Permite enviar el sitemap y revisar si Google lo ha procesado correctamente.
      </p>
    </div>

    <div
      style={{
        background: "#fefce8",
        border: "1px solid #facc15",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <h4 style={{ marginTop: 0 }}>PageSpeed / experiencia</h4>
      <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
        Ayuda a detectar problemas que pueden empeorar la experiencia de usuario y el rendimiento del sitio.
      </p>
    </div>
  </div>

  <h3>Qué no debemos prometer nunca al cliente</h3>

  <WarningBox title="⚠️ Muy importante">
    <p>
      Enviar un sitemap o solicitar indexación <strong>no garantiza</strong> que Google vaya a
      indexar una página inmediatamente ni que la vaya a posicionar. Son ayudas al proceso,
      no atajos mágicos.
    </p>
  </WarningBox>

  <h3>Aplicación directa en WordPress</h3>

  <p>
    En un proyecto WordPress real, ayudar a Google a indexar suele implicar estas tareas:
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Revisar en Ajustes que no esté marcada la opción de disuadir a los motores de búsqueda</li>
    <li>Generar sitemap con un plugin SEO como Yoast o Rank Math</li>
    <li>Enviar ese sitemap a Search Console</li>
    <li>Usar enlaces internos entre páginas, entradas, categorías o productos</li>
    <li>Comprobar con Inspección de URL si una página importante está indexada</li>
    <li>Solicitar indexación cuando se publica una página nueva relevante</li>
    <li>Evitar contenido muy pobre, duplicado o sin utilidad real</li>
  </ul>

  <TipBox title="📌 Resumen que deben memorizar">
    <p>
      Para que Google indexe mejor una página debemos hacerla
      <strong> descubrible, accesible y valiosa</strong>.
      Es decir: que pueda encontrarla, que pueda leerla y que considere que merece la pena guardarla.
    </p>
  </TipBox>
</section>
{/* ══════════════ SITEMAPS ══════════════ */}
<section className="doc doc-section" id="sitemaps">
  <h2>¿Qué es un sitemap y para qué sirve?</h2>

  <p>
    Un <strong>sitemap</strong> es un archivo que funciona como un mapa estructurado de una web.
    Su función principal es ayudar a los motores de búsqueda a entender qué páginas existen
    dentro de un sitio y cuáles son las más importantes.
  </p>

  <p>
    Cuando Google rastrea internet, lo hace siguiendo enlaces entre páginas. Sin embargo,
    en muchos sitios web existen páginas que no están bien enlazadas o que son nuevas.
    En esos casos, el sitemap actúa como una guía que le indica a Google qué contenido
    debería explorar.
  </p>

  <div
    style={{
      background: "#0f172a",
      color: "#e2e8f0",
      borderRadius: "12px",
      padding: "1.2rem",
      fontFamily: "monospace",
      fontSize: "0.9rem",
      lineHeight: 1.9,
      margin: "1rem 0",
    }}
  >
    Web
    <br />
    ├── Página inicio
    <br />
    ├── Página servicios
    <br />
    ├── Blog
    <br />
    │   ├── artículo 1
    <br />
    │   ├── artículo 2
    <br />
    │   └── artículo 3
    <br />
    └── Contacto
  </div>

  <TipBox title="💡 ¿Qué es un sitemap?">
    <p>
      Un sitemap es como un <strong>índice de un libro</strong>. No contiene todo el contenido,
      pero muestra qué capítulos existen y cómo se organiza el sitio.
    </p>
  </TipBox>

  <h3>Tipos de sitemap</h3>

  <p>
    En SEO existen principalmente dos tipos de sitemap, aunque el más importante para
    posicionamiento es el sitemap XML.
  </p>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Para quién está pensado</th>
          <th>Uso principal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sitemap XML</strong></td>
          <td>Motores de búsqueda</td>
          <td>Ayudar a Google a descubrir URLs</td>
        </tr>
        <tr>
          <td><strong>Sitemap HTML</strong></td>
          <td>Usuarios</td>
          <td>Mostrar estructura del sitio</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    En SEO normalmente hablamos del <strong>sitemap XML</strong>, que es un archivo técnico
    que contiene una lista de URLs de la web.
  </p>

  <h3>Ejemplo real de sitemap XML</h3>

  <p>
    Un sitemap XML es simplemente un archivo estructurado que contiene direcciones
    de páginas importantes del sitio.
  </p>

  <pre>
{`<urlset>
  <url>
    <loc>https://midominio.com/</loc>
  </url>
  <url>
    <loc>https://midominio.com/blog/</loc>
  </url>
  <url>
    <loc>https://midominio.com/contacto/</loc>
  </url>
</urlset>`}
  </pre>

  <p>
    Este archivo no está pensado para personas, sino para buscadores como Google,
    que lo utilizan para descubrir páginas nuevas o actualizadas.
  </p>

  <WarningBox title="⚠️ Algo muy importante">
    <p>
      Tener un sitemap <strong>no garantiza que Google vaya a posicionar una página</strong>.
      Solo facilita que Google pueda encontrarla y analizarla.
    </p>
  </WarningBox>

  <h3>¿Cómo generar un sitemap en WordPress?</h3>

  <p>
    En WordPress lo más habitual es generar el sitemap automáticamente mediante
    un plugin SEO. Esto evita tener que crearlo manualmente y permite mantenerlo
    actualizado cada vez que se publica contenido nuevo.
  </p>

  <h4>Método recomendado: usar un plugin SEO</h4>

  <p>
    Los plugins SEO generan el sitemap automáticamente y lo actualizan cuando
    se añaden nuevas páginas o artículos.
  </p>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Plugin</th>
          <th>Genera sitemap</th>
          <th>Uso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Yoast SEO</strong></td>
          <td>Sí</td>
          <td>Uno de los más usados</td>
        </tr>
        <tr>
          <td><strong>Rank Math</strong></td>
          <td>Sí</td>
          <td>Muy completo y popular</td>
        </tr>
        <tr>
          <td><strong>All in One SEO</strong></td>
          <td>Sí</td>
          <td>Alternativa clásica</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Cómo encontrar el sitemap de tu web</h3>

  <p>
    Una vez instalado un plugin SEO, el sitemap suele generarse automáticamente
    en una dirección como esta:
  </p>

  <pre>
https://tudominio.com/sitemap_index.xml
  </pre>

  <p>
    En esa página aparecerá el índice de los distintos sitemaps del sitio,
    por ejemplo:
  </p>

  <ul>
    <li>sitemap de páginas</li>
    <li>sitemap de entradas del blog</li>
    <li>sitemap de categorías</li>
    <li>sitemap de productos (en WooCommerce)</li>
  </ul>

  <h3>Cómo enviar el sitemap a Google</h3>

  <p>
    Para que Google tenga en cuenta el sitemap, lo recomendable es enviarlo
    a través de <strong>Google Search Console</strong>.
  </p>

  <div style={{ margin: "1.2rem 0" }}>
    <StepCard
      n="1"
      title="Entrar en Google Search Console"
      detail="Accede al panel de tu propiedad web."
      color="#2563eb"
    />

    <StepCard
      n="2"
      title="Abrir la sección 'Sitemaps'"
      detail="En el menú lateral encontrarás la opción para gestionar sitemaps."
      color="#16a34a"
    />

    <StepCard
      n="3"
      title="Introducir la URL del sitemap"
      detail="Normalmente será /sitemap_index.xml."
      color="#7c3aed"
    />

    <StepCard
      n="4"
      title="Enviar el sitemap"
      detail="Google lo analizará y mostrará cuántas URLs ha detectado."
      color="#f59e0b"
    />
  </div>

  <h3>¿Cuándo es especialmente útil un sitemap?</h3>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Cuando la web es nueva</li>
    <li>Cuando el sitio tiene muchas páginas</li>
    <li>Cuando hay contenido que no está muy enlazado</li>
    <li>Cuando se publican contenidos con frecuencia</li>
    <li>En tiendas online con muchos productos</li>
  </ul>

  <TipBox title="📌 Regla sencilla para alumnos">
    <p>
      Si una web quiere posicionar en Google, debe tener
      <strong> un sitemap actualizado y enviado a Search Console</strong>.
    </p>
  </TipBox>

</section>

   {/* ══════════════ S3 ══════════════ */}
<section className="doc doc-section" id="conceptos-clave">
  <h2>3. Conceptos clave</h2>

  <p>
    Antes de profundizar en herramientas y estrategias SEO, conviene familiarizarse
    con algunos términos que aparecen constantemente en el análisis del posicionamiento
    web. Comprender estos conceptos ayuda a interpretar mejor los datos de herramientas
    como Search Console, Google Analytics o los plugins SEO de WordPress.
  </p>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Qué significa</th>
          <th>Por qué importa</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><strong>Palabra clave</strong></td>
          <td>La búsqueda o tema que queremos trabajar</td>
          <td>Ayuda a orientar el contenido hacia lo que el usuario busca</td>
        </tr>

        <tr>
          <td><strong>Intención de búsqueda</strong></td>
          <td>Lo que realmente quiere encontrar el usuario</td>
          <td>Si no se entiende bien, el contenido no responde a la necesidad</td>
        </tr>

        <tr>
          <td><strong>Nicho</strong></td>
          <td>Un sector o temática concreta dentro de un mercado</td>
          <td>Permite especializar el contenido y competir mejor</td>
        </tr>

        <tr>
          <td><strong>Rastreo</strong></td>
          <td>Proceso por el que Google descubre páginas</td>
          <td>Si Google no rastrea una página, no puede analizarla</td>
        </tr>

        <tr>
          <td><strong>Indexación</strong></td>
          <td>Decisión de Google de guardar una página en su índice</td>
          <td>Una página no indexada no puede aparecer en resultados</td>
        </tr>

        <tr>
          <td><strong>SERP</strong></td>
          <td>Página de resultados que muestra Google tras una búsqueda</td>
          <td>Es el entorno donde compiten todas las webs</td>
        </tr>

        <tr>
          <td><strong>Impresiones</strong></td>
          <td>Número de veces que una página aparece en resultados</td>
          <td>Indica visibilidad en Google</td>
        </tr>

        <tr>
          <td><strong>CTR</strong></td>
          <td>Porcentaje de clics respecto a impresiones</td>
          <td>Mide si el título y la descripción atraen al usuario</td>
        </tr>

        <tr>
          <td><strong>Tasa de rebote</strong></td>
          <td>Usuarios que abandonan la página sin interactuar</td>
          <td>Puede indicar que el contenido no satisface al usuario</td>
        </tr>

        <tr>
          <td><strong>Autoridad</strong></td>
          <td>Nivel de confianza que transmite una web</td>
          <td>Influye especialmente en sectores competidos</td>
        </tr>

        <tr>
          <td><strong>Backlinks</strong></td>
          <td>Enlaces que otras webs hacen hacia la nuestra</td>
          <td>Son una de las señales más importantes de relevancia</td>
        </tr>

        <tr>
          <td><strong>Enlazado interno</strong></td>
          <td>Enlaces entre páginas de la misma web</td>
          <td>Ayuda a Google a entender la estructura del sitio</td>
        </tr>

        <tr>
          <td><strong>SEO On-page</strong></td>
          <td>Optimización del contenido dentro de la propia web</td>
          <td>Incluye títulos, estructura, texto y enlaces internos</td>
        </tr>

        <tr>
          <td><strong>SEO Off-page</strong></td>
          <td>Factores externos que influyen en el posicionamiento</td>
          <td>Principalmente enlaces y menciones de otras webs</td>
        </tr>

        <tr>
          <td><strong>Contenido evergreen</strong></td>
          <td>Contenido que sigue siendo útil durante mucho tiempo</td>
          <td>Puede generar tráfico constante durante años</td>
        </tr>

        <tr>
          <td><strong>Core Web Vitals</strong></td>
          <td>Métricas de experiencia de usuario (velocidad, estabilidad)</td>
          <td>Influyen en la calidad percibida de la página</td>
        </tr>

        <tr>
          <td><strong>Conversión</strong></td>
          <td>Acción que queremos que haga el usuario</td>
          <td>Ejemplo: comprar, registrarse o enviar un formulario</td>
        </tr>

      </tbody>
    </table>
  </div>

  <TipBox title="📌 Regla didáctica">
    <p>
      Antes de aplicar técnicas SEO, asegúrate de que el alumno distingue tres elementos:
      <strong> qué busca el usuario</strong>, <strong>qué entiende Google</strong> y
      <strong> qué ofrece realmente la página</strong>.  
      Si estas tres piezas no encajan, el posicionamiento difícilmente funcionará.
    </p>
  </TipBox>

</section>
      {/* ══════════════ S4 ══════════════ */}
    <section className="doc doc-section" id="tipos-seo">
  <h2>4. Tipos de SEO</h2>

  <p>
    Cuando se habla de posicionamiento en buscadores es importante distinguir
    primero entre <strong>tráfico orgánico</strong> y <strong>tráfico de pago</strong>.
    Aunque ambos aparecen en los resultados de Google, funcionan de manera muy diferente.
  </p>

  <h3>SEO orgánico vs posicionamiento de pago</h3>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Qué es</th>
          <th>Características</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><strong>SEO orgánico</strong></td>
          <td>Posicionamiento natural en los resultados de búsqueda</td>
          <td>
            Se consigue optimizando contenido, estructura y autoridad de la web.
            No se paga por aparecer en los resultados.
          </td>
        </tr>

        <tr>
          <td><strong>SEM / SEO de pago</strong></td>
          <td>Anuncios que aparecen en Google al buscar algo</td>
          <td>
            Funciona mediante campañas publicitarias (Google Ads).
            Se paga por clic o por impresiones.
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  <TipBox title="💡 Idea clave para alumnos">
    <p>
      El SEO busca aparecer en Google <strong>porque el contenido es relevante</strong>.
      El SEM aparece porque <strong>se paga por el anuncio</strong>.
    </p>
  </TipBox>

  <h3>Principales tipos de SEO dentro de una estrategia</h3>

  <p>
    El SEO no es una sola tarea. En realidad se divide en varias áreas que
    trabajan juntas para mejorar el posicionamiento.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "1rem",
      margin: "1.25rem 0",
    }}
  >
    <ConceptCard
      title="SEO on page"
      text="Optimización del contenido y de los elementos dentro de la propia página: títulos, textos, URLs, encabezados, imágenes, enlazado interno."
      color="#eff6ff"
      border="#93c5fd"
    />

    <ConceptCard
      title="SEO técnico"
      text="Aspectos que facilitan el rastreo, la indexación y el rendimiento: sitemap, robots, velocidad, móvil, errores, estructura."
      color="#f0fdf4"
      border="#86efac"
    />

    <ConceptCard
      title="SEO off page"
      text="Factores externos a la web, especialmente enlaces de otras páginas que aumentan la autoridad del dominio."
      color="#faf5ff"
      border="#c084fc"
    />

    <ConceptCard
      title="SEO local"
      text="Optimización para búsquedas geográficas: ficha de negocio, mapas, reseñas, consistencia de datos y páginas locales."
      color="#fefce8"
      border="#facc15"
    />
  </div>

  <h3>Otros tipos de SEO que se utilizan en proyectos reales</h3>

  <p>
    Dependiendo del tipo de web o del objetivo del proyecto, el SEO puede
    especializarse en diferentes áreas.
  </p>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Tipo de SEO</th>
          <th>En qué consiste</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><strong>SEO para e-commerce</strong></td>
          <td>
            Optimización de tiendas online: fichas de producto,
            categorías, filtros, reseñas y estructura de catálogo.
          </td>
        </tr>

        <tr>
          <td><strong>SEO de contenidos</strong></td>
          <td>
            Estrategia basada en artículos, guías y recursos que
            responden a preguntas del usuario.
          </td>
        </tr>

        <tr>
          <td><strong>SEO internacional</strong></td>
          <td>
            Posicionamiento en distintos países o idiomas
            utilizando estructuras multilingües y etiquetas hreflang.
          </td>
        </tr>

        <tr>
          <td><strong>SEO para imágenes y vídeo</strong></td>
          <td>
            Optimización de contenido visual para aparecer en
            Google Images o en resultados de vídeo.
          </td>
        </tr>

        <tr>
          <td><strong>SEO para noticias</strong></td>
          <td>
            Estrategias específicas para aparecer en Google News
            y en resultados de actualidad.
          </td>
        </tr>

        <tr>
          <td><strong>SEO para apps</strong></td>
          <td>
            Optimización de aplicaciones móviles en buscadores
            y tiendas de apps (ASO).
          </td>
        </tr>

      </tbody>
    </table>
  </div>

  <WarningBox title="⚠️ Confusión habitual">
    <p>
      Muchos proyectos intentan mejorar el SEO escribiendo más contenido,
      pero a veces el problema está en el SEO técnico: páginas lentas,
      errores de indexación o una estructura que Google no puede entender bien.
    </p>
  </WarningBox>

  <TipBox title="📌 Regla práctica">
    <p>
      Una estrategia SEO sólida combina tres cosas:
      <strong> contenido útil</strong>, <strong>estructura técnica correcta</strong>
      y <strong>autoridad externa</strong>.
    </p>
  </TipBox>

</section>
{/* ══════════════ S5 ══════════════ */}
<section className="doc doc-section" id="white-grey-black-seo">
  <h2>White Hat, Grey Hat y Black Hat SEO</h2>

  <p>
    En el mundo del posicionamiento en buscadores no todas las estrategias son iguales.
    Algunas siguen las recomendaciones oficiales de Google y buscan mejorar la calidad
    del contenido y la experiencia del usuario. Otras intentan manipular el algoritmo
    para obtener resultados rápidos.
  </p>

  <p>
    Para explicar estas diferencias se utilizan tres términos muy conocidos dentro
    del SEO: <strong>White Hat</strong>, <strong>Grey Hat</strong> y <strong>Black Hat</strong>.
    Estos conceptos hacen referencia al tipo de prácticas utilizadas para mejorar
    el posicionamiento de una web.
  </p>

  <TipBox title="💡 Idea clave">
    <p>
      No todo lo que posiciona bien es una buena práctica. Algunas técnicas pueden
      funcionar durante un tiempo, pero terminar penalizadas por los motores de búsqueda.
    </p>
  </TipBox>

  <h3>Tipos de estrategias SEO</h3>

  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Tipo de SEO</th>
          <th>Qué significa</th>
          <th>Riesgo</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><strong>White Hat SEO</strong></td>
          <td>
            Estrategias que siguen las recomendaciones de Google y se centran
            en ofrecer contenido útil, buena experiencia de usuario y una
            estructura clara del sitio.
          </td>
          <td>Bajo</td>
        </tr>

        <tr>
          <td><strong>Grey Hat SEO</strong></td>
          <td>
            Técnicas que no están claramente prohibidas, pero que buscan
            aprovechar zonas ambiguas del algoritmo para ganar posicionamiento.
          </td>
          <td>Moderado</td>
        </tr>

        <tr>
          <td><strong>Black Hat SEO</strong></td>
          <td>
            Estrategias diseñadas para manipular el algoritmo de Google
            mediante técnicas artificiales o engañosas.
          </td>
          <td>Alto</td>
        </tr>

      </tbody>
    </table>
  </div>

  <h3>White Hat SEO: la estrategia sostenible</h3>

  <p>
    El <strong>White Hat SEO</strong> es el enfoque que recomiendan los motores
    de búsqueda. Se basa en crear páginas útiles, bien estructuradas y pensadas
    para resolver las necesidades reales del usuario.
  </p>

  <p>
    Este tipo de SEO suele requerir más tiempo, pero genera resultados estables
    y sostenibles en el largo plazo.
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Crear contenido original y de calidad</li>
    <li>Optimizar títulos, encabezados y estructura</li>
    <li>Mejorar la velocidad y experiencia móvil</li>
    <li>Usar enlaces internos de forma lógica</li>
    <li>Conseguir enlaces naturales de otras webs</li>
  </ul>

  <TipBox title="📌 Enfoque profesional">
    <p>
      Las empresas que dependen del tráfico orgánico suelen apostar
      por estrategias White Hat porque reducen el riesgo de penalizaciones.
    </p>
  </TipBox>

  <h3>Grey Hat SEO: la zona intermedia</h3>

  <p>
    El <strong>Grey Hat SEO</strong> se sitúa en un punto intermedio.
    Son técnicas que no siempre están explícitamente prohibidas, pero
    que buscan influir en el algoritmo más que mejorar la experiencia real.
  </p>

  <p>
    Estas prácticas pueden funcionar temporalmente, pero también pueden
    perder eficacia cuando los algoritmos evolucionan.
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Compra moderada de enlaces</li>
    <li>Creación de redes de blogs</li>
    <li>Uso intensivo de automatización de contenidos</li>
    <li>Estrategias agresivas de enlazado</li>
  </ul>

  <WarningBox title="⚠️ Riesgo estratégico">
    <p>
      Algunas técnicas Grey Hat pueden generar resultados rápidos,
      pero también pueden ser detectadas por los algoritmos de Google
      y provocar pérdida de posicionamiento.
    </p>
  </WarningBox>

  <h3>Black Hat SEO: manipulación del algoritmo</h3>

  <p>
    El <strong>Black Hat SEO</strong> engloba prácticas claramente
    contrarias a las directrices de los motores de búsqueda.
    Su objetivo es manipular el algoritmo para posicionar una web
    rápidamente, sin aportar valor real al usuario.
  </p>

  <p>
    Estas estrategias pueden provocar penalizaciones, pérdida de tráfico
    o incluso la eliminación completa del sitio de los resultados de búsqueda.
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Keyword stuffing (repetición excesiva de palabras clave)</li>
    <li>Contenido duplicado o generado automáticamente</li>
    <li>Redes masivas de enlaces artificiales</li>
    <li>Cloaking (mostrar contenido distinto a Google y al usuario)</li>
    <li>Páginas ocultas diseñadas solo para buscadores</li>
  </ul>

  <WarningBox title="🚨 Penalizaciones">
    <p>
      Google puede aplicar penalizaciones manuales o algorítmicas
      cuando detecta prácticas manipulativas. Recuperar la visibilidad
      después de una penalización puede ser un proceso largo y complejo.
    </p>
  </WarningBox>

  <h3>Qué enfoque utilizan los profesionales del SEO</h3>

  <p>
    En proyectos profesionales, especialmente en empresas que dependen
    de su visibilidad online, se priorizan estrategias basadas en
    <strong>White Hat SEO</strong>.
  </p>

  <p>
    Esto implica trabajar a largo plazo en tres pilares fundamentales:
  </p>

  <ul style={{ lineHeight: 1.8 }}>
    <li>Contenido útil y bien estructurado</li>
    <li>Arquitectura técnica sólida</li>
    <li>Autoridad y reputación digital</li>
  </ul>

  <TipBox title="🎯 Conclusión">
    <p>
      El verdadero SEO no consiste en engañar al algoritmo, sino en
      crear páginas que respondan mejor que ninguna otra a la
      intención de búsqueda del usuario.
    </p>
  </TipBox>

</section>
      {/* ══════════════ S5 ══════════════ */}
      <section className="doc doc-section" id="seo-wordpress">
        <h2>5. Cómo se trabaja el SEO en WordPress</h2>

        <p>
          WordPress es una buena base para el SEO porque permite crear contenidos con estructura,
          URLs limpias, categorías, etiquetas, páginas, entradas, imágenes optimizadas y plugins
          especializados. Pero eso no significa que una instalación de WordPress esté optimizada por
          defecto.
        </p>

        <h3>Qué partes de WordPress influyen en el SEO</h3>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Elemento de WordPress</th>
                <th>Relación con SEO</th>
                <th>Importancia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ajustes de lectura</strong></td>
                <td>Permiten o bloquean la indexación del sitio</td>
                <td><SeoChip label="Crítica" type="danger" /></td>
              </tr>
              <tr>
                <td><strong>Enlaces permanentes</strong></td>
                <td>Definen las URLs</td>
                <td><SeoChip label="Muy alta" type="danger" /></td>
              </tr>
              <tr>
                <td><strong>Páginas y entradas</strong></td>
                <td>Son la base del contenido posicionable</td>
                <td><SeoChip label="Muy alta" type="ok" /></td>
              </tr>
              <tr>
                <td><strong>Categorías</strong></td>
                <td>Organizan la arquitectura temática</td>
                <td><SeoChip label="Alta" type="ok" /></td>
              </tr>
              <tr>
                <td><strong>Imágenes</strong></td>
                <td>Afectan a accesibilidad, velocidad y contexto semántico</td>
                <td><SeoChip label="Alta" type="warn" /></td>
              </tr>
              <tr>
                <td><strong>Plugins SEO</strong></td>
                <td>Ayudan con metadatos, sitemap e indexación</td>
                <td><SeoChip label="Apoyo" type="info" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Plugins SEO habituales en WordPress</h3>

        <ul>
          <li><strong>Yoast SEO:</strong> uno de los más conocidos y didácticos para empezar.</li>
          <li><strong>Rank Math:</strong> muy completo, con muchas opciones en versión gratuita.</li>
          <li><strong>All in One SEO:</strong> alternativa popular y sólida.</li>
        </ul>

        <TipBox title="💡 Lo importante del plugin">
          <p>
            Un plugin SEO no “posiciona” una web. Lo que hace es ayudarte a gestionar aspectos
            técnicos y de presentación: títulos SEO, meta descriptions, sitemap, indexación,
            schema en algunos casos y análisis básicos.
          </p>
        </TipBox>
      </section>

      {/* ══════════════ S6 ══════════════ */}
      <section className="doc doc-section" id="palabras-clave">
        <h2>6. Palabras clave e intención de búsqueda</h2>

        <p>
          Uno de los conceptos más importantes del SEO es la <strong>intención de búsqueda</strong>.
          No basta con saber qué palabra usa un usuario; también hay que entender qué espera encontrar.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            margin: "1.25rem 0",
          }}
        >
          <ConceptCard
            title="Informacional"
            text="El usuario quiere aprender algo. Ejemplo: 'qué es un tema hijo en WordPress'."
            color="#eff6ff"
            border="#93c5fd"
          />
          <ConceptCard
            title="Navegacional"
            text="Quiere llegar a una web concreta. Ejemplo: 'WordPress.org plugins'."
            color="#f0fdf4"
            border="#86efac"
          />
          <ConceptCard
            title="Comercial"
            text="Está comparando opciones antes de decidir. Ejemplo: 'mejores plugins SEO para WordPress'."
            color="#faf5ff"
            border="#c084fc"
          />
          <ConceptCard
            title="Transaccional"
            text="Quiere contratar, comprar o realizar una acción directa. Ejemplo: 'curso WordPress Sevilla'."
            color="#fefce8"
            border="#facc15"
          />
        </div>

        <h3>Qué debe aprender el alumno aquí</h3>
        <ul>
          <li>No todas las búsquedas se trabajan igual</li>
          <li>No todas las páginas deben atacar la misma intención</li>
          <li>Una página comercial no se redacta igual que una guía informativa</li>
          <li>El SEO empieza a mejorar mucho cuando el contenido responde justo a la intención adecuada</li>
        </ul>

        <WarningBox title="⚠️ Error muy común">
          <p>
            Crear una página de servicio con un texto enciclopédico o crear una guía didáctica con
            tono de venta. Cuando la intención y el contenido no coinciden, Google lo detecta y el usuario también.
          </p>
        </WarningBox>
      </section>

      {/* ══════════════ S7 ══════════════ */}
      <section className="doc doc-section" id="seo-on-page">
        <h2>7. SEO on page: qué optimizamos dentro de una página</h2>

        <p>
          El SEO on page reúne todos los elementos internos que ayudan a Google y al usuario a
          comprender mejor una página.
        </p>

        <h3>Elementos principales del SEO on page</h3>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Qué hace</th>
                <th>Recomendación básica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Title SEO</strong></td>
                <td>Es el título que suele mostrarse en Google</td>
                <td>Claro, descriptivo y alineado con la búsqueda</td>
              </tr>
              <tr>
                <td><strong>Meta description</strong></td>
                <td>Resume la página y favorece el clic</td>
                <td>Persuasiva, natural y coherente</td>
              </tr>
              <tr>
                <td><strong>H1</strong></td>
                <td>Es el título principal visible de la página</td>
                <td>Uno por página, claro y útil</td>
              </tr>
              <tr>
                <td><strong>H2 y H3</strong></td>
                <td>Organizan el contenido</td>
                <td>Estructura lógica y jerárquica</td>
              </tr>
              <tr>
                <td><strong>URL</strong></td>
                <td>Ayuda a entender el contenido</td>
                <td>Limpia y corta</td>
              </tr>
              <tr>
                <td><strong>Contenido</strong></td>
                <td>Responde a la intención de búsqueda</td>
                <td>Útil, claro y original</td>
              </tr>
              <tr>
                <td><strong>Imágenes</strong></td>
                <td>Aportan contexto y experiencia</td>
                <td>Optimizar peso, nombre y alt</td>
              </tr>
              <tr>
                <td><strong>Enlazado interno</strong></td>
                <td>Relaciona contenidos</td>
                <td>Enlazar con sentido, no al azar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TipBox title="✅ Explicación muy útil para alumnos">
          <p>
            El SEO on page se parece a ordenar muy bien una clase: títulos claros, apartados bien
            estructurados, ejemplos relevantes, material accesible y enlaces entre contenidos relacionados.
          </p>
        </TipBox>
      </section>

      {/* ══════════════ S8 ══════════════ */}
      <section className="doc doc-section" id="seo-tecnico">
        <h2>8. SEO técnico: lo que hace que Google pueda rastrear y entender la web</h2>

        <p>
          El SEO técnico se centra en la parte estructural y funcional. Muchas veces el contenido
          es correcto, pero la web no rinde bien porque falla la base técnica.
        </p>

        <h3>Aspectos técnicos fundamentales</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1rem",
            margin: "1.25rem 0",
          }}
        >
          <ConceptCard
            title="Rastreo"
            text="Google debe poder acceder a las páginas importantes."
            color="#eff6ff"
            border="#93c5fd"
          />
          <ConceptCard
            title="Indexación"
            text="Las páginas valiosas deben poder entrar en el índice."
            color="#f0fdf4"
            border="#86efac"
          />
          <ConceptCard
            title="Velocidad"
            text="Una web lenta perjudica la experiencia y dificulta el rendimiento SEO."
            color="#faf5ff"
            border="#c084fc"
          />
          <ConceptCard
            title="Móvil"
            text="La experiencia en móvil ya no es secundaria: es central."
            color="#fefce8"
            border="#facc15"
          />
          <ConceptCard
            title="Estado HTTP"
            text="Errores 404, redirecciones mal hechas o páginas rotas generan problemas."
            color="#fee2e2"
            border="#ef4444"
          />
          <ConceptCard
            title="Sitemap y robots"
            text="Ayudan a guiar el rastreo y la gestión de páginas."
            color="#ede9fe"
            border="#8b5cf6"
          />
        </div>

        <WarningBox title="⚠️ Punto crítico">
          <p>
            El alumno debe entender que una página bonita no siempre es una página bien preparada
            para SEO. Si el sitio es pesado, tiene errores de indexación o está mal enlazado,
            la estética no resuelve el problema.
          </p>
        </WarningBox>
      </section>

      {/* ══════════════ PLACEHOLDER CACHE ══════════════ */}
      <section className="doc doc-section" id="cache-placeholder">
      <section id="cache" className="doc-section">

<h2>9. Caché en WordPress: rendimiento, SEO y seguridad</h2>

<p>
La caché es uno de los mecanismos más importantes para optimizar el rendimiento
de una web WordPress. Consiste en almacenar temporalmente versiones ya generadas
de una página para que puedan servirse rápidamente sin tener que reconstruirla
cada vez desde la base de datos.
</p>

<p>
En WordPress, cada vez que un usuario visita una página normalmente ocurre este
proceso:
</p>

<ol>
<li>El servidor recibe la petición</li>
<li>WordPress ejecuta PHP</li>
<li>Se consulta la base de datos</li>
<li>Se construye el HTML</li>
<li>Se envía la página al navegador</li>
</ol>

<p>
Este proceso puede repetirse cientos o miles de veces por minuto en webs con
mucho tráfico.
</p>

<div className="callout tip">
La caché evita repetir ese proceso constantemente, sirviendo directamente
una versión ya generada de la página.
</div>

</section>
        <details className="dd">
<summary>Funcionamiento de la caché en WordPress</summary>

<div className="dd-body">

<p>
Cuando se activa un sistema de caché, la primera vez que un usuario visita
una página se genera el HTML completo normalmente. Sin embargo, ese resultado
se guarda temporalmente.
</p>

<p>
Las siguientes visitas reciben directamente ese archivo ya generado, evitando:
</p>

<ul>
<li>consultas a la base de datos</li>
<li>ejecución de PHP</li>
<li>procesamiento de WordPress</li>
</ul>

<p>
Esto reduce drásticamente el tiempo de carga del sitio.
</p>

</div>
</details>
<section className="doc-section">

<h3>Tipos de caché</h3>

<div className="table-wrap">
<table className="table table-zebra">

<thead>
<tr>
<th>Tipo de caché</th>
<th>Qué almacena</th>
<th>Impacto</th>
</tr>
</thead>

<tbody>

<tr>
<th scope="row">Page Cache</th>
<td>HTML completo de la página</td>
<td>Reduce el uso de PHP y base de datos</td>
</tr>

<tr>
<th scope="row">Browser Cache</th>
<td>Archivos estáticos en el navegador</td>
<td>Acelera visitas repetidas</td>
</tr>

<tr>
<th scope="row">Object Cache</th>
<td>Consultas a base de datos</td>
<td>Reduce carga del servidor</td>
</tr>

<tr>
<th scope="row">CDN Cache</th>
<td>Contenido distribuido globalmente</td>
<td>Mejora velocidad internacional</td>
</tr>

</tbody>

</table>
</div>

</section>
<section className="doc-section">

<h3>Relación con SEO y seguridad</h3>

<p>
La caché está principalmente relacionada con el rendimiento del sitio web
y con el posicionamiento SEO.
</p>

<div className="table-wrap">
<table className="table table-zebra">

<thead>
<tr>
<th>Área</th>
<th>Relación con la caché</th>
</tr>
</thead>

<tbody>

<tr>
<th scope="row">SEO</th>
<td>
Muy alta. Google considera la velocidad de carga un factor de ranking.
Una web rápida mejora la experiencia de usuario y el posicionamiento.
</td>
</tr>

<tr>
<th scope="row">Rendimiento</th>
<td>
Crítica. Reduce consumo de CPU, memoria y consultas a la base de datos.
</td>
</tr>

<tr>
<th scope="row">Seguridad</th>
<td>
Indirecta. Puede reducir impacto de ataques de tráfico elevado
porque el servidor procesa menos solicitudes dinámicas.
</td>
</tr>

</tbody>

</table>
</div>

<div className="callout warn">
La caché no sustituye a un firewall ni a un sistema de seguridad.
Solo mejora el rendimiento del servidor.
</div>

</section>
<section className="doc-section">

<h3>Plugins de caché recomendados</h3>

<div className="table-wrap">
<table className="table table-zebra">

<thead>
<tr>
<th>Plugin</th>
<th>Características</th>
<th>Nivel</th>
</tr>
</thead>

<tbody>

<tr>
<th scope="row">LiteSpeed Cache</th>
<td>
Muy potente, incluye optimización de imágenes, CSS y JS.
Especialmente eficaz en servidores LiteSpeed.
</td>
<td>Profesional</td>
</tr>

<tr>
<th scope="row">WP Rocket</th>
<td>
Plugin premium muy fácil de configurar y muy eficiente.
</td>
<td>Profesional</td>
</tr>

<tr>
<th scope="row">W3 Total Cache</th>
<td>
Uno de los más antiguos y completos, con muchas opciones.
</td>
<td>Avanzado</td>
</tr>

<tr>
<th scope="row">WP Fastest Cache</th>
<td>
Muy sencillo de usar y eficaz en webs pequeñas.
</td>
<td>Básico</td>
</tr>

</tbody>

</table>
</div>

</section>
<section className="doc-section">

<h3>Buenas prácticas</h3>

<ul>

<li>No usar varios plugins de caché al mismo tiempo.</li>

<li>Vaciar la caché después de actualizar plugins o contenido.</li>

<li>Excluir de la caché páginas dinámicas (carrito, checkout).</li>

<li>Combinar caché con CDN cuando el tráfico es alto.</li>

</ul>

<div className="callout tip">
En WooCommerce es fundamental excluir de la caché páginas como
carrito, pago y cuenta de usuario.
</div>

</section>
<div className="callout">
<strong>Resumen:</strong>  
La caché no es una herramienta de seguridad, sino de rendimiento.
Sin embargo, al reducir la carga del servidor y mejorar la velocidad,
contribuye indirectamente a la estabilidad del sitio y al SEO.
</div>
      </section>

      {/* ══════════════ S10 ══════════════ */}
      <section className="doc doc-section" id="herramientas-propias">
        <h2>10. Herramientas para analizar el SEO de nuestra propia web</h2>

        <p>
          Un profesional SEO no trabaja solo por intuición. Necesita herramientas que le permitan
          ver datos reales: indexación, palabras clave, velocidad, errores, enlaces y evolución.
        </p>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Para qué sirve</th>
                <th>Nivel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Google Search Console</strong></td>
                <td>Ver impresiones, clics, consultas, indexación y errores de cobertura</td>
                <td><SeoChip label="Imprescindible" type="danger" /></td>
              </tr>
              <tr>
                <td><strong>Google Analytics</strong></td>
                <td>Analizar tráfico, comportamiento de usuarios y conversiones</td>
                <td><SeoChip label="Muy importante" type="ok" /></td>
              </tr>
              <tr>
                <td><strong>PageSpeed Insights</strong></td>
                <td>Medir velocidad y Core Web Vitals</td>
                <td><SeoChip label="Muy importante" type="ok" /></td>
              </tr>
              <tr>
                <td><strong>Lighthouse</strong></td>
                <td>Auditoría técnica desde navegador</td>
                <td><SeoChip label="Muy útil" type="info" /></td>
              </tr>
              <tr>
                <td><strong>Screaming Frog</strong></td>
                <td>Rastrear la web como un robot y detectar errores técnicos</td>
                <td><SeoChip label="Profesional" type="pro" /></td>
              </tr>
              <tr>
                <td><strong>Plugin SEO de WordPress</strong></td>
                <td>Gestionar títulos, metadatos, sitemap e indexación básica</td>
                <td><SeoChip label="Apoyo" type="warn" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Qué puede enseñarse con cada una</h3>

        <div style={{ margin: "1.2rem 0" }}>
          <StepCard
            n="1"
            title="Google Search Console"
            detail="Sirve para saber si Google ve la web, qué páginas indexa y por qué búsquedas aparece."
            color="#2563eb"
          />
          <StepCard
            n="2"
            title="Google Analytics"
            detail="Sirve para medir qué hacen los usuarios una vez llegan a la web."
            color="#16a34a"
          />
          <StepCard
            n="3"
            title="PageSpeed Insights"
            detail="Sirve para detectar problemas de velocidad, renderizado y experiencia en móvil."
            color="#7c3aed"
          />
          <StepCard
            n="4"
            title="Screaming Frog"
            detail="Sirve para localizar títulos duplicados, errores 404, redirecciones, H1 ausentes y otros problemas de estructura."
            color="#f59e0b"
          />
        </div>

        <TipBox title="📌 Herramientas mínimas para clase">
          <p>
            Si el grupo está empezando, con <strong>Search Console + Analytics + PageSpeed
            Insights + un plugin SEO</strong> ya puedes trabajar muchísimo. Screaming Frog puede
            introducirse después como herramienta de nivel profesional.
          </p>
        </TipBox>
      </section>

      {/* ══════════════ S11 ══════════════ */}
      <section className="doc doc-section" id="competidores">
        <h2>11. Cómo analizar el SEO de los competidores</h2>

        <p>
          En SEO no basta con mirar nuestra web. También hay que observar qué hacen mejor los
          competidores que ya están posicionando por las búsquedas que nos interesan.
        </p>

        <p>
          Analizar competidores no significa copiar. Significa detectar:
        </p>

        <ul>
          <li>Qué páginas están posicionando</li>
          <li>Qué temas trabajan</li>
          <li>Cómo estructuran sus contenidos</li>
          <li>Qué términos repiten con naturalidad</li>
          <li>Qué tipo de títulos usan</li>
          <li>Cómo enlazan internamente</li>
          <li>Qué autoridad o perfil de enlaces parecen tener</li>
        </ul>

        <h3>Herramientas útiles para competidores</h3>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Herramienta</th>
                <th>Qué permite ver</th>
                <th>Uso principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Búsqueda manual en Google</strong></td>
                <td>Quién aparece, qué tipo de páginas dominan y qué intención satisface Google</td>
                <td>Primer análisis</td>
              </tr>
              <tr>
                <td><strong>SEO Minion</strong></td>
                <td>Encabezados, enlaces, SERP y elementos básicos on page</td>
                <td>Rápido y didáctico</td>
              </tr>
              <tr>
                <td><strong>Ahrefs</strong></td>
                <td>Palabras clave, backlinks, páginas top y competidores orgánicos</td>
                <td>Profesional</td>
              </tr>
              <tr>
                <td><strong>SEMrush</strong></td>
                <td>Visibilidad, keywords, dominios competidores y contenido</td>
                <td>Profesional</td>
              </tr>
              <tr>
                <td><strong>Ubersuggest</strong></td>
                <td>Ideas de keywords y dominios competidores</td>
                <td>Iniciación / intermedio</td>
              </tr>
              <tr>
                <td><strong>Similarweb</strong></td>
                <td>Visión general de tráfico y canales estimados</td>
                <td>Orientativo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Qué preguntas debe hacerse el alumno al mirar un competidor</h3>

        <div
          style={{
            background: "#f8fafc",
            borderRadius: "12px",
            padding: "1rem 1.1rem",
            borderLeft: "4px solid #2563eb",
            margin: "1rem 0",
          }}
        >
          <ul style={{ margin: 0, lineHeight: 1.8 }}>
            <li>¿Qué tipo de página está posicionando: inicio, servicio, artículo, categoría, ficha?</li>
            <li>¿Qué promete el title y qué desarrolla el contenido?</li>
            <li>¿Qué apartados o bloques incluye?</li>
            <li>¿Qué tono usa: didáctico, comercial, técnico?</li>
            <li>¿Qué palabras relacionadas aparecen con frecuencia?</li>
            <li>¿La página carga rápido y se ve bien en móvil?</li>
            <li>¿Da sensación de autoridad y confianza?</li>
          </ul>
        </div>

        <WarningBox title="⚠️ Muy importante">
          <p>
            No enseñes al alumnado a “copiar palabras clave”. Enséñales a interpretar qué está
            valorando Google en esa búsqueda: formato, intención, profundidad, autoridad, experiencia y claridad.
          </p>
        </WarningBox>
      </section>

      {/* ══════════════ S12 ══════════════ */}
      <section className="doc doc-section" id="auditoria">
        <h2>12. Mini auditoría SEO paso a paso</h2>

        <p>
          Cuando un alumno recibe una web o termina una práctica en WordPress, necesita una forma
          ordenada de revisar si el sitio está bien planteado a nivel SEO.
        </p>

        <div style={{ margin: "1.2rem 0" }}>
          <StepCard
            n="1"
            title="Comprobar si la web puede indexarse"
            detail="Revisar ajustes de lectura, meta robots y presencia en Google."
            color="#2563eb"
          />
          <StepCard
            n="2"
            title="Revisar URLs y estructura"
            detail="Analizar si son limpias, comprensibles y coherentes."
            color="#16a34a"
          />
          <StepCard
            n="3"
            title="Revisar títulos y metadescripciones"
            detail="Ver si describen bien las páginas y favorecen el clic."
            color="#7c3aed"
          />
          <StepCard
            n="4"
            title="Revisar encabezados y contenido"
            detail="Confirmar que la estructura H1-H2-H3 tenga lógica y responda a la intención de búsqueda."
            color="#f59e0b"
          />
          <StepCard
            n="5"
            title="Revisar imágenes y enlazado interno"
            detail="Peso, nombre de archivo, alt y relación con otras páginas del sitio."
            color="#dc2626"
          />
          <StepCard
            n="6"
            title="Medir velocidad"
            detail="Evaluar si la experiencia en móvil y escritorio es razonable."
            color="#0891b2"
          />
          <StepCard
            n="7"
            title="Comparar con los competidores"
            detail="Ver qué están resolviendo mejor para esa búsqueda."
            color="#9333ea"
          />
        </div>

        <TipBox title="✅ Método mental útil">
          <p>
            Una auditoría SEO básica puede resumirse así:
            <strong> ¿se puede encontrar?, ¿se puede entender?, ¿merece aparecer?, ¿es mejor o peor que la competencia?</strong>
          </p>
        </TipBox>
      </section>

      {/* ══════════════ S13 ══════════════ */}
      <section className="doc doc-section" id="errores">
        <h2>13. Errores típicos de principiante</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            margin: "1.2rem 0",
          }}
        >
          <ConceptCard
            title="Pensar que SEO es solo un plugin"
            text="El plugin ayuda, pero no sustituye el trabajo de arquitectura, contenido y análisis."
            color="#fee2e2"
            border="#ef4444"
          />
          <ConceptCard
            title="Obsesionarse con una keyword exacta"
            text="El SEO actual exige contexto, intención y calidad, no repetición mecánica."
            color="#fee2e2"
            border="#ef4444"
          />
          <ConceptCard
            title="No revisar la indexación"
            text="A veces la web no posiciona porque directamente Google no la está indexando."
            color="#fef3c7"
            border="#f59e0b"
          />
          <ConceptCard
            title="Ignorar la velocidad"
            text="Una web lenta perjudica la experiencia y el rendimiento orgánico."
            color="#fef3c7"
            border="#f59e0b"
          />
          <ConceptCard
            title="No mirar la competencia"
            text="Sin contexto competitivo, es difícil valorar qué nivel de contenido hace falta."
            color="#dbeafe"
            border="#3b82f6"
          />
          <ConceptCard
            title="Duplicar títulos o contenidos"
            text="La repetición excesiva resta claridad y puede debilitar el sitio."
            color="#dbeafe"
            border="#3b82f6"
          />
        </div>

        <WarningBox title="⚠️ Lo que más cuesta al principio">
          <p>
            El alumno suele querer una “receta mágica”. Hay que insistir en que el SEO es un
            trabajo de <strong>coherencia, análisis, calidad y mejora continua</strong>, no un truco rápido.
          </p>
        </WarningBox>
      </section>
      <section className="doc doc-section" id="google-search-console">
  <h2>Google Search Console: la herramienta esencial para saber cómo ve Google nuestra web</h2>

  <div className="doc-content">
    <p>
      Si hay una herramienta que todo alumno debe aprender cuando empieza con SEO, esa es
      <strong> Google Search Console</strong>. Es una plataforma gratuita de Google que permite
      comprobar si el buscador puede encontrar, rastrear, indexar y mostrar correctamente una web
      en sus resultados.
    </p>

    <p>
      Dicho de forma simple: mientras otras herramientas nos ayudan a analizar una página desde
      fuera, <strong>Search Console nos enseña la relación real entre Google y nuestro sitio</strong>.
      Gracias a ella podemos ver si nuestras páginas aparecen en búsquedas, con qué términos lo hacen,
      cuántas impresiones reciben, cuántos clics consiguen y si existen problemas técnicos que estén
      impidiendo su buen rendimiento.
    </p>

    <TipBox title="🎯 Idea clave para el alumnado">
      <p>
        Search Console no sirve para “hacer SEO automáticamente”. Sirve para
        <strong> diagnosticar, medir y tomar decisiones con datos reales</strong>.
      </p>
    </TipBox>

    <h3>¿Para qué sirve exactamente Search Console?</h3>

    <p>
      Esta herramienta cumple varias funciones fundamentales dentro del trabajo SEO:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Comprobar si Google puede acceder a la web</li>
      <li>Ver qué páginas están indexadas y cuáles no</li>
      <li>Detectar errores técnicos de rastreo o cobertura</li>
      <li>Analizar por qué búsquedas aparece nuestra web</li>
      <li>Medir clics, impresiones, CTR y posición media</li>
      <li>Enviar sitemaps</li>
      <li>Revisar experiencia en móvil y problemas de rendimiento</li>
      <li>Controlar manualmente la indexación de URLs concretas</li>
    </ul>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Dato</th>
            <th>Qué significa</th>
            <th>Por qué importa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Impresiones</strong></td>
            <td>Veces que una URL ha aparecido en resultados de Google</td>
            <td>Indica visibilidad</td>
          </tr>
          <tr>
            <td><strong>Clics</strong></td>
            <td>Veces que los usuarios han entrado desde Google</td>
            <td>Indica tráfico orgánico real</td>
          </tr>
          <tr>
            <td><strong>CTR</strong></td>
            <td>Porcentaje de clics respecto a impresiones</td>
            <td>Mide si el resultado resulta atractivo</td>
          </tr>
          <tr>
            <td><strong>Posición media</strong></td>
            <td>Puesto promedio en el que aparece la URL</td>
            <td>Ayuda a evaluar competitividad</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Cómo explicarle Search Console a un alumno que empieza</h3>

    <p>
      Una buena forma de enseñarlo es diferenciar dos ideas:
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
        margin: "1.2rem 0",
      }}
    >
      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #93c5fd",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Lo que Google ve</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Search Console nos enseña si Google encuentra páginas, las indexa, las rastrea bien
          y las muestra en búsquedas.
        </p>
      </div>

      <div
        style={{
          background: "#f0fdf4",
          border: "1px solid #86efac",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Lo que el usuario hace</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Search Console también permite observar si los usuarios hacen clic o no cuando la web
          aparece en Google.
        </p>
      </div>
    </div>

    <h3>Secciones más importantes de Search Console</h3>

    <h4>1. Rendimiento</h4>
    <p>
      Es una de las áreas más útiles. Aquí vemos con qué consultas aparece la web, qué páginas
      reciben tráfico orgánico, cuántas impresiones tienen, su CTR y su posición media.
    </p>

    <p>
      Esta sección permite responder preguntas como:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>¿Por qué búsquedas me está encontrando Google?</li>
      <li>¿Qué páginas funcionan mejor?</li>
      <li>¿Qué contenidos tienen visibilidad pero pocos clics?</li>
      <li>¿Qué términos están creciendo?</li>
    </ul>

    <h4>2. Indexación</h4>
    <p>
      Aquí revisamos qué páginas están indexadas, cuáles no y por qué motivo. Esto es fundamental
      porque una página no puede posicionar si Google no la ha indexado.
    </p>

    <WarningBox title="⚠️ Error frecuente en principiantes">
      <p>
        A veces el alumno cree que una página “no posiciona” por culpa del texto, cuando en realidad
        <strong> ni siquiera está indexada</strong>.
      </p>
    </WarningBox>

    <h4>3. Sitemaps</h4>
    <p>
      Desde Search Console podemos enviar el sitemap XML del sitio para ayudar a Google a descubrir
      y organizar mejor las URLs importantes. Más adelante verás una sección específica sobre sitemaps.
    </p>

    <h4>4. Inspección de URL</h4>
    <p>
      Esta función permite introducir una dirección concreta y comprobar:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Si la URL está indexada o no</li>
      <li>Si Google puede rastrearla correctamente</li>
      <li>Si se está bloqueando por alguna razón</li>
      <li>Si conviene solicitar indexación</li>
    </ul>

    <h3>Qué aprende un alumno usando Search Console</h3>

    <p>
      Trabajar con esta herramienta ayuda a que el alumnado entienda que el SEO no se basa solo en
      “escribir contenidos”, sino también en verificar que Google puede procesarlos correctamente.
      Además, enseña una forma de trabajo profesional basada en datos.
    </p>

    <div
      style={{
        background: "#f8fafc",
        borderRadius: "12px",
        padding: "1rem",
        borderLeft: "4px solid #2563eb",
        margin: "1rem 0",
      }}
    >
      <strong>Pregunta didáctica útil:</strong>
      <p style={{ margin: "0.5rem 0 0 0" }}>
        “¿Esta página está mal optimizada… o Google ni siquiera la está viendo bien?”
      </p>
    </div>

    <h3>Usos prácticos en WordPress</h3>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Comprobar si el sitio está bloqueado accidentalmente a motores de búsqueda</li>
      <li>Detectar URLs antiguas o errores 404</li>
      <li>Ver qué páginas reciben tráfico orgánico real</li>
      <li>Enviar el sitemap generado por Yoast, Rank Math o similar</li>
      <li>Comprobar si nuevos contenidos han sido indexados</li>
    </ul>

    <TipBox title="✅ Regla profesional">
      <p>
        Si un proyecto WordPress quiere trabajar SEO en serio, debe tener
        <strong> Search Console configurado desde el principio</strong>.
      </p>
    </TipBox>
  </div>
</section>
<section className="doc doc-section" id="google-analytics">
  <h2>Google Analytics: cómo analizar el comportamiento real de los usuarios</h2>

  <div className="doc-content">
    <p>
      Mientras Search Console nos muestra la relación entre Google y la web,
      <strong> Google Analytics</strong> nos enseña qué ocurre una vez que el usuario ya ha entrado
      en el sitio. Es decir, nos permite analizar el comportamiento de los visitantes:
      de dónde vienen, qué páginas visitan, cuánto tiempo permanecen, si convierten o si abandonan.
    </p>

    <p>
      En SEO esto es muy importante, porque no basta con atraer visitas.
      <strong> También necesitamos saber si esas visitas son útiles</strong>.
      Una página puede recibir mucho tráfico, pero si los usuarios entran y se van sin interactuar,
      quizá no esté respondiendo bien a lo que buscaban.
    </p>

    <TipBox title="🎯 Idea clave para el alumnado">
      <p>
        Search Console responde a la pregunta <strong>“cómo llegamos a Google”</strong>.
        Analytics responde a la pregunta <strong>“qué hacen los usuarios cuando llegan”</strong>.
      </p>
    </TipBox>

    <h3>¿Qué mide Google Analytics?</h3>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Usuarios y sesiones</li>
      <li>Páginas vistas</li>
      <li>Origen del tráfico</li>
      <li>Tiempo de interacción</li>
      <li>Eventos y conversiones</li>
      <li>Dispositivos utilizados</li>
      <li>Rutas de navegación dentro del sitio</li>
    </ul>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Métrica</th>
            <th>Qué indica</th>
            <th>Utilidad SEO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Usuarios</strong></td>
            <td>Personas que visitan la web</td>
            <td>Ayuda a medir alcance real</td>
          </tr>
          <tr>
            <td><strong>Sesiones</strong></td>
            <td>Visitas o periodos de actividad</td>
            <td>Permite analizar volumen de tráfico</td>
          </tr>
          <tr>
            <td><strong>Canales</strong></td>
            <td>Origen del tráfico: orgánico, directo, social, etc.</td>
            <td>Permite diferenciar SEO de otras fuentes</td>
          </tr>
          <tr>
            <td><strong>Engagement</strong></td>
            <td>Nivel de interacción del usuario</td>
            <td>Ayuda a valorar calidad de las visitas</td>
          </tr>
          <tr>
            <td><strong>Conversiones</strong></td>
            <td>Acciones valiosas realizadas</td>
            <td>Permite medir resultado real del tráfico</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Qué relación tiene Analytics con el SEO</h3>

    <p>
      Aunque Analytics no está centrado solo en posicionamiento, sí es una herramienta muy útil
      para evaluar si el tráfico SEO está funcionando bien. Por ejemplo, permite observar:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Qué landing pages reciben visitas orgánicas</li>
      <li>Qué contenidos atraen usuarios pero no convierten</li>
      <li>Qué páginas tienen mejor interacción</li>
      <li>Qué dispositivos usan los visitantes</li>
      <li>Qué recorridos hacen dentro de la web</li>
    </ul>

    <h3>Diferencia entre atraer tráfico y conseguir resultados</h3>

    <p>
      Este es un aprendizaje muy importante para los alumnos. Una web puede atraer visitas desde
      Google, pero eso no significa necesariamente que esté cumpliendo objetivos.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
        margin: "1.2rem 0",
      }}
    >
      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #93c5fd",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Tráfico</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Personas que llegan a la web desde buscadores, redes, enlaces o acceso directo.
        </p>
      </div>

      <div
        style={{
          background: "#fefce8",
          border: "1px solid #facc15",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Resultado</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Formularios enviados, compras realizadas, clics importantes, reservas o cualquier acción objetivo.
        </p>
      </div>
    </div>

    <WarningBox title="⚠️ Error frecuente">
      <p>
        Un alumno puede pensar que una página va bien solo porque tiene muchas visitas.
        Pero si esas visitas no generan interacción ni objetivos, el análisis está incompleto.
      </p>
    </WarningBox>

    <h3>Qué enseñar en una primera aproximación a Analytics</h3>

    <p>
      Para principiantes no hace falta empezar por informes complejísimos. Conviene trabajar,
      sobre todo, estas ideas:
    </p>

    <ol style={{ lineHeight: 1.8 }}>
      <li>De dónde viene el tráfico</li>
      <li>Qué páginas reciben más visitas</li>
      <li>Qué diferencia hay entre orgánico, directo, referral y social</li>
      <li>Qué acciones del usuario merecen considerarse conversiones</li>
      <li>Cómo interpretar el comportamiento en móvil frente a escritorio</li>
    </ol>

    <h3>Aplicación práctica en WordPress</h3>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Medir visitas a páginas de servicios o artículos del blog</li>
      <li>Ver si una página SEO atrae tráfico realmente útil</li>
      <li>Comprobar si una landing convierte o no</li>
      <li>Analizar si una tienda online recibe tráfico pero no vende</li>
      <li>Observar qué rutas siguen los usuarios dentro de la web</li>
    </ul>

    <TipBox title="✅ Resumen clave">
      <p>
        Search Console nos dice <strong>cómo nos encuentra Google</strong>.
        Analytics nos dice <strong>qué hacen los usuarios cuando llegan</strong>.
        Las dos herramientas se complementan y juntas permiten una visión mucho más completa.
      </p>
    </TipBox>
  </div>
</section>
<section className="doc doc-section" id="sitemaps">
  <h2>Sitemaps: qué son, para qué sirven y por qué importan en SEO</h2>

  <div className="doc-content">
    <p>
      Un <strong>sitemap</strong> es un archivo que ayuda a los motores de búsqueda a conocer qué
      páginas, contenidos o recursos son importantes dentro de una web. En el contexto SEO,
      normalmente hablamos del <strong>sitemap XML</strong>, que funciona como una especie de mapa
      estructurado del sitio.
    </p>

    <p>
      Es importante explicarle al alumnado que un sitemap
      <strong> no garantiza que Google vaya a posicionar una página</strong>, pero sí le ayuda a
      descubrirla, entender la estructura general del sitio y priorizar el rastreo.
    </p>

    <TipBox title="🎯 Definición clara para clase">
      <p>
        Un sitemap no es un truco SEO. Es una herramienta de organización que
        <strong> facilita el trabajo a Google</strong>.
      </p>
    </TipBox>

    <h3>Qué contiene un sitemap</h3>

    <p>
      Dependiendo de cómo esté configurado, puede incluir:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Páginas</li>
      <li>Entradas del blog</li>
      <li>Categorías</li>
      <li>Productos</li>
      <li>Etiquetas, si interesa</li>
      <li>Imágenes, en algunos casos</li>
    </ul>

    <h3>Para qué sirve realmente</h3>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Función</th>
            <th>Qué aporta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Descubrimiento</strong></td>
            <td>Ayuda a Google a encontrar URLs del sitio</td>
          </tr>
          <tr>
            <td><strong>Organización</strong></td>
            <td>Presenta una estructura clara del contenido</td>
          </tr>
          <tr>
            <td><strong>Rastreo</strong></td>
            <td>Facilita el acceso a páginas que quizá estén menos enlazadas</td>
          </tr>
          <tr>
            <td><strong>Control SEO</strong></td>
            <td>Permite decidir qué tipos de contenido deben aparecer en el mapa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Qué no hace un sitemap</h3>

    <WarningBox title="⚠️ Muy importante">
      <p>
        Un sitemap <strong>no posiciona por sí solo</strong>, no sustituye al enlazado interno,
        no arregla una mala arquitectura y no fuerza a Google a indexar páginas pobres o irrelevantes.
      </p>
    </WarningBox>

    <h3>Diferencia entre sitemap HTML y sitemap XML</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
        margin: "1.2rem 0",
      }}
    >
      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #93c5fd",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Sitemap XML</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Está pensado sobre todo para buscadores. Suele enviarse a Search Console.
        </p>
      </div>

      <div
        style={{
          background: "#f0fdf4",
          border: "1px solid #86efac",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Sitemap HTML</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Está pensado para usuarios. Puede servir como página de índice o ayuda de navegación.
        </p>
      </div>
    </div>

    <h3>Sitemaps en WordPress</h3>

    <p>
      En WordPress, los sitemaps suelen generarse automáticamente mediante:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Plugins SEO como Yoast SEO o Rank Math</li>
      <li>La funcionalidad nativa de WordPress en algunos entornos</li>
    </ul>

    <p>
      Sin embargo, no basta con que exista un sitemap: también hay que revisar
      <strong> qué incluye y qué no incluye</strong>.
    </p>

    <h3>Qué conviene incluir y qué conviene revisar</h3>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Incluir páginas y entradas relevantes</li>
      <li>Incluir categorías útiles si tienen valor SEO</li>
      <li>Revisar si las etiquetas aportan o generan ruido</li>
      <li>Evitar indexar contenidos pobres o duplicados</li>
      <li>Controlar que no aparezcan páginas innecesarias</li>
    </ul>

    <TipBox title="📌 Criterio profesional">
      <p>
        El sitemap debe reflejar <strong>las URLs que realmente queremos que Google considere
        importantes</strong>, no todo lo que exista en la instalación.
      </p>
    </TipBox>

    <h3>Relación con Search Console</h3>

    <p>
      Una vez generado el sitemap, lo habitual es enviarlo a Google Search Console. Esto facilita
      que Google lo use como referencia para rastrear el sitio y ayuda al profesional SEO a
      comprobar si hay URLs válidas, excluidas o con incidencias.
    </p>

    <h3>Por qué es útil para los alumnos</h3>

    <p>
      Trabajar con sitemaps les ayuda a entender una idea fundamental:
      <strong> no todo lo que se publica en WordPress debe necesariamente competir en Google</strong>.
      Esto les obliga a pensar en arquitectura, en valor del contenido y en jerarquía del sitio.
    </p>
  </div>
</section>
<section className="doc doc-section" id="google-trends">
  <h2>Google Trends: detectar interés, comparar temas y entender la demanda de búsqueda</h2>

  <div className="doc-content">
    <p>
      <strong>Google Trends</strong> es una herramienta gratuita que permite observar cómo evoluciona
      el interés de búsqueda de un término a lo largo del tiempo. No ofrece el número exacto de búsquedas
      como un planificador de palabras clave, pero sí permite ver
      <strong> tendencias, comparaciones y cambios de interés</strong>.
    </p>

    <p>
      Es muy útil en SEO porque ayuda a responder preguntas como:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>¿Este tema interesa cada vez más o cada vez menos?</li>
      <li>¿Qué término busca más la gente entre dos opciones parecidas?</li>
      <li>¿Hay estacionalidad en las búsquedas?</li>
      <li>¿Qué regiones muestran más interés por un tema?</li>
      <li>¿Qué consultas relacionadas pueden dar ideas de contenido?</li>
    </ul>

    <TipBox title="🎯 Idea clave">
      <p>
        Google Trends no sirve para cerrar una estrategia completa por sí solo,
        pero es muy útil para <strong>detectar oportunidades, comparar conceptos y anticipar picos de interés</strong>.
      </p>
    </TipBox>

    <h3>Qué enseña Google Trends</h3>

    <p>
      La herramienta trabaja con datos relativos, no absolutos. Esto significa que no dice
      “esta palabra tiene exactamente tantas búsquedas”, sino que muestra cómo varía el interés
      comparado dentro de un periodo y un contexto determinados.
    </p>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Función</th>
            <th>Para qué sirve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Evolución temporal</strong></td>
            <td>Ver si un tema sube, baja o se mantiene</td>
          </tr>
          <tr>
            <td><strong>Comparación de términos</strong></td>
            <td>Analizar qué concepto genera más interés</td>
          </tr>
          <tr>
            <td><strong>Interés por región</strong></td>
            <td>Observar dónde tiene más fuerza una búsqueda</td>
          </tr>
          <tr>
            <td><strong>Consultas relacionadas</strong></td>
            <td>Detectar ideas de contenido o enfoques complementarios</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Por qué es valioso para alumnos de SEO</h3>

    <p>
      Google Trends ayuda a desarrollar una habilidad muy importante:
      <strong> pensar antes de escribir</strong>. En lugar de crear contenidos “porque sí”,
      el alumno aprende a comprobar si existe interés real, cómo se formula una búsqueda y qué
      evolución tiene a lo largo del tiempo.
    </p>

    <h3>Ejemplos de uso didáctico</h3>

    <ol style={{ lineHeight: 1.8 }}>
      <li>Comparar dos términos parecidos para ver cuál tiene más interés</li>
      <li>Analizar si una búsqueda es estacional</li>
      <li>Detectar picos relacionados con campañas o momentos del año</li>
      <li>Observar qué regiones tienen más interés por un servicio o producto</li>
      <li>Extraer ideas para artículos de blog o páginas de servicio</li>
    </ol>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1rem",
        margin: "1.2rem 0",
      }}
    >
      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #93c5fd",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Ejemplo de comparación</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          Un alumno puede comparar dos formas de nombrar un mismo servicio para ver cuál genera más interés.
        </p>
      </div>

      <div
        style={{
          background: "#fefce8",
          border: "1px solid #facc15",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Ejemplo de estacionalidad</h4>
        <p style={{ fontSize: "0.88rem", marginBottom: 0 }}>
          También puede analizar si ciertas búsquedas suben en verano, en campaña escolar o en fechas comerciales.
        </p>
      </div>
    </div>

    <WarningBox title="⚠️ Límite de la herramienta">
      <p>
        Google Trends no sustituye una investigación completa de palabras clave.
        Su función principal es mostrar <strong>tendencias e interés relativo</strong>, no volumen exacto.
      </p>
    </WarningBox>

    <h3>Relación con estrategia de contenidos</h3>

    <p>
      En un proyecto WordPress, Trends puede ayudar a decidir:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Qué temas tratar primero en el blog</li>
      <li>Qué término conviene priorizar en una página</li>
      <li>Qué contenidos pueden planificarse según la temporada</li>
      <li>Qué enfoque parece más alineado con la demanda real</li>
    </ul>

    <TipBox title="✅ Aplicación profesional">
      <p>
        Google Trends es especialmente útil en fases de planificación editorial,
        investigación de temas y comparación de enfoques antes de crear contenido.
      </p>
    </TipBox>
  </div>
</section>
<section className="doc doc-section" id="conexion-herramientas-seo">
  <h2>Cómo se conectan todas estas herramientas en un proyecto real</h2>

  <div className="doc-content">
    <p>
      Cuando un alumno empieza a estudiar SEO, suele ver herramientas como
      <strong> Google Search Console</strong>, <strong>Google Analytics</strong>,
      <strong> los sitemaps</strong> o <strong>Google Trends</strong> como piezas separadas.
      El problema de aprenderlas así es que puede acabar pensando que cada una sirve para una tarea
      aislada, cuando en realidad su valor está en cómo se combinan dentro de una estrategia real.
    </p>

    <p>
      En un proyecto profesional no trabajamos con herramientas sueltas, sino con un
      <strong> sistema de observación, planificación, publicación y mejora</strong>. Cada herramienta
      responde a una pregunta distinta, y juntas permiten entender qué contenido crear,
      cómo ofrecérselo a Google, cómo comprobar si se está mostrando y cómo analizar si el usuario
      realmente está interactuando con él.
    </p>

    <TipBox title="🎯 Idea central de esta sección">
      <p>
        No se trata de aprender cuatro herramientas por separado, sino de entender que
        <strong> cada una cubre una fase distinta del trabajo SEO</strong>.
      </p>
    </TipBox>

    <h3>La lógica completa del proceso SEO</h3>

    <p>
      Una forma clara de explicarlo en clase es presentar el SEO como una cadena de decisiones:
    </p>

    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        borderRadius: "12px",
        padding: "1.2rem",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        lineHeight: 1.9,
        margin: "1rem 0",
      }}
    >
      Detectamos temas de interés
      <br />
      ↓
      <br />
      Creamos contenido o páginas
      <br />
      ↓
      <br />
      Indicamos a Google qué URLs son importantes
      <br />
      ↓
      <br />
      Comprobamos si Google las rastrea e indexa
      <br />
      ↓
      <br />
      Medimos si los usuarios entran e interactúan
      <br />
      ↓
      <br />
      Mejoramos lo que no funciona
    </div>

    <p>
      Si el alumnado entiende esta secuencia, empieza a ver el SEO como un proceso real y no como
      una suma de botones o informes.
    </p>

    <h3>Qué pregunta responde cada herramienta</h3>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Pregunta que responde</th>
            <th>Función principal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Trends</strong></td>
            <td>¿Qué temas o términos interesan más?</td>
            <td>Planificación de contenidos e investigación de demanda</td>
          </tr>
          <tr>
            <td><strong>Sitemap</strong></td>
            <td>¿Qué URLs queremos ofrecer a Google como importantes?</td>
            <td>Organización y guía de rastreo</td>
          </tr>
          <tr>
            <td><strong>Search Console</strong></td>
            <td>¿Cómo ve Google nuestra web?</td>
            <td>Indexación, visibilidad, clics, errores y rendimiento en búsqueda</td>
          </tr>
          <tr>
            <td><strong>Google Analytics</strong></td>
            <td>¿Qué hacen los usuarios cuando llegan?</td>
            <td>Comportamiento, interacción y conversiones</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>1. Google Trends: decidir qué merece la pena trabajar</h3>

    <p>
      Todo proyecto SEO debería empezar antes de redactar. La primera pregunta no es
      “¿qué quiero publicar?”, sino <strong>“qué busca la gente y cómo lo busca”</strong>.
      Aquí entra Google Trends.
    </p>

    <p>
      Esta herramienta ayuda a detectar si un tema tiene interés, si un término es más usado que otro,
      si una búsqueda sube o baja con el tiempo y si existe un componente estacional o geográfico.
      Por tanto, Trends se sitúa al principio del proceso porque ayuda a elegir
      <strong> los temas, enfoques y momentos adecuados</strong>.
    </p>

    <div
      style={{
        background: "#eff6ff",
        border: "1px solid #93c5fd",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <strong>Google Trends → qué temas interesa trabajar</strong>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.88rem", color: "#334155" }}>
        Nos ayuda a elegir mejor antes de crear contenido.
      </p>
    </div>

    <h3>2. Sitemap: indicar a Google qué URLs son importantes</h3>

    <p>
      Una vez que hemos decidido qué páginas o contenidos vamos a publicar, necesitamos que Google
      pueda descubrirlos con claridad. Aquí entra el sitemap, que funciona como una guía estructurada
      del sitio.
    </p>

    <p>
      El sitemap no decide qué va a posicionar, pero sí ayuda a comunicar qué URLs forman parte de la
      arquitectura importante del proyecto. En un WordPress profesional esto significa revisar si el
      sitemap incluye las páginas, entradas, categorías o productos que realmente tienen valor SEO,
      y evitar que se convierta en un listado caótico de todo lo que existe.
    </p>

    <div
      style={{
        background: "#f0fdf4",
        border: "1px solid #86efac",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <strong>Sitemap → qué URLs le ofrecemos a Google</strong>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.88rem", color: "#334155" }}>
        Organiza y presenta las páginas que queremos que Google tenga en cuenta.
      </p>
    </div>

    <WarningBox title="⚠️ Matiz importante">
      <p>
        El sitemap ayuda a descubrir URLs, pero no sustituye una buena arquitectura interna ni garantiza
        que Google vaya a indexar una página de baja calidad.
      </p>
    </WarningBox>

    <h3>3. Search Console: comprobar cómo ve Google nuestra web</h3>

    <p>
      Después de publicar contenido y facilitar su descubrimiento, necesitamos verificar si Google
      realmente está rastreando, indexando y mostrando esas páginas. Esa función la cumple
      Google Search Console.
    </p>

    <p>
      Esta herramienta permite observar si las páginas están indexadas, qué consultas generan
      impresiones, qué URLs reciben clics, qué CTR presentan y si existen errores técnicos.
      Por eso Search Console es el lugar donde comprobamos si todo lo que hemos preparado
      <strong> está funcionando a ojos de Google</strong>.
    </p>

    <div
      style={{
        background: "#faf5ff",
        border: "1px solid #c084fc",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <strong>Search Console → cómo nos ve Google</strong>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.88rem", color: "#334155" }}>
        Nos muestra si Google rastrea, indexa y presenta bien nuestras páginas.
      </p>
    </div>

    <p>
      Desde el punto de vista didáctico, esta herramienta enseña al alumno a distinguir entre
      dos problemas diferentes:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>La página existe, pero Google no la está viendo bien</li>
      <li>La página sí aparece, pero no está rindiendo como debería</li>
    </ul>

    <h3>4. Google Analytics: analizar qué hacen los usuarios cuando llegan</h3>

    <p>
      El trabajo no termina cuando una página aparece en Google. El siguiente paso es comprobar si,
      una vez dentro, el usuario interactúa con la web, navega, lee, convierte o abandona.
      Para eso utilizamos Google Analytics.
    </p>

    <p>
      Analytics no se centra en cómo nos rastrea Google, sino en el comportamiento real de los
      visitantes. Permite ver qué páginas reciben tráfico, cuánto interactúan los usuarios,
      qué fuentes de tráfico funcionan mejor y si se cumplen los objetivos del proyecto.
    </p>

    <div
      style={{
        background: "#fefce8",
        border: "1px solid #facc15",
        borderRadius: "12px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <strong>Google Analytics → qué hacen los usuarios</strong>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.88rem", color: "#334155" }}>
        Permite medir si el tráfico consigue interacción, navegación útil o conversiones.
      </p>
    </div>

    <TipBox title="💡 ¿Qué es Search Console y Analytics?">
      <p>
        Search Console nos ayuda a saber si <strong>Google nos muestra</strong>.
        Analytics nos ayuda a saber si <strong>el usuario nos aprovecha</strong>.
      </p>
    </TipBox>

    <h3>Cómo encajan todas juntas dentro de un caso real</h3>

    <p>
      Para que el alumno no lo vea de forma abstracta, conviene mostrar un ejemplo completo.
      Imaginemos una academia que quiere posicionar una página sobre un curso de WordPress.
    </p>

    <ol style={{ lineHeight: 1.8 }}>
      <li>
        <strong>Google Trends</strong> ayuda a comparar si interesa más una búsqueda como
        “curso wordpress” o una más concreta relacionada con la formación.
      </li>
      <li>
        Se crea la página en WordPress y el <strong>sitemap</strong> la incluye para que Google
        pueda detectarla como una URL relevante.
      </li>
      <li>
        En <strong>Search Console</strong> comprobamos si esa URL se ha indexado, qué impresiones recibe,
        por qué términos aparece y si el CTR es razonable.
      </li>
      <li>
        En <strong>Analytics</strong> revisamos si los usuarios que llegan a esa página permanecen,
        navegan hacia otras secciones o completan un formulario de contacto o inscripción.
      </li>
    </ol>

    <p>
      En este ejemplo puede ocurrir que:
    </p>

    <ul style={{ lineHeight: 1.8 }}>
      <li>Trends muestre que el término elegido no era el mejor</li>
      <li>El sitemap esté bien, pero Search Console revele problemas de indexación</li>
      <li>Search Console muestre visibilidad, pero Analytics indique que la página no convierte</li>
    </ul>

    <p>
      Esto demuestra por qué ninguna herramienta basta por sí sola. Cada una ilumina una parte
      distinta del problema.
    </p>

    <h3>Resumen visual del flujo completo</h3>

    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        borderRadius: "12px",
        padding: "1.2rem",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        lineHeight: 1.9,
        margin: "1rem 0",
      }}
    >
      Google Trends
      <br />
      → detecta interés y oportunidades
      <br /><br />
      Sitemap
      <br />
      → organiza qué URLs ofrecemos a Google
      <br /><br />
      Search Console
      <br />
      → comprueba cómo Google las rastrea, indexa y muestra
      <br /><br />
      Google Analytics
      <br />
      → analiza qué hacen los usuarios cuando llegan
    </div>

    <h3>Qué debe quedarse el alumno al terminar esta parte</h3>

    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Herramienta</th>
            <th>Frase-resumen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Trends</strong></td>
            <td>Me ayuda a decidir qué temas interesa trabajar</td>
          </tr>
          <tr>
            <td><strong>Sitemap</strong></td>
            <td>Me ayuda a decirle a Google qué URLs son importantes</td>
          </tr>
          <tr>
            <td><strong>Search Console</strong></td>
            <td>Me ayuda a ver cómo Google entiende y muestra mi web</td>
          </tr>
          <tr>
            <td><strong>Google Analytics</strong></td>
            <td>Me ayuda a ver qué hacen los usuarios cuando entran</td>
          </tr>
        </tbody>
      </table>
    </div>

    <TipBox title="✅ Conclusión didáctica">
      <p>
        Un proyecto SEO bien trabajado no se apoya en una sola herramienta. Se apoya en una
        <strong> secuencia lógica de planificación, publicación, rastreo, medición y mejora</strong>.
        Entender cómo se conectan estas herramientas es lo que transforma una visión básica del SEO
        en una visión realmente profesional.
      </p>
    </TipBox>
  </div>
</section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>14. Actividades prácticas</h2>

        <PracticeBox title="🧪 Práctica 1 — Entender la intención de búsqueda">
          <ol>
            <li>Busca en Google tres consultas relacionadas con WordPress.</li>
            <li>Observa qué tipo de resultados salen.</li>
            <li>Indica si la intención es informacional, comercial o transaccional.</li>
            <li>Explica por qué crees que Google prioriza ese formato de página.</li>
          </ol>
        </PracticeBox>

        <PracticeBox title="🧪 Práctica 2 — Revisión SEO de una página propia">
          <ol>
            <li>Elige una página o entrada de tu WordPress.</li>
            <li>Revisa URL, H1, H2, title SEO y meta description.</li>
            <li>Comprueba si la página responde con claridad a una intención concreta.</li>
            <li>Detecta al menos cinco mejoras posibles.</li>
          </ol>
        </PracticeBox>

        <PracticeBox title="🧪 Práctica 3 — Search Console y PageSpeed">
          <ol>
            <li>Accede a Google Search Console del proyecto o revisa capturas del profesor.</li>
            <li>Identifica consultas, páginas con impresiones y posibles errores.</li>
            <li>Analiza la home en PageSpeed Insights.</li>
            <li>Resume los principales problemas detectados.</li>
          </ol>
        </PracticeBox>

        <ActivityBox title="🎯 Actividad de análisis — Competidor vs nuestra web">
          <p>
            Escoge una búsqueda objetivo y compara tu página con uno de los resultados que aparecen
            en Google.
          </p>
          <ul>
            <li>Compara tipo de página</li>
            <li>Compara estructura de títulos</li>
            <li>Compara profundidad de contenido</li>
            <li>Compara claridad del enfoque</li>
            <li>Compara sensación de confianza y experiencia</li>
          </ul>
          <p>
            Termina con una conclusión: <strong>qué hace mejor el competidor y qué podrías mejorar tú</strong>.
          </p>
        </ActivityBox>
      </section>

      {/* ══════════════ CONCLUSIÓN ══════════════ */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #ecfeff 100%)",
            color: "#0f172a",
            padding: "2.5rem",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ margin: "0 0 1.5rem 0", color: "#1d4ed8", textAlign: "center" }}>
            🎓 Conclusiones del tema
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "🔎",
                t: "El SEO da visibilidad",
                d: "Permite que una web aparezca cuando alguien busca algo relacionado con ella.",
              },
              {
                icon: "🧠",
                t: "No es solo palabras clave",
                d: "Implica intención de búsqueda, estructura, técnica, contenido y experiencia.",
              },
              {
                icon: "🛠️",
                t: "Necesita herramientas",
                d: "Search Console, Analytics, PageSpeed y otras herramientas permiten analizar con datos reales.",
              },
              {
                icon: "📊",
                t: "Hay que mirar a la competencia",
                d: "El SEO siempre se entiende mejor en contexto comparativo.",
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.4rem" }}>{c.icon}</div>
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#1e3a8a", fontSize: "0.95rem" }}>
                  {c.t}
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>{c.d}</p>
              </div>
            ))}
          </div>

          <TipBox title="✅ Idea final que debe quedarse el alumno">
            <p>
              El SEO no consiste en gustarle a una herramienta, sino en construir una web que
              <strong> responda bien a una búsqueda real, se entienda bien, cargue bien y aporte más valor que otras páginas parecidas</strong>.
            </p>
          </TipBox>
        </div>
      </section>
    </TopicLayout>
  );
}