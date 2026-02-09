import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function RutaWordPressDesdeCero() {
  return (
    <TopicLayout
      title="Ruta para empezar con WordPress desde cero"
      kicker="Proyecto · Primeros pasos"
      description="Una guía paso a paso para que el alumnado configure WordPress, entienda tema vs plantillas, elija un creador (Gutenberg/Elementor), y deje listo el sitio con páginas y menú."
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">WordPress · Inicio rápido</div>
          <h1>Ruta de inicio: de “instalado” a “sitio listo para construir”</h1>
          <p className="doc-lead">
            Aquí empezamos desde cero y seguimos un orden profesional. Si te saltas pasos,
            luego aparecen problemas típicos: enlaces raros, menús que no se ven, fuentes que cambian,
            o páginas que no salen como portada.
          </p>

          <div className="callout tip">
            <strong>Regla del curso:</strong> primero dejamos WordPress “bien configurado”
            (ajustes + estructura), luego elegimos <strong>tema</strong>, después el <strong>creador</strong>,
            y por último montamos páginas y menú.
          </div>
        </div>

        {/* ÍNDICE */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Índice</h2>
          <ol>
            <li><a href="#primeros-pasos">Primeros pasos: ajustes imprescindibles</a></li>
            <li><a href="#usuario">Usuarios: seguridad y orden</a></li>
            <li><a href="#permalinks">Enlaces permanentes (permalinks)</a></li>
            <li><a href="#tema-vs-plantilla">Tema vs plantilla: qué controla cada cosa</a></li>
            <li><a href="#fuentes">Fuentes: elegir 2 y pre-cargar Google Fonts</a></li>
            <li><a href="#gratis-pro">Comparativa: versión gratis vs Pro</a></li>
            <li><a href="#starter-templates">Starter Templates y plantillas recientes</a></li>
            <li><a href="#creadores">Creadores de páginas: Gutenberg vs Elementor</a></li>
            
            <li><a href="#paginas">Crear páginas y asignar portada</a></li>
            <li><a href="#menu">Añadir páginas al menú y reordenar</a></li>
            <li><a href="#actividades">Actividades y checklist de entrega</a></li>
          </ol>
        </nav>

        {/* 1) PRIMEROS PASOS */}
        <section id="primeros-pasos" className="doc-section">
          <h2>1) Primeros pasos: ajustes imprescindibles</h2>

          <details className="dd" open>
            <summary>Qué configuramos primero (y por qué)</summary>
            <div className="dd-body">
              <p>
                Antes de tocar diseño, dejamos WordPress con una base correcta.
                Esto evita el 80% de problemas de principiante.
              </p>

              <ol>
                <li>
                  <strong>Ajustes → Generales:</strong> título del sitio, descripción corta, zona horaria,
                  formato de fecha/hora.
                </li>
                <li>
                  <strong>Ajustes → Lectura:</strong> (más tarde) definiremos la portada, pero ahora revisa
                  que entiendes la diferencia entre “últimas entradas” y “página estática”.
                </li>
                <li>
                  <strong>Ajustes → Comentarios:</strong> desactiva comentarios si es una web corporativa/landing.
                </li>
                <li>
                  <strong>Ajustes → Medios:</strong> revisa tamaños de miniaturas (no hace falta obsesionarse, pero
                  conviene saber dónde se controla).
                </li>
              </ol>

              <div className="callout warn">
                <strong>Error típico:</strong> empezar a diseñar sin permalinks ni portada.
                Luego “no encuentro la página” o “sale /?p=123”.
              </div>
            </div>
          </details>
        </section>

        {/* 2) USUARIO */}
        <section id="usuario" className="doc-section">
          <h2>2) Usuario: seguridad y orden</h2>

          <details className="dd">
            <summary>Qué debe hacer cada alumno con su usuario</summary>
            <div className="dd-body">
              <p>
                En un proyecto real no trabajamos con “admin” para todo. Creamos usuarios con intención.
              </p>

              <ul>
                <li><strong>Nombre visible:</strong> define el “Nombre a mostrar públicamente”.</li>
                <li><strong>Contraseña:</strong> única y fuerte (gestor de contraseñas recomendado).</li>
                <li><strong>Correo:</strong> correcto (recuperación y notificaciones).</li>
                <li><strong>Rol:</strong> si es un proyecto en equipo, no todos son administradores.</li>
              </ul>

              <div className="callout tip">
                <strong>Hábito pro:</strong> crea un usuario “Editor” para trabajar el contenido y deja “Admin”
                solo para ajustes/instalación.
              </div>
            </div>
          </details>
        </section>

        {/* 3) PERMALINKS */}
        <section id="permalinks" className="doc-section">
          <h2>3) Permalinks: nombre de la entrada</h2>

          <details className="dd" open>
            <summary>Configuración obligatoria: enlaces permanentes</summary>
            <div className="dd-body">
              <p>
                Esto se hace <strong>sí o sí</strong> al principio:
                <strong> Ajustes → Enlaces permanentes → “Nombre de la entrada”</strong>.
              </p>

              <div className="callout tip">
                <strong>¿Por qué?</strong> Porque tendrás URLs limpias (mejor para SEO y para compartir).
              </div>

              <div className="callout warn">
                <strong>Si no lo haces:</strong> te pueden salir URLs tipo <code>/?p=123</code> y
                luego cambiarlo “a mitad” puede romper enlaces si ya publicaste mucho.
              </div>

              <PracticeBox title="Mini práctica (2 minutos)">
                <ol>
                  <li>Ve a Ajustes → Enlaces permanentes.</li>
                  <li>Selecciona <strong>Nombre de la entrada</strong>.</li>
                  <li>Guarda cambios.</li>
                  <li>Crea una página de prueba y comprueba que la URL es “bonita”.</li>
                </ol>
              </PracticeBox>
            </div>
          </details>
        </section>

        {/* 4) TEMA VS PLANTILLA */}
        <section id="tema-vs-plantilla" className="doc-section">
          <h2>4) Tema vs plantilla: lo que el alumnado debe entender</h2>

          <details className="dd" open>
  <summary>Concepto clave: el tema NO crea tu web</summary>
  <div className="dd-body">
    <p>
      Esta frase hay que memorizarla:
      <strong> el tema controla el diseño y la estructura base, pero no “te crea” la web.</strong>
    </p>

    <p>
      En WordPress, una web se construye siempre combinando <strong>varias capas</strong>.
      Si no entiendes estas capas, es muy fácil perderse o depender de plantillas sin saber
      realmente qué estás haciendo.
    </p>

    <div className="table-wrap" tabIndex={0}>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Qué es realmente</th>
            <th>Qué controla</th>
            <th>Ejemplos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Tema</th>
            <td>La base visual y estructural del sitio</td>
            <td>Colores, tipografías, layout, cabecera, pie, responsive</td>
            <td>Astra · GeneratePress · Kadence</td>
          </tr>
          <tr>
            <th scope="row">Plantilla (template)</th>
            <td>Diseño prehecho reutilizable</td>
            <td>Estructura inicial de una página o sección</td>
            <td>Landing “Agencia”, Home “Portfolio”</td>
          </tr>
          <tr>
            <th scope="row">Creador de páginas</th>
            <td>Herramienta para construir el contenido</td>
            <td>Bloques, columnas, textos, imágenes, botones</td>
            <td>Gutenberg · Elementor · Bricks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="callout warning">
      <strong>Error muy común:</strong> pensar que “instalar un tema” significa que la web ya está hecha.
      <br />
      El tema solo pone las reglas del juego. <strong>La web la construyes tú.</strong>
    </div>

    <h4>🧠 Cómo se construye una web WordPress (modelo mental correcto)</h4>
    <ol>
      <li>Instalas un <strong>tema</strong> (define el aspecto general).</li>
      <li>Usas un <strong>creador de páginas</strong> para construir el contenido.</li>
      <li>Opcionalmente partes de una <strong>plantilla</strong> para ahorrar tiempo.</li>
      <li>Personalizas con <strong>bloques, ajustes y CSS</strong>.</li>
    </ol>

    <div className="callout tip">
      <strong>En este curso:</strong>
      <ul>
        <li>Trabajaremos siempre con <strong>un tema ligero</strong> + <strong>Gutenberg</strong>.</li>
        <li>Las plantillas sirven para acelerar, <strong>no para sustituir el aprendizaje</strong>.</li>
        <li>Aprenderás a modificar y entender lo que usas, no solo a “arrastrar bloques”.</li>
      </ul>
    </div>

    <div className="callout info">
      <strong>Nota importante:</strong> existen sistemas donde el tema y el constructor son la misma cosa
      (como Bricks). Los conocerás como referencia profesional, pero aquí aprenderás el modelo estándar
      que funciona en cualquier WordPress.
    </div>
  </div>
