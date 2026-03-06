import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

/* ─────────────────────────────────────────
   Micro-componentes de apoyo visual
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
        marginBottom: "0.6rem",
        background: "#f8fafc",
        borderRadius: "10px",
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
        <strong style={{ fontSize: "0.9rem" }}>{title}</strong>
        <p style={{ margin: "0.2rem 0 0 0", fontSize: "0.85rem", color: "#475569" }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

function BlockLabel({ n, title, color = "#7c3aed" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        marginBottom: "0.6rem",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.9rem",
          flexShrink: 0,
        }}
      >
        {n}
      </div>
      <strong style={{ fontSize: "1rem", color: "#0f172a" }}>{title}</strong>
    </div>
  );
}

/* ─────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────── */

export default function Tema30_SEOWooCommerce() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · Proyecto E-Commerce · Fase 5</p>
        <h1>SEO para WooCommerce: Arquitectura, Fichas, Categorías e Imágenes Optimizadas</h1>
        <p className="lead">
          Ya tenemos una tienda funcional, con home, productos, carrito, checkout y fichas
          trabajadas. Ahora toca conseguir que la tienda pueda{" "}
          <strong>captar tráfico orgánico</strong>. En este tema abordamos el SEO aplicado a
          WooCommerce desde una visión real: arquitectura de categorías, URLs, metadatos,
          rendimiento, contenido y, de forma muy especial,{" "}
          <strong>la optimización de imágenes</strong>, una de las tareas más importantes y más
          ignoradas por los alumnos cuando empiezan.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>
              Entender cómo se aplica el <strong>SEO a una tienda WooCommerce</strong>
            </li>
            <li>
              Organizar correctamente <strong>categorías, productos y arquitectura de URLs</strong>
            </li>
            <li>
              Optimizar <strong>title, meta description, headings y contenido</strong>
            </li>
            <li>
              Comprender por qué las <strong>imágenes afectan al SEO, a la velocidad y a la conversión</strong>
            </li>
            <li>
              Aprender a optimizar imágenes de forma <strong>externa</strong> y de forma{" "}
              <strong>interna dentro de WordPress/WooCommerce</strong>
            </li>
            <li>
              Aplicar una checklist SEO práctica a una tienda real
            </li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 4,5 horas · <strong>Nivel:</strong> Intermedio ·{" "}
            <strong>Requisito:</strong> tienda montada, productos publicados y fichas ya revisadas.
          </p>
        </TipBox>
      </header>

      {/* ══════════════ S1: QUÉ ES SEO EN UNA TIENDA ══════════════ */}
      <section className="doc doc-section" id="seo-ecommerce">
        <h2>1. Qué significa hacer SEO en WooCommerce</h2>

        <div className="doc-content">
          <p>
            El SEO en una tienda online no consiste solo en poner palabras clave. Consiste en
            construir una estructura que permita a Google entender{" "}
            <strong>qué vendes, cómo se organiza tu catálogo y qué páginas merecen posicionar</strong>.
            En un e-commerce, el SEO se reparte entre varias capas:
          </p>

          <div className="two-columns">
            <div>
              <h4 style={{ color: "#16a34a" }}>✅ Capas SEO de una tienda</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Home</li>
                <li>Páginas de categoría</li>
                <li>Fichas de producto</li>
                <li>Blog y contenido informacional</li>
                <li>Arquitectura interna y enlazado</li>
                <li>Rendimiento y experiencia de usuario</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>❌ Errores típicos de alumno</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Pensar que el SEO es solo Yoast en verde</li>
                <li>No optimizar categorías</li>
                <li>Subir imágenes gigantes sin revisar</li>
                <li>Duplicar textos entre productos</li>
                <li>Usar títulos pobres o genéricos</li>
                <li>No revisar velocidad real de la tienda</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Idea clave:</strong> en WooCommerce, el SEO técnico, el SEO de contenidos y la
              optimización visual van unidos. Una ficha con buenas keywords pero con imágenes
              pesadísimas puede seguir rindiendo mal.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S2: ARQUITECTURA ══════════════ */}
      <section className="doc doc-section" id="arquitectura-categorias">
        <h2>2. Arquitectura SEO: categorías, subcategorías y productos</h2>

        <div className="doc-content">
          <p>
            La primera decisión SEO importante en una tienda no es el plugin. Es la{" "}
            <strong>arquitectura del catálogo</strong>. Si la estructura está mal pensada, luego
            todo se vuelve más difícil: menús, breadcrumbs, URLs, enlazado interno y posicionamiento.
          </p>

          <h3>Principio general</h3>
          <p>
            Una tienda bien organizada se entiende rápido tanto por el usuario como por Google. La
            estructura debe ser lógica, breve y escalable.
          </p>

          <div
            style={{
              background: "#0f172a",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "1.2rem",
              fontFamily: "monospace",
              fontSize: "0.86rem",
              lineHeight: 1.9,
              margin: "1rem 0",
            }}
          >
            /tienda/
            <br />
            ├── /tienda/camisetas/
            <br />
            ├── /tienda/sudaderas/
            <br />
            ├── /tienda/tazas/
            <br />
            └── /tienda/accesorios/
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Función SEO</th>
                  <th>Importancia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Home</strong>
                  </td>
                  <td>Concentra autoridad general de la marca</td>
                  <td>
                    <SeoChip label="Muy alta" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Categorías</strong>
                  </td>
                  <td>Captan búsquedas de tipo comercial amplia</td>
                  <td>
                    <SeoChip label="Crítica" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Productos</strong>
                  </td>
                  <td>Captan búsquedas más específicas</td>
                  <td>
                    <SeoChip label="Alta" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Etiquetas</strong>
                  </td>
                  <td>Pueden ayudar, pero mal usadas generan ruido</td>
                  <td>
                    <SeoChip label="Media-baja" type="warn" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="📌 Criterio docente">
            <p>
              Enseña a tus alumnos a pensar primero en <strong>familias de producto</strong> y
              después en productos concretos. Esa lógica suele producir mejores categorías y mejores
              URLs.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S3: URLS Y METADATOS ══════════════ */}
      <section className="doc doc-section" id="urls-metadatos">
        <h2>3. URLs, títulos SEO y meta descriptions</h2>

        <div className="doc-content">
          <p>
            Una vez definida la arquitectura, hay que trabajar cómo se presenta cada página a
            buscadores y usuarios en los resultados de búsqueda.
          </p>

          <h3>Permalinks y slugs</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>Usa URLs limpias y legibles</li>
            <li>Evita slugs con números, caracteres raros o palabras inútiles</li>
            <li>Mantén coherencia entre categoría, nombre del producto y URL</li>
          </ul>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Mal</th>
                  <th>Mejor</th>
                  <th>Motivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>/producto/p1234/</code>
                  </td>
                  <td>
                    <code>/producto/camiseta-hello-world-developer/</code>
                  </td>
                  <td>Más descriptiva y entendible</td>
                </tr>
                <tr>
                  <td>
                    <code>/categoria/varios/</code>
                  </td>
                  <td>
                    <code>/categoria/camisetas/</code>
                  </td>
                  <td>La categoría comunica intención real</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Title y meta description</h3>
          <p>
            Con Yoast SEO o RankMath, cada producto y categoría debe tener un título optimizado y una
            meta description útil. No basta con dejar el texto automático.
          </p>

          <div className="two-columns">
            <div>
              <h4>Title recomendado</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Nombre del producto o categoría + palabra clave principal + marca si aporta valor.
              </p>
            </div>
            <div>
              <h4>Meta description</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Resumen persuasivo, claro y breve que invite al clic sin repetir mecánicamente la
                keyword.
              </p>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Error típico:</strong> dejar que todas las fichas usen una estructura automática
              vacía o repetitiva. El alumno cree que “ya hay SEO” porque el plugin está instalado,
              pero no hay estrategia real detrás.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S4: CATEGORÍAS Y FICHAS ══════════════ */}
      <section className="doc doc-section" id="seo-categorias-fichas">
        <h2>4. SEO de categorías y SEO de fichas: no cumplen la misma función</h2>

        <div className="doc-content">
          <p>
            Este punto conviene explicarlo muy bien a los alumnos porque suele generar confusión.
            Una <strong>categoría</strong> no compite igual que una <strong>ficha de producto</strong>.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              margin: "1.4rem 0",
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
              <h4 style={{ marginTop: 0 }}>SEO de categoría</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Ataca búsquedas más amplias</li>
                <li>Organiza el catálogo</li>
                <li>Puede incluir texto introductorio</li>
                <li>Es muy útil para captar tráfico comercial general</li>
              </ul>
            </div>

            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #86efac",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <h4 style={{ marginTop: 0 }}>SEO de ficha de producto</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Ataca búsquedas más concretas</li>
                <li>Depende mucho del nombre del producto</li>
                <li>Necesita texto útil y único</li>
                <li>Convierte mejor cuando la intención es muy específica</li>
              </ul>
            </div>
          </div>

          <TipBox title="💡 Explicación simple para clase">
            <p>
              La categoría responde a <strong>“qué tipo de producto buscas”</strong>. La ficha
              responde a <strong>“este producto concreto es el que necesitas”</strong>.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S5: IMÁGENES Y SEO ══════════════ */}
      <section className="doc doc-section" id="imagenes-seo">
        <h2>5. Por qué optimizar imágenes es obligatorio en WooCommerce</h2>

        <div className="doc-content">
          <p>
            Este es uno de los puntos más importantes del tema. En una tienda WooCommerce, las
            imágenes son esenciales porque venden visualmente el producto, pero también pueden ser el
            mayor lastre del sitio si no se optimizan.
          </p>

          <h3>Qué pasa cuando no optimizas imágenes</h3>
          <div className="two-columns">
            <div>
              <h4 style={{ color: "#dc2626" }}>Problemas técnicos</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Páginas lentas</li>
                <li>Peor Largest Contentful Paint (LCP)</li>
                <li>Más consumo de datos en móvil</li>
                <li>Mayor peso del servidor y de copias de seguridad</li>
                <li>Worse UX en categorías y fichas</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>Problemas SEO y de conversión</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Peores Core Web Vitals</li>
                <li>Menor probabilidad de posicionar bien</li>
                <li>Más rebote por lentitud</li>
                <li>Peor experiencia en móvil</li>
                <li>Menos confianza visual si tardan en cargar</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Mensaje que debe quedarse el alumno:</strong> subir una imagen directamente
              desde el móvil o desde Canva y dejar que WordPress “se encargue” no es una estrategia.
              Es una de las causas más frecuentes de tiendas lentas.
            </p>
          </WarningBox>

          <h3>Qué significa optimizar una imagen</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>Elegir el formato adecuado</li>
            <li>Reducir dimensiones a las necesarias</li>
            <li>Comprimir el archivo sin destrozar la calidad visual</li>
            <li>Nombrar el archivo con criterio</li>
            <li>Añadir texto alternativo útil</li>
            <li>Servir tamaños coherentes con cada zona de la tienda</li>
          </ul>
        </div>
      </section>

      {/* ══════════════ S6: OPTIMIZACIÓN EXTERNA ══════════════ */}
      <section className="doc doc-section" id="optimizacion-externa">
        <h2>6. Optimización de imágenes de forma externa: antes de subirlas a WordPress</h2>

        <div className="doc-content">
          <p>
            La forma más profesional de trabajar imágenes es <strong>optimizar antes de subir</strong>.
            Esto evita llenar la biblioteca de medios con archivos demasiado pesados y reduce el
            trabajo posterior.
          </p>

          <h3>Flujo externo recomendado</h3>

          <div style={{ margin: "1.2rem 0" }}>
            <StepCard
              n="1"
              title="Partir del original de mayor calidad"
              detail="Usa la imagen original, no una versión ya comprimida varias veces."
              color="#2563eb"
            />
            <StepCard
              n="2"
              title="Recortar y ajustar proporciones"
              detail="Decide el ratio según la zona donde irá: catálogo, ficha, banner, miniatura."
              color="#16a34a"
            />
            <StepCard
              n="3"
              title="Redimensionar"
              detail="No subas 4000 px si la tienda solo necesita 1200 o 1600 px."
              color="#7c3aed"
            />
            <StepCard
              n="4"
              title="Comprimir y exportar"
              detail="Exporta en WebP o JPG optimizado según el caso."
              color="#f59e0b"
            />
            <StepCard
              n="5"
              title="Nombrar correctamente el archivo"
              detail="Usa nombres descriptivos: camiseta-hello-world-negra.webp"
              color="#dc2626"
            />
          </div>

          <h3>Herramientas externas habituales</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Herramienta</th>
                  <th>Uso</th>
                  <th>Cuándo conviene</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Photoshop</strong>
                  </td>
                  <td>Recorte, redimensión, exportación para web</td>
                  <td>Cuando se quiere control total</td>
                </tr>
                <tr>
                  <td>
                    <strong>Photopea</strong>
                  </td>
                  <td>Alternativa online muy útil</td>
                  <td>Entornos sin software instalado</td>
                </tr>
                <tr>
                  <td>
                    <strong>TinyPNG / TinyJPG</strong>
                  </td>
                  <td>Compresión adicional</td>
                  <td>Muy útil justo antes de subir</td>
                </tr>
                <tr>
                  <td>
                    <strong>Squoosh</strong>
                  </td>
                  <td>Comparar formatos y niveles de compresión</td>
                  <td>Muy didáctica para enseñar calidad/peso</td>
                </tr>
                <tr>
                  <td>
                    <strong>Canva Export bien ajustado</strong>
                  </td>
                  <td>Exportar gráficos o banners</td>
                  <td>Solo si después se revisa tamaño y peso</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Recomendaciones concretas para alumnos</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>
              <strong>Productos:</strong> 1200–1600 px de ancho suele ser suficiente
            </li>
            <li>
              <strong>Banners:</strong> ajustar según diseño real, no por intuición
            </li>
            <li>
              <strong>Miniaturas:</strong> no usar el original gigante
            </li>
            <li>
              <strong>Formato preferente:</strong> WebP cuando sea posible
            </li>
            <li>
              <strong>Controlar peso:</strong> cuanto más ligera sin perder calidad razonable, mejor
            </li>
          </ul>

          <TipBox title="💡 Ejemplo docente claro">
            <p>
              Haz la prueba en clase con una misma imagen exportada en tres versiones:
              <strong> PNG pesada</strong>, <strong>JPG optimizada</strong> y{" "}
              <strong>WebP optimizada</strong>. Que los alumnos comparen visualmente la diferencia
              frente al peso. Es una de las prácticas que mejor se entienden.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S7: OPTIMIZACIÓN INTERNA ══════════════ */}
      <section className="doc doc-section" id="optimizacion-interna">
        <h2>7. Optimización de imágenes de forma interna: dentro de WordPress y WooCommerce</h2>

        <div className="doc-content">
          <p>
            Aunque la mejor práctica es optimizar antes de subir, en proyectos reales también se
            trabaja la optimización <strong>dentro del propio WordPress</strong>. Esto sirve para
            automatizar, generar versiones más ligeras y mejorar el comportamiento general de la
            biblioteca de medios.
          </p>

          <h3>Qué puede hacerse internamente</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              margin: "1.4rem 0",
            }}
          >
            {[
              {
                title: "Regenerar tamaños",
                desc: "WordPress crea distintos tamaños. Si cambias diseño o miniaturas, puede ser necesario regenerarlos.",
                color: "#eff6ff",
                border: "#93c5fd",
              },
              {
                title: "Compresión automática",
                desc: "Plugins de optimización pueden comprimir imágenes al subirlas.",
                color: "#f0fdf4",
                border: "#86efac",
              },
              {
                title: "Conversión a WebP",
                desc: "Algunos plugins generan y sirven versiones WebP automáticamente.",
                color: "#fefce8",
                border: "#facc15",
              },
              {
                title: "Lazy load",
                desc: "Las imágenes fuera de pantalla se cargan después, mejorando el rendimiento inicial.",
                color: "#faf5ff",
                border: "#c084fc",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: item.color,
                  border: `1.5px solid ${item.border}`,
                  borderRadius: "12px",
                  padding: "1rem",
                }}
              >
                <h5 style={{ margin: "0 0 0.45rem 0", color: "#0f172a" }}>{item.title}</h5>
                <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3>Plugins internos habituales</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Plugin</th>
                  <th>Para qué sirve</th>
                  <th>Observación docente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Smush</strong>
                  </td>
                  <td>Compresión y optimización general</td>
                  <td>Muy didáctico para alumnos principiantes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Imagify</strong>
                  </td>
                  <td>Compresión y conversión eficiente</td>
                  <td>Muy usado en proyectos reales</td>
                </tr>
                <tr>
                  <td>
                    <strong>ShortPixel</strong>
                  </td>
                  <td>Optimización y WebP</td>
                  <td>Buena opción para entender automatización</td>
                </tr>
                <tr>
                  <td>
                    <strong>Converter for Media</strong>
                  </td>
                  <td>Conversión a WebP / AVIF en ciertos entornos</td>
                  <td>Útil para explicar formatos modernos</td>
                </tr>
                <tr>
                  <td>
                    <strong>Regenerate Thumbnails</strong>
                  </td>
                  <td>Regenerar miniaturas</td>
                  <td>Muy útil cuando cambia el diseño del catálogo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <WarningBox>
            <p>
              <strong>Pero cuidado:</strong> la optimización interna no sustituye a la externa. Si
              subes archivos enormes y confías todo al plugin, el resultado mejora, pero no suele ser
              tan bueno como preparar la imagen antes.
            </p>
          </WarningBox>

          <TipBox title="📌 Regla que deben memorizar">
            <p>
              <strong>Mejor flujo:</strong> optimización externa primero + automatización interna
              después. No es una cosa o la otra; en proyectos profesionales suelen convivir.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S8: IMÁGENES EN WOOCOMMERCE ══════════════ */}
      <section className="doc doc-section" id="imagenes-woocommerce">
        <h2>8. Cómo afecta esto específicamente a WooCommerce</h2>

        <div className="doc-content">
          <p>
            En WooCommerce, una misma imagen puede aparecer en varias zonas:
          </p>

          <ul style={{ fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>Listado de tienda</li>
            <li>Categorías</li>
            <li>Productos relacionados</li>
            <li>Ficha individual</li>
            <li>Galería ampliada</li>
            <li>Miniaturas del carrito o widgets</li>
          </ul>

          <p>
            Por eso es tan importante entender que WordPress genera tamaños intermedios y que
            WooCommerce depende mucho de la coherencia de ratio y del peso del original.
          </p>

          <h3>Buenas prácticas concretas para WooCommerce</h3>
          <div className="two-columns">
            <div>
              <h4>Catálogo</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Usar mismo ratio en todos los productos</li>
                <li>Evitar fondos y estilos incoherentes</li>
                <li>Controlar el peso para que el grid cargue rápido</li>
              </ul>
            </div>
            <div>
              <h4>Ficha</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Imagen principal con buena resolución, pero no excesiva</li>
                <li>Galería útil, no decorativa</li>
                <li>Alt text descriptivo</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Error frecuente en alumnos:</strong> corregir el diseño del catálogo con CSS
              cuando el problema real es que las imágenes tienen proporciones y pesos totalmente
              distintos.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S9: ALT, NOMBRES Y CONTENIDO ══════════════ */}
      <section className="doc doc-section" id="nombres-alt">
        <h2>9. Nombre de archivo, texto alternativo y contexto semántico</h2>

        <div className="doc-content">
          <p>
            Optimizar imágenes no es solo cuestión de peso. También importa cómo se describen dentro
            del sistema.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Mal</th>
                  <th>Mejor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Nombre de archivo</strong>
                  </td>
                  <td>IMG_4488.jpg</td>
                  <td>camiseta-hello-world-negra.webp</td>
                </tr>
                <tr>
                  <td>
                    <strong>Alt text</strong>
                  </td>
                  <td>imagen producto</td>
                  <td>Camiseta Hello World Developer en color negro</td>
                </tr>
                <tr>
                  <td>
                    <strong>Title interno</strong>
                  </td>
                  <td>foto 1</td>
                  <td>Camiseta Hello World frontal</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="💡 Cómo explicarlo fácil">
            <p>
              El <strong>nombre del archivo</strong> organiza y aporta contexto. El{" "}
              <strong>alt text</strong> describe la imagen para accesibilidad y ayuda semántica. No
              deben ser idénticos por obligación, pero sí coherentes.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S10: VELOCIDAD Y CHECKLIST ══════════════ */}
      <section className="doc doc-section" id="velocidad-checklist">
        <h2>10. Checklist SEO de rendimiento para una tienda WooCommerce</h2>

        <div className="doc-content">
          <p>
            El SEO de una tienda también depende de cómo responde el sitio en términos de velocidad y
            estabilidad visual.
          </p>

          <h3>Checklist básica</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              margin: "1.4rem 0",
            }}
          >
            {[
              {
                title: "Categorías trabajadas",
                desc: "Con títulos, texto útil y estructura coherente.",
                type: "ok",
              },
              {
                title: "Fichas con contenido único",
                desc: "Sin duplicar descripciones vacías o genéricas.",
                type: "ok",
              },
              {
                title: "Imágenes optimizadas",
                desc: "Redimensionadas, comprimidas y con formato adecuado.",
                type: "danger",
              },
              {
                title: "Alt y nombres correctos",
                desc: "Con criterio semántico, no automáticos.",
                type: "info",
              },
              {
                title: "Metadatos revisados",
                desc: "Title y meta description con intención real.",
                type: "ok",
              },
              {
                title: "Carga razonable en móvil",
                desc: "Sin depender de archivos gigantes ni recursos innecesarios.",
                type: "danger",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "1rem",
                  boxShadow: "0 8px 18px rgba(15,23,42,.05)",
                }}
              >
                <div style={{ marginBottom: "0.5rem" }}>
                  <SeoChip
                    label={
                      item.type === "danger"
                        ? "Crítico"
                        : item.type === "ok"
                        ? "Muy importante"
                        : "Importante"
                    }
                    type={item.type}
                  />
                </div>
                <h5 style={{ margin: "0 0 0.35rem 0", color: "#0f172a" }}>{item.title}</h5>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <WarningBox>
            <p>
              Si el alumno solo recuerda una cosa de este tema, que sea esta:{" "}
              <strong>
                en WooCommerce las imágenes forman parte del SEO y del rendimiento, no son un detalle
                estético aislado
              </strong>
              .
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S11: WORKFLOW ══════════════ */}
      <section className="doc doc-section" id="workflow-seo">
        <h2>11. Workflow profesional para SEO e imágenes en una tienda real</h2>

        <div className="doc-content">
          <p>
            Para que el alumno no se quede en teoría, conviene cerrar el tema con un flujo de trabajo
            claro y repetible.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            <StepCard
              n="1"
              title="Diseñar arquitectura de categorías"
              detail="Pensar familias de producto, URLs y navegación antes de publicar masivamente."
              color="#2563eb"
            />
            <StepCard
              n="2"
              title="Preparar imágenes fuera de WordPress"
              detail="Recortar, redimensionar, comprimir y exportar en formato adecuado."
              color="#16a34a"
            />
            <StepCard
              n="3"
              title="Nombrar archivos y subirlos ya optimizados"
              detail="Evitar archivos genéricos o gigantes desde el principio."
              color="#7c3aed"
            />
            <StepCard
              n="4"
              title="Rellenar alt text y revisar galería"
              detail="Con coherencia semántica y utilidad real."
              color="#f59e0b"
            />
            <StepCard
              n="5"
              title="Optimizar títulos SEO y meta descriptions"
              detail="En categorías, fichas y páginas clave."
              color="#dc2626"
            />
            <StepCard
              n="6"
              title="Aplicar optimización interna"
              detail="Plugin de compresión, WebP, regeneración de miniaturas si procede."
              color="#0891b2"
            />
            <StepCard
              n="7"
              title="Revisar frontend y velocidad"
              detail="Comprobar cómo carga realmente la tienda, especialmente en móvil."
              color="#9333ea"
            />
          </div>

          <TipBox title="✅ Fórmula que funciona en clase">
            <p>
              Haz que cada alumno trabaje un mismo producto en dos versiones:{" "}
              <strong>sin optimizar</strong> y <strong>optimizado</strong>. Luego comparad peso,
              velocidad y aspecto visual. Ese contraste les ayuda mucho más que cualquier definición.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>12. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Auditoría SEO básica de la tienda">
            <ol>
              <li>Revisa la estructura de categorías de tu WooCommerce.</li>
              <li>Comprueba si los slugs son claros y coherentes.</li>
              <li>Analiza si las categorías tienen título y enfoque SEO razonable.</li>
              <li>Revisa 3 productos y detecta si sus títulos son genéricos o específicos.</li>
              <li>Corrige al menos 5 elementos SEO mejorables.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Optimización externa de imágenes">
            <ol>
              <li>Elige 3 imágenes de producto sin optimizar.</li>
              <li>Recórtalas y ajusta sus dimensiones para web.</li>
              <li>Comprímelas con una herramienta externa.</li>
              <li>Expórtalas en WebP o JPG optimizado.</li>
              <li>Compara el peso original y el final.</li>
              <li>Sube la versión optimizada a WordPress con nombre de archivo correcto.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 3 — Optimización interna en WordPress">
            <ol>
              <li>Instala un plugin de optimización de imágenes en entorno de prueba.</li>
              <li>Activa compresión automática si el plugin lo permite.</li>
              <li>Revisa si genera versiones WebP.</li>
              <li>Comprueba cómo quedan las miniaturas del catálogo.</li>
              <li>Documenta qué mejora hace el plugin y qué no resuelve por sí solo.</li>
            </ol>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad de análisis — Comparativa externa vs interna">
            <p>
              Compara dos métodos sobre una misma imagen:
            </p>
            <ol>
              <li>Subir la imagen tal cual y dejar que un plugin la optimice</li>
              <li>Optimizarla antes fuera de WordPress y luego dejar actuar al plugin</li>
            </ol>
            <p>
              Entrega una tabla comparativa con:
            </p>
            <ul>
              <li>Peso del archivo original</li>
              <li>Peso tras optimización externa</li>
              <li>Peso tras optimización interna</li>
              <li>Calidad visual percibida</li>
              <li>Conclusión: qué flujo usarías en un proyecto real</li>
            </ul>
          </ActivityBox>
        </div>
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
                icon: "🧭",
                t: "El SEO empieza en la arquitectura",
                d: "Categorías, URLs y lógica del catálogo son la base del posicionamiento.",
              },
              {
                icon: "🖼️",
                t: "Las imágenes son parte del SEO",
                d: "Afectan a velocidad, experiencia, Core Web Vitals y conversión.",
              },
              {
                icon: "🛠️",
                t: "Optimización externa + interna",
                d: "Preparar antes y automatizar después es la combinación más sólida.",
              },
              {
                icon: "📱",
                t: "Rendimiento y móvil importan",
                d: "Una tienda visualmente atractiva pero lenta pierde tráfico y ventas.",
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
        </div>

       
      </section>
    </TopicLayout>
  );
}