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
            <li><a href="#herramientas-ai">12.3 Herramientas de prototipado (Stitch, Lovable, Base44)</a></li>
            <li><a href="#estructura-global">12.4 Estructura global (header y footer)</a></li>
            <li><a href="#paginas">12.5 Estructura de las 3 páginas (Inicio, Recetas, Contacto)</a></li>
            <li><a href="#imagenes">12.6 Imágenes: bancos, licencias, tamaño, naming y ALT</a></li>
            <li><a href="#mini-tarea">12.7 Mini-tarea antes de Stitch</a></li>
            <li><a href="#evaluacion">12.8 Evaluación (rúbrica rápida)</a></li>
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

          <details className="dd" open>
            <summary>¿Qué vas a aprender de verdad con este proyecto?</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Planificación:</strong> pensar antes de construir (estructura y secciones).</li>
                <li><strong>Maquetación por bloques:</strong> contenedores, columnas, jerarquía visual.</li>
                <li><strong>Consistencia:</strong> repetir patrones de tarjetas y estilos sin inventar cada página.</li>
                <li><strong>Accesibilidad y SEO básico:</strong> especialmente con imágenes (ALT) y headings.</li>
              </ul>
            </div>
          </details>

          <PracticeBox title="✅ Entregable (lo que debe existir al final)">
            <ul>
              <li><strong>3 páginas:</strong> Inicio, Recetas y Contacto.</li>
              <li><strong>Menú:</strong> enlaces a esas 3 páginas.</li>
              <li><strong>Contenido visual:</strong> recetas destacadas, categorías, galería.</li>
              <li><strong>Contacto:</strong> formulario + datos + FAQ.</li>
              <li><strong>Diseño coherente:</strong> mismo estilo en todas las páginas.</li>
            </ul>
          </PracticeBox>

          <TipBox title="✅ Definición de “coherente” (sin discusión)">
            <ul>
              <li>Mismos estilos de botón (primario/ secundario) en las 3 páginas.</li>
              <li>Mismo estilo de tarjetas (radio, sombra, padding, hover).</li>
              <li>Misma jerarquía: H1 (una vez) + H2 para secciones.</li>
            </ul>
          </TipBox>
        </section>

        {/* 12.2 */}
        <section className="doc-section" id="reglas-diseno">
          <h2>12.2 Estilo y reglas de diseño</h2>
          <p>
            Como es tu primera web, vamos a simplificar sin perder profesionalidad: diseño limpio, ordenado
            y fácil de replicar.
          </p>

          <ActivityBox title="🎨 Estilo (lo que pediremos al prototipo)">
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

          <details className="dd">
            <summary>Regla didáctica: “menos componentes, mejor”</summary>
            <div className="dd-body">
              <p>
                En tu primer proyecto no queremos 25 bloques distintos. Queremos que aprendas a dominar 4-6
                componentes y repetirlos:
              </p>
              <ul>
                <li>Sección (Grupo)</li>
                <li>Grid de tarjetas (Columnas / grid)</li>
                <li>Tarjeta receta</li>
                <li>Tarjeta categoría</li>
                <li>CTA final</li>
              </ul>
            </div>
          </details>

          <WarningBox>
            <p>
              <strong>Regla de oro:</strong> no queremos efectos complejos. Solo hover sencillo en botones y tarjetas.
              El objetivo es aprender estructura y bloques, no “magia visual”.
            </p>
          </WarningBox>
        </section>

        {/* 12.3 */}
        <section className="doc-section" id="herramientas-ai">
          <h2>12.3 Herramientas de prototipado (Stitch, Lovable, Base44)</h2>
          <p>
            Vamos a usar herramientas que aceleran el prototipado. Ojo: son <strong>asistentes</strong>, no sustitutos
            del trabajo de una persona que diseña y desarrolla.
          </p>

          <details className="dd" open>
            <summary>Qué es Stitch y por qué lo usamos aquí</summary>
            <div className="dd-body">
              <p>
                <strong>Stitch</strong> es una herramienta para generar un prototipo (estructura + estilo) muy rápido.
                Nos interesa por una razón: te ayuda a <strong>visualizar</strong> el resultado antes de construir en WordPress.
              </p>
              <ul>
                <li>Te da una propuesta de layout (hero, tarjetas, secciones).</li>
                <li>Te ayuda a concretar colores, tipografías y espaciados.</li>
                <li>Te permite “copiar la idea” y montarla con bloques.</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>¿Y Lovable y Base44 para qué me sirven?</summary>
            <div className="dd-body">
              <p>
                <strong>Lovable</strong> y <strong>Base44</strong> te pueden ayudar como:
              </p>
              <ul>
                <li><strong>Generadores de ideas:</strong> secciones que te faltan, textos, estructura.</li>
                <li><strong>Prototipos rápidos:</strong> para comparar alternativas (A/B) antes de construir.</li>
                <li><strong>Checklist:</strong> “¿qué secciones debería tener una landing?”</li>
              </ul>

              <p>
                <strong>Importante:</strong> el objetivo del módulo NO es “que la IA haga la web”, sino que tú aprendas
                a <strong>tomar decisiones</strong> y a <strong>replicar</strong> en WordPress.
              </p>
            </div>
          </details>

          <WarningBox title="⚠️ IA en clase: regla profesional">
            <p>
              Estas herramientas ayudan a <strong>acelerar</strong>, pero nunca sustituyen a un desarrollador:
              una web real necesita criterios técnicos, accesibilidad, SEO, rendimiento, seguridad, contenidos,
              legalidad (cookies/privacidad) y mantenimiento.
            </p>
          </WarningBox>

          <PracticeBox title="✅ Cómo las vamos a usar (sin trampas)">
            <ol>
              <li>Usas Stitch/Lovable/Base44 para <strong>ver una propuesta</strong>.</li>
              <li>Te quedas con <strong>una</strong> y la conviertes en “plano” (secciones + componentes).</li>
              <li>Construyes en WordPress con Gutenberg y Astra, con tus imágenes y tu criterio.</li>
            </ol>
          </PracticeBox>
        </section>

        {/* 12.4 */}
        <section className="doc-section" id="estructura-global">
          <h2>12.4 Estructura global (header y footer)</h2>
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

          <TipBox title="Consejo pro">
            Antes de construir páginas, crea primero el menú y comprueba que navegación + footer quedan idénticos.
            Eso te evita “parches” después.
          </TipBox>
        </section>

        {/* 12.5 */}
        <section className="doc-section" id="paginas">
          <h2>12.5 Estructura de las 3 páginas</h2>

          <details className="dd" open>
            <summary>Página 1 · Inicio (presentación + navegación)</summary>
            <div className="dd-body">
              <p>
                Inicio debe presentar la marca y guiar al usuario hacia recetas, categorías y contacto.
              </p>

              <details className="dd dd-nested" open>
                <summary>Sección 1: Hero</summary>
                <div className="dd-body">
                  <ul>
                    <li>
                      <strong>H1:</strong> “Cocina sana para disfrutar en familia”
                    </li>
                    <li>
                      <strong>Texto breve:</strong> 2 líneas (beneficio claro, sin relleno).
                    </li>
                    <li>
                      <strong>CTA:</strong> Botón primario “Recetas destacadas” + secundario “Ver categorías”.
                    </li>
                    <li>
                      <strong>Imagen:</strong> familia cocinando o plato saludable.
                    </li>
                  </ul>
                </div>
              </details>

              <details className="dd dd-nested" open>
                <summary>Sección 2: Recetas destacadas</summary>
                <div className="dd-body">
                  <ul>
                    <li><strong>Grid:</strong> 6 tarjetas.</li>
                    <li><strong>Tarjeta:</strong> imagen + título + etiqueta (15 min / Fácil / Vegetariana) + botón “Ver receta”.</li>
                  </ul>
                </div>
              </details>

              <details className="dd dd-nested">
                <summary>Sección 3: Categorías</summary>
                <div className="dd-body">
                  <ul>
                    <li><strong>4 tarjetas</strong> con icono + nombre + mini descripción.</li>
                    <li><strong>Categorías:</strong> Desayunos, Comidas, Cenas, Postres saludables.</li>
                  </ul>
                </div>
              </details>

              <details className="dd dd-nested">
                <summary>Sección 4: Galería mosaico</summary>
                <div className="dd-body">
                  <ul>
                    <li><strong>8 imágenes</strong> coherentes (misma luz / mismo estilo).</li>
                    <li>H2 “Ideas reales, recetas reales”.</li>
                  </ul>
                </div>
              </details>

              <details className="dd dd-nested">
                <summary>Sección 5: CTA final</summary>
                <div className="dd-body">
                  <ul>
                    <li><strong>Frase:</strong> “¿Quieres recetas nuevas cada semana?”</li>
                    <li><strong>Botones:</strong> “Contactar” y “Ver recetas”.</li>
                  </ul>
                </div>
              </details>
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

              <TipBox title="Didáctico: esto es un patrón">
                Aunque los filtros sean “visual”, el objetivo es aprender a maquetar un bloque de filtros
                que luego podrías convertir en algo real con plugins o código.
              </TipBox>
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
                  <strong>Tarjetas informativas:</strong> Email · Ubicación · Horario
                </li>
                <li>
                  <strong>FAQ (3 preguntas):</strong> ¿Publicáis recetas cada semana? · ¿Puedo enviar mi receta? · ¿Tenéis recetas para niños?
                </li>
              </ul>

              <WarningBox title="Cuidado con formularios en local">
                En local muchas veces el formulario “parece” que envía pero no llega a ningún sitio.
                En esta actividad nos interesa el diseño y la estructura; el envío real lo veremos en otra práctica.
              </WarningBox>
            </div>
          </details>
        </section>

        {/* 12.6 */}
        <section className="doc-section" id="imagenes">
          <h2>12.6 Imágenes: bancos, licencias, tamaño, naming y ALT</h2>
          <p>
            Antes de tocar Stitch, vamos a reunir imágenes legales y de calidad. En un proyecto real, esto
            se hace siempre al principio para asegurar coherencia visual.
          </p>

          <details className="dd" open>
            <summary>Por qué las imágenes son “medio proyecto”</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Marca:</strong> una mala foto baja la percepción de calidad.</li>
                <li><strong>Rendimiento:</strong> imágenes pesadas = web lenta.</li>
                <li><strong>SEO:</strong> nombres de archivo + ALT ayudan a posicionar.</li>
                <li><strong>Accesibilidad:</strong> el ALT describe la imagen a personas con lector de pantalla.</li>
                <li><strong>Legal:</strong> si no tienes licencia, no se usa (punto).</li>
              </ul>
            </div>
          </details>

          <PracticeBox title="📌 Bancos recomendados (fotos)">
            <ul>
              <li><strong>Pexels</strong> (principal): comida, familia, lifestyle, gratis y fácil.</li>
              <li><strong>Unsplash</strong>: estética top para Hero y galerías.</li>
              <li><strong>Pixabay</strong>: apoyo (también ilustraciones e iconos).</li>
              <li><strong>Foodiesfeed</strong>: especializado en fotografía de comida (muy útil).</li>
              <li><strong>Burst (Shopify)</strong>: fotos gratuitas con look comercial.</li>
              <li><strong>Rawpixel</strong>: tiene opciones gratis (revisar licencia de cada recurso).</li>
            </ul>
          </PracticeBox>

          <PracticeBox title="🧩 Iconos e ilustraciones (categorías)">
            <ul>
              <li><strong>Heroicons</strong> / <strong>Bootstrap Icons</strong>: consistentes y limpios.</li>
              <li><strong>Flaticon</strong>: útil, pero revisa si requiere atribución.</li>
              <li><strong>unDraw</strong>: ilustraciones gratuitas (estilo consistente).</li>
              <li><strong>SVG Repo</strong>: colección enorme de SVG (revisar licencia).</li>
            </ul>
          </PracticeBox>

          <WarningBox title="🚫 No se puede usar (aunque esté fácil)">
            <p>
              Google Imágenes, Pinterest, Instagram, “me lo encontré por ahí”… No. Si no hay licencia clara,
              <strong> no se usa</strong>.
            </p>
          </WarningBox>

          <details className="dd">
            <summary>Reglas de calidad (para que no parezca amateur)</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Coherencia:</strong> no mezcles estilos (unas fotos oscuras y otras súper blancas).</li>
                <li><strong>Héroe:</strong> una imagen potente y limpia (sin mil objetos).</li>
                <li><strong>Tarjetas:</strong> fotos con encuadre similar (mejor si son “platos” centrados).</li>
                <li><strong>Evita texto en la imagen</strong> (siempre mejor poner el texto en la web).</li>
              </ul>
            </div>
          </details>

          <details className="dd" open>
            <summary>SEO + Accesibilidad: cómo escribir un buen ALT</summary>
            <div className="dd-body">
              <p>
                El atributo <code>alt</code> sirve para <strong>describir la imagen</strong>. Ayuda a:
              </p>
              <ul>
                <li><strong>Accesibilidad:</strong> lectores de pantalla (personas ciegas o con baja visión).</li>
                <li><strong>SEO:</strong> Google entiende mejor de qué trata la imagen y tu página.</li>
              </ul>

              <p><strong>Reglas rápidas:</strong></p>
              <ul>
                <li>Describe lo que se ve, en 6–14 palabras.</li>
                <li>No pongas “imagen de…”, ve directo.</li>
                <li>Si es decorativa (no aporta), ALT vacío: <code>alt=""</code>.</li>
                <li>No keyword stuffing: no repitas “recetas saludables” 6 veces.</li>
              </ul>

              <p><strong>Ejemplos buenos:</strong></p>
              <ul>
                <li><code>Familia cocinando ensalada en una cocina luminosa</code></li>
                <li><code>Bol de avena con fruta para desayuno saludable</code></li>
                <li><code>Tacos vegetarianos con verduras y salsa casera</code></li>
              </ul>

              <p><strong>Ejemplos malos:</strong></p>
              <ul>
                <li><code>imagen1</code></li>
                <li><code>recetas saludables recetas saludables recetas saludables</code></li>
                <li><code>foto</code></li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>Rendimiento: tamaños, formatos y nombres de archivo</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Formato recomendado:</strong> WebP (si puedes) o JPG (fotos).</li>
                <li><strong>Hero:</strong> 1600–2000 px de ancho (sin pasarse) y optimizada.</li>
                <li><strong>Tarjetas:</strong> 800–1200 px de ancho, recorte consistente.</li>
                <li><strong>Naming:</strong> guiones y descriptivo: <code>ensalada-familia-cocina.webp</code></li>
              </ul>

              <TipBox title="Regla de oro de rendimiento">
                Si una imagen pesa más de 400–500 KB para una tarjeta, casi seguro puedes optimizarla más.
              </TipBox>
            </div>
          </details>

          <PracticeBox title="✅ Checklist de imágenes (obligatorio)">
            <ul>
              <li>Licencia clara ✅</li>
              <li>Mismo estilo visual ✅</li>
              <li>Nombre de archivo descriptivo ✅</li>
              <li>ALT escrito con intención ✅</li>
              <li>Peso optimizado ✅</li>
            </ul>
          </PracticeBox>
        </section>

        {/* 12.7 */}
        <section className="doc-section" id="mini-tarea">
          <h2>12.7 Mini-tarea antes de Stitch</h2>

          <ActivityBox title="📝 Tarea inmediata (obligatoria)">
            <ol>
              <li>Elige <strong>1 imagen</strong> para el Hero (Inicio).</li>
              <li>Elige <strong>3 imágenes</strong> para recetas (cualquier receta).</li>
              <li>Elige <strong>1 icono</strong> por categoría (4 iconos en total).</li>
              <li>Guarda los enlaces (o descarga y nombra los archivos correctamente).</li>
              <li>Escribe el <strong>ALT</strong> de cada imagen en un documento (5–8 ALTs).</li>
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

        {/* 12.8 */}
        {/* 12.X (extra) */}
