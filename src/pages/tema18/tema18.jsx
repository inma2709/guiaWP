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

        <TipBox title="🎯 Objetivo de este tema">
          <p>
            <strong>Al finalizar dominarás:</strong> Transformar WordPress en un CMS personalizado
            donde el cliente gestiona contenido estructurado sin tocar código.
          </p>
          <p><strong>Tiempo estimado:</strong> 2.5 horas · <strong>Nivel:</strong> Intermedio-Avanzado</p>
          <p><strong>Requisitos previos:</strong> <a href="/tema4">Temas en WordPress (M4)</a> y conocimientos básicos de HTML</p>
        </TipBox>

        <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1rem 0', color: 'white'}}>🚀 Lo que construiremos hoy</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
            <div style={{padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🏛️ Custom Post Type</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Sistema "Paseos" en WordPress</p>
            </div>
            <div style={{padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🎨 Plantilla personalizada</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>single-paseo.php profesional</p>
            </div>
            <div style={{padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>⚙️ Configuración avanzada</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>URLs, permisos y opciones</p>
            </div>
          </div>
        </div>
      </header>

      {/* ÍNDICE */}
      <nav className="doc doc-index" aria-label="Índice de la lección">
        <a href="#fundamentos">1) Fundamentos: ¿Qué es un Custom Post Type?</a>
        <a href="#child-theme">2) Tema hijo: Base profesional obligatoria</a>  
        <a href="#cuando-usar">3) Cuándo usar CPT vs páginas normales</a>
        <a href="#planificacion">4) Planificación del proyecto: Caso "paseo turísticas"</a>
        <a href="#instalacion-plugins">5) Plugins necesarios: CPT UI</a>
        <a href="#crear-cpt">6) Crear el Custom Post Type paso a paso</a>
        <a href="#estructura-archivos">7) Estructura de archivos y convenciones</a>
        <a href="#plantilla-single">8) Crear la plantilla single-paseo.php</a>
        <a href="#testing">9) Testing y depuración</a>
        <a href="#mejores-practicas">10) Mejores prácticas profesionales</a>
        <a href="#actividades">Actividades prácticas</a>
        <a href="#repaso">Repaso y checklist final</a>
      </nav>

      {/* 1) FUNDAMENTOS */}
      <section className="doc doc-section" id="fundamentos">
        <h2>1) Fundamentos: ¿Qué es un Custom Post Type?</h2>

        <details className="dd" open>
          <summary>🆚 WordPress por defecto vs. Necesidades reales</summary>
          <div className="dd-body">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
              <div style={{padding: '1rem', border: '3px solid #28a745', borderRadius: '8px', background: '#f8fff9'}}>
                <h4 style={{margin: '0 0 0.5rem 0', color: '#28a745'}}>📝 Entradas (Posts)</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Blog, noticias</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Con fecha y autor</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Categorías, etiquetas</p>
              </div>
              <div style={{padding: '1rem', border: '3px solid #007bff', borderRadius: '8px', background: '#f8fcff'}}>
                <h4 style={{margin: '0 0 0.5rem 0', color: '#007bff'}}>📄 Páginas (Pages)</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Información estática</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Sin fecha ni autor</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>✅ Inicio, Contacto, Sobre nosotros</p>
              </div>
              <div style={{padding: '1rem', border: '3px solid #dc3545', borderRadius: '8px', background: '#fff8f8'}}>
                <h4 style={{margin: '0 0 0.5rem 0', color: '#dc3545'}}>❌ ¿Qué falta?</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>❓ Productos</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>❓ Eventos</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>❓ Testimonios</p>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0'}}>❓ <strong>Paseos turísticos</strong></p>
              </div>
            </div>
            
            <div className="callout warn">
              <p><strong>El problema:</strong> ¿Dónde clasificas "Paseo por Triana" o "Visita a la Catedral"?</p>
              <ul>
                <li>❌ <strong>Como entrada:</strong> No es una noticia con fecha</li>
                <li>❌ <strong>Como página:</strong> Vas a tener 50+ paseos</li>
                <li>✅ <strong>Como Custom Post Type:</strong> ¡Exacto! Tu propia sección</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="dd" open>
          <summary>🎯 Custom Post Type: Tu propio tipo de contenido</summary>
          <div className="dd-body">
            <p>
              Un <strong>Custom Post Type (CPT)</strong> es una nueva sección en WordPress que funciona 
              igual que Entradas o Páginas, pero con su propio nombre y características.
            </p>
            
            <div style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)', border: '2px solid #1976d2', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
              <h4 style={{color: '#1976d2', margin: '0 0 1rem 0'}}>🏛️ Transformación visual del admin</h4>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div>
                  <h5 style={{color: '#666', margin: '0 0 0.5rem 0'}}>❌ ANTES (WordPress básico)</h5>
                  <div style={{padding: '0.75rem', background: '#f5f5f5', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.85rem'}}>
                    📄 Páginas<br/>
                    📝 Entradas<br/>
                    💬 Comentarios<br/>
                    🎨 Apariencia
                  </div>
                </div>
                <div>
                  <h5 style={{color: '#1976d2', margin: '0 0 0.5rem 0'}}>✅ DESPUÉS (Con CPT)</h5>
                  <div style={{padding: '0.75rem', background: '#fff', border: '2px solid #1976d2', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.85rem'}}>
                    📄 Páginas<br/>
                    📝 Entradas<br/>
                    <strong style={{color: '#1976d2'}}>🚶 Paseos</strong> ← ¡Nuevo!<br/>
                    💬 Comentarios<br/>
                    🎨 Apariencia
                  </div>
                </div>
              </div>
            </div>

            <h4>🔗 Arquitectura de URLs resultante:</h4>
            <div style={{background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '1rem', fontFamily: 'monospace'}}>
              <p style={{margin: '0.25rem 0', color: '#28a745'}}><strong>tusitio.com/paseos/</strong> → Listado de todos los paseos</p>
              <p style={{margin: '0.25rem 0', color: '#007bff'}}><strong>tusitio.com/paseos/paseo-por-triana/</strong> → Paseo individual</p>
              <p style={{margin: '0.25rem 0', color: '#007bff'}}><strong>tusitio.com/paseos/visita-catedral/</strong> → Otro paseo individual</p>
            </div>
            
            <TipBox title="🧠 ¿Cómo lo ve tu cliente?">
              <p>El cliente <strong>no sabe que existe algo llamado "Custom Post Type"</strong>. Para él, simplemente ve:</p>
              <ul>
                <li>🎯 Una sección nueva llamada <strong>"Paseos"</strong> en el menú</li>
                <li>📝 Un botón <strong>"Añadir nuevo paseo"</strong> familiar</li>
                <li>📋 Una lista ordenada de todos sus paseos</li>
              </ul>
              <p><em>Exactamente como gestiona páginas, pero organizadas por tipo de contenido.</em></p>
            </TipBox>
          </div>
        </details>

        <ActivityBox title="🤔 Test de comprensión: ¿CPT o no CPT?">
          <p>Antes de continuar, evalúa estos casos. ¿Usarías Custom Post Type?</p>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
            <div style={{padding: '1rem', background: '#fff3cd', borderRadius: '8px', border: '2px solid #ffc107'}}>
              <h4 style={{color: '#856404', margin: '0 0 0.5rem 0'}}>🤔 Casos a evaluar</h4>
              <ul style={{margin: 0, fontSize: '0.9rem'}}>
                <li>🏖️ 20+ hoteles con precio, ubicación, servicios</li>
                <li>📄 Página "Sobre nosotros" de la empresa</li>
                <li>🍕 50+ platos de restaurante con ingredientes</li>
                <li>📞 Página "Contacto" con formulario</li>
                <li>👨‍⚕️ 15+ doctores con especialidad y horario</li>
                <li>📜 Página "Política de privacidad"</li>
                <li>🎓 30+ cursos con duración y precio</li>
              </ul>
            </div>
            <div style={{padding: '1rem', background: '#d1ecf1', borderRadius: '8px', border: '2px solid #bee5eb'}}>
              <h4 style={{color: '#0c5460', margin: '0 0 0.5rem 0'}}>📏 Regla de decisión</h4>
              <div style={{background: 'white', padding: '0.75rem', borderRadius: '6px', margin: '0.5rem 0'}}>
                <p style={{margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#28a745'}}>✅ USA Custom Post Type cuando:</p>
                <ul style={{margin: 0, fontSize: '0.85rem'}}>
                  <li><strong>Múltiples elementos</strong> con la misma estructura</li>
                  <li><strong>Campos repetitivos</strong> (precio, duración, etc.)</li>
                  <li><strong>El cliente añadirá más</strong> elementos similares</li>
                </ul>
              </div>
              <div style={{background: '#f8d7da', padding: '0.75rem', borderRadius: '6px'}}>
                <p style={{margin: '0 0 0.5rem 0', fontWeight: 'bold', color: '#721c24'}}>❌ USA Página normal cuando:</p>
                <ul style={{margin: 0, fontSize: '0.85rem'}}>
                  <li><strong>Contenido único</strong> que no se repite</li>
                  <li><strong>Información corporativa</strong> estática</li>
                  <li><strong>Páginas legales</strong> o institucionales</li>
                </ul>
              </div>
            </div>
          </div>
          
          <details className="dd" style={{marginTop: '1rem'}}>
            <summary>👆 Ver respuestas correctas</summary>
            <div className="dd-body">
              <ul>
                <li>🏖️ <strong>Hoteles:</strong> ✅ CPT - múltiples elementos con estructura similar</li>
                <li>📄 <strong>Sobre nosotros:</strong> ❌ Página normal - contenido único</li>
                <li>🍕 <strong>Platos del restaurante:</strong> ✅ CPT - muchos elementos con precio/ingredientes</li>
                <li>📞 <strong>Contacto:</strong> ❌ Página normal - información única</li>
                <li>👨‍⚕️ <strong>Doctores:</strong> ✅ CPT - múltiples perfiles con datos estructurados</li>
                <li>📜 <strong>Política de privacidad:</strong> ❌ Página normal - documento legal único</li>
                <li>🎓 <strong>Cursos:</strong> ✅ CPT - múltiples cursos con características similares</li>
              </ul>
            </div>
          </details>
        </ActivityBox>

        <details className="dd" open>
          <summary>Ventajas profesionales de los CPT</summary>
          <div className="dd-body">
            <ol>
              <li><strong>Organización:</strong> El cliente ve "paseo", "Testimonios", etc. por separado</li>
              <li><strong>Escalabilidad:</strong> Puedes añadir 100 paseo sin mezclarlas con páginas</li>
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
              Vamos a crear archivos de plantilla personalizados como <code>single-paseo.php</code>.
              Si los colocas en el tema padre (ej: Astra), se borrarán cuando se actualice el tema.
            </p>
            <h4>Sin tema hijo:</h4>
            <ul style={{color: '#d63384'}}>
              <li>❌ Tema se actualiza &rarr; pierdes <code>single-paseo.php</code></li>
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
              <li><strong>Múltiples elementos similares:</strong> paseo, productos, testimonios, eventos</li>
              <li><strong>Estructura repetitiva:</strong> Todos tienen precio, duración, imagen, etc.</li>
              <li><strong>Listados automáticos:</strong> Quieres mostrar "todas las paseo" en una página</li>
              <li><strong>Gestión separada:</strong> El cliente debe ver "paseo" por separado</li>
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
        <h2>4) Planificación del proyecto: Caso "paseo turísticas"</h2>

        <details className="dd" open>
          <summary>Análisis de requisitos</summary>
          <div className="dd-body">
            <p>Antes de crear nada, necesitamos definir:</p>
            <h4>🎯 ¿Qué información tendrá cada paseo?</h4>
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
              <li>Crear nuevas paseo fácilmente</li>
              <li>Modificar precios sin tocar código</li>
              <li>Añadir fotos sin conocimientos técnicos</li>
              <li>Activar/desactivar paseo temporalmente</li>
            </ul>

            <h4>🌐 ¿Cómo lo verán los visitantes?</h4>
            <ul>
              <li>Página individual de cada paseo: <code>/paseo/paseo-por-triana/</code></li>
              <li>Listado de todas las paseo: <code>/paseo/</code></li>
              <li>Posibilidad de filtrar por categoría/precio</li>
            </ul>
          </div>
        </details>

    

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
<details className="dd" open>
  <summary>Convenciones básicas cuando usamos CPT UI (versión sencilla)</summary>
  <div className="dd-body">
    <p>
      Cuando creamos un Custom Post Type con <strong>CPT UI</strong>, WordPress genera
      automáticamente la estructura interna.  
      Nosotros solo tenemos que entender <strong>3 cosas importantes</strong>.
    </p>

    <div className="table-wrap" tabIndex={0} aria-label="Tabla básica CPT UI">
      <table className="table table-zebra">
        <caption>Que debes entender al crear un CPT con CPT UI</caption>
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Ejemplo</th>
            <th>¿Para qué sirve?</th>
            <th>¿Cuándo lo usamos?</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th scope="row"><strong>Slug del CPT</strong></th>
            <td><code>paseo</code></td>
            <td>
              Es el nombre interno del tipo de contenido.
              Debe ir en minúsculas y en plural.
            </td>
            <td>
              Lo escribimos en CPT UI cuando creamos el tipo de contenido.
              Define la URL.
            </td>
          </tr>

          <tr>
            <th scope="row"><strong>Archivo de listado</strong></th>
            <td><code>archive-paseo.php</code></td>
            <td>
              Es la plantilla que muestra <strong>todas las paseo en formato tarjetas</strong>.
            </td>
            <td>
              Se usa cuando visitamos:
              <br />
              <code>tusitio.com/paseo/</code>
            </td>
          </tr>

          <tr>
            <th scope="row"><strong>Archivo de detalle</strong></th>
            <td><code>single-paseo.php</code></td>
            <td>
              Es la plantilla que muestra <strong>una sola paseo</strong> (detalle completo).
            </td>
            <td>
              Se usa cuando visitamos:
              <br />
              <code>tusitio.com/paseo/paseo-santa-cruz/</code>
            </td>
          </tr>

          <tr>
            <th scope="row"><strong>style.css (tema hijo)</strong></th>
            <td><code>style.css</code></td>
            <td>
              Aquí ponemos el diseño: tarjetas, botones, colores, etc.
            </td>
            <td>
              Se aplica a todas las páginas creadas con el tema hijo.
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <div className="callout tip">
  <strong>Así trabajan los profesionales:</strong><br />
  En proyectos reales, el registro del tipo de contenido suele
  delegarse a una herramienta sólida como CPT UI,
  porque permite crear estructuras limpias, coherentes y mantenibles
  sin añadir complejidad innecesaria.
  <br /><br />
  A partir de ahí comienza el trabajo verdaderamente técnico:
  diseñar las plantillas
  <code>archive-paseo.php</code> (listado)
  y
  <code>single-paseo.php</code> (detalle),
  donde controlamos estructura, jerarquía, campos y experiencia de usuario.
  <br /><br />
  El valor profesional no está en escribir más código,
  sino en construir mejor arquitectura.
</div>

    <div className="callout warn">
      Si el slug en CPT UI es <code>paseo</code>, los archivos deben llamarse exactamente:
      <br />
      <code>archive-paseo.php</code><br />
      <code>single-paseo.php</code>
      <br />
      Si no coinciden, WordPress no los usará.
    </div>

  </div>
</details>
        <TipBox>
          <p>
            <strong>Consejo pro:</strong> Siempre usa singular en las etiquetas que ve el usuario 
            ("paseo") y plural en slugs técnicos ("paseo").
          </p>
        </TipBox>
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
                    <td style={{padding: '8px'}}><code>paseo</code></td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', fontWeight: 'bold'}}>Plural Label</td>
                    <td style={{padding: '8px'}}>Paseos</td>
                  </tr>
                  <tr>
                    <td style={{padding: '8px', fontWeight: 'bold'}}>Singular Label</td>
                    <td style={{padding: '8px'}}>Paseo</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
<div className="box box--practice">
  <h3 className="box__title">🧠 ¿Por qué el Slug va en minúsculas y las Labels no?</h3>

  <p>
    En WordPress, cada campo cumple una función distinta.
    No es una cuestión estética, es una cuestión técnica.
  </p>

  <h4>🔹 Post Type Slug → Identificador técnico</h4>

  <ul>
    <li>Forma parte de la URL (<code>/paseo/</code>).</li>
    <li>WordPress lo usa internamente para cargar plantillas.</li>
    <li>Determina nombres de archivos como <code>single-paseo.php</code>.</li>
  </ul>

  <div className="callout warn">
    Por eso debe escribirse:
    <strong>en minúsculas, sin espacios, sin tildes y sin caracteres especiales</strong>.
  </div>

  <p>
    El slug no es visible para el usuario final.
    Es un identificador técnico del sistema.
  </p>

  <hr />

  <h4>🔹 Labels (Plural y Singular) → Texto visible en el panel</h4>

  <ul>
    <li>Se muestran en el menú de administración.</li>
    <li>Son textos de interfaz para el usuario.</li>
    <li>No afectan a la URL ni a las plantillas.</li>
  </ul>

  <div className="callout tip">
    Por eso las escribimos correctamente:
    <strong>Paseos</strong> y <strong>Paseo</strong>.
  </div>

  <h4>🎯 Regla profesional</h4>

  <p>
    El slug es para la máquina.  
    Las labels son para las personas.
  </p>
</div>
            <WarningBox>
              <p>
                <strong>¡IMPORTANTE!</strong> El slug debe ser exactamente <code>paseo</code> 
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
              <div style={{padding: '1rem', border: '1px solid #0c0c0c', borderRadius: '8px'}}>
                <h4>✅ Activar</h4>
                <ul>
                  <li><strong>Public:</strong> Visible en frontend</li>
                  <li><strong>Show UI:</strong> Aparece en admin</li>
                  <li><strong>Show in Menu:</strong> Menú en admin</li>
                  <li><strong>Show in REST API:</strong> Gutenberg/API</li>
                  <li><strong>Has Archive:</strong> Permite /paseo/</li>
                  <li><strong>Query Var:</strong> URLs amigables</li>
                </ul>
              </div>
              <div style={{padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px'}}>
                <h4>📝 Configurar</h4>
                <ul>
                  <li><strong>Menu Icon:</strong> <code>dashicons-location-alt</code></li>
                  <li><strong>Menu Position:</strong> <code>6</code> (después de Posts)</li>
                  <li><strong>Supports:</strong> Title, Editor, Thumbnail, Custom Fields</li>
                  <li><strong>Rewrite Slug:</strong> <code>paseo</code></li>
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
            <pre style={{background: '#121212', padding: '1rem', borderRadius: '8px', overflowX: 'auto'}}>
{`┌─ CONFIGURACIÓN CPT paseo ─────────────────────┐
│                                               │
│ Post Type Slug: paseo                         │
│ Plural Label: paseo                           │
│ Singular Label: paseo                          │
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
│ 🔗 Rewrite Slug: paseo                        │
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
              <li>Comprueba que aparece "paseo" en el menú lateral del admin</li>
              <li>Haz clic en "paseo" para ver la lista vacía</li>
            </ol>

            <PracticeBox>
              <h3>⚡ Test inmediato</h3>
              <ol>
                <li>Haz clic en "paseo &rarr; Añadir nueva"</li>
                <li>Escribe un título de prueba: "Test paseo"</li>
                <li>Añade contenido básico en el editor</li>
                <li>Pulsa "Publicar"</li>
                <li>Pulsa "Ver paseo" - ¿funciona la URL?</li>
              </ol>
            </PracticeBox>
          </div>
        </details>
      </section>

      {/* 7) ESTRUCTURA ARCHIVOS */}
      <section className="doc doc-section" id="estructura-archivos">
        <h2>7) Estructura de archivos y convenciones 📁</h2>

        <div style={{background: 'linear-gradient(135deg, #ff7979 0%, #fab1a0 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1rem 0', color: 'white'}}>🤔 ¿Por qué WordPress no muestra el diseño que esperas?</h3>
          <div style={{background: 'rgba(255,255,255,0.2)', padding: '1.5rem', borderRadius: '8px'}}>
            <p style={{margin: '0 0 1rem 0'}}><strong>Situación actual:</strong> Creaste los paseos pero se ven "feos" con el tema por defecto</p>
            <p style={{margin: '0 0 1rem 0'}}><strong>Motivo:</strong> WordPress necesita plantillas específicas para mostrar tu contenido personalizado</p>
            <p style={{margin: '0'}}><strong>Solución:</strong> Crear <code>single-paseo.php</code> y <code>archive-paseo.php</code></p>
          </div>
        </div>

        <details className="dd" open>
          <summary>📐 Jerarquía de plantillas de WordPress (Template Hierarchy)</summary>
          <div className="dd-body">
            <p>WordPress busca automáticamente archivos de plantilla en este orden:</p>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0'}}>
              <div style={{border: '3px solid #007bff', borderRadius: '10px', padding: '1.5rem', background: '#f8fcff'}}>
                <h4 style={{color: '#007bff', margin: '0 0 1rem 0'}}>📄 Para una paseo individual</h4>
                <p><strong>URL ejemplo:</strong> <code>/paseos/mi-paseo/</code></p>
                <ol style={{background: 'white', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                  <li><code>single-paseo-<em>[slug]</em>.php</code> <small>(muy específico)</small></li>
                  <li><strong><code>single-paseo.php</code></strong> ⭐ <em>Este crearemos</em></li>
                  <li><code>single.php</code> <small>(usa diseño de entradas)</small></li>
                  <li><code>singular.php</code> <small>(fallback genérico)</small></li>
                  <li><code>index.php</code> <small>(último recurso)</small></li>
                </ol>
              </div>
              
              <div style={{border: '3px solid #28a745', borderRadius: '10px', padding: '1.5rem', background: '#f8fff9'}}>
                <h4 style={{color: '#28a745', margin: '0 0 1rem 0'}}>📋 Para el listado de paseos</h4>
                <p><strong>URL ejemplo:</strong> <code>/paseos/</code></p>
                <ol style={{background: 'white', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                  <li><strong><code>archive-paseo.php</code></strong> ⭐ <em>Próximo tema</em></li>
                  <li><code>archive.php</code> <small>(usa diseño de categorías)</small></li>
                  <li><code>index.php</code> <small>(último recurso)</small></li>
                </ol>
              </div>
            </div>
            
            <div className="callout info">
              <h4>💡 ¿Cómo funciona la jerarquía?</h4>
              <p><strong>WordPress es inteligente:</strong> Busca desde el archivo más específico hasta el más genérico</p>
              <ol>
                <li>🔍 <strong>Busca:</strong> ¿Existe <code>single-paseo.php</code>?</li>
                <li>✅ <strong>Sí existe:</strong> Lo usa para mostrar el paseo</li>
                <li>❌ <strong>No existe:</strong> Usa <code>single.php</code> (parece entrada de blog)</li>
              </ol>
            </div>

            <TipBox title="🎯 Convención profesional">
              <p>Siempre crea plantillas específicas (<strong>single-paseo.php</strong>) en lugar de modificar las genéricas.</p>
              <p><strong>Beneficios:</strong></p>
              <ul>
                <li>✅ Control total sobre el diseño de paseos</li>
                <li>✅ Las entradas normales siguen igual</li>
                <li>✅ Mantenimiento más fácil</li>
                <li>✅ Actualizaciones del tema no afectan</li>
              </ul>
            </TipBox>
          </div>
        </details>

        <details className="dd" open>
          <summary>Estructura recomendada del tema hijo</summary>
          <div className="dd-body">
            <pre style={{background: '#0b0b0b', padding: '1rem', borderRadius: '8px'}}>
{`wp-content/themes/astra-child/
├── style.css                  # Estilos del tema hijo
├── functions.php              # Funciones personalizadas
├── single-paseo.php           # Plantilla individual paseo
├── archive-paseo.php          # Listado de paseo
├── inc/                       # (opcional) includes organizados
│   ├── cpt-functions.php      # Funciones específicas de CPT
│   └── acf-functions.php      # Helpers para ACF
├── assets/                    # (opcional) recursos
│   ├── css/
│   │   └── paseo-styles.css
│   └── js/
│       └── paseo-scripts.js
└── template-parts/            # (opcional) partes reutilizables
    ├── paseo-card.php          # Tarjeta de paseo
    └── paseo-meta.php          # Meta información`}
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
        <h2>8) Crear la plantilla single-paseo.php 🎨</h2>
        
        <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1rem 0', color: 'white'}}>🤝 Conectando contenido con diseño</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', alignItems: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
                <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>📋 Contenido (CPT)</h4>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Lo que creaste en el admin</p>
              </div>
            </div>
            <div style={{textAlign: 'center', fontSize: '2rem'}}>➡️</div>
            <div style={{textAlign: 'center'}}>
              <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
                <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🎨 Plantilla PHP</h4>
                <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>single-paseo.php</p>
              </div>
            </div>
          </div>
          <p style={{textAlign: 'center', margin: '1rem 0 0 0', fontSize: '0.9rem', opacity: 0.9}}>
            La plantilla PHP toma los datos del CPT y los presenta con tu diseño personalizado
          </p>
        </div>
</section>
        <details className="dd" open>
          <summary>📁 Crear el archivo base (ubicación exacta)</summary>
          <div className="dd-body">
            
            <div style={{background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '10px', padding: '1.5rem', margin: '1rem 0'}}>
              <h4 style={{color: '#856404', margin: '0 0 1rem 0'}}>📁 Ruta exacta donde crear el archivo</h4>
              <div style={{background: '#856404', color: 'white', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', marginBottom: '1rem'}}>
                wp-content/themes/<strong>astra-child</strong>/single-paseo.php
              </div>
              <p style={{margin: '0.5rem 0', fontSize: '0.9rem'}}><strong>📁 Pasos para llegar:</strong></p>
              <ol style={{margin: '0.5rem 0'}}>
                <li>💆‍♂️ Abre tu gestor de archivos (FileZilla, cPanel, VS Code)</li>
                <li>🚀 Navega a <code>wp-content/themes/<em>tu-tema-hijo</em>/</code></li>
                <li>🆕 Crea un archivo nuevo llamado exactamente <code>single-paseo.php</code></li>
              </ol>
            </div>
            
            <div className="callout warn" style={{margin: '1.5rem 0'}}>
              <h4>❗ Nombres de archivo: EXACTITUD obligatoria</h4>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
                <div>
                  <h5 style={{color: '#28a745'}}>✅ Nombres CORRECTOS</h5>
                  <ul style={{fontFamily: 'monospace', fontSize: '0.9rem'}}>
                    <li>single-paseo.php</li>
                    <li>archive-paseo.php</li>
                    <li>functions.php</li>
                  </ul>
                </div>
                <div>
                  <h5 style={{color: '#dc3545'}}>❌ Nombres INCORRECTOS</h5>
                  <ul style={{fontFamily: 'monospace', fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.7}}>
                    <li>single-paseos.php (plural)</li>
                    <li>single_paseo.php (guión bajo)</li>
                    <li>Single-paseo.php (mayúscula)</li>
                    <li>single-paseo.html (no es PHP)</li>
                  </ul>
                </div>
              </div>
              <p><strong>Si el nombre no es exacto:</strong> WordPress no lo reconocerá 😱</p>
            </div>
          </div>
        </details>

        <h2>Paseos: arquitectura basada únicamente en CPT</h2>

        <div className="callout tip">
          <strong>Enfoque profesional:</strong> Un Custom Post Type permite escalar contenido sin necesidad de campos personalizados.
          Una plantilla bien diseñada puede reutilizarse para múltiples paseos manteniendo coherencia visual.
        </div>

        <details className="dd" open>
          <summary>🧩 Plantilla Single Paseo sin ACF (solo CPT)</summary>
          <div className="dd-body">
            <p>Esta versión de <code>single-paseo.php</code> utiliza únicamente:</p>
            <ul>
              <li>Título</li>
              <li>Imagen destacada</li>
              <li>Extracto (si existe)</li>
              <li>Contenido del editor</li>
            </ul>
            <p>No depende de <code>get_field()</code> ni de ningún plugin adicional.</p>
            
            <div className="callout tip">
              La estructura visual es fija. El contenido es variable.
            </div>

            <pre><code>{`<?php
/**
 * Single Paseo (CPT: paseo) — SIN ACF (solo CPT)
 * Archivo: single-paseo.php
 */
if ( ! defined('ABSPATH') ) exit;

get_header();

// Astra: opcional
remove_action( 'astra_entry_header', 'astra_post_meta', 10 );

$titulo = get_the_title();

/* ===== 1) Imagen destacada ===== */
$img_url = '';
if ( has_post_thumbnail() ) {
  $img_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
}

/* ===== 2) Contenido / Lead ===== */
$raw_content = get_the_content();
$content_html = apply_filters('the_content', $raw_content);

if ( has_excerpt() ) {
  $lead = get_the_excerpt();
} else {
  $lead = wp_trim_words( wp_strip_all_tags( $raw_content ), 26 );
}

/* ===== 3) Helpers: extraer secciones por encabezado ===== */
function ps_extract_section_text($content, $heading){
  $heading = preg_quote($heading, '/');
  $pattern = '/<h[2-4][^>]*>\\s*' . $heading . '\\:?\\s*<\\/h[2-4]>\\s*(.*?)\\s*(?=<h[2-4][^>]*>|$)/is';
  if ( preg_match($pattern, $content, $m) ) {
    $text = trim( wp_strip_all_tags( $m[1] ) );
    return $text;
  }
  return '';
}

function ps_extract_section_list_items($content, $heading){
  $heading = preg_quote($heading, '/');
  $pattern = '/<h[2-4][^>]*>\\s*' . $heading . '\\:?\\s*<\\/h[2-4]>\\s*(.*?)\\s*(?=<h[2-4][^>]*>|$)/is';
  if ( preg_match($pattern, $content, $m) ) {
    $section_html = $m[1];
    if ( preg_match('/<ul[^>]*>(.*?)<\\/ul>/is', $section_html, $ul) ) {
      preg_match_all('/<li[^>]*>(.*?)<\\/li>/is', $ul[0], $lis);
      $items = [];
      foreach ($lis[1] as $li){
        $t = trim( wp_strip_all_tags($li) );
        if ($t !== '') $items[] = $t;
      }
      return $items;
    }
  }
  return [];
}

/* ===== 4) Datos sacados del contenido (sin ACF) ===== */
$cpt_duracion  = ps_extract_section_text($content_html, 'Duración');
$cpt_precio    = ps_extract_section_text($content_html, 'Precio');
$cpt_idioma    = ps_extract_section_text($content_html, 'Idioma');
$cpt_encuentro = ps_extract_section_text($content_html, 'Encuentro');

$incluye_items   = ps_extract_section_list_items($content_html, 'Incluye');
$noincluye_items = ps_extract_section_list_items($content_html, 'No incluye');
?>

<main class="ps-wrap ps-single">

  <!-- HERO -->
  <header class="ps-hero" aria-label="Cabecera del paseo">
    <div class="ps-hero__media" style="<?php echo $img_url ? 'background-image:url(' . esc_url($img_url) . ');' : ''; ?>">
      <?php if ( ! $img_url ): ?>
        <div class="ps-hero__placeholder" aria-hidden="true"></div>
      <?php endif; ?>
      <span class="ps-hero__badge">Paseo guiado · Sevilla</span>
    </div>

    <div class="ps-hero__content">
      <h1 class="ps-title"><?php echo esc_html($titulo); ?></h1>

      <?php if ( ! empty($lead) ): ?>
        <p class="ps-lead"><?php echo esc_html($lead); ?></p>
      <?php endif; ?>

      <div class="ps-hero__actions">
        <a class="ps-btn ps-btn--primary" href="#reserva">Reservar ahora</a>
        <a class="ps-btn ps-btn--ghost" href="/paseo">Ver todos los paseos</a>
      </div>

      <ul class="ps-pills" aria-label="Datos clave">
        <?php if ( ! empty($cpt_duracion) ): ?><li class="ps-pill">⏱ <?php echo esc_html($cpt_duracion); ?></li><?php endif; ?>
        <?php if ( ! empty($cpt_precio) ): ?><li class="ps-pill">💶 <?php echo esc_html($cpt_precio); ?></li><?php endif; ?>
        <?php if ( ! empty($cpt_idioma) ): ?><li class="ps-pill">🗣 <?php echo esc_html($cpt_idioma); ?></li><?php endif; ?>
      </ul>
    </div>
  </header>

  <section class="ps-grid" aria-label="Contenido del paseo">
    <article class="ps-card ps-card--main">
      <div class="ps-card__body">
        <h2 class="ps-h2">Descripción</h2>

        <?php if ( trim(wp_strip_all_tags($raw_content)) !== '' ): ?>
          <div class="ps-prose"><?php echo $content_html; ?></div>
        <?php else: ?>
          <p class="ps-muted">Escribe la descripción en el editor del paseo.</p>
        <?php endif; ?>
      </div>
    </article>

    <aside class="ps-card ps-card--aside" aria-label="Ficha rápida">
      <div class="ps-card__body">
        <h2 class="ps-h2">Ficha rápida</h2>

        <dl class="ps-meta">
          <div class="ps-meta__row"><dt>Duración</dt><dd><?php echo $cpt_duracion ? esc_html($cpt_duracion) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Precio</dt><dd><?php echo $cpt_precio ? esc_html($cpt_precio) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Idioma</dt><dd><?php echo $cpt_idioma ? esc_html($cpt_idioma) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Encuentro</dt><dd><?php echo $cpt_encuentro ? esc_html($cpt_encuentro) : '—'; ?></dd></div>
        </dl>

        <div class="ps-divider" aria-hidden="true"></div>

        <h3 class="ps-h3">Incluye</h3>
        <?php if ( $incluye_items ): ?>
          <ul class="ps-list"><?php foreach($incluye_items as $it){ echo '<li>' . esc_html($it) . '</li>'; } ?></ul>
        <?php else: ?>
          <p class="ps-muted">En el contenido, crea “Incluye” + una lista.</p>
        <?php endif; ?>

        <div class="ps-divider" aria-hidden="true"></div>

        <h3 class="ps-h3">No incluye</h3>
        <?php if ( $noincluye_items ): ?>
          <ul class="ps-list ps-list--danger"><?php foreach($noincluye_items as $it){ echo '<li>' . esc_html($it) . '</li>'; } ?></ul>
        <?php else: ?>
          <p class="ps-muted">En el contenido, crea “No incluye” + una lista.</p>
        <?php endif; ?>

        <div class="ps-cta" id="reserva">
          <p class="ps-note">Reserva rápida. Confirmación por email.</p>
          <a class="ps-btn ps-btn--primary ps-btn--block" href="/reservar">Reservar ahora</a>
          <p class="ps-micro">¿Dudas? Escríbenos desde Contacto.</p>
        </div>
      </div>
    </aside>
  </section>

</main>

<?php get_footer();`}</code></pre>

    </div>
  </details>

  <details className="dd" open>
    <summary>✍️ Estructura recomendada del contenido</summary>

    <div className="dd-body">
      <p>
        Para que la plantilla pueda organizar correctamente la información,
        el contenido debe estructurarse mediante encabezados y listas.
      </p>

      <div className="table-wrap">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Sección</th>
              <th>Formato</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Duración</th>
              <td>Encabezado + párrafo</td>
              <td>2 horas</td>
            </tr>
            <tr>
              <th scope="row">Precio</th>
              <td>Encabezado + párrafo</td>
              <td>Desde 18€ por persona</td>
            </tr>
            <tr>
              <th scope="row">Incluye</th>
              <td>Encabezado + lista</td>
              <td>Guía local, Paradas históricas…</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="doc-section" id="crear-primer-paseo">
  <h2>Crear el primer paseo (CPT + plantilla activa)</h2>

  <div className="callout tip">
    Si ya existe el Custom Post Type <strong>paseo</strong> y la plantilla
    <code>single-paseo.php</code>, crear un nuevo paseo es simplemente
    crear una nueva entrada dentro de ese tipo de contenido.
  </div>

  <details className="dd" open>
    <summary>1️⃣ Crear el paseo en WordPress</summary>
    <div className="dd-body">

      <ol>
        <li>Ir al panel → <strong>Paseos → Añadir nuevo</strong></li>
      </ol>

      <h4>Completar los campos:</h4>

      <ul>
        <li><strong>Título</strong> → Ejemplo: “Paseo por Triana”</li>
        <li><strong>Imagen destacada</strong> → Será la imagen del Hero</li>
        <li><strong>Extracto</strong> (opcional) → Se usa como resumen</li>
        <li><strong>Contenido</strong> → Descripción y secciones estructuradas</li>
      </ul>

      <ol start="2">
        <li>Pulsar <strong>Publicar</strong>.</li>
        <li>Pulsar <strong>Ver paseo</strong>.</li>
      </ol>

      <div className="callout tip">
        Si todo está correctamente configurado, se visualizará con el diseño
        definido en <code>single-paseo.php</code>.
      </div>

    </div>
  </details>

  <details className="dd" open>
    <summary>2️⃣ Estructura del contenido (sin ACF)</summary>
    <div className="dd-body">

      <p>
        Para que la plantilla identifique correctamente la información,
        el contenido debe organizarse mediante <strong>encabezados, párrafos y listas</strong>.
      </p>

      <h4>Secciones reconocidas por la plantilla:</h4>

      <ul>
        <li>Duración</li>
        <li>Precio</li>
        <li>Idioma</li>
        <li>Encuentro</li>
        <li>Incluye</li>
        <li>No incluye</li>
      </ul>

      <div className="callout warn">
        Los títulos deben coincidir exactamente.
        La plantilla busca las secciones por nombre.
      </div>

      <h4>Ejemplo listo para usar:</h4>

      <pre><code>{`Descripción
Un paseo perfecto para conocer Triana al atardecer: historia, cerámica y rincones con encanto.

Duración
2 horas

Precio
Desde 18€ por persona

Idioma
Español e inglés

Encuentro
Plaza del Altozano (junto a la estatua)

Incluye
- Guía local
- Paradas con explicación histórica
- Recomendaciones gastronómicas

No incluye
- Comidas y bebidas
- Entradas a monumentos`}</code></pre>

    </div>
  </details>

  <details className="dd" open>
    <summary>3️⃣ Si “Paseos” no aparece en el menú</summary>
    <div className="dd-body">

      <ul>
        <li>Revisar en <strong>CPT UI</strong> que el Post Type esté en <code>public = true</code>.</li>
        <li>Comprobar que <code>show_ui = true</code>.</li>
      </ul>

      <p>
        Si el CPT se ha creado recientemente:
      </p>

      <ol>
        <li>Ir a <strong>Ajustes → Enlaces permanentes</strong></li>
        <li>Pulsar <strong>Guardar cambios</strong> sin modificar nada</li>
      </ol>

      <div className="callout tip">
        Esto refresca las reglas de URL y activa correctamente
        <code>/paseo/</code> o <code>/paseos/</code>.
      </div>

    </div>
  </details>

</section>
    </div>
  </details>
  <section className="doc-section" id="plantilla-cpt-paseo">
  <h2>Plantilla del CPT Paseo + Hoja de estilos dedicada</h2>

  <div className="callout tip">
    Una plantilla personalizada necesita su propia hoja de estilos.
    Separar estructura (PHP) y diseño (CSS) es una práctica profesional.
  </div>

  <details className="dd" open>
    <summary>1️⃣ Archivo de plantilla: single-paseo.php</summary>
    <div className="dd-body">

      <p>
        Este archivo controla el diseño de cada paseo individual.
        Debe colocarse en el <strong>tema hijo</strong>.
      </p>

      <h4>📁 Ruta exacta:</h4>

      <pre><code>{`/wp-content/themes/tu-tema-hijo/single-paseo.php`}</code></pre>

      <div className="callout warn">
        Nunca se coloca en el tema padre.
      </div>

      <p>
        (Aquí se inserta la plantilla completa que ya tienes definida).
      </p>

    </div>
  </details>

  <details className="dd" open>
    <summary>2️⃣ Crear hoja de estilos dedicada al CPT</summary>
    <div className="dd-body">

      <p>
        La plantilla utiliza clases como:
      </p>

      <pre><code>{`ps-wrap
ps-hero
ps-card
ps-grid
ps-btn
ps-meta`}</code></pre>

      <p>
        Sin CSS, el diseño no se aplicará.
      </p>

      <h4>📁 Crear estructura dentro del tema hijo:</h4>

      <pre><code>{`/wp-content/themes/tu-tema-hijo/
│
├── single-paseo.php
├── functions.php
│
└── assets/
    └── css/
        └── paseos.css`}</code></pre>

      <h4>📄 Archivo:</h4>

      <pre><code>{`/wp-content/themes/tu-tema-hijo/assets/css/paseos.c/* =========================================================
   PASEANDO SEVILLA · CSS PREMIUM (CPT: paseo)
   Archivo recomendado:
   /wp-content/themes/tu-tema-hijo/assets/css/paseos.css
   ========================================================= */

/* ---------- Design Tokens ---------- */
:root{
  --ps-albero:#D8A44C;     /* CTA */
  --ps-cal:#F5F1E8;        /* fondo */
  --ps-azul:#1F5C8B;       /* header/enlaces */
  --ps-terracota:#B5522D;  /* acentos */
  --ps-buganvilla:#A1243B; /* acento */
  --ps-ink:#0f172a;        /* texto principal */
  --ps-muted:#475569;      /* texto secundario */
  --ps-border: rgba(31,92,139,.14);

  --ps-radius:18px;
  --ps-radius-sm:14px;

  --ps-shadow: 0 18px 50px rgba(2, 8, 23, .12);
  --ps-shadow-soft: 0 10px 28px rgba(2, 8, 23, .08);

  --ps-max: 1180px;

  --ps-ring: 0 0 0 4px rgba(216,164,76,.35);
}

/* ---------- Base / Resets ---------- */
.ps-single{
  color: var(--ps-ink);
  background: transparent;
}

.ps-wrap{
  max-width: var(--ps-max);
  margin-inline: auto;
  padding: clamp(1rem, 2.2vw, 2rem);
}

.ps-wrap *{ box-sizing: border-box; }

.ps-muted{
  color: var(--ps-muted);
}

.ps-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(31,92,139,.22), transparent);
  margin: 1.25rem 0;
}

/* Links inside prose */
.ps-prose a{
  color: var(--ps-azul);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
.ps-prose a:hover{ color: #184a70; }

/* Focus (accesible) */
.ps-single a:focus-visible,
.ps-single button:focus-visible{
  outline: none;
  box-shadow: var(--ps-ring);
  border-radius: 10px;
}

/* ---------- HERO ---------- */
.ps-hero{
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: clamp(1rem, 2.5vw, 2rem);
  align-items: stretch;
  margin: 0 0 clamp(1.2rem, 3vw, 2rem);
}

.ps-hero__media{
  position: relative;
  border-radius: var(--ps-radius);
  overflow: hidden;
  min-height: clamp(260px, 34vw, 420px);

  background-color: rgba(245,241,232,.9);
  background-size: cover;
  background-position: center;

  box-shadow: var(--ps-shadow);
  border: 1px solid rgba(31,92,139,.12);
}

/* “Glass” overlay to improve contrast on images */
.ps-hero__media::after{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 420px at 10% 0%,
      rgba(216,164,76,.18), transparent 55%),
    linear-gradient(180deg,
      rgba(15,23,42,.55),
      rgba(15,23,42,.12) 45%,
      rgba(245,241,232,.0) 70%,
      rgba(245,241,232,.25));
  pointer-events:none;
}

.ps-hero__placeholder{
  position:absolute; inset:0;
  background:
    linear-gradient(135deg, rgba(216,164,76,.18), rgba(31,92,139,.10)),
    repeating-linear-gradient(135deg,
      rgba(255,255,255,.18) 0 12px,
      rgba(255,255,255,.08) 12px 24px);
}

.ps-hero__badge{
  position:absolute;
  left: 16px;
  top: 16px;
  z-index: 2;

  display:inline-flex;
  align-items:center;
  gap:.5rem;

  padding: .45rem .75rem;
  border-radius: 999px;

  background: rgba(15,23,42,.78);
  color: #fff;
  font-weight: 700;
  font-size: .9rem;
  letter-spacing: .2px;

  border: 1px solid rgba(255,255,255,.14);
  backdrop-filter: blur(10px);
}

.ps-hero__content{
  border-radius: var(--ps-radius);
  background: rgba(245,241,232,.82);
  border: 1px solid rgba(31,92,139,.12);
  box-shadow: var(--ps-shadow-soft);
  padding: clamp(1rem, 2.1vw, 1.6rem);

  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  position: relative;
  overflow: hidden;
}
.ps-hero__content::before{
  content:"";
  position:absolute;
  inset:-40% -40% auto auto;
  width: 260px; height: 260px;
  background: radial-gradient(circle at 30% 30%,
    rgba(216,164,76,.28),
    rgba(31,92,139,.10) 55%,
    transparent 70%);
  transform: rotate(18deg);
  pointer-events:none;
}

.ps-title{
  margin: 0;
  font-weight: 900;
  letter-spacing: -.02em;
  line-height: 1.05;
  font-size: clamp(1.75rem, 3.3vw, 2.65rem);
  color: var(--ps-ink);
}

.ps-lead{
  margin: 0;
  color: var(--ps-muted);
  line-height: 1.55;
  font-size: clamp(1rem, 1.3vw, 1.05rem);
}
.ps-lead--hint{
  color: rgba(71, 85, 105, .85);
  font-style: italic;
}

.ps-hero__actions{
  display:flex;
  flex-wrap: wrap;
  gap: .75rem;
  align-items: center;
}

/* ---------- Buttons ---------- */
.ps-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;

  padding: .8rem 1.05rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: .2px;
  line-height: 1;

  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, color .12s ease, border-color .12s ease;
  user-select:none;
}

.ps-btn--primary{
  background: linear-gradient(135deg, var(--ps-albero), #f0c46e);
  color: #1a1a1a;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 12px 28px rgba(216,164,76,.28);
}
.ps-btn--primary:hover{
  transform: translateY(-1px);
  box-shadow: 0 18px 36px rgba(216,164,76,.32);
}

.ps-btn--ghost{
  background: rgba(255,255,255,.55);
  color: var(--ps-azul);
  border: 1px solid rgba(31,92,139,.22);
  backdrop-filter: blur(10px);
}
.ps-btn--ghost:hover{
  transform: translateY(-1px);
  border-color: rgba(31,92,139,.35);
}

.ps-btn--block{
  width: 100%;
}

/* ---------- Pills ---------- */
.ps-pills{
  list-style: none;
  padding: 0;
  margin: 0;

  display:flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.ps-pill{
  display:inline-flex;
  align-items:center;
  gap:.4rem;

  padding: .5rem .75rem;
  border-radius: 999px;

  background: rgba(255,255,255,.66);
  border: 1px solid rgba(31,92,139,.16);
  color: rgba(15, 23, 42, .92);
  font-weight: 750;
  font-size: .92rem;

  box-shadow: 0 10px 22px rgba(2,8,23,.06);
}

/* ---------- GRID (main + aside) ---------- */
.ps-grid{
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  gap: clamp(1rem, 2.6vw, 2rem);
  align-items: start;
}

/* ---------- Cards ---------- */
.ps-card{
  background: rgba(255,255,255,.74);
  border: 1px solid rgba(31,92,139,.12);
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow-soft);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.ps-card__body{
  padding: clamp(1rem, 2.1vw, 1.7rem);
}

.ps-card--main .ps-card__body{
  padding-top: clamp(1.2rem, 2.4vw, 1.9rem);
}

.ps-h2{
  margin: 0 0 .85rem;
  font-size: clamp(1.2rem, 1.7vw, 1.45rem);
  letter-spacing: -.01em;
  color: var(--ps-ink);
}
.ps-h3{
  margin: 0 0 .7rem;
  font-size: 1.05rem;
  color: var(--ps-ink);
  letter-spacing: -.01em;
}

/* ---------- Prose / content ---------- */
.ps-prose{
  color: rgba(15,23,42,.92);
  line-height: 1.7;
  font-size: 1.02rem;
}
.ps-prose p{ margin: 0 0 1rem; }
.ps-prose p:last-child{ margin-bottom: 0; }

.ps-prose h2, .ps-prose h3, .ps-prose h4{
  margin: 1.4rem 0 .6rem;
  color: var(--ps-ink);
  letter-spacing: -.01em;
}

.ps-prose ul, .ps-prose ol{
  padding-left: 1.2rem;
  margin: .8rem 0 1rem;
}
.ps-prose li{ margin: .35rem 0; }

/* Improve headings that we use as “section markers” */
.ps-prose h2{
  font-size: 1.2rem;
  padding-top: .2rem;
  border-top: 1px solid rgba(31,92,139,.12);
}

/* ---------- Meta (definition list) ---------- */
.ps-meta{
  margin: 0;
  display: grid;
  gap: .6rem;
}

.ps-meta__row{
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: .75rem;
  align-items: baseline;

  padding: .7rem .85rem;
  border-radius: var(--ps-radius-sm);
  background: rgba(245,241,232,.55);
  border: 1px solid rgba(31,92,139,.10);
}

.ps-meta__row dt{
  font-weight: 900;
  color: rgba(15,23,42,.88);
  margin: 0;
}
.ps-meta__row dd{
  margin: 0;
  color: rgba(71,85,105,.98);
  font-weight: 700;
}

/* ---------- Lists (incluye/no incluye) ---------- */
.ps-list{
  margin: 0;
  padding-left: 1.15rem;
  color: rgba(15,23,42,.9);
  line-height: 1.55;
}

.ps-list li{
  margin: .45rem 0;
  position: relative;
}

.ps-list li::marker{
  color: var(--ps-terracota);
  font-weight: 900;
}

.ps-list--danger li::marker{
  color: var(--ps-buganvilla);
}

/* ---------- CTA box ---------- */
.ps-cta{
  margin-top: 1.2rem;
  padding: 1rem;
  border-radius: var(--ps-radius);
  background:
    radial-gradient(900px 220px at 20% 0%, rgba(216,164,76,.22), transparent 55%),
    linear-gradient(180deg, rgba(245,241,232,.7), rgba(255,255,255,.85));
  border: 1px solid rgba(31,92,139,.14);
  box-shadow: 0 14px 34px rgba(2,8,23,.10);
}

.ps-note{
  margin: 0 0 .75rem;
  font-weight: 800;
  color: rgba(15,23,42,.9);
}
.ps-micro{
  margin: .65rem 0 0;
  font-size: .92rem;
  color: rgba(71,85,105,.95);
}

/* ---------- Sticky aside on desktop ---------- */
@media (min-width: 980px){
  .ps-card--aside{
    position: sticky;
    top: 24px;
  }
}

/* ---------- Responsive ---------- */
@media (max-width: 980px){
  .ps-hero{
    grid-template-columns: 1fr;
  }
  .ps-grid{
    grid-template-columns: 1fr;
  }
  .ps-hero__content{
    order: 2;
  }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce){
  .ps-btn{
    transition: none;
  }
  .ps-btn:hover{
    transform: none;
  }
}`}</code></pre>

  
        
    

    </div>
  </details>
<details className="dd" open>
  <summary>3️⃣ Encolar correctamente el archivo CSS</summary>
  <div className="dd-body">

    <p>
      WordPress no carga automáticamente los archivos CSS nuevos.
      Es necesario encolarlos desde <code>functions.php</code>.
    </p>

    <div className="callout tip">
      En la lección de bloques personalizados ya se encoló un archivo.
      Aquí aplicamos exactamente la misma lógica: 
      no se sustituye nada, simplemente se añade una nueva función.
    </div>

    <h4>📁 Ruta:</h4>

    <pre><code>{`/wp-content/themes/tu-tema-hijo/functions.php`}</code></pre>

    <h4>📌 Añadir este código debajo del existente:</h4>

    <pre><code>{`function ps_enqueue_paseos_styles() {

    if ( is_singular('paseo') ) {

        wp_enqueue_style(
            'ps-paseos-style',
            get_stylesheet_directory_uri() . '/assets/css/paseos.css',
            array(),
            '1.0'
        );

    }

}
add_action('wp_enqueue_scripts', 'ps_enqueue_paseos_styles');`}</code></pre>

    <div className="callout warn">
      No eliminar otras funciones de encolado existentes.
      Cada funcionalidad puede tener su propio bloque de encolado.
    </div>

    <div className="callout tip">
      La condición <code>is_singular('paseo')</code> garantiza que el CSS
      solo se cargue cuando se visualiza un paseo individual.
      El resto del sitio no se ve afectado.
    </div>

    <h4>🧠 Buenas prácticas</h4>

    <ul>
      <li>Se pueden tener múltiples funciones de encolado en el mismo <code>functions.php</code>.</li>
      <li>No es necesario unificar todo en una sola función.</li>
      <li>Separar encolados por funcionalidad mejora el mantenimiento.</li>
    </ul>

  </div>
</details>
   

  <div className="callout tip">
    📌 Resultado final:
    <br />
    • PHP → estructura  
    • CSS → diseño  
    • functions.php → conexión entre ambos  
  </div>

</section>

 
<section className="doc-section" id="listado-automatico-cpt">
  <summary>🗂️ Listado automático de paseos (el gran potencial de un CPT)</summary>

  <div className="dd-body">
    <p>
      El mayor valor de un <strong>Custom Post Type</strong> no es solo crear “entradas especiales”.
      Es que WordPress puede generar <strong>un listado automático</strong> con todas las entradas creadas,
      sin duplicar páginas ni maquetar a mano.
    </p></div>
    <div className="callout tip">
      <strong>Enfoque profesional:</strong> el contenido se crea una vez (paseos) y la web se actualiza sola:
      el listado <code>/paseo/</code> se rellena automáticamente conforme se publican nuevos paseos.
    </div>

    <h3>✅ Objetivo</h3>
    <ul>
      <li>Crear una página visitable tipo <code>/paseo/</code> que muestre tarjetas de todos los paseos.</li>
      <li>Que cada tarjeta enlace a su detalle (que ya controla <code>single-paseo.php</code>).</li>
      <li>Que el diseño sea coherente (misma estética “Paseando Sevilla”).</li>
    </ul>

    <hr />

    <h3>1️⃣ Verificar la URL del archivo</h3>
    <p>
      El archivo del CPT se renderiza en la URL definida por el <strong>slug</strong> del post type.
      Normalmente será:
    </p>

    <pre><code>{`/paseo/`}</code></pre>

    <div className="callout warn">
      Si has cambiado el CPT hace poco (o el slug), es obligatorio refrescar reglas:
      <strong>Ajustes → Enlaces permanentes → Guardar cambios</strong> (sin tocar nada).
    </div>

    <hr />

    <h3>2️⃣ Crear la plantilla del listado: archive-paseo.php</h3>

    <p>
      Este archivo define cómo se ve el archivo del CPT (el listado).
      Debe colocarse en el tema hijo.
    </p>

    <h4>📁 Ruta exacta</h4>
    <pre><code>{`/wp-content/themes/tu-tema-hijo/archive-paseo.php`}</code></pre>

    <h4>📌 Plantilla completa (copia y pega)</h4>
    <pre><code>{`<?php
/**
 * Archive Paseo (CPT: paseo)
 * Archivo: archive-paseo.php
 */
if ( ! defined('ABSPATH') ) exit;

get_header();
?>

<main class="ps-wrap ps-archive">

  <!-- HERO LISTADO -->
  <header class="ps-archive-hero" aria-label="Listado de paseos">
    <div class="ps-archive-hero__inner">
      <h1 class="ps-archive-title">Paseos</h1>
      <p class="ps-archive-lead">Explora todos los paseos disponibles y reserva en segundos.</p>
    </div>
  </header>

  <!-- GRID TARJETAS -->
  <section class="ps-grid-archive" aria-label="Tarjetas de paseos">

    <?php if ( have_posts() ) : ?>

      <?php while ( have_posts() ) : the_post(); ?>

        <?php
          $permalink = get_permalink();
          $title = get_the_title();

          // Imagen destacada
          $img_url = has_post_thumbnail()
            ? get_the_post_thumbnail_url(get_the_ID(), 'large')
            : '';

          // Resumen: extracto > recorte de contenido
          $excerpt = has_excerpt()
            ? get_the_excerpt()
            : wp_trim_words( wp_strip_all_tags( get_the_content() ), 18 );
        ?>

        <article class="ps-card ps-card--archive">
          <a class="ps-card__media" href="<?php echo esc_url($permalink); ?>" aria-label="<?php echo esc_attr($title); ?>">
            <?php if ( $img_url ): ?>
              <img class="ps-card__img" src="<?php echo esc_url($img_url); ?>" alt="" loading="lazy" />
            <?php else: ?>
              <div class="ps-card__placeholder" aria-hidden="true"></div>
            <?php endif; ?>

            <span class="ps-card__badge">Paseo</span>
          </a>

          <div class="ps-card__body">
            <h2 class="ps-card__title">
              <a href="<?php echo esc_url($permalink); ?>"><?php echo esc_html($title); ?></a>
            </h2>

            <?php if ( $excerpt ): ?>
              <p class="ps-card__text"><?php echo esc_html($excerpt); ?></p>
            <?php endif; ?>

            <div class="ps-card__actions">
              <a class="ps-btn ps-btn--primary" href="<?php echo esc_url($permalink); ?>">Ver detalle</a>
              <a class="ps-btn ps-btn--ghost" href="<?php echo esc_url($permalink); ?>#reserva">Reservar</a>
            </div>
          </div>
        </article>

      <?php endwhile; ?>

    <?php else: ?>

      <div class="ps-empty">
        <h2 class="ps-h2">Aún no hay paseos publicados</h2>
        <p class="ps-muted">Cuando se publique el primer paseo, aparecerá automáticamente aquí.</p>
      </div>

    <?php endif; ?>

  </section>

  <!-- PAGINACIÓN -->
  <nav class="ps-pagination" aria-label="Paginación">
    <?php
      the_posts_pagination([
        'mid_size'  => 1,
        'prev_text' => '← Anterior',
        'next_text' => 'Siguiente →',
      ]);
    ?>
  </nav>

</main>

<?php get_footer();`}</code></pre>

    <div className="callout tip">
      Esta plantilla usa el loop nativo (<code>have_posts()</code>) del archivo del CPT:
      cada nuevo paseo publicado aparecerá automáticamente como tarjeta.
    </div>

    <hr />

    <h3>3️⃣ Estilos del archivo (CSS premium para el listado)</h3>

    <p>
      Para mantener el proyecto modular, lo más limpio es un CSS específico para el archivo.
    </p>

    <h4>📁 Ruta recomendada</h4>
    <pre><code>{`/wp-content/themes/tu-tema-hijo/assets/css/paseos-archive.css`}</code></pre>

    <h4>📌 CSS premium (copia y pega)</h4>
    <pre><code>{`/* =========================================================
   PASEANDO SEVILLA · ARCHIVE (CPT: paseo)
   Archivo: /assets/css/paseos-archive.css
   ========================================================= */
:root{
  --ps-albero:#D8A44C;
  --ps-cal:#F5F1E8;
  --ps-azul:#1F5C8B;
  --ps-ink:#0f172a;
  --ps-muted:#475569;
  --ps-border: rgba(31,92,139,.14);
  --ps-radius:18px;
  --ps-shadow-soft: 0 10px 28px rgba(2, 8, 23, .08);
  --ps-shadow: 0 18px 50px rgba(2, 8, 23, .12);
  --ps-ring: 0 0 0 4px rgba(216,164,76,.35);
}

.ps-archive .ps-wrap{ max-width:1180px; }

.ps-archive-hero{
  margin: 0 0 1.25rem;
  border-radius: var(--ps-radius);
  overflow:hidden;
  border: 1px solid rgba(31,92,139,.12);
  box-shadow: var(--ps-shadow-soft);
  background:
    radial-gradient(900px 240px at 15% 10%, rgba(216,164,76,.22), transparent 60%),
    linear-gradient(180deg, rgba(245,241,232,.92), rgba(255,255,255,.88));
}

.ps-archive-hero__inner{
  padding: clamp(1.2rem, 2.4vw, 2rem);
}

.ps-archive-title{
  margin: 0 0 .35rem;
  font-weight: 900;
  letter-spacing: -.02em;
  color: var(--ps-ink);
  font-size: clamp(1.7rem, 3vw, 2.4rem);
}
.ps-archive-lead{
  margin: 0;
  color: var(--ps-muted);
  font-size: 1.05rem;
  line-height: 1.6;
}

.ps-grid-archive{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.4rem);
  align-items: stretch;
  margin-top: 1rem;
}

.ps-card--archive{
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(31,92,139,.12);
  border-radius: var(--ps-radius);
  box-shadow: var(--ps-shadow-soft);
  overflow: hidden;
  transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
}

.ps-card--archive:hover{
  transform: translateY(-2px);
  box-shadow: var(--ps-shadow);
  border-color: rgba(31,92,139,.22);
}

.ps-card__media{
  display:block;
  position:relative;
  text-decoration:none;
}

.ps-card__img{
  width:100%;
  height: 220px;
  object-fit: cover;
  display:block;
}

.ps-card__placeholder{
  height: 220px;
  background:
    linear-gradient(135deg, rgba(216,164,76,.18), rgba(31,92,139,.10)),
    repeating-linear-gradient(135deg, rgba(255,255,255,.22) 0 12px, rgba(255,255,255,.10) 12px 24px);
}

.ps-card__badge{
  position:absolute;
  left: 14px;
  top: 14px;
  padding: .35rem .65rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: .85rem;
  background: rgba(15,23,42,.78);
  color: #fff;
  border: 1px solid rgba(255,255,255,.16);
  backdrop-filter: blur(10px);
}

.ps-card__body{
  padding: 1.1rem 1.1rem 1.2rem;
}

.ps-card__title{
  margin: 0 0 .5rem;
  font-size: 1.15rem;
  letter-spacing: -.01em;
}
.ps-card__title a{
  color: var(--ps-ink);
  text-decoration: none;
}
.ps-card__title a:hover{
  color: #0b1220;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ps-card__text{
  margin: 0 0 1rem;
  color: var(--ps-muted);
  line-height: 1.6;
}

.ps-card__actions{
  display:flex;
  gap:.6rem;
  flex-wrap: wrap;
}

.ps-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: .72rem .95rem;
  border-radius: 999px;
  font-weight: 800;
  text-decoration:none;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, color .12s ease, border-color .12s ease;
}
.ps-btn:focus-visible{ outline:none; box-shadow: var(--ps-ring); }

.ps-btn--primary{
  background: linear-gradient(135deg, var(--ps-albero), #f0c46e);
  color: #1a1a1a;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 12px 28px rgba(216,164,76,.22);
}
.ps-btn--primary:hover{ transform: translateY(-1px); box-shadow: 0 18px 36px rgba(216,164,76,.28); }

.ps-btn--ghost{
  background: rgba(255,255,255,.55);
  color: var(--ps-azul);
  border: 1px solid rgba(31,92,139,.22);
}
.ps-btn--ghost:hover{ transform: translateY(-1px); border-color: rgba(31,92,139,.35); }

.ps-pagination{
  margin: 2rem 0 1rem;
}
.ps-pagination .page-numbers{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width: 40px;
  height: 40px;
  padding: 0 .75rem;
  margin: .2rem;
  border-radius: 999px;
  border: 1px solid rgba(31,92,139,.18);
  text-decoration:none;
  font-weight: 800;
  color: var(--ps-ink);
  background: rgba(255,255,255,.6);
}
.ps-pagination .page-numbers.current{
  background: rgba(216,164,76,.22);
  border-color: rgba(216,164,76,.35);
}

@media (max-width: 980px){
  .ps-grid-archive{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px){
  .ps-grid-archive{ grid-template-columns: 1fr; }
  .ps-card__img, .ps-card__placeholder{ height: 210px; }
}

@media (prefers-reduced-motion: reduce){
  .ps-card--archive, .ps-btn{ transition:none; }
  .ps-card--archive:hover, .ps-btn:hover{ transform:none; }
}`}</code></pre>

    <hr />

    <h3>4️⃣ Encolar el CSS del archivo (sin machacar encolados anteriores)</h3>

    <p>
      Igual que en encolados anteriores: no se elimina nada del <code>functions.php</code>.
      Se añade una nueva función o se amplía el encolado existente de forma ordenada.
    </p>

    <h4>📁 Ruta</h4>
    <pre><code>{`/wp-content/themes/tu-tema-hijo/functions.php`}</code></pre>

    <h4>📌 Código a añadir (copia y pega)</h4>
    <pre><code>{`function ps_enqueue_paseos_archive_styles() {

  // Carga SOLO en el archivo /paseo/
  if ( is_post_type_archive('paseo') ) {
    wp_enqueue_style(
      'ps-paseos-archive-style',
      get_stylesheet_directory_uri() . '/assets/css/paseos-archive.css',
      array(),
      '1.0'
    );
  }

}
add_action('wp_enqueue_scripts', 'ps_enqueue_paseos_archive_styles');`}</code></pre>


    <section className="doc-section" id="archive-paseo-listado">
  <h2>Listado automático de Paseos: que la web se actualice sola</h2>

  <div className="callout tip">
    <strong>Idea profesional:</strong> el contenido se crea una vez (entradas del CPT “paseo”) y el sitio se encarga
    de mostrarlo automáticamente en un listado. Publicar un nuevo paseo = aparece en la página de Paseos sin tocar diseño.
  </div>

  <details className="dd" open>
    <summary>✅ Qué vamos a construir</summary>
    <div className="dd-body">
      <ul>
        <li>Una “página” visitable que muestre todos los paseos en tarjetas.</li>
        <li>Esa página se genera por WordPress con la plantilla <code>archive-paseo.php</code>.</li>
        <li>La URL será la del archivo del CPT, normalmente: <code>/paseo/</code> (o <code>/paseos/</code> según slug).</li>
        <li>Cada tarjeta enlaza al detalle (que ya controla <code>single-paseo.php</code>).</li>
      </ul>

      <div className="callout warn">
        Esto no es una página estática. Es un listado dinámico conectado a la base de datos (WordPress Loop).
      </div>
    </div>
  </details>

  <details className="dd" open>
    <summary>1️⃣ Confirmar la URL del archivo del CPT</summary>
    <div className="dd-body">
      <p>
        La URL del listado depende del <strong>slug</strong> del post type (CPT UI).
        Si el post type se llama <code>paseo</code>, lo habitual es:
      </p>

      <pre><code>{`/paseo/`}</code></pre>

      <p>
        Si el slug fuera <code>paseos</code>, sería:
      </p>

      <pre><code>{`/paseos/`}</code></pre>

      <div className="callout tip">
        Si acabas de crear el CPT o has cambiado el slug, refresca reglas:
        <strong>Ajustes → Enlaces permanentes → Guardar cambios</strong> (sin tocar nada).
      </div>
    </div>
  </details>

  <details className="dd" open>
    <summary>2️⃣ Crear la plantilla del listado: archive-paseo.php</summary>
    <div className="dd-body">
      <p>
        WordPress utiliza la jerarquía de plantillas. Para el archivo del CPT <code>paseo</code>, buscará:
      </p>

      <ul>
        <li><code>archive-paseo.php</code> (plantilla específica del CPT)</li>
        <li>si no existe, usará <code>archive.php</code> (genérica)</li>
      </ul>

      <h4>📁 Ruta exacta</h4>
      <pre><code>{`/wp-content/themes/tu-tema-hijo/archive-paseo.php`}</code></pre>

      <h4>📌 Plantilla completa (copia y pega)</h4>
      <pre><code>{`<?php
/**
 * Archive Paseo (CPT: paseo)
 * Archivo: archive-paseo.php
 */
if ( ! defined('ABSPATH') ) exit;

get_header();
?>

<main class="ps-wrap ps-archive">

  <!-- HERO DEL LISTADO -->
  <header class="ps-archive-hero" aria-label="Listado de paseos">
    <div class="ps-archive-hero__inner">
      <h1 class="ps-archive-title">Paseos</h1>
      <p class="ps-archive-lead">Descubre los paseos disponibles y accede al detalle para reservar.</p>
    </div>
  </header>

  <!-- GRID TARJETAS -->
  <section class="ps-grid-archive" aria-label="Tarjetas de paseos">

    <?php if ( have_posts() ) : ?>

      <?php while ( have_posts() ) : the_post(); ?>

        <?php
          $permalink = get_permalink();
          $title = get_the_title();

          // Imagen destacada
          $img_url = has_post_thumbnail()
            ? get_the_post_thumbnail_url(get_the_ID(), 'large')
            : '';

          // Resumen: extracto > recorte de contenido
          $excerpt = has_excerpt()
            ? get_the_excerpt()
            : wp_trim_words( wp_strip_all_tags( get_the_content() ), 18 );
        ?>

        <article class="ps-card ps-card--archive">
          <a class="ps-card__media" href="<?php echo esc_url($permalink); ?>" aria-label="<?php echo esc_attr($title); ?>">
            <?php if ( $img_url ): ?>
              <img class="ps-card__img" src="<?php echo esc_url($img_url); ?>" alt="" loading="lazy" />
            <?php else: ?>
              <div class="ps-card__placeholder" aria-hidden="true"></div>
            <?php endif; ?>

            <span class="ps-card__badge">Paseo</span>
          </a>

          <div class="ps-card__body">
            <h2 class="ps-card__title">
              <a href="<?php echo esc_url($permalink); ?>"><?php echo esc_html($title); ?></a>
            </h2>

            <?php if ( $excerpt ): ?>
              <p class="ps-card__text"><?php echo esc_html($excerpt); ?></p>
            <?php endif; ?>

            <div class="ps-card__actions">
              <a class="ps-btn ps-btn--primary" href="<?php echo esc_url($permalink); ?>">Ver detalle</a>
              <a class="ps-btn ps-btn--ghost" href="<?php echo esc_url($permalink); ?>#reserva">Reservar</a>
            </div>
          </div>
        </article>

      <?php endwhile; ?>

    <?php else: ?>

      <div class="ps-empty">
        <h2 class="ps-h2">Aún no hay paseos publicados</h2>
        <p class="ps-muted">Cuando se publique el primer paseo, aparecerá automáticamente aquí.</p>
      </div>

    <?php endif; ?>

  </section>

  <!-- PAGINACIÓN -->
  <nav class="ps-pagination" aria-label="Paginación">
    <?php
      the_posts_pagination([
        'mid_size'  => 1,
        'prev_text' => '← Anterior',
        'next_text' => 'Siguiente →',
      ]);
    ?>
  </nav>

</main>

<?php get_footer();`}</code></pre>

      <div className="callout tip">
        Esta plantilla usa el <strong>Loop</strong> de WordPress.
        Cada paseo publicado se transforma automáticamente en una tarjeta.
      </div>
    </div>
  </details>

    <div className="callout tip">
      Esta es la razón por la que un CPT es una herramienta tan potente:
      convierte una web en un sistema de contenidos dinámico y escalable.
    </div>
    </section>
  

     <details className="dd" open>
    <summary>5️⃣ Hacer la página “Paseos” visitable desde el menú</summary>
    <div className="dd-body">
      <p>
        La página de listado del CPT no es una página creada a mano, pero sí se puede enlazar en el menú.
      </p>

      <ol>
        <li>Ir a <strong>Apariencia → Menús</strong></li>
        <li>Añadir un enlace personalizado</li>
        <li>URL: <code>/paseo/</code> (o <code>/paseos/</code>)</li>
        <li>Texto del enlace: “Paseos”</li>
        <li>Guardar menú</li>
      </ol>

      <div className="callout tip">
        Esto crea una navegación real: “Paseos” lleva al listado automático, siempre actualizado.
      </div>
    </div>
  </details>

  <div className="callout tip">
    <strong>Resultado:</strong> el sitio ya no funciona como páginas sueltas, funciona como un sistema.
    Se publica contenido y el listado se alimenta solo.
  </div>

<PracticeBox>
  <h3>🧪 Crear varias paseo usando solo el CPT (sin ACF)</h3>

  <p>
    Vamos a trabajar como desarrolladores.
    El CPT ya nos permite crear múltiples paseo utilizando:
    <strong>título, contenido e imagen destacada</strong>.
  </p>

  <ol>
    <li>Ve a <strong>“Paseos → Añadir nuevo”</strong>.</li>

    <li>
      Crea la primera paseo:
      <ul>
        <li><strong>Título:</strong> Paseo por Triana</li>
        <li><strong>Imagen destacada</strong></li>
        <li><strong>Contenido:</strong> descripción completa del recorrido</li>
      </ul>
    </li>

    <li>Publica.</li>

    <li>
      Ahora crea una segunda paseo distinta:
      <ul>
        <li><strong>Título:</strong> paseo por Santa Cruz</li>
        <li>Otra imagen</li>
        <li>Contenido diferente</li>
      </ul>
    </li>

    <li>Publica también.</li>

    <li>
      Visita:
      <br />
      <code>/paseo/</code> (archivo del CPT)
      <br />
      y entra en cada una.
    </li>
  </ol>

  <div className="callout tip">
    Observa que ambas paseo usan la misma plantilla
    <code>single-paseo.php</code>.
    El diseño no cambia.
    Solo cambia el contenido.
  </div>

  <div className="callout warn">
    Eso es arquitectura correcta:
    una plantilla,
    múltiples contenidos.
  </div>

</PracticeBox>
      </section>

      {/* CONFIGURACIÓN AVANZADA CPT */}
      <section className="doc doc-section" id="configuracion-avanzada">
        <h2>Configuración Avanzada de CPT UI: El puente hacia ACF</h2>
        
        <TipBox>
          <p>
            <strong>Concepto clave:</strong> WordPress separa el contenido en tablas. Para que un botón "encuentre" una paseo, debemos darle permiso explícito a través de la <strong>REST API</strong>.
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
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Permite que la URL <code>/paseo/nombre-paseo</code> cargue en el navegador.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Excluir de la búsqueda</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Falso</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Vital:</strong> Si está en Verdadero, el buscador de enlaces del botón NO encontrará tus paseo.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Mostrar en REST API</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Habilita la comunicación con el editor moderno (Gutenberg) y maquetadores como Astra o Elementor.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Base de la REST API</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>paseo</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Define la "matrícula" técnica del contenido. Escribe siempre el slug en minúsculas.</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Has Archive (Tiene archivo)</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>Verdadero</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Activa la capacidad de tener un listado automático (el archivo <code>archive-paseo.php</code>).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <details className="dd" open>
          <summary>¿Por qué mi botón no encuentra la paseo? (Solución de errores)</summary>
      <div className="dd-body">
        <p>Si has seguido la tabla anterior y al escribir "Parque" en un botón sigue sin aparecer nada, el problema es la <strong>indexación</strong>. Sigue este protocolo de emergencia:</p>
        <ol>
          <li><strong>Refresco de Enlaces:</strong> Ve a <em>Ajustes &gt; Enlaces permanentes</em> y haz clic en "Guardar cambios" dos veces. Esto limpia la caché de paseo de la base de datos.</li>
          <li><strong>Estado de Publicación:</strong> Asegúrate de que tu paseo no esté en "Borrador". El buscador de enlaces solo indexa contenido "Publicado".</li>
          <li><strong>Soporte de Título:</strong> Revisa que en la sección final de CPT UI tengas marcada la casilla <strong>Título (Title)</strong>. Sin título, el buscador no tiene texto que comparar.</li>
        </ol>
      </div>
    </details>

    <details className="dd">
      <summary>Soportes del Contenido (Sección Supports)</summary>
      <div className="dd-body">
        <p>Al final de los ajustes de CPT UI verás una lista de checkboxes. Para una web de paseo profesional, marca estas:</p>
        <ul>
          <li><strong>Título:</strong> Imprescindible para el nombre de la paseo.</li>
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
        <strong>¡Ojo!</strong> Nunca cambies el "Slug" del CPT (de <code>paseo</code> a <code>mis-paseo</code>, por ejemplo) una vez que ya tengas contenido creado. 
        Si lo haces, todas las paseo que hayas escrito desaparecerán de la vista y tendrás que reasignarlas en la base de datos.
      </p>
    </WarningBox>

    <PracticeBox>
      <h3>Ejercicio de Verificación</h3>
      <p>
        Una vez configurado todo, abre una pestaña nueva y escribe: <br />
        <code>tu-dominio.local/wp-json/wp/v2/paseo</code> <br />
        Si ves una pantalla llena de código (JSON), significa que has configurado la REST API correctamente y tu buscador de botones debería funcionar al 100%.
      </p>
    </PracticeBox>

   

    <PracticeBox>
      <h3>🧪 Probar la plantilla</h3>
      <ol>
        <li>Ve a "paseo &rarr; Añadir nueva"</li>
        <li>Título: "paseo de prueba por Triana"</li>
        <li>Añade una imagen destacada</li>
        <li>Escribe algo de contenido</li>
        <li>Publica y pulsa "Ver paseo"</li>
        <li>¿Se carga con tu plantilla personalizada?</li>
      </ol>
    </PracticeBox>

        <details className="dd" open>
          <summary>🧩 Plantilla Single Paseo sin ACF (solo CPT)</summary>
          <div className="dd-body">
            <p>
              Esta versión de <code>single-paseo.php</code> utiliza únicamente:
            </p>

            <ul>
              <li>Título</li>
              <li>Imagen destacada</li>
              <li>Extracto (si existe)</li>
              <li>Contenido del editor</li>
            </ul>

            <p>
              No depende de <code>get_field()</code> ni de ningún plugin adicional.
            </p>

            <div className="callout tip">
              La estructura visual es fija.
              El contenido es variable.
            </div>

            <pre><code>{`<?php
/**
 * Single Paseo (CPT: paseo) — SIN ACF (solo CPT)
 * Archivo: single-paseo.php
 */
if ( ! defined('ABSPATH') ) exit;

get_header();

// Astra: opcional
remove_action( 'astra_entry_header', 'astra_post_meta', 10 );

$titulo = get_the_title();

/* ===== 1) Imagen destacada ===== */
$img_url = '';
if ( has_post_thumbnail() ) {
  $img_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
}

/* ===== 2) Contenido / Lead ===== */
$raw_content = get_the_content();
$content_html = apply_filters('the_content', $raw_content);

if ( has_excerpt() ) {
  $lead = get_the_excerpt();
} else {
  $lead = wp_trim_words( wp_strip_all_tags( $raw_content ), 26 );
}

/* ===== 3) Helpers: extraer secciones por encabezado ===== */
function ps_extract_section_text($content, $heading){
  $heading = preg_quote($heading, '/');
  $pattern = '/<h[2-4][^>]*>\\s*' . $heading . '\\:?\\s*<\\/h[2-4]>\\s*(.*?)\\s*(?=<h[2-4][^>]*>|$)/is';
  if ( preg_match($pattern, $content, $m) ) {
    $text = trim( wp_strip_all_tags( $m[1] ) );
    return $text;
  }
  return '';
}

function ps_extract_section_list_items($content, $heading){
  $heading = preg_quote($heading, '/');
  $pattern = '/<h[2-4][^>]*>\\s*' . $heading . '\\:?\\s*<\\/h[2-4]>\\s*(.*?)\\s*(?=<h[2-4][^>]*>|$)/is';
  if ( preg_match($pattern, $content, $m) ) {
    $section_html = $m[1];
    if ( preg_match('/<ul[^>]*>(.*?)<\\/ul>/is', $section_html, $ul) ) {
      preg_match_all('/<li[^>]*>(.*?)<\\/li>/is', $ul[0], $lis);
      $items = [];
      foreach ($lis[1] as $li){
        $t = trim( wp_strip_all_tags($li) );
        if ($t !== '') $items[] = $t;
      }
      return $items;
    }
  }
  return [];
}

/* ===== 4) Datos sacados del contenido (sin ACF) ===== */
$cpt_duracion  = ps_extract_section_text($content_html, 'Duración');
$cpt_precio    = ps_extract_section_text($content_html, 'Precio');
$cpt_idioma    = ps_extract_section_text($content_html, 'Idioma');
$cpt_encuentro = ps_extract_section_text($content_html, 'Encuentro');

$incluye_items   = ps_extract_section_list_items($content_html, 'Incluye');
$noincluye_items = ps_extract_section_list_items($content_html, 'No incluye');
?>

<main class="ps-wrap ps-single">

  <!-- HERO -->
  <header class="ps-hero" aria-label="Cabecera del paseo">
    <div class="ps-hero__media" style="<?php echo $img_url ? 'background-image:url(' . esc_url($img_url) . ');' : ''; ?>">
      <?php if ( ! $img_url ): ?>
        <div class="ps-hero__placeholder" aria-hidden="true"></div>
      <?php endif; ?>
      <span class="ps-hero__badge">Paseo guiado · Sevilla</span>
    </div>

    <div class="ps-hero__content">
      <h1 class="ps-title"><?php echo esc_html($titulo); ?></h1>

      <?php if ( ! empty($lead) ): ?>
        <p class="ps-lead"><?php echo esc_html($lead); ?></p>
      <?php endif; ?>

      <div class="ps-hero__actions">
        <a class="ps-btn ps-btn--primary" href="#reserva">Reservar ahora</a>
        <a class="ps-btn ps-btn--ghost" href="/paseo">Ver todos los paseos</a>
      </div>

      <ul class="ps-pills" aria-label="Datos clave">
        <?php if ( ! empty($cpt_duracion) ): ?><li class="ps-pill">⏱ <?php echo esc_html($cpt_duracion); ?></li><?php endif; ?>
        <?php if ( ! empty($cpt_precio) ): ?><li class="ps-pill">💶 <?php echo esc_html($cpt_precio); ?></li><?php endif; ?>
        <?php if ( ! empty($cpt_idioma) ): ?><li class="ps-pill">🗣 <?php echo esc_html($cpt_idioma); ?></li><?php endif; ?>
      </ul>
    </div>
  </header>

  <section class="ps-grid" aria-label="Contenido del paseo">
    <article class="ps-card ps-card--main">
      <div class="ps-card__body">
        <h2 class="ps-h2">Descripción</h2>

        <?php if ( trim(wp_strip_all_tags($raw_content)) !== '' ): ?>
          <div class="ps-prose"><?php echo $content_html; ?></div>
        <?php else: ?>
          <p class="ps-muted">Escribe la descripción en el editor del paseo.</p>
        <?php endif; ?>
      </div>
    </article>

    <aside class="ps-card ps-card--aside" aria-label="Ficha rápida">
      <div class="ps-card__body">
        <h2 class="ps-h2">Ficha rápida</h2>

        <dl class="ps-meta">
          <div class="ps-meta__row"><dt>Duración</dt><dd><?php echo $cpt_duracion ? esc_html($cpt_duracion) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Precio</dt><dd><?php echo $cpt_precio ? esc_html($cpt_precio) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Idioma</dt><dd><?php echo $cpt_idioma ? esc_html($cpt_idioma) : '—'; ?></dd></div>
          <div class="ps-meta__row"><dt>Encuentro</dt><dd><?php echo $cpt_encuentro ? esc_html($cpt_encuentro) : '—'; ?></dd></div>
        </dl>

        <div class="ps-divider" aria-hidden="true"></div>

        <h3 class="ps-h3">Incluye</h3>
        <?php if ( $incluye_items ): ?>
          <ul class="ps-list"><?php foreach($incluye_items as $it){ echo '<li>' . esc_html($it) . '</li>'; } ?></ul>
        <?php else: ?>
          <p class="ps-muted">En el contenido, crea "Incluye" + una lista.</p>
        <?php endif; ?>

        <div class="ps-divider" aria-hidden="true"></div>

        <h3 class="ps-h3">No incluye</h3>
        <?php if ( $noincluye_items ): ?>
          <ul class="ps-list ps-list--danger"><?php foreach($noincluye_items as $it){ echo '<li>' . esc_html($it) . '</li>'; } ?></ul>
        <?php else: ?>
          <p class="ps-muted">En el contenido, crea "No incluye" + una lista.</p>
        <?php endif; ?>

        <div class="ps-cta" id="reserva">
          <p class="ps-note">Reserva rápida. Confirmación por email.</p>
          <a class="ps-btn ps-btn--primary ps-btn--block" href="/reservar">Reservar ahora</a>
          <p class="ps-micro">¿Dudas? Escríbenos desde Contacto.</p>
        </div>
      </div>
    </aside>
  </section>

</main>

<?php get_footer();`}</code></pre>

          </div>
        </details>
  </section>

      {/* 9) TESTING */}
      <section className="doc doc-section" id="testing">
        <h2>9) Testing y depuración</h2>

        <details className="dd" open>
          <summary>Problemas comunes y soluciones</summary>
          <div className="dd-body">
            <h4>❌ Error 404 al ver una paseo</h4>
            <p><strong>Solución:</strong></p>
            <ol>
              <li>Ve a <strong>Ajustes &rarr; Enlaces permanentes</strong></li>
              <li>Pulsa <strong>"Guardar cambios"</strong> (sin cambiar nada)</li>
              <li>Esto regenera las reglas de rewrite</li>
            </ol>

            <h4>❌ La plantilla no se carga (sigue usando single.php)</h4>
            <p><strong>Verificaciones:</strong></p>
            <ul>
              <li>¿El archivo se llama exactamente <code>single-paseo.php</code>?</li>
              <li>¿Está en la raíz del tema hijo, no en subcarpeta?</li>
              <li>¿El slug del CPT es efectivamente "paseo"?</li>
            </ul>

            <h4>❌ El menú "paseo" no aparece en admin</h4>
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
            <pre style={{background: '#141414', padding: '1rem', borderRadius: '8px'}}>
{`define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);`}
            </pre>

            <h4>2. Verificar qué plantilla se está usando</h4>
            <p>Añade esto temporalmente al <code>functions.php</code> del tema hijo:</p>
            <pre style={{background: '#0e0e0e', padding: '1rem', borderRadius: '8px'}}>
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
            <p>Luego visita una paseo con <code>?debug=1</code> al final de la URL.</p>

            <h4>3. Plugin Query Monitor (recomendado)</h4>
            <p>Instala "Query Monitor" para ver información detallada sobre plantillas, queries y errores.</p>
          </div>
        </details>

        <PracticeBox>
          <h3>✅ Checklist de testing</h3>
          <ul>
            <li>☐ Crear una paseo nueva desde admin</li>
            <li>☐ La URL individual funciona (<code>/paseo/nombre-paseo/</code>)</li>
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
            <pre style={{background: '#0c0d0d', padding: '1rem', borderRadius: '8px'}}>
{`<?php
/**
 * TEMA HIJO - PROYECTO paseo TURÍSTICAS
 * Cliente: [Nombre del cliente]
 * Desarrollador: [Tu nombre]
 * Fecha: [Fecha de desarrollo]
 * 
 * CUSTOM POST TYPES IMPLEMENTADOS:
 * - paseo turísticas (slug: paseo)
 *   - single-paseo.php (ficha individual)
 *   - archive-paseo.php (listado completo)
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
            <pre style={{background: '#101111', padding: '1rem', borderRadius: '8px'}}>
{`<?php
/**
 * Plantilla: paseo individual
 * Archivo: single-paseo.php
 * Descripción: Muestra la ficha completa de una paseo turística
 * 
 * Campos ACF utilizados:
 * - precio_paseo (number)
 * - duracion_paseo (text)
 * - ubicacion_paseo (text)
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
            <pre style={{background: '#0d0d0e', padding: '1rem', borderRadius: '8px'}}>
{`// ❌ MALO - vulnerable a XSS
<h2><?php echo get_field('titulo_paseo'); ?></h2>

// ✅ BUENO - contenido escapado
<h2><?php echo esc_html(get_field('titulo_paseo')); ?></h2>

// ✅ Para contenido HTML válido
<div><?php echo wp_kses_post(get_field('descripcion_paseo')); ?></div>

// ✅ Para URLs
<a href="<?php echo esc_url(get_field('enlace_reservas')); ?>">Reservar</a>`}
            </pre>

            <h4>Verificar existencia de campos</h4>
            <pre style={{background: '#0f0f0f', padding: '1rem', borderRadius: '8px'}}>
{`// ✅ SIEMPRE verifica que el campo existe
<?php if (get_field('precio_paseo')) : ?>
  <span class="precio"><?php echo esc_html(get_field('precio_paseo')); ?>€</span>
<?php endif; ?>`}
            </pre>
          </div>
        </details>

        <details className="dd" open>
          <summary>⚡ Rendimiento y optimización</summary>
          <div className="dd-body">
            <h4>Lazy loading para imágenes</h4>
            <pre style={{background: '#0e0e0f', padding: '1rem', borderRadius: '8px'}}>
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
            <pre style={{background: '#1b1c1d', padding: '1rem', borderRadius: '8px'}}>
{`// En functions.php - cargar estilos solo en paseo
function enqueue_paseo_styles() {
    if (is_singular('paseo') || is_post_type_archive('paseo')) {
        wp_enqueue_style(
            'paseo-styles', 
            get_stylesheet_directory_uri() . '/assets/css/paseo.css',
            array(),
            '1.0.0'
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_paseo_styles');`}
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
            <li>Crear CPT "paseo" con configuración completa</li>
            <li>Verificar que aparece el menú en admin</li>
          </ol>
          <p><strong>Entregable:</strong> Screenshots del menú admin y configuración CPT</p>
        </ActivityBox>

        <ActivityBox>
          <h3>🛠️ Actividad 2: Plantilla personalizada</h3>
          <h4>Objetivo: Crear plantilla funcional y con estilos</h4>
          <ol>
            <li>Crear archivo <code>single-paseo.php</code> en tema hijo</li>
            <li>Implementar plantilla básica con header/footer</li>
            <li>Añadir estilos CSS personalizados</li>
            <li>Crear 3 paseo de prueba con imágenes</li>
          </ol>
          <p><strong>Entregable:</strong> URLs funcionales de las 3 paseo creadas</p>
        </ActivityBox>

        <ActivityBox>
          <h3>🔍 Actividad 3: Testing y depuración</h3>
          <h4>Objetivo: Verificar funcionalidad y resolver problemas</h4>
          <ol>
            <li>Probar URLs individuales de paseo</li>
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
        <h2>Repaso y checklist final 🎓</h2>
        
        <div style={{background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1rem 0', color: 'white'}}>🏆 ¡Felicidades! Has completado el Custom Post Types</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🚀 WordPress Personalizado</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Tu WordPress ya no es "solo un blog"</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🏛️ CMS de Paseos</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Sistema completo funcionando</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>📄 Plantillas PHP</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Diseño personalizado funcionando</p>
            </div>
          </div>
        </div>
        
        <div style={{background: '#f8f9fa', border: '2px solid #dee2e6', borderRadius: '10px', padding: '1.5rem', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1.5rem 0', textAlign: 'center'}}>🗺️ Mapa del conocimiento adquirido</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', alignItems: 'start'}}>
            <div>
              <h4 style={{color: '#007bff', margin: '0 0 0.5rem 0'}}>🧠 Conceptos teóricos</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li>✅ Qué es un Custom Post Type</li>
                <li>✅ Cuándo usarlo vs Páginas</li>
                <li>✅ Template Hierarchy de WordPress</li>
                <li>✅ Convenciones de nomenclatura</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: '#28a745', margin: '0 0 0.5rem 0'}}>🚀 Habilidades prácticas</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li>✅ Configurar CPT con CPT UI</li>
                <li>✅ Crear contenido estructurado</li>
                <li>✅ Programar plantillas PHP</li>
                <li>✅ Implementar diseño responsive</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: '#dc3545', margin: '0 0 0.5rem 0'}}>🔧 Herramientas dominadas</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li>✅ Custom Post Type UI (plugin)</li>
                <li>✅ Template files (single-*.php)</li>
                <li>✅ WordPress hooks y filters</li>
                <li>✅ CSS Grid y Flexbox</li>
              </ul>
            </div>
          </div>
        </div>

        <details className="dd" open>
          <summary>✅ Checklist de implementación correcta (Verificación paso a paso)</summary>
          <div className="dd-body">
            
            <div style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', padding: '1.5rem', borderRadius: '10px', margin: '1rem 0'}}>
              <h4 style={{margin: '0 0 1rem 0', color: '#721c24'}}>🎓 Cómo usar este checklist</h4>
              <p style={{margin: 0, color: '#721c24'}}>
                Marca cada casilla conforme vayas verificando. <strong>No avances al siguiente tema</strong> hasta completar el 90% de estos puntos.
              </p>
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem'}}>
              
              <div style={{padding: '1.5rem', border: '3px solid #28a745', borderRadius: '10px', background: '#f8fff9'}}>
                <h4 style={{color: '#28a745', margin: '0 0 1rem 0'}}>🔧 Configuración técnica</h4>
                <div style={{fontSize: '0.95rem'}}>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Tema hijo activo</strong> 📝
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Apariencia → Temas → Tu tema hijo activado</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Custom Post Type UI instalado</strong> 🔌
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Plugins → Añadir nuevo → "Custom Post Type UI"</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>CPT "paseo" creado</strong> 🏛️
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>CPT UI → Post Types → "paseo" configurado</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Menú "Paseos" visible en admin</strong> 🗺️
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Lateral izquierdo del dashboard de WordPress</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Enlaces permanentes regenerados</strong> 🔗
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Ajustes → Enlaces permanentes → Guardar cambios</div>
                  </label>
                </div>
              </div>

              <div style={{padding: '1.5rem', border: '3px solid #17a2b8', borderRadius: '10px', background: '#f8fcff'}}>
                <h4 style={{color: '#17a2b8', margin: '0 0 1rem 0'}}>📁 Estructura de archivos</h4>
                <div style={{fontSize: '0.95rem'}}>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>single-paseo.php en tema hijo</strong> 📄
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>wp-content/themes/tu-tema-hijo/single-paseo.php</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Estilos CSS añadidos</strong> 🎨
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>En style.css del tema hijo con clase .single-paseo</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Comentarios de documentación</strong> 📝
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Header con descripción al inicio del archivo PHP</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Código escapado por seguridad</strong> 🔒
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>esc_html(), esc_attr(), esc_url() usados correctamente</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Responsive design implementado</strong> 📱
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>@media queries en CSS para móviles</div>
                  </label>
                </div>
              </div>

              <div style={{padding: '1.5rem', border: '3px solid #ffc107', borderRadius: '10px', background: '#fffdf7'}}>
                <h4 style={{color: '#856404', margin: '0 0 1rem 0'}}>🧪 Testing funcional</h4>
                <div style={{fontSize: '0.95rem'}}>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>URLs individuales funcionan</strong> 🔗
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>tusitio.com/paseos/nombre-del-paseo/ carga sin error 404</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Se carga plantilla personalizada</strong> 🎨
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>No se ve como entrada de blog, sino con tu diseño</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Imágenes destacadas se muestran</strong> 🖼️
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>has_post_thumbnail() detecta y muestra imágenes</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Sin errores 404 o PHP</strong> ✅
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Revisa logs de error en hosting o WP Debug</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Vista móvil correcta</strong> 📱
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Prueba con DevTools o dispositivo real</div>
                  </label>
                </div>
              </div>

              <div style={{padding: '1.5rem', border: '3px solid #6f42c1', borderRadius: '10px', background: '#fdfbff'}}>
                <h4 style={{color: '#6f42c1', margin: '0 0 1rem 0'}}>📚 Documentación</h4>
                <div style={{fontSize: '0.95rem'}}>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Comentarios en functions.php</strong> 📝
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Si añadiste código personalizado</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Headers en archivos de plantilla</strong> 📜
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Descripción PHP al inicio de single-paseo.php</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Convenciones de nomenclatura</strong> 🏷️
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Nombres de variables y funciones consistentes</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Backup del proyecto realizado</strong> 💾
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Copia de seguridad antes y después de cambios</div>
                  </label>
                  <label style={{display: 'block', margin: '0.5rem 0', cursor: 'pointer'}}>
                    <input type="checkbox" style={{marginRight: '0.5rem', transform: 'scale(1.2)'}} />
                    <strong>Lista de plugins dependientes</strong> 🔌
                    <div style={{fontSize: '0.85rem', color: '#666', marginLeft: '1.2rem'}}>Custom Post Type UI en documentación del proyecto</div>
                  </label>
                </div>
              </div>

            </div>
            
            <div style={{background: '#d4edda', border: '2px solid #28a745', borderRadius: '10px', padding: '1.5rem', margin: '2rem 0'}}>
              <h4 style={{color: '#155724', margin: '0 0 1rem 0'}}>🚀 ¡Listo para el siguiente nivel!</h4>
              <p style={{margin: '0 0 1rem 0', color: '#155724'}}>
                Una vez completado este checklist, estás preparado para el <strong>Tema 19: Advanced Custom Fields (ACF)</strong>
              </p>
              <div style={{background: 'white', padding: '1rem', borderRadius: '6px'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#007bff'}}>🔮 Próximo tema: ACF + CPT = 💥</h5>
                <ul style={{margin: 0, fontSize: '0.9rem'}}>
                  <li>Añadir campos personalizados (precio, duración, ubicación)</li>
                  <li>Formularios de administración profesionales</li>
                  <li>Template definitivo con datos estructurados</li>
                  <li>Integración con Google Maps</li>
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
              <li><strong>Advanced Custom Fields (ACF):</strong> Campos personalizados para cada paseo</li>
              <li><strong>Plantilla completa:</strong> Mostrar precio, duración, ubicación, etc.</li>
              <li><strong>Archive template:</strong> Listado automático de todas las paseo</li>
              <li><strong>Funcionalidades avanzadas:</strong> Google Maps, galerías, filtros</li>
            </ul>

            <WarningBox>
              <p>
                <strong>Importante:</strong> No borres las paseo de prueba que has creado. 
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