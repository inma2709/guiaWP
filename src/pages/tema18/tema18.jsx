import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function WP_CPT_Manual_Completo() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · WordPress · Desarrollo profesional</p>
        <h1>Custom Post Types desde cero · Manual completo</h1>
        <p className="lead">
          Aprende a crear tipos de contenido personalizados como un desarrollador WordPress profesional.
          Desde la teoría hasta el código, pasando por la configuración correcta del tema hijo y las 
          mejores prácticas del sector.
        </p>

        <TipBox>
          <p>
            <strong>Objetivo profesional:</strong> Transformar WordPress en un CMS personalizado
            donde el cliente gestiona contenido estructurado sin tocar código.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <nav className="doc doc-index" aria-label="Índice de la lección">
        <a href="#fundamentos">1) Fundamentos: ¿Qué es un Custom Post Type?</a>
        <a href="#child-theme">2) Tema hijo: Base profesional obligatoria</a>  
        <a href="#cuando-usar">3) Cuándo usar CPT vs páginas normales</a>
        <a href="#planificacion">4) Planificación del proyecto: Caso "Rutas turísticas"</a>
        <a href="#instalacion-plugins">5) Plugins necesarios: CPT UI</a>
        <a href="#crear-cpt">6) Crear el Custom Post Type paso a paso</a>
        <a href="#estructura-archivos">7) Estructura de archivos y convenciones</a>
        <a href="#plantilla-single">8) Crear la plantilla single-rutas.php</a>
        <a href="#testing">9) Testing y depuración</a>
        <a href="#mejores-practicas">10) Mejores prácticas profesionales</a>
        <a href="#actividades">Actividades prácticas</a>
        <a href="#repaso">Repaso y checklist final</a>
      </nav>

      {/* 1) FUNDAMENTOS */}
      <section className="doc doc-section" id="fundamentos">
        <h2>1) Fundamentos: ¿Qué es un Custom Post Type?</h2>

        <details className="dd" open>
          <summary>WordPress por defecto: Entradas y Páginas</summary>
          <div className="dd-body">
            <p>
              WordPress incluye dos tipos de contenido principal:
            </p>
            <ul>
              <li><strong>Entradas (Posts):</strong> Contenido con fecha, autor, categorías. Ideal para blogs.</li>
              <li><strong>Páginas (Pages):</strong> Contenido estático sin fecha. Ideal para Inicio, Contacto, etc.</li>
            </ul>
            <p>
              Pero, ¿qué pasa si quieres gestionar <strong>productos</strong>, <strong>eventos</strong>, 
              <strong>testimonios</strong> o <strong>rutas turísticas</strong>? Ninguno de los dos tipos por defecto 
              se adapta bien.
            </p>
          </div>
        </details>

        <details className="dd" open>
          <summary>Custom Post Type: Tu propio tipo de contenido</summary>
          <div className="dd-body">
            <p>
              Un <strong>Custom Post Type (CPT)</strong> es una nueva sección en WordPress que funciona 
              igual que Entradas o Páginas, pero con su propio nombre y características.
            </p>
            <div style={{padding: '1rem', background: '#f8f9fa', borderRadius: '8px', margin: '1rem 0'}}>
              <h4>Ejemplo práctico: "Rutas turísticas"</h4>
              <ul>
                <li>✅ Aparece en el menú de administación como "Rutas"</li>
                <li>✅ Tiene su propia URL: <code>/rutas/</code></li>
                <li>✅ Cada ruta individual: <code>/rutas/ruta-por-triana/</code></li>
                <li>✅ Puede tener campos personalizados (precio, duración, mapa...)</li>
                <li>✅ Se puede manejar con plantillas específicas</li>
              </ul>
            </div>
          </div>
        </details>

        <WarningBox>
          <p>
            <strong>Error común:</strong> No uses Custom Post Types para contenido que podría ser una página normal.
            Usa CPT solo cuando necesites múltiples elementos con la misma estructura.
          </p>
        </WarningBox>

        <details className="dd" open>
          <summary>Ventajas profesionales de los CPT</summary>
          <div className="dd-body">
            <ol>
              <li><strong>Organización:</strong> El cliente ve "Rutas", "Testimonios", etc. por separado</li>
              <li><strong>Escalabilidad:</strong> Puedes añadir 100 rutas sin mezclarlas con páginas</li>
              <li><strong>Flexibilidad:</strong> Cada CPT puede tener campos y plantillas únicas</li>
              <li><strong>Mantenimiento:</strong> Más fácil hacer cambios masivos en un tipo específico</li>
              <li><strong>SEO:</strong> URLs organizadas y estructura clara</li>
            </ol>
          </div>
        </details>
      </section>

      {/* 2) CHILD THEME */}
      <section className="doc doc-section" id="child-theme">
        <h2>2) Tema hijo: Base profesional obligatoria</h2>

        <WarningBox>
          <p>
            <strong>ATENCIÓN:</strong> Antes de continuar, debes tener un tema hijo (child theme) activo.
            Sin esto, perderás todo tu trabajo cuando el tema padre se actualice.
          </p>
        </WarningBox>

        <details className="dd" open>
          <summary>¿Por qué es obligatorio un tema hijo?</summary>
          <div className="dd-body">
            <p>
              Vamos a crear archivos de plantilla personalizados como <code>single-rutas.php</code>.
              Si los colocas en el tema padre (ej: Astra), se borrarán cuando se actualice el tema.
            </p>
            <h4>Sin tema hijo:</h4>
            <ul style={{color: '#d63384'}}>
              <li>❌ Tema se actualiza &rarr; pierdes <code>single-rutas.php</code></li>
              <li>❌ Tienes que rehacer el trabajo</li>
              <li>❌ Cliente pierde funcionalidad</li>
            </ul>
            <h4>Con tema hijo:</h4>
            <ul style={{color: '#198754'}}>
              <li>✅ Tema padre se actualiza &rarr; tema hijo intacto</li>
              <li>✅ Tu código personalizado está seguro</li>
              <li>✅ Puedes actualizar sin problemas</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Verificar que tienes tema hijo activo</summary>
          <div className="dd-body">
            <p>Ve a <strong>Apariencia &rarr; Temas</strong> y confirma que tienes activo algo como:</p>
            <ul>
              <li>"Astra Child" o</li>
              <li>"Generatepress Child" o</li>
              <li>"[Nombre del tema] Child"</li>
            </ul>
            <p>
              Si no lo tienes, crea uno antes de continuar. La ruta de archivos será:
              <code>wp-content/themes/[tema-child]/</code>
            </p>
          </div>
        </details>

        <PracticeBox>
          <h3>Verifica la estructura de tu tema hijo</h3>
          <p>Comprueba que existe la carpeta: <code>wp-content/themes/astra-child/</code></p>
          <p>Y que contiene al menos: <code>style.css</code> y <code>functions.php</code></p>
        </PracticeBox>

        <TipBox>
          <p>
            <strong>Consejo profesional:</strong> Siempre documenta en el <code>functions.php</code> 
            del tema hijo qué personalizaciones has hecho y cuándo.
          </p>
        </TipBox>
      </section>

      {/* 3) CUÁNDO USAR */}
      <section className="doc doc-section" id="cuando-usar">
        <h2>3) Cuándo usar CPT vs páginas normales</h2>

        <details className="dd" open>
          <summary>✅ USA Custom Post Type cuando...</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Múltiples elementos similares:</strong> Rutas, productos, testimonios, eventos</li>
              <li><strong>Estructura repetitiva:</strong> Todos tienen precio, duración, imagen, etc.</li>
              <li><strong>Listados automáticos:</strong> Quieres mostrar "todas las rutas" en una página</li>
              <li><strong>Gestión separada:</strong> El cliente debe ver "Rutas" por separado</li>
              <li><strong>Campos personalizados:</strong> Necesitas más que título y contenido</li>
              <li><strong>Filtros y búsquedas:</strong> Por categoría, precio, ubicación, etc.</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>❌ NO uses CPT para...</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Páginas únicas:</strong> Sobre nosotros, Contacto, Política de privacidad</li>
              <li><strong>Landing pages:</strong> Páginas de marketing con diseño muy específico</li>
              <li><strong>Contenido editorial:</strong> Blog posts, noticias, artículos</li>
              <li><strong>Contenido que cambia poco:</strong> Información corporativa</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Casos de uso profesionales reales</summary>
          <div className="dd-body">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>🏨 Hotel</h4>
                <ul>
                  <li><strong>CPT "Habitaciones":</strong> Tipos, precios, fotos</li>
                  <li><strong>CPT "Servicios":</strong> Spa, restaurante, actividades</li>
                  <li><strong>Páginas normales:</strong> Contacto, ubicación</li>
                </ul>
              </div>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>🏥 Clínica</h4>
                <ul>
                  <li><strong>CPT "Tratamientos":</strong> Precio, duración, especialista</li>
                  <li><strong>CPT "Doctores":</strong> Especialidad, experiencia</li>
                  <li><strong>Páginas normales:</strong> Historia, instalaciones</li>
                </ul>
              </div>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>🎓 Academia</h4>
                <ul>
                  <li><strong>CPT "Cursos":</strong> Duración, precio, metodología</li>
                  <li><strong>CPT "Profesores":</strong> Bio, especialidades</li>
                  <li><strong>Páginas normales:</strong> Metodología, contacto</li>
                </ul>
              </div>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>🏘️ Inmobiliaria</h4>
                <ul>
                  <li><strong>CPT "Propiedades":</strong> Precio, m², ubicación</li>
                  <li><strong>CPT "Zonas":</strong> Características del barrio</li>
                  <li><strong>Páginas normales:</strong> Servicios, financiación</li>
                </ul>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* 4) PLANIFICACIÓN */}
      <section className="doc doc-section" id="planificacion">  
        <h2>4) Planificación del proyecto: Caso "Rutas turísticas"</h2>

        <details className="dd" open>
          <summary>Análisis de requisitos</summary>
          <div className="dd-body">
            <p>Antes de crear nada, necesitamos definir:</p>
            <h4>🎯 ¿Qué información tendrá cada ruta?</h4>
            <ul>
              <li>Título y descripción</li>
              <li>Imagen principal + galería</li>
              <li>Precio y duración</li>
              <li>Punto de encuentro</li>
              <li>Dificultad e idiomas disponibles</li>
              <li>Itinerario detallado</li>
              <li>Qué incluye / no incluye</li>
            </ul>

            <h4>📱 ¿Cómo va a usarlo el cliente?</h4>
            <ul>
              <li>Crear nuevas rutas fácilmente</li>
              <li>Modificar precios sin tocar código</li>
              <li>Añadir fotos sin conocimientos técnicos</li>
              <li>Activar/desactivar rutas temporalmente</li>
            </ul>

            <h4>🌐 ¿Cómo lo verán los visitantes?</h4>
            <ul>
              <li>Página individual de cada ruta: <code>/rutas/ruta-por-triana/</code></li>
              <li>Listado de todas las rutas: <code>/rutas/</code></li>
              <li>Posibilidad de filtrar por categoría/precio</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Convenciones de nomenclatura profesional</summary>
          <div className="dd-body">
            <p>Es crucial seguir estándares profesionales:</p>
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0'}}>
              <thead>
                <tr style={{background: '#f8f9fa'}}>
                  <th style={{padding: '8px', border: '1px solid #dee2e6'}}>Elemento</th>
                  <th style={{padding: '8px', border: '1px solid #dee2e6'}}>Convención</th>
                  <th style={{padding: '8px', border: '1px solid #dee2e6'}}>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}><strong>CPT Slug</strong></td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>minúsculas, plural, sin espacios</td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>rutas</td>
                </tr>
                <tr>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}><strong>Plantilla single</strong></td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>single-[slug].php</td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>single-rutas.php</td>
                </tr>
                <tr>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}><strong>Plantilla archivo</strong></td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>archive-[slug].php</td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>archive-rutas.php</td>
                </tr>
                <tr>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}><strong>Función register</strong></td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>register_[slug]_post_type</td>
                  <td style={{padding: '8px', border: '1px solid #dee2e6'}}>register_rutas_post_type</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>

        <TipBox>
          <p>
            <strong>Consejo pro:</strong> Siempre usa singular en las etiquetas que ve el usuario 
            ("Ruta") y plural en slugs técnicos ("rutas").
          </p>
        </TipBox>
      </section>

      {/* 5) PLUGINS */}
      <section className="doc doc-section" id="instalacion-plugins">
        <h2>5) Plugin necesario: Custom Post Type UI</h2>

        <details className="dd" open>
          <summary>¿Qué es Custom Post Type UI?</summary>
          <div className="dd-body">
            <h4>¿Qué hace?</h4>
            <p>
              Te permite crear Custom Post Types y taxonomías personalizadas desde una interfaz gráfica,
              sin escribir código.
            </p>
            
            <h4>Instalación paso a paso:</h4>
            <ol>
              <li>Ve a <strong>Plugins &rarr; Añadir nuevo</strong></li>
              <li>Busca "Custom Post Type UI"</li>
              <li>Instala y activa el plugin oficial (por WebDevStudios)</li>
              <li>Verás un nuevo menú "CPT UI" en el admin</li>
            </ol>

            <h4>¿Por qué no código manual?</h4>
            <ul>
              <li>✅ Más rápido para prototipos</li>
              <li>✅ No necesitas conocer todas las opciones</li>
              <li>✅ Reduce errores de sintaxis</li>
              <li>✅ El cliente puede modificar etiquetas si es necesario</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Verificación de instalación</summary>
          <div className="dd-body">
            <p>Después de instalarlo, debes ver en el menú de administración:</p>
            <ul>
              <li>📋 <strong>CPT UI</strong> (con submenús "Post Types" y "Taxonomies")</li>
            </ul>

            <PracticeBox>
              <p><strong>Comprobación rápida:</strong></p>
              <ul>
                <li>Haz clic en "CPT UI" - ¿se abre la configuración?</li>
                <li>¿Ves las opciones "Add/Edit Post Types" y "Add/Edit Taxonomies"?</li>
              </ul>
            </PracticeBox>
          </div>
        </details>

        <WarningBox>
          <p>
            <strong>Nota sobre ACF:</strong> En este tema nos centramos en el CPT. Los campos personalizados 
            con ACF los veremos en el próximo tema (Tema 19).
          </p>
        </WarningBox>
      </section>

      {/* 6) CREAR CPT */}
      <section className="doc doc-section" id="crear-cpt">
        <h2>6) Crear el Custom Post Type paso a paso</h2>

        <details className="dd" open>
          <summary>Paso 1: Acceder a CPT UI</summary>
          <div className="dd-body">
            <ol>
              <li>Ve al admin de WordPress</li>
              <li>Haz clic en <strong>CPT UI &rarr; Add/Edit Post Types</strong></li>
              <li>Pulsa el botón <strong>"Add New"</strong></li>
            </ol>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 2: Configuración básica (obligatoria)</summary>
          <div className="dd-body">
            <div style={{background: '#fff3cd', padding: '1rem', borderRadius: '8px', margin: '1rem 0'}}>
              <h4>Campos obligatorios:</h4>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <tbody>
                  <tr>
                    <td style={{padding: '8px', fontWeight: 'bold'}}>Post Type Slug</td>
                    <td style={{padding: '8px'}}><code>rutas</code></td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', fontWeight: 'bold'}}>Plural Label</td>
                    <td style={{padding: '8px'}}>Rutas</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', fontWeight: 'bold'}}>Singular Label</td>
                    <td style={{padding: '8px'}}>Ruta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <WarningBox>
              <p>
                <strong>¡IMPORTANTE!</strong> El slug debe ser exactamente <code>rutas</code> 
                (minúsculas, plural) para que las URLs funcionen correctamente.
              </p>
            </WarningBox>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 3: Configuración avanzada (recomendada)</summary>
          <div className="dd-body">
            <p>En la sección "Advanced Options", configura:</p>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>✅ Activar</h4>
                <ul>
                  <li><strong>Public:</strong> Visible en frontend</li>
                  <li><strong>Show UI:</strong> Aparece en admin</li>
                  <li><strong>Show in Menu:</strong> Menú en admin</li>
                  <li><strong>Show in REST API:</strong> Gutenberg/API</li>
                  <li><strong>Has Archive:</strong> Permite /rutas/</li>
                  <li><strong>Query Var:</strong> URLs amigables</li>
                </ul>
              </div>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>📝 Configurar</h4>
                <ul>
                  <li><strong>Menu Icon:</strong> <code>dashicons-location-alt</code></li>
                  <li><strong>Menu Position:</strong> <code>6</code> (después de Posts)</li>
                  <li><strong>Supports:</strong> Title, Editor, Thumbnail, Custom Fields</li>
                  <li><strong>Rewrite Slug:</strong> <code>rutas</code></li>
                </ul>
              </div>
            </div>

            <TipBox>
              <p>
                <strong>Menu Icon:</strong> Busca iconos en 
                <a href="https://developer.wordpress.org/resource/dashicons/" target="_blank" rel="noopener">
                  Dashicons
                </a> para personalizar el icono del menú.
              </p>
            </TipBox>
          </div>
        </details>

        <details className="dd" open>
          <summary>Configuración completa recomendada</summary>
          <div className="dd-body">
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px', overflowX: 'auto'}}>
{`┌─ CONFIGURACIÓN CPT RUTAS ─────────────────────┐
│                                               │
│ Post Type Slug: rutas                         │
│ Plural Label: Rutas                           │
│ Singular Label: Ruta                          │
│                                               │
│ ✅ Public: true                               │
│ ✅ Show UI: true                              │ 
│ ✅ Show in Menu: true                         │
│ ✅ Show in REST: true                         │
│ ✅ Has Archive: true                          │
│ ✅ Query Var: true                            │
│                                               │
│ 🎨 Menu Icon: dashicons-location-alt          │
│ 📍 Menu Position: 6                           │
│                                               │
│ 📋 Supports:                                  │
│   • Title                                     │
│   • Editor                                    │ 
│   • Thumbnail                                 │
│   • Custom Fields                             │
│                                               │
│ 🔗 Rewrite: true                              │
│ 🔗 Rewrite Slug: rutas                        │
│                                               │
└───────────────────────────────────────────────┘`}
            </pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>Paso 4: Guardar y verificar</summary>
          <div className="dd-body">
            <ol>
              <li>Pulsa el botón <strong>"Add Post Type"</strong></li>
              <li>Si todo está correcto, verás un mensaje de éxito</li>
              <li>Comprueba que aparece "Rutas" en el menú lateral del admin</li>
              <li>Haz clic en "Rutas" para ver la lista vacía</li>
            </ol>

            <PracticeBox>
              <h3>⚡ Test inmediato</h3>
              <ol>
                <li>Haz clic en "Rutas &rarr; Añadir nueva"</li>
                <li>Escribe un título de prueba: "Test ruta"</li>
                <li>Añade contenido básico en el editor</li>
                <li>Pulsa "Publicar"</li>
                <li>Pulsa "Ver Ruta" - ¿funciona la URL?</li>
              </ol>
            </PracticeBox>
          </div>
        </details>
      </section>

      {/* 7) ESTRUCTURA ARCHIVOS */}
      <section className="doc doc-section" id="estructura-archivos">
        <h2>7) Estructura de archivos y convenciones</h2>

        <details className="dd" open>
          <summary>Jerarquía de plantillas de WordPress</summary>
          <div className="dd-body">
            <p>WordPress busca automáticamente archivos de plantilla en este orden:</p>
            
            <h4>Para una ruta individual (<code>/rutas/mi-ruta/</code>):</h4>
            <ol>
              <li><code>single-rutas-[slug].php</code> (ej: single-rutas-mi-ruta.php)</li>
              <li><code>single-rutas.php</code> ⭐ <em>Este el que vamos a crear</em></li>
              <li><code>single.php</code></li>
              <li><code>singular.php</code></li>
              <li><code>index.php</code></li>
            </ol>

            <h4>Para el listado de rutas (<code>/rutas/</code>):</h4>
            <ol>
              <li><code>archive-rutas.php</code> ⭐ <em>Lo veremos en el próximo tema</em></li>
              <li><code>archive.php</code></li>
              <li><code>index.php</code></li>
            </ol>

            <TipBox>
              <p>
                <strong>Convención profesional:</strong> Siempre crea plantillas específicas 
                (single-rutas.php) en lugar de modificar las genéricas.
              </p>
            </TipBox>
          </div>
        </details>

        <details className="dd" open>
          <summary>Estructura recomendada del tema hijo</summary>
          <div className="dd-body">
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`wp-content/themes/astra-child/
├── style.css                  # Estilos del tema hijo
├── functions.php              # Funciones personalizadas
├── single-rutas.php           # Plantilla individual ruta
├── archive-rutas.php          # Listado de rutas
├── inc/                       # (opcional) includes organizados
│   ├── cpt-functions.php      # Funciones específicas de CPT
│   └── acf-functions.php      # Helpers para ACF
├── assets/                    # (opcional) recursos
│   ├── css/
│   │   └── rutas-styles.css
│   └── js/
│       └── rutas-scripts.js
└── template-parts/            # (opcional) partes reutilizables
    ├── ruta-card.php          # Tarjeta de ruta
    └── ruta-meta.php          # Meta información`}
            </pre>

            <WarningBox>
              <p>
                <strong>Ubicación importante:</strong> Los archivos van en la raíz del tema hijo, 
                NO en una subcarpeta.
              </p>
            </WarningBox>
          </div>
        </details>
      </section>

      {/* 8) PLANTILLA SINGLE */}
      <section className="doc doc-section" id="plantilla-single">
        <h2>8) Crear la plantilla single-rutas.php</h2>

        <details className="dd" open>
          <summary>Crear el archivo base</summary>
          <div className="dd-body">
            <ol>
              <li>Conecta por FTP/File Manager a tu servidor</li>
              <li>Navega a <code>wp-content/themes/astra-child/</code></li>
              <li>Crea un archivo nuevo llamado exactamente <code>single-rutas.php</code></li>
            </ol>

            <WarningBox>
              <p>
                <strong>Atención al nombre:</strong> Debe ser exactamente <code>single-rutas.php</code>, 
                no "single-ruta.php" ni "single_rutas.php".
              </p>
            </WarningBox>
          </div>
        </details>

        <details className="dd" open>
          <summary>Plantilla básica funcional (copia y pega)</summary>
          <div className="dd-body">
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px', overflowX: 'auto'}}>
{`<?php
/**
 * Plantilla para mostrar rutas individuales
 * Archivo: single-rutas.php
 */

get_header(); ?>

<div class="single-ruta-container">
  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
      
      <article id="post-<?php the_ID(); ?>" <?php post_class('single-ruta'); ?>>
        
        <!-- Título y metadatos básicos -->
        <header class="ruta-header">
          <h1 class="ruta-title"><?php the_title(); ?></h1>
          
          <?php if (has_post_thumbnail()) : ?>
            <div class="ruta-featured-image">
              <?php the_post_thumbnail('large', array('alt' => get_the_title())); ?>
            </div>
          <?php endif; ?>
        </header>

        <!-- Contenido principal -->
        <div class="ruta-content">
          <?php the_content(); ?>
        </div>

        <!-- Aquí añadiremos los campos de ACF en el próximo tema -->
        <div class="ruta-fields">
          <p><em>Los campos personalizados se mostrarán aquí cuando configuremos ACF en el Tema 19.</em></p>
        </div>

      </article>
      
    <?php endwhile; ?>
  <?php endif; ?>
</div>

<?php get_footer(); ?>`}
            </pre>

            <TipBox>
              <p>
                <strong>Esta plantilla básica:</strong> Muestra el título, imagen destacada y contenido.
                En el próximo tema añadiremos campos personalizados con ACF.
              </p>
            </TipBox>
          </div>
        </details>

        <PracticeBox>
          <h3>🧪 Probar la plantilla</h3>
          <ol>
            <li>Ve a "Rutas &rarr; Añadir nueva"</li>
            <li>Título: "Ruta de prueba por Triana"</li>
            <li>Añade una imagen destacada</li>
            <li>Escribe algo de contenido</li>
            <li>Publica y pulsa "Ver ruta"</li>
            <li>¿Se carga con tu plantilla personalizada?</li>
          </ol>
        </PracticeBox>
      </section>

      {/* CONFIGURACIÓN AVANZADA CPT */}
      <section className="doc doc-section" id="configuracion-avanzada">
        <h2>Configuración Avanzada de CPT UI: El puente hacia ACF</h2>
        
        <TipBox>
          <p>
            <strong>Concepto clave:</strong> WordPress separa el contenido en tablas. Para que un botón "encuentre" una ruta, debemos darle permiso explícito a través de la <strong>REST API</strong>.
          </p>
        </TipBox>

        <div className="doc-content">
          <h3>1. Ajustes de Configuración Obligatorios</h3>
          <p>Dentro de <strong>CPT UI &rarr; Editar tipos de contenido</strong>, localiza la pestaña "Ajustes" y asegúrate de que estos valores coincidan exactamente:</p>
          
          <div className="table-wrap">
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
              <thead>
                <tr style={{background: '#f8f9fa'}}>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Ajuste Técnico</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Valor</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Impacto en el Proyecto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Público (Public)</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Hace que el tipo de contenido exista para el mundo exterior.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Públicamente consultable</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Permite que la URL <code>/rutas/nombre-ruta</code> cargue en el navegador.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Excluir de la búsqueda</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Falso</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Vital:</strong> Si está en Verdadero, el buscador de enlaces del botón NO encontrará tus rutas.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Mostrar en REST API</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Habilita la comunicación con el editor moderno (Gutenberg) y maquetadores como Astra o Elementor.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Base de la REST API</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>rutas</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Define la "matrícula" técnica del contenido. Escribe siempre el slug en minúsculas.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Has Archive (Tiene archivo)</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Activa la capacidad de tener un listado automático (el archivo <code>archive-rutas.php</code>).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <details className="dd" open>
          <summary>¿Por qué mi botón no encuentra la ruta? (Solución de errores)</summary>
      <div className="dd-body">
        <p>Si has seguido la tabla anterior y al escribir "Parque" en un botón sigue sin aparecer nada, el problema es la <strong>indexación</strong>. Sigue este protocolo de emergencia:</p>
        <ol>
          <li><strong>Refresco de Enlaces:</strong> Ve a <em>Ajustes &gt; Enlaces permanentes</em> y haz clic en "Guardar cambios" dos veces. Esto limpia la caché de rutas de la base de datos.</li>
          <li><strong>Estado de Publicación:</strong> Asegúrate de que tu ruta no esté en "Borrador". El buscador de enlaces solo indexa contenido "Publicado".</li>
          <li><strong>Soporte de Título:</strong> Revisa que en la sección final de CPT UI tengas marcada la casilla <strong>Título (Title)</strong>. Sin título, el buscador no tiene texto que comparar.</li>
        </ol>
      </div>
    </details>

    <details className="dd">
      <summary>Soportes del Contenido (Sección Supports)</summary>
      <div className="dd-body">
        <p>Al final de los ajustes de CPT UI verás una lista de checkboxes. Para una web de rutas profesional, marca estas:</p>
        <ul>
          <li><strong>Título:</strong> Imprescindible para el nombre de la ruta.</li>
          <li><strong>Editor:</strong> Útil para la descripción larga, aunque luego uses ACF.</li>
          <li><strong>Imagen destacada:</strong> Necesaria si quieres usar el sistema de miniaturas nativo de WordPress.</li>
          <li><strong>Revisiones:</strong> Recomendado para poder volver atrás si te equivocas editando.</li>
        </ul>
      </div>
    </details>

    <details className="dd">
      <summary>Visualización en el Panel (Labels e Iconos)</summary>
      <div className="dd-body">
        <p>Para que tu cliente no se pierda, personaliza la apariencia en el menú lateral:</p>
        <ul>
          <li><strong>Menu Icon:</strong> Busca en "Dashicons" y elige <code>dashicons-location</code> o <code>dashicons-palmtree</code>.</li>
          <li><strong>Menu Position:</strong> Pon un <code>5</code> para que aparezca justo debajo de "Entradas", o un <code>20</code> para que esté debajo de "Páginas".</li>
        </ul>
      </div>
    </details>

    <WarningBox>
      <p>
        <strong>¡Ojo!</strong> Nunca cambies el "Slug" del CPT (de <code>rutas</code> a <code>mis-rutas</code>, por ejemplo) una vez que ya tengas contenido creado. 
        Si lo haces, todas las rutas que hayas escrito desaparecerán de la vista y tendrás que reasignarlas en la base de datos.
      </p>
    </WarningBox>

    <PracticeBox>
      <h3>Ejercicio de Verificación</h3>
      <p>
        Una vez configurado todo, abre una pestaña nueva y escribe: <br />
        <code>tu-dominio.local/wp-json/wp/v2/rutas</code> <br />
        Si ves una pantalla llena de código (JSON), significa que has configurado la REST API correctamente y tu buscador de botones debería funcionar al 100%.
      </p>
    </PracticeBox>

    <details className="dd" open>
      <summary>Estilos CSS básicos para la plantilla</summary>
      <div className="dd-body">
        <p>Añade estos estilos al <code>style.css</code> de tu tema hijo:</p>

        <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px', overflowX: 'auto'}}>
{`/* === ESTILOS PARA RUTAS === */
.single-ruta-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.ruta-header {
  margin-bottom: 2rem;
  text-align: center;
}

.ruta-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.ruta-featured-image {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.ruta-featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

.ruta-content {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.ruta-fields {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #007cba;
}

/* Responsive */
@media (max-width: 768px) {
  .ruta-title {
    font-size: 2rem;
  }
  
  .single-ruta-container {
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
}`}
        </pre>
      </div>
    </details>

    <PracticeBox>
      <h3>🧪 Probar la plantilla</h3>
      <ol>
        <li>Ve a "Rutas &rarr; Añadir nueva"</li>
        <li>Título: "Ruta de prueba por Triana"</li>
        <li>Añade una imagen destacada</li>
        <li>Escribe algo de contenido</li>
        <li>Publica y pulsa "Ver ruta"</li>
        <li>¿Se carga con tu plantilla personalizada?</li>
      </ol>
    </PracticeBox>
  </section>

      {/* 9) TESTING */}
      <section className="doc doc-section" id="testing">
        <h2>9) Testing y depuración</h2>

        <details className="dd" open>
          <summary>Problemas comunes y soluciones</summary>
          <div className="dd-body">
            <h4>❌ Error 404 al ver una ruta</h4>
            <p><strong>Solución:</strong></p>
            <ol>
              <li>Ve a <strong>Ajustes &rarr; Enlaces permanentes</strong></li>
              <li>Pulsa <strong>"Guardar cambios"</strong> (sin cambiar nada)</li>
              <li>Esto regenera las reglas de rewrite</li>
            </ol>

            <h4>❌ La plantilla no se carga (sigue usando single.php)</h4>
            <p><strong>Verificaciones:</strong></p>
            <ul>
              <li>¿El archivo se llama exactamente <code>single-rutas.php</code>?</li>
              <li>¿Está en la raíz del tema hijo, no en subcarpeta?</li>
              <li>¿El slug del CPT es efectivamente "rutas"?</li>
            </ul>

            <h4>❌ El menú "Rutas" no aparece en admin</h4>
            <p><strong>Verificaciones:</strong></p>
            <ul>
              <li>¿Has guardado el CPT con "Show in Menu" activado?</li>
              <li>¿Tu usuario tiene permisos de administrador?</li>
              <li>Prueba a desactivar y reactivar el plugin CPT UI</li>
            </ul>
          </div>
        </details>

        <details className="dd" open>
          <summary>Herramientas de depuración</summary>
          <div className="dd-body">
            <h4>1. Debug en WordPress</h4>
            <p>Añade estas líneas al <code>wp-config.php</code> para ver errores:</p>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);`}
            </pre>

            <h4>2. Verificar qué plantilla se está usando</h4>
            <p>Añade esto temporalmente al <code>functions.php</code> del tema hijo:</p>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`// TEMPORAL: Ver qué plantilla se carga
