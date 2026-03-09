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

function LayerCard({ icon, title, color, children }) {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        borderRadius: "12px",
        padding: "1.1rem 1.3rem",
        marginBottom: "0.8rem",
        background: `${color}10`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "1.4rem" }}>{icon}</span>
        <strong style={{ fontSize: "1rem", color: color }}>{title}</strong>
      </div>
      <div style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

function FileTree({ lines }) {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        borderRadius: "10px",
        padding: "1.2rem 1.4rem",
        fontFamily: "monospace",
        fontSize: "0.875rem",
        lineHeight: "1.9",
        overflowX: "auto",
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ color: line.color || "#cbd5e1" }}>
          {line.text}
        </div>
      ))}
    </div>
  );
}

function CompareTable({ rows }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
        <thead>
          <tr style={{ background: "#1e3a5f", color: "#fff" }}>
            {rows[0].map((h, i) => (
              <th key={i} style={{ padding: "0.7rem 1rem", textAlign: "left", fontWeight: 700 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #e2e8f0" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "0.65rem 1rem", color: "#334155" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StepItem({ n, title, color = "#2563eb", children }) {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "flex-start" }}>
      <div
        style={{
          minWidth: "32px",
          height: "32px",
          borderRadius: "50%",
          background: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.9rem",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        {n}
      </div>
      <div>
        <strong style={{ color: "#0f172a" }}>{title}</strong>
        <div style={{ fontSize: "0.88rem", color: "#475569", marginTop: "0.2rem", lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────── */

export default function TemaEstructuraWordPress() {
  return (
    <TopicLayout
      title="La estructura de WordPress: cómo se organiza una web"
      description="Comprender la arquitectura de WordPress es la base de todo trabajo profesional. En este tema aprenderás cómo se estructura el sistema por capas, qué papel tiene cada componente y cómo tomar decisiones fundamentadas cuando diseñas o desarrollas un sitio."
    >
      <article className="doc">

        {/* ══════════════ HERO ══════════════ */}
        <header className="doc-hero">
          <p className="doc-kicker">Tema · WordPress · Arquitectura del sistema</p>
          <h1>La estructura de WordPress: entender cómo funciona una web por dentro</h1>
          <p className="doc-lead">
            Muchos diseñadores aprenden WordPress a golpe de clic: instalan un tema, arrastran
            bloques con Elementor y publican. Pero cuando algo falla, cuando hay que tomar una
            decisión de diseño importante o cuando un cliente pregunta «¿cómo funciona esto?»,
            lo que marca la diferencia es tener una imagen clara de la arquitectura del sistema.
          </p>
          <p className="doc-lead">
            WordPress tiene capas bien definidas: el núcleo, el tema, los plugins, el contenido
            y la base de datos. Cada capa tiene responsabilidades concretas. Entenderlas no es
            teoría vacía: es lo que permite tomar decisiones correctas, evitar errores frecuentes
            y trabajar con solvencia profesional desde el primer proyecto.
          </p>

          <TipBox title="🎯 Objetivos del tema">
            <ul>
              <li>Comprender la <strong>arquitectura en capas</strong> de WordPress</li>
              <li>Conocer la <strong>estructura de carpetas</strong> en el servidor</li>
              <li>Entender los <strong>elementos estructurales</strong> de una página (header, content, sidebar, footer)</li>
              <li>Diferenciar entre <strong>tema clásico y tema de bloques</strong></li>
              <li>Comprender la <strong>jerarquía de plantillas</strong> de WordPress</li>
              <li>Saber desde dónde se controla <strong>cada parte del sitio</strong></li>
              <li>Entender la relación entre <strong>WordPress, Elementor y WooCommerce</strong></li>
            </ul>
            <p>
              <strong>Tiempo estimado:</strong> 2–3 horas ·{" "}
              <strong>Nivel:</strong> Básico–Intermedio ·{" "}
              <strong>Requisito:</strong> Haber instalado WordPress en local (LocalWP)
            </p>
          </TipBox>
        </header>

        {/* ══════════════ ÍNDICE ══════════════ */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li><a href="#arquitectura-capas">1. WordPress como sistema en capas</a></li>
            <li><a href="#estructura-carpetas">2. Estructura de carpetas en el servidor</a></li>
            <li><a href="#elementos-pagina">3. Elementos estructurales de una página</a></li>
            <li><a href="#el-tema">4. El tema: corazón visual del sitio</a></li>
            <li><a href="#clasico-vs-bloques">5. Temas clásicos vs temas de bloques</a></li>
            <li><a href="#plugins">6. Plugins: la capa de funcionalidades</a></li>
            <li><a href="#contenido-editor">7. El contenido: Gutenberg vs constructores visuales</a></li>
            <li><a href="#widgets">8. Widgets y áreas de widgets</a></li>
            <li><a href="#jerarquia-plantillas">9. La jerarquía de plantillas de WordPress</a></li>
            <li><a href="#donde-se-controla">10. Desde dónde se controla cada parte</a></li>
            <li><a href="#constructores">11. WordPress + Elementor: cuál controla qué</a></li>
            <li><a href="#estructura-tienda">12. Estructura en WooCommerce</a></li>
            <li><a href="#flujo-profesional">13. Flujo profesional de trabajo</a></li>
            <li><a href="#actividad">14. Actividad práctica</a></li>
          </ol>
        </nav>

<section id="arquitectura-general" className="doc-section">

<h2>1. Arquitectura general de WordPress</h2>

<p>
WordPress no es solo un editor de páginas. Es un sistema completo
de gestión de contenidos (CMS) que organiza una web mediante
varios niveles.
</p>

<p>
La estructura general puede representarse así:
</p>

<pre><code>
WordPress (núcleo del sistema)
       ↓
Tema activo
       ↓
Estructura del sitio
(Header - Content - Sidebar - Footer)
       ↓
Contenido de páginas
       ↓
Plugins y funcionalidades
</code></pre>

<p>
Cada uno de estos niveles tiene una función distinta.
</p>

<ul>
<li>WordPress gestiona el sistema.</li>
<li>El tema define la apariencia.</li>
<li>Los plugins añaden funciones.</li>
<li>El editor permite crear contenido.</li>
</ul>

<TipBox title="Idea clave">

<p>
WordPress separa estructura, diseño y contenido. Esto permite
modificar el diseño sin perder el contenido o añadir funciones
sin alterar la estructura principal.
</p>

</TipBox>

</section>

<section id="elementos-estructurales" className="doc-section">

<h2>2. Elementos estructurales de una página de WordPress</h2>

<p>
La mayoría de páginas web siguen una estructura bastante similar.
WordPress también se basa en esta organización clásica del diseño web.
</p>

<pre><code>
HEADER
Menú de navegación

CONTENIDO PRINCIPAL
(página o entrada)

SIDEBAR
(opcional)

FOOTER
</code></pre>

<h3>Header</h3>

<p>
La cabecera contiene normalmente el logotipo, el menú principal
y, en algunos casos, elementos adicionales como buscador o iconos
sociales.
</p>

<h3>Contenido</h3>

<p>
Es la parte central de la página. Aquí se coloca el contenido
creado con Gutenberg, Elementor u otros constructores.
</p>

<h3>Sidebar</h3>

<p>
La barra lateral es una zona secundaria donde pueden colocarse
elementos auxiliares como filtros, menús, productos destacados
o formularios.
</p>

<h3>Footer</h3>

<p>
El pie de página suele contener información institucional,
enlaces legales, datos de contacto o menús secundarios.
</p>

</section>

<section id="tema" className="doc-section">

<h2>3. El papel del tema en la estructura</h2>

<p>
El tema es el componente que define la estructura visual
de la web. Cada sitio WordPress tiene un único tema activo.
</p>

<p>
El tema determina:
</p>

<ul>
<li>La disposición de header, sidebar y footer.</li>
<li>La tipografía y colores.</li>
<li>La anchura del contenido.</li>
<li>Las áreas disponibles para widgets.</li>
</ul>

<p>
Por ejemplo, el tema Astra permite activar o desactivar
sidebars, modificar el header o cambiar la estructura
del footer sin necesidad de programar.
</p>

</section>

<section id="donde-se-controla" className="doc-section">

<h2>4. Desde dónde se controla la estructura del sitio</h2>

<p>
La estructura de WordPress no se controla desde un único lugar.
Dependiendo de lo que queramos modificar, utilizaremos diferentes
herramientas dentro del panel de administración.
</p>

<h3>Personalizador del tema</h3>

<p>
Ruta:
</p>

<p>
<strong>Apariencia → Personalizar</strong>
</p>

<p>
Permite modificar elementos estructurales del tema:
</p>

<ul>
<li>Header</li>
<li>Footer</li>
<li>Sidebars</li>
<li>Colores</li>
<li>Tipografía</li>
</ul>

<h3>Editor del sitio (en temas de bloques)</h3>

<p>
En temas modernos basados en bloques podemos editar
la estructura completa del sitio desde:
</p>

<p>
<strong>Apariencia → Editor</strong>
</p>

<p>
Aquí se modifican plantillas completas como:
</p>

<ul>
<li>Plantilla de página</li>
<li>Plantilla de entradas</li>
<li>Header</li>
<li>Footer</li>
</ul>

<h3>Gestión de widgets</h3>

<p>
Las áreas de widgets se gestionan desde:
</p>

<p>
<strong>Apariencia → Widgets</strong>
</p>

</section>

<section id="constructores" className="doc-section">

<h2>5. Relación con constructores como Elementor</h2>

<p>
Los constructores visuales como Elementor no sustituyen
la estructura del tema. Funcionan dentro de esa estructura.
</p>

<p>
Por ejemplo:
</p>

<pre><code>
Tema
Header

Elementor Page Builder
Contenido diseñado con Elementor

Footer
</code></pre>

<p>
Es decir, Elementor controla el contenido central
de la página, pero el tema sigue controlando el
header, el footer y muchas partes estructurales.
</p>

</section>

<section id="estructura-tienda" className="doc-section">

<h2>6. Estructura de una tienda WooCommerce</h2>

<p>
Cuando instalamos WooCommerce, el sistema añade
nuevos tipos de páginas dentro de la estructura
general de WordPress.
</p>

<p>
Las páginas más importantes de una tienda son:
</p>

<ul>
<li>Tienda (catálogo)</li>
<li>Producto individual</li>
<li>Carrito</li>
<li>Checkout</li>
<li>Mi cuenta</li>
</ul>

<p>
Estas páginas utilizan plantillas especiales
de WooCommerce que se integran dentro del tema.
</p>

</section>

<section id="widgets" className="doc-section">

<h2>7. Widgets en WordPress</h2>

<p>
Los widgets son pequeños módulos que permiten
añadir funcionalidades a zonas específicas
del tema, como la barra lateral o el footer.
</p>

<p>
Son una parte clásica de WordPress y permiten
añadir contenido sin programar.
</p>

<p>
Ejemplos de widgets:
</p>

<ul>
<li>Buscador</li>
<li>Menús</li>
<li>Categorías</li>
<li>Productos destacados</li>
<li>Mini carrito</li>
</ul>

<p>
Los widgets se colocan en áreas especiales
definidas por el tema llamadas
<strong>widget areas</strong>.
</p>

<TipBox title="Ejemplo típico">

<p>
En la barra lateral de una tienda podemos colocar
un widget de categorías y un filtro de precio
para ayudar a navegar por el catálogo.
</p>

</TipBox>

</section>

<section id="flujo-profesional" className="doc-section">

<h2>8. Flujo profesional para diseñar un sitio WordPress</h2>

<p>
Cuando se desarrolla una web profesional,
lo habitual es seguir un orden lógico
de trabajo.
</p>

<ol>
<li>Elegir el tema.</li>
<li>Configurar header y footer.</li>
<li>Definir la estructura general.</li>
<li>Crear páginas principales.</li>
<li>Diseñar contenido con bloques o constructor.</li>
<li>Añadir widgets o elementos auxiliares.</li>
</ol>

<PracticeBox title="Práctica recomendada">

<p>
Accede al panel de administración de WordPress
y localiza estos apartados:
</p>

<ul>
<li>Apariencia → Personalizar</li>
<li>Apariencia → Widgets</li>
<li>Apariencia → Menús</li>
<li>Páginas → Todas las páginas</li>
</ul>

<p>
Observa cómo cada uno controla una parte distinta
de la estructura del sitio.
</p>

</PracticeBox>

</section>
<section id="diagrama-arquitectura-wordpress" className="doc-section">

<h2>Diagrama de la arquitectura de WordPress</h2>

<p>
Para entender realmente cómo funciona WordPress es útil visualizar su
arquitectura como una serie de capas. Cada capa tiene una función
diferente dentro del sistema y todas trabajan juntas para generar
la página que ve el usuario.
</p>

<p>
Cuando un visitante accede a una página, WordPress combina el tema,
los plugins y el contenido para construir el resultado final.
</p>

<h3>Diagrama simplificado de WordPress</h3>

<pre><code>
USUARIO (navegador)
        │
        ▼
┌──────────────────────────────┐
│        WORDPRESS CORE        │
│  Motor del sistema (CMS)     │
└──────────────────────────────┘
        │
        ▼
┌──────────────────────────────┐
│            TEMA              │
│  Define diseño y estructura  │
│  Header / Sidebar / Footer   │
└──────────────────────────────┘
        │
        ▼
┌──────────────────────────────┐
│        CONTENIDO             │
│  Páginas y entradas          │
│  Gutenberg / Elementor       │
└──────────────────────────────┘
        │
        ▼
┌──────────────────────────────┐
│          PLUGINS             │
│  WooCommerce, SEO, forms     │
│  Añaden funcionalidades      │
└──────────────────────────────┘
        │
        ▼
┌──────────────────────────────┐
│     WIDGETS Y BLOQUES        │
│  Elementos auxiliares        │
│  sidebar, footer, filtros    │
└──────────────────────────────┘
        │
        ▼
PÁGINA FINAL QUE VE EL USUARIO
</code></pre>

<h3>Cómo se combinan todas las capas</h3>

<p>
Cada una de estas capas cumple una función distinta dentro del sistema:
</p>

<ul>

<li>
<strong>WordPress Core</strong><br/>
Es el núcleo del sistema. Gestiona usuarios, base de datos,
publicación de contenido y funcionamiento general del sitio.
</li>

<li>
<strong>Tema</strong><br/>
Controla el diseño visual y la estructura general de la página.
Define elementos como el header, el footer o las barras laterales.
</li>

<li>
<strong>Contenido</strong><br/>
Son las páginas o entradas que creamos con el editor de WordPress
(Gutenberg) o con constructores visuales como Elementor.
</li>

<li>
<strong>Plugins</strong><br/>
Añaden nuevas funcionalidades al sistema, como una tienda
(WooCommerce), formularios, SEO o sistemas de reserva.
</li>

<li>
<strong>Widgets y bloques</strong><br/>
Permiten insertar pequeños módulos en zonas específicas del tema,
como filtros, menús, productos destacados o información adicional.
</li>

</ul>

<TipBox title="Idea clave">

<p>
WordPress funciona separando responsabilidades:  
el tema controla la estructura, el editor crea el contenido
y los plugins añaden funcionalidades.
</p>

</TipBox>

<h3>Ejemplo real de cómo se construye una página</h3>

<p>
Imaginemos una página de producto en una tienda WooCommerce.
La página que ve el usuario se genera combinando varias capas.
</p>

<pre><code>
WordPress
   ↓
Tema Astra
   ↓
Plantilla de producto
   ↓
Contenido del producto
(imágenes, precio, descripción)
   ↓
WooCommerce
(carrito, variaciones, stock)
   ↓
Bloques o widgets adicionales
(productos relacionados, filtros)
</code></pre>

<p>
El resultado final es una página completa que parece una sola
pieza, pero en realidad está construida con varios componentes
del sistema.
</p>

<WarningBox title="Error común">

<p>
Muchos usuarios piensan que Elementor o Gutenberg controlan
toda la web. En realidad solo controlan el contenido de la
página. La estructura general sigue dependiendo del tema.
</p>

</WarningBox>

</section>
<section id="flujo-render-wordpress" className="doc-section">

<h2>Cómo se genera una página de WordPress paso a paso</h2>

<p>
Para entender realmente cómo funciona WordPress es útil observar qué ocurre
cuando un usuario visita una página del sitio. Aunque desde fuera parece
que la página ya existe, en realidad WordPress la construye en tiempo real
combinando distintos elementos del sistema.
</p>

<p>
Este proceso se llama <strong>renderizado de la página</strong> y consiste
en reunir el contenido, el tema y los plugins para generar el resultado
final que aparece en el navegador.
</p>

<h3>Diagrama del proceso de generación de una página</h3>

<pre><code>
1. El usuario escribe la URL en el navegador
            │
            ▼
2. El servidor recibe la petición
            │
            ▼
3. WordPress se ejecuta
            │
            ▼
4. WordPress consulta la base de datos
   (páginas, productos, imágenes)
            │
            ▼
5. El tema aplica la estructura
   Header
   Contenido
   Sidebar
   Footer
            │
            ▼
6. Los plugins añaden funcionalidades
   WooCommerce
   Formularios
   SEO
            │
            ▼
7. El editor muestra el contenido
   Gutenberg o Elementor
            │
            ▼
8. Widgets o bloques añaden módulos
   filtros, productos, menús
            │
            ▼
9. Se genera la página final en HTML
            │
            ▼
10. El navegador del usuario muestra la página
</code></pre>

<h3>Interpretación del diagrama</h3>

<p>
Este proceso explica por qué WordPress es tan flexible. Cada parte del
sistema tiene una responsabilidad distinta y todas trabajan juntas para
construir la página final.
</p>

<ul>

<li>
<strong>WordPress</strong> gestiona el sistema y conecta todos los
componentes.
</li>

<li>
<strong>La base de datos</strong> guarda el contenido: páginas,
entradas, productos e imágenes.
</li>

<li>
<strong>El tema</strong> determina la estructura visual del sitio
(header, contenido, sidebar y footer).
</li>

<li>
<strong>Los plugins</strong> añaden funciones como tiendas,
formularios o SEO.
</li>

<li>
<strong>El editor</strong> genera el contenido de cada página.
</li>

</ul>

<TipBox title="Idea fundamental">

<p>
Una página de WordPress no es un archivo fijo. Es el resultado de
combinar contenido, diseño y funcionalidades cada vez que un usuario
visita el sitio.
</p>

</TipBox>

<h3>Ejemplo aplicado a una tienda WooCommerce</h3>

<p>
En una tienda online el proceso sería similar, pero con elementos
específicos de WooCommerce.
</p>

<pre><code>
Usuario visita un producto
        │
        ▼
WordPress carga el sistema
        │
        ▼
WooCommerce obtiene datos del producto
        │
        ▼
El tema aplica la plantilla de producto
        │
        ▼
Se muestran imágenes, precio y descripción
        │
        ▼
Plugins añaden funciones extra
(reseñas, filtros, recomendaciones)
        │
        ▼
El navegador muestra la ficha completa
</code></pre>

<WarningBox title="Conclusión importante">

<p>
Comprender este flujo ayuda a tomar mejores decisiones cuando diseñamos
una web. Sabremos qué parte depende del tema, qué parte depende de los
plugins y qué parte corresponde al contenido.
</p>

</WarningBox>

</section>

</article>

</TopicLayout>

);

}