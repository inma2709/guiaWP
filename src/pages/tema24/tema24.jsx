import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function WP_Elementor_Introduccion() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · WordPress · Desarrollo profesional</p>
        <h1>Elementor: El Page Builder que Revoluciona WordPress</h1>
        <p className="lead">
          Descubre Elementor, el maquetador visual más popular de WordPress. Aprende las diferencias 
          fundamentales con los temas que ya conoces (Astra, Spectra) y domina tanto la versión 
          gratuita como las capacidades profesionales de Elementor Pro.
        </p>

        <TipBox title="🎯 Objetivo de este tema">
          <p>
            <strong>Al finalizar dominarás:</strong> Comprender cuándo usar Elementor vs themes tradicionales, 
            las capacidades de la versión gratuita, y el potencial de Elementor Pro para proyectos avanzados.
          </p>
          <p><strong>Tiempo estimado:</strong> 2 horas · <strong>Nivel:</strong> Intermedio</p>
          <p><strong>Requisitos previos:</strong> Conocimiento de Astra/Spectra y conceptos básicos de WordPress</p>
        </TipBox>
      </header>

      {/* FUNDAMENTOS */}
      <section className="doc doc-section" id="que-es-elementor">
        <h2>¿Qué es Elementor y por qué existe?</h2>
        
        <div className="doc-content">
          <p>
            <strong>Elementor es un page builder visual</strong> que permite crear páginas web mediante 
            arrastrar y soltar elementos, sin escribir código. Pero para entender su valor real, 
            primero debemos comprender qué problema resuelve.
          </p>

          <h3>El problema que resuelve Elementor</h3>

          <TipBox title="🤔 ¿Por qué necesitamos page builders?">
            <p>
              <strong>WordPress tiene una limitación fundamental:</strong> Los themes controlan CÓMO se ve tu contenido, 
              pero tú solo controlas QUÉ contenido pones. Esta separación a veces no es suficiente para 
              diseños únicos y personalizados.
            </p>
          </TipBox>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '2rem 0'}}>
            <div style={{background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '12px', padding: '1.5rem'}}>
              <h4 style={{color: '#856404', margin: '0 0 1rem 0'}}>🏗️ Enfoque Tradicional (Astra, Spectra)</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li><strong>Tú controlas:</strong> Contenido y configuraciones básicas</li>
                <li><strong>Theme controla:</strong> Layout, estructura, diseño</li>
                <li><strong>Personalización:</strong> Customizer + CSS custom</li>
                <li><strong>Velocidad:</strong> Excelente (código optimizado)</li>
                <li><strong>Flexibilidad:</strong> Limitada a opciones del theme</li>
              </ul>
            </div>

            <div style={{background: '#d1ecf1', border: '2px solid #17a2b8', borderRadius: '12px', padding: '1.5rem'}}>
              <h4 style={{color: '#0c5460', margin: '0 0 1rem 0'}}>🎨 Enfoque Page Builder (Elementor)</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li><strong>Tú controlas:</strong> Contenido + diseño + estructura</li>
                <li><strong>Theme controla:</strong> Muy poco (casi solo header/footer)</li>
                <li><strong>Personalización:</strong> Visual, sin límites</li>
                <li><strong>Velocidad:</strong> Buena (requiere optimización)</li>
                <li><strong>Flexibilidad:</strong> Total libertad de diseño</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Concepto clave:</strong> Elementor no "reemplaza" a tu theme - se apodera del control 
              de las páginas donde lo uses. El theme sigue siendo importante para otras funciones 
              (blog, archivo, funciones PHP, etc.).
            </p>
          </WarningBox>

          <h3>¿Cuándo usar cada enfoque?</h3>

          <details className="dd">
            <summary>🏢 Usa themes tradicionales (Astra, Spectra) cuando...</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Velocidad es prioridad #1:</strong> Blogs, sitios de noticias, e-commerce</li>
                <li><strong>Diseño standard funciona:</strong> Corporativos, institucionales</li>
                <li><strong>Presupuesto limitado:</strong> Proyectos con restricciones económicas</li>
                <li><strong>Equipo técnico:</strong> Desarrolladores que pueden modificar CSS/PHP</li>
                <li><strong>SEO crítico:</strong> Sitios donde cada milisegundo cuenta</li>
              </ul>

              <div className="callout tip">
                <strong>Ventaja principal:</strong> Máximo rendimiento y código limpio out-of-the-box
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Usa Elementor cuando...</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Diseño único es prioridad:</strong> Portfolio, landing pages creative</li>
                <li><strong>Cliente quiere control visual:</strong> Poder editar diseño sin desarrollador</li>
                <li><strong>Layouts complejos:</strong> Secciones custom, diseños no-standard</li>
                <li><strong>Equipo no-técnico:</strong> Diseñadores, marketers que no saben código</li>
                <li><strong>Prototipado rápido:</strong> Necesitas mostrar mockups funcionales</li>
              </ul>

              <div className="callout tip">
                <strong>Ventaja principal:</strong> Libertad creativa total y autonomía del cliente
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* COMPARATIVA DETALLADA */}
      <section className="doc doc-section" id="comparativa-detallada">
        <h2>Comparativa detallada: Elementor vs Astra/Spectra</h2>
        
        <div className="doc-content">
          <p>
            Ahora que entiendes los conceptos, vamos a comparar específicamente con las herramientas 
            que ya conoces del curso.
          </p>

          <h3>Flujo de trabajo: Diferencias fundamentales</h3>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '2rem 0'}}>
            <div style={{background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '1.5rem'}}>
              <h4 style={{color: '#495057', margin: '0 0 1rem 0'}}>Con Astra + Spectra</h4>
              
              <div style={{background: '#e7f3ff', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#0066cc'}}>1️⃣ Instalas theme</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Astra define la estructura base</p>
              </div>

              <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#0ea5e9'}}>2️⃣ Personalizas en Customizer</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Colores, fonts, layouts predefinidos</p>
              </div>

              <div style={{background: '#f8fff9', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#10b981'}}>3️⃣ Añades contenido</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Gutenberg + bloques de Spectra</p>
              </div>

              <div style={{background: '#fef3e7', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#f59e0b'}}>4️⃣ CSS custom (opcional)</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Para ajustes específicos</p>
              </div>
            </div>

            <div style={{background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '1.5rem'}}>
              <h4 style={{color: '#495057', margin: '0 0 1rem 0'}}>Con Theme + Elementor</h4>
              
              <div style={{background: '#e7f3ff', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#0066cc'}}>1️⃣ Instalas theme</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Theme queda como "base" (header/footer)</p>
              </div>

              <div style={{background: '#f0f9ff', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#0ea5e9'}}>2️⃣ Instalas Elementor</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Plugin que reemplaza el editor</p>
              </div>

              <div style={{background: '#f8fff9', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#10b981'}}>3️⃣ Diseñas visualmente</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Drag & drop, todo en tiempo real</p>
              </div>

              <div style={{background: '#fef3e7', padding: '1rem', borderRadius: '6px', margin: '1rem 0'}}>
                <h5 style={{margin: '0 0 0.5rem 0', color: '#f59e0b'}}>4️⃣ Publicas</h5>
                <p style={{margin: 0, fontSize: '0.9rem'}}>Sin código, visual directo</p>
              </div>
            </div>
          </div>

          <h3>Tabla comparativa completa</h3>

          <div className="table-wrap">
            <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
              <thead>
                <tr style={{background: '#f8f9fa'}}>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Aspecto</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Astra + Spectra</th>
                  <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Elementor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Curva aprendizaje</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐⭐⭐ Muy fácil</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐ Moderado</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Velocidad de carga</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐⭐⭐ Excelente</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐ Buena (requiere optimización)</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Flexibilidad diseño</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐ Limitada a opciones theme</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>⭐⭐⭐⭐⭐ Sin límites</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Costo inicial</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€0 (todo gratuito)</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€0 - €199/año (según necesidades)</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Mantenimiento</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Mínimo</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Moderado</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Dependencia plugins</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Baja</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Alta</td>
                </tr>
                <tr>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Ideal para</strong></td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Blogs, corporativas, e-commerce</td>
                  <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Landing pages, portfolios, creative</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox title="💡 ¿Pueden coexistir?">
            <p>
              <strong>¡SÍ!</strong> Muchos desarrolladores usan Astra como theme base y Elementor solo 
              para páginas específicas (home, landing pages) donde necesitan diseño custom. 
              Las páginas de blog y archivo siguen usando Astra para máximo rendimiento.
            </p>
          </TipBox>
        </div>
      </section>

      {/* ELEMENTOR GRATUITO */}
      <section className="doc doc-section" id="elementor-gratuito">
        <h2>Elementor Gratuito: ¿Qué puedes hacer sin pagar nada?</h2>
        
        <div className="doc-content">
          <p>
            La versión gratuita de Elementor es sorprendentemente robusta. Antes de hablar de la versión Pro, 
            es importante entender qué está incluido sin costo alguno.
          </p>

          <h3>Funcionalidades incluidas en la versión gratuita</h3>

          <div style={{background: '#d4edda', border: '2px solid #28a745', borderRadius: '12px', padding: '2rem', margin: '1.5rem 0'}}>
            <h4 style={{color: '#155724', margin: '0 0 1.5rem 0'}}>✅ Lo que SÍ incluye Elementor FREE</h4>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
              <div style={{background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #c3e6cb'}}>
                <h5 style={{color: '#155724', margin: '0 0 0.5rem 0'}}>🎨 Widgets Básicos</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Texto, imágenes, botones</li>
                  <li>Videos, audio</li>
                  <li>Separadores, espaciadores</li>
                  <li>Iconos, listas</li>
                  <li>Acordeón, tabs</li>
                </ul>
              </div>

              <div style={{background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #c3e6cb'}}>
                <h5 style={{color: '#155724', margin: '0 0 0.5rem 0'}}>🏗️ Estructura</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Secciones y columnas</li>
                  <li>Responsive completo</li>
                  <li>Templates básicos</li>
                  <li>Historial de cambios</li>
                </ul>
              </div>

              <div style={{background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #c3e6cb'}}>
                <h5 style={{color: '#155724', margin: '0 0 0.5rem 0'}}>⚙️ Personalización</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Colores, fonts, spacing</li>
                  <li>Bordes, sombras</li>
                  <li>Backgrounds básicos</li>
                  <li>Animaciones simples</li>
                </ul>
              </div>

              <div style={{background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #c3e6cb'}}>
                <h5 style={{color: '#155724', margin: '0 0 0.5rem 0'}}>📱 Responsive</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Preview desktop/tablet/móvil</li>
                  <li>Configuración por dispositivo</li>
                  <li>Hide/show por pantalla</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>¿Qué se puede construir con la versión gratuita?</h3>

          <details className="dd">
            <summary>🏠 Sitio corporativo completo</summary>
            <div className="dd-body">
              <p><strong>Páginas que puedes crear:</strong></p>
              <ul>
                <li><strong>Home:</strong> Hero section, servicios, testimonios, contacto</li>
                <li><strong>Sobre nosotros:</strong> Timeline, equipo, misión/visión</li>
                <li><strong>Servicios:</strong> Cards de servicios, precios, FAQ</li>
                <li><strong>Contacto:</strong> Formulario, mapa, información</li>
              </ul>

              <div className="callout tip">
                <strong>Ejemplo real:</strong> El 80% de sitios corporativos pueden hacerse completamente 
                con la versión gratuita de Elementor.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📄 Landing pages efectivas</summary>
            <div className="dd-body">
              <p><strong>Elementos clave que puedes implementar:</strong></p>
              <ul>
                <li><strong>Hero impact:</strong> Título grande, botón de acción</li>
                <li><strong>Social proof:</strong> Testimonios, logos de clientes</li>
                <li><strong>Features:</strong> Beneficios con iconos</li>
                <li><strong>CTA sections:</strong> Botones llamativos</li>
                <li><strong>Footer optimizado:</strong> Enlaces, contacto</li>
              </ul>

              <div className="callout tip">
                <strong>Pro tip:</strong> Muchas landing pages exitosas usan solo widgets básicos 
                bien combinados y mucha atención al copy y diseño.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Portfolio creativo</summary>
            <div className="dd-body">
              <p><strong>Secciones típicas de portfolio:</strong></p>
              <ul>
                <li><strong>Galería de proyectos:</strong> Grid de imágenes</li>
                <li><strong>Sobre el artista:</strong> Texto + imagen personal</li>
                <li><strong>Proceso de trabajo:</strong> Steps con iconos</li>
                <li><strong>Contacto:</strong> Formulario simple</li>
              </ul>

              <div className="callout warn">
                <strong>Limitación:</strong> Galerías avanzadas, lightboxes y filtros requieren Pro o plugins adicionales.
              </div>
            </div>
          </details>

          <h3>Limitaciones de la versión gratuita</h3>

          <WarningBox title="❌ Lo que NO incluye Elementor FREE">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
              <div>
                <h5 style={{color: '#721c24', margin: '0 0 0.5rem 0'}}>Widgets Premium</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Formularios avanzados</li>
                  <li>Posts dinámicos</li>
                  <li>WooCommerce widgets</li>
                  <li>Slider/carousel</li>
                </ul>
              </div>
              <div>
                <h5 style={{color: '#721c24', margin: '0 0 0.5rem 0'}}>Funcionalidades Pro</h5>
                <ul style={{fontSize: '0.9rem', margin: 0}}>
                  <li>Theme Builder (header/footer custom)</li>
                  <li>Popup Builder</li>
                  <li>Motion Effects avanzados</li>
                  <li>Template library premium</li>
                </ul>
              </div>
            </div>
          </WarningBox>
        </div>
      </section>

      {/* ELEMENTOR PRO */}
      <section className="doc doc-section" id="elementor-pro">
        <h2>Elementor Pro: ¿Cuándo vale la pena la inversión?</h2>
        
        <div className="doc-content">
          <p>
            Elementor Pro cuesta desde <strong>€49/año</strong> y desbloquea funcionalidades avanzadas. 
            La pregunta clave es: ¿cuándo justifica esta inversión?
          </p>

          <h3>¿Qué añade Elementor Pro?</h3>

          <div style={{background: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '12px', padding: '2rem', margin: '1.5rem 0'}}>
            <h4 style={{color: '#003d7a', margin: '0 0 1.5rem 0'}}>🚀 Funcionalidades PRO más importantes</h4>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>🎨 Theme Builder</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Diseña header, footer y archive pages visualmente
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Elimina dependencia del theme</small>
                </div>
              </div>

              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>📝 Formularios Pro</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Formularios avanzados con validación y integraciones
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Elimina plugins de formularios</small>
                </div>
              </div>

              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>🛒 WooCommerce Builder</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Páginas de tienda personalizadas visualmente
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Tiendas únicas sin código</small>
                </div>
              </div>

              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>📱 Popup Builder</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Popups profesionales con triggers avanzados
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Mejora conversiones y lead capture</small>
                </div>
              </div>

              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>🎬 Motion Effects</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Animaciones, parallax, efectos scroll
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Websites interactivos y modernos</small>
                </div>
              </div>

              <div style={{background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #b3d7ff'}}>
                <h5 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>📊 Dynamic Content</h5>
                <p style={{margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
                  Contenido automático desde posts y custom fields
                </p>
                <div style={{background: '#f8fcff', padding: '0.5rem', borderRadius: '4px'}}>
                  <small><strong>Valor:</strong> Sitios que se actualizan solos</small>
                </div>
              </div>
            </div>
          </div>

          <h3>Análisis de ROI: ¿Cuándo vale la pena?</h3>

          <details className="dd">
            <summary>💰 Comparativa de costos vs alternativas</summary>
            <div className="dd-body">
              <div className="table-wrap">
                <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                  <thead>
                    <tr style={{background: '#f8f9fa'}}>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Funcionalidad</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Con Elementor Pro</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Sin Elementor Pro</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Ahorro anual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Formularios avanzados</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Incluido</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>WPForms Pro (€99/año)</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€50/año</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Popup builder</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Incluido</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>PopupMaker Pro (€79/año)</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€30/año</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>WooCommerce builder</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Incluido</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Desarrollador custom (€500+)</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€451/año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <TipBox>
                <p>
                  <strong>Conclusión:</strong> Si necesitas 2 o más funcionalidades Pro, 
                  Elementor Pro se paga solo en términos de costo de plugins alternativos.
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd">
            <summary>🎯 Casos de uso donde Pro es obligatorio</summary>
            <div className="dd-body">
              <h4>Proyectos que requieren Elementor Pro desde el día 1:</h4>
              <ul>
                <li><strong>E-commerce personalizado:</strong> Páginas de producto únicas, checkout custom</li>
                <li><strong>Sitios de membresía:</strong> Áreas restringidas, login personalizado</li>
                <li><strong>Agencias digitales:</strong> Headers únicos por cliente, templates reutilizables</li>
                <li><strong>Landing pages complejas:</strong> Múltiples popups, formularios segmentados</li>
                <li><strong>Portfolios interactivos:</strong> Animaciones, efectos parallax</li>
              </ul>

              <h4>Proyectos donde Pro es "nice to have":</h4>
              <ul>
                <li><strong>Corporativos standard:</strong> Header custom vs usar el del theme</li>
                <li><strong>Blogs profesionales:</strong> Archive pages únicas vs estándar</li>
                <li><strong>Sitios informativos:</strong> Formularios avanzados vs Contact Form 7</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>📊 Escenarios de decisión práctica</summary>
            <div className="dd-body">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1rem 0'}}>
                <div style={{background: '#d4edda', border: '2px solid #28a745', borderRadius: '8px', padding: '1.5rem'}}>
                  <h5 style={{color: '#155724', margin: '0 0 1rem 0'}}>✅ Compra Elementor Pro</h5>
                  <ul style={{fontSize: '0.9rem', margin: 0}}>
                    <li>Cliente tiene presupuesto €200+/año</li>
                    <li>Proyecto requiere diseño único</li>
                    <li>Necesitas formularios complejos</li>
                    <li>E-commerce con páginas custom</li>
                    <li>Agencia con múltiples clientes</li>
                  </ul>
                </div>

                <div style={{background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '8px', padding: '1.5rem'}}>
                  <h5 style={{color: '#856404', margin: '0 0 1rem 0'}}>⚠️ Evalúa cuidadosamente</h5>
                  <ul style={{fontSize: '0.9rem', margin: 0}}>
                    <li>Presupuesto limitado (€100/año)</li>
                    <li>Proyecto simple/estándar</li>
                    <li>Cliente no valora diseño único</li>
                    <li>SEO/velocidad son prioridad #1</li>
                    <li>Equipo prefiere approaches tradicionales</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="doc doc-section" id="casos-de-uso">
        <h2>Casos de uso reales: ¿Cuándo recomendar cada opción?</h2>
        
        <div className="doc-content">
          <p>
            Para consolidar todo lo aprendido, analicemos escenarios reales de clientes 
            y cuál sería la recomendación profesional en cada caso.
          </p>

          <h3>Matriz de decisión por tipo de proyecto</h3>

          <details className="dd">
            <summary>🏢 Cliente: Empresa de consultoría (presupuesto €500)</summary>
            <div className="dd-body">
              <h4>Requisitos:</h4>
              <ul>
                <li>Sitio corporativo serio y profesional</li>
                <li>5-7 páginas (home, servicios, sobre nosotros, blog, contacto)</li>
                <li>Formularios de contacto funcionales</li>
                <li>Velocidad de carga importante para SEO</li>
                <li>Mantenimiento mínimo</li>
              </ul>

              <div style={{background: '#d1ecf1', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0'}}>
                <h4 style={{color: '#0c5460', margin: '0 0 1rem 0'}}>💡 Recomendación: Astra + Spectra</h4>
                <p><strong>Justificación:</strong></p>
                <ul>
                  <li>✅ Presupuesto permite theme premium si necesario</li>
                  <li>✅ Diseño corporativo standard cumple necesidades</li>
                  <li>✅ Velocidad óptima para SEO</li>
                  <li>✅ Mantenimiento mínimo a largo plazo</li>
                  <li>✅ ContactForm7 suficiente para formularios</li>
                </ul>
                <p><strong>Costo anual:</strong> €0-50 (solo hosting)</p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Cliente: Fotógrafo profesional (presupuesto €1200)</summary>
            <div className="dd-body">
              <h4>Requisitos:</h4>
              <ul>
                <li>Portfolio visual impactante y único</li>
                <li>Galería de fotos con efectos</li>
                <li>Página de servicios con precios</li>
                <li>Formulario de contacto para presupuestos</li>
                <li>Cliente quiere poder actualizar portfolio solo</li>
              </ul>

              <div style={{background: '#e7f3ff', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0'}}>
                <h4 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>💡 Recomendación: Theme + Elementor Pro</h4>
                <p><strong>Justificación:</strong></p>
                <ul>
                  <li>✅ Presupuesto permite herramientas premium</li>
                  <li>✅ Diseño único es prioridad #1</li>
                  <li>✅ Galería y efectos visuales son clave</li>
                  <li>✅ Cliente quiere autonomía de actualización</li>
                  <li>✅ Formularios Pro para presupuestos complejos</li>
                </ul>
                <p><strong>Costo anual:</strong> €99 (Elementor Pro) + hosting</p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🛒 Cliente: Tienda online artesanal (presupuesto €800)</summary>
            <div className="dd-body">
              <h4>Requisitos:</h4>
              <ul>
                <li>Tienda WooCommerce con diseño personalizado</li>
                <li>Páginas de producto únicas por categoría</li>
                <li>Landing pages para campañas de marketing</li>
                <li>Formularios para pedidos personalizados</li>
                <li>Popups para capture de emails</li>
              </ul>

              <div style={{background: '#e7f3ff', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0'}}>
                <h4 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>💡 Recomendación: Astra + Elementor Pro</h4>
                <p><strong>Justificación:</strong></p>
                <ul>
                  <li>✅ Astra optimizado para WooCommerce (velocidad)</li>
                  <li>✅ Elementor Pro para páginas de producto custom</li>
                  <li>✅ Popup Builder incluido</li>
                  <li>✅ Formularios Pro para pedidos especiales</li>
                  <li>✅ Landing pages para marketing</li>
                </ul>
                <p><strong>Costo anual:</strong> €99 (Elementor Pro) + €59 (Astra Pro) + hosting</p>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📰 Cliente: Blog personal (presupuesto €100)</summary>
            <div className="dd-body">
              <h4>Requisitos:</h4>
              <ul>
                <li>Blog personal sobre viajes</li>
                <li>Enfoque en velocidad y SEO</li>
                <li>Posible monetización futura con ads</li>
                <li>Usuario no técnico pero dispuesto a aprender</li>
                <li>Quiere poder personalizar algo el diseño</li>
              </ul>

              <div style={{background: '#d1ecf1', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0'}}>
                <h4 style={{color: '#0c5460', margin: '0 0 1rem 0'}}>💡 Recomendación: Astra + Elementor FREE</h4>
                <p><strong>Justificación:</strong></p>
                <ul>
                  <li>✅ Astra gratis optimizado para blogs</li>
                  <li>✅ Elementor FREE para páginas especiales (about, contact)</li>
                  <li>✅ Gutenberg para posts diarios (velocidad)</li>
                  <li>✅ Scalable: puede migrar a Pro cuando crezca</li>
                  <li>✅ Se mantiene dentro del presupuesto</li>
                </ul>
                <p><strong>Costo anual:</strong> €0 + hosting</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* PRÓXIMOS PASOS */}
      <section className="doc doc-section" id="proximos-pasos">
        <h2>Próximos pasos en tu aprendizaje</h2>
        
        <div className="doc-content">
          <p>
            Ahora que entiendes qué es Elementor y cuándo usarlo, es hora de planificar 
            tus próximos pasos de aprendizaje práctico.
          </p>

          <h3>Hoja de ruta recomendada</h3>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', margin: '2rem 0'}}>
            <div style={{background: '#f8fff9', border: '2px solid #10b981', borderRadius: '8px', padding: '1.5rem', textAlign: 'center'}}>
              <h4 style={{color: '#065f46', margin: '0 0 1rem 0'}}>1️⃣ Semana 1-2</h4>
              <h5 style={{color: '#10b981', margin: '0 0 0.5rem 0'}}>Fundamentos</h5>
              <ul style={{fontSize: '0.9rem', margin: 0, textAlign: 'left'}}>
                <li>Instalar Elementor FREE</li>
                <li>Tutorial básico oficial</li>
                <li>Crear 2-3 páginas simples</li>
                <li>Entender widgets básicos</li>
              </ul>
            </div>

            <div style={{background: '#e7f3ff', border: '2px solid #0066cc', borderRadius: '8px', padding: '1.5rem', textAlign: 'center'}}>
              <h4 style={{color: '#003d7a', margin: '0 0 1rem 0'}}>2️⃣ Semana 3-4</h4>
              <h5 style={{color: '#0066cc', margin: '0 0 0.5rem 0'}}>Práctica intensiva</h5>
              <ul style={{fontSize: '0.9rem', margin: 0, textAlign: 'left'}}>
                <li>Recrear sitio existente</li>
                <li>Templates de terceros</li>
                <li>Responsive design</li>
                <li>Optimización velocidad</li>
              </ul>
            </div>

            <div style={{background: '#f3e8ff', border: '2px solid #8b5cf6', borderRadius: '8px', padding: '1.5rem', textAlign: 'center'}}>
              <h4 style={{color: '#5b21b6', margin: '0 0 1rem 0'}}>3️⃣ Semana 5+</h4>
              <h5 style={{color: '#8b5cf6', margin: '0 0 0.5rem 0'}}>Especialización</h5>
              <ul style={{fontSize: '0.9rem', margin: 0, textAlign: 'left'}}>
                <li>Evaluar Elementor Pro</li>
                <li>Proyecto cliente real</li>
                <li>Workflows avanzados</li>
                <li>Integración con tools</li>
              </ul>
            </div>
          </div>

          <PracticeBox title="🧪 Ejercicio de evaluación">
            <h3>Caso práctico de decisión</h3>
            <p>
              <strong>Escenario:</strong> Una startup de servicios de limpieza te contrata para crear su 
              sitio web. Presupuesto: €600. Necesitan home page llamativa, páginas de servicios, 
              un blog para SEO, y formularios para cotizaciones online.
            </p>
            
            <h4>Tu tarea:</h4>
            <ol>
              <li>Analiza los requisitos del cliente</li>
              <li>Decide entre Astra+Spectra vs Elementor (Free/Pro)</li>
              <li>Justifica tu decisión técnica y económicamente</li>
              <li>Calcula costos anuales totales</li>
              <li>Plan de implementación en fases</li>
            </ol>

            <details className="dd" style={{marginTop: '1rem'}}>
              <summary>💡 Ver análisis sugerido</summary>
              <div className="dd-body">
                <h5>Análisis recomendado:</h5>
                <ul>
                  <li><strong>Opción A:</strong> Astra FREE + Elementor FREE para home + CF7</li>
                  <li><strong>Opción B:</strong> Astra PRO + Elementor FREE + CF7 Pro</li>
                  <li><strong>Opción C:</strong> Astra FREE + Elementor PRO</li>
                </ul>
                <p><strong>Justificación:</strong> Evalúa cada opción por costo/beneficio según importancia del diseño único vs velocidad vs presupuesto.</p>
              </div>
            </details>
          </PracticeBox>

          <ActivityBox title="🎯 Recursos para continuar aprendiendo">
            <h3>Recursos oficiales recomendados</h3>
            <ul>
              <li><strong>Elementor Academy:</strong> Cursos oficiales gratuitos</li>
              <li><strong>YouTube Elementor:</strong> Tutoriales semanales</li>
              <li><strong>Comunidad Facebook:</strong> Grupo oficial con +100k miembros</li>
              <li><strong>Template Library:</strong> Estudiar diseños profesionales</li>
            </ul>

            <h3>Proyectos de práctica sugeridos</h3>
            <ol>
              <li><strong>Recrear una landing page famosa</strong> (ej: Slack, Notion) con Elementor FREE</li>
              <li><strong>Comparar tiempos de carga</strong> between página hecha con Elementor vs Astra puro</li>
              <li><strong>Proyecto portfolio personal</strong> usando solo funcionalidades gratuitas</li>
              <li><strong>A/B test de conversiones</strong> comparando diseários diferentes</li>
            </ol>
          </ActivityBox>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="doc doc-section" id="conclusion">
        <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h2 style={{margin: '0 0 1rem 0', color: 'white'}}>🎓 Conclusiones clave sobre Elementor</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🚀 No es "mejor" que themes</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Es diferente. Cada enfoque tiene su lugar.</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>💰 ROI depende del proyecto</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Evalúa costos vs beneficios según cliente.</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🛠️ La versión FREE es poderosa</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Muchos proyectos se resuelven sin Pro.</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>📊 Decisión basada en datos</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Analiza requisitos, no modas o preferencias.</p>
            </div>
          </div>
        </div>

        <TipBox>
          <p>
            <strong>Consejo profesional:</strong> Domina tanto Astra+Spectra como Elementor. 
            Los mejores desarrolladores WordPress saben cuándo usar cada herramienta según 
            las necesidades específicas del proyecto y cliente.
          </p>
          <p>
            El futuro no es "Elementor vs Themes" - es saber combinar ambos enfoques 
            estratégicamente para crear las mejores soluciones posibles.
          </p>
        </TipBox>

       
      </section>
    </TopicLayout>
  );
}