</details>

        </section>

        {/* 5) FUENTES */}
        <section id="fuentes" className="doc-section">
          <h2>5) Fuentes: elegir 2 (y listo) + preload Google Fonts</h2>

          <details className="dd" open>
            <summary>Selección recomendada: Poppins o Lato (titulares) + Roboto (texto)</summary>
            <div className="dd-body">
              <p>
                Para no marear al alumnado: elegimos un sistema simple de tipografías.
              </p>

              <ul>
                <li><strong>Opción A (moderna):</strong> Poppins (titulares) + Roboto (texto).</li>
                <li><strong>Opción B (sobria):</strong> Lato (titulares) + Roboto (texto).</li>
              </ul>

              <div className="callout warn">
                <strong>Regla:</strong> máximo 2 familias tipográficas. Si metes 4, el diseño se ve “amateur”.
              </div>

              <details className="dd">
                <summary>¿Qué significa “preload Google Fonts” y cuándo lo tocamos?</summary>
                <div className="dd-body">
                  <p>
                    “Preload” es una técnica para cargar fuentes antes y evitar parpadeos o cambios
                    de tipografía al cargar la página. En WordPress lo normal es:
                  </p>
                  <ol>
                    <li>Primero elegir fuentes en el tema (Astra suele permitirlo).</li>
                    <li>Si el sitio lo necesita (optimización), usamos un plugin de rendimiento o ajustes del tema.</li>
                  </ol>

                  <div className="callout tip">
                    <strong>En clase:</strong> primero que funcione y se vea bien.
                    La optimización avanzada (preload) va después.
                  </div>
                </div>
              </details>
            </div>
          </details>
        </section>

        {/* 6) GRATIS VS PRO */}
        <section id="gratis-pro" className="doc-section">
          <h2>6) Comparativa: versión gratis vs Pro</h2>

          <details className="dd">
            <summary>¿Qué suele aportar una versión pro?</summary>
            <div className="dd-body">
              <p>
                La versión gratis suele permitir construir un sitio completo.
                La Pro normalmente aporta: más controles, más cabeceras/pies, plantillas avanzadas,
                y opciones de diseño “finas”.
              </p>

              <ul>
                <li><strong>Gratis:</strong> suficiente para aprender y publicar un sitio básico.</li>
                <li><strong>Pro:</strong> acelera y permite más personalización (sin tanto CSS extra).</li>
              </ul>

              <div className="callout tip">
                <strong>Criterio docente:</strong> que el alumno sepa qué se puede hacer “solo con gratis”
                y qué se compra por comodidad/velocidad.
              </div>
            </div>
          </details>
        </section>

      {/* 7) STARTER TEMPLATES */}
