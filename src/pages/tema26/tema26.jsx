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

function SeoChip({ score, label }) {
  const color =
    score >= 8 ? "#16a34a" : score >= 5 ? "#f59e0b" : "#dc2626";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        background: color + "18",
        border: `1px solid ${color}`,
        color: color,
        borderRadius: "999px",
        padding: "0.15rem 0.6rem",
        fontSize: "0.75rem",
        fontWeight: 700,
      }}
    >
      SEO {score}/10 · {label}
    </span>
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

export default function Tema26_HomeEcommerce() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · Proyecto E-Commerce · Fase 1</p>
        <h1>Diseñando la Home de tu Tienda con Elementor</h1>
        <p className="lead">
          Partimos de la instalación generada por WPZip (WooCommerce + GeneratePress + Elementor).
          En este tema analizamos con mentalidad de <em>conversion designer</em> y especialista SEO
          cada bloque que debe tener tu home, por qué existe, cómo construirlo en Elementor y qué
          errores de principiante debes evitar desde el primer día.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>Conocer los <strong>9 bloques irrenunciables</strong> de una home de e-commerce</li>
            <li>Entender el <strong>menú de navegación</strong> desde óptica SEO + UX + conversión</li>
            <li>Construir en Elementor una <strong>galería de productos destacados</strong> que convierta</li>
            <li>Aplicar <strong>criterios de jerarquía visual</strong> para guiar al usuario hacia la compra</li>
            <li>Configurar correctamente el <strong>schema markup y etiquetas H</strong> desde el día 1</li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 3,5 horas ·{" "}
            <strong>Nivel:</strong> Intermedio ·{" "}
            <strong>Requisito:</strong> Instalación WPZip del tema 25 operativa
          </p>
        </TipBox>
      </header>

      {/* ══════════════ S1: DIAGNÓSTICO WPZIP ══════════════ */}
      <section className="doc doc-section" id="diagnostico-wpzip">
        <h2>1. Qué nos entrega WPZip y qué nos falta</h2>

        <div className="doc-content">
          <p>
            Antes de abrir Elementor, revisa exactamente lo que la instalación automática ha creado.
            Improvisar sin este diagnóstico es el error número uno de los alumnos que empiezan un
            proyecto real.
          </p>

          <div className="two-columns">
            <div>
              <h4 style={{ color: "#16a34a" }}>✅ Lo que WPZip ya ha configurado</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>WordPress instalado con idioma español y zona horaria Madrid</li>
                <li>GeneratePress activo como theme base</li>
                <li>WooCommerce con asistente completado (moneda €, país España)</li>
                <li>Elementor instalado y activado</li>
                <li>Páginas especiales de WooCommerce creadas (Tienda, Carrito, Pago, Mi cuenta)</li>
                <li>Yoast SEO instalado con configuración básica</li>
                <li>Productos de muestra (habitualmente 8-12)</li>
                <li>Categorías base creadas</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>❌ Lo que aún NO existe</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>
                  <strong>Home page diseñada</strong> — WP muestra el blog por defecto
                </li>
                <li>Menú de navegación configurado</li>
                <li>Header y footer con identidad de marca</li>
                <li>Sección Hero con propuesta de valor</li>
                <li>Galería de productos destacados</li>
                <li>Sección de categorías visuales</li>
                <li>Trust signals (reseñas, sellos, garantías)</li>
                <li>CTA de newsletter</li>
                <li>Imágenes reales de producto</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Paso previo obligatorio:</strong> ve a{" "}
              <em>Ajustes → Lectura</em> y cambia «La portada muestra» a{" "}
              <strong>«Una página estática»</strong>. Crea una página nueva llamada{" "}
              <strong>«Inicio»</strong> y asígnala como portada. Sin este paso, Elementor no puede
              controlar tu home.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S2: EL MENÚ ══════════════ */}
      <section className="doc doc-section" id="menu-navegacion">
        <h2>2. El menú de navegación: análisis profesional</h2>

        <div className="doc-content">
          <p>
            El menú es el <strong>elemento más estratégico de tu tienda</strong>. No es solo
            navegación — es arquitectura de información, señal SEO y herramienta de conversión
            simultáneamente. Un menú mal pensado puede hundirte el SEO y desviar al usuario antes
            de que compre.
          </p>

          <h3>Principios que gobiernan un buen menú de e-commerce</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                icon: "🔍",
                title: "SEO: distribución de link equity",
                desc: "Cada enlace del menú pasa autoridad de enlace a esa URL. Los ítems del menú principal reciben más PageRank que el resto del sitio. Ponlo en el menú solo si quieres que esa página tenga más fuerza SEO.",
                color: "#e7f3ff",
                border: "#0066cc",
              },
              {
                icon: "🧭",
                title: "UX: regla de los 7 ítems",
                desc: "La memoria de trabajo humana gestiona 5-7 ítems simultáneos. Más de 7 ítems principales aumenta la carga cognitiva y reduce la tasa de clics. Agrupa, no acumules.",
                color: "#f3e8ff",
                border: "#7c3aed",
              },
              {
                icon: "📱",
                title: "Mobile-first: hamburger menu",
                desc: "El 70 % del tráfico de e-commerce viene de móvil. Tu menú debe funcionar perfectamente con el pulgar. Los mega-menús de escritorio se convierten en colapsables en móvil.",
                color: "#f0fdf4",
                border: "#16a34a",
              },
              {
                icon: "💰",
                title: "Conversión: CTAs en el menú",
                desc: "El enlace «Oferta» o «Sale» con un color diferente en el menú puede aumentar el CTR un 30-50 %. Es el único ítem que puede romper la coherencia visual del nav.",
                color: "#fff3cd",
                border: "#f59e0b",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: c.color,
                  border: `1.5px solid ${c.border}`,
                  borderRadius: "12px",
                  padding: "1.2rem",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>{c.icon}</div>
                <h5 style={{ margin: "0 0 0.5rem 0", color: "#0f172a" }}>{c.title}</h5>
                <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3>Estructura recomendada para nuestro proyecto</h3>

          <div
            style={{
              background: "#0f172a",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "1.5rem",
              fontFamily: "monospace",
              fontSize: "0.88rem",
              margin: "1.5rem 0",
              lineHeight: 1.9,
            }}
          >
            <div style={{ color: "#94a3b8", marginBottom: "0.8rem", fontFamily: "sans-serif", fontSize: "0.78rem" }}>
              Estructura de menú principal recomendada
            </div>
            <div>
              <span style={{ color: "#7dd3fc" }}>🏠 Inicio</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ / (homepage)</span>
              <br />
              <span style={{ color: "#86efac" }}>🛍 Tienda</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /tienda/ (archive WooCommerce)</span>
              <br />
              <span style={{ color: "#86efac", paddingLeft: "1.5rem" }}>Camisetas</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /tienda/camisetas/</span>
              <br />
              <span style={{ color: "#86efac", paddingLeft: "1.5rem" }}>Pantalones</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /tienda/pantalones/</span>
              <br />
              <span style={{ color: "#86efac", paddingLeft: "1.5rem" }}>Accesorios</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /tienda/accesorios/</span>
              <br />
              <span style={{ color: "#fca5a5" }}>🔥 Ofertas</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /tienda/?sale=1 · color rojo en CSS</span>
              <br />
              <span style={{ color: "#c4b5fd" }}>📖 Blog</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /blog/ (archivo entradas)</span>
              <br />
              <span style={{ color: "#fed7aa" }}>ℹ Nosotros</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /sobre-nosotros/</span>
              <br />
              <span style={{ color: "#f0abfc" }}>📞 Contacto</span>
              {"  "}
              <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>→ /contacto/</span>
            </div>
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Ítem de menú</th>
                  <th>URL target</th>
                  <th>Importancia SEO</th>
                  <th>Justificación</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tienda", "/tienda/", <SeoChip key="t" score={10} label="Crítica" />, "Es tu página de catálogo principal. Más tráfico orgánico potencial."],
                  ["Categorías (dropdown)", "/tienda/categoria/", <SeoChip key="c" score={9} label="Alta" />, "Las páginas de categoría son destinos SEO de cola larga muy valiosos."],
                  ["Ofertas", "/tienda/?sale=1", <SeoChip key="o" score={6} label="Media" />, "Alta conversión pero URL dinámica. Valora crear una página de ofertas estática."],
                  ["Blog", "/blog/", <SeoChip key="b" score={8} label="Alta" />, "Content marketing que atrae tráfico informacional y refuerza autoridad de dominio."],
                  ["Nosotros", "/sobre-nosotros/", <SeoChip key="n" score={4} label="Baja" />, "Importante para E-E-A-T (Google) pero no genera tráfico directo."],
                  ["Contacto", "/contacto/", <SeoChip key="ct" score={3} label="Baja" />, "Necesario para UX y confianza, no para SEO orgánico."],
                ].map(([item, url, chip, just], i) => (
                  <tr key={i}>
                    <td><strong>{item}</strong></td>
                    <td><code>{url}</code></td>
                    <td>{chip}</td>
                    <td style={{ fontSize: "0.85rem" }}>{just}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Cómo crear el menú en WordPress + GeneratePress</h3>

          <div style={{ margin: "1.5rem 0" }}>
            {[
              {
                n: 1,
                title: "Crear el menú",
                detail: "Apariencia → Menús → «Crear un nuevo menú». Nómbralo «Menú Principal».",
                color: "#0066cc",
              },
              {
                n: 2,
                title: "Añadir ítems",
                detail: "Usa el panel izquierdo: Páginas, Categorías de producto, y URLs personalizadas para «Ofertas».",
                color: "#16a34a",
              },
              {
                n: 3,
                title: "Organizar jerarquía",
                detail: "Arrastra las categorías debajo de «Tienda» para crear el dropdown. Indentación = submenú.",
                color: "#7c3aed",
              },
              {
                n: 4,
                title: "Asignar posición",
                detail: "En «Ajustes del menú» marca la casilla «Menú principal» o «Primary Navigation».",
                color: "#f59e0b",
              },
              {
                n: 5,
                title: "Configurar en GeneratePress",
                detail: "Apariencia → Customizar → Navegación. Aquí controlas: alineación, hover, color activo, menú sticky.",
                color: "#dc2626",
              },
            ].map((s) => (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "1rem",
                  padding: "0.9rem",
                  marginBottom: "0.6rem",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  borderLeft: `4px solid ${s.color}`,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: s.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <strong>{s.title}</strong>
                  <p style={{ margin: "0.2rem 0 0 0", fontSize: "0.88rem", color: "#475569" }}>
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <TipBox title="💡 Ítem 'Ofertas' en color rojo — El truco de conversión">
            <p>
              En <em>Apariencia → Menús</em>, activa las opciones de pantalla (arriba derecha) y
              marca «Clases CSS». Al ítem «Ofertas» añade la clase <code>menu-oferta</code>. Luego en{" "}
              <em>Apariencia → Customizar → CSS adicional</em>:
            </p>
            <pre style={{ background: "#0f172a", color: "#86efac", padding: "0.8rem", borderRadius: "8px", fontSize: "0.82rem" }}>
{`.menu-oferta > a {
  color: #dc2626 !important;
  font-weight: 900 !important;
}
.menu-oferta > a:hover {
  color: #b91c1c !important;
}`}
            </pre>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S3: LOS 9 BLOQUES ══════════════ */}
      <section className="doc doc-section" id="bloques-irrenunciables">
        <h2>3. Los 9 bloques irrenunciables de una home de e-commerce</h2>

        <div className="doc-content">
          <p>
            Esta es la arquitectura visual que usan las tiendas que convierten bien. No es un orden
            caprichoso — responde al flujo psicológico del visitante que llega por primera vez.
          </p>

          {/* Mapa visual */}
          <div
            style={{
              border: "2px dashed #c4b5fd",
              borderRadius: "16px",
              padding: "1.5rem",
              margin: "1.5rem 0",
              background: "#faf9ff",
            }}
          >
            <p style={{ margin: "0 0 1rem 0", fontWeight: 700, color: "#5b21b6" }}>
              Mapa visual de la home (scroll de arriba a abajo)
            </p>
            <div style={{ display: "grid", gap: "0.4rem" }}>
              {[
                { n: "01", name: "HEADER STICKY", sub: "Logo + Menú + Carrito + Buscador", w: "100%", bg: "#1e1b4b", c: "#fff" },
                { n: "02", name: "HERO SECTION", sub: "Propuesta de valor + CTA principal + Imagen hero", w: "100%", bg: "#4c1d95", c: "#fff" },
                { n: "03", name: "BARRA DE CONFIANZA", sub: "Envío gratis · Devoluciones · Pago seguro · Atención 24h", w: "100%", bg: "#5b21b6", c: "#fff" },
                { n: "04", name: "CATEGORÍAS DESTACADAS", sub: "Grid visual de categorías principales (3-4 imágenes)", w: "100%", bg: "#6d28d9", c: "#fff" },
                { n: "05", name: "PRODUCTOS DESTACADOS", sub: "Grid WooCommerce: 4-8 productos · filtro por novedad/oferta", w: "100%", bg: "#7c3aed", c: "#fff" },
                { n: "06", name: "BANNER PROMOCIONAL", sub: "Oferta temporal · Cuenta atrás · CTA urgente", w: "100%", bg: "#8b5cf6", c: "#fff" },
                { n: "07", name: "BLOQUES DE VALOR", sub: "Por qué elegirnos · Sostenibilidad · Proceso · Historia", w: "100%", bg: "#a78bfa", c: "#1e1b4b" },
                { n: "08", name: "SOCIAL PROOF", sub: "Reseñas verificadas · Puntuación media · Logos de medios", w: "100%", bg: "#c4b5fd", c: "#1e1b4b" },
                { n: "09", name: "NEWSLETTER CTA", sub: "Suscripción a lista con incentivo (descuento 10 %)", w: "100%", bg: "#ddd6fe", c: "#1e1b4b" },
              ].map((b) => (
                <div
                  key={b.n}
                  style={{
                    background: b.bg,
                    color: b.c,
                    borderRadius: "8px",
                    padding: "0.7rem 1.2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.7rem", opacity: 0.75, fontWeight: 700 }}>
                      BLOQUE {b.n}
                    </span>
                    <div style={{ fontWeight: 800, fontSize: "0.95rem" }}>{b.name}</div>
                  </div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.85, textAlign: "right" }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Desarrollo de cada bloque */}
          {[
            {
              n: "01",
              title: "Header Sticky",
              color: "#0066cc",
              bg: "#e7f3ff",
              content: (
                <>
                  <p>
                    El header es la única parte de la página que el usuario ve en <em>todo momento</em>.
                    En GeneratePress Premium → módulo <strong>Sticky Navigation</strong>.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Elementos obligatorios</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Logo (SVG o PNG 2x, máx 180px ancho)</li>
                        <li>Menú principal (dropdown de categorías)</li>
                        <li>Icono carrito con contador de ítems (módulo GP WooCommerce)</li>
                        <li>Buscador (icono que expande, no campo visible)</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Errores frecuentes</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>❌ Header demasiado alto (resta espacio de contenido en móvil)</li>
                        <li>❌ Logo en formato JPG opaco (usa PNG o SVG)</li>
                        <li>❌ No incluir el carrito (el usuario no puede ver qué ha añadido)</li>
                        <li>❌ Fondo del header igual al fondo de la hero (pierdes separación visual)</li>
                      </ul>
                    </div>
                  </div>
                  <TipBox title="GeneratePress: configurar header sticky">
                    <p>
                      <em>Apariencia → Customizar → Layout → Sticky Navigation</em>. Activa
                      «Enable Sticky Navigation». Elige <strong>«Shrink»</strong> para que el
                      header se reduzca al hacer scroll — efecto profesional sin código.
                    </p>
                  </TipBox>
                </>
              ),
            },
            {
              n: "02",
              title: "Hero Section — La primera impresión",
              color: "#7c3aed",
              bg: "#f3e8ff",
              content: (
                <>
                  <p>
                    Tienes <strong>3 segundos</strong> para que el usuario entienda qué vendes y por qué
                    debería quedarse. La hero section es tu único chance. Todo lo demás depende de que esto funcione.
                  </p>
                  <h5>Fórmula comprobada para hero de e-commerce</h5>
                  <div
                    style={{
                      background: "#0f172a",
                      borderRadius: "10px",
                      padding: "1.2rem",
                      color: "#e2e8f0",
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      lineHeight: 2,
                    }}
                  >
                    <span style={{ color: "#fca5a5" }}>H1:</span>{" "}
                    <span style={{ color: "#fef08a" }}>[Adjetivo diferenciador] + [Producto/categoría] + [Para quién]</span>
                    <br />
                    <span style={{ color: "#fca5a5" }}>Subtítulo:</span>{" "}
                    <span style={{ color: "#86efac" }}>Beneficio principal en 1 frase (no características)</span>
                    <br />
                    <span style={{ color: "#fca5a5" }}>CTA primario:</span>{" "}
                    <span style={{ color: "#7dd3fc" }}>«Descubre la colección» → /tienda/</span>
                    <br />
                    <span style={{ color: "#fca5a5" }}>CTA secundario:</span>{" "}
                    <span style={{ color: "#c4b5fd" }}>«Ver ofertas» → /tienda/?sale=1</span>
                    <br />
                    <span style={{ color: "#fca5a5" }}>Imagen:</span>{" "}
                    <span style={{ color: "#fed7aa" }}>Producto hero o modelo en uso · WebP · full-bleed</span>
                  </div>
                  <WarningBox>
                    <p>
                      <strong>El H1 de la home es su keyword principal.</strong> Si tu tienda se
                      llama «EcoVerde» no pongas como H1 «EcoVerde» — eso no tiene volumen de
                      búsqueda. Pon algo como{" "}
                      <em>«Ropa Ecológica Sostenible para Mujer y Hombre»</em>. El nombre de marca va
                      en el logo, no en el H1.
                    </p>
                  </WarningBox>
                  <h5>En Elementor: construir la hero</h5>
                  <ol style={{ fontSize: "0.88rem" }}>
                    <li>Nueva sección → 2 columnas (60 % / 40 %)</li>
                    <li>Columna izquierda: widget Heading (H1), widget Text Editor (subtítulo), 2 widgets Button</li>
                    <li>Columna derecha: widget Image con tu foto hero</li>
                    <li>En la sección: background color o degradado de marca, min-height 80vh</li>
                    <li>En mobile: invertir columnas (imagen arriba, texto abajo)</li>
                  </ol>
                </>
              ),
            },
            {
              n: "03",
              title: "Barra de Confianza (Trust Bar)",
              color: "#16a34a",
              bg: "#f0fdf4",
              content: (
                <>
                  <p>
                    Una barra horizontal de iconos + textos cortos que responde las 4 objeciones más
                    comunes antes de que el usuario las piense. Ubícala inmediatamente debajo de la
                    hero o dentro del header.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))", gap: "0.8rem", margin: "1rem 0" }}>
                    {[
                      { icon: "🚚", texto: "Envío gratis +50 €", objecion: "¿Cuánto cuesta el envío?" },
                      { icon: "🔄", texto: "30 días devolución", objecion: "¿Y si no me gusta?" },
                      { icon: "🔒", texto: "Pago 100 % seguro", objecion: "¿Es seguro pagar aquí?" },
                      { icon: "🌿", texto: "Producción sostenible", objecion: "¿De dónde viene el producto?" },
                    ].map((item) => (
                      <div
                        key={item.texto}
                        style={{
                          background: "white",
                          border: "1px solid #86efac",
                          borderRadius: "10px",
                          padding: "0.8rem",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: "0.82rem", marginTop: "0.3rem" }}>{item.texto}</div>
                        <div style={{ fontSize: "0.7rem", color: "#64748b", marginTop: "0.2rem" }}>
                          Objeción: {item.objecion}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#475569" }}>
                    En Elementor: sección 1 columna con 4 widgets Icon Box en una fila. Padding
                    reducido (8px vertical). Fondo ligeramente diferente al de la hero (ej. blanco
                    vs fondo de color).
                  </p>
                </>
              ),
            },
            {
              n: "04",
              title: "Grid de Categorías Visuales",
              color: "#f59e0b",
              bg: "#fff3cd",
              content: (
                <>
                  <p>
                    Permite al usuario navegar directamente a lo que busca sin pasar por el
                    catálogo completo. Las páginas de categoría son también destinos SEO clave.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Diseño recomendado</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>3-4 categorías máximo en la home</li>
                        <li>Imagen cuadrada o 4:3 por categoría</li>
                        <li>Nombre de categoría sobre la imagen (overlay semitransparente)</li>
                        <li>Hover effect: zoom de imagen o brighten</li>
                        <li>Enlaza a la URL de categoría de WooCommerce (/tienda/categoria/)</li>
                      </ul>
                    </div>
                    <div>
                      <h5>En Elementor</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Widget <strong>Image Box</strong> (1 por categoría)</li>
                        <li>O mejor: widget <strong>Image</strong> + Heading encima con position absolute</li>
                        <li>Con Elementor Pro: widget <strong>WooCommerce Product Categories</strong></li>
                        <li>Anima el hover en Motion Effects → Hover Animations</li>
                      </ul>
                    </div>
                  </div>
                </>
              ),
            },
            {
              n: "05",
              title: "Galería de Productos Destacados",
              color: "#dc2626",
              bg: "#fff5f5",
              content: (
                <>
                  <p>
                    El corazón de la home. Hace visible aquello que quieres vender primero. Aquí es
                    donde el tráfico se convierte (o no) en clientes.
                  </p>

                  <h5>Selección de productos estratégica</h5>
                  <div className="table-wrap">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Qué mostrar</th>
                          <th>Por qué</th>
                          <th>Número</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Novedades", "Motiva a volver. «¿Qué hay nuevo?»", "2-3"],
                          ["Más vendidos", "Social proof implícito. Si otros lo compran, será bueno.", "2-3"],
                          ["En oferta", "Alta conversión inmediata. FOMO activado.", "1-2"],
                          ["Alta valoración (⭐⭐⭐⭐⭐)", "Trust. El cliente delega la decisión en otros clientes.", "1-2"],
                        ].map(([q, por, n], i) => (
                          <tr key={i}>
                            <td><strong>{q}</strong></td>
                            <td style={{ fontSize: "0.88rem" }}>{por}</td>
                            <td style={{ textAlign: "center" }}><code>{n}</code></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h5 style={{ marginTop: "1.2rem" }}>Implementación en Elementor FREE</h5>
                  <ol style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
                    <li>
                      Inserta el shortcode de WooCommerce en un widget <strong>Shortcode</strong>:
                      <pre style={{ background: "#0f172a", color: "#86efac", padding: "0.6rem", borderRadius: "8px", fontSize: "0.82rem", margin: "0.4rem 0" }}>
{`[products limit="8" columns="4" orderby="popularity" order="DESC"]`}
                      </pre>
                    </li>
                    <li>Para mostrar solo los en oferta: añade <code>on_sale="true"</code></li>
                    <li>Para mostrar los más nuevos: <code>orderby="date"</code></li>
                    <li>Para mostrar una categoría específica: <code>category="camisetas"</code></li>
                  </ol>

                  <h5>Con Elementor Pro: widget Products</h5>
                  <p style={{ fontSize: "0.88rem" }}>
                    El widget nativo <strong>Products</strong> permite controlar visualmente
                    columnas, skin de tarjeta (Default, Classic, Overlap), paginación, filtros y
                    ordenación sin tocar shortcodes. Vale la pena si el diseño de las tarjetas de
                    producto es importante para tu marca.
                  </p>

                  <WarningBox>
                    <p>
                      <strong>Imágenes de producto:</strong> todas deben tener el mismo ratio (recomendado
                      1:1 o 4:3). WooCommerce recorta las miniaturas al tamaño definido en{" "}
                      <em>WooCommerce → Ajustes → Productos → Imágenes</em>. Si subes imágenes de
                      distintos tamaños sin configurar esto, el grid quedará desalineado.
                    </p>
                  </WarningBox>
                </>
              ),
            },
            {
              n: "06",
              title: "Banner Promocional con Urgencia",
              color: "#ea580c",
              bg: "#fff7ed",
              content: (
                <>
                  <p>
                    Un bloque de atención completa (full-width, color llamativo) con una oferta de
                    tiempo limitado. El principio de escasez y urgencia es una de las palancas de
                    conversión más potentes documentadas en psicología del consumidor.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Elementos del banner</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Texto de oferta claro: «-20 % en toda la colección»</li>
                        <li>Fecha límite visible: «Hasta el domingo»</li>
                        <li>Contador regresivo (plugin: Countdown Timer for Elementor)</li>
                        <li>CTA único y directo</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Evita</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>❌ Falsa urgencia — el contador no debe reiniciarse cada día</li>
                        <li>❌ Múltiples ofertas en el mismo banner (confunde)</li>
                        <li>❌ Fondo rojo si ya usas rojo para el ítem «Ofertas» del menú</li>
                      </ul>
                    </div>
                  </div>
                </>
              ),
            },
            {
              n: "07",
              title: "Bloques de Valor de Marca",
              color: "#0891b2",
              bg: "#ecfeff",
              content: (
                <>
                  <p>
                    Explica <em>por qué deberían comprarte a ti</em> y no a la competencia. Este bloque
                    es especialmente importante para tiendas nuevas sin historia de reseñas.
                  </p>
                  <p style={{ fontSize: "0.88rem" }}>
                    En Elementor: 3-4 widgets <strong>Icon Box</strong> en una fila. Icono vectorial +
                    título corto + descripción de 2 líneas máximo. Ejemplos para moda ecológica:{" "}
                    <em>«100 % algodón orgánico certificado»</em>,{" "}
                    <em>«Fabricado en Portugal»</em>,{" "}
                    <em>«Packaging reciclado»</em>,{" "}
                    <em>«1 árbol plantado por compra»</em>.
                  </p>
                </>
              ),
            },
            {
              n: "08",
              title: "Social Proof — Reseñas de Clientes",
              color: "#d97706",
              bg: "#fffbeb",
              content: (
                <>
                  <p>
                    El 93 % de los consumidores lee reseñas antes de comprar online. La prueba
                    social reduce la percepción de riesgo y suele ser el último empujón hacia la
                    conversión.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Opciones de implementación</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>WooCommerce Reviews nativos (en fichas de producto, no en home)</li>
                        <li>Plugin <strong>Judge.me</strong> (gratuito, se integra con WooCommerce)</li>
                        <li>Widget Elementor Testimonial Carousel para reseñas manuales</li>
                        <li>Puntuación media visible: «⭐ 4.8/5 · +240 reseñas verificadas»</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Logos de medios (si aplica)</h5>
                      <p style={{ fontSize: "0.88rem" }}>
                        Si tu marca ha aparecido en prensa, blogs o redes de influencers, una barra
                        de logos «Tal como aparece en…» aporta enorme credibilidad. Incluso si son
                        medios pequeños.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              n: "09",
              title: "Newsletter CTA con Incentivo",
              color: "#7c3aed",
              bg: "#f3e8ff",
              content: (
                <>
                  <p>
                    El email marketing tiene un ROI medio de 36:1 (36 € por cada 1 € invertido). Tu
                    lista de email es el único activo de marketing que no depende de algoritmos de
                    terceros.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Fórmula que funciona</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Incentivo claro: «-10 % en tu primera compra»</li>
                        <li>Campo único: solo email (nombre opcional)</li>
                        <li>Texto bajo el botón: «Sin spam · Cancelar cuando quieras»</li>
                        <li>Conectar con Mailchimp (plugin Mailchimp for WooCommerce)</li>
                      </ul>
                    </div>
                    <div>
                      <h5>En Elementor</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Sección full-width con background de color de marca</li>
                        <li>Heading + Párrafo + widget Form (con Elementor Pro)</li>
                        <li>Con FREE: shortcode de Mailchimp o plugin MailPoet</li>
                        <li>Padding generoso: 80px top/bottom</li>
                      </ul>
                    </div>
                  </div>
                </>
              ),
            },
          ].map((bloque) => (
            <details key={bloque.n} className="dd" style={{ marginTop: "1rem" }}>
              <summary>
                <BlockLabel n={bloque.n} title={bloque.title} color={bloque.color} />
              </summary>
              <div
                className="dd-body"
                style={{ background: bloque.bg, borderRadius: "0 0 10px 10px", padding: "1.2rem" }}
              >
                {bloque.content}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ══════════════ S4: SEO ON-PAGE ══════════════ */}
      <section className="doc doc-section" id="seo-home">
        <h2>4. SEO on-page en la home: checklist desde el día 1</h2>

        <div className="doc-content">
          <p>
            La home es la página con más autoridad de enlace de tu dominio. Cada decisión técnica
            aquí tiene impacto multiplicado respecto al resto de páginas.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                cat: "🏷️ Metadatos",
                color: "#e7f3ff",
                items: [
                  ["Title tag", "Nombre tienda + keyword principal (50-60 car.)", true],
                  ["Meta description", "Propuesta de valor + CTA (120-155 car.)", true],
                  ["Keywords meta", "Obsoleto, no rellenar", false],
                  ["Canonical URL", "Apunta a www o sin-www según configuración", true],
                ],
              },
              {
                cat: "📐 Estructura HTML",
                color: "#f0fdf4",
                items: [
                  ["H1 único", "Solo uno por página, con keyword principal", true],
                  ["Jerarquía H2-H6", "H2 para secciones, H3 para subsecciones", true],
                  ["Alt text imágenes", "Describe el producto, no 'imagen1.jpg'", true],
                  ["Texto plano suficiente", "Google indexa el HTML, no el diseño visual", true],
                ],
              },
              {
                cat: "⚡ Rendimiento (Core Web Vitals)",
                color: "#fff3cd",
                items: [
                  ["LCP < 2.5 s", "Largest Contentful Paint — imagen hero optimizada", true],
                  ["CLS < 0.1", "Layout Shift — reservar espacio para imágenes", true],
                  ["FID < 100 ms", "Interactividad — limitar JS de terceros", true],
                  ["WebP para imágenes", "30-50 % menor tamaño que JPG", true],
                ],
              },
              {
                cat: "🔗 Schema Markup",
                color: "#f3e8ff",
                items: [
                  ["Organization schema", "Nombre, logo, redes sociales de la marca", true],
                  ["WebSite schema", "Sitelinks Search Box para Google", true],
                  ["Product schema", "En fichas de producto, no en home", false],
                  ["BreadcrumbList", "En páginas de categoría y producto", false],
                ],
              },
            ].map((group) => (
              <div
                key={group.cat}
                style={{
                  background: group.color,
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <h5 style={{ margin: "0 0 0.8rem 0" }}>{group.cat}</h5>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {group.items.map(([item, desc, imp]) => (
                    <li
                      key={item}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: "0.84rem",
                      }}
                    >
                      <span>{imp ? "✅" : "⚪"}</span>
                      <span>
                        <strong>{item}</strong>
                        <br />
                        <span style={{ color: "#64748b" }}>{desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <TipBox title="🔧 Configurar el Title y Meta description con Yoast">
            <ol style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
              <li>Ve al editor de la página «Inicio» en WordPress</li>
              <li>Baja hasta el bloque de Yoast SEO (pestaña «SEO»)</li>
              <li>
                En <strong>SEO title</strong> escribe algo como:{" "}
                <em>«Ropa Ecológica Sostenible | EcoVerde»</em>
              </li>
              <li>
                En <strong>Meta description</strong>:{" "}
                <em>«Descubre nuestra colección de moda sostenible. Algodón orgánico certificado, envío gratis +50 € y devoluciones gratuitas.»</em>
              </li>
              <li>Asegúrate de que el semáforo de Yoast queda en verde ✅</li>
            </ol>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S5: WORKFLOW EN ELEMENTOR ══════════════ */}
      <section className="doc doc-section" id="workflow-elementor">
        <h2>5. Workflow profesional en Elementor</h2>

        <div className="doc-content">
          <p>
            Antes de construir el primer bloque en Elementor, configura el sistema de diseño.
            Hacerlo después te obliga a cambiar colores y tipografías en cada widget uno a uno.
          </p>

          <h3>Paso 0: Sistema de diseño global</h3>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                n: 1,
                title: "Elementor → Site Settings → Global Colors",
                detail: "Define: Primary (verde bosque #2d5a27), Secondary (crema #f5f0e8), Accent (madera #8b7355), Text (#1a1a1a). Todos los widgets usarán estos colores por defecto.",
                color: "#0066cc",
              },
              {
                n: 2,
                title: "Site Settings → Global Fonts",
                detail: "Primary font: Playfair Display (títulos) · Secondary font: Lato (cuerpo). Activa Google Fonts desde aquí. No vayas fuente a fuente en cada widget.",
                color: "#7c3aed",
              },
              {
                n: 3,
                title: "Site Settings → Layout",
                detail: "Content Width: 1200px. Las secciones con fondo extendido usan Stretch Section. El contenido interior respeta el max-width de 1200px.",
                color: "#16a34a",
              },
              {
                n: 4,
                title: "Site Settings → Responsive Breakpoints",
                detail: "Mobile: 768px · Tablet: 1024px. Asegúrate de que coinciden con los breakpoints de GeneratePress (Customizar → Layout) para coherencia.",
                color: "#f59e0b",
              },
            ].map((s) => (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "1rem",
                  padding: "0.9rem",
                  marginBottom: "0.6rem",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  borderLeft: `4px solid ${s.color}`,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: s.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <strong style={{ fontSize: "0.9rem" }}>{s.title}</strong>
                  <p style={{ margin: "0.2rem 0 0 0", fontSize: "0.85rem", color: "#475569" }}>
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3>Orden recomendado de construcción</h3>
          <ol style={{ fontSize: "0.9rem", lineHeight: 2 }}>
            <li>Configurar Site Settings (colores + fuentes + layout)</li>
            <li>Construir la Hero section (marca el tono visual de todo lo demás)</li>
            <li>Añadir Trust Bar (sección simple, 1 fila)</li>
            <li>Insertar shortcode de categorías o grid de Image Box</li>
            <li>Insertar shortcode de productos destacados</li>
            <li>Añadir banner promocional</li>
            <li>Añadir icon boxes de valor de marca</li>
            <li>Añadir bloque de reseñas</li>
            <li>Añadir newsletter CTA</li>
            <li>Revisar en tablet y mobile, ajustar paddings y tamaños</li>
          </ol>

          <WarningBox>
            <p>
              <strong>No trabajes con el modo responsive hasta que el diseño desktop esté al 80 %.</strong>{" "}
              Si corriges responsive continuamente mientras diseñas, perderás el hilo del diseño
              general. Termina desktop, luego ajusta tablet, luego mobile.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>6. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Configurar el menú de navegación">
            <ol>
              <li>
                En tu instalación WPZip, ve a <em>Apariencia → Menús</em> y crea el menú principal
                con la estructura recomendada en este tema.
              </li>
              <li>
                Añade las categorías de producto como subítems de «Tienda».
              </li>
              <li>
                Añade el ítem «Ofertas» con la clase CSS <code>menu-oferta</code> y aplica el estilo
                CSS rojo en el Customizer.
              </li>
              <li>
                Verifica que el menú aparece correctamente en desktop y en mobile (hamburger).
              </li>
              <li>
                Comparte una captura del menú desplegado mostrando las subcategorías.
              </li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Construir la Hero Section en Elementor">
            <ol>
              <li>
                Ve a la página «Inicio» → Editar con Elementor.
              </li>
              <li>
                Configura los Global Colors y Global Fonts con la paleta de tu proyecto.
              </li>
              <li>
                Construye la hero section con la fórmula del manual: H1 + subtítulo + 2 CTAs +
                imagen.
              </li>
              <li>
                El H1 debe contener la keyword principal de tu tienda (no el nombre de marca).
              </li>
              <li>
                Verifica en mobile que la imagen no tapa el texto y los botones son clickables.
              </li>
              <li>
                Añade la Trust Bar debajo de la hero con 4 iconos de confianza.
              </li>
            </ol>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad — Auditoría de home de e-commerce real">
            <p>
              Elige una tienda online de tu sector (o cualquier tienda que uses habitualmente) y
              realiza una auditoría aplicando lo aprendido en este tema:
            </p>
            <ol>
              <li>
                <strong>Menú:</strong> ¿Cuántos ítems tiene? ¿Hay dropdown de categorías? ¿Hay
                algún ítem con color diferente? ¿Funciona bien en móvil?
              </li>
              <li>
                <strong>Hero:</strong> ¿Qué dice el H1? ¿Tiene propuesta de valor clara en 3
                segundos? ¿Cuántos CTAs hay?
              </li>
              <li>
                <strong>Trust signals:</strong> ¿Dónde aparecen? ¿Qué objeciones responden?
              </li>
              <li>
                <strong>Productos destacados:</strong> ¿Qué criterio usan para seleccionarlos?
                ¿Hay mezcla de novedades, más vendidos y ofertas?
              </li>
              <li>
                <strong>Social proof:</strong> ¿Hay reseñas en la home? ¿Cómo están presentadas?
              </li>
              <li>
                <strong>Newsletter:</strong> ¿Existe? ¿Qué incentivo ofrece?
              </li>
            </ol>
            <p>
              Entrega: tabla comparativa con la home auditada vs lo que tú harías diferente en tu
              proyecto.
            </p>
          </ActivityBox>
        </div>
      </section>

      {/* ══════════════ CONCLUSIÓN ══════════════ */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #2d1b69 100%)",
            color: "white",
            padding: "2.5rem",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ margin: "0 0 1.5rem 0", color: "white", textAlign: "center" }}>
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
              { icon: "🗺️", t: "La home no es decoración", d: "Es un sistema de conversión diseñado para llevar al visitante de la duda a la compra." },
              { icon: "📐", t: "El menú es estrategia SEO", d: "Cada ítem del menú distribuye autoridad de enlace. Ponlo con criterio, no por completismo." },
              { icon: "⚡", t: "Configura el sistema antes de diseñar", d: "Global Colors + Fonts en Elementor te ahorra horas de trabajo y garantiza coherencia." },
              { icon: "📊", t: "Mide desde el día 1", d: "Instala Google Analytics 4 y conecta Search Console antes de publicar la primera versión." },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.4rem" }}>{c.icon}</div>
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#7dd3fc", fontSize: "0.95rem" }}>{c.t}</h4>
                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <TipBox title="Próximo tema">
          <p>
            En el <strong>Tema 27</strong> configuramos WooCommerce en profundidad: creación de
            productos con variantes (talla, color), gestión de stock, imágenes de galería de
            producto y configuración de fichas para SEO.
          </p>
        </TipBox>
      </section>
    </TopicLayout>
  );
}