<section className="doc-section" id="optimizacion-imagenes">
  <h2>12.8 Optimización de imágenes (calidad + velocidad)</h2>

  <p>
    Una web puede estar “bien diseñada”, pero si las imágenes pesan mucho se vuelve lenta. Optimizar imágenes
    es una habilidad profesional: <strong>mejoras rendimiento</strong>, <strong>SEO</strong> y{" "}
    <strong>experiencia de usuario</strong> sin perder calidad.
  </p>

  <details className="dd" open>
    <summary>Objetivo real</summary>
    <div className="dd-body">
      <p>
        No buscamos “la imagen más pequeña posible”, sino el equilibrio:
        <strong> buena calidad</strong> + <strong>peso razonable</strong>.
      </p>
      <ul>
        <li>
          Una imagen de tarjeta (grid) suele poder bajar a <strong>150–400 KB</strong> manteniendo calidad.
        </li>
        <li>
          Un hero puede necesitar más calidad, pero normalmente debería quedar en <strong>&lt; 700–900 KB</strong>.
        </li>
      </ul>
    </div>
  </details>

  <details className="dd" open>
    <summary>Paso a paso (método que funciona siempre)</summary>
    <div className="dd-body">
      <ol>
        <li>
          <strong>Elige el tamaño correcto antes de subir</strong>: no subas una foto de 6000px si tu web la
          mostrará a 900px.
        </li>
        <li>
          <strong>Recorta</strong> para que el encuadre sea coherente (tarjetas todas iguales).
        </li>
        <li>
          <strong>Redimensiona</strong>:
          <ul>
            <li>
              <strong>Tarjetas:</strong> 800–1200 px de ancho (según tu diseño)
            </li>
            <li>
              <strong>Galería:</strong> 1000–1400 px de ancho
            </li>
            <li>
              <strong>Hero:</strong> 1600–2000 px de ancho (máximo)
            </li>
          </ul>
        </li>
        <li>
          <strong>Convierte a un formato eficiente</strong>:
          <ul>
            <li>
              <strong>WebP</strong> (recomendado) para fotos y casi todo.
            </li>
            <li>
              <strong>SVG</strong> para iconos (siempre que sea posible).
            </li>
            <li>
              <strong>PNG</strong> solo si necesitas transparencia real (si no, mejor WebP).
            </li>
          </ul>
        </li>
        <li>
          <strong>Comprime</strong> ajustando la calidad:
          <ul>
            <li>
              Empieza por calidad <strong>70–80</strong> (suele verse genial).
            </li>
            <li>
              Si todavía pesa mucho, baja poco a poco (65, 60…).
            </li>
          </ul>
        </li>
        <li>
          <strong>Nombra el archivo</strong> de forma descriptiva:
          <code>tacos-vegetarianos-cena-saludable.webp</code>
        </li>
        <li>
          <strong>Sube a WordPress</strong> y añade ALT correcto (descripción útil, no spam).
        </li>
      </ol>
    </div>
    <TipBox title="🖼️ ¿Qué es WebP y por qué nos interesa tanto?">
  <p>
    <strong>WebP</strong> es un formato de imagen moderno creado por Google, diseñado específicamente para
    <strong>webs rápidas</strong>. Su gran ventaja es que ofrece <strong>la misma calidad visual</strong>
    que PNG o JPG, pero con <strong>mucho menos peso</strong>.
  </p>

  <details className="dd dd-nested" open>
    <summary>¿Por qué usar WebP en una web?</summary>
    <div className="dd-body">
      <ul>
        <li>
          Reduce el peso de las imágenes entre un <strong>25% y un 70%</strong>.
        </li>
        <li>
          Mejora la <strong>velocidad de carga</strong> (especialmente en móvil).
        </li>
        <li>
          Ayuda al <strong>SEO</strong> (Google premia webs rápidas).
        </li>
        <li>
          Mantiene <strong>transparencia real</strong> (como PNG).
        </li>
        <li>
          Es compatible con todos los navegadores modernos.
        </li>
      </ul>
    </div>
  </details>

  <details className="dd dd-nested">
    <summary>PNG vs WebP (regla práctica)</summary>
    <div className="dd-body">
      <ul>
        <li>
          PNG → buena calidad, <strong>pero muy pesado</strong>.
        </li>
        <li>
          WebP → misma calidad, <strong>mucho más ligero</strong>.
        </li>
        <li>
          Si el PNG <strong>no necesita transparencia real</strong>, casi siempre debe convertirse a WebP.
        </li>
      </ul>
    </div>
  </details>

  <WarningBox title="⚠️ Caso real (IA / Nano Banana)">
    <p>
      Muchas herramientas de IA (como Nano Banana) generan imágenes en <strong>PNG por defecto</strong>.
      Esto <strong>no significa</strong> que deban usarse así en la web.
    </p>
    <p>
      En la mayoría de los casos son <strong>fotos</strong> (platos, personas, fondos) y
      <strong>NO necesitan transparencia</strong>.
    </p>
    <p>
      👉 <strong>Solución profesional:</strong> convertir esos PNG a WebP antes de subirlos a WordPress.
    </p>
  </WarningBox>

  <details className="dd dd-nested" open>
    <summary>Cómo convertir PNG a WebP (paso a paso)</summary>
    <div className="dd-body">
      <ol>
        <li>
          Abre una herramienta de conversión:
          <ul>
            <li><strong>Squoosh</strong> (recomendado)</li>
            <li>TinyPNG (solo compresión, no siempre WebP)</li>
            <li>Iloveimg</li>
          </ul>
        </li>
        <li>
          Carga tu imagen PNG.
        </li>
        <li>
          Selecciona <strong>WebP</strong> como formato de salida.
        </li>
        <li>
          Ajusta la calidad:
          <ul>
            <li>Empieza en <strong>75–80</strong>.</li>
            <li>Si pesa mucho, baja poco a poco (70, 65…).</li>
          </ul>
        </li>
        <li>
          Revisa que visualmente se vea igual.
        </li>
        <li>
          Descarga la imagen WebP.
        </li>
      </ol>
    </div>
  </details>

  <details className="dd dd-nested">
    <summary>Cuándo NO convertir a WebP</summary>
    <div className="dd-body">
      <ul>
        <li>
          Logos o iconos que ya están en <strong>SVG</strong>.
        </li>
        <li>
          Gráficos muy simples donde el PNG ya pesa muy poco.
        </li>
        <li>
          Recursos que necesitas editar constantemente (mejor conservar el original).
        </li>
      </ul>
    </div>
  </details>

  <PracticeBox title="🧪 Mini ejercicio recomendado">
    <p>
      Elige una imagen PNG generada por IA (Nano Banana, etc.) y:
    </p>
    <ol>
      <li>Comprueba su peso original.</li>
      <li>Conviértela a WebP con calidad 75.</li>
      <li>Compara peso y calidad visual.</li>
      <li>Decide si el WebP es válido para web.</li>
    </ol>
    <p>
      <strong>Conclusión esperada:</strong> misma imagen, mucho menos peso.
    </p>
  </PracticeBox>

  <TipBox title="Regla profesional que quiero que recuerdes">
    <p>
      <strong>PNG es un formato de trabajo.  
      WebP es un formato de publicación.</strong>
    </p>
  </TipBox>