<section id="starter-templates" className="doc-section">
  <h2>7) Starter Templates y plantillas recientes</h2>

  <details className="dd" open>
    <summary>Por qué usamos plantillas (y cómo no depender de ellas)</summary>
    <div className="dd-body">
      <p>
        Las <strong>starter templates</strong> sirven para arrancar rápido (ej. “Agencia digital”),
        pero el objetivo del curso es que el alumnado sepa:
        <strong> editar, sustituir contenido y reconstruir secciones</strong>, no solo “usar lo que viene hecho”.
      </p>

      <ol>
        <li>Elige una plantilla cercana al objetivo del proyecto.</li>
        <li>Importa y revisa: páginas, menú, cabecera y footer.</li>
        <li>Identifica qué controla el <strong>tema</strong> y qué son <strong>bloques</strong>.</li>
        <li>Haz cambios controlados: textos, imágenes, colores y secciones.</li>
      </ol>

      <WarningBox title="Peligro habitual">
        Si importas 10 plantillas “para probar”, luego tienes contenido duplicado y caos.
        En clase importamos <strong>una sola plantilla</strong> y trabajamos sobre ella.
      </WarningBox>
    </div>
  </details>

  <details className="dd" open>
    <summary>Qué plantilla vamos a elegir en este proyecto</summary>
    <div className="dd-body">
      <p>
        Para nuestro proyecto <strong>“Cocina Sana en Familia”</strong> vamos a elegir una plantilla
        de tipo <strong>Agencia / Agencia Digital</strong> usando <strong>Gutenberg</strong>.
      </p>

      <p>
        Aunque el nombre no tenga que ver con cocina, <strong>la estructura es perfecta</strong> para
        adaptarla a una web de recetas:
      </p>

      <ul>
        <li>Hero claro con titular, texto y botones</li>
        <li>Secciones en columnas reutilizables</li>
        <li>Bloques tipo tarjetas (servicios → recetas)</li>
        <li>Llamadas a la acción (CTA)</li>
      </ul>

      <div className="callout tip">
        <strong>Criterio profesional:</strong> no elegimos la plantilla por el contenido,
        sino por la <strong>estructura</strong>. El contenido siempre se puede cambiar.
      </div>

      <div className="callout warn">
        Evitamos plantillas de tienda (WooCommerce), portfolios artísticos o blogs complejos.
        Nuestro objetivo es una <strong>landing clara y didáctica</strong>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Cómo importar la plantilla paso a paso</summary>
    <div className="dd-body">
      <ol>
        <li>Ve a <strong>Apariencia → Starter Templates</strong>.</li>
        <li>Selecciona <strong>Gutenberg</strong> como creador.</li>
        <li>Busca una plantilla tipo <strong>Agency / Digital Agency</strong>.</li>
        <li>Haz clic en <strong>Import Complete Site</strong>.</li>
        <li>
          Durante el asistente:
          <ul>
            <li>El logo se puede omitir (lo cambiaremos después).</li>
            <li>Colores y tipografías se pueden aceptar por defecto.</li>
          </ul>
        </li>
        <li>Finaliza la importación y espera a que termine.</li>
      </ol>

      <div className="callout tip">
        Tras la importación, WordPress ya tendrá páginas, menú y portada configurados.
      </div>
    </div>
  </details>

 <details className="dd" open>
  <summary>Cómo empezar a editar la plantilla (orden recomendado)</summary>
  <div className="dd-body">
    <p>
      No empezamos a tocar todo a la vez. Cuando importas una plantilla,
      WordPress <strong>crea contenido, menús y además instala plugins</strong>.
      Primero observamos, luego editamos.
    </p>

    <ol>
      <li>
        <strong>Páginas → Todas las páginas</strong><br />
        Identifica cuál es la página <strong>Inicio</strong> y qué otras páginas
        ha creado automáticamente la plantilla (About, Contact, Services, etc.).
      </li>

      <li>
        Entra en <strong>Inicio → Editar</strong> y comprueba dos cosas:
        <ul>
          <li>Que se abre con <strong>Gutenberg</strong> (editor de bloques).</li>
          <li>Que ves bloques (grupos, columnas, imágenes, botones…).</li>
        </ul>
      </li>

      <li>
        <strong>Antes de cambiar nada</strong>, recorre la página de arriba abajo
        y contesta mentalmente:
        <ul>
          <li>¿Dónde está el <strong>Hero</strong> (primera sección grande)?</li>
          <li>¿Qué secciones usan <strong>columnas</strong>?</li>
          <li>¿Qué bloques se repiten (tarjetas, botones, iconos)?</li>
          <li>¿Qué partes parecen “estructura” y cuáles “contenido”?</li>
        </ul>
      </li>

      <li>
        Ahora mira el <strong>menú lateral izquierdo</strong> del panel de WordPress.
        Verás que han aparecido <strong>nuevas opciones</strong> que tú no has instalado a mano:
        <ul>
          <li><strong>SureForms</strong></li>
          <li><strong>SureRank</strong></li>
          <li><strong>Spectra</strong></li>
        </ul>

        <p>
          Esto es normal: la plantilla ha instalado <strong>plugins de apoyo</strong>.
          No son páginas, ni menús, ni contenido visible directamente.
        </p>

        <ul>
          <li>
            <strong>SureForms:</strong> sirve para crear formularios (por ejemplo, la página Contacto).
          </li>
          <li>
            <strong>SureRank:</strong> plugin de SEO (no lo tocamos todavía).
          </li>
          <li>
            <strong>Spectra:</strong> añade bloques extra a Gutenberg (tarjetas, grids, iconos…).
          </li>
        </ul>

        <div className="callout tip">
          Estos plugins <strong>no se editan ahora</strong>.
          Solo necesitas saber <em>por qué están ahí</em>.
        </div>
      </li>

      <li>
        Empieza por lo más seguro (fase 1 de edición):
        <ul>
          <li>Cambiar <strong>textos</strong> (titulares y párrafos).</li>
          <li>Cambiar <strong>imágenes</strong>.</li>
          <li>
            <strong>No borrar secciones</strong>, no mover bloques grandes,
            no tocar aún header ni footer.
          </li>
        </ul>
      </li>

      <li>
        <strong>Guarda siempre</strong> y revisa el resultado en una pestaña nueva.
        Aprende a alternar:
        <ul>
          <li>Editor (cómo está hecho)</li>
          <li>Vista pública (cómo se ve)</li>
        </ul>
      </li>
    </ol>

    <div className="callout warn">
      Consejo:  
      borrar una sección entera “porque no me gusta”  
      sin entender qué función cumple ni si está conectada a otras páginas
      (menú, formulario, CTA, etc.).
      <br /><br />
      <strong>Primero se entiende la plantilla. Luego se adapta.</strong>
    </div>

    <div className="callout tip">
      <strong>Idea clave:</strong>  
      La plantilla ha creado <em>páginas + menú + plugins</em>.  
      Tu trabajo ahora no es “hacerla bonita”, sino
      <strong>leer lo que alguien ya ha construido</strong>.
    </div>
  </div>
