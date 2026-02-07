import TopicLayout from '../../components/TopicLayout';
import { TipBox, PracticeBox, WarningBox, ActivityBox } from '../../components/ContentBoxes';

export default function Tema6Index() {
  return (
    <TopicLayout>
      <div className="doc">
        <div className="doc-hero">
          <span className="doc-type">uf1841</span>
          <h1>Tema 6: Editor Gutenberg</h1>
        </div>

        <div className="doc-index">
          <h2>Índice del Tema</h2>
          <nav>
            <ul>
              <li><a href="#introduccion">Introducción al Editor Gutenberg</a></li>
              <li><a href="#bloques">Trabajar con Bloques</a></li>
              <li><a href="#tipos-bloques">Tipos de Bloques Disponibles</a></li>
              <li><a href="#patrones">Patrones de Bloques</a></li>
              <li><a href="#bloques-reutilizables">Bloques Reutilizables</a></li>
            </ul>
          </nav>
        </div>

        <section id="introduccion" className="doc-section">
          <h2>6.1 Introducción al Editor Gutenberg</h2>

          <details className="dd" open>
            <summary>¿Qué es Gutenberg y cómo revoluciona WordPress?</summary>
            <div className="dd-body">
              <p>
                El Editor Gutenberg, introducido en WordPress 5.0, es un editor de bloques que 
                revoluciona la forma de crear contenido en WordPress. En lugar del editor clásico 
                basado en texto, Gutenberg utiliza un sistema modular de bloques que permite 
                crear layouts complejos de manera visual e intuitiva.
              </p>

          <TipBox>
            <p>
              <strong>Consejo:</strong> Si eres nuevo en Gutenberg, tómate tiempo para 
              experimentar con diferentes tipos de bloques antes de crear contenido importante.
            </p>
          </TipBox>
<section className="doc-section">
  <h2>Introducción al editor de bloques (Gutenberg)</h2>

  <div className="media">
    <div className="media-video">
      <iframe
        src="https://www.youtube.com/embed/DMNBsdjAQ40"
        title="Introducción al editor de bloques de WordPress (Gutenberg)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <p className="muted">
      Vídeo introductorio sobre el editor de bloques de WordPress.
    </p>
  </div>

  <p>
    En este vídeo se explica de forma clara qué es el <strong>editor de bloques de WordPress
    (Gutenberg)</strong> y cómo ha cambiado la manera de crear contenidos. A través de ejemplos
    prácticos se muestra que cada elemento de una página —texto, imágenes, botones o vídeos—
    funciona como un bloque independiente, lo que permite construir páginas de forma visual,
    ordenada y sin necesidad de escribir código.
  </p>
</section>

          <h3>Ventajas del Editor Gutenberg</h3>
          <ul>
            <li><strong>Interfaz visual:</strong> Creación de contenido más intuitiva y visual</li>
            <li><strong>Bloques modulares:</strong> Cada elemento de contenido es un bloque independiente</li>
            <li><strong>Layouts flexibles:</strong> Facilita la creación de diseños complejos</li>
            <li><strong>Consistencia:</strong> Mantiene un diseño coherente en todo el sitio</li>
            <li><strong>Extensibilidad:</strong> Los desarrolladores pueden crear bloques personalizados</li>
          </ul>

          <WarningBox>
            <p>
              <strong>Importante:</strong> Aunque Gutenberg es potente, algunos temas y plugins 
              pueden no ser totalmente compatibles. Siempre haz pruebas antes de implementar cambios importantes.
            </p>
          </WarningBox>
            </div>
          </details>
        </section>

        <section id="bloques" className="doc-section">
          <h2>6.2 Trabajar con Bloques</h2>

          <details className="dd" open>
            <summary>Cómo añadir, configurar y gestionar bloques</summary>
            <div className="dd-body">
              <p>
                Los bloques son los elementos básicos del contenido en Gutenberg. Cada párrafo, 
                imagen, título o elemento multimedia es un bloque individual que puede moverse, 
                editarse y configurarse de forma independiente.
              </p>

          <h3>Añadir Bloques</h3>
          <p>Existen varias formas de añadir bloques:</p>
          <ol>
            <li><strong>Botón "+" (Inserter):</strong> Click en el botón + para abrir el selector de bloques</li>
            <li><strong>Barra "/" (Slash Command):</strong> Escribe "/" seguido del nombre del bloque</li>
            <li><strong>Enter:</strong> Al final de un bloque, presiona Enter para crear uno nuevo</li>
            <li><strong>Transform:</strong> Convierte un tipo de bloque en otro usando las opciones de transformación</li>
          </ol>

          <PracticeBox>
            <h4>Práctica: Añadiendo tu primer bloque</h4>
            <ol>
              <li>Ve al editor de una página o entrada</li>
              <li>Click en el botón "+" en la esquina superior izquierda</li>
              <li>Selecciona un bloque "Párrafo" y escribe algo</li>
              <li>Prueba a transformarlo en un bloque "Título" usando el icono de transformación</li>
            </ol>
          </PracticeBox>

          <h3>Configurar Bloques</h3>
          <p>
            Cada bloque tiene opciones de configuración específicas disponibles en el panel 
            de configuración de la derecha:
          </p>
          <ul>
            <li><strong>Configuración del Bloque:</strong> Opciones específicas del tipo de bloque</li>
            <li><strong>Configuración de Estilo:</strong> Colores, tipografía, espaciado</li>
            <li><strong>Configuración Avanzada:</strong> CSS personalizado, atributos HTML</li>
          </ul>
            </div>
          </details>
        </section>

        <section id="tipos-bloques" className="doc-section">
          <h2>6.3 Tipos de Bloques Disponibles</h2>

          <details className="dd" open>
            <summary>Catálogo completo de bloques por categorías</summary>
            <div className="dd-body">
              <p>
                Gutenberg incluye una amplia variedad de bloques organizados en categorías:
              </p>

          <h3>Bloques de Texto</h3>
          <ul>
            <li><strong>Párrafo:</strong> El bloque básico para texto</li>
            <li><strong>Título:</strong> Encabezados H1-H6</li>
            <li><strong>Lista:</strong> Listas numeradas y con viñetas</li>
            <li><strong>Cita:</strong> Citas destacadas</li>
            <li><strong>Código:</strong> Fragmentos de código con formato</li>
            <li><strong>Preformateado:</strong> Texto que mantiene espacios y saltos de línea</li>
          </ul>

          <h3>Bloques de Medios</h3>
          <ul>
            <li><strong>Imagen:</strong> Insertar y configurar imágenes</li>
            <li><strong>Galería:</strong> Colecciones de imágenes</li>
            <li><strong>Audio:</strong> Reproducir archivos de audio</li>
            <li><strong>Video:</strong> Insertar videos locales o embebidos</li>
            <li><strong>Archivo:</strong> Enlaces de descarga de archivos</li>
          </ul>

          <h3>Bloques de Diseño</h3>
          <ul>
            <li><strong>Columnas:</strong> Crear layouts en columnas</li>
            <li><strong>Grupo:</strong> Agrupar bloques</li>
            <li><strong>Fila:</strong> Organizar bloques horizontalmente</li>
            <li><strong>Stack:</strong> Organizar bloques verticalmente</li>
            <li><strong>Separador:</strong> Líneas divisorias</li>
            <li><strong>Espaciador:</strong> Añadir espacio vertical</li>
          </ul>

          <TipBox>
            <p>
              <strong>Tip Profesional:</strong> Los bloques de columnas son especialmente útiles 
              para crear layouts tipo revista o para mostrar información en paralelo.
            </p>
          </TipBox>

          <h3>Bloques de Widget</h3>
          <ul>
            <li><strong>Archivos:</strong> Lista de archivos por fecha</li>
            <li><strong>Calendario:</strong> Calendario de publicaciones</li>
            <li><strong>Categorías:</strong> Lista de categorías</li>
            <li><strong>Entradas Recientes:</strong> Lista de publicaciones recientes</li>
            <li><strong>Etiquetas:</strong> Nube o lista de etiquetas</li>
            <li><strong>Menú de Navegación:</strong> Menús personalizados</li>
          </ul>
            </div>
          </details>
        </section>

       <section id="patrones" className="doc-section">
  <h2>6.4 Patrones de Bloques</h2>

  <details className="dd" open>
    <summary>Diseños reutilizables para trabajar como un profesional</summary>
    <div className="dd-body">
      <p>
        Los <strong>patrones de bloques</strong> son conjuntos de bloques ya organizados
        que forman diseños completos y reutilizables. Funcionan como <strong>plantillas
        de secciones</strong> que puedes insertar en cualquier página con un solo clic.
      </p>

      <p>
        En este curso los usamos como si fueran <strong>componentes</strong>: una vez
        diseñado un bloque (hero, tarjeta, CTA…), podemos reutilizar su estructura
        manteniendo coherencia visual en toda la web.
      </p>

      <TipBox title="🧠 Idea clave">
        <p>
          Un patrón no es solo un diseño bonito: es una forma de <strong>pensar en bloques
          reutilizables</strong>, igual que harías en diseño web profesional.
        </p>
      </TipBox>

      <h3>¿Por qué son tan importantes los patrones?</h3>
      <ul>
        <li>Ahorran tiempo al crear páginas nuevas</li>
        <li>Mantienen consistencia visual en todo el sitio</li>
        <li>Evitan repetir siempre el mismo trabajo</li>
        <li>Facilitan que un equipo trabaje con el mismo diseño</li>
        <li>Encajan perfectamente con Astra y Gutenberg</li>
      </ul>

      <h3>Cómo usar patrones existentes (paso a paso)</h3>
      <ol>
        <li>Haz clic en el botón <strong>“+”</strong> para abrir el inserter de bloques</li>
        <li>Accede a la pestaña <strong>“Patrones”</strong></li>
        <li>Explora las categorías disponibles</li>
        <li>Haz clic en un patrón para insertarlo en la página</li>
        <li>Edita los textos, imágenes y botones según tu proyecto</li>
      </ol>

      <p>
        Al insertar un patrón, WordPress copia su estructura completa, pero el contenido
        se puede modificar libremente sin afectar a otras páginas.
      </p>

      <h3>Categorías comunes de patrones</h3>
      <ul>
        <li>
          <strong>Botones:</strong> llamadas a la acción con uno o varios botones
        </li>
        <li>
          <strong>Encabezados:</strong> heroes y cabeceras de sección con título, texto e imagen
        </li>
        <li>
          <strong>Testimonios:</strong> bloques preparados para reseñas de clientes
        </li>
        <li>
          <strong>Galerías:</strong> diseños para mostrar imágenes de forma ordenada
        </li>
        <li>
          <strong>Texto:</strong> combinaciones equilibradas de títulos y párrafos
        </li>
        <li>
          <strong>Consulta:</strong> patrones dinámicos que muestran entradas o productos
        </li>
      </ul>

      <WarningBox>
        <p>
          ⚠️ No confundas <strong>patrones</strong> con <strong>bloques reutilizables</strong>.
        </p>
        <ul>
          <li>
            Los <strong>patrones</strong> se copian y luego se editan de forma independiente.
          </li>
          <li>
            Los <strong>bloques reutilizables</strong> cambian en todas las páginas a la vez,
            lo que puede causar errores si no se entiende bien.
          </li>
        </ul>
        <p>
          En este curso trabajaremos principalmente con <strong>patrones</strong>, porque
          son más seguros y didácticos para empezar.
        </p>
      </WarningBox>

      <h3>Patrones creados por ti (nivel profesional)</h3>
      <p>
        Además de usar patrones existentes, puedes <strong>crear tus propios patrones</strong>
        a partir de bloques que hayas diseñado.
      </p>

      <ol>
        <li>Diseña una sección completa con bloques (por ejemplo, un hero)</li>
        <li>Selecciona todos los bloques de esa sección</li>
        <li>Abre el menú de opciones (⋮)</li>
        <li>Elige <strong>“Crear patrón”</strong></li>
        <li>Asigna un nombre descriptivo</li>
      </ol>

      <p>
        A partir de ese momento, ese diseño aparecerá en la biblioteca de patrones
        y podrás reutilizarlo en cualquier página.
      </p>

      <PracticeBox>
        <h4>🧪 Ejercicio: Trabajando con Patrones</h4>
        <ol>
          <li>Crea una nueva página en WordPress</li>
          <li>Inserta un patrón de <strong>Encabezado</strong> desde la biblioteca</li>
          <li>Personaliza textos, colores e imagen según tu marca</li>
          <li>Añade debajo un patrón de <strong>Testimonios</strong></li>
          <li>Observa cómo los patrones mantienen coherencia visual</li>
        </ol>
        <p>
          <strong>Objetivo del ejercicio:</strong> entender cómo WordPress reutiliza
          estructuras sin repetir trabajo.
        </p>
      </PracticeBox>

      <TipBox title="🎓 Enfoque profesional">
        <p>
          Pensar en patrones es pensar como un diseñador web profesional:
          <strong>creas una vez, reutilizas muchas</strong>.
        </p>
      </TipBox>
    </div>
  </details>
</section>


        <section id="bloques-reutilizables" className="doc-section">
          <h2>6.5 Bloques Reutilizables</h2>

          <details className="dd">
            <summary>Crear y gestionar bloques para usar en múltiples páginas</summary>
            <div className="dd-body">
              <p>
                Los bloques reutilizables te permiten guardar configuraciones específicas de 
                bloques para usarlas en múltiples páginas y entradas. Cuando actualizas un 
                bloque reutilizable, el cambio se aplica automáticamente en todos los lugares donde se usa.
              </p>

          <h3>Crear Bloques Reutilizables</h3>
          <ol>
            <li>Crea y configura el bloque como desees</li>
            <li>Selecciona el bloque</li>
            <li>Click en las tres opciones (...) en la barra de herramientas</li>
            <li>Selecciona "Crear bloque reutilizable"</li>
            <li>Asigna un nombre descriptivo</li>
            <li>Click en "Guardar"</li>
          </ol>

          <h3>Usar Bloques Reutilizables</h3>
          <ol>
            <li>Abre el inserter de bloques (+)</li>
            <li>Ve a la pestaña "Reutilizable"</li>
            <li>Selecciona el bloque que quieres insertar</li>
            <li>El bloque mantendrá su configuración original</li>
          </ol>

          <WarningBox>
            <p>
              <strong>Cuidado:</strong> Los cambios en bloques reutilizables afectan a todas 
              las instancias. Si necesitas una versión única, primero convierte a bloque regular 
              usando la opción "Convertir a bloques regulares".
            </p>
          </WarningBox>

          <h3>Gestionar Bloques Reutilizables</h3>
          <p>
            Puedes gestionar todos tus bloques reutilizables desde 
            <em>Administración → Apariencia → Editor del Sitio → Patrones → Mis patrones</em>:
          </p>
          <ul>
            <li>Ver todos los bloques reutilizables</li>
            <li>Editar bloques existentes</li>
            <li>Eliminar bloques que no uses</li>
            <li>Exportar/importar bloques entre sitios</li>
          </ul>

          <TipBox>
            <p>
              <strong>Casos de Uso Ideales:</strong> Firmas, información de contacto, 
              formularios de suscripción, banners promocionales, y cualquier contenido 
              que se repita frecuentemente en tu sitio.
            </p>
          </TipBox>
            </div>
          </details>
        </section>

        <ActivityBox>
          <h3>Actividad Final: Crear una Página Completa con Gutenberg</h3>
          <p>
            Para consolidar todo lo aprendido, vamos a crear una página completa usando 
            diferentes tipos de bloques y patrones:
          </p>
          <ol>
            <li><strong>Crear página:</strong> Crea una nueva página llamada "Sobre Nosotros"</li>
            <li><strong>Encabezado:</strong> Usa un patrón de encabezado y personalízalo</li>
            <li><strong>Contenido principal:</strong> Añade párrafos con información sobre tu empresa</li>
            <li><strong>Galería:</strong> Inserta una galería de imágenes del equipo</li>
            <li><strong>Columnas:</strong> Crea una sección de 3 columnas con servicios</li>
            <li><strong>Testimonios:</strong> Añade un patrón de testimonios</li>
            <li><strong>Llamada a la acción:</strong> Termina con un botón de contacto</li>
            <li><strong>Bloque reutilizable:</strong> Crea un bloque reutilizable para la información de contacto</li>
          </ol>
          <p>
            <strong>Tiempo estimado:</strong> 30-45 minutos<br />
            <strong>Resultado esperado:</strong> Una página profesional que demuestre el dominio 
            de las funcionalidades principales del Editor Gutenberg.
          </p>
        </ActivityBox>
      </div>
    </TopicLayout>
  );
}