</TipBox>
<div className="table-wrap">
  <table className="table table-zebra">
    <caption>Impacto real de convertir imágenes a WebP</caption>
    <thead>
      <tr>
        <th scope="col">Tipo de imagen</th>
        <th scope="col">Formato original</th>
        <th scope="col">Peso antes</th>
        <th scope="col">Formato optimizado</th>
        <th scope="col">Peso después</th>
        <th scope="col">Reducción</th>
        <th scope="col">Conclusión</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Hero (imagen IA)</th>
        <td>PNG</td>
        <td>2,3 MB</td>
        <td>WebP (calidad 75)</td>
        <td>420 KB</td>
        <td>−82%</td>
        <td>Mis­ma calidad visual con una carga muchísimo más rápida</td>
      </tr>

      <tr>
        <th scope="row">Tarjeta de receta</th>
        <td>PNG</td>
        <td>780 KB</td>
        <td>WebP (calidad 75)</td>
        <td>210 KB</td>
        <td>−73%</td>
        <td>Grid más ligero y scroll fluido</td>
      </tr>

      <tr>
        <th scope="row">Imagen de galería</th>
        <td>JPG</td>
        <td>950 KB</td>
        <td>WebP (calidad 80)</td>
        <td>520 KB</td>
        <td>−45%</td>
        <td>Menor peso sin pérdida perceptible</td>
      </tr>

      <tr>
        <th scope="row">Miniatura / preview</th>
        <td>PNG</td>
        <td>320 KB</td>
        <td>WebP (calidad 70)</td>
        <td>95 KB</td>
        <td>−70%</td>
        <td>Carga instantánea en listados</td>
      </tr>

      <tr>
        <th scope="row">Ilustración sencilla</th>
        <td>PNG</td>
        <td>410 KB</td>
        <td>WebP (calidad 80)</td>
        <td>140 KB</td>
        <td>−66%</td>
        <td>Mismo aspecto con mucho menos peso</td>
      </tr>

      <tr>
        <th scope="row">Logo</th>
        <td>PNG</td>
        <td>180 KB</td>
        <td>SVG</td>
        <td>22 KB</td>
        <td>−88%</td>
        <td>Escalable, nítido y ultraligero</td>
      </tr>
    </tbody>
  </table>