</details>


  <details className="dd">
    <summary>Qué NO vamos a hacer todavía</summary>
    <div className="dd-body">
      <ul>
        <li>No vamos a cambiar el tema.</li>
        <li>No vamos a instalar 5 constructores.</li>
        <li>No vamos a tocar CSS avanzado.</li>
        <li>No vamos a optimizar rendimiento aún.</li>
      </ul>

      <div className="callout tip">
        <strong>Regla de oro:</strong> primero estructura y contenido,
        luego diseño fino y optimización.
      </div>
    </div>
  </details>
</section>


        {/* 8) CREADORES */}
        <section id="creadores" className="doc-section">
          <h2>8) Creadores de páginas: Gutenberg vs Elementor</h2>

          <details className="dd" open>
            <summary>Necesitas un tema y un creador</summary>
            <div className="dd-body">
              <p>
                En WordPress normalmente combinas:
                <strong> Tema (estructura) + Creador (contenido)</strong>.
              </p>

              <div className="table-wrap" tabIndex={0}>
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Creador</th>
                      <th>Ventajas</th>
                      <th>Cuándo lo uso en clase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Gutenberg</th>
                      <td>Ligero, nativo, ideal para aprender bloques y estructura real</td>
                      <td>Base del curso y proyectos tipo landing/blog</td>
                    </tr>
                    <tr>
                      <th scope="row">Elementor</th>
                      <td>Muy visual, rápido para layouts complejos, muchos widgets</td>
                      <td>Cuando queremos diseño “más libre” o cliente lo exige</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <details className="dd" open>
  <summary>¿Por qué empezamos con Gutenberg en el curso?</summary>
  <div className="dd-body">
    <p>
      Empezamos con <strong>Gutenberg</strong> porque es el editor nativo de WordPress y es la base
      que todo alumno debe dominar, incluso si más adelante usa Elementor u otro constructor.
    </p>

    <ol>
      <li>
        <strong>Es el estándar de WordPress:</strong> viene instalado de serie, no dependes de plugins
        externos para construir páginas.
      </li>
      <li>
        <strong>Aprendes “WordPress real”:</strong> bloques, estructura, jerarquía (H1-H2-H3), secciones,
        columnas, imágenes, botones… Todo lo básico que luego se aplica a cualquier herramienta.
      </li>
      <li>
        <strong>Rinde mejor en la mayoría de casos:</strong> suele ser más ligero que un constructor
        pesado, porque añade menos “capas” extra.
      </li>
      <li>
        <strong>Menos riesgo de dependencia:</strong> si un día cambias de tema o quitas plugins, el contenido
        suele quedar más “limpio” y recuperable.
      </li>
      <li>
        <strong>Es perfecto para landings y proyectos educativos:</strong> permite replicar diseños como el nuestro
        con bloques, patrones y algo de criterio (espaciado, tipografías, grid).
      </li>
    </ol>

    <div className="callout tip">
      <strong>Idea docente:</strong> Gutenberg te enseña a construir. Elementor te enseña a diseñar más rápido.
      Si no sabes construir, Elementor se convierte en “arrastrar sin entender”.
    </div>
  </div>
