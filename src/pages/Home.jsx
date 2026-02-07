import TopicLayout from "../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../components/ContentBoxes";

export default function Home() {
  return (
    <TopicLayout
      title="WordPress en 10 días "
      subtitle="De cero a publicar: 2 proyectos reales (Portfolio + Tienda) trabajando en LocalWP"
    >
      <div className="doc-hero">
        <div className="doc-kicker">10 días · práctica guiada · resultados visibles</div>
        <p className="doc-lead">
          Este manual está diseñado para aprender WordPress de forma rápida y práctica. En solo <strong>10 días</strong>
          vas a entender cómo se construye una web, cómo se organiza el contenido y cómo se publica un proyecto
          profesional. Empezamos desde una base real: <strong>ya creaste una web en Google Sites</strong> para comprender
          estructura y diseño. Ahora vamos a llevar esa misma idea a WordPress.
        </p>
      </div>

      <h2>🧭 ¿Qué estamos haciendo en este curso?</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <TipBox title="De Google Sites → WordPress (misma web, otra herramienta)">
          <ul>
            <li>✓ Ya entendiste la estructura web (cabecera, secciones, pie)</li>
            <li>✓ Ya organizaste contenidos y navegación con lógica</li>
            <li>✓ Ahora aprenderás a crear <strong>esa misma página</strong> en WordPress</li>
            <li>✓ Con bloques, páginas, menús y un tema profesional</li>
            <li>✓ Sin perder el enfoque: primero estructura, luego técnica</li>
          </ul>
        </TipBox>

        <PracticeBox title="2 proyectos reales (por orden)">
          <ul>
            <li>🎨 <strong>Proyecto 1:</strong> Portfolio de diseñador web (NO tienda)</li>
            <li>🧩 Home + Sobre mí + Proyectos + Servicios + Contacto</li>
            <li>🛠️ Personalización: tipografías, colores, secciones, CTA</li>
            <li>🛍️ <strong>Proyecto 2:</strong> Tienda con WooCommerce</li>
            <li>📦 Productos, categorías, carrito y checkout</li>
          </ul>
        </PracticeBox>
      </div>

      <WarningBox>
        <p>
          <strong>Importante:</strong> el <strong>primer proyecto NO es WooCommerce</strong>. Primero vamos a dominar
          WordPress como herramienta de construcción de webs (estructura, páginas, menús, bloques, tema).
          Cuando eso esté claro, pasamos a la tienda. Este orden reduce errores y acelera el aprendizaje.
        </p>
      </WarningBox>

     <div className="card">
  <h3 className="badge">Plan intensivo (10 días) · Módulos del menú</h3>

  <ol style={{ paddingLeft: "20px" }}>
    <li>
      <strong>M1 · Fundamentos:</strong> Qué es WordPress + objetivo del proyecto + estructura de páginas
    </li>
    <li>
      <strong>M2 · Contenido:</strong> Entradas vs páginas + menús + ajustes esenciales
    </li>
    <li>
      <strong>M3 · Editor:</strong> Gutenberg (bloques) + secciones reutilizables
    </li>
    <li>
      <strong>M4 · Apariencia:</strong> Tema, tipografías, colores, cabecera y pie
    </li>
    <li>
      <strong>M5 · Proyecto 1 (Portfolio):</strong> Home + Proyectos con buenas prácticas
    </li>
    <li>
      <strong>M6 · Contacto:</strong> Formularios, mapa y páginas legales básicas
    </li>
    <li>
      <strong>M7 · Optimización:</strong> Rendimiento, imágenes y SEO básico
    </li>
    <li>
      <strong>M8 · Puente a tienda:</strong> Qué cambia en una web WooCommerce
    </li>
    <li>
      <strong>M9 · WooCommerce:</strong> Productos, categorías, carrito y checkout
    </li>
    <li>
      <strong>M10 · Cierre:</strong> Revisión final + checklist “listo para publicar”
    </li>
  </ol>
</div>

      <ActivityBox title="Actividad 1 (la base del curso)">
        <p>
          <strong>Objetivo:</strong> conectar lo que ya hiciste en Google Sites con WordPress.
        </p>
        <ul>
          <li>
            <strong>Paso 1:</strong> abre tu web de Google Sites y lista sus páginas/secciones
          </li>
          <li>
            <strong>Paso 2:</strong> decide el menú del portfolio (mínimo 4 páginas)
          </li>
          <li>
            <strong>Paso 3:</strong> define 3 proyectos que “mostraría” un diseñador (aunque sean ficticios)
          </li>
          <li>
            <strong>Paso 4:</strong> escribe 1 párrafo por página (texto real, no lorem ipsum)
          </li>
          <li>
            <strong>Entregable:</strong> mapa del sitio (menú) + contenido base listo para pegar en WordPress
          </li>
        </ul>
        <p>
          <em>Este documento lo usaremos para construir el Proyecto 1 en WordPress.</em>
        </p>
      </ActivityBox>

      <h2>🧩 ¿Con qué herramienta trabajamos?</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          margin: "20px 0",
        }}
      >
        <div className="card">
          <h4 className="badge">🖥️ Entorno de trabajo</h4>
          <ul style={{ margin: "0", paddingLeft: "16px", fontSize: "0.95rem" }}>
            <li>Trabajaremos en <strong>LocalWP</strong> (WordPress en tu ordenador)</li>
            <li>Podrás practicar sin miedo a “romper” nada</li>
            <li>Es ideal para aprender, probar y repetir</li>
            <li>Luego podrás migrar a un hosting real</li>
          </ul>
        </div>

        <div className="card">
          <h4 className="badge">🧰 Qué necesitas</h4>
          <ul style={{ margin: "0", paddingLeft: "16px", fontSize: "0.95rem" }}>
            <li>Windows 10+ / macOS</li>
            <li>8GB RAM recomendado</li>
            <li>Espacio libre (2–4GB)</li>
            <li>Internet para descargar temas/plugins</li>
          </ul>
        </div>
      </div>
      <section className="resource-section resource-videos">
  <div className="resource-section__head">
    <h2 className="resource-section__title">🎥 WordPress: visión general</h2>
    <p className="resource-section__lead">
      Antes de empezar a construir nuestra web en WordPress, es importante
      tener una visión clara de qué es WordPress, para qué se utiliza y
      por qué es la herramienta que vamos a aprender durante este curso intensivo.
    </p>
  </div>

  <div className="media">
    <div className="media-video">
      <iframe
        src="https://www.youtube.com/embed/7M91lErmsTs"
        title="Introducción a WordPress"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <p className="muted">
      Vídeo introductorio para entender qué es WordPress antes de empezar a trabajar
      con páginas, bloques y proyectos reales.
    </p>
  </div>
</section>


      <div className="callout tip">
        <h3>✅ Cómo empezar ahora mismo</h3>
        <p>
          Tu primer objetivo no es “hacer una web bonita”: es <strong>entender la estructura</strong> y dominar
          las piezas (páginas, menús, bloques).
        </p>
        <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          👉 Haz clic en “Día 1 · Fundamentos” en el menú lateral para comenzar
        </div>
      </div>

      <div className="callout">
        <p>
          <strong>Nota:</strong> en el siguiente capítulo explicaremos por qué trabajamos con LocalWP, qué ventajas
          tiene frente a hacerlo directamente en un hosting y cómo encaja esto en un flujo profesional.
        </p>
      </div>
    </TopicLayout>
  );
}