</div>
<TipBox title="🧩 Plugins para convertir imágenes a WebP (y cómo usarlos bien)">
  <p>
    En WordPress existen plugins que pueden <strong>convertir automáticamente</strong> las imágenes a WebP
    y servirlas de forma optimizada. Son muy útiles en proyectos reales, pero es importante entender
    <strong>qué hacen</strong> y <strong>qué no hacen</strong>.
  </p>

  <details className="dd dd-nested" open>
    <summary>Plugins más habituales</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Smush</strong> → Optimiza imágenes al subir y puede generar WebP. Muy sencillo para empezar,
          pero limitado en versión gratuita.
        </li>
        <li>
          <strong>Imagify</strong> → Convierte JPG/PNG a WebP con buena compresión. Permite elegir nivel de calidad.
        </li>
        <li>
          <strong>ShortPixel</strong> → Muy completo y profesional. Genera WebP y conserva los originales.De los mejores en su versión gratuita, aunque con límite mensual de optimizaciones.
        </li>
        <li>
          <strong>Optimole</strong> → Sirve imágenes optimizadas “al vuelo” con CDN. Muy potente, pero más opaco
          para aprender.
        </li>
        <li>
          <strong>EWWW Image Optimizer</strong> → Optimización local en el servidor. Más técnico, menos automático.
        </li>
      </ul>
    </div>
  </details>

  <WarningBox title="⚠️ Lo que un plugin NO arregla">
    <ul>
      <li>Un PNG gigante subido sin recortar.</li>
      <li>Imágenes mal encuadradas o incoherentes.</li>
      <li>Fotos sin optimizar tamaño (4000–6000 px innecesarios).</li>
      <li>ALT inexistente o mal escrito.</li>
    </ul>
    <p>
      Si la imagen de partida es mala, el plugin solo maquilla el problema.
    </p>
  </WarningBox>

  <details className="dd dd-nested" open>
    <summary>La forma correcta de trabajar (criterio profesional)</summary>
    <div className="dd-body">
      <ol>
        <li>
          <strong>Preparar la imagen antes</strong>: recortar, redimensionar y decidir el formato.
        </li>
        <li>
          <strong>Convertir manualmente a WebP</strong> cuando venga de IA (PNG por defecto).
        </li>
        <li>
          <strong>Nombrar bien el archivo</strong> (descriptivo y con guiones).
        </li>
        <li>
          <strong>Subir a WordPress</strong> con ALT correcto (SEO + accesibilidad).
        </li>
        <li>
          <strong>Usar el plugin</strong> como refuerzo y automatización, no como solución mágica.
        </li>
      </ol>
    </div>
  </details>

  <TipBox title="🧠 Regla que quiero que recuerdes">
    <p>
      <strong>Primero optimiza la persona.  
      Después automatiza el plugin.</strong>
    </p>
  </TipBox>

  <PracticeBox title="🧪 Mini práctica recomendada">
    <p>
      Sube una imagen WebP ya optimizada y observa qué hace el plugin.
      Luego sube la misma imagen sin optimizar y compara resultados.
    </p>
    <p>
      <strong>Conclusión esperada:</strong> el plugin ayuda, pero no sustituye el criterio.
    </p>
  </PracticeBox>