</details>

<details className="dd">
  <summary>¿Qué aporta Elementor que Gutenberg no da tan “fácil”?</summary>
  <div className="dd-body">
    <p>
      Elementor aporta sobre todo <strong>velocidad</strong> y <strong>control visual</strong>.
      No es que Gutenberg no pueda, es que en Elementor ciertas cosas se consiguen con menos fricción.
    </p>

    <ul>
      <li>
        <strong>Diseño más libre (drag & drop):</strong> posicionar elementos, controlar márgenes/padding
        y responsive con interfaz muy visual.
      </li>
      <li>
        <strong>Widgets listos:</strong> sliders, formularios avanzados, popups, tablas de precios,
        carruseles, acordeones… (dependiendo de versión y addons).
      </li>
      <li>
        <strong>Plantillas completas:</strong> montar una landing “agencia digital” en minutos y luego editar.
      </li>
      <li>
        <strong>Theme Builder:</strong> crear cabeceras, footers y plantillas de entradas/archivo desde el propio
        constructor (muy potente cuando se trabaja “todo con Elementor”).
      </li>
      <li>
        <strong>Consistencia visual:</strong> si el alumno no tiene criterio de diseño, Elementor “guía” más
        con estilos globales y componentes repetibles.
      </li>
    </ul>

    <div className="callout warn">
      <strong>Ojo:</strong> Elementor ayuda mucho si sabes lo que estás haciendo. Si no, puede generar páginas
      bonitas pero desordenadas (tamaños incoherentes, demasiadas secciones, exceso de efectos).
    </div>
  </div>
</details>

<details className="dd" open>
  <summary>¿Es mejor o peor usar Elementor? (respuesta sincera)</summary>
  <div className="dd-body">
    <p>
      No es “mejor” o “peor” de forma absoluta. Es una <strong>elección</strong> según el proyecto,
      el tiempo y el nivel del equipo.
    </p>

    <div className="table-wrap" tabIndex={0}>
     <div className="table-wrap" tabIndex={0}>
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>Creador</th>
        <th>Qué es</th>
        <th>Ventajas</th>
        <th>Cuándo lo uso en clase</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Gutenberg</th>
        <td>Editor nativo de WordPress (bloques)</td>
        <td>Ligero, estándar, enseña estructura real</td>
        <td>Base del curso y todos los proyectos</td>
      </tr>
      <tr>
        <th scope="row">Spectra</th>
        <td>Bloques extra para Gutenberg (plugin)</td>
        <td>Más diseño sin salir de Gutenberg</td>
        <td>Cuando usamos Astra y queremos más recursos visuales</td>
      </tr>
      <tr>
        <th scope="row">Elementor</th>
        <td>Constructor visual independiente</td>
        <td>Muy visual, rápido para layouts complejos</td>
        <td>Cuando el proyecto o el cliente lo exige</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    <details className="dd">
  <summary>¿Qué papel juega Spectra si usamos Astra?</summary>
  <div className="dd-body">
    <p>
      <strong>Spectra no es un creador distinto</strong>. Es un conjunto de bloques adicionales
      que amplían Gutenberg cuando trabajamos con temas como Astra.
    </p>

    <ul>
      <li>
        <strong>Seguimos usando Gutenberg:</strong> mismos conceptos, misma estructura.
      </li>
      <li>
        <strong>Más bloques visuales:</strong> grids, iconos, cards, sliders, llamadas a la acción.
      </li>
      <li>
        <strong>Aprendizaje progresivo:</strong> primero bloques nativos, luego Spectra.
      </li>
    </ul>

    <div className="callout tip">
      Spectra es ideal para aprender diseño sin abandonar el editor estándar de WordPress.
    </div>
  </div>