function mostrar_plantilla_actual() {
    if (current_user_can('administrator') && isset($_GET['debug'])) {
        global $template;
        echo '<div style="position:fixed;top:0;left:0;background:red;color:white;padding:10px;z-index:9999;">';
        echo 'Plantilla: ' . basename($template);
        echo '</div>';
    }
}
add_action('wp_footer', 'mostrar_plantilla_actual');`}
            </pre>
            <p>Luego visita una ruta con <code>?debug=1</code> al final de la URL.</p>

            <h4>3. Plugin Query Monitor (recomendado)</h4>
            <p>Instala "Query Monitor" para ver información detallada sobre plantillas, queries y errores.</p>
          </div>
        </details>

        <PracticeBox>
          <h3>✅ Checklist de testing</h3>
          <ul>
            <li>☐ Crear una ruta nueva desde admin</li>
            <li>☐ La URL individual funciona (<code>/rutas/nombre-ruta/</code>)</li>
            <li>☐ Se carga la plantilla personalizada</li>
            <li>☐ Los estilos CSS se aplican correctamente</li>
            <li>☐ La imagen destacada se muestra</li>
            <li>☐ No hay errores 404 o PHP</li>
          </ul>
        </PracticeBox>
      </section>

      {/* 10) MEJORES PRÁCTICAS */}
      <section className="doc doc-section" id="mejores-practicas">
        <h2>10) Mejores prácticas profesionales</h2>

        <details className="dd" open>
          <summary>🗂️ Organización y documentación</summary>
          <div className="dd-body">
            <h4>Documenta todo en functions.php</h4>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`<?php
