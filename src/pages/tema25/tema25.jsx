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
          Arranca desde cero un proyecto de comercio electrónico profesional en LocalWP. Entiende cómo
          funciona WooCommerce, por qué GeneratePress es el theme ideal para e-commerce, cómo encaja
          Elementor en la arquitectura y sigue el proceso paso a paso para tener tu primera tienda
          funcionando en menos de una hora.
        </p>

        <TipBox title="🎯 Objetivos de este tema">
          <ul>
            <li>Comprender los <strong>principios básicos de un e-commerce</strong> y su arquitectura técnica</li>
            <li>Entender <strong>cómo funciona WooCommerce</strong> y su integración con WordPress</li>
            <li>Conocer <strong>GeneratePress</strong> como base de rendimiento para tiendas</li>
            <li>Entender el rol de <strong>Elementor</strong> dentro de un stack de e-commerce</li>
            <li>Instalar y configurar el <strong>stack completo desde cero en LocalWP</strong>, paso a paso</li>
            <li>Crear tus <strong>primeros productos de WooCommerce</strong> y verificar que la tienda funciona</li>
          </ul>
          <p><strong>Tiempo estimado:</strong> 3 horas · <strong>Nivel:</strong> Intermedio-Avanzado</p>
          <p><strong>Requisitos:</strong> Tener LocalWP instalado y haber completado temas anteriores de WordPress, Elementor y GeneratePress básico</p>
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

      {/* ──────────────────────────────────────────── SECCIÓN 5: INSTALACIÓN DESDE CERO */}
      <section className="doc doc-section" id="instalacion-desde-cero">
        <h2>5. Tu primera instalación desde cero: paso a paso en LocalWP</h2>

        <div className="doc-content">
          <TipBox title="🗺️ Visión general del proceso">
            <p>
              Vamos a construir la base de la tienda en <strong>6 bloques</strong> que hay que
              completar en orden. Cada bloque depende del anterior, igual que en un proyecto real.
            </p>
            <ol>
              <li><strong>Crear el sitio en LocalWP</strong> — el entorno de trabajo</li>
              <li><strong>Ajustes iniciales de WordPress</strong> — idioma, permalinks, limpieza</li>
              <li><strong>Instalar y configurar GeneratePress</strong> — la base visual</li>
              <li><strong>Instalar WooCommerce</strong> — la tienda</li>
              <li><strong>Instalar Elementor</strong> — el diseñador de páginas</li>
              <li><strong>Primera prueba</strong> — productos, tienda, verificación</li>
            </ol>
          </TipBox>

          {/* ── BLOQUE 1: LOCALWP ──────────────────────────────── */}
          <h3
            style={{
              background: "#1a1a2e",
              color: "#7dd3fc",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2rem",
            }}
          >
            ① Crear el sitio en LocalWP
          </h3>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                step: "1",
                title: "Abre LocalWP y crea un nuevo sitio",
                detail: "Haz clic en el botón «+» de la esquina inferior izquierda. Elige «Create a new site».",
                color: "#e7f3ff",
              },
              {
                step: "2",
                title: "Ponle nombre al sitio",
                detail: "Escribe el nombre del proyecto, por ejemplo: «mi-tienda». LocalWP generará automáticamente una URL local como mi-tienda.local.",
                color: "#f0fdf4",
              },
              {
                step: "3",
                title: "Elige «Preferred» en el entorno",
                detail: "En la pantalla de configuración de servidor, selecciona «Preferred». Usará PHP 8.1+ y MySQL 8.0, que es lo que necesita WooCommerce moderno.",
                color: "#fff7ed",
              },
              {
                step: "4",
                title: "Configura el usuario admin",
                detail: "Escribe un nombre de usuario (ej: admin), contraseña y email. Anótalos — los necesitarás para entrar al panel.",
                color: "#fdf2f8",
              },
              {
                step: "5",
                title: "Haz clic en «Add Site»",
                detail: "LocalWP instalará WordPress automáticamente. En 30-60 segundos el sitio estará listo. Aparecerá en verde con el estado «Running».",
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
                  marginBottom: "0.7rem",
                  alignItems: "start",
                  border: "1px solid #dee2e6",
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
                    flexShrink: 0,
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
              <strong>Antes de instalar nada:</strong> haz clic en <strong>«Admin»</strong> en LocalWP
              para abrir el panel de WordPress (wp-admin). Confirma que accedes correctamente. Si te
              pide confirmar el certificado SSL, acepta — es normal en entornos locales.
            </p>
          </WarningBox>

          {/* ── BLOQUE 2: AJUSTES INICIALES ─────────────────────── */}
          <h3
            style={{
              background: "#1a1a2e",
              color: "#7dd3fc",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            ② Ajustes iniciales de WordPress
          </h3>

          <p style={{ marginTop: "1rem" }}>
            Antes de instalar ningún plugin, configura WordPress correctamente. Si omites estos
            pasos ahora, tendrás problemas de URLs, SEO y caracteres especiales más adelante.
          </p>

          <div className="table-wrap">
            <table style={{ width: "100%", borderCollapse: "collapse", margin: "1rem 0", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#1a1a2e", color: "white" }}>
                  <th style={{ padding: "10px 12px", border: "1px solid #dee2e6", textAlign: "left" }}>Dónde</th>
                  <th style={{ padding: "10px 12px", border: "1px solid #dee2e6", textAlign: "left" }}>Qué configurar</th>
                  <th style={{ padding: "10px 12px", border: "1px solid #dee2e6", textAlign: "left" }}>Valor correcto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ajustes → General", "Idioma del sitio", "Español"],
                  ["Ajustes → General", "Zona horaria", "Madrid"],
                  ["Ajustes → General", "Formato de fecha", "30 de enero de 2025"],
                  ["Ajustes → Permalinks", "Estructura de URLs", "Nombre de la entrada (/%postname%/)"],
                  ["Ajustes → Escritura", "Categoría por defecto", "Sin categoría → renómbrala o crea la tuya"],
                  ["Ajustes → Lectura", "Motores de búsqueda", "Permitir indexación (desmarca si es entorno de pruebas)"],
                  ["Plugins", "Plugins instalados por defecto", "Borrar: Hello Dolly, AkismetAD Spam"],
                  ["Apariencia → Temas", "Theme por defecto (Twenty XX)", "Lo eliminaremos en el bloque siguiente"],
                ].map(([donde, que, valor], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8f9fa" }}>
                    <td style={{ padding: "8px 12px", border: "1px solid #dee2e6" }}><code>{donde}</code></td>
                    <td style={{ padding: "8px 12px", border: "1px solid #dee2e6" }}>{que}</td>
                    <td style={{ padding: "8px 12px", border: "1px solid #dee2e6", color: "#065f46", fontWeight: "500" }}>{valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TipBox title="💡 Por qué los permalinks son lo primero">
            <p>
              Cuando WordPress genera las URLs de productos, categorías y páginas de WooCommerce,
              usa la estructura de permalinks que tenías <em>en el momento de instalarlo</em>. Si
              cambias los permalinks después de instalar WooCommerce, puedes tener errores 404 en
              la tienda. <strong>Configúralos antes de instalar cualquier plugin.</strong>
            </p>
          </TipBox>

          {/* ── BLOQUE 3: GENERATEPRESS ──────────────────────────── */}
          <h3
            style={{
              background: "#065f46",
              color: "#6ee7b7",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            ③ Instalar y configurar GeneratePress
          </h3>

          <p style={{ marginTop: "1rem" }}>
            GeneratePress será la base estructural de toda la tienda. Este es el orden correcto
            de instalación — no saltes pasos.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                step: "1",
                title: "Instalar el theme GeneratePress",
                detail: "Ve a Apariencia → Temas → Añadir nuevo. Busca «GeneratePress». Instala y activa. Verás el site con un layout limpio sin estilos llamativos — es lo esperado.",
                color: "#f0fdf4",
              },
              {
                step: "2",
                title: "Eliminar los themes por defecto",
                detail: "Con GeneratePress activo, borra los themes Twenty-Twenty-X que WordPress instala por defecto. Menos peso, menos confusión.",
                color: "#f0fdf4",
              },
              {
                step: "3",
                title: "Ir a Apariencia → Personalizar",
                detail: "Desde aquí controlarás la mayor parte del aspecto visual. Explora las secciones disponibles antes de tocar nada.",
                color: "#f0fdf4",
              },
              {
                step: "4",
                title: "Definir la paleta de colores",
                detail: "Personalizar → Colors. Establece: Color primario (el color principal de botones y enlaces), Color de fondo y Color del texto. Para una tienda genérica de prueba puedes usar: Primario #2563eb, Fondo #ffffff, Texto #1f2937.",
                color: "#f0fdf4",
              },
              {
                step: "5",
                title: "Definir tipografía",
                detail: "Personalizar → Typography. Elige una fuente para el cuerpo (ej: Inter o Lato) y otra para los títulos (ej: Playfair Display o Montserrat). Tamaño base: 16px. Interlineado: 1.65.",
                color: "#f0fdf4",
              },
              {
                step: "6",
                title: "Guardar y publicar",
                detail: "Clic en «Publicar» en la barra superior del Personalizar. Los cambios se aplican al instante en el frontend.",
                color: "#f0fdf4",
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
                  marginBottom: "0.7rem",
                  alignItems: "start",
                  border: "1px solid #86efac",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#065f46",
                    color: "#6ee7b7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
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

          <details className="dd">
            <summary>📐 ¿Qué opciones del Personalizar son más importantes para e-commerce?</summary>
            <div className="dd-body">
              <div className="table-wrap">
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                  <thead>
                    <tr style={{ background: "#f0fdf4" }}>
                      <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>Sección</th>
                      <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>Qué ajustar</th>
                      <th style={{ padding: "8px", border: "1px solid #dee2e6" }}>Motivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Layout → Container", "Ancho máximo: 1200px", "Ideal para tiendas con grids de productos"],
                      ["Layout → Site Header", "Sticky header: activado", "El menú con carrito siempre visible"],
                      ["Colors → Buttons", "Color de fondo del botón principal", "CTAs de «Añadir al carrito» usan este color"],
                      ["Typography → Buttons", "Texto en mayúsculas: desactivado", "Más moderno y legible"],
                      ["Layout → Blog", "No relevante para tienda", "Lo configuraremos solo si añadimos blog"],
                    ].map(([sec, que, motivo], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#f8f9fa" }}>
                        <td style={{ padding: "8px", border: "1px solid #dee2e6" }}><code>{sec}</code></td>
                        <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>{que}</td>
                        <td style={{ padding: "8px", border: "1px solid #dee2e6" }}>{motivo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* ── BLOQUE 4: WOOCOMMERCE ────────────────────────────── */}
          <h3
            style={{
              background: "#7c2d12",
              color: "#fed7aa",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            ④ Instalar WooCommerce y ejecutar el asistente
          </h3>

          <p style={{ marginTop: "1rem" }}>
            WooCommerce se instala como cualquier plugin de WordPress, pero tras la activación
            lanza un <strong>asistente de configuración</strong> que debes completar al 100 %. No lo
            saltes — configura las opciones fundamentales de tu tienda.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                step: "1",
                title: "Instalar el plugin WooCommerce",
                detail: "Plugins → Añadir nuevo → busca «WooCommerce» (autor: Automattic). Instala y activa. Aparecerá un banner azul invitando a ejecutar el asistente — clic en «Empezar».",
                color: "#fff7ed",
              },
              {
                step: "2",
                title: "Pantalla: ¿En qué país está tu tienda?",
                detail: "Selecciona España. Esto configura automáticamente: moneda EUR, zona horaria, formato de dirección y regulación fiscal española. Clic en «Continuar».",
                color: "#fff7ed",
              },
              {
                step: "3",
                title: "Pantalla: ¿Qué tipo de productos vendes?",
                detail: "Selecciona la categoría más cercana a tu proyecto (Moda y accesorios, Comida y bebida, Electrónica…). Esto no es exactamente determinante — puedes cambiar productos después.",
                color: "#fff7ed",
              },
              {
                step: "4",
                title: "Pantalla: ¿Sobre el negocio?",
                detail: "Rellena el número aproximado de productos que planeas tener y si ya vendes en algún sitio. Para un proyecto de clase responde «Solo en esta tienda» y «1-10 productos».",
                color: "#fff7ed",
              },
              {
                step: "5",
                title: "Pantalla: Features (características)",
                detail: "WooCommerce sugerirá instalar plugins adicionales (Jetpack, WooCommerce Payments…). Para esta instalación de aprendizaje, DESMARCA todos. Los instalaremos solo los que necesitemos.",
                color: "#fff7ed",
              },
              {
                step: "6",
                title: "Fin del asistente → Panel de WooCommerce",
                detail: "WooCommerce habrá creado automáticamente las páginas: Tienda, Carrito, Finalizar compra y Mi cuenta. Ve a Páginas y verifica que existen las 4.",
                color: "#fff7ed",
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
                  marginBottom: "0.7rem",
                  alignItems: "start",
                  border: "1px solid #fed7aa",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#7c2d12",
                    color: "#fed7aa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
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

          <TipBox title="⚙️ Ajustes de WooCommerce que debes revisar después del asistente">
            <p>El asistente no cubre todo. Ve a <strong>WooCommerce → Ajustes</strong> y completa:</p>
            <ul>
              <li><strong>General:</strong> Moneda en EUR, símbolo € a la derecha, 2 decimales, separador decimal como ","</li>
              <li><strong>Productos:</strong> Dimensiones en cm, peso en kg, activar valoraciones de clientes</li>
              <li><strong>Cuentas y privacidad:</strong> Permitir pedidos como invitado (sin registro — aumenta conversiones)</li>
              <li><strong>Correos:</strong> Verifica que el email del administrador es el correcto para recibir notificaciones de pedidos</li>
              <li><strong>Avanzado → Páginas:</strong> Confirma que las 4 páginas (Tienda, Carrito, Finalizar compra, Mi cuenta) están asignadas</li>
            </ul>
          </TipBox>

          <WarningBox>
            <p>
              <strong>¡Regenera los permalinks después de instalar WooCommerce!</strong> Ve a
              Ajustes → Permalinks y haz clic en «Guardar cambios» sin cambiar nada. Esto fuerza a
              WordPress a registrar las nuevas URLs de WooCommerce. Sin este paso pueden aparecer
              errores 404 en la tienda.
            </p>
          </WarningBox>

          {/* ── BLOQUE 5: ELEMENTOR ──────────────────────────────── */}
          <h3
            style={{
              background: "#7c3aed",
              color: "#e9d5ff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            ⑤ Instalar Elementor y configurar el sistema de diseño
          </h3>

          <p style={{ marginTop: "1rem" }}>
            Elementor es lo último en instalarse porque su sistema de diseño (colores y tipografía)
            debe <em>heredar</em> lo que ya definiste en GeneratePress. Instalarlo antes puede
            generar conflictos de estilos.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                step: "1",
                title: "Instalar el plugin Elementor",
                detail: "Plugins → Añadir nuevo → busca «Elementor Website Builder» (autor: Elementor.com). Instala y activa. Verás un banner de bienvenida — puedes cerrarlo.",
                color: "#faf5ff",
              },
              {
                step: "2",
                title: "Ejecutar el wizard de configuración (opcional)",
                detail: "Elementor puede mostrar un asistente de onboarding. Si aparece, complétalo seleccionando «Sitio de negocios» o «Tienda online». Puedes omitirlo con «Saltar».",
                color: "#faf5ff",
              },
              {
                step: "3",
                title: "Ir a Elementor → Ajustes → Estilo",
                detail: "Aquí controlas el sistema global de diseño de Elementor. Asegúrate de que «Cargar fuentes de Google» esté activado y «Modo mejorado de carga de CSS» activado.",
                color: "#faf5ff",
              },
              {
                step: "4",
                title: "Definir el Sistema de Diseño Global",
                detail: "En el editor de Elementor (cualquier página → Editar con Elementor), haz clic en el icono de hamburguesa → Site Settings (o Configuración del sitio). Aquí defines colores y tipografías globales.",
                color: "#faf5ff",
              },
              {
                step: "5",
                title: "Añadir los colores del sistema",
                detail: "En Site Settings → Global Colors, añade los mismos colores que definiste en GeneratePress: Primario, Secundario, Texto y Fondo. Así ambas herramientas hablan el mismo idioma visual.",
                color: "#faf5ff",
              },
              {
                step: "6",
                title: "Añadir las tipografías del sistema",
                detail: "En Site Settings → Global Fonts, define: Primary (cuerpo de texto) y Secondary (títulos y subtítulos). Vincula las mismas fuentes que usas en GeneratePress.",
                color: "#faf5ff",
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
                  marginBottom: "0.7rem",
                  alignItems: "start",
                  border: "1px solid #c4b5fd",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#7c3aed",
                    color: "#e9d5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
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

          {/* ── BLOQUE 6: PRIMERA PRUEBA ─────────────────────────── */}
          <h3
            style={{
              background: "#0c4a6e",
              color: "#bae6fd",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontSize: "1rem",
              marginTop: "2.5rem",
            }}
          >
            ⑥ Primera prueba: crea un producto y verifica la tienda
          </h3>

          <p style={{ marginTop: "1rem" }}>
            Antes de diseñar cualquier página, verifica que la mecánica de la tienda funciona
            correctamente. Crea un producto de prueba y sigue el flujo completo de compra.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                step: "1",
                title: "Crear una categoría de producto",
                detail: "Productos → Categorías. Crea al menos una categoría (ej: «Camisetas»). Las categorías clasifican el catálogo y generan páginas de archivo propias.",
                color: "#f0f9ff",
              },
              {
                step: "2",
                title: "Crear el primer producto",
                detail: "Productos → Añadir nuevo. Ponle nombre, descripción corta y larga. Asígnale la categoría. En el panel «Datos del producto» selecciona «Producto simple». Pon un precio regular (ej: 25,00).",
                color: "#f0f9ff",
              },
              {
                step: "3",
                title: "Añadir imágenes al producto",
                detail: "En la columna derecha: «Imagen del producto» (la imagen principal) y «Galería del producto» (fotos adicionales). Sube al menos 2 imágenes. WooCommerce las recortará automáticamente.",
                color: "#f0f9ff",
              },
              {
                step: "4",
                title: "Publicar el producto",
                detail: "Clic en «Publicar». Ve al frontend y navega a la URL de la tienda (ej: mi-tienda.local/tienda). Debe aparecer tu producto en el catálogo.",
                color: "#f0f9ff",
              },
              {
                step: "5",
                title: "Simular una compra completa",
                detail: "Clic en el producto → «Añadir al carrito» → ver carrito → finalizar compra. Rellena los datos con información ficticia. Usa el método de pago «Cheque» (viene activado por defecto para pruebas). Confirma el pedido.",
                color: "#f0f9ff",
              },
              {
                step: "6",
                title: "Verificar el pedido en el panel",
                detail: "Ve a WooCommerce → Pedidos. Debe aparecer el pedido con estado «Pago pendiente» (normal para pago por cheque). Esto confirma que toda la cadena funciona correctamente.",
                color: "#f0f9ff",
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
                  marginBottom: "0.7rem",
                  alignItems: "start",
                  border: "1px solid #bae6fd",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#0c4a6e",
                    color: "#bae6fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
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

          <TipBox title="✅ Checklist de verificación — ¿Está todo correcto?">
            <p>Antes de empezar a diseñar con Elementor, confirma que tienes:</p>
            <ul>
              <li>✔ WordPress en español con permalinks configurados</li>
              <li>✔ GeneratePress activo con colores y tipografía definidos</li>
              <li>✔ WooCommerce instalado y asistente completado</li>
              <li>✔ Las 4 páginas de WooCommerce existen y están asignadas en Ajustes → WooCommerce → Avanzado</li>
              <li>✔ Elementor instalado con colores y fuentes globales definidos</li>
              <li>✔ Al menos 1 producto publicado y visible en la tienda</li>
              <li>✔ Simulado un pedido de prueba que aparece en WooCommerce → Pedidos</li>
            </ul>
            <p>
              <strong>Si todo está marcado, la base de la tienda está lista.</strong> A partir de
              aquí empieza el trabajo de diseño y contenido.
            </p>
          </TipBox>
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

          <PracticeBox title="🧪 Práctica 2 — Instalación completa desde cero">
            <p>
              <strong>Objetivo:</strong> Instalar y configurar el stack completo — LocalWP +
              GeneratePress + WooCommerce + Elementor — siguiendo el orden y los criterios
              aprendidos en la sección 5.
            </p>
            <h4>Instrucciones:</h4>
            <ol>
              <li>
                Crea un nuevo sitio en LocalWP con el nombre de tu proyecto. Elige un sector
                de negocio diferente al de los ejemplos del manual (ej: deportes, libros,
                alimentación, joyería…).
              </li>
              <li>
                Completa los ajustes iniciales de WordPress antes de instalar ningún plugin:
                <ul>
                  <li>Idioma en español y zona horaria Madrid</li>
                  <li>Permalinks en «Nombre de la entrada»</li>
                  <li>Eliminar plugins por defecto (Hello Dolly, Akismet)</li>
                </ul>
              </li>
              <li>
                Instala y configura GeneratePress:
                <ul>
                  <li>Define una paleta de colores acorde al sector elegido</li>
                  <li>Elige tipografías apropiadas (cuerpo + títulos)</li>
                  <li>Configura el ancho máximo del contenedor en 1200px</li>
                </ul>
              </li>
              <li>
                Instala WooCommerce y completa el asistente. Comprueba después que las 4 páginas
                (Tienda, Carrito, Finalizar compra, Mi cuenta) existen y están asignadas. Regenera
                los permalinks.
              </li>
              <li>
                Instala Elementor y define los colores y tipografías globales en Site Settings,
                usando los mismos valores que en GeneratePress.
              </li>
              <li>
                Crea al menos <strong>3 categorías de productos</strong> y <strong>6 productos</strong>
                (2 por categoría) con nombre, descripción corta, precio e imagen.
              </li>
              <li>
                Simula una compra completa (añadir al carrito → checkout → confirmar). Verifica
                el pedido en WooCommerce → Pedidos.
              </li>
              <li>
                Toma capturas de pantalla de: frontend de la tienda, ficha de un producto,
                panel de WooCommerce → Pedidos (con el pedido de prueba) y Site Settings de Elementor.
              </li>
            </ol>
            <details className="dd" style={{ marginTop: "1rem" }}>
              <summary>✅ Criterios de evaluación</summary>
              <div className="dd-body">
                <ul>
                  <li>WordPress configurado correctamente (idioma, permalinks)</li>
                  <li>GeneratePress con colores y tipografía personalizados al sector</li>
                  <li>WooCommerce con asistente completado y páginas asignadas</li>
                  <li>Elementor con sistema de diseño global coherente con GP</li>
                  <li>Mínimo 6 productos en 3 categorías con imagen y precio</li>
                  <li>Pedido de prueba visible en el panel de WooCommerce</li>
                </ul>
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
                  "PageSpeed Insights — medir rendimiento de la tienda",
                  "BuiltWith — analizar stack de competidores",
                  "wp.new — WordPress en el navegador (Playground)",
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
                icon: "�",
                titulo: "El orden importa",
                desc: "Siempre: ajustes de WordPress → GeneratePress → WooCommerce → Elementor. Cambiar este orden genera conflictos de estilos, URLs rotas o configuraciones que hay que rehacer.",
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