</details>
<details className="dd">
  <summary>Otros constructores que existen (para que te suenen)</summary>
  <div className="dd-body">
    <p>
      En el ecosistema WordPress existen otros constructores que puedes encontrar
      en proyectos reales, aunque no los usemos en el curso.
    </p>

    <ul>
      <li>
        <strong>Divi:</strong> tema + constructor todo en uno. Muy usado durante años,
        aún presente en muchos proyectos.
      </li>
      <li>
        <strong>Bricks:</strong> tema con constructor integrado, orientado a perfiles más técnicos
        y agencias. HTML y CSS muy limpios.
      </li>
    </ul>

    <div className="callout info">
      No necesitas dominarlos todos. Lo importante es <strong>reconocerlos</strong>
      cuando te encuentres un proyecto hecho con ellos.
    </div>
  </div>
</details>


    <div className="callout tip">
      <strong>Conclusión del curso:</strong> empezamos con Gutenberg porque es la base y te hace entender
      WordPress. Más adelante veremos Elementor como “herramienta de producción” para ciertos proyectos.
    </div>

    
  </div>
</details>


              <TipBox title="Regla para no liarse">
                Si algo “es global” (header/footer/layout) → míralo en el <strong>tema</strong>.
                Si algo “es contenido de una página” → míralo en el <strong>editor</strong> (Gutenberg/Elementor).
              </TipBox>
            </div>
          </details>
        </section>

       {/* 9) ELEMENTOR */}
<section id="elementor" className="doc-section">
  <h2>9) Elementor: uno de los constructores más usados en WordPress</h2>

  <details className="dd" open>
    <summary>Por qué debes conocer Elementor (aunque no lo usemos ahora)</summary>
    <div className="dd-body">
      <p>
        <strong>Elementor</strong> es uno de los creadores de páginas más utilizados en el ecosistema
        WordPress. Aunque en este curso trabajamos principalmente con <strong>Gutenberg</strong>,
        es muy probable que te encuentres proyectos hechos con Elementor en prácticas, trabajos reales
        o clientes.
      </p>

      <p>
        Por eso es importante <strong>entender qué es, qué aporta y cuándo se suele usar</strong>,
        aunque no sea nuestra herramienta principal de aprendizaje.
      </p>

      <div className="table-wrap" tabIndex={0}>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Elementor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tipo</th>
              <td>Constructor visual independiente (plugin)</td>
            </tr>
            <tr>
              <th scope="row">Forma de trabajar</th>
              <td>Drag & drop, edición visual en tiempo real</td>
            </tr>
            <tr>
              <th scope="row">Uso habitual</th>
              <td>Landings, webs de marketing, proyectos con mucho diseño</td>
            </tr>
            <tr>
              <th scope="row">Relación con el tema</th>
              <td>Funciona sobre cualquier tema (Astra, Hello, etc.)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout info">
        <strong>Idea clave:</strong> Elementor no sustituye a WordPress ni al tema.
        Es una herramienta para construir el contenido visual de las páginas.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Cuándo tiene sentido usar Elementor</summary>
    <div className="dd-body">
      <ul>
        <li>
          Cuando el proyecto exige <strong>diseños muy visuales o de marketing</strong>.
        </li>
        <li>
          Cuando el cliente ya tiene la web montada con Elementor.
        </li>
        <li>
          Cuando se necesita montar una landing compleja en muy poco tiempo.
        </li>
        <li>
          Cuando se trabaja con un equipo que ya domina Elementor.
        </li>
      </ul>

      <div className="callout warn">
        <strong>Advertencia docente:</strong> Elementor facilita mucho el diseño,
        pero si no se entiende antes la estructura (bloques, jerarquía, layout),
        puede llevar a “arrastrar sin comprender”.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Relación con lo que estamos aprendiendo en el curso</summary>
    <div className="dd-body">
      <p>
        Todo lo que aprendes con <strong>Gutenberg</strong> (estructura, secciones,
        columnas, jerarquía de contenidos, responsive) es conocimiento que se aplica
        también en Elementor.
      </p>

      <div className="callout tip">
        <strong>Regla del curso:</strong><br />
        Primero aprender a <strong>construir</strong> con Gutenberg.<br />
        Después, si el proyecto lo requiere, aprender a <strong>producir más rápido</strong>
        con Elementor.
      </div>
    </div>
  </details>
