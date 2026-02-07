import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema12Index() {
  return (
    <TopicLayout
      title="M12 · Casos prácticos y proyectos"
      subtitle="Actividad 1: Prototipado con Stitch + réplica en WordPress (Astra + Gutenberg)"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 12</div>
          <h1>Actividad 1 · De Stitch a WordPress</h1>
          <p className="doc-lead">
            En esta actividad crearás un prototipo en <strong>Stitch</strong> y lo replicarás en{" "}
            <strong>WordPress</strong> usando <strong>Astra + Gutenberg</strong>. Es tu primera web:
            vamos a trabajar con una estructura simple, clara y repetible.
          </p>
        </div>

        {/* ÍNDICE */}
        <div className="doc-index">
          <h2>Contenido de la actividad</h2>
          <ol>
            <li><a href="#objetivo">12.1 Objetivo y páginas del proyecto</a></li>
            <li><a href="#reglas-diseno">12.2 Estilo y reglas de diseño</a></li>
            <li><a href="#estructura-global">12.3 Estructura global (header y footer)</a></li>
            <li><a href="#paginas">12.4 Estructura de las 3 páginas (Inicio, Recetas, Contacto)</a></li>
            <li><a href="#imagenes">12.5 BUSCAMOS IMÁGENES (recursos y normas)</a></li>
            <li><a href="#mini-tarea">12.6 Mini-tarea antes de Stitch</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Aprenderás a trabajar como en un proyecto real: primero <strong>prototipamos</strong> (diseño y estructura),
            y después <strong>construimos</strong> en WordPress con bloques.
          </p>
          <p>
            Lo importante no es “decorar”, sino dominar <strong>estructura</strong>, <strong>jerarquía</strong> y{" "}
            <strong>componentes reutilizables</strong>.
          </p>
        </TipBox>

        {/* 12.1 */}
        <section className="doc-section" id="objetivo">
          <h2>12.1 Objetivo y páginas del proyecto</h2>
          <p>
            Vamos a crear un prototipo de una web educativa para la marca{" "}
            <strong>“Cocina Sana en Familia”</strong>. Después, la replicaremos en WordPress con{" "}
            <strong>Gutenberg + Astra</strong>.
          </p>

          <PracticeBox title="✅ Entregable (lo que debe existir al final)">
            <ul>
              <li><strong>3 páginas:</strong> Inicio, Recetas y Contacto.</li>
              <li><strong>Menú:</strong> enlaces a esas 3 páginas.</li>
              <li><strong>Contenido visual:</strong> recetas destacadas, categorías, galería.</li>
              <li><strong>Contacto:</strong> formulario + datos + FAQ.</li>
              <li><strong>Diseño coherente:</strong> mismo estilo en todas las páginas.</li>
            </ul>
          </PracticeBox>
        </section>

        {/* 12.2 */}
        <section className="doc-section" id="reglas-diseno">
          <h2>12.2 Estilo y reglas de diseño</h2>
          <p>
            Como es tu primera web, vamos a simplificar sin perder profesionalidad: diseño limpio, ordenado
            y fácil de replicar.
          </p>

          <ActivityBox title="🎨 Estilo (lo que pediremos a Stitch)">
            <ul>
              <li><strong>Estilo:</strong> familiar, saludable, moderno y amigable.</li>
              <li><strong>Colores:</strong> verde como principal; fondo blanco; grises suaves; verde oscuro en textos/botones.</li>
              <li><strong>Tipografía:</strong> sans serif, legible.</li>
              <li><strong>Reglas:</strong> mucho aire (espaciado), tarjetas redondeadas, botones visibles.</li>
              <li><strong>Jerarquía:</strong> H1, H2, párrafos claros.</li>
              <li><strong>Responsive:</strong> debe verse bien en móvil y escritorio.</li>
              <li><strong>Reutilización:</strong> la misma tarjeta para recetas y categorías.</li>
            </ul>
          </ActivityBox>

          <WarningBox>
            <p>
              <strong>Regla de oro:</strong> no queremos efectos complejos. Solo hover sencillo en botones y tarjetas.
              El objetivo es aprender estructura y bloques, no “magia visual”.
            </p>
          </WarningBox>
        </section>

        {/* 12.3 */}
        <section className="doc-section" id="estructura-global">
          <h2>12.3 Estructura global (header y footer)</h2>
          <p>
            Las 3 páginas deben compartir la misma estructura. Esto facilita la réplica en WordPress
            y te enseña a mantener consistencia.
          </p>

          <PracticeBox title="🧱 Header (fijo / sticky)">
            <ul>
              <li><strong>Logo textual:</strong> “Cocina Sana en Familia”</li>
              <li><strong>Menú:</strong> Inicio · Recetas · Contacto</li>
              <li><strong>Botón destacado:</strong> “Ver recetas”</li>
            </ul>
          </PracticeBox>

          <PracticeBox title="🧾 Footer (simple)">
            <ul>
              <li><strong>Texto:</strong> “© 2026 Cocina Sana en Familia”</li>
              <li><strong>Enlaces:</strong> Inicio · Recetas · Contacto</li>
              <li><strong>Redes:</strong> iconos de Instagram y YouTube</li>
            </ul>
          </PracticeBox>
        </section>

        {/* 12.4 */}
        <section className="doc-section" id="paginas">
          <h2>12.4 Estructura de las 3 páginas</h2>

          <details className="dd" open>
            <summary>Página 1 · Inicio (presentación + navegación)</summary>
            <div className="dd-body">
              <p>
                Inicio debe presentar la marca y guiar al usuario hacia recetas, categorías y contacto.
              </p>
              <ul>
                <li>
                  <strong>Hero:</strong> H1 “Cocina sana para disfrutar en familia”, texto breve (2 líneas),
                  botón primario “Recetas destacadas”, botón secundario “Ver categorías”, imagen de familia cocinando o comida saludable.
                </li>
                <li>
                  <strong>Recetas destacadas:</strong> grid de 6 tarjetas con imagen, título, etiqueta (15 min / Fácil / Vegetariana) y botón “Ver receta”.
                </li>
                <li>
                  <strong>Categorías:</strong> 4 tarjetas con icono + nombre + mini descripción: Desayunos, Comidas, Cenas, Postres saludables.
                </li>
                <li>
                  <strong>Galería mosaico:</strong> 8 imágenes con título H2 “Ideas reales, recetas reales”.
                </li>
                <li>
                  <strong>CTA final:</strong> “¿Quieres recetas nuevas cada semana?” + botones “Contactar” y “Ver recetas”.
                </li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Página 2 · Recetas (listado + filtros visuales)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Hero pequeño:</strong> H1 “Recetas” + texto “Explora recetas fáciles, sanas y familiares.”</li>
                <li><strong>Filtros visuales:</strong> chips/botones: Todas, Desayunos, Comidas, Cenas, Postres.</li>
                <li><strong>Barra de búsqueda (solo visual):</strong> “Buscar receta…”</li>
                <li><strong>Grid de 9 recetas:</strong> imagen, título, tiempo, dificultad, tipo, botón “Ver receta”.</li>
                <li><strong>Callout lateral:</strong> “Consejo saludable” + “Planifica 3 comidas base y reutiliza ingredientes.”</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Página 3 · Contacto (formulario + datos + FAQ)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Hero:</strong> H1 “Contacto” + “¿Tienes dudas o quieres proponer una receta?”</li>
                <li>
                  <strong>Formulario:</strong> Nombre, Email, Asunto (Consulta / Proponer receta / Colaboración), Mensaje, botón “Enviar”.
                </li>
                <li>
                  <strong>Tarjetas informativas:</strong>
                  Email hola@cocinasanaenfamilia.com · Ubicación Sevilla, España · Horario L–V 10:00–14:00
                </li>
                <li>
                  <strong>FAQ (3 preguntas):</strong>
                  ¿Publicáis recetas cada semana? · ¿Puedo enviar mi receta? · ¿Tenéis recetas para niños?
                </li>
              </ul>
            </div>
          </details>
        </section>

        {/* 12.5 */}
        <section className="doc-section" id="imagenes">
          <h2>12.5 BUSCAMOS IMÁGENES (recursos y normas)</h2>
          <p>
            Antes de tocar Stitch, vamos a reunir imágenes legales y de calidad. En un proyecto real, esto
            se hace siempre al principio para asegurar coherencia visual.
          </p>

          <PracticeBox title="📌 Bancos recomendados">
            <ul>
              <li>
                <strong>Pexels</strong> (principal): fotos gratuitas, uso comercial permitido, buena calidad, ideal para comida y familia.
                <br />
                <em>Búsquedas:</em> healthy food · family cooking · vegetarian food · healthy breakfast
              </li>
              <li>
                <strong>Unsplash</strong>: fotos muy estéticas, perfecto para Hero y galerías.
              </li>
              <li>
                <strong>Pixabay</strong>: banco de apoyo, también iconos e ilustraciones.
              </li>
            </ul>
          </PracticeBox>

          <PracticeBox title="🔹 Iconos para categorías">
            <ul>
              <li><strong>Flaticon</strong>: usa iconos gratuitos, del mismo estilo y revisa si pide atribución.</li>
              <li><strong>Alternativas:</strong> Heroicons, Bootstrap Icons.</li>
            </ul>
          </PracticeBox>

          <WarningBox>
            <p><strong>🚫 No se puede usar:</strong> Google Imágenes, Pinterest, Instagram ni fotos de otras webs.</p>
            <p>Aunque “estén en internet”, <strong>no son libres</strong>.</p>
          </WarningBox>

          <TipBox title="🧠 Frase clave (aprendizaje real)">
            <p>
              No todas las imágenes de internet se pueden usar. Un buen diseñador sabe <strong>dónde buscar</strong>.
            </p>
          </TipBox>
        </section>

        {/* 12.6 */}
        <section className="doc-section" id="mini-tarea">
          <h2>12.6 Mini-tarea antes de Stitch</h2>

          <ActivityBox title="📝 Tarea inmediata (obligatoria)">
            <ol>
              <li>Elige <strong>1 imagen</strong> para el Hero (Inicio).</li>
              <li>Elige <strong>3 imágenes</strong> para recetas (cualquier receta).</li>
              <li>Guarda los enlaces (o descarga y nombra los archivos).</li>
            </ol>
          </ActivityBox>

          <TipBox title="✅ Cuando termines…">
            <p>
              Cuando tengas esas imágenes listas, pasamos al siguiente paso del proyecto:
              <strong> crear la página Inicio en Stitch</strong>.
            </p>
            <p><strong>Mensaje para continuar:</strong> “Seguimos con el paso 2”. 🍽️</p>
          </TipBox>
        </section>
      </div>
    </TopicLayout>
  );
}