/**
 * TEMA HIJO - PROYECTO RUTAS TURÍSTICAS
 * Cliente: [Nombre del cliente]
 * Desarrollador: [Tu nombre]
 * Fecha: [Fecha de desarrollo]
 * 
 * CUSTOM POST TYPES IMPLEMENTADOS:
 * - Rutas turísticas (slug: rutas)
 *   - single-rutas.php (ficha individual)
 *   - archive-rutas.php (listado completo)
 *   - Campos ACF: precio, duración, ubicación, etc.
 * 
 * PLUGINS REQUERIDOS:
 * - Custom Post Type UI
 * - Advanced Custom Fields
 * - Astra (tema padre)
 */`}
            </pre>

            <h4>Comentarios en plantillas</h4>
            <p>Siempre incluye comentarios explicativos en tus plantillas:</p>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`<?php
/**
 * Plantilla: Ruta individual
 * Archivo: single-rutas.php
 * Descripción: Muestra la ficha completa de una ruta turística
 * 
 * Campos ACF utilizados:
 * - precio_ruta (number)
 * - duracion_ruta (text)
 * - ubicacion_ruta (text)
 * 
 * Última modificación: [Fecha]
 */`}
            </pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>🔒 Seguridad y validación</summary>
          <div className="dd-body">
            <h4>Escapar contenido siempre</h4>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`// ❌ MALO - vulnerable a XSS