</section>

        {/* 10) PÁGINAS + PORTADA */}
        <section id="paginas" className="doc-section">
          <h2>10) Creamos páginas y asignamos la página de inicio</h2>

          <details className="dd" open>
            <summary>Orden recomendado para crear páginas</summary>
            <div className="dd-body">
              <p>
                Creamos primero la estructura mínima del sitio (páginas principales) y luego el menú.
              </p>

              <ol>
                <li><strong>Inicio</strong></li>
                <li><strong>Recetas</strong></li>
                <li><strong>Categorías</strong></li>
                <li><strong>Sobre nosotros</strong></li>
                <li><strong>Contacto</strong> (opcional)</li>
              </ol>

              <PracticeBox title="Paso clave: asignar la portada">
                <ol>
                  <li>Ve a <strong>Apariencia → Personalizar</strong> (o Ajustes → Lectura).</li>
                  <li>Busca <strong>“Página de inicio” / “Tu portada muestra”</strong>.</li>
                  <li>Elige <strong>“Una página estática”</strong> y selecciona <strong>Inicio</strong>.</li>
                  <li>Guarda y comprueba la web en una pestaña nueva.</li>
                </ol>
              </PracticeBox>

              <div className="callout tip">
                <strong>Explicación corta:</strong> “Inicio” es una página normal.
                La diferencia es que WordPress la usa como portada.
              </div>
            </div>
          </details>
        </section>

        {/* 11) MENÚ */}
        <section id="menu" className="doc-section">
          <h2>11) Añadir páginas al menú y reordenar</h2>

          <details className="dd" open>
            <summary>Ruta: Apariencia → Menús → Ver todas las páginas</summary>
            <div className="dd-body">
              <p>
                Aquí el alumnado suele atascarse porque crea páginas pero no las ve en la cabecera.
                La razón: <strong>faltan en el menú</strong>.
              </p>

              <ol>
                <li>Ve a <strong>Apariencia → Menús</strong>.</li>
                <li>En “Añadir elementos”, abre <strong>Páginas → Ver todas</strong>.</li>
                <li>Marca las páginas (Inicio, Recetas, Categorías, Sobre nosotros) y pulsa <strong>Añadir al menú</strong>.</li>
                <li>Arrastra para reordenar.</li>
                <li>En “Ubicación del menú”, asigna el menú a la zona principal (Primary / Header).</li>
                <li>Guarda menú.</li>
              </ol>

              <div className="callout tip">
                <strong>Truco:</strong> “Inicio” suele ir el primero.
                Si no quieres que aparezca, puedes ocultarlo y dejar el logo como enlace a Inicio,
                pero eso ya es decisión de diseño.
              </div>
            </div>
          </details>
        </section>

    <section className="doc-section" id="personalizar-hero">
  <h2>Empezamos a personalizar el Hero</h2>

  <details className="dd" open>
    <summary>¿Qué es un Hero en diseño web y por qué es tan importante?</summary>
    <div className="dd-body">
      <p>
        El <strong>Hero</strong> es la primera sección grande que aparece al entrar en una página web.
        En diseño web se utiliza para <strong>captar la atención</strong>, explicar rápidamente
        de qué trata el sitio y guiar al usuario hacia una acción concreta.
      </p>

      <p>
        Normalmente un Hero incluye:
      </p>

      <ul>
        <li>Un <strong>mensaje principal</strong> claro (título).</li>
        <li>Un <strong>texto de apoyo</strong> que explique el valor del proyecto.</li>
        <li>Una <strong>imagen de fondo</strong> llamativa.</li>
        <li>Un <strong>botón</strong> que invite a continuar (CTA).</li>
      </ul>

      <div className="callout tip">
        El Hero no es decoración: es la parte más importante de una landing.
      </div>
    </div>
  </details>

  <details className="dd" open>
    <summary>Cómo empezamos a personalizar nuestro Hero</summary>
    <div className="dd-body">
      <p>
        En este punto del proyecto comenzamos a <strong>personalizar el Hero</strong>.
        El objetivo no es cambiar todo a la vez, sino hacerlo con orden y criterio.
      </p>

      <ol>
        <li>
          Primero cambiamos los <strong>textos</strong> para que hablen de nuestro proyecto
          y no del contenido genérico de la plantilla.
        </li>
        <li>
          Después sustituimos la <strong>imagen de fondo</strong> por una relacionada
          con cocina y familia.
        </li>
        <li>
          Por último, ajustamos la <strong>transparencia</strong> del fondo usando un
          <strong>overlay</strong> para mejorar la legibilidad del texto.
        </li>
      </ol>

      <div className="callout warn">
        No hacemos transparente la imagen directamente:
        añadimos una capa semitransparente encima para que el texto se lea mejor.
      </div>

      <p>
        A partir de ahora, cada cambio que hagamos en el Hero debe responder siempre
        a una misma pregunta:
        <strong>¿se entiende mejor de qué trata la web?</strong>
      </p>
    </div>
  </details>
