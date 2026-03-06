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

function FlowChip({ label, type = "info" }) {
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

export default function Tema28_CheckoutWooCommerce() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · Proyecto E-Commerce · Fase 3</p>
        <h1>Carrito, Checkout y Proceso de Compra en WooCommerce</h1>
        <p className="lead">
          En los temas anteriores montamos la base técnica, diseñamos la home y cargamos el catálogo
          de productos. Ahora entramos en la parte más delicada de una tienda online: el{" "}
          <strong>flujo de compra real</strong>. Aquí se gana o se pierde la conversión. Un checkout
          lento, confuso o mal configurado hace que el usuario abandone incluso aunque el producto le
          guste.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>
              Entender el <strong>flujo completo de compra</strong> desde producto hasta pedido
              confirmado
            </li>
            <li>
              Configurar correctamente las páginas de <strong>carrito y finalizar compra</strong>
            </li>
            <li>
              Activar y comprender los <strong>métodos de pago</strong> más habituales
            </li>
            <li>
              Crear <strong>zonas y métodos de envío</strong> con lógica profesional
            </li>
            <li>
              Detectar las principales causas de <strong>abandono de carrito</strong>
            </li>
            <li>
              Realizar una <strong>compra de prueba completa</strong> y verificar el pedido
            </li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 4 horas · <strong>Nivel:</strong> Intermedio ·{" "}
            <strong>Requisito:</strong> productos publicados, páginas básicas de WooCommerce creadas y
            tienda navegable desde la home.
          </p>
        </TipBox>
      </header>

      {/* ══════════════ S1: FLUJO COMPLETO ══════════════ */}
      <section className="doc doc-section" id="flujo-compra">
        <h2>1. El flujo completo de compra: de la intención al pedido</h2>

        <div className="doc-content">
          <p>
            Antes de tocar ajustes, el alumno debe entender qué recorrido hace un usuario real dentro
            de una tienda. Esto es esencial porque WooCommerce no son solo productos: es un sistema de
            navegación, decisión y pago.
          </p>

          <div
            style={{
              border: "2px dashed #93c5fd",
              borderRadius: "16px",
              padding: "1.5rem",
              margin: "1.5rem 0",
              background: "#eff6ff",
            }}
          >
            <p style={{ margin: "0 0 1rem 0", fontWeight: 700, color: "#1d4ed8" }}>
              Mapa del proceso de compra
            </p>

            <div style={{ display: "grid", gap: "0.55rem" }}>
              {[
                {
                  n: "01",
                  name: "HOME / CATEGORÍA",
                  sub: "El usuario entra por la home, una categoría o Google",
                  bg: "#1e3a8a",
                  c: "#fff",
                },
                {
                  n: "02",
                  name: "FICHA DE PRODUCTO",
                  sub: "Evalúa precio, imágenes, variaciones y confianza",
                  bg: "#2563eb",
                  c: "#fff",
                },
                {
                  n: "03",
                  name: "AÑADIR AL CARRITO",
                  sub: "Toma la primera decisión de compra",
                  bg: "#3b82f6",
                  c: "#fff",
                },
                {
                  n: "04",
                  name: "CARRITO",
                  sub: "Revisa productos, cantidades, cupones y costes",
                  bg: "#60a5fa",
                  c: "#0f172a",
                },
                {
                  n: "05",
                  name: "CHECKOUT",
                  sub: "Introduce datos, elige envío y método de pago",
                  bg: "#93c5fd",
                  c: "#0f172a",
                },
                {
                  n: "06",
                  name: "PAGO",
                  sub: "Se valida la transacción o se genera el pedido",
                  bg: "#bfdbfe",
                  c: "#0f172a",
                },
                {
                  n: "07",
                  name: "CONFIRMACIÓN",
                  sub: "Pedido recibido + emails automáticos + gestión interna",
                  bg: "#dbeafe",
                  c: "#0f172a",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{
                    background: step.bg,
                    color: step.c,
                    borderRadius: "8px",
                    padding: "0.8rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.72rem", opacity: 0.8, fontWeight: 700 }}>
                      PASO {step.n}
                    </span>
                    <div style={{ fontWeight: 800, fontSize: "0.96rem" }}>{step.name}</div>
                  </div>
                  <div style={{ fontSize: "0.82rem", opacity: 0.9, textAlign: "right" }}>
                    {step.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Idea central del tema:</strong> no basta con que el checkout exista. Debe
              resultar claro, rápido y fiable. Cada fricción adicional reduce conversiones.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S2: CARRITO ══════════════ */}
      <section className="doc doc-section" id="pagina-carrito">
        <h2>2. La página de carrito: primera gran prueba de confianza</h2>

        <div className="doc-content">
          <p>
            El carrito es una zona intermedia entre la intención y el pago. No es un simple resumen:
            aquí el cliente verifica si quiere seguir adelante o abandonar.
          </p>

          <div className="two-columns">
            <div>
              <h4 style={{ color: "#16a34a" }}>✅ Qué debe ver el usuario</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Producto añadido correctamente</li>
                <li>Imagen y nombre reconocibles</li>
                <li>Cantidad modificable</li>
                <li>Subtotal claro</li>
                <li>Gastos de envío comprensibles</li>
                <li>Total final visible</li>
                <li>Botón claro para finalizar compra</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>❌ Qué genera abandono</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Costes inesperados al final</li>
                <li>Textos poco claros</li>
                <li>Diseño visual pobre o inseguro</li>
                <li>Botón de checkout poco visible</li>
                <li>Carrito difícil de editar</li>
                <li>Errores de cálculo o actualización</li>
              </ul>
            </div>
          </div>

          <h3>Elementos principales del carrito en WooCommerce</h3>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Función</th>
                  <th>Importancia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Listado de productos</strong>
                  </td>
                  <td>Muestra qué está comprando exactamente el usuario</td>
                  <td>
                    <FlowChip label="Crítico" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cantidad</strong>
                  </td>
                  <td>Permite ajustar unidades sin volver atrás</td>
                  <td>
                    <FlowChip label="Alta" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cupón</strong>
                  </td>
                  <td>Aplica descuentos promocionales</td>
                  <td>
                    <FlowChip label="Conversión" type="info" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Resumen del carrito</strong>
                  </td>
                  <td>Subtotal, envío, impuestos y total</td>
                  <td>
                    <FlowChip label="Crítico" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Botón de checkout</strong>
                  </td>
                  <td>Lleva al siguiente paso del proceso</td>
                  <td>
                    <FlowChip label="Muy visible" type="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="📌 Ruta importante">
            <p>
              WooCommerce crea automáticamente la página de carrito. Debes verificar que existe y que
              está correctamente asignada en <em>WooCommerce → Ajustes → Avanzado</em>.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S3: CHECKOUT ══════════════ */}
      <section className="doc doc-section" id="pagina-checkout">
        <h2>3. La página de checkout: donde realmente se gana o se pierde la venta</h2>

        <div className="doc-content">
          <p>
            El checkout es el momento más delicado del e-commerce. El usuario ya ha decidido comprar,
            pero aún puede arrepentirse si el proceso le exige demasiado esfuerzo o no le transmite
            seguridad.
          </p>

          <h3>Qué pide WooCommerce por defecto</h3>

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
            Datos de facturación
            <br />
            ├── Nombre
            <br />
            ├── Apellidos
            <br />
            ├── Empresa
            <br />
            ├── País / Región
            <br />
            ├── Dirección
            <br />
            ├── Ciudad
            <br />
            ├── Provincia
            <br />
            ├── Código postal
            <br />
            ├── Teléfono
            <br />
            └── Email
          </div>

          <p>
            Además, si el producto es físico, aparecerán datos relacionados con envío. Si el checkout
            es para un producto descargable o una configuración simplificada, algunos campos pueden
            resultar innecesarios.
          </p>

          <WarningBox>
            <p>
              <strong>Error muy frecuente:</strong> dejar el checkout tal como viene sin analizar si
              todos los campos son necesarios para ese proyecto. Cuantos más campos, más fricción.
            </p>
          </WarningBox>

          <h3>Principios de un buen checkout</h3>

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
                icon: "⚡",
                title: "Rápido",
                desc: "Menos pasos, menos abandono. El usuario no debe sentirse atrapado en un formulario interminable.",
                color: "#dbeafe",
                border: "#3b82f6",
              },
              {
                icon: "🔒",
                title: "Seguro",
                desc: "Debe transmitir confianza visual y técnica: HTTPS, métodos conocidos y textos claros.",
                color: "#dcfce7",
                border: "#22c55e",
              },
              {
                icon: "🧾",
                title: "Transparente",
                desc: "El total final, impuestos y envío deben verse sin sorpresas de última hora.",
                color: "#fef3c7",
                border: "#f59e0b",
              },
              {
                icon: "📱",
                title: "Cómodo en móvil",
                desc: "La mayoría de compras empiezan o terminan en smartphone. El checkout debe ser táctil y legible.",
                color: "#ede9fe",
                border: "#8b5cf6",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: c.color,
                  border: `1.5px solid ${c.border}`,
                  borderRadius: "12px",
                  padding: "1.1rem",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.35rem" }}>{c.icon}</div>
                <h5 style={{ margin: "0 0 0.45rem 0", color: "#0f172a" }}>{c.title}</h5>
                <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ S4: PAGOS ══════════════ */}
      <section className="doc doc-section" id="metodos-pago">
        <h2>4. Métodos de pago: qué opciones activar y qué implica cada una</h2>

        <div className="doc-content">
          <p>
            Los métodos de pago no son solo una cuestión técnica. También influyen en la{" "}
            <strong>confianza percibida</strong> y en la facilidad con la que un usuario termina la
            compra.
          </p>

          <h3>Ruta de configuración</h3>
          <p>
            Ve a <code>WooCommerce → Ajustes → Pagos</code>. Desde ahí puedes activar, desactivar y
            ordenar los métodos disponibles.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Ventajas</th>
                  <th>Inconvenientes</th>
                  <th>Cuándo usarlo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Transferencia bancaria</strong>
                  </td>
                  <td>Sin comisión de pasarela, configuración simple</td>
                  <td>Proceso lento, validación manual</td>
                  <td>Pedidos B2B o pruebas</td>
                </tr>
                <tr>
                  <td>
                    <strong>Contra reembolso</strong>
                  </td>
                  <td>Da confianza a ciertos usuarios</td>
                  <td>Mayor riesgo logístico y devoluciones</td>
                  <td>Tiendas muy concretas y mercados locales</td>
                </tr>
                <tr>
                  <td>
                    <strong>PayPal</strong>
                  </td>
                  <td>Muy conocido, rápido de reconocer</td>
                  <td>Comisiones más altas y redirecciones</td>
                  <td>Cuando buscas confianza inmediata</td>
                </tr>
                <tr>
                  <td>
                    <strong>Stripe</strong>
                  </td>
                  <td>Tarjeta en la propia web, UX muy buena</td>
                  <td>Requiere configuración de cuenta</td>
                  <td>La opción más profesional en muchos proyectos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="💡 Recomendación docente">
            <p>
              Para un proyecto educativo, la combinación más didáctica suele ser:
            </p>
            <ul>
              <li>
                <strong>Transferencia bancaria</strong> para entender el flujo básico
              </li>
              <li>
                <strong>PayPal o Stripe</strong> para ver una pasarela real más cercana a tienda
                profesional
              </li>
            </ul>
          </TipBox>

          <WarningBox>
            <p>
              <strong>No confundas “activar el método” con “dejarlo listo”.</strong> En PayPal o
              Stripe hay que completar la configuración externa, credenciales, modo test si procede y
              una prueba real de compra.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S5: ENVÍOS ══════════════ */}
      <section className="doc doc-section" id="metodos-envio">
        <h2>5. Envíos: zonas, métodos y lógica comercial</h2>

        <div className="doc-content">
          <p>
            El envío es uno de los puntos donde más usuarios abandonan la compra. Si el precio del
            producto parece correcto pero el coste del envío aparece tarde o resulta excesivo, la
            conversión cae.
          </p>

          <h3>WooCommerce organiza el envío por zonas</h3>
          <p>
            Una <strong>zona de envío</strong> es un área geográfica a la que aplicas ciertos métodos.
            La lógica correcta no es “poner un envío genérico”, sino diseñar reglas por territorio.
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
            <h4 style={{ marginTop: 0 }}>Ejemplo simple y profesional</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>
                <strong>Zona:</strong> España peninsular
              </li>
              <li>
                <strong>Método 1:</strong> Tarifa plana 4,95 €
              </li>
              <li>
                <strong>Método 2:</strong> Envío gratis a partir de 50 €
              </li>
              <li>
                <strong>Método 3:</strong> Recogida local
              </li>
            </ul>
          </div>

          <h3>Ruta de configuración</h3>
          <p>
            Ve a <code>WooCommerce → Ajustes → Envío</code>. Después:
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            <StepCard
              n="1"
              title="Crear zona de envío"
              detail="Ejemplo: España, Europa o recogida local."
              color="#2563eb"
            />
            <StepCard
              n="2"
              title="Añadir métodos"
              detail="Tarifa plana, envío gratuito o recogida local."
              color="#16a34a"
            />
            <StepCard
              n="3"
              title="Configurar importes y condiciones"
              detail="Ejemplo: envío gratis a partir de un importe mínimo."
              color="#7c3aed"
            />
            <StepCard
              n="4"
              title="Comprobar desde el carrito y checkout"
              detail="La configuración debe verse correctamente en frontend, no solo en el panel."
              color="#f59e0b"
            />
          </div>

          <WarningBox>
            <p>
              <strong>Error clásico:</strong> crear productos y pagos, pero olvidarse de probar el
              envío en una compra real. El alumno cree que “está configurado” porque lo ve en ajustes,
              pero en frontend no aparece como esperaba.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S6: ESTADOS Y EMAILS ══════════════ */}
      <section className="doc doc-section" id="estados-emails">
        <h2>6. Estados del pedido y emails automáticos</h2>

        <div className="doc-content">
          <p>
            Cuando una compra se realiza, WooCommerce genera un pedido y le asigna un estado. A la
            vez, dispara emails automáticos que informan tanto al cliente como al administrador.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Qué significa</th>
                  <th>Cuándo aparece</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Pendiente</strong>
                  </td>
                  <td>El pedido existe, pero el pago no se ha confirmado</td>
                  <td>Transferencia o pago no completado</td>
                </tr>
                <tr>
                  <td>
                    <strong>Procesando</strong>
                  </td>
                  <td>Pago recibido, pedido en gestión</td>
                  <td>Compra normal de producto físico</td>
                </tr>
                <tr>
                  <td>
                    <strong>Completado</strong>
                  </td>
                  <td>Pedido finalizado</td>
                  <td>Una vez entregado o terminado</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cancelado</strong>
                  </td>
                  <td>El pedido se ha anulado</td>
                  <td>Impago, cancelación o gestión manual</td>
                </tr>
                <tr>
                  <td>
                    <strong>Reembolsado</strong>
                  </td>
                  <td>Se ha devuelto el importe</td>
                  <td>Tras devolución o incidencia</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Emails automáticos</h3>
          <p>
            Ve a <code>WooCommerce → Ajustes → Correos electrónicos</code> para revisar qué mensajes
            envía el sistema. Como mínimo conviene que el alumno sepa distinguir:
          </p>

          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>Email de nuevo pedido al administrador</li>
            <li>Email de pedido en proceso al cliente</li>
            <li>Email de pedido completado</li>
            <li>Email de pedido cancelado o fallido</li>
          </ul>

          <TipBox title="📩 Idea didáctica">
            <p>
              Haz siempre una compra de prueba y pide al alumno que revise no solo el pedido en el
              panel, sino también los correos que se disparan. Así entiende el flujo completo.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S7: ABANDONO ══════════════ */}
      <section className="doc doc-section" id="abandono-carrito">
        <h2>7. Abandono de carrito: por qué ocurre y cómo reducirlo</h2>

        <div className="doc-content">
          <p>
            Este es uno de los conceptos más importantes del e-commerce. El usuario añade un producto
            al carrito, pero no termina comprando. No siempre significa desinterés: muchas veces
            significa <strong>fricción</strong>.
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
              {
                title: "Costes sorpresa",
                desc: "El envío o impuestos aparecen tarde y rompen la expectativa inicial.",
                color: "#fee2e2",
                border: "#ef4444",
              },
              {
                title: "Checkout largo",
                desc: "Demasiados campos o proceso lento. El usuario se cansa o se distrae.",
                color: "#fef3c7",
                border: "#f59e0b",
              },
              {
                title: "Falta de confianza",
                desc: "Pocos métodos de pago, diseño pobre o ausencia de señales de seguridad.",
                color: "#dbeafe",
                border: "#3b82f6",
              },
              {
                title: "Móvil mal resuelto",
                desc: "Botones pequeños, formulario incómodo o errores de visualización.",
                color: "#ede9fe",
                border: "#8b5cf6",
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

          <h3>Medidas básicas para reducir abandono</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.85 }}>
            <li>Mostrar políticas de envío antes de llegar al checkout</li>
            <li>Usar métodos de pago conocidos</li>
            <li>Permitir compra como invitado cuando tenga sentido</li>
            <li>Reducir campos innecesarios</li>
            <li>Comprobar el flujo completo en móvil</li>
            <li>Añadir señales de confianza: devoluciones, pago seguro, atención clara</li>
          </ul>

          <WarningBox>
            <p>
              <strong>Enseñanza clave para el alumno:</strong> el abandono no siempre se arregla con
              más diseño. Muchas veces se arregla con menos fricción y más claridad.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S8: PLUGINS ÚTILES ══════════════ */}
      <section className="doc doc-section" id="plugins-checkout">
        <h2>8. Plugins útiles para mejorar carrito y checkout</h2>

        <div className="doc-content">
          <p>
            WooCommerce base resuelve mucho, pero en proyectos reales suelen añadirse plugins para
            afinar el checkout o adaptar campos a necesidades concretas.
          </p>

          {[
            {
              n: "01",
              title: "WooCommerce Stripe Gateway",
              color: "#2563eb",
              content: (
                <>
                  <p>
                    Activa pagos con tarjeta dentro de la propia web. Suele ser una de las opciones
                    más profesionales por experiencia de usuario.
                  </p>
                  <FlowChip label="Muy recomendable" type="ok" />
                </>
              ),
            },
            {
              n: "02",
              title: "Checkout Field Editor",
              color: "#16a34a",
              content: (
                <>
                  <p>
                    Permite añadir, quitar o reordenar campos del checkout sin tocar código. Muy útil
                    para adaptar el formulario a un caso real.
                  </p>
                  <FlowChip label="UX" type="info" />
                </>
              ),
            },
            {
              n: "03",
              title: "WooCommerce PayPal Payments",
              color: "#7c3aed",
              content: (
                <>
                  <p>
                    Integra PayPal de forma moderna y mejora respecto a configuraciones antiguas o más
                    limitadas.
                  </p>
                  <FlowChip label="Confianza" type="pro" />
                </>
              ),
            },
            {
              n: "04",
              title: "CartFlows o herramientas similares",
              color: "#f59e0b",
              content: (
                <>
                  <p>
                    Orientadas a optimizar el embudo de compra. Más interesante en proyectos donde ya
                    hay estrategia de conversión clara.
                  </p>
                  <FlowChip label="Avanzado" type="warn" />
                </>
              ),
            },
          ].map((bloque) => (
            <details key={bloque.n} className="dd" style={{ marginTop: "1rem" }}>
              <summary>
                <BlockLabel n={bloque.n} title={bloque.title} color={bloque.color} />
              </summary>
              <div className="dd-body" style={{ padding: "1.1rem" }}>
                {bloque.content}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ══════════════ S9: WORKFLOW ══════════════ */}
      <section className="doc doc-section" id="workflow-prueba">
        <h2>9. Workflow profesional: prueba real de compra de principio a fin</h2>

        <div className="doc-content">
          <p>
            El error más grave en alumnos principiantes es asumir que la tienda funciona porque “todo
            está configurado”. En WooCommerce no hay garantía sin prueba completa.
          </p>

          <h3>Secuencia de comprobación obligatoria</h3>

          <div style={{ margin: "1.2rem 0" }}>
            <StepCard
              n="1"
              title="Entrar como usuario normal"
              detail="No pruebes siempre desde el panel de administración."
              color="#2563eb"
            />
            <StepCard
              n="2"
              title="Añadir un producto simple y uno variable"
              detail="Así compruebas que ambos flujos están funcionando."
              color="#16a34a"
            />
            <StepCard
              n="3"
              title="Ir al carrito y modificar cantidad"
              detail="Debes verificar que recalcula correctamente."
              color="#7c3aed"
            />
            <StepCard
              n="4"
              title="Ir al checkout y rellenar datos"
              detail="Comprueba todos los campos y la visualización en desktop y móvil."
              color="#f59e0b"
            />
            <StepCard
              n="5"
              title="Elegir envío y pago"
              detail="Confirma que las opciones aparecen como esperas."
              color="#dc2626"
            />
            <StepCard
              n="6"
              title="Finalizar pedido"
              detail="Verifica estado del pedido, correo y registro en WooCommerce."
              color="#0891b2"
            />
          </div>

          <TipBox title="✅ Regla de proyecto real">
            <p>
              Una tienda no está lista porque el panel esté bonito. Una tienda está lista cuando el
              usuario puede comprar sin bloqueos y el administrador puede gestionar el pedido.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>10. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Configurar métodos de pago">
            <ol>
              <li>
                Ve a <em>WooCommerce → Ajustes → Pagos</em>.
              </li>
              <li>Activa transferencia bancaria.</li>
              <li>Activa PayPal o Stripe si el proyecto lo permite.</li>
              <li>Ordena los métodos según prioridad comercial.</li>
              <li>Comprueba qué ve el usuario en el checkout.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Configurar zona de envío">
            <ol>
              <li>
                Ve a <em>WooCommerce → Ajustes → Envío</em>.
              </li>
              <li>Crea una zona llamada “España”.</li>
              <li>Añade una tarifa plana.</li>
              <li>Configura envío gratuito a partir de un importe mínimo.</li>
              <li>Comprueba desde el carrito si aparece correctamente.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 3 — Compra de prueba completa">
            <ol>
              <li>Añade un producto al carrito.</li>
              <li>Revisa cantidades y total.</li>
              <li>Accede al checkout.</li>
              <li>Rellena los datos del pedido.</li>
              <li>Finaliza la compra con un método activo.</li>
              <li>Verifica el pedido en WooCommerce → Pedidos.</li>
              <li>Comprueba también el correo recibido.</li>
            </ol>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad de análisis — Auditar un checkout real">
            <p>
              Elige una tienda online conocida y analiza su carrito y checkout aplicando lo aprendido
              en este tema:
            </p>
            <ol>
              <li>¿Muestra bien los costes antes del pago?</li>
              <li>¿El checkout tiene muchos o pocos campos?</li>
              <li>¿Qué métodos de pago ofrece?</li>
              <li>¿Da confianza visual?</li>
              <li>¿Qué mejorarías para reducir abandono?</li>
            </ol>
            <p>
              Entrega una pequeña auditoría comparando esa tienda con el flujo ideal que propondrías
              para tu proyecto.
            </p>
          </ActivityBox>
        </div>
      </section>

      {/* ══════════════ CONCLUSIÓN ══════════════ */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #e0f2fe 100%)",
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
                icon: "🛒",
                t: "El carrito no es un trámite",
                d: "Es una fase de revisión y confianza. Aquí ya se puede perder la venta.",
              },
              {
                icon: "🧾",
                t: "El checkout debe simplificar",
                d: "Pedir solo lo necesario mejora la experiencia y reduce fricción.",
              },
              {
                icon: "💳",
                t: "Los pagos influyen en la conversión",
                d: "Métodos conocidos y bien configurados aumentan seguridad y cierre.",
              },
              {
                icon: "🚚",
                t: "El envío debe ser transparente",
                d: "Los costes sorpresa son una causa clásica de abandono.",
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: "rgba(255,255,255,0.7)",
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

        <TipBox title="Próximo tema">
          <p>
            En el <strong>Tema 29</strong> podemos continuar con el{" "}
            <strong>diseño y optimización de la ficha de producto</strong>: estructura visual,
            pestañas, reseñas, productos relacionados, upselling y mejoras de conversión en la página
            individual.
          </p>
        </TipBox>
      </section>
    </TopicLayout>
  );
}