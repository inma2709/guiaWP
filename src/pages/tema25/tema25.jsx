import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function WooCommerce_Inicio() {
  return (
    <TopicLayout>
      {/* ──────────────────────────────────────────── HERO */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · WordPress · Proyecto E-Commerce</p>
        <h1>Tu Primera Tienda Online: WooCommerce + GeneratePress + Elementor</h1>
        <p className="lead">
          Arranca desde cero un proyecto de comercio electrónico profesional. Entiende cómo funciona
          WooCommerce, por qué GeneratePress es el tema ideal para e-commerce, cómo encaja Elementor
          en la arquitectura y crea tu primera instalación con un prompt optimizado en WPZip.
        </p>

        <TipBox title="🎯 Objetivos de este tema">
          <ul>
            <li>Comprender los <strong>principios básicos de un e-commerce</strong> y su arquitectura técnica</li>
            <li>Entender <strong>cómo funciona WooCommerce</strong> y su integración con WordPress</li>
            <li>Conocer <strong>GeneratePress</strong> como base de rendimiento para tiendas</li>
            <li>Entender el rol de <strong>Elementor</strong> dentro de un stack de e-commerce</li>
            <li>Crear tu <strong>primera instalación completa con WPZip</strong> usando un prompt profesional</li>
          </ul>
          <p><strong>Tiempo estimado:</strong> 3 horas · <strong>Nivel:</strong> Intermedio-Avanzado</p>
          <p><strong>Requisitos:</strong> Haber completado temas anteriores de WordPress, Elementor y GeneratePress básico</p>
        </TipBox>
      </header>

      {/* ──────────────────────────────────────────── SECCIÓN 1: E-COMMERCE */}
      <section className="doc doc-section" id="principios-ecommerce">
        <h2>1. ¿Qué es un E-Commerce y cómo funciona?</h2>

        <div className="doc-content">
          <p>
            Antes de tocar ningún plugin ni tema, necesitas entender qué estás construyendo.
            Un <strong>e-commerce</strong> no es solo "una tienda bonita" — es un <em>sistema</em> con
            capas interdependientes que debes conocer para tomar buenas decisiones de diseño técnico.
          </p>

          <h3>Las 5 capas de cualquier tienda online</h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", margin: "2rem 0" }}>
            {[
              {
                num: "01",
                title: "Catálogo de productos",
                desc: "Nombres, descripciones, precios, imágenes, variantes (talla, color), SKU, stock. La base de todo.",
                color: "#e7f3ff",
                border: "#0066cc",
                text: "#003d7a",
              },
              {
                num: "02",
                title: "Carrito y checkout",
                desc: "Proceso de selección, cálculo de totales, cupones, gastos de envío y recogida de datos del cliente.",
                color: "#f3e8ff",
                border: "#8b5cf6",
                text: "#5b21b6",
              },
              {
                num: "03",
                title: "Pasarela de pago",
                desc: "Integración con Stripe, PayPal, Bizum, TPV virtual. Gestión de cobros, reembolsos y seguridad PCI.",
                color: "#fff3cd",
                border: "#ffc107",
                text: "#856404",
              },
              {
                num: "04",
                title: "Gestión de pedidos y envíos",
                desc: "Estados de pedido, facturación automática, integración con agencias de transporte (Correos, Seur, MRW…).",
                color: "#d1ecf1",
                border: "#17a2b8",
                text: "#0c5460",
              },
              {
                num: "05",
                title: "Marketing y retención",
                desc: "Emails automáticos, recuperación de carritos abandonados, programas de fidelización, reseñas.",
                color: "#f8fff9",
                border: "#10b981",
                text: "#065f46",
              },
            ].map((layer) => (
              <div
                key={layer.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "1.5rem",
                  background: layer.color,
                  border: `2px solid ${layer.border}`,
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "900",
                    color: layer.border,
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  {layer.num}
                </div>
                <div>
                  <h4 style={{ color: layer.text, margin: "0 0 0.4rem 0" }}>{layer.title}</h4>
                  <p style={{ margin: 0, fontSize: "0.92rem" }}>{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <WarningBox>
            <p>
              <strong>Error frecuente de alumnos:</strong> Empezar diseñando la home sin haber
              definido primero el catálogo, los métodos de pago y la política de envíos. El diseño
              debe <em>servir</em> a la lógica de negocio, no al revés.
            </p>
          </WarningBox>

          <h3>KPIs que guían las decisiones de diseño</h3>

          <div className="table-wrap">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                margin: "1rem 0",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>Indicador</th>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>Qué mide</th>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>Impacto en diseño</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tasa de conversión (CR)", "% visitas que compran", "Simplificar checkout, CTAs claros"],
                  ["Valor medio del pedido (AOV)", "Cuánto gasta cada cliente", "Upsells, bundles, envío gratis a partir de X€"],
                  ["Tasa de abandono de carrito", "% que no completan compra", "Checkout rápido, indicador de pasos, trust badges"],
                  ["Tiempo de carga", "Velocidad de respuesta", "Theme ligero, imágenes optimizadas, caché"],
                  ["Mobile conversion rate", "Conversión en móvil", "Diseño mobile-first, botones grandes, checkout fácil"],
                ].map(([kpi, mide, impacto], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8f9fa" }}>
                    <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>
                      <strong>{kpi}</strong>
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>{mide}</td>
                    <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>{impacto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────── SECCIÓN 2: WOOCOMMERCE */}
      <section className="doc doc-section" id="como-funciona-woocommerce">
        <h2>2. Cómo funciona WooCommerce</h2>

        <div className="doc-content">
          <p>
            WooCommerce es el <strong>plugin de e-commerce más utilizado del mundo</strong>: impulsa más
            del 28 % de todas las tiendas online. Pero ¿qué hace exactamente?
          </p>

          <TipBox title="🔑 Definición precisa">
            <p>
              WooCommerce es un <strong>plugin de WordPress</strong> que añade toda la infraestructura
              necesaria para vender productos: Custom Post Types propios, páginas especiales de tienda,
              sistema de pagos, gestión de pedidos y una API REST completa. No es una plataforma aparte
              — vive <em>dentro</em> de WordPress.
            </p>
          </TipBox>

          <h3>Arquitectura interna de WooCommerce</h3>

          <div
            style={{
              background: "#f8f9fa",
              border: "1px solid #dee2e6",
              borderRadius: "12px",
              padding: "2rem",
              margin: "1.5rem 0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                { icon: "📦", title: "Custom Post Types", items: ["product", "shop_order", "shop_coupon"] },
                { icon: "🗂️", title: "Taxonomías propias", items: ["product_cat", "product_tag", "pa_talla", "pa_color"] },
                { icon: "📄", title: "Páginas especiales", items: ["Tienda", "Carrito", "Pago", "Mi cuenta"] },
                { icon: "🔌", title: "Hooks & Filters", items: ["woocommerce_before_cart", "woocommerce_checkout_fields", "+200 hooks más"] },
              ].map((block) => (
                <div
                  key={block.title}
                  style={{
                    background: "white",
                    border: "1px solid #dee2e6",
                    borderRadius: "8px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{block.icon}</div>
                  <h5 style={{ margin: "0 0 0.5rem 0", color: "#343a40" }}>{block.title}</h5>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem" }}>
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <h3>El flujo de una compra paso a paso</h3>

          <div style={{ margin: "1.5rem 0" }}>
            {[
              { step: "1", label: "Catálogo / Tienda", detail: "WooCommerce renderiza productos usando la plantilla archive-product.php del theme activo o sus propias plantillas de fallback." },
              { step: "2", label: "Ficha de producto", detail: "single-product.php controla el layout. Aquí se muestran galería, precio, variantes y el botón «Añadir al carrito»." },
              { step: "3", label: "Carrito", detail: "wp-admin genera automáticamente la página /carrito/ con el shortcode [woocommerce_cart]. WooCommerce gestiona sesiones con cookies." },
              { step: "4", label: "Checkout", detail: "Página /finalizar-compra/ con [woocommerce_checkout]. Aquí se integran las pasarelas de pago mediante sus propios plugins." },
              { step: "5", label: "Confirmación y email", detail: "WooCommerce crea el pedido en base de datos, envía email al cliente y al admin, y actualiza el stock automáticamente." },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  display: "flex",
                  gap: "1.2rem",
                  marginBottom: i < 4 ? 0 : "0",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "40px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#8b5cf6",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {s.step}
                  </div>
                  {i < 4 && (
                    <div style={{ width: "2px", height: "40px", background: "#e0d7ff", flexShrink: 0 }} />
                  )}
                </div>
                <div
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e0d7ff",
                    borderRadius: "8px",
                    padding: "0.8rem 1rem",
                    flex: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong style={{ color: "#5b21b6" }}>{s.label}</strong>
                  <p style={{ margin: "0.3rem 0 0 0", fontSize: "0.9rem" }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>Plugins esenciales del ecosistema WooCommerce</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              { cat: "💳 Pagos", plugins: ["WooCommerce Stripe Gateway", "WooCommerce PayPal Payments", "WooCommerce Bizum (Sipay)"] },
              { cat: "🚚 Envíos", plugins: ["WooCommerce Correos", "Woo Enviopack (Seur, MRW)", "Table Rate Shipping"] },
              { cat: "📧 Marketing", plugins: ["Mailchimp for WooCommerce", "Klaviyo", "AutomateWoo (abandoned cart)"] },
              { cat: "📊 Analytics", plugins: ["WooCommerce Analytics (nativo)", "MonsterInsights E-Commerce", "Metorik"] },
              { cat: "🧾 Fiscalidad", plugins: ["WooCommerce PDF Invoices", "EU VAT Number", "WooCommerce FacturaDirecta"] },
              { cat: "🔍 SEO & UX", plugins: ["Yoast WooCommerce SEO", "YITH WooCommerce Wishlist", "WPC Product Bundles"] },
            ].map((group) => (
              <div
                key={group.cat}
                style={{
                  background: "white",
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "1rem 1.2rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <h5 style={{ margin: "0 0 0.6rem 0", fontSize: "0.95rem" }}>{group.cat}</h5>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem" }}>
                  {group.plugins.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <details className="dd">
            <summary>
              📖 ¿Qué archivos de plantilla controlan el aspecto de WooCommerce?
            </summary>
            <div className="dd-body">
              <p>
                WooCommerce usa su propio sistema de plantillas PHP. Si quieres sobreescribir
                cualquier plantilla, copia el archivo desde{" "}
                <code>wp-content/plugins/woocommerce/templates/</code> a{" "}
                <code>wp-content/themes/tu-theme/woocommerce/</code> y modifícal ahí.
              </p>
              <div className="table-wrap">
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.85rem",
                  }}
                >
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>Plantilla</th>
                      <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>Controla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["archive-product.php", "Página de tienda (listado de productos)"],
                      ["single-product.php", "Ficha de producto individual"],
                      ["cart/cart.php", "Página del carrito"],
                      ["checkout/form-checkout.php", "Formulario de finalizar compra"],
                      ["myaccount/my-account.php", "Panel «Mi Cuenta»"],
                      ["emails/", "Todos los emails transaccionales"],
                    ].map(([file, desc], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8f9fa" }}>
                        <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>
                          <code>{file}</code>
                        </td>
                        <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ──────────────────────────────────────────── SECCIÓN 3: GENERATEPRESS */}
      <section className="doc doc-section" id="generatepress-ecommerce">
        <h2>3. GeneratePress: El theme base ideal para e-commerce</h2>

        <div className="doc-content">
          <p>
            Hay decenas de themes "para WooCommerce". Entonces, ¿por qué usar GeneratePress? La
            respuesta está en sus números y en su filosofía de diseño.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              margin: "2rem 0",
            }}
          >
            {[
              { valor: "< 10 KB", label: "Peso del theme base", sub: "Sin CSS innecesario" },
              { valor: "100/100", label: "PageSpeed mobile", sub: "Con configuración correcta" },
              { valor: "0 ms", label: "Bloqueo de render JS", sub: "Sin JavaScript en frontend" },
              { valor: "Nativa", label: "Integración WooCommerce", sub: "Módulo WooCommerce Pro" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                  color: "white",
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{ fontSize: "1.8rem", fontWeight: "900", color: "#7dd3fc", lineHeight: 1 }}
                >
                  {stat.valor}
                </div>
                <div style={{ fontSize: "0.8rem", opacity: 0.9, margin: "0.5rem 0 0.2rem" }}>
                  <strong>{stat.label}</strong>
                </div>
                <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          <h3>GeneratePress Free vs GeneratePress Premium</h3>

          <div className="table-wrap">
            <table
              style={{ width: "100%", borderCollapse: "collapse", margin: "1rem 0", fontSize: "0.9rem" }}
            >
              <thead>
                <tr style={{ background: "#1a1a2e", color: "white" }}>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>Funcionalidad</th>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>FREE</th>
                  <th style={{ padding: "12px", border: "1px solid #dee2e6" }}>PREMIUM (49$/año)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Theme base ultraligero", "✅", "✅"],
                  ["Customizer básico", "✅", "✅"],
                  ["WooCommerce básico", "✅", "✅"],
                  ["Módulo Typography avanzado", "❌", "✅"],
                  ["Módulo Colors avanzado", "❌", "✅"],
                  ["Módulo WooCommerce Pro", "❌", "✅"],
                  ["Módulo Menu Plus", "❌", "✅"],
                  ["Módulo Page Header", "❌", "✅"],
                  ["GenerateBlocks integrado", "❌", "✅"],
                  ["Site Library (sitios demo)", "❌", "✅"],
                ].map(([feat, free, premium], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8f9fa" }}>
                    <td style={{ padding: "10px", border: "1px solid #dee2e6" }}>{feat}</td>
                    <td
                      style={{
                        padding: "10px",
                        border: "1px solid #dee2e6",
                        textAlign: "center",
                        color: free === "✅" ? "#16a34a" : "#dc2626",
                      }}
                    >
                      {free}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        border: "1px solid #dee2e6",
                        textAlign: "center",
                        color: "#16a34a",
                      }}
                    >
                      {premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Módulo WooCommerce de GeneratePress Premium</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                icon: "🖼️",
                title: "Layout de tienda",
                desc: "Número de columnas de productos, sidebar de tienda (izquierda, derecha, sin sidebar). Sin CSS custom.",
              },
              {
                icon: "📐",
                title: "Ficha de producto",
                desc: "Layout del contenido, posición de tabs, dirección de la galería, sticky add-to-cart.",
              },
              {
                icon: "🛒",
                title: "Carrito y checkout",
                desc: "Plantillas optimizadas para conversión: checkout en una columna, campos mínimos.",
              },
              {
                icon: "🔢",
                title: "Cantidad en carrito en header",
                desc: "Icono de carrito con contador en el menú de navegación, sin plugins adicionales.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #86efac",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h5 style={{ color: "#065f46", margin: "0 0 0.4rem 0" }}>{item.title}</h5>
                <p style={{ margin: 0, fontSize: "0.88rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <TipBox title="💡 ¿Por qué GeneratePress y no Storefront (el theme oficial de WooCommerce)?">
            <p>
              <strong>Storefront</strong> es el theme oficial de Woo y funciona muy bien, pero tiene
              más CSS base y menos flexibilidad de layout. <strong>GeneratePress</strong> es más
              ligero, más flexible y se integra perfectamente con Elementor (algo que Storefront{" "}
              hace de forma menos fluida). Para proyectos profesionales donde el rendimiento y la
              personalización son clave, GeneratePress gana.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ──────────────────────────────────────────── SECCIÓN 4: ELEMENTOR EN ECOMMERCE */}
      <section className="doc doc-section" id="elementor-ecommerce">
        <h2>4. El rol de Elementor en un e-commerce</h2>

        <div className="doc-content">
          <p>
            Con GeneratePress y WooCommerce ya tienes una tienda funcional. ¿Para qué necesitas
            Elementor entonces? La respuesta es que Elementor <strong>NO</strong> gestiona la tienda
            — gestiona las <em>páginas de marketing</em> que la rodean.
          </p>

          <h3>División de responsabilidades en el stack</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              margin: "2rem 0",
            }}
          >
            {[
              {
                tool: "GeneratePress",
                color: "#e7f3ff",
                border: "#0066cc",
                text: "#003d7a",
                icon: "🏗️",
                owns: [
                  "Header y footer de toda la web",
                  "Tipografía y colores base",
                  "Layout de páginas de archivo WooCommerce",
                  "Menú de navegación con carrito",
                  "Rendimiento y estructura base",
                ],
              },
              {
                tool: "WooCommerce",
                color: "#f3e8ff",
                border: "#8b5cf6",
                text: "#5b21b6",
                icon: "🛒",
                owns: [
                  "Página tienda y catálogos",
                  "Fichas de producto",
                  "Carrito y checkout",
                  "Área «Mi cuenta»",
                  "Lógica de pedidos y pagos",
                ],
              },
              {
                tool: "Elementor",
                color: "#fff3cd",
                border: "#f59e0b",
                text: "#92400e",
                icon: "🎨",
                owns: [
                  "Home page de la tienda",
                  "Landing pages de campañas",
                  "Páginas de categorías personalizadas",
                  "About, Contact, FAQ",
                  "Banners y promotional pages",
                ],
              },
            ].map((tool) => (
              <div
                key={tool.tool}
                style={{
                  background: tool.color,
                  border: `2px solid ${tool.border}`,
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{tool.icon}</div>
                <h4 style={{ color: tool.text, margin: "0 0 0.8rem 0" }}>{tool.tool}</h4>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.88rem" }}>
                  {tool.owns.map((o) => (
                    <li key={o} style={{ marginBottom: "0.3rem" }}>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <WarningBox>
            <p>
              <strong>Regla de oro:</strong> Nunca uses Elementor en las páginas de carrito, checkout
              o «Mi cuenta». WooCommerce necesita controlar esas páginas 100 % para que los hooks,
              los gateways de pago y las validaciones funcionen correctamente.
            </p>
          </WarningBox>

          <h3>Elementor Pro y WooCommerce: WooCommerce Builder</h3>

          <p>
            Elementor Pro incluye el módulo <strong>WooCommerce Builder</strong> que añade widgets
            específicos para personalizar visualmente las plantillas de WooCommerce:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              { widget: "Product Images", desc: "Galería personalizable con zoom y lightbox" },
              { widget: "Product Price", desc: "Precio con estilos avanzados incluyendo precio tachado" },
              { widget: "Add To Cart", desc: "Botón custom totalmente estilizable" },
              { widget: "Product Reviews", desc: "Sección de reseñas con diseño propio" },
              { widget: "Products Grid", desc: "Grid de productos con filtros y ordenación" },
              { widget: "Breadcrumbs", desc: "Migajas de pan para navegación y SEO" },
            ].map((w) => (
              <div
                key={w.widget}
                style={{
                  background: "white",
                  border: "1px solid #dee2e6",
                  borderRadius: "8px",
                  padding: "1rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
                }}
              >
                <code
                  style={{
                    background: "#fff3cd",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {w.widget}
                </code>
                <p style={{ margin: 0, fontSize: "0.85rem" }}>{w.desc}</p>
              </div>
            ))}
          </div>

          <details className="dd">
            <summary>🆓 ¿Se puede usar WooCommerce con Elementor FREE?</summary>
            <div className="dd-body">
              <p>
                <strong>Sí, perfectamente.</strong> Con Elementor FREE puedes:
              </p>
              <ul>
                <li>Diseñar la home y páginas de marketing con arrastrar y soltar</li>
                <li>Usar el widget «Shortcode» para insertar shortcodes de WooCommerce en cualquier página</li>
                <li>Crear landing pages de producto con diseño custom incrustando el shortcode <code>[product id="X"]</code></li>
              </ul>
              <p>
                Lo que necesitas <strong>Elementor Pro</strong> para hacer es sobreescribir
                visualmente las plantillas nativas de WooCommerce (ficha de producto, listado de
                tienda, etc.) con sus widgets específicos de WooCommerce Builder.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* ──────────────────────────────────────────── SECCIÓN 5: WPZIP PROMPT */}
      <section className="doc doc-section" id="wpzip-primera-instalacion">
        <h2>5. Tu primera instalación: WPZip con prompt profesional</h2>

        <div className="doc-content">
          <TipBox title="¿Qué es WPZip?">
            <p>
              <strong>WPZip</strong> (también conocido como servicio de auto-instalación con
              blueprint) es una herramienta que te permite definir mediante un{" "}
              <strong>prompt o configuración</strong> exactamente qué plugins, themes, páginas demo y
              ajustes quieres en tu WordPress, y genera una instalación lista para trabajar en
              minutos. Elimina horas de setup manual.
            </p>
          </TipBox>

          <h3>Anatomía de un buen prompt para WPZip</h3>

          <p>
            Un prompt efectivo para crear un e-commerce debe describir:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              { num: "1", title: "Sector y tipo de negocio", example: "Tienda de ropa sostenible (moda ecológica)" },
              { num: "2", title: "Stack tecnológico deseado", example: "WooCommerce + GeneratePress Premium + Elementor Pro" },
              { num: "3", title: "Plugins esenciales", example: "Stripe, Yoast SEO, WPML, Mailchimp" },
              { num: "4", title: "Estructura de páginas", example: "Home, Tienda, Sobre nosotros, Blog, Contacto" },
              { num: "5", title: "Paleta de colores", example: "Verde bosque #2d5a27, crema #f5f0e8, negro #1a1a1a" },
              { num: "6", title: "Tipografía", example: "Playfair Display (títulos), Lato (cuerpo)" },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#faf9ff",
                  border: "1px solid #c4b5fd",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#7c3aed",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.num}
                </div>
                <h5 style={{ margin: "0 0 0.3rem 0", color: "#4c1d95" }}>{item.title}</h5>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#6b7280", fontStyle: "italic" }}>
                  Ej: {item.example}
                </p>
              </div>
            ))}
          </div>

          <h3>Prompt modelo para un e-commerce de moda ecológica</h3>

          <div
            style={{
              background: "#0f172a",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "1.8rem",
              margin: "1.5rem 0",
              fontFamily: "monospace",
              fontSize: "0.88rem",
              lineHeight: "1.8",
              overflowX: "auto",
            }}
          >
            <div style={{ color: "#94a3b8", marginBottom: "0.8rem", fontFamily: "sans-serif", fontSize: "0.8rem" }}>
              📋 PROMPT WPZip — E-Commerce Moda Ecológica
            </div>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#7dd3fc" }}>Tipo de proyecto:</span>{" "}
              <span style={{ color: "#fef08a" }}>
                Tienda online de ropa sostenible y accesorios ecológicos
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Stack:</span>{" "}
              <span style={{ color: "#86efac" }}>
                WordPress latest + WooCommerce + GeneratePress + Elementor
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Plugins obligatorios:</span>
              <br />
              <span style={{ color: "#fca5a5" }}>
                - WooCommerce (tienda)
                <br />
                - Elementor (page builder)
                <br />
                - GeneratePress (theme)
                <br />
                - Yoast SEO (posicionamiento)
                <br />
                - WooCommerce Stripe Gateway (pagos)
                <br />
                - Mailchimp for WooCommerce (email marketing)
                <br />
                - YITH WooCommerce Wishlist (lista de deseos)
                <br />
                - Smush (optimización imágenes)
                <br />
                - WP Rocket o LiteSpeed Cache (caché y rendimiento)
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Páginas a crear:</span>
              <br />
              <span style={{ color: "#c4b5fd" }}>
                Home (hero section + productos destacados + newsletter)
                <br />
                Tienda (catálogo con filtros)
                <br />
                Sobre Nosotros (historia + valores de sostenibilidad)
                <br />
                Blog (categorías: moda, sostenibilidad, tendencias)
                <br />
                Contacto (formulario + mapa + redes sociales)
                <br />
                Políticas (privacidad, envíos, devoluciones)
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Categorías de productos:</span>
              <br />
              <span style={{ color: "#fdba74" }}>
                Camisetas, Pantalones, Vestidos, Accesorios, Bolsas ecológicas
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Paleta de colores:</span>
              <br />
              <span style={{ color: "#6ee7b7" }}>
                Primario: #2d5a27 (verde bosque)
                <br />
                Secundario: #f5f0e8 (crema orgánica)
                <br />
                Acento: #8b7355 (madera natural)
                <br />
                Texto: #1a1a1a (negro suave)
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Tipografía:</span>
              <br />
              <span style={{ color: "#e0e7ff" }}>
                Títulos: Playfair Display (serif, elegante)
                <br />
                Cuerpo: Lato (sans-serif, legible)
                <br />
                Tamaño base: 16px | Interlineado: 1.7
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Ajustes WooCommerce:</span>
              <br />
              <span style={{ color: "#fef9c3" }}>
                Moneda: EUR (€)
                <br />
                País base: España
                <br />
                Dimensiones: cm / kg
                <br />
                Stock management: activado
                <br />
                Reviews: activado
                <br />
                Checkout: invitado permitido
              </span>
              {"\n"}
              <br />
              <span style={{ color: "#7dd3fc" }}>Productos de muestra:</span>
              <span style={{ color: "#a5f3fc" }}>
                {" "}Sí, 12 productos con variantes de talla y color
              </span>
            </p>
          </div>

          <h3>Cómo usar este prompt en WPZip</h3>

          <div style={{ margin: "1.5rem 0" }}>
            {[
              {
                step: "1",
                title: "Accede a WPZip",
                detail: "Ve a wpzip.io (o la plataforma de tu hosting que soporte blueprints de WordPress). Inicia sesión o crea cuenta gratuita.",
                color: "#e7f3ff",
              },
              {
                step: "2",
                title: "Nuevo proyecto",
                detail: "Haz clic en «Nuevo sitio» o «Create new». Elige la opción de instalación asistida por IA o por prompt.",
                color: "#f3e8ff",
              },
              {
                step: "3",
                title: "Pega el prompt",
                detail: "Copia el prompt modelo de arriba, adáptalo a tu caso de uso y pégalo en el campo de descripción del proyecto.",
                color: "#fff3cd",
              },
              {
                step: "4",
                title: "Revisa la configuración generada",
                detail: "WPZip mostrará la lista de plugins, pages y settings que creará. Revisa y ajusta antes de confirmar.",
                color: "#d1ecf1",
              },
              {
                step: "5",
                title: "Genera y descarga",
                detail: "WPZip genera el blueprint (.zip). Importa en Local, en tu hosting o en staging usando el importador de WordPress.",
                color: "#f8fff9",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "50px 1fr",
                  gap: "1rem",
                  background: s.color,
                  borderRadius: "10px",
                  padding: "1rem 1.2rem",
                  marginBottom: "0.8rem",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#1a1a2e",
                    color: "#7dd3fc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <strong>{s.title}</strong>
                  <p style={{ margin: "0.3rem 0 0 0", fontSize: "0.9rem" }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <WarningBox>
            <p>
              <strong>Nota importante:</strong> WPZip y servicios similares (wp-blueprints.com,
              Playground de WordPress.org) están en constante evolución. Si la interfaz ha cambiado,
              lo fundamental es el <em>prompt en sí mismo</em> — puedes usarlo igualmente para
              hacer la instalación manual o con cualquier servicio equivalente.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ──────────────────────────────────────────── SECCIÓN 6: ARQUITECTURA COMPLETA */}
      <section className="doc doc-section" id="arquitectura-stack">
        <h2>6. La arquitectura completa del stack: visión de conjunto</h2>

        <div className="doc-content">
          <p>
            Antes de ponerte a construir, visualiza cómo se relacionan todas las piezas.
          </p>

          <div
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
              borderRadius: "16px",
              padding: "2rem",
              margin: "2rem 0",
              color: "white",
            }}
          >
            <h4 style={{ color: "#7dd3fc", marginTop: 0, textAlign: "center", marginBottom: "1.5rem" }}>
              Stack E-Commerce: arquitectura en capas
            </h4>
            <div style={{ display: "grid", gap: "0.8rem" }}>
              {[
                {
                  layer: "🌐 HOSTING / SERVIDOR",
                  detail: "PHP 8.1+, MySQL 8, SSL, CDN (Cloudflare)",
                  color: "#374151",
                },
                {
                  layer: "🟦 WORDPRESS CORE",
                  detail: "Sistema de gestión de contenidos, base de datos, usuarios",
                  color: "#1e40af",
                },
                {
                  layer: "🎨 GENERATEPRESS",
                  detail: "Theme ultraligero: estructura HTML, header, footer, tipografía base",
                  color: "#065f46",
                },
                {
                  layer: "🛒 WOOCOMMERCE",
                  detail: "Productos, pedidos, pagos, envíos, carrito, checkout",
                  color: "#7c2d12",
                },
                {
                  layer: "🖌️ ELEMENTOR",
                  detail: "Page builder visual: home, landing pages, páginas de marketing",
                  color: "#7c3aed",
                },
                {
                  layer: "🔌 PLUGINS COMPLEMENTARIOS",
                  detail: "Stripe, Yoast SEO, Mailchimp, cache, seguridad, analytics",
                  color: "#92400e",
                },
              ].map((l) => (
                <div
                  key={l.layer}
                  style={{
                    background: l.color,
                    borderRadius: "8px",
                    padding: "0.8rem 1.2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <strong style={{ fontSize: "0.9rem" }}>{l.layer}</strong>
                  <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>{l.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <h3>Checklist de configuración inicial</h3>

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
                title: "⚙️ WordPress",
                color: "#e7f3ff",
                items: [
                  "Permalink structure: /%postname%/",
                  "Idioma en español",
                  "Zona horaria: Madrid",
                  "Desactivar comentarios si no los necesitas",
                  "Borrar plugins y themes por defecto",
                ],
              },
              {
                title: "🏗️ GeneratePress",
                color: "#f0fdf4",
                items: [
                  "Instalar + activar el plugin Premium",
                  "Importar Site Library base (si existe)",
                  "Definir paleta de colores",
                  "Definir tipografía (Google Fonts)",
                  "Activar módulo WooCommerce",
                ],
              },
              {
                title: "🛒 WooCommerce",
                color: "#f3e8ff",
                items: [
                  "Asistente de configuración completo",
                  "Página de tienda, carrito, checkout",
                  "País y moneda (€)",
                  "Crear categorías de productos",
                  "Ajustes de email transaccional",
                ],
              },
              {
                title: "🎨 Elementor",
                color: "#fff7ed",
                items: [
                  "Definir colores del sistema",
                  "Definir tipografías del sistema",
                  "Crear plantilla de header (si Pro)",
                  "Template home page",
                  "Modo responsive verificado",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                style={{
                  background: group.color,
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <h5 style={{ margin: "0 0 0.8rem 0" }}>{group.title}</h5>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.87rem" }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ marginBottom: "0.4rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────── ACTIVIDADES */}
      <section className="doc doc-section" id="actividades">
        <h2>7. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Análisis de e-commerces reales">
            <p>
              <strong>Objetivo:</strong> Desarrollar ojo crítico antes de empezar a construir.
            </p>
            <h4>Instrucciones:</h4>
            <ol>
              <li>
                Visita 3 tiendas online de distintos sectores (ej: ropa, electrónica, alimentación
                gourmet).
              </li>
              <li>
                Para cada una, identifica:
                <ul>
                  <li>¿Qué plataforma usan? (Usa el plugin WhatRuns o BuiltWith)</li>
                  <li>¿Cuánто tardan en cargar? (Mídelo con PageSpeed Insights)</li>
                  <li>¿Cuántos pasos tiene su checkout?</li>
                  <li>¿Qué métodos de pago ofrecen?</li>
                  <li>¿Cómo presentan los productos en móvil?</li>
                </ul>
              </li>
              <li>
                Completa una tabla comparativa y redacta un párrafo con: qué harías igual y qué
                mejorarías en tu propia tienda.
              </li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Primer sitio con WPZip">
            <p>
              <strong>Objetivo:</strong> Crear tu primera instalación WooCommerce + GeneratePress +
              Elementor usando el prompt modelo.
            </p>
            <h4>Instrucciones:</h4>
            <ol>
              <li>Elige un sector de negocio diferente al ejemplo del manual (no moda).</li>
              <li>
                Adapta el prompt modelo de la sección 5 a tu sector:
                <ul>
                  <li>Cambia las categorías de producto</li>
                  <li>Adapta la paleta de colores al sector elegido</li>
                  <li>Define las páginas que necesitará tu tienda</li>
                </ul>
              </li>
              <li>Genera la instalación con WPZip (o manualmente si no accedes al servicio).</li>
              <li>
                Verifica que tienes instalados correctamente:
                <ul>
                  <li>WooCommerce activo y configurado</li>
                  <li>GeneratePress activo como theme</li>
                  <li>Elementor instalado</li>
                  <li>Al menos 4 productos de muestra con imágenes</li>
                </ul>
              </li>
              <li>Toma capturas de: tienda, ficha de producto y panel de WooCommerce.</li>
            </ol>

            <details className="dd" style={{ marginTop: "1rem" }}>
              <summary>💡 Ayuda: cómo instalar manualmente si no funciona WPZip</summary>
              <div className="dd-body">
                <ol>
                  <li>Instala WordPress fresh en Local (localhost)</li>
                  <li>Plugins &gt; Añadir nuevo &gt; busca e instala: WooCommerce, Elementor</li>
                  <li>Apariencia &gt; Temas &gt; Añadir nuevo &gt; busca GeneratePress e instala</li>
                  <li>Activa GeneratePress como theme activo</li>
                  <li>Ejecuta el asistente de WooCommerce (aparece automáticamente)</li>
                  <li>Configura moneda, país y categorías de producto</li>
                  <li>Crea 3-4 productos de prueba manualmente</li>
                </ol>
              </div>
            </details>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad de reflexión — Decisión de stack">
            <p>
              Un cliente llega con los siguientes requisitos para su tienda online. Debes justificar
              si el stack WooCommerce + GeneratePress + Elementor es la elección correcta o si
              recomendarías otra solución (Shopify, PrestaShop, WooCommerce con otro theme…).
            </p>
            <div
              style={{
                background: "#f8f9fa",
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                padding: "1.2rem",
                margin: "1rem 0",
              }}
            >
              <h5>Briefing del cliente: «Tienda de vinos artesanales»</h5>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>100-200 referencias de producto</li>
                <li>Venta solo en España (no internacional inicialmente)</li>
                <li>Presupuesto anual para la web: 800 €</li>
                <li>El cliente quiere gestionar el contenido él mismo (no técnico)</li>
                <li>Necesitan blog de maridaje para SEO</li>
                <li>Quieren poder enviar newsletters con ofertas</li>
                <li>No tienen desarrollador interno</li>
              </ul>
            </div>
            <h4>Tu análisis debe incluir:</h4>
            <ol>
              <li>¿Es adecuado el stack WooCommerce + GeneratePress + Elementor? ¿Por qué?</li>
              <li>¿Qué plugins adicionales recomendarías para este caso concreto?</li>
              <li>Desglose económico (hosting + plugins necesarios vs presupuesto)</li>
              <li>Plan de formación básica para que el cliente sea autónomo</li>
            </ol>
          </ActivityBox>
        </div>
      </section>

      {/* ──────────────────────────────────────────── RECURSOS */}
      <section className="doc doc-section" id="recursos">
        <h2>8. Recursos y próximos pasos</h2>

        <div className="doc-content">
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
                title: "📚 Documentación oficial",
                color: "#e7f3ff",
                items: [
                  "docs.woocommerce.com — guía completa WooCommerce",
                  "generatepress.com/docs — docs de GeneratePress",
                  "elementor.com/academy — Elementor Academy",
                  "developer.wordpress.org — WordPress Developer",
                ],
              },
              {
                title: "🎬 Recursos de aprendizaje",
                color: "#f3e8ff",
                items: [
                  "YouTube: Brindle Digital (GeneratePress)",
                  "YouTube: WooCommerce channel oficial",
                  "YouTube: Elementor channel oficial",
                  "Curso WooCommerce oficial (gratuito)",
                ],
              },
              {
                title: "🛠️ Herramientas útiles",
                color: "#f0fdf4",
                items: [
                  "Local by Flywheel — entorno desarrollo local",
                  "WPZip / wp.new — instalación rápida",
                  "PageSpeed Insights — medir rendimiento",
                  "BuiltWith — analizar stack de competidores",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                style={{
                  background: group.color,
                  border: "1px solid #dee2e6",
                  borderRadius: "10px",
                  padding: "1.2rem",
                }}
              >
                <h5 style={{ margin: "0 0 0.8rem 0" }}>{group.title}</h5>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.87rem" }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ marginBottom: "0.4rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <TipBox title="🗺️ Lo que veremos en los próximos temas">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {[
                { num: "Tema 26", titulo: "Diseño de la Home de la tienda con Elementor" },
                { num: "Tema 27", titulo: "Configuración avanzada de WooCommerce: productos y variantes" },
                { num: "Tema 28", titulo: "Pasarelas de pago: Stripe y PayPal" },
                { num: "Tema 29", titulo: "SEO para e-commerce con Yoast + Rank Math" },
              ].map((tema) => (
                <div
                  key={tema.num}
                  style={{
                    background: "white",
                    border: "2px solid #c4b5fd",
                    borderRadius: "8px",
                    padding: "0.8rem 1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#7c3aed",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tema.num}
                  </div>
                  <p style={{ margin: "0.3rem 0 0 0", fontSize: "0.85rem" }}>{tema.titulo}</p>
                </div>
              ))}
            </div>
          </TipBox>
        </div>
      </section>

      {/* ──────────────────────────────────────────── CONCLUSIÓN */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2d1b69 100%)",
            color: "white",
            padding: "2.5rem",
            borderRadius: "16px",
            margin: "1.5rem 0",
          }}
        >
          <h2 style={{ margin: "0 0 1.5rem 0", color: "white", textAlign: "center" }}>
            🎓 Conclusiones del tema
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: "🏗️",
                titulo: "El stack importa",
                desc: "WooCommerce + GeneratePress + Elementor es una combinación probada que equilibra rendimiento, flexibilidad y coste.",
              },
              {
                icon: "🤝",
                titulo: "Cada herramienta tiene su lugar",
                desc: "GeneratePress pone la base, WooCommerce gestiona la tienda, Elementor diseña las páginas de marketing. No se pisan.",
              },
              {
                icon: "📐",
                titulo: "Planificación antes de ejecución",
                desc: "Define catálogo, pagos y envíos antes de abrir Elementor. El diseño sirve al negocio, no al revés.",
              },
              {
                icon: "🚀",
                titulo: "WPZip acelera el arranque",
                desc: "Un buen prompt te ahorra horas de configuración manual y garantiza una base consistente para empezar.",
              },
            ].map((c) => (
              <div
                key={c.titulo}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.2rem",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#7dd3fc" }}>{c.titulo}</h4>
                <p style={{ margin: 0, fontSize: "0.87rem", opacity: 0.9 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <TipBox title="Consejo profesional">
          <p>
            El stack WooCommerce + GeneratePress + Elementor lo usan agencias digitales para proyectos
            de entre 2.000 € y 15.000 €. Dominarlo te posiciona para competir en el mercado
            profesional del desarrollo web para e-commerce. No aprendas solo a «instalarlo» — aprende
            a <strong>justificar cada elección técnica</strong> ante tu cliente.
          </p>
        </TipBox>
      </section>
    </TopicLayout>
  );
}
