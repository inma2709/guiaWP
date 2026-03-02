import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function WP_Advanced_Custom_Fields() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · WordPress · Advanced Custom Fields</p>
        <h1>ACF Pro: Campos personalizados que transforman WordPress</h1>
        <p className="lead">
          Advanced Custom Fields es el plugin que convierte WordPress de un simple gestor de contenido 
          en una plataforma de desarrollo profesional. Aprende a crear campos personalizados que 
          potencien tus Custom Post Types con datos estructurados.
        </p>

        <TipBox>
          <p>
            <strong>Concepto fundamental:</strong> ACF permite añadir cualquier tipo de dato a tu contenido: 
            fechas, números, galerías, mapas, relaciones... Todo con interfaz visual.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <nav className="doc doc-index">
        <a href="#fundamentos">1) Fundamentos de ACF</a>
        <a href="#instalacion">2) Instalación y configuración</a>
        <a href="#tipos-campos">3) Tipos de campos disponibles</a>
        <a href="#grupos-campos">4) Crear grupos de campos</a>
        <a href="#vincular-cpt">5) Vincular con Custom Post Types</a>
        <a href="#mostrar-frontend">6) Mostrar campos en frontend</a>
        <a href="#campos-avanzados">7) Campos avanzados (Repetidores, Galerías)</a>
        <a href="#integraciones">8) Integraciones con maquetadores</a>
        <a href="#casos-uso">9) Casos de uso prácticos</a>
        <a href="#mejores-practicas">10) Mejores prácticas profesionales</a>
        <a href="#actividades">Actividades</a>
        <a href="#repaso">Repaso final</a>
      </nav>

      {/* FUNDAMENTOS */}
      <section className="doc doc-section" id="fundamentos">
        <header className="doc-header">
          <p className="doc-kicker">Arquitectura de datos</p>
          <h2 className="doc-title">Fundamentos de Advanced Custom Fields</h2>
          <p className="doc-lead">
            ACF revoluciona WordPress permitiendo crear interfaces de administración personalizadas 
            sin tocar una línea de código. Es la diferencia entre hacer "páginas web" y crear "sistemas de gestión".
          </p>
        </header>

        <div className="doc-content">
          <h3>¿Qué resuelve ACF en el desarrollo profesional?</h3>
          
          <details className="dd" open>
            <summary>Problema sin ACF: Limitaciones de WordPress nativo</summary>
            <div className="dd-body">
              <p>WordPress por defecto solo ofrece:</p>
              <ul>
                <li><strong>Título:</strong> Una línea de texto</li>
                <li><strong>Contenido:</strong> Un editor enorme (incómodo para datos específicos)</li>
                <li><strong>Imagen destacada:</strong> Una sola imagen</li>
                <li><strong>Categorías y etiquetas:</strong> Clasificaciones básicas</li>
              </ul>
              
              <WarningBox>
                <p><strong>Resultado:</strong> Para proyectos reales (restaurantes, inmobiliarias, portfolios), 
                tienes que "forzar" el contenido en el editor, creando mantenimiento pesado.</p>
              </WarningBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>Solución con ACF: Datos estructurados</summary>
            <div className="dd-body">
              <p>Con ACF puedes crear campos específicos como:</p>
              
              <div className="table-wrap">
                <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                  <thead>
                    <tr style={{background: '#f8f9fa'}}>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Proyecto</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Campos ACF necesarios</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Ventaja profesional</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Restaurante</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Precio, ingredientes, categoría, foto del plato</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>El cliente no puede "romper" el diseño escribiendo mal</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Inmobiliaria</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Metros, precio, ubicación, galería, mapa</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Datos ordenados que permiten filtros automáticos</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Equipo/Staff</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Cargo, redes sociales, años experiencia</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Tarjetas automáticas con diseño consistente</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Portfolio</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Cliente, año, tecnología, galería, enlace</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Presentación profesional sin maquetar caso por caso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <TipBox>
            <p>
              <strong>Mentalidad profesional:</strong> ACF convierte WordPress en un CMS a medida. 
              El cliente ve formularios limpios, tú obtienes datos estructurados.
            </p>
          </TipBox>
        </div>
      </section>

      {/* INSTALACIÓN */}
      <section className="doc doc-section" id="instalacion">
        <header className="doc-header">
          <p className="doc-kicker">Configuración inicial</p>
          <h2 className="doc-title">Instalación y configuración de ACF</h2>
          <p className="doc-lead">
            Aunque existe una versión gratuita, ACF Pro desbloquea campos avanzados esenciales 
            como repetidores, galerías flexibles y campos de relación.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Paso 1: Adquirir ACF Pro (Recomendado)</summary>
            <div className="dd-body">
              <ol>
                <li>Ve a <strong>advancedcustomfields.com</strong></li>
                <li>Compra la licencia (inversión que se amortiza en el primer proyecto)</li>
                <li>Descarga el archivo ZIP</li>
              </ol>
              
              <TipBox>
                <p>
                  <strong>Coste vs. beneficio:</strong> Una licencia ACF Pro cuesta menos que 2 horas de 
                  desarrollo manual. Te ahorrará cientos de horas en proyectos.
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>Paso 2: Instalación del plugin</summary>
            <div className="dd-body">
              <ol>
                <li><strong>Método 1 (Pro):</strong> Plugins → Añadir nuevo → Subir plugin → Seleccionar ZIP</li>
                <li><strong>Método 2 (Gratuito):</strong> Buscar "Advanced Custom Fields" en el directorio</li>
                <li>Activar el plugin</li>
                <li>Verifica que aparezca "Campos personalizados" en el menú lateral</li>
              </ol>
            </div>
          </details>
        </div>

        <PracticeBox>
          <h3>🧪 Verificar instalación</h3>
          <p>Ve a <strong>Campos personalizados → Grupos de campos</strong>. Si ves la interfaz para crear grupos, la instalación es correcta.</p>
        </PracticeBox>
      </section>

      {/* TIPOS DE CAMPOS */}
      <section className="doc doc-section" id="tipos-campos">
        <header className="doc-header">
          <p className="doc-kicker">Referencia técnica</p>
          <h2 className="doc-title">Tipos de campos disponibles en ACF</h2>
          <p className="doc-lead">
            ACF ofrece más de 20 tipos de campos. Conocer cuál usar en cada situación 
            marca la diferencia entre un formulario funcional y una experiencia profesional.
          </p>
        </header>

        <div className="doc-content">
          <h3>Campos básicos (Más utilizados)</h3>
          
          <div className="table-wrap">
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
              <thead>
                <tr style={{background: '#f8f9fa'}}>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Tipo de campo</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Cuándo usarlo</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Función get_field()</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Casos de uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Text</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Textos cortos (nombres, títulos)</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>get_field('nombre_campo')</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Cargo, precio, duración</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Number</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Valores numéricos</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>get_field('precio')</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Precios, metros, años</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Image</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Subir una imagen</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>get_field('imagen')['url']</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Fotos de equipo, logos</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>True/False</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Activar/desactivar función</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>if(get_field('destacado'))</code></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Destacado, disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GRUPOS DE CAMPOS */}
      <section className="doc doc-section" id="grupos-campos">
        <header className="doc-header">
          <p className="doc-kicker">Organización profesional</p>
          <h2 className="doc-title">Crear grupos de campos estratégicos</h2>
          <p className="doc-lead">
            Un grupo de campos es un conjunto organizado de datos que aparecen juntos. 
            La organización correcta mejora la experiencia del cliente y facilita el mantenimiento.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Paso a paso: Crear el primer grupo</summary>
            <div className="dd-body">
              <ol>
                <li>Ve a <strong>Campos personalizados → Grupos de campos</strong></li>
                <li>Pulsa <strong>"Añadir nuevo"</strong></li>
                <li>Título del grupo: <strong>"Datos de Ruta Turística"</strong></li>
                <li>Pulsa <strong>"Añadir campo"</strong> para cada dato que necesites</li>
              </ol>
            </div>
          </details>

          <TipBox>
            <p>
              <strong>Nombre de campo:</strong> Siempre en minúsculas, con guiones bajos. 
              Este es el nombre que usarás en <code>get_field()</code>.
            </p>
          </TipBox>
        </div>
      </section>

      {/* VINCULAR CON CPT */}
      <section className="doc doc-section" id="vincular-cpt">
        <header className="doc-header">
          <p className="doc-kicker">Integración estratégica</p>
          <h2 className="doc-title">Vincular campos con Custom Post Types</h2>
          <p className="doc-lead">
            Esta es la magia: conectar los campos ACF con el CPT que creamos en el Tema 18. 
            Ahora las "rutas" tendrán formularios personalizados.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Configurar reglas de ubicación</summary>
            <div className="dd-body">
              <p>En el grupo de campos que acabas de crear, baja hasta <strong>"Reglas de ubicación"</strong>:</p>
              
              <ol>
                <li><strong>Mostrar este grupo de campos si:</strong> Tipo de entrada</li>
                <li><strong>es igual a:</strong> Rutas (selecciona tu CPT)</li>
                <li>Pulsa <strong>"Actualizar"</strong></li>
              </ol>
            </div>
          </details>

          <WarningBox>
            <p>
              Si no aparecen los campos, verifica que el nombre del CPT en ACF coincida 
              exactamente con el slug definido en CPT UI.
            </p>
          </WarningBox>
        </div>

        <PracticeBox>
          <h3>🧪 Probar la integración</h3>
          <ol>
            <li>Crea una nueva ruta de prueba</li>
            <li>Completa todos los campos ACF</li>
            <li>Publica la entrada</li>
            <li>Ve al frontend y verifica que los datos se guardan</li>
          </ol>
        </PracticeBox>
      </section>

      {/* MOSTRAR EN FRONTEND */}
      <section className="doc doc-section" id="mostrar-frontend">
        <header className="doc-header">
          <p className="doc-kicker">Implementación frontend</p>
          <h2 className="doc-title">Mostrar campos ACF en el frontend</h2>
          <p className="doc-lead">
            Los datos están guardados, ahora necesitamos mostrarlos. ACF utiliza funciones 
            específicas que extraen los valores y los preparan para mostrar.
          </p>
        </header>

        <div className="doc-content">
          <h3>Funciones básicas de ACF</h3>
          
          <details className="dd" open>
            <summary>get_field() vs the_field()</summary>
            <div className="dd-body">
              <div className="table-wrap">
                <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                  <thead>
                    <tr style={{background: '#f8f9fa'}}>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Función</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Qué hace</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Cuándo usarla</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>get_field('nombre')</code></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Devuelve el valor, no lo imprime</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Cuando necesitas manipular antes de mostrar</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><code>the_field('nombre')</code></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Imprime directamente el valor</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Para mostrar texto simple sin modificar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <details className="dd" open>
            <summary>Actualizar single-rutas.php con campos ACF</summary>
            <div className="dd-body">
              <p>Retoma el archivo <strong>single-rutas.php</strong> del Tema 18 y actualízalo:</p>
              
              <pre><code>{`<?php get_header(); ?>

<div class="ruta-single">
  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

      <article class="ruta-detail">
        <header class="ruta-header">
          <h1><?php the_title(); ?></h1>
          
          <!-- Imagen principal de ACF -->
          <?php if( get_field('imagen_ruta') ): ?>
            <div class="ruta-hero">
              <img src="<?php the_field('imagen_ruta'); ?>" alt="<?php the_title(); ?>">
            </div>
          <?php endif; ?>

          <!-- Meta información de ACF -->
          <div class="ruta-meta">
            <?php if( get_field('duracion_ruta') ): ?>
              <span class="duracion">🕒 <?php the_field('duracion_ruta'); ?></span>
            <?php endif; ?>
            
            <?php if( get_field('precio_ruta') ): ?>
              <span class="precio">💰 <?php the_field('precio_ruta'); ?>€</span>
            <?php endif; ?>
          </div>
        </header>

        <!-- Contenido principal -->
        <div class="ruta-content">
          <?php the_content(); ?>
        </div>

        <!-- Badge de destacado -->
        <?php if( get_field('es_destacada') ): ?>
          <div class="ruta-badge">⭐ Ruta destacada</div>
        <?php endif; ?>

      </article>
      
    <?php endwhile; ?>
  <?php endif; ?>
</div>

<?php get_footer(); ?>`}</code></pre>
            </div>
          </details>

          <TipBox>
            <p>Esta validación evita espacios en blanco o errores si el cliente no completa algún campo.</p>
          </TipBox>
        </div>
      </section>

      {/* CAMPOS AVANZADOS */}
      <section className="doc doc-section" id="campos-avanzados">
        <header className="doc-header">
          <p className="doc-kicker">ACF Pro features</p>
          <h2 className="doc-title">Campos avanzados: Repetidores y Galerías</h2>
          <p className="doc-lead">
            Los campos avanzados de ACF Pro permiten crear estructuras de datos complejas. 
            Aprende a implementar galerías de imágenes y repetidores para contenido dinámico.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Repetidor: Puntos de interés de la ruta</summary>
            <div className="dd-body">
              <p>Crear un repetidor para puntos de interés:</p>
              
              <ol>
                <li><strong>Etiqueta:</strong> Puntos de interés</li>
                <li><strong>Nombre:</strong> puntos_interes</li>
                <li><strong>Tipo:</strong> Repeater</li>
                <li>Dentro del repetidor, añadir subcampos:</li>
                <ul>
                  <li><strong>nombre_punto</strong> (Text)</li>
                  <li><strong>descripcion_punto</strong> (Textarea)</li>
                  <li><strong>imagen_punto</strong> (Image)</li>
                </ul>
              </ol>
              
              <p><strong>Mostrar en frontend:</strong></p>
              <pre><code>{`<?php if( have_rows('puntos_interes') ): ?>
  <div class="puntos-interes">
    <h3>Puntos de interés en la ruta</h3>
    
    <?php while( have_rows('puntos_interes') ) : the_row(); ?>
      <div class="punto-item">
        <h4><?php the_sub_field('nombre_punto'); ?></h4>
        <p><?php the_sub_field('descripcion_punto'); ?></p>
      </div>
    <?php endwhile; ?>
    
  </div>
<?php endif; ?>`}</code></pre>
            </div>
          </details>

          <WarningBox>
            <p>
              <strong>Rendimiento:</strong> Los repetidores generan consultas adicionales a la base de datos. 
              Para sitios con mucho tráfico, considera limitar el número de elementos repetidos.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* INTEGRACIONES */}
      <section className="doc doc-section" id="integraciones">
        <header className="doc-header">
          <p className="doc-kicker">Ecosystem compatibility</p>
          <h2 className="doc-title">Integraciones con maquetadores visuales</h2>
          <p className="doc-lead">
            ACF se integra perfectamente con Elementor, Divi, Gutenberg y Astra Pro. 
            Esto permite que los campos personalizados aparezcan en los maquetadores visuales.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Integración con Elementor Pro</summary>
            <div className="dd-body">
              <ol>
                <li>En un widget de texto de Elementor, pulsa el icono 🔧</li>
                <li>Selecciona <strong>"Dynamic Tags"</strong></li>
                <li>Elige <strong>"ACF Field"</strong></li>
                <li>Selecciona tu campo de ACF</li>
                <li>El contenido se actualiza automáticamente</li>
              </ol>
              
              <TipBox>
                <p>
                  Esta integración permite que el diseñador vea los datos reales mientras maqueta, 
                  acelerando significativamente el desarrollo.
                </p>
              </TipBox>
            </div>
          </details>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="doc doc-section" id="casos-uso">
        <header className="doc-header">
          <p className="doc-kicker">Aplicación práctica</p>
          <h2 className="doc-title">Casos de uso profesionales de ACF</h2>
          <p className="doc-lead">
            Aquí tienes ejemplos reales de cómo ACF resuelve problemas específicos en proyectos profesionales.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>Caso 1: Restaurante con carta digital</summary>
            <div className="dd-body">
              <p><strong>Problema:</strong> El cliente necesita actualizar precios y platos frecuentemente.</p>
              <p><strong>Solución ACF:</strong> Campos específicos para precio, ingredientes, categoría.</p>
              
              <TipBox>
                <p><strong>Resultado:</strong> El restaurante actualiza su carta sin llamar al programador.</p>
              </TipBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>Caso 2: Inmobiliaria con filtros automáticos</summary>
            <div className="dd-body">
              <p><strong>Problema:</strong> Propiedades con características específicas que los clientes necesitan filtrar.</p>
              <p><strong>Solución:</strong> Campos numéricos para metros, precio, etc. que permiten filtros automáticos.</p>
            </div>
          </details>
        </div>
      </section>

      {/* MEJORES PRÁCTICAS */}
      <section className="doc doc-section" id="mejores-practicas">
        <header className="doc-header">
          <p className="doc-kicker">Desarrollo profesional</p>
          <h2 className="doc-title">Mejores prácticas profesionales con ACF</h2>
          <p className="doc-lead">
            Estas prácticas marcan la diferencia entre un proyecto funcional y un proyecto escalable y mantenible.
          </p>
        </header>

        <div className="doc-content">
          <details className="dd" open>
            <summary>1. Nomenclatura de campos consistente</summary>
            <div className="dd-body">
              <p><strong>✅ Usar:</strong> precio_producto, imagen_destacada_equipo, descripcion_breve_servicio</p>
              <p><strong>❌ Evitar:</strong> Precio, img, texto1</p>
              
              <TipBox>
                <p>Nombres específicos, en minúsculas, con contexto evitan confusiones futuras.</p>
              </TipBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>2. Validaciones y valores por defecto</summary>
            <div className="dd-body">
              <pre><code>{`// ✅ Buena práctica: siempre validar
<?php if( get_field('precio_producto') ): ?>
  <span class="precio"><?php the_field('precio_producto'); ?>€</span>
<?php else: ?>
  <span class="precio">Consultar precio</span>
<?php endif; ?>`}</code></pre>
            </div>
          </details>

          <details className="dd" open>
            <summary>3. Organización de grupos lógicos</summary>
            <div className="dd-body">
              <p><strong>En lugar de un grupo gigante, divide por funcionalidad:</strong></p>
              <ul>
                <li><strong>Grupo "Datos básicos del producto":</strong> precio, SKU, stock</li>
                <li><strong>Grupo "Imágenes del producto":</strong> imagen principal, galería, hover</li>
                <li><strong>Grupo "SEO del producto":</strong> meta descripción, keywords</li>
              </ul>
              
              <TipBox>
                <p>Esta organización mejora la experiencia del cliente y facilita el mantenimiento del código.</p>
              </TipBox>
            </div>
          </details>

          <details className="dd" open>
            <summary>4. Backup de configuraciones ACF</summary>
            <div className="dd-body">
              <p><strong>Exportar configuraciones para reutilizar:</strong></p>
              
              <ol>
                <li>Ve a <strong>Campos personalizados → Herramientas</strong></li>
                <li>Selecciona los grupos a exportar</li>
                <li>Pulsa <strong>"Generar código de exportación"</strong></li>
                <li>Copia el código PHP y guárdalo en tu theme</li>
              </ol>
              
              <WarningBox>
                <p>
                  <strong>Importante:</strong> Guarda estos backups en tu repositorio. 
                  Si cambias de servidor, podrás restaurar toda la configuración fácilmente.
                </p>
              </WarningBox>
            </div>
          </details>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section className="doc doc-section" id="actividades">
        <h2>Actividades prácticas</h2>

        <ActivityBox>
          <h3>1) Crear sistema completo de rutas</h3>
          <p><strong>Objetivo:</strong> Implementar toda la estructura Tema 18 + Tema 19</p>
          <ul>
            <li>Custom Post Type "Rutas" (si no lo tienes del Tema 18)</li>
            <li>Grupo de campos ACF con todos los datos</li>
            <li>Plantilla single-rutas.php que muestre los campos</li>
            <li>Crear 3 rutas de prueba con datos completos</li>
          </ul>
          <p><strong>Resultado esperado:</strong> URLs como <code>/rutas/ruta-por-triana/</code> que muestren tarjetas profesionales.</p>
        </ActivityBox>

        <ActivityBox>
          <h3>2) Galería con repetidor</h3>
          <p><strong>Objetivo:</strong> Campos avanzados en acción</p>
          <ul>
            <li>Añadir campo galería al grupo de rutas</li>
            <li>Añadir repetidor "puntos_interes" con subcampos</li>
            <li>Actualizar single-rutas.php para mostrar galería</li>
            <li>Mostrar puntos de interés como tarjetas</li>
          </ul>
        </ActivityBox>

        <ActivityBox>
          <h3>3) Proyecto libre</h3>
          <p><strong>Elige uno de estos proyectos:</strong></p>
          <ul>
            <li><strong>Restaurante:</strong> CPT "Platos" + ACF (precio, ingredientes, categoría)</li>
            <li><strong>Inmobiliaria:</strong> CPT "Propiedades" + ACF (precio, m², ubicación, galería)</li>
            <li><strong>Equipo:</strong> CPT "Miembros" + ACF (cargo, redes sociales, experiencia)</li>
          </ul>
          <p>Implementa la estructura completa y crea contenido de prueba.</p>
        </ActivityBox>
      </section>

      {/* REPASO FINAL */}
      <section className="doc doc-section" id="repaso">
        <h2>Repaso final: WordPress profesional completo</h2>

        <details className="dd" open>
          <summary>Lo que has aprendido en estos dos temas</summary>
          <div className="dd-body">
            <div className="table-wrap">
              <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                <thead>
                  <tr style={{background: '#f8f9fa'}}>
                    <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Tema 18: Custom Post Types</th>
                    <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Tema 19: Advanced Custom Fields</th>
                    <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Resultado conjunto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Crear tipos de contenido específicos</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Añadir campos personalizados a esos tipos</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Sistema de gestión profesional</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Plantillas específicas (single-X.php)</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Mostrar datos estructurados con get_field()</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Diseño consistente y mantenible</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>URLs amigables (/rutas/nombre-ruta/)</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Interfaz de admin personalizada</td>
                    <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Experiencia de usuario premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <TipBox>
          <p>
            <strong>Has conseguido algo importante:</strong> Ya no dependes de themes prediseñados. 
            Puedes crear cualquier tipo de contenido que necesite un cliente y darle una interfaz profesional para gestionarlo.
          </p>
        </TipBox>

        <details className="dd" open>
          <summary>El siguiente nivel: ¿Hacia dónde seguir?</summary>
          <div className="dd-body">
            <ul>
              <li><strong>WP_Query avanzado:</strong> Filtros, búsquedas y listados complejos</li>
              <li><strong>AJAX:</strong> Actualizaciones dinámicas sin recargar página</li>
              <li><strong>API REST:</strong> Conexión con aplicaciones externas</li>
              <li><strong>Campos condicionales:</strong> ACF que aparece según otros valores</li>
              <li><strong>Optimización:</strong> Caché, lazy loading, minificación</li>
            </ul>
          </div>
        </details>

        <div className="doc doc-next">
          <a className="btn btn-primary" href="#fundamentos">
            Volver arriba
          </a>
        </div>
      </section>
    </TopicLayout>
  );
}