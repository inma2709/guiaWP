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

function LevelChip({ label, type = "info" }) {
  const map = {
    ok: { bg: "#dcfce7", color: "#166534", border: "#22c55e" },
    warn: { bg: "#fef3c7", color: "#92400e", border: "#f59e0b" },
    danger: { bg: "#fee2e2", color: "#991b1b", border: "#ef4444" },
    info: { bg: "#dbeafe", color: "#1d4ed8", border: "#3b82f6" },
    pro: { bg: "#ede9fe", color: "#6d28d9", border: "#8b5cf6" },
  };

  const current = map[type] || map.info;

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

function StepLabel({ n, title, color = "#2563eb" }) {
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

export default function Tema27_ProductosWooCommerce() {
  return (
    <TopicLayout>
      {/* ══════════════ HERO ══════════════ */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · Proyecto E-Commerce · Fase 2</p>
        <h1>Configuración de Productos en WooCommerce</h1>
        <p className="lead">
          En el tema anterior diseñamos la home y ordenamos la entrada del usuario a la tienda.
          Ahora trabajamos el núcleo del negocio: los productos. Aprenderás a crear fichas de
          producto profesionales, configurar productos simples y variables, gestionar stock,
          optimizar imágenes, redactar descripciones que ayuden a vender y dejar preparada la tienda
          para una gestión realista.
        </p>

        <TipBox title="🎯 Objetivos del tema">
          <ul>
            <li>
              Comprender la <strong>estructura completa de una ficha de producto</strong> en
              WooCommerce
            </li>
            <li>
              Crear correctamente <strong>productos simples y productos variables</strong>
            </li>
            <li>
              Configurar <strong>atributos, variaciones, stock, SKU y estados de inventario</strong>
            </li>
            <li>
              Optimizar <strong>imágenes, categorías, etiquetas y textos</strong> de producto
            </li>
            <li>
              Aplicar una <strong>metodología profesional</strong> para evitar errores comunes de
              catálogo
            </li>
          </ul>
          <p>
            <strong>Tiempo estimado:</strong> 4 horas · <strong>Nivel:</strong> Intermedio ·{" "}
            <strong>Requisito:</strong> WooCommerce operativo, categorías creadas y página de inicio
            lista para enlazar productos.
          </p>
        </TipBox>
      </header>

      {/* ══════════════ S1: VISIÓN GENERAL ══════════════ */}
      <section className="doc doc-section" id="vision-general">
        <h2>1. Qué estamos construyendo realmente cuando creamos un producto</h2>

        <div className="doc-content">
          <p>
            Muchos alumnos piensan que crear un producto es solo rellenar un título, un precio y una
            imagen. En una tienda real no funciona así. Un producto en WooCommerce es una{" "}
            <strong>unidad de negocio</strong> con información comercial, visual, logística, fiscal,
            técnica y SEO.
          </p>

          <div className="two-columns">
            <div>
              <h4 style={{ color: "#16a34a" }}>✅ Un producto bien creado debe resolver</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Qué es exactamente lo que se vende</li>
                <li>A quién va dirigido</li>
                <li>Cuánto cuesta</li>
                <li>Qué variantes tiene (talla, color, formato...)</li>
                <li>Cuántas unidades hay disponibles</li>
                <li>Cómo se muestra visualmente</li>
                <li>En qué categoría debe aparecer</li>
                <li>Cómo lo entiende Google</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#dc2626" }}>❌ Problemas de una ficha mal montada</h4>
              <ul style={{ fontSize: "0.9rem" }}>
                <li>Productos duplicados por cada talla o color</li>
                <li>Variaciones mal creadas que no se pueden elegir</li>
                <li>Stock descontrolado</li>
                <li>Imágenes desalineadas en el catálogo</li>
                <li>Descripciones vacías o repetidas</li>
                <li>Categorías caóticas</li>
                <li>Fichas poco profesionales y con baja conversión</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Idea clave:</strong> si el catálogo está mal diseñado, la home no salva la
              tienda. La home atrae; la ficha de producto cierra la venta.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* ══════════════ S2: ESTRUCTURA DE FICHA ══════════════ */}
      <section className="doc doc-section" id="estructura-ficha">
        <h2>2. Anatomía completa de una ficha de producto en WooCommerce</h2>

        <div className="doc-content">
          <p>
            Antes de crear productos, necesitas ver la ficha como un sistema. WooCommerce organiza la
            información del producto en bloques muy concretos.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Bloque</th>
                  <th>Función</th>
                  <th>Impacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Título</strong>
                  </td>
                  <td>Nombre comercial del producto</td>
                  <td>
                    <LevelChip label="SEO + conversión" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Descripción larga</strong>
                  </td>
                  <td>Explica beneficios, uso, materiales, contexto</td>
                  <td>
                    <LevelChip label="Conversión" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Descripción corta</strong>
                  </td>
                  <td>Resumen visible junto al precio</td>
                  <td>
                    <LevelChip label="Muy visible" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Imagen destacada</strong>
                  </td>
                  <td>Imagen principal en catálogo y ficha</td>
                  <td>
                    <LevelChip label="Crítica" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Galería</strong>
                  </td>
                  <td>Vistas adicionales del producto</td>
                  <td>
                    <LevelChip label="Trust visual" type="info" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Precio</strong>
                  </td>
                  <td>Precio normal y oferta</td>
                  <td>
                    <LevelChip label="Venta directa" type="danger" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Datos del producto</strong>
                  </td>
                  <td>Tipo, inventario, envío, atributos, variaciones</td>
                  <td>
                    <LevelChip label="Técnico" type="pro" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Categorías y etiquetas</strong>
                  </td>
                  <td>Organización del catálogo</td>
                  <td>
                    <LevelChip label="SEO + navegación" type="ok" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SKU</strong>
                  </td>
                  <td>Identificador interno de inventario</td>
                  <td>
                    <LevelChip label="Gestión" type="warn" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="📌 Regla docente">
            <p>
              Explica a los alumnos que WooCommerce separa dos planos:{" "}
              <strong>lo que ve el cliente</strong> y <strong>lo que necesita la tienda para funcionar</strong>.
              Los dos son igual de importantes.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S3: PRODUCTO SIMPLE ══════════════ */}
      <section className="doc doc-section" id="producto-simple">
        <h2>3. Producto simple: la base de todo</h2>

        <div className="doc-content">
          <p>
            El <strong>producto simple</strong> es el modelo más básico: una sola referencia, un solo
            precio y, normalmente, una sola configuración de compra. Es ideal para tazas, libros,
            pósters, cursos descargables o cualquier producto sin variaciones.
          </p>

          <h3>Ruta de trabajo</h3>
          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                n: 1,
                title: "Productos → Añadir nuevo",
                detail:
                  "Entramos al panel de creación y comenzamos por el título y el editor principal.",
                color: "#2563eb",
              },
              {
                n: 2,
                title: "Escribir título y descripción larga",
                detail:
                  "El título debe identificar claramente el producto. La descripción larga vende y explica.",
                color: "#16a34a",
              },
              {
                n: 3,
                title: "Completar Datos del producto",
                detail:
                  "Selecciona “Producto simple” y configura precio, inventario, envío y atributos si hiciera falta.",
                color: "#7c3aed",
              },
              {
                n: 4,
                title: "Añadir descripción corta",
                detail:
                  "Es el resumen comercial que aparece en una zona muy visible de la ficha.",
                color: "#f59e0b",
              },
              {
                n: 5,
                title: "Asignar imagen, galería, categoría y etiquetas",
                detail:
                  "Sin esto el producto queda técnicamente publicado, pero comercialmente incompleto.",
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

          <div className="two-columns">
            <div>
              <h4>Ejemplo de producto simple</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>
                  <strong>Título:</strong> Taza Hello World Developer
                </li>
                <li>
                  <strong>Precio:</strong> 12,90 €
                </li>
                <li>
                  <strong>SKU:</strong> TAZ-HW-001
                </li>
                <li>
                  <strong>Categoría:</strong> Accesorios
                </li>
                <li>
                  <strong>Stock:</strong> 25 unidades
                </li>
              </ul>
            </div>
            <div>
              <h4>Cuándo usarlo</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Cuando no hay tallas ni colores</li>
                <li>Cuando el precio es único</li>
                <li>Cuando no necesitas combinaciones</li>
                <li>Cuando quieres simplicidad de gestión</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ S4: PRODUCTO VARIABLE ══════════════ */}
      <section className="doc doc-section" id="producto-variable">
        <h2>4. Producto variable: tallas, colores y combinaciones reales</h2>

        <div className="doc-content">
          <p>
            El <strong>producto variable</strong> es el que más errores genera al empezar, pero también
            es el que más se usa en tiendas reales. Permite vender un mismo producto con distintas
            combinaciones: talla, color, material, capacidad, formato o cualquier otra opción.
          </p>

          <WarningBox>
            <p>
              <strong>Error clásico:</strong> crear un producto distinto para cada talla o color. Eso
              fragmenta el catálogo, complica el stock y empeora la experiencia del cliente.
            </p>
          </WarningBox>

          <h3>La lógica correcta</h3>
          <div
            style={{
              background: "#0f172a",
              color: "#e2e8f0",
              borderRadius: "12px",
              padding: "1.5rem",
              fontFamily: "monospace",
              fontSize: "0.88rem",
              margin: "1.2rem 0",
              lineHeight: 1.9,
            }}
          >
            Producto padre: Camiseta Eat Sleep Code Repeat
            <br />
            ├── Atributo 1: Talla → S / M / L / XL
            <br />
            ├── Atributo 2: Color → Negro / Blanco / Azul
            <br />
            └── Variaciones:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• Negro + S
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• Negro + M
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• Blanco + S
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• Azul + XL
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;... etc.
          </div>

          <h3>Flujo correcto de creación</h3>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                n: 1,
                title: "Crear producto base",
                detail:
                  "Pon título, descripción, imagen general y categorías como si fuera una ficha normal.",
                color: "#2563eb",
              },
              {
                n: 2,
                title: "Seleccionar “Producto variable”",
                detail:
                  "Dentro de “Datos del producto”, cambia de “Producto simple” a “Producto variable”.",
                color: "#16a34a",
              },
              {
                n: 3,
                title: "Crear atributos",
                detail:
                  "Añade atributos como Talla y Color. Marca siempre “Visible en la página del producto” y “Usado para variaciones”.",
                color: "#7c3aed",
              },
              {
                n: 4,
                title: "Generar variaciones",
                detail:
                  "En la pestaña Variaciones, elige “Crear variaciones para todos los atributos”.",
                color: "#f59e0b",
              },
              {
                n: 5,
                title: "Configurar cada variación",
                detail:
                  "Pon precio, stock, SKU e imagen si cambia visualmente según color o formato.",
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

          <TipBox title="💡 Método docente claro">
            <p>
              Explica siempre la diferencia entre <strong>atributo</strong> y{" "}
              <strong>variación</strong>:
            </p>
            <ul>
              <li>
                <strong>Atributo:</strong> el tipo de opción disponible
              </li>
              <li>
                <strong>Variación:</strong> la combinación concreta que el cliente puede comprar
              </li>
            </ul>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S5: ATRIBUTOS Y VARIACIONES ══════════════ */}
      <section className="doc doc-section" id="atributos-variaciones">
        <h2>5. Atributos y variaciones: el punto donde más fallan los alumnos</h2>

        <div className="doc-content">
          <p>
            Aquí conviene frenar y explicar con mucha precisión, porque si esta parte no se entiende
            bien, luego aparecen problemas como “los atributos salen en datos adicionales pero no como
            opciones a elegir”.
          </p>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Qué hace</th>
                  <th>Qué no hace</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Atributo visible</strong>
                  </td>
                  <td>Muestra información en la ficha</td>
                  <td>No crea selector de compra</td>
                </tr>
                <tr>
                  <td>
                    <strong>Atributo usado para variaciones</strong>
                  </td>
                  <td>Sirve para generar combinaciones seleccionables</td>
                  <td>No basta por sí solo si no generas variaciones</td>
                </tr>
                <tr>
                  <td>
                    <strong>Variación creada</strong>
                  </td>
                  <td>Permite elegir una combinación real</td>
                  <td>No aparece si faltan precio o configuración básica</td>
                </tr>
              </tbody>
            </table>
          </div>

          <WarningBox>
            <p>
              <strong>Diagnóstico del error típico:</strong> si el alumno ve “Talla: S, M, L” en la
              pestaña de información adicional pero no ve desplegables para elegir, casi siempre pasa
              una de estas dos cosas:
            </p>
            <ul>
              <li>No ha marcado “Usado para variaciones”</li>
              <li>Ha creado el atributo pero no ha generado las variaciones</li>
            </ul>
          </WarningBox>

          <h3>Checklist de verificación rápida</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>El tipo de producto es realmente “Producto variable”</li>
            <li>Existe al menos un atributo con valores separados correctamente</li>
            <li>Está marcada la casilla “Usado para variaciones”</li>
            <li>En la pestaña Variaciones se han generado combinaciones</li>
            <li>Cada variación tiene precio</li>
            <li>Si gestionas stock por variación, cada una tiene sus unidades</li>
          </ul>
        </div>
      </section>

      {/* ══════════════ S6: INVENTARIO ══════════════ */}
      <section className="doc doc-section" id="inventario-stock">
        <h2>6. Inventario, stock y SKU: controlar la tienda sin caos</h2>

        <div className="doc-content">
          <p>
            WooCommerce permite trabajar con inventario básico sin plugins extra. Para una tienda
            educativa o una tienda real pequeña, esto suele ser suficiente si se configura bien.
          </p>

          <div className="two-columns">
            <div>
              <h4>Elementos básicos de inventario</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>
                  <strong>SKU:</strong> identificador interno único
                </li>
                <li>
                  <strong>Gestionar inventario:</strong> activa el control automático
                </li>
                <li>
                  <strong>Cantidad disponible:</strong> stock actual
                </li>
                <li>
                  <strong>Permitir reservas:</strong> venta aunque no haya stock
                </li>
                <li>
                  <strong>Umbral de pocas existencias:</strong> alerta preventiva
                </li>
              </ul>
            </div>
            <div>
              <h4>Buenas prácticas</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Define una estructura coherente de SKU</li>
                <li>No reutilices SKU entre productos distintos</li>
                <li>En variables, mejor stock por variación</li>
                <li>Evita vender sin stock salvo decisión expresa</li>
                <li>Revisa los pedidos de prueba antes de abrir tienda</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              background: "#eff6ff",
              border: "1px solid #93c5fd",
              borderRadius: "12px",
              padding: "1rem",
              margin: "1rem 0",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Ejemplo simple de SKU profesional</h4>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Camiseta Hello World negra talla M</strong>
            </p>
            <code>CAM-HW-NGR-M</code>
            <p style={{ marginTop: "0.75rem", fontSize: "0.88rem", color: "#475569" }}>
              Estructura: tipo de producto + modelo + color + talla
            </p>
          </div>

          <TipBox title="🧠 Criterio docente">
            <p>
              No enseñes el SKU como un dato “decorativo”. Enséñalo como herramienta de orden
              interno. A los alumnos les ayuda mucho cuando imaginan una tienda con 200 referencias.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S7: IMÁGENES ══════════════ */}
      <section className="doc doc-section" id="imagenes-producto">
        <h2>7. Imágenes de producto: coherencia visual del catálogo</h2>

        <div className="doc-content">
          <p>
            En una tienda online la imagen sustituye en gran parte al contacto físico. El usuario no
            puede tocar el producto; por tanto, la imagen debe compensar esa ausencia.
          </p>

          <h3>Qué debe tener un producto visualmente bien presentado</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              margin: "1.2rem 0",
            }}
          >
            {[
              {
                title: "Imagen destacada",
                desc: "La imagen principal debe ser limpia, nítida y consistente con el resto del catálogo.",
                color: "#dbeafe",
                border: "#3b82f6",
              },
              {
                title: "Galería",
                desc: "Añade vistas laterales, detalles, contexto de uso o variantes de color.",
                color: "#dcfce7",
                border: "#22c55e",
              },
              {
                title: "Mismo ratio",
                desc: "Todas las imágenes deben compartir proporción para que el grid no se rompa.",
                color: "#fef3c7",
                border: "#f59e0b",
              },
              {
                title: "Optimización",
                desc: "Usa WebP y compresión razonable para no destruir el rendimiento.",
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
                  padding: "1rem",
                }}
              >
                <h5 style={{ margin: "0 0 0.45rem 0", color: "#0f172a" }}>{c.title}</h5>
                <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <WarningBox>
            <p>
              <strong>Error muy frecuente:</strong> subir imágenes de diferentes tamaños y confiar en
              que WooCommerce “las arregle”. WooCommerce puede recortar miniaturas, pero no corrige
              un catálogo visualmente incoherente.
            </p>
          </WarningBox>

          <h3>Recomendación práctica</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>Formato preferente: WebP</li>
            <li>Ratio recomendado: 1:1 para moda y merchandising</li>
            <li>Ancho razonable: entre 1200 y 1600 px para la imagen principal</li>
            <li>Fondo uniforme si el catálogo lo exige</li>
            <li>Una misma línea estética en todas las referencias</li>
          </ul>
        </div>
      </section>

      {/* ══════════════ S8: TEXTO Y SEO ══════════════ */}
      <section className="doc doc-section" id="textos-seo-producto">
        <h2>8. Títulos, descripciones y SEO de producto</h2>

        <div className="doc-content">
          <p>
            Una ficha buena no solo informa. También posiciona y persuade. Aquí es donde WordPress,
            WooCommerce y una buena metodología de redacción se cruzan.
          </p>

          <h3>Qué debe tener el título</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>Nombre claro del producto</li>
            <li>Tipo o categoría implícita si ayuda a entenderlo</li>
            <li>Rasgo diferenciador real</li>
            <li>Sin relleno artificial de keywords</li>
          </ul>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Mal</th>
                  <th>Mejor</th>
                  <th>Por qué</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Camiseta</td>
                  <td>Camiseta Hello World Developer</td>
                  <td>Identifica el modelo concreto</td>
                </tr>
                <tr>
                  <td>Taza programación bonita</td>
                  <td>Taza Hello World para Programadores</td>
                  <td>Más clara y más comercial</td>
                </tr>
                <tr>
                  <td>Sudadera algodón</td>
                  <td>Sudadera Eat Sleep Code Repeat</td>
                  <td>El nombre conecta con el producto real</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Descripción corta vs descripción larga</h3>
          <div className="two-columns">
            <div>
              <h4>Descripción corta</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Es el resumen comercial visible junto al precio. Debe ser breve, directa y
                comprensible en segundos.
              </p>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Qué es</li>
                <li>Para quién</li>
                <li>Por qué destaca</li>
              </ul>
            </div>
            <div>
              <h4>Descripción larga</h4>
              <p style={{ fontSize: "0.88rem" }}>
                Desarrolla beneficios, materiales, inspiración del diseño, uso y argumentos de
                confianza.
              </p>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>No repetir literalmente la corta</li>
                <li>No escribir bloques vacíos</li>
                <li>Usar subtítulos y listas si conviene</li>
              </ul>
            </div>
          </div>

          <TipBox title="✍️ Fórmula útil para redactar">
            <ol style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
              <li>Empieza diciendo qué producto es</li>
              <li>Explica el beneficio o la idea del diseño</li>
              <li>Añade material, uso o público ideal</li>
              <li>Cierra con una frase que refuerce la compra</li>
            </ol>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ S9: CATEGORÍAS ══════════════ */}
      <section className="doc doc-section" id="categorias-etiquetas">
        <h2>9. Categorías, etiquetas y organización del catálogo</h2>

        <div className="doc-content">
          <p>
            Un catálogo sin estructura obliga al usuario a buscar demasiado. Y cuando un usuario
            tiene que pensar más de la cuenta, abandona.
          </p>

          <div className="two-columns">
            <div>
              <h4>Categorías</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Son la estructura principal del catálogo</li>
                <li>Deben ser pocas, claras y útiles</li>
                <li>Se usan en menús, filtros y archivos</li>
                <li>Tienen impacto SEO fuerte</li>
              </ul>
            </div>
            <div>
              <h4>Etiquetas</h4>
              <ul style={{ fontSize: "0.88rem" }}>
                <li>Sirven para relacionar productos por rasgos secundarios</li>
                <li>No deben multiplicarse sin control</li>
                <li>En muchas tiendas pequeñas pueden omitirse</li>
                <li>Su abuso genera ruido más que orden</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Error muy común:</strong> usar etiquetas como si fueran categorías pequeñas.
              Primero diseña una taxonomía clara; luego decide si realmente necesitas etiquetas.
            </p>
          </WarningBox>

          <h3>Ejemplo razonable para una tienda de merchandising tech</h3>
          <ul style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
            <li>
              <strong>Categorías:</strong> Camisetas, Sudaderas, Tazas, Accesorios
            </li>
            <li>
              <strong>Etiquetas:</strong> developer, frontend, diseño web, regalo geek
            </li>
          </ul>
        </div>
      </section>

      {/* ══════════════ S10: WORKFLOW ══════════════ */}
      <section className="doc doc-section" id="workflow-profesional">
        <h2>10. Workflow profesional para cargar productos sin cometer errores</h2>

        <div className="doc-content">
          <p>
            Cuando el alumno crea tres productos a mano puede improvisar. Cuando tenga que cargar
            veinte, treinta o cien, necesita método.
          </p>

          <div style={{ margin: "1.2rem 0" }}>
            {[
              {
                n: 1,
                title: "Diseñar antes la estructura del catálogo",
                color: "#2563eb",
              },
              {
                n: 2,
                title: "Preparar categorías y atributos globales",
                color: "#16a34a",
              },
              {
                n: 3,
                title: "Definir nomenclatura de títulos y SKU",
                color: "#7c3aed",
              },
              {
                n: 4,
                title: "Optimizar imágenes antes de subirlas",
                color: "#f59e0b",
              },
              {
                n: 5,
                title: "Crear primero productos simples de prueba",
                color: "#dc2626",
              },
              {
                n: 6,
                title: "Pasar después a variables con método",
                color: "#0891b2",
              },
              {
                n: 7,
                title: "Revisar en frontend antes de publicar en masa",
                color: "#9333ea",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "1rem",
                  padding: "0.85rem",
                  marginBottom: "0.6rem",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: item.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <strong>{item.title}</strong>
                </div>
              </div>
            ))}
          </div>

          <TipBox title="✅ Recomendación práctica">
            <p>
              Obliga a tus alumnos a trabajar con una pequeña ficha previa en papel o en tabla: título,
              tipo de producto, categoría, atributos, precio, stock, SKU e imágenes necesarias. Eso
              reduce muchísimo los fallos al entrar en WordPress.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ══════════════ ACTIVIDADES ══════════════ */}
      <section className="doc doc-section" id="actividades">
        <h2>11. Actividades prácticas</h2>

        <div className="doc-content">
          <PracticeBox title="🧪 Práctica 1 — Crear un producto simple profesional">
            <ol>
              <li>Crea un producto simple completo en WooCommerce.</li>
              <li>Añade título claro, descripción larga y descripción corta.</li>
              <li>Configura precio, SKU y stock.</li>
              <li>Asigna categoría e imagen destacada.</li>
              <li>Añade al menos 2 imágenes a la galería.</li>
              <li>Revisa cómo se ve en la tienda y en la ficha individual.</li>
            </ol>
          </PracticeBox>

          <PracticeBox title="🧪 Práctica 2 — Crear un producto variable">
            <ol>
              <li>Crea una camiseta con atributos de talla y color.</li>
              <li>Convierte el producto en “Producto variable”.</li>
              <li>Marca los atributos como “Usado para variaciones”.</li>
              <li>Genera todas las variaciones.</li>
              <li>Configura precio y stock en cada una.</li>
              <li>Comprueba en frontend que el cliente puede elegir opciones.</li>
            </ol>
          </PracticeBox>

          <ActivityBox title="🎯 Actividad de análisis — Auditoría de fichas de producto reales">
            <p>
              Elige dos tiendas online y analiza una ficha de producto de cada una. Compara:
            </p>
            <ol>
              <li>Calidad del título</li>
              <li>Claridad de la descripción corta</li>
              <li>Calidad visual de imágenes y galería</li>
              <li>Uso de variaciones</li>
              <li>Presencia de confianza: stock, envíos, reseñas, devoluciones</li>
              <li>Organización por categoría y navegación</li>
            </ol>
            <p>
              Entrega una tabla con <strong>qué hace bien cada tienda</strong> y{" "}
              <strong>qué mejorarías tú</strong>.
            </p>
          </ActivityBox>
        </div>
      </section>

      {/* ══════════════ CONCLUSIÓN ══════════════ */}
      <section className="doc doc-section" id="conclusion">
        <div
          style={{
            background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #e0e7ff 100%)",
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
                icon: "📦",
                t: "Un producto no es solo una ficha",
                d: "Es una pieza comercial, visual, logística y SEO dentro del sistema de la tienda.",
              },
              {
                icon: "🎛️",
                t: "Atributo no es variación",
                d: "El alumno debe dominar esa diferencia para no romper el catálogo.",
              },
              {
                icon: "🧮",
                t: "El stock necesita método",
                d: "SKU, inventario y revisión del frontend evitan muchos errores futuros.",
              },
              {
                icon: "🖼️",
                t: "La imagen vende",
                d: "Un catálogo coherente transmite profesionalidad y aumenta la confianza.",
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
            En el <strong>Tema 28</strong> trabajaremos la{" "}
            <strong>configuración de pagos, envíos, impuestos y páginas críticas del checkout</strong>,
            para que la tienda no solo muestre productos, sino que pueda vender de verdad con un
            flujo completo de compra.
          </p>
        </TipBox>
      </section>
    </TopicLayout>
  );
}