<h2><?php echo get_field('titulo_ruta'); ?></h2>

// ✅ BUENO - contenido escapado
<h2><?php echo esc_html(get_field('titulo_ruta')); ?></h2>

// ✅ Para contenido HTML válido
<div><?php echo wp_kses_post(get_field('descripcion_ruta')); ?></div>

// ✅ Para URLs
<a href="<?php echo esc_url(get_field('enlace_reservas')); ?>">Reservar</a>`}
            </pre>

            <h4>Verificar existencia de campos</h4>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`// ✅ SIEMPRE verifica que el campo existe
<?php if (get_field('precio_ruta')) : ?>
  <span class="precio"><?php echo esc_html(get_field('precio_ruta')); ?>€</span>
<?php endif; ?>`}
            </pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>⚡ Rendimiento y optimización</summary>
          <div className="dd-body">
            <h4>Lazy loading para imágenes</h4>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`// ✅ Con lazy loading automático
<?php 
if (has_post_thumbnail()) {
    the_post_thumbnail('large', array(
        'alt' => get_the_title(),
        'loading' => 'lazy'
    ));
}
?>`}
            </pre>

            <h4>CSS y JS solo donde se necesitan</h4>
            <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '8px'}}>
{`// En functions.php - cargar estilos solo en rutas
function enqueue_rutas_styles() {
    if (is_singular('rutas') || is_post_type_archive('rutas')) {
        wp_enqueue_style(
            'rutas-styles', 
            get_stylesheet_directory_uri() . '/assets/css/rutas.css',
            array(),
            '1.0.0'
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_rutas_styles');`}
            </pre>
          </div>
        </details>

        <TipBox>
          <p>
            <strong>Regla de oro:</strong> Código limpio hoy = mantenimiento fácil mañana. 
            El cliente te lo agradecerá cuando necesite modificaciones.
          </p>
        </TipBox>
      </section>

      {/* ACTIVIDADES */}
      <section className="doc doc-section" id="actividades">
        <h2>Actividades prácticas</h2>

        <ActivityBox>
          <h3>🎯 Actividad 1: Implementación básica</h3>
          <h4>Objetivo: Crear un CPT funcional desde cero</h4>
          <ol>
            <li>Verificar que tienes tema hijo activo</li>
            <li>Instalar y configurar Custom Post Type UI</li>
            <li>Crear CPT "rutas" con configuración completa</li>
            <li>Verificar que aparece el menú en admin</li>
          </ol>
          <p><strong>Entregable:</strong> Screenshots del menú admin y configuración CPT</p>
        </ActivityBox>

        <ActivityBox>
          <h3>🛠️ Actividad 2: Plantilla personalizada</h3>
          <h4>Objetivo: Crear plantilla funcional y con estilos</h4>
          <ol>
            <li>Crear archivo <code>single-rutas.php</code> en tema hijo</li>
            <li>Implementar plantilla básica con header/footer</li>
            <li>Añadir estilos CSS personalizados</li>
            <li>Crear 3 rutas de prueba con imágenes</li>
          </ol>
          <p><strong>Entregable:</strong> URLs funcionales de las 3 rutas creadas</p>
        </ActivityBox>

        <ActivityBox>
          <h3>🔍 Actividad 3: Testing y depuración</h3>
          <h4>Objetivo: Verificar funcionalidad y resolver problemas</h4>
          <ol>
            <li>Probar URLs individuales de rutas</li>
            <li>Verificar que se carga la plantilla correcta</li>
            <li>Comprobar responsive design</li>
            <li>Resolver cualquier error 404 o de CSS</li>
          </ol>
          <p><strong>Entregable:</strong> Lista de verificación completada</p>
        </ActivityBox>

        <ActivityBox>
          <h3>🚀 Actividad 4: Caso real avanzado</h3>
          <h4>Objetivo: Implementar un segundo CPT diferente</h4>
          <p>Elige UNO de estos casos y impleméntalo completo:</p>
          <ul>
            <li><strong>Testimonios:</strong> Para mostrar opiniones de clientes</li>
            <li><strong>Equipo:</strong> Para mostrar miembros del team</li>
            <li><strong>Servicios:</strong> Para empresa de servicios</li>
            <li><strong>Portfolio:</strong> Para trabajos realizados</li>
          </ul>
          <p><strong>Entregable:</strong> CPT funcional con 5 entradas y plantilla personalizada</p>
        </ActivityBox>

        <PracticeBox>
          <h3>💡 Consejos para las actividades</h3>
          <ul>
            <li><strong>Documenta el proceso:</strong> Anota problemas encontrados y soluciones</li>
            <li><strong>Usa naming conventions:</strong> Nombres claros y consistentes</li>
            <li><strong>Testa en móvil:</strong> Comprueba responsive en dispositivos reales</li>
            <li><strong>Backup frecuentemente:</strong> Antes de cada cambio importante</li>
          </ul>
        </PracticeBox>
      </section>

      {/* REPASO */}
      <section className="doc doc-section" id="repaso">
        <h2>Repaso y checklist final</h2>

        <details className="dd" open>
          <summary>✅ Checklist de implementación correcta</summary>
          <div className="dd-body">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem'}}>
              
              <div style={{padding: '1rem', border: '1px solid #28a745', borderRadius: '8px', background: '#f8fff9'}}>
                <h4>🔧 Configuración técnica</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>☐ Tema hijo activo y funcionando</li>
                  <li>☐ Custom Post Type UI instalado</li>
                  <li>☐ CPT "rutas" creado correctamente</li>
                  <li>☐ Menu "Rutas" visible en admin</li>
                  <li>☐ Enlaces permanentes regenerados</li>
                </ul>
              </div>

              <div style={{padding: '1rem', border: '1px solid #17a2b8', borderRadius: '8px', background: '#f8fcff'}}>
                <h4>📁 Estructura de archivos</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>☐ single-rutas.php en tema hijo</li>
                  <li>☐ Estilos CSS añadidos</li>
                  <li>☐ Comentarios de documentación</li>
                  <li>☐ Código escapado por seguridad</li>
                  <li>☐ Responsive design implementado</li>
                </ul>
              </div>

              <div style={{padding: '1rem', border: '1px solid #ffc107', borderRadius: '8px', background: '#fffdf7'}}>
                <h4>🧪 Testing funcional</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>☐ URLs individuales funcionan</li>
                  <li>☐ Se carga plantilla personalizada</li>
                  <li>☐ Imágenes destacadas se muestran</li>
                  <li>☐ Sin errores 404 o PHP</li>
                  <li>☐ Vista móvil correcta</li>
                </ul>
              </div>

              <div style={{padding: '1rem', border: '1px solid #6f42c1', borderRadius: '8px', background: '#fdfbff'}}>
                <h4>📚 Documentación</h4>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>☐ Comentarios en functions.php</li>
                  <li>☐ Headers en archivos de plantilla</li>
                  <li>☐ Convenciones de nomenclatura</li>
                  <li>☐ Backup del proyecto realizado</li>
                  <li>☐ Lista de plugins dependientes</li>
                </ul>
              </div>

            </div>
          </div>
        </details>

        <details className="dd" open>
          <summary>🔗 Preparación para el siguiente tema</summary>
          <div className="dd-body">
            <p>
              En el <strong>Tema 19</strong> vamos a ampliar este trabajo añadiendo:
            </p>
            <ul>
              <li><strong>Advanced Custom Fields (ACF):</strong> Campos personalizados para cada ruta</li>
              <li><strong>Plantilla completa:</strong> Mostrar precio, duración, ubicación, etc.</li>
              <li><strong>Archive template:</strong> Listado automático de todas las rutas</li>
              <li><strong>Funcionalidades avanzadas:</strong> Google Maps, galerías, filtros</li>
            </ul>

            <WarningBox>
              <p>
                <strong>Importante:</strong> No borres las rutas de prueba que has creado. 
                Las usaremos en el siguiente tema para añadir campos personalizados.
              </p>
            </WarningBox>
          </div>
        </details>

        <TipBox>
          <p>
            <strong>¡Felicidades!</strong> Has implementado tu primer Custom Post Type profesional.
            Ahora WordPress ya no es solo un blog - es un CMS personalizado para tu cliente.
          </p>
        </TipBox>

        <div className="doc doc-next">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '8px'}}>
            <a className="btn" href="#fundamentos">
              ↑ Volver arriba
            </a>
            <strong style={{color: '#6c757d'}}>
              Siguiente: Tema 19 - Advanced Custom Fields
            </strong>
            <a className="btn btn-primary" href="/tema19/">
              Continuar &rarr;
            </a>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}