import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema3Index() {
  return (
    <TopicLayout
      title="M3 · Anatomía de WordPress"
      subtitle="Entiende la estructura y componentes fundamentales de WordPress"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 3</div>
          <h1>Anatomía de WordPress</h1>
          <p className="doc-lead">
            Entiende la estructura y componentes fundamentales de WordPress
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#dashboard">El dashboard: tu centro de control</a></li>
            <li><a href="#usuarios-roles">Usuarios y roles profesionales</a></li>
            <li><a href="#entradas-paginas">Entradas vs Páginas</a></li>
            <li><a href="#medios">Gestión de medios y biblioteca</a></li>
            <li><a href="#configuracion">Configuración general del sitio</a></li>
            <li><a href="#permalinks">URLs amigables y permalinks</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Al finalizar este módulo serás capaz de navegar el dashboard de WordPress como un profesional,
            entenderás cada sección y función, y sabrás configurar un sitio web desde cero con las mejores prácticas.
          </p>
        </TipBox>

        <section className="doc-section" id="dashboard">
          <h2>3.1 El dashboard: tu centro de control</h2>
          
          <p>
            El dashboard de WordPress (wp-admin) es tu oficina virtual. Desde aquí controlas todo: 
            contenidos, diseño, usuarios, plugins y configuración. Un profesional debe dominar cada rincón.
          </p>

          <PracticeBox title="🚀 Práctica: Primera exploración">
            <p><strong>Accede a tu sitio local y explora:</strong></p>
            <ol>
              <li>En LocalWP, clic en "WP Admin" de tu sitio</li>
              <li>Usuarios: <code>admin</code> / Contraseña: <em>la que pusiste</em></li>
              <li>Observa la estructura del menú lateral izquierdo</li>
              <li>Haz clic en "Escritorio" → "Inicio" para ver el dashboard principal</li>
            </ol>
          </PracticeBox>

          <h3>Anatomía del dashboard</h3>
          <ul>
            <li><strong>Barra superior:</strong> Accesos rápidos y tu perfil</li>
            <li><strong>Menú lateral:</strong> Todas las funciones organizadas</li>
            <li><strong>Área principal:</strong> Contenido de la sección activa</li>
            <li><strong>Widgets dashboard:</strong> Resumen de actividad (solo en Inicio)</li>
          </ul>
        </section>

        <section className="doc-section" id="usuarios-roles">
        <section className="doc-section" id="roles-usuario">
  <h2>3.2 Roles de usuario en WordPress</h2>

  <details className="dd" open>
    <summary>Qué puede y qué no puede hacer cada rol</summary>
    <div className="dd-body">
      <p>
        WordPress funciona con un <strong>sistema de roles</strong>. Cada usuario tiene
        permisos distintos según lo que deba hacer en la web.
        <strong> Asignar bien los roles es una cuestión de seguridad y organización profesional.</strong>
      </p>

      <div className="table-wrap" tabIndex="0">
        <table className="table table-zebra">
          <caption>Roles estándar de WordPress y permisos</caption>
          <thead>
            <tr>
              <th>Rol</th>
              <th>Qué puede hacer</th>
              <th>Qué NO puede hacer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Suscriptor</th>
              <td>Acceder a su perfil, leer contenido privado</td>
              <td>No puede crear ni editar contenido</td>
            </tr>
            <tr>
              <th scope="row">Colaborador</th>
              <td>Crear entradas y enviarlas a revisión</td>
              <td>No puede publicar ni subir imágenes</td>
            </tr>
            <tr>
              <th scope="row">Autor</th>
              <td>Crear, editar y publicar sus propias entradas</td>
              <td>No puede modificar entradas de otros ni la web</td>
            </tr>
            <tr>
              <th scope="row">Editor</th>
              <td>
                Gestionar entradas y páginas de todos los autores,
                moderar comentarios
              </td>
              <td>No puede tocar ajustes, plugins ni temas</td>
            </tr>
            <tr>
              <th scope="row">Administrador</th>
              <td>
                Control total: usuarios, plugins, temas, ajustes y contenido
              </td>
              <td>No tiene restricciones</td>
            </tr>
          </tbody>
        </table>
      </div>

      <WarningBox>
        <p>
          <strong>Nunca des el rol de Administrador “por comodidad”.</strong>
          Es el error más común y el más peligroso en proyectos WordPress.
        </p>
      </WarningBox>
    </div>
  
         
          <ActivityBox title="✍️ Ejercicio: Crear un usuario profesional">
            <p><strong>Vamos a crear un usuario administrador con nombre profesional:</strong></p>
            <ol>
              <li>Ve a <strong>Usuarios → Añadir nuevo</strong></li>
              <li><strong>Nombre de usuario:</strong> <code>tu-nombre-apellido</code> (sin espacios)</li>
              <li><strong>Email:</strong> Tu email real</li>
              <li><strong>Nombre:</strong> Tu nombre real</li>
              <li><strong>Contraseña:</strong> Una segura (combina letras, números, símbolos)</li>
              <li><strong>Rol:</strong> Administrador</li>
              <li><strong>Clic en:</strong> "Añadir nuevo usuario"</li>
            </ol>
            <p><em>Ahora cierra sesión y accede con tu nuevo usuario. ¡Nunca más "admin"!</em></p>
          </ActivityBox>
</details>
            <details className="dd">
    <summary>Ejemplos prácticos: ¿qué rol darías a cada persona?</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Cliente que solo quiere ver la web:</strong><br />
          → <strong>Suscriptor</strong>
        </li>
        <li>
          <strong>Persona que escribe textos para el blog:</strong><br />
          → <strong>Autor</strong>
        </li>
        <li>
          <strong>Equipo de contenidos que revisa textos:</strong><br />
          → <strong>Editor</strong>
        </li>
        <li>
          <strong>Desarrollador / agencia que mantiene la web:</strong><br />
          → <strong>Administrador</strong>
        </li>
        <li>
          <strong>Colaborador puntual (redactor externo):</strong><br />
          → <strong>Colaborador</strong>
        </li>
      </ul>

      <TipBox title="Regla profesional">
        <p>
          Cada usuario debe tener <strong>el mínimo permiso necesario</strong> para su trabajo.
          Ni uno más.
        </p>
      </TipBox>
    </div>
  </details>
 
  <details className="dd">
  <summary>¿Qué rol se usa para gestionar una tienda online?</summary>
  <div className="dd-body">
    <p>
      Al instalar WooCommerce, WordPress añade roles específicos para tiendas online.
      El más importante es <strong>Gestor de tienda</strong>.
    </p>

    <ul>
      <li>
        <strong>Cliente:</strong> compra productos y gestiona sus pedidos.
      </li>
      <li>
        <strong>Gestor de tienda:</strong> crea productos, gestiona pedidos y clientes,
        pero no puede tocar plugins, temas ni ajustes críticos.
      </li>
      <li>
        <strong>Administrador:</strong> control total (solo para responsables técnicos).
      </li>
    </ul>

    <WarningBox>
      <p>
        <strong>Buenas prácticas profesionales:</strong><br />
        Si alguien solo gestiona la tienda, <strong>NO debe ser Administrador</strong>.
        El rol correcto es <strong>Gestor de tienda</strong>.
      </p>
    </WarningBox>
  </div>
</details>

</section>

        </section>

        <section className="doc-section" id="entradas-paginas">
          <h2>3.3 Entradas vs Páginas: cuándo usar cada una</h2>

          <p>
            Esta es una confusión típica de principiantes, pero es fundamental entenderlo bien para 
            estructurar sitios web profesionales correctamente.
          </p>

          <div className="two-columns">
            <div className="column">
              <h4>📝 ENTRADAS (Posts)</h4>
              <ul>
                <li>Contenido cronológico</li>
                <li>Se organizan por fecha</li>
                <li>Tienen categorías y etiquetas</li>
                <li>Aparecen en el blog</li>
                <li>Se pueden comentar</li>
              </ul>
              <p><strong>💡 Úsalas para:</strong> Blog, noticias, artículos</p>
            </div>

            <div className="column">
              <h4>📄 PÁGINAS (Pages)</h4>
              <ul>
                <li>Contenido estático</li>
                <li>No tienen fecha</li>
                <li>Se organizan jerárquicamente</li>
                <li>No aparecen en el blog</li>
                <li>Normalmente sin comentarios</li>
              </ul>
              <p><strong>💡 Úsalas para:</strong> Inicio, Nosotros, Contacto, Servicios</p>
            </div>
          </div>
        </section>

      <section className="doc-section" id="medios">
  <h2>3.4 Gestión de medios y biblioteca</h2>

  <p>
    La biblioteca de medios es donde se almacenan todas tus imágenes, documentos y archivos.
    Una gestión profesional de medios es clave para sitios web organizados, rápidos y accesibles.
  </p>

  <p>
    Antes de subir imágenes, es importante tener claro <strong>qué tipo de imagen necesita tu web</strong>
    y <strong>de dónde obtenerla</strong>. No todas las imágenes sirven para todos los usos.
  </p>

  <details className="dd">
    <summary>Qué tener en cuenta al conseguir imágenes para tu web</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>Licencia:</strong> usa imágenes propias o con licencia libre/comercial clara.
        </li>
        <li>
          <strong>Calidad:</strong> evita imágenes borrosas o pixeladas.
        </li>
        <li>
          <strong>Coherencia visual:</strong> mismo estilo, colores y tipo de imagen.
        </li>
        <li>
          <strong>Peso del archivo:</strong> imágenes muy pesadas ralentizan la web.
        </li>
        <li>
          <strong>Formato adecuado:</strong> cada formato tiene su función (JPG, PNG, SVG…).
        </li>
      </ul>
    </div>
  </details>

  <TipBox title="🖼️ Buenas prácticas con imágenes">
    <ul>
      <li><strong>Optimiza antes de subir:</strong> Usa herramientas como TinyPNG</li>
      <li><strong>Nombres descriptivos:</strong> "logo-empresa.png" mejor que "IMG_001.png"</li>
      <li><strong>Tamaño apropiado:</strong> Máximo 1920px de ancho para web</li>
      <li><strong>Formato correcto:</strong> JPG para fotos, PNG para logos/transparencias</li>
      <li><strong>Texto alternativo:</strong> Siempre describe la imagen (SEO + accesibilidad)</li>
    </ul>
  </TipBox>

  <details className="dd">
    <summary>¿Qué son las imágenes SVG y cuándo usarlas?</summary>
    <div className="dd-body">
      <p>
        Las imágenes <strong>SVG</strong> (Scalable Vector Graphics) no son imágenes tradicionales,
        sino <strong>gráficos vectoriales</strong>. Esto significa que <strong>no pierden calidad</strong>
        aunque se amplíen o se vean en pantallas grandes.
      </p>

      <ul>
        <li>No se pixelan al hacer zoom</li>
        <li>Pesan muy poco</li>
        <li>Son ideales para logos, iconos e ilustraciones simples</li>
        <li>Se adaptan perfectamente a diseño responsive</li>
      </ul>

      <WarningBox>
        <p>
          WordPress <strong>no permite subir SVG por defecto</strong> por motivos de seguridad.
          Para usarlos es necesario un plugin específico o una configuración controlada.
        </p>
      </WarningBox>

      <p>
        <strong>Dónde conseguir imágenes SVG:</strong>
      </p>
      <ul>
        <li>Repositorios de iconos SVG (por ejemplo, librerías de iconos)</li>
        <li>Diseñadores que exportan logos desde Figma o Illustrator</li>
        <li>SVG creados a medida para la marca</li>
      </ul>

      <TipBox title="Uso recomendado de SVG">
        <p>
          Usa SVG para <strong>logos, iconos y elementos gráficos</strong>.
          Para fotografías reales, sigue usando JPG o WebP.
        </p>
      </TipBox>
    

    </div>
  </details>

  <details className="dd">
    <summary>¿Es mejor subir imágenes ya optimizadas o usar plugins?</summary>
    <div className="dd-body">
      <p>
        En un flujo de trabajo profesional, lo ideal es:
      </p>

      <ol>
        <li>
          <strong>Optimizar las imágenes antes de subirlas:</strong><br />
          controlas tamaño, peso y calidad desde el origen.
        </li>
        <li>
          <strong>Usar un plugin como apoyo:</strong><br />
          para asegurar que todo lo que se suba cumpla estándares.
        </li>
      </ol>

      <p>
        Los plugins de optimización pueden:
      </p>
      <ul>
        <li>Reducir peso automáticamente</li>
        <li>Generar formatos modernos (WebP)</li>
        <li>Optimizar imágenes antiguas</li>
      </ul>

      <WarningBox>
        <p>
          <strong>Error común:</strong> subir imágenes sin control y “confiar en que el plugin lo arregle todo”.
          Esto suele generar webs lentas y desordenadas.
        </p>
      </WarningBox>

      <TipBox title="Regla profesional">
        <p>
          <strong>Optimiza antes + plugin después</strong> es la combinación correcta.
        </p>
      </TipBox>
    </div>
  </details>
    <details className="dd">
  <summary>Usar imágenes de prueba con Picsum</summary>
  <div className="dd-body">
    <p>
      Cuando estamos aprendiendo o creando un prototipo, muchas veces no disponemos
      de imágenes reales. En esos casos podemos usar servicios que devuelven
      imágenes aleatorias por URL, como <strong>Picsum</strong>.
    </p>

    <p>
      Picsum permite cargar imágenes externas directamente desde una URL, lo cual
      funciona perfectamente en WordPress. Ya veremos cómo las introducimos y las usamos. Es ahí donde se nota que somos desarrolladores. 
    </p>

    <pre>
      <code>{`<img src="https://picsum.photos/800/400" alt="Imagen de prueba">`}</code>
    </pre>

    <p>
      Estas imágenes son ideales para probar diseños, estructuras y bloques,
      pero <strong>no deben usarse en la web final</strong>.
    </p>

    <WarningBox>
      <p>
        Las imágenes de Picsum no se almacenan en la biblioteca de medios,
        no se optimizan y cambian en cada recarga.
      </p>
    </WarningBox>
  </div>
</details>
</section>

        <section className="doc-section" id="configuracion">
          <h2>3.5 Configuración general del sitio</h2>
          <p>
            La configuración general define la identidad y comportamiento básico de tu sitio. 
            Son ajustes que impactan en SEO, usabilidad y funcionalidad.
          </p>

          <PracticeBox title="⚙️ Configuración profesional básica">
            <p><strong>Ve a Ajustes → Generales y configura:</strong></p>
            <ul>
              <li><strong>Título del sitio:</strong> Nombre de tu proyecto/empresa</li>
              <li><strong>Descripción:</strong> Una línea que explique qué haces</li>
              <li><strong>Dirección de WordPress (URL):</strong> Déjala como está</li>
              <li><strong>Dirección del sitio (URL):</strong> Déjala como está</li>
              <li><strong>Email de administración:</strong> Tu email profesional</li>
              <li><strong>Zona horaria:</strong> Madrid (o tu ubicación)</li>
              <li><strong>Formato de fecha:</strong> El que prefieras</li>
            </ul>
          </PracticeBox>

          <details className="dd" open>
            <summary>Guía completa: Imágenes libres de derechos para tu web</summary>
            <div className="dd-body">
              <p>
                Una de las tareas más importantes al crear contenido web es conseguir imágenes 
                <strong> sin problemas legales</strong>. Usar imágenes con copyright puede traerte 
                multas serias. Esta guía te enseña dónde encontrar imágenes seguras y gratuitas.
              </p>

              <div className="callout tip">
                <strong>Regla de oro:</strong> si no estás 100% seguro de que puedes usar una imagen, 
                <strong>no la uses</strong>. Mejor prevenir que recibir una demanda por copyright.
              </div>

              <h4>1) ¿Qué significa "libre de derechos" realmente?</h4>
              <p>No significa "gratis en cualquier sitio de Internet". Significa que:</p>
              <ul>
                <li><strong>El creador</strong> te da permiso explícito para usarla</li>
                <li><strong>Tiene una licencia</strong> que especifica cómo puedes usarla</li>
                <li><strong>No vas a recibir demandas</strong> si sigues las reglas de esa licencia</li>
              </ul>

              <div className="callout warn">
                <strong>Error típico:</strong> "La descargé de Google Imágenes, así que puedo usarla". 
                ¡FALSO! Google solo indexa, no da permisos. Debes ir a la fuente original.
              </div>

              <h4>2) Portales seguros para imágenes gratuitas</h4>
              <p>Estos sitios verifican las licencias y son 100% seguros:</p>

              <div className="table-wrap" tabIndex="0">
                <table className="table table-zebra">
                  <caption>Portales recomendados para imágenes libres</caption>
                  <thead>
                    <tr>
                      <th>Sitio web</th>
                      <th>Tipo de licencia</th>
                      <th>¿Atribución obligatoria?</th>
                      <th>Mejor para</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Unsplash</th>
                      <td>Unsplash License</td>
                      <td>No (pero recomendable)</td>
                      <td>Fotos profesionales de alta calidad</td>
                    </tr>
                    <tr>
                      <th scope="row">Pexels</th>
                      <td>Pexels License</td>
                      <td>No (pero recomendable)</td>
                      <td>Fotos y vídeos variados</td>
                    </tr>
                    <tr>
                      <th scope="row">Pixabay</th>
                      <td>Pixabay License</td>
                      <td>No</td>
                      <td>Ilustraciones, iconos, fotos</td>
                    </tr>
                    <tr>
                      <th scope="row">Wikimedia Commons</th>
                      <td>Creative Commons varias</td>
                      <td>Depende de la imagen</td>
                      <td>Contenido educativo y cultural</td>
                    </tr>
                    <tr>
                      <th scope="row">Freepik</th>
                      <td>Freepik License (Free)</td>
                      <td>Sí, obligatoria</td>
                      <td>Vectores, iconos, ilustraciones</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>3) ¿Las imágenes generadas con IA son libres de derechos?</h4>
              <p>La respuesta depende de la herramienta y el país, pero la situación actual es:</p>

              <div className="callout">
                <strong>Imágenes que TÚ generas con IA:</strong>
                <ul>
                  <li><strong>Midjourney, DALL-E, Stable Diffusion:</strong> generalmente SÍ puedes usarlas comercialmente si pagas la suscripción</li>
                  <li><strong>Versiones gratuitas:</strong> revisa siempre los términos de uso</li>
                  <li><strong>Tu responsabilidad:</strong> que no copie una imagen con copyright existente</li>
                </ul>
              </div>

              <div className="callout warn">
                <strong>Imágenes de IA encontradas online:</strong> NO asumas que puedes usarlas. 
                El que las subió puede no tener permisos para distribuirlas.
              </div>

              <h4>4) Creative Commons: entendiendo las licencias</h4>
              <p>Muchas imágenes usan licencias Creative Commons. Los símbolos importantes:</p>
              <ul>
                <li><strong>CC0:</strong> dominio público, puedes hacer lo que quieras (¡ideal!)</li>
                <li><strong>CC BY:</strong> úsala, pero menciona al autor</li>
                <li><strong>CC BY-SA:</strong> úsala, menciona autor, comparte igual</li>
                <li><strong>CC BY-NC:</strong> solo uso NO comercial (¡cuidado si vendes!)</li>
                <li><strong>CC BY-ND:</strong> no puedes modificar la imagen</li>
              </ul>

              <h4>5) Workflow seguro: paso a paso</h4>
              <ol>
                <li>
                  <strong>Busca en portales seguros:</strong> Unsplash, Pexels o Pixabay primero.
                </li>
                <li>
                  <strong>Descarga y guarda info:</strong> URL original y tipo de licencia.
                </li>
                <li>
                  <strong>Atribución si es necesaria:</strong> "Foto por [Autor] en [Sitio]".
                </li>
                <li>
                  <strong>Optimize antes de subir:</strong> reduce tamaño sin perder calidad.
                </li>
                <li>
                  <strong>Sube a WordPress:</strong> MediaLibrary con nombre descriptivo.
                </li>
              </ol>

              <h4>6) Herramientas adicionales profesionales</h4>
              <div className="table-wrap" tabIndex="0">
                <table className="table table-zebra">
                  <caption>Recursos adicionales para imágenes</caption>
                  <thead>
                    <tr>
                      <th>Herramienta</th>
                      <th>Qué es</th>
                      <th>Cuándo usarla</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Lorem Picsum</th>
                      <td>Placeholder aleatorio</td>
                      <td>Prototipos y mockups</td>
                    </tr>
                    <tr>
                      <th scope="row">Canva</th>
                      <td>Editor + banco gratuito</td>
                      <td>Crear gráficos personalizados</td>
                    </tr>
                    <tr>
                      <th scope="row">Remove.bg</th>
                      <td>Quitar fondo automático</td>
                      <td>Productos con fondo transparente</td>
                    </tr>
                    <tr>
                      <th scope="row">TinyPNG</th>
                      <td>Compresor de imágenes</td>
                      <td>Optimizar antes de subir a WP</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                <strong>Tip profesional:</strong> crea una carpeta en tu ordenador llamada "Recursos" donde 
                guardes imágenes descargadas con un documento de texto que indique de dónde vienen y qué licencia tienen.
              </div>

              <h4>7) Casos problemáticos que debes evitar</h4>
              <ul>
                <li><strong>Pinterest, Instagram, TikTok:</strong> NO son bancos de imágenes libres</li>
                <li><strong>Capturas de Google Street View:</strong> pueden tener copyright</li>
                <li><strong>Logos de marcas:</strong> nunca los uses sin permiso explícito</li>
                <li><strong>Fotos con personas:</strong> verifica que tengan model release</li>
                <li><strong>Edificios famosos:</strong> algunos están protegidos por copyright</li>
              </ul>

              <div className="callout warn">
                <strong>Advertencia legal:</strong> esta información es orientativa. Para proyectos comerciales 
                importantes, consulta siempre con un abogado especializado en propiedad intelectual.
              </div>
            </div>
          </details>

          <div className="box box--activity">
            <h3 className="box__title">Actividad práctica: Busca tu primera imagen libre</h3>
            <ol>
              <li>
                Ve a <strong>Unsplash.com</strong> y busca "business meeting"
              </li>
              <li>
                Elige una foto que te guste y descárgala en tamaño <strong>Regular</strong>
              </li>
              <li>
                Anota en un documento: <strong>URL de la foto, nombre del fotógrafo, fecha de descarga</strong>
              </li>
              <li>
                Sube la imagen a tu WordPress: <strong>Medios → Biblioteca → Subir archivo</strong>
              </li>
              <li>
                Usa la imagen en una página de prueba y comprueba que se ve correctamente
              </li>
            </ol>
          </div>

          <div className="box box--practice">
            <h3 className="box__title">Mini-repaso: preguntas de comprobación</h3>
            <ul>
              <li>¿Puedo usar cualquier imagen que encuentre en Google Imágenes?</li>
              <li>¿Qué significa "CC BY" en una licencia Creative Commons?</li>
              <li>Si genero una imagen con IA, ¿automáticamente puedo usarla comercialmente?</li>
              <li>¿Dónde buscarías una ilustración vectorial libre para el logo de una empresa?</li>
            </ul>
          </div>
        </section>

        <section className="doc-section" id="permalinks">
          <h2>3.6 URLs amigables y permalinks</h2>
          <p>
            Los permalinks son las URLs de tus páginas y entradas. Una configuración correcta es 
            fundamental para SEO y usabilidad. WordPress por defecto usa URLs horribles como 
            <code>sitio.com/?p=123</code> - ¡Vamos a arreglarlo!
          </p>

          <WarningBox>
            <p>
              <strong>⚠️ Importante:</strong> Configura los permalinks ANTES de crear contenido. 
              Cambiarlos después puede romper enlaces y afectar el SEO.
            </p>
          </WarningBox>

          <ActivityBox title="🔗 Configurar URLs profesionales">
            <p><strong>Paso a paso:</strong></p>
            <ol>
              <li>Ve a <strong>Ajustes → Enlaces permanentes</strong></li>
              <li>Selecciona <strong>"Nombre de la entrada"</strong></li>
              <li>Clic en <strong>"Guardar cambios"</strong></li>
              <li><strong>¡Perfecto!</strong> Ahora tus URLs serán: <code>sitio.com/nombre-pagina/</code></li>
            </ol>
            <p><em>Esto es mucho mejor para usuarios y buscadores que /?p=123</em></p>
          </ActivityBox>

          <h3>¿Qué conseguimos con URLs amigables?</h3>
          <ul>
            <li>✅ <strong>SEO mejorado:</strong> Google prefiere URLs descriptivas</li>
            <li>✅ <strong>Usabilidad:</strong> Los usuarios entienden de qué trata la página</li>
            <li>✅ <strong>Profesionalidad:</strong> Tu sitio se ve más serio y confiable</li>
            <li>✅ <strong>Compartir fácil:</strong> Enlaces más fáciles de recordar y compartir</li>
          </ul>

          <TipBox>
            <p>
              <strong>Próximo paso:</strong> En el M4 aprenderemos sobre temas de WordPress
              y cómo personalizar la apariencia de tu sitio web.
            </p>
          </TipBox>
        </section>

        <div className="doc-next">
          <a href="/tema4" className="btn btn-primary">
            Siguiente: M4 · Temas y personalización →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
