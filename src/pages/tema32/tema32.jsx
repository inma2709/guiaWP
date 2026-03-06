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

function ProductChip({ label, type = "info" }) {
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

export default function Tema29_FichaProductoWooCommerce() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · Proyecto E-Commerce · Fase 4</p>
        <h1>Diseño y Optimización de la Ficha de Producto en WooCommerce</h1>
        <p className="lead">
          Ya tenemos catálogo, carrito y checkout. Ahora trabajamos la página más decisiva de una
          tienda online: la <strong>ficha individual de producto</strong>. Aquí el usuario resuelve
          dudas, compara, valida la confianza de la tienda y decide si añade al carrito o se va. En
          este tema analizamos su estructura, su jerarquía visual, sus bloques críticos y cómo
          mejorarla con criterio de conversión, UX y SEO.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>
              Entender la <strong>estructura completa</strong> de una ficha de producto eficaz
            </li>
            <li>
              Mejorar la <strong>jerarquía visual</strong> de precio, título, CTA y confianza
            </li>
            <li>
              Trabajar <strong>galería, reseñas, pestañas y productos relacionados</strong>
            </li>
            <li>
              Aplicar criterios de <strong>upselling y cross-selling</strong> sin saturar al usuario
            </li>
            <li>
              Optimizar la ficha para <strong>SEO, conversión y experiencia móvil</strong>
            </li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 4 horas · <strong>Nivel:</strong> Intermedio ·{" "}
            <strong>Requisito:</strong> tener productos ya creados, con imágenes, descripciones,
            categorías y flujo de compra funcionando.
          </p>
        </TipBox>
      </header>

      {/* ══════════════ S1: POR QUÉ ES CLAVE ══════════════ */}
      <section className="doc doc-section" id="importancia-ficha">
        <h2>1. Por qué la ficha de producto es la página más crítica de la tienda</h2>

        <div className="doc-content">
          <p>
            La home atrae. Las categorías orientan. Pero la ficha de producto es donde el usuario
            decide si confía, si le encaja el producto y si va a comprar. Es la página que más debe
            responder preguntas en el menor tiempo posible.
          </p>

          <div className="two-columns">
            <div>
              <h4 style={{ color: "#16a34a" }}>✅ Lo que el usuario necesita resolver aquí</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Qué producto es exactamente</li>
                <li>Cuánto cuesta</li>
                <li>Qué variantes hay disponibles</li>
                <li>Cómo se ve realmente</li>
                <li>Qué materiales o características tiene</li>
                <li>Qué opinan otros compradores</li>
                <li>Qué pasa con envío, devolución y pago</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>❌ Qué provoca salida inmediata</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Fotos pobres o insuficientes</li>
                <li>Precio mal jerarquizado</li>
                <li>Botón de compra poco visible</li>
                <li>Variaciones confusas</li>
                <li>Información clave escondida</li>
                <li>Ausencia de confianza o reseñas</li>
                <li>Diseño torpe en móvil</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Idea didáctica central:</strong> una ficha buena no es la que “queda bonita”,
              sino la que reduce dudas y facilita la decisión de compra.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S2: ANATOMÍA ══════════════ */}
      <section className="doc doc-section" id="anatomia-ficha">
        <h2>2. Anatomía completa de una ficha de producto profesional</h2>

        <div className="doc-content">
          <p>
            WooCommerce ya trae una estructura base. El trabajo del diseñador o del docente no es
            inventarla desde cero, sino entender qué función cumple cada bloque y cómo puede
            optimizarse.
          </p>

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
              Mapa visual de la ficha de producto
            </p>

            <div style={{ display: "grid", gap: "0.45rem" }}>
              {[
                {
                  n: "01",
                  name: "GALERÍA PRINCIPAL",
                  sub: "Imagen destacada + miniaturas o carrusel",
                  bg: "#312e81",
                  c: "#fff",
                },
                {
                  n: "02",
                  name: "TÍTULO DEL PRODUCTO",
                  sub: "Nombre claro, específico y orientado a búsqueda",
                  bg: "#4338ca",
                  c: "#fff",
                },
                {
                  n: "03",
                  name: "PRECIO / OFERTA",
                  sub: "Precio normal, rebajado y ahorro visual si procede",
                  bg: "#5b21b6",
                  c: "#fff",
                },
                {
                  n: "04",
                  name: "DESCRIPCIÓN CORTA",
                  sub: "Resumen persuasivo justo antes de comprar",
                  bg: "#6d28d9",
                  c: "#fff",
                },
                {
                  n: "05",
                  name: "VARIACIONES / STOCK",
                  sub: "Talla, color, disponibilidad y selección",
                  bg: "#7c3aed",
                  c: "#fff",
                },
                {
                  n: "06",
                  name: "BOTÓN AÑADIR AL CARRITO",
                  sub: "CTA principal de la página",
                  bg: "#8b5cf6",
                  c: "#fff",
                },
                {
                  n: "07",
                  name: "SEÑALES DE CONFIANZA",
                  sub: "Envío, devoluciones, pago seguro, garantía",
                  bg: "#a78bfa",
                  c: "#1e1b4b",
                },
                {
                  n: "08",
                  name: "PESTAÑAS O BLOQUES INFERIORES",
                  sub: "Descripción larga, información adicional y reseñas",
                  bg: "#c4b5fd",
                  c: "#1e1b4b",
                },
                {
                  n: "09",
                  name: "PRODUCTOS RELACIONADOS",
                  sub: "Cross-sell, upsell y exploración extra del catálogo",
                  bg: "#ddd6fe",
                  c: "#1e1b4b",
                },
              ].map((b) => (
                <div
                  key={b.n}
                  style={{
                    background: b.bg,
                    color: b.c,
                    borderRadius: "8px",
                    padding: "0.75rem 1.1rem",
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
                  <div style={{ fontSize: "0.8rem", opacity: 0.9, textAlign: "right" }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <TipBox title="📌 Criterio importante">
            <p>
              La parte superior de la ficha debe responder en segundos a cuatro preguntas:{" "}
              <strong>qué es</strong>, <strong>cuánto cuesta</strong>, <strong>si está disponible</strong> y{" "}
              <strong>cómo se compra</strong>.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S3: BLOQUES CLAVE ══════════════ */}
      <section className="doc doc-section" id="bloques-clave">
        <h2>3. Los bloques que más influyen en la conversión</h2>

        <div className="doc-content">
          <p>
            No todos los bloques de la ficha pesan lo mismo. Algunos son esenciales para la decisión
            de compra. Otros acompañan o refuerzan.
          </p>

          {[
            {
              n: "01",
              title: "Galería del producto",
              color: "#2563eb",
              content: (
                <>
                  <p>
                    La galería es la sustituta del contacto físico. Una sola foto rara vez basta. El
                    usuario necesita ver el producto desde varios ángulos y, si es posible, en
                    contexto.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Buenas prácticas</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Imagen principal nítida y coherente con el catálogo</li>
                        <li>Miniaturas o carrusel fácil de usar</li>
                        <li>Zoom o ampliación si el tema lo permite</li>
                        <li>Mostrar detalles de material, textura o acabado</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Errores frecuentes</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Solo una foto</li>
                        <li>Fotos oscuras o inconsistentes</li>
                        <li>Miniaturas demasiado pequeñas</li>
                        <li>Galería mal resuelta en móvil</li>
                      </ul>
                    </div>
                  </div>
                </>
              ),
            },
            {
              n: "02",
              title: "Título, precio y descripción corta",
              color: "#16a34a",
              content: (
                <>
                  <p>
                    Este conjunto forma el núcleo comercial inmediato. El título identifica. El precio
                    posiciona la decisión. La descripción corta empuja a seguir.
                  </p>
                  <div className="table-wrap">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Elemento</th>
                          <th>Qué debe conseguir</th>
                          <th>Nivel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Título</strong>
                          </td>
                          <td>Ser claro, específico y reconocible</td>
                          <td>
                            <ProductChip label="SEO + comprensión" type="ok" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Precio</strong>
                          </td>
                          <td>Ser visible y no competir con otros elementos</td>
                          <td>
                            <ProductChip label="Conversión" type="danger" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Descripción corta</strong>
                          </td>
                          <td>Resumir beneficios y reducir dudas iniciales</td>
                          <td>
                            <ProductChip label="Muy visible" type="info" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              ),
            },
            {
              n: "03",
              title: "Variaciones, stock y botón de compra",
              color: "#7c3aed",
              content: (
                <>
                  <p>
                    Si el usuario no entiende cómo elegir talla, color o formato, o no percibe bien la
                    disponibilidad, la conversión cae rápidamente.
                  </p>
                  <ul style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
                    <li>Las variaciones deben ser claras y fáciles de seleccionar</li>
                    <li>El stock debe expresarse de forma comprensible</li>
                    <li>El botón “Añadir al carrito” debe destacar visualmente</li>
                    <li>En móvil, el CTA no debe quedar enterrado tras mucho contenido</li>
                  </ul>
                  <WarningBox>
                    <p>
                      Si el alumno crea bien las variaciones en WooCommerce pero no las revisa en la
                      ficha, puede encontrarse con un frontend técnicamente correcto pero confuso para
                      el usuario.
                    </p>
                  </WarningBox>
                </>
              ),
            },
            {
              n: "04",
              title: "Señales de confianza",
              color: "#f59e0b",
              content: (
                <>
                  <p>
                    Muchas veces no vende solo el producto: vende la tranquilidad de comprarlo ahí.
                    Las señales de confianza deben estar cerca del área de compra.
                  </p>
                  <div className="two-columns">
                    <div>
                      <h5>Ejemplos útiles</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Envío gratis a partir de cierto importe</li>
                        <li>Devoluciones sencillas</li>
                        <li>Pago seguro</li>
                        <li>Entrega estimada</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Ubicación ideal</h5>
                      <ul style={{ fontSize: "0.88rem" }}>
                        <li>Debajo del botón de compra</li>
                        <li>En una banda lateral o callout visual</li>
                        <li>Con iconos simples y textos cortos</li>
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
              <div className="dd-body" style={{ padding: "1.1rem" }}>
                {bloque.content}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ══════════════ S4: PESTAÑAS ══════════════ */}
      <section className="doc doc-section" id="pestanas-inferiores">
        <h2>4. Descripción larga, información adicional y reseñas</h2>

        <div className="doc-content">
          <p>
            WooCommerce organiza la parte inferior de la ficha en pestañas o bloques:{" "}
            <strong>descripción</strong>, <strong>información adicional</strong> y{" "}
            <strong>valoraciones</strong>. Estas zonas no suelen ser lo primero que ve el usuario,
            pero sí son decisivas cuando tiene dudas.
          </p>

          <div className="two-columns">
            <div>
              <h4>Descripción larga</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Debe ampliar lo que la descripción corta no puede contar: materiales, estilo, uso,
                contexto, ventajas o inspiración del producto.
              </p>
            </div>
            <div>
              <h4>Información adicional</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Suele mostrar atributos como talla, color o dimensiones. Es útil, pero no debe ser la
                única fuente de información sobre opciones del producto.
              </p>
            </div>
          </div>

          <h3>Reseñas: bloque de confianza social</h3>
          <p>
            Las reseñas ayudan a que el usuario delegue parte de la decisión en otros compradores. En
            una tienda nueva pueden ser pocas, pero cuando existen son una palanca muy fuerte.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Bloque</th>
                  <th>Qué aporta</th>
                  <th>Peso en conversión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Descripción</strong>
                  </td>
                  <td>Argumento comercial y contexto</td>
                  <td>
                    <ProductChip label="Alta" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Información adicional</strong>
                  </td>
                  <td>Datos técnicos o atributos</td>
                  <td>
                    <ProductChip label="Media" type="info" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Reseñas</strong>
                  </td>
                  <td>Confianza, prueba social y reducción de riesgo</td>
                  <td>
                    <ProductChip label="Muy alta" type="danger" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="💡 Criterio pedagógico">
            <p>
              Explica a los alumnos que las pestañas no son “contenido secundario sin importancia”.
              Son el lugar donde el usuario confirma si compra o no cuando todavía tiene dudas.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S5: RELACIONADOS / UPSELL ══════════════ */}
      <section className="doc doc-section" id="relacionados-upsell">
        <h2>5. Productos relacionados, upselling y cross-selling</h2>

        <div className="doc-content">
          <p>
            Una ficha de producto no debe cerrarse en sí misma. También puede abrir puertas a otras
            compras. Aquí entran dos conceptos muy importantes:
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
            UPSELL = mostrar una opción superior o más completa
            <br />
            CROSS-SELL = mostrar productos complementarios
          </div>

          <div className="two-columns">
            <div>
              <h4>Ejemplo de upsell</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Si el usuario está viendo una camiseta básica, se le puede sugerir una versión premium
                o una edición limitada.
              </p>
            </div>
            <div>
              <h4>Ejemplo de cross-sell</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Si ve una sudadera, se le pueden mostrar tazas, pegatinas o accesorios del mismo
                universo de marca.
              </p>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Error frecuente:</strong> llenar la ficha con demasiados productos relacionados.
              El objetivo no es distraer, sino acompañar la decisión principal o aumentar el valor
              medio del pedido.
            </p>
          </WarningBox>

          <h3>Buenas prácticas</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>Mostrar pocos productos, pero muy relevantes</li>
            <li>Usar coherencia temática o funcional</li>
            <li>No competir con el CTA principal</li>
            <li>Ubicarlos al final de la ficha o tras la información principal</li>
          </ul>
        </div>
      </section>

      {/* ══════════════ S6: SEO ══════════════ */}
      <section className="doc doc-section" id="seo-ficha">
        <h2>6. SEO on-page en la ficha de producto</h2>

        <div className="doc-content">
          <p>
            La ficha de producto no solo debe vender. También puede posicionar si se trabaja bien el
            contenido, la estructura y los metadatos.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              {
                title: "Título del producto",
                desc: "Debe describir claramente la intención de búsqueda, sin volverse artificial.",
                color: "#dbeafe",
                border: "#3b82f6",
              },
              {
                title: "Descripción única",
                desc: "No copies y pegues textos genéricos del proveedor si quieres diferenciar la ficha.",
                color: "#dcfce7",
                border: "#22c55e",
              },
              {
                title: "Alt de imágenes",
                desc: "Describe el producto con sentido. No uses nombres vacíos como imagen1.",
                color: "#fef3c7",
                border: "#f59e0b",
              },
              {
                title: "Schema de producto",
                desc: "WooCommerce ya aporta base estructurada, pero debe revisarse en un proyecto serio.",
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

          <TipBox title="🔧 Trabajo con Yoast o RankMath">
            <p>
              Pide al alumno que revise cada producto como si fuera una landing individual:{" "}
              <strong>title</strong>, <strong>meta description</strong>, contenido único y palabra
              clave razonable. Así entiende que el SEO no vive solo en la home.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S7: MÓVIL ══════════════ */}
      <section className="doc doc-section" id="mobile-producto">
        <h2>7. La ficha en móvil: donde más se rompe el diseño</h2>

        <div className="doc-content">
          <p>
            Muchas fichas parecen correctas en escritorio y fallan en móvil. Esto es grave, porque una
            gran parte del tráfico llega desde smartphone.
          </p>

          <div className="two-columns">
            <div>
              <h4>Qué revisar sí o sí</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Tamaño de las imágenes y del carrusel</li>
                <li>Orden visual entre galería y bloque de compra</li>
                <li>Legibilidad del precio</li>
                <li>Uso cómodo de variaciones</li>
                <li>CTA visible sin hacer scroll excesivo</li>
              </ul>
            </div>
            <div>
              <h4>Errores comunes</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Miniaturas demasiado pequeñas</li>
                <li>Texto amontonado</li>
                <li>Botón de compra sin anchura suficiente</li>
                <li>Bloques de confianza que empujan demasiado hacia abajo</li>
                <li>Pestañas difíciles de tocar o leer</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Regla de oro:</strong> toda ficha debe revisarse en móvil real o, como mínimo,
              en la vista responsive del navegador. No basta con que “parezca bien” en escritorio.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S8: WORKFLOW ══════════════ */}
      <section className="doc doc-section" id="workflow-ficha">
        <h2>8. Workflow profesional para revisar una ficha antes de publicarla</h2>

        <div className="doc-content">
          <p>
            Igual que hicimos con carrito y checkout, la ficha necesita un proceso de control. No debe
            publicarse sin una revisión sistemática.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            <StepCard
              n="1"
              title="Comprobar galería e imagen destacada"
              detail="Todas las imágenes deben verse bien y mantener coherencia con el catálogo."
              color="#2563eb"
            />
            <StepCard
              n="2"
              title="Revisar título, precio y descripción corta"
              detail="Son los tres elementos comerciales más inmediatos."
              color="#16a34a"
            />
            <StepCard
              n="3"
              title="Probar variaciones y stock"
              detail="No basta con configurarlas en el backend; hay que probarlas en frontend."
              color="#7c3aed"
            />
            <StepCard
              n="4"
              title="Leer la descripción larga"
              detail="Debe aportar valor real, no repetir ni rellenar huecos."
              color="#f59e0b"
            />
            <StepCard
              n="5"
              title="Revisar señales de confianza y reseñas"
              detail="La ficha debe transmitir seguridad además de información."
              color="#dc2626"
            />
            <StepCard
              n="6"
              title="Comprobar productos relacionados y vista móvil"
              detail="Son los dos bloques que más suelen descuidarse."
              color="#0891b2"
            />
          </div>

          <TipBox title="✅ Método docente muy útil">
            <p>
              Pide a los alumnos que hagan una auditoría cruzada: cada uno revisa la ficha de otro
              compañero con una checklist. Así detectan fallos que el propio autor ya no ve.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>9. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Auditar una ficha existente">
            <ol>
              <li>Elige uno de los productos ya creados en tu tienda.</li>
              <li>Analiza galería, título, precio, descripción corta y CTA.</li>
              <li>Revisa si las variaciones se entienden bien.</li>
              <li>Comprueba si existen señales de confianza cerca del botón de compra.</li>
              <li>Anota al menos 5 mejoras concretas.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Mejorar la ficha de un producto variable">
            <ol>
              <li>Selecciona un producto con talla o color.</li>
              <li>Revisa si las imágenes representan bien el producto.</li>
              <li>Mejora la descripción corta para hacerla más persuasiva.</li>
              <li>Añade o corrige la descripción larga.</li>
              <li>Comprueba cómo se ve la ficha en móvil.</li>
            </ol>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad de análisis — Comparar dos fichas reales">
            <p>
              Elige dos tiendas online y compara sus fichas de producto:
            </p>
            <ol>
              <li>¿Cuál muestra mejor las imágenes?</li>
              <li>¿Cuál resuelve mejor el precio y la oferta?</li>
              <li>¿Cuál transmite más confianza?</li>
              <li>¿Cuál presenta mejor reseñas y productos relacionados?</li>
              <li>¿Cuál comprarías tú y por qué?</li>
            </ol>
            <p>
              Entrega una tabla comparativa con observaciones de UX, conversión y claridad visual.
            </p>
          </ActivityBox>
        </div>
      </section>

      {/* ══════════════ CONCLUSIÓN ══════════════ */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 55%, #eef2ff 100%)",
            color: "#0f172a",
            padding: "2.5rem",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ margin: "0 0 1.5rem 0", color: "#5b21b6", textAlign: "center" }}>
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
                icon: "📄",
                t: "La ficha es una landing",
                d: "No es una página técnica cualquiera: es la página de decisión de compra.",
              },
              {
                icon: "🖼️",
                t: "La imagen y el CTA pesan mucho",
                d: "Galería, precio y botón de compra son el núcleo visual de la conversión.",
              },
              {
                icon: "⭐",
                t: "La confianza también vende",
                d: "Reseñas, envío, devolución y seguridad reducen la fricción.",
              },
              {
                icon: "📱",
                t: "Móvil no es opcional",
                d: "Una ficha rota en smartphone destruye ventas aunque el producto sea bueno.",
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
                <h4 style={{ margin: "0 0 0.4rem 0", color: "#4c1d95", fontSize: "0.95rem" }}>
                  {c.t}
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <TipBox title="Próximo tema">
          <p>
            En el <strong>Tema 30</strong> podemos continuar con la{" "}
            <strong>optimización SEO de la tienda WooCommerce</strong>: arquitectura, categorías,
            fichas, metaetiquetas, velocidad, imágenes y estrategia de posicionamiento para captar
            tráfico orgánico.
          </p>
        </TipBox>
      </section>
    </TopicLayout>
  );
}