</TipBox>

  </details>
  

  <details className="dd">
    <summary>Herramientas recomendadas (sin complicarte)</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Squoosh</strong>: redimensionar + convertir a WebP + comprimir (muy usado).
        </li>
        <li>
          <strong>TinyPNG / TinyJPG</strong>: compresión rápida (ojo: no siempre convierte a WebP).
        </li>
        <li>
          <strong>Iloveimg</strong>: redimensionar y comprimir de forma simple.
        </li>
        <li>
          <strong>Canva</strong>: útil para recortes rápidos (luego exporta y comprime).
        </li>
      </ul>

      <TipBox title="Truco pro">
        Optimiza <strong>antes</strong> de subir. Subir “a lo bestia” y confiar en que WordPress lo arregle
        suele dar imágenes pesadas y web lenta.
      </TipBox>
    </div>
  </details>
  <div className="table-wrap">
  <table className="table table-zebra">
    <caption>Guía rápida de optimización de imágenes</caption>
    <thead>
      <tr>
        <th scope="col">Uso de la imagen</th>
        <th scope="col">Ancho recomendado</th>
        <th scope="col">Peso objetivo</th>
        <th scope="col">Formato ideal</th>
        <th scope="col">Notas importantes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Hero / cabecera</th>
        <td>1600–2000 px</td>
        <td>&lt; 900 KB</td>
        <td>WebP</td>
        <td>
          Imagen potente y limpia. Evita texto incrustado. Cuida mucho el encuadre.
        </td>
      </tr>

      <tr>
        <th scope="row">Imagen principal de sección</th>
        <td>1200–1600 px</td>
        <td>&lt; 600 KB</td>
        <td>WebP</td>
        <td>
          Mantén coherencia de estilo entre secciones. Misma luz y color.
        </td>
      </tr>

      <tr>
        <th scope="row">Tarjetas (recetas, servicios)</th>
        <td>800–1200 px</td>
        <td>&lt; 400 KB</td>
        <td>WebP</td>
        <td>
          Todas las tarjetas deben tener el mismo ratio para que el grid se vea ordenado.
        </td>
      </tr>

      <tr>
        <th scope="row">Galería / mosaico</th>
        <td>1000–1400 px</td>
        <td>&lt; 500 KB</td>
        <td>WebP</td>
        <td>
          Evita mezclar estilos (oscuro/claro). Mejor menos imágenes y bien optimizadas.
        </td>
      </tr>

      <tr>
        <th scope="row">Miniaturas / previews</th>
        <td>400–600 px</td>
        <td>&lt; 150 KB</td>
        <td>WebP</td>
        <td>
          Prioriza velocidad. Aquí el detalle fino no es tan importante.
        </td>
      </tr>

      <tr>
        <th scope="row">Iconos</th>
        <td>Vectorial</td>
        <td>&lt; 50 KB</td>
        <td>SVG</td>
        <td>
          Siempre que puedas usa SVG. Escala perfecto y pesa muy poco.
        </td>
      </tr>

      <tr>
        <th scope="row">Logos</th>
        <td>Según diseño</td>
        <td>&lt; 100 KB</td>
        <td>SVG / WebP</td>
        <td>
          SVG si es posible. Fondo transparente solo si es necesario.
        </td>
      </tr>

      <tr>
        <th scope="row">Ilustraciones</th>
        <td>800–1600 px</td>
        <td>&lt; 400 KB</td>
        <td>SVG / WebP</td>
        <td>
          Mantén el mismo estilo gráfico en toda la web.
        </td>
      </tr>
    </tbody>
  </table>