</section>
<section className="doc-section" id="spectra">
  <h2>¿Qué es Spectra y por qué aparece en nuestro WordPress?</h2>

  <details className="dd" open>
    <summary>Qué es Spectra (y por qué lo tenemos instalado)</summary>
    <div className="dd-body">
      <p>
        <strong>Spectra</strong> es un <strong>plugin de bloques para Gutenberg</strong>
        (antes llamado <em>Ultimate Addons for Gutenberg</em>).
      </p>

      <p>
        Su función es ampliar Gutenberg con <strong>bloques más avanzados</strong> que
        WordPress no trae de serie, como:
      </p>

      <ul>
        <li>Contenedores (Container)</li>
        <li>Botones avanzados</li>
        <li>Features / tarjetas</li>
        <li>Iconos</li>
        <li>Overlays, fondos, gradientes</li>
      </ul>

      <p>
        En nuestro caso, <strong>Spectra no lo hemos instalado manualmente</strong>:
        viene instalado automáticamente al usar <strong>Astra + Starter Templates</strong>.
      </p>

      <div className="callout tip">
        Astra pone la estructura del sitio (cabecera, footer, estilos globales).
        Spectra pone los bloques con los que se construyen las páginas.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Cómo saber si una página está usando Spectra</summary>
    <div className="dd-body">
      <p>
        Para saber si una página utiliza bloques de <strong>Spectra</strong>,
        seguimos este método:
      </p>

      <ol>
        <li>Entramos en <strong>Páginas → Editar</strong>.</li>
        <li>Abrimos la <strong>Vista de lista</strong> (icono de lista).</li>
        <li>Observamos los bloques usados en la página.</li>
      </ol>

      <p>
        Si vemos bloques como:
      </p>

      <ul>
        <li><strong>Container</strong></li>
        <li><strong>Buttons</strong> (grupo de botones)</li>
        <li><strong>Features List</strong></li>
        <li><strong>Icons</strong></li>
      </ul>

      <p>
        👉 Entonces esa página está construida con <strong>Spectra</strong>.
      </p>

      <div className="callout warn">
        Gutenberg “puro” no tiene contenedores avanzados.
        Si ves muchos <em>Container</em>, estás usando Spectra seguro.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Regla mental para no confundirse</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>El tema (Astra)</strong> controla el diseño global del sitio.
        </li>
        <li>
          <strong>El editor (Gutenberg)</strong> es donde editamos el contenido.
        </li>
        <li>
          <strong>Spectra</strong> añade bloques avanzados dentro de Gutenberg.
        </li>
      </ul>

      <div className="callout tip">
        Si estás tocando bloques dentro de una página → estás en Gutenberg (con ayuda de Spectra).
      </div>
    </div>
  </details>
</section>

<section className="doc-section" id="apariencia-personalizar">
  <h2>Apariencia → Personalizar: el punto de partida real</h2>

  <details className="dd" open>
    <summary>Estilos claves en Apariencia → Personalizar</summary>
    <div className="dd-body">
      <p>
        <strong>Apariencia → Personalizar</strong> es el lugar donde se configuran
        los <strong>estilos globales del sitio</strong>, es decir:
      </p>
      <p>Vamos a analizar que hacemos en personalizar ¿Está ahí para cambiar el hover de un botón?</p>

      <ul>
        <li>Colores generales</li>
        <li>Tipografías</li>
        <li>Cabecera y footer</li>
        <li>Comportamiento global de botones (normal / hover)</li>
      </ul>

      <p>
        Por eso, cuando empezamos a editar páginas directamente,
        <strong>da la sensación de que algo “falta”</strong>:
        muchos estilos no se controlan desde la página,
        sino desde aquí.
      </p>

      <div className="callout tip">
        Personalizar no edita una página concreta:
        edita <strong>cómo se ve todo el sitio</strong>.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Por qué aquí sí aparece el hover de los botones</summary>
    <div className="dd-body">
      <p>
        El <strong>hover</strong> (estado al pasar el ratón) es un
        <strong>comportamiento global</strong>, no un ajuste puntual de una página.
      </p>

      <p>
        En <strong>Apariencia → Personalizar → Botones</strong>:
      </p>

      <ul>
        <li>Definimos el color normal del botón</li>
        <li>Definimos el color en hover</li>
        <li>Definimos bordes, radios y tipografía</li>
      </ul>

      <p>
        Estos estilos se aplican automáticamente a todos los botones del sitio,
        incluidos los creados con bloques.
      </p>

      <div className="callout warn">
        En el editor de páginas (Gutenberg + Spectra)
        no siempre existe un control visual de hover.
        Eso no es un error: es una decisión de diseño.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Creación de botones primario y secundario</summary>
    <div className="dd-body">
      <p>
        Desde <strong>Personalizar</strong>, muchos temas (como Astra)
        permiten definir <strong>dos estilos de botón</strong>:
      </p>

      <ul>
        <li>
          <strong>Botón primario</strong> → acción principal (ej. “Ver receta”)
        </li>
        <li>
          <strong>Botón secundario</strong> → acción alternativa (ej. “Saber más”)
        </li>
      </ul>

      <p>
        Esto permite:
      </p>

      <ul>
        <li>Mantener coherencia visual</li>
        <li>No “inventar” colores en cada página</li>
        <li>Guiar al usuario hacia la acción importante</li>
      </ul>

      <div className="callout tip">
        Primero se definen los botones en Personalizar.
        Después, en las páginas, solo se usan.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>Regla didáctica para no liarse</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Personalizar</strong> → reglas generales del sitio
        </li>
        <li>
          <strong>Editor de páginas</strong> → contenido concreto
        </li>
      </ul>

      <div className="callout warn">
        Si intentas resolver un problema global desde una página,
        acabarás duplicando estilos y creando incoherencias.
      </div>
    </div>
  </details>
</section>




        {/* CIERRE */}
        <footer className="doc-footer">
          <div className="callout tip">
            <strong>Siguiente paso (Tema 2):</strong> elegir tema (Astra) y montar el header:
            logo, menú y botón CTA. Después empezamos con la primera landing en Gutenberg.
          </div>
        </footer>
      </div>
    </TopicLayout>
  );
}