</div>


  <WarningBox title="Errores típicos que quiero que evites">
    <ul>
      <li>
        Subir una imagen enorme (4000–6000px) “porque se ve mejor”. No se ve mejor: solo pesa más.
      </li>
      <li>
        Usar PNG para fotos (PNG es para gráficos/transparentes; fotos mejor WebP/JPG).
      </li>
      <li>
        No recortar: cada tarjeta queda con una altura distinta y el grid se ve desordenado.
      </li>
      <li>
        Poner ALT como “foto1” o meter keywords sin sentido.
      </li>
    </ul>
  </WarningBox>

  <PracticeBox title="✅ Mini ejercicio (obligatorio)">
    <p>
      Elige <strong>una</strong> imagen de receta y crea <strong>2 versiones optimizadas</strong>:
    </p>
    <ol>
      <li>
        Versión para tarjeta: <strong>1200px</strong> de ancho en WebP, objetivo <strong>&lt; 400 KB</strong>.
      </li>
      <li>
        Versión para hero: <strong>1800px</strong> de ancho en WebP, objetivo <strong>&lt; 900 KB</strong>.
      </li>
    </ol>
    <p>
      Entrega: nombre del archivo + peso final + ALT propuesto.
    </p>
  </PracticeBox>

  <TipBox title="Checklist final (siempre antes de publicar)">
    <ul>
      <li>¿El tamaño es el correcto para donde se muestra?</li>
      <li>¿Está en WebP (o SVG si es icono)?</li>
      <li>¿Pesa lo razonable?</li>
      <li>¿El nombre del archivo es descriptivo?</li>
      <li>¿El ALT describe la imagen de forma útil?</li>
    </ul>
  </TipBox>
</section>

      </div>
    </TopicLayout>
  );
}
