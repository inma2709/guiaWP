import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema8Index() {
  return (
    <TopicLayout
      title="M8 · SEO y posicionamiento web"
      subtitle="Estrategia completa para aparecer en Google: desde lo técnico hasta el contenido que convierte"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 8</div>
          <h1>SEO y posicionamiento web</h1>
          <p className="doc-lead">
            Estrategia completa para aparecer en Google: desde lo técnico hasta el contenido que convierte
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#fundamentos-seo">Fundamentos SEO: cómo funciona Google</a></li>
            <li><a href="#seo-tecnico">SEO técnico en WordPress</a></li>
            <li><a href="#keyword-research">Keyword research y estrategia</a></li>
            <li><a href="#optimizacion-contenido">Optimización de contenido</a></li>
            <li><a href="#seo-local">SEO local para negocios</a></li>
            <li><a href="#medicion-metricas">Medición y métricas SEO</a></li>
            <li><a href="#plan-seo-proyecto">Plan SEO para el proyecto</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Dominar SEO no es opcional en 2024 - es supervivencia digital. Aprenderás a posicionar 
            cualquier web WordPress en Google con estrategia técnica sólida, contenido optimizado 
            y métricas que importan. Al final tendrás un plan SEO ejecutable y medible.
          </p>
        </TipBox>

        <PracticeBox title="🔍 Resultado tangible del módulo">
          <p>
            Implementarás una estrategia SEO completa que llevará "Consultoría Digital Pro" 
            del puesto 50+ al top 10 de Google para "consultoría digitalización empresas [tu ciudad]". 
            Incluye keyword research, optimización técnica y plan de contenidos a 6 meses.
          </p>
        </PracticeBox>

        <section className="doc-section" id="fundamentos-seo">
          <h2>8.1 Fundamentos SEO: cómo funciona Google</h2>
          
          <p>
            SEO no es magia ni hacks - es entender cómo Google evalúa y clasifica sitios web. 
            Hay 200+ factores, pero solo 10-15 mueven la aguja realmente.
          </p>

          <ActivityBox title="🤖 Cómo Google evalúa tu web">
            <ol>
              <li><strong>🕷️ Rastreo:</strong> Los bots "leen" tu web</li>
              <li><strong>📚 Indexación:</strong> Almacena información en su base de datos</li>
              <li><strong>🏆 Clasificación:</strong> Decide qué posición merece cada página</li>
              <li><strong>📊 Presentación:</strong> Muestra resultados al usuario</li>
            </ol>
            
            <p><strong>
              🎯 Tu objetivo: Facilitar el trabajo a Google y demostrar que eres la mejor respuesta
            </strong></p>
          </ActivityBox>

          <h3>Los 3 pilares del SEO moderno</h3>
          <div className="two-columns">
            <div className="column">
              <h4>⚙️ SEO TÉCNICO (30%)</h4>
              <ul>
                <li>Velocidad de carga</li>
                <li>Responsive design</li>
                <li>Estructura técnica</li>
                <li>Crawlability</li>
                <li>Core Web Vitals</li>
              </ul>
            </div>

            <div className="column">
              <h4>📝 CONTENIDO (50%)</h4>
              <ul>
                <li>Keyword research</li>
                <li>Contenido útil y relevante</li>
                <li>Optimización on-page</li>
                <li>Estructura semántica</li>
                <li>Intent matching</li>
              </ul>
            </div>
          </div>

          <TipBox title="🔗 AUTORIDAD (20%)">
            <ul>
              <li>Enlaces externos (backlinks)</li>
              <li>Menciones de marca</li>
              <li>Señales sociales</li>
              <li>E-E-A-T (Expertise)</li>
              <li>Local SEO</li>
            </ul>
          </TipBox>

          <WarningBox>
            <p>
              <strong>⚠️ Mito peligroso:</strong> "SEO es rellenar keywords". 
              Resultado: penalizaciones de Google y contenido ilegible. 
              <em>Google premia contenido útil para humanos, no para bots.</em>
            </p>
          </WarningBox>
        </section>

        <section className="doc-section" id="seo-tecnico">
          <h2>8.2 SEO técnico en WordPress</h2>
          
          <p>
            El SEO técnico es la base que permite a Google entender y rastrear tu web correctamente. 
            Sin esto, el mejor contenido del mundo será invisible.
          </p>

          <TipBox title="🔧 Checklist SEO técnico WordPress">
            <ul>
              <li><strong>✅ Velocidad de carga:</strong> &lt;3 segundos (ideal &lt;2s)</li>
              <li><strong>✅ Mobile-first:</strong> Diseño responsive perfecto</li>
              <li><strong>✅ URLs amigables:</strong> /servicios/consultoria-digital/</li>
              <li><strong>✅ SSL certificate:</strong> HTTPS obligatorio</li>
              <li><strong>✅ Sitemap XML:</strong> Guía para Google</li>
              <li><strong>✅ Robots.txt:</strong> Instrucciones de rastreo</li>
            </ul>
          </TipBox>

          <ActivityBox title="🛠️ Implementar SEO técnico paso a paso">
            <h4>1. Plugin SEO (Yoast o RankMath)</h4>
            <ol>
              <li>Instalar <strong>Yoast SEO</strong> (más popular) o <strong>RankMath</strong> (más completo)</li>
              <li>Ejecutar configuración wizard</li>
              <li>Conectar Google Search Console</li>
              <li>Configurar sitemaps automáticos</li>
            </ol>

            <h4>2. Optimizar velocidad</h4>
            <ol>
              <li>Plugin caché: <strong>WP Rocket</strong> o <strong>W3 Total Cache</strong></li>
              <li>Optimizar imágenes: <strong>Smush</strong> o <strong>ShortPixel</strong></li>
              <li>CDN gratuita: <strong>Cloudflare</strong></li>
              <li>Test: PageSpeed Insights (objetivo &gt;90)</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="keyword-research">
          <h2>8.3 Keyword research y estrategia</h2>
          
          <p>
            El keyword research es el mapa de tu estrategia SEO. Sin él, es como conducir a ciegas. 
            Te enseño la metodología profesional que uso con clientes.
          </p>

          <PracticeBox title="🎯 Metodología de keyword research profesional">
            <h4>1. 🌱 SEMILLAS (palabras obvias)</h4>
            <ul>
              <li>Servicios que ofreces: "consultoría digital", "automatización empresas"</li>
              <li>Problemas que resuelves: "digitalizar empresa", "vender más online"</li>
              <li>Tu sector: "consultor transformación digital", "agencia marketing"</li>
            </ul>

            <h4>2. 🔍 EXPANSIÓN (herramientas)</h4>
            <ul>
              <li><strong>Google Keyword Planner:</strong> Datos oficiales de búsquedas</li>
              <li><strong>Ubersuggest:</strong> Gratuita, fácil para principiantes</li>
              <li><strong>SEMrush/Ahrefs:</strong> Profesionales (de pago)</li>
              <li><strong>Google Autocomplete:</strong> Búsquedas reales de usuarios</li>
            </ul>

            <h4>3. 📊 ANÁLISIS (métricas que importan)</h4>
            <ul>
              <li><strong>Volumen:</strong> ¿Cuánta gente busca? (mín. 100/mes)</li>
              <li><strong>Dificultad:</strong> ¿Puedo competir? (máx. 30 para empezar)</li>
              <li><strong>Intent:</strong> ¿Qué quiere el usuario? (informativo/transaccional)</li>
              <li><strong>CPC:</strong> ¿Cuánto vale comercialmente?</li>
            </ul>
          </PracticeBox>

          <ActivityBox title="🎯 Ejercicio: Keyword research para Consultoría Digital Pro">
            <p><strong>Objetivo:</strong> Encontrar 20 keywords principales + 100 long-tail</p>
            
            <h4>Paso 1: Brainstorming inicial</h4>
            <ol>
              <li>Lista 10 servicios específicos que ofreces</li>
              <li>Lista 10 problemas que resuelves</li>
              <li>Lista 5 ubicaciones geográficas objetivo</li>
            </ol>

            <h4>Paso 2: Investigación con herramientas</h4>
            <ol>
              <li>Usar <strong>Ubersuggest</strong> con cada palabra semilla</li>
              <li>Exportar datos: volumen, dificultad, CPC</li>
              <li>Filtrar: volumen &gt;50, dificultad &lt;40</li>
              <li>Categorizar por intención de búsqueda</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="optimizacion-contenido">
          <h2>8.4 Optimización de contenido</h2>
          
          <p>
            El contenido sigue siendo el rey, pero debe estar optimizado tanto para usuarios como para Google. 
            El equilibrio perfecto entre utilidad y SEO.
          </p>

          <TipBox title="📝 Fórmula de contenido que rankea">
            <ol>
              <li><strong>🎯 Intent matching:</strong> Responder exactamente lo que busca el usuario</li>
              <li><strong>📏 Longitud adecuada:</strong> 1000-2500 palabras para temas complejos</li>
              <li><strong>🏗️ Estructura clara:</strong> H1, H2, H3 con keywords naturales</li>
              <li><strong>💎 Valor único:</strong> Información que no tiene la competencia</li>
              <li><strong>🔗 Enlaces internos:</strong> Conectar con otros contenidos relevantes</li>
            </ol>
          </TipBox>

          <WarningBox>
            <p>
              <strong>🚨 Errores fatales en contenido SEO:</strong>
            </p>
            <ul>
              <li>Keyword stuffing (repetir la keyword sin sentido)</li>
              <li>Contenido thin (menos de 300 palabras útiles)</li>
              <li>Ignorar la intención de búsqueda</li>
              <li>No optimizar imágenes (ALT text vacío)</li>
              <li>Meta descriptions genéricas o ausentes</li>
            </ul>
          </WarningBox>

          <ActivityBox title="✍️ Template de optimización on-page">
            <h4>Para cada página/post optimizar:</h4>
            <ol>
              <li><strong>Title tag:</strong> Keyword principal + beneficio (máx. 60 caracteres)</li>
              <li><strong>Meta description:</strong> Call-to-action + keyword (máx. 160 caracteres)</li>
              <li><strong>H1:</strong> Incluir keyword principal naturalmente</li>
              <li><strong>H2/H3:</strong> Keywords relacionadas y sinónimos</li>
              <li><strong>Primer párrafo:</strong> Keyword principal en las primeras 100 palabras</li>
              <li><strong>ALT text:</strong> Describir imágenes + keyword cuando sea natural</li>
              <li><strong>URL slug:</strong> Corta y descriptiva con keyword principal</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="seo-local">
          <h2>8.5 SEO local para negocios</h2>
          
          <p>
            Si tu negocio tiene ubicación física o atiende zonas geográficas específicas, 
            el SEO local puede multiplicar tu visibilidad x10.
          </p>

          <PracticeBox title="📍 Estrategia SEO local completa">
            <h4>1. Google My Business (GMB)</h4>
            <ul>
              <li>Reclamar y verificar tu perfil de empresa</li>
              <li>Completar 100% de la información</li>
              <li>Subir fotos profesionales (mín. 10)</li>
              <li>Conseguir reseñas positivas (objetivo: 50+)</li>
              <li>Responder a todas las reseñas</li>
            </ul>

            <h4>2. NAP consistency (Nombre, Dirección, Teléfono)</h4>
            <ul>
              <li>Mismos datos en web, GMB, directorios</li>
              <li>Formato exacto en todas las plataformas</li>
              <li>Actualizar si cambias ubicación/teléfono</li>
            </ul>

            <h4>3. Contenido con geo-targeting</h4>
            <ul>
              <li>Páginas específicas por ciudad/zona</li>
              <li>Keywords + ubicación: "consultor digital Madrid"</li>
              <li>Contenido sobre eventos/noticias locales</li>
              <li>Testimonios de clientes locales</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="medicion-metricas">
          <h2>8.6 Medición y métricas SEO</h2>
          
          <p>
            Lo que no se mide, no se puede mejorar. Estas son las métricas que realmente 
            importan para evaluar tu progreso SEO.
          </p>

          <TipBox title="📊 Métricas SEO que importan (por orden de prioridad)">
            <ol>
              <li><strong>🎯 Tráfico orgánico:</strong> Visitantes desde Google</li>
              <li><strong>📈 Posiciones promedio:</strong> Ranking medio de tus keywords</li>
              <li><strong>👀 CTR orgánico:</strong> % de clicks vs impresiones</li>
              <li><strong>🔄 Conversiones SEO:</strong> Leads/ventas desde búsqueda orgánica</li>
              <li><strong>📱 Core Web Vitals:</strong> Métricas de experiencia de usuario</li>
            </ol>
          </TipBox>

          <ActivityBox title="🛠️ Setup de medición profesional">
            <h4>Herramientas esenciales (gratuitas):</h4>
            <ol>
              <li><strong>Google Search Console:</strong> Datos oficiales de Google</li>
              <li><strong>Google Analytics 4:</strong> Análisis de tráfico y conversiones</li>
              <li><strong>Google PageSpeed Insights:</strong> Velocidad y Core Web Vitals</li>
            </ol>

            <h4>Configuración paso a paso:</h4>
            <ol>
              <li>Conectar GSC con tu dominio (verificación HTML/DNS)</li>
              <li>Instalar GA4 en WordPress (plugin/código)</li>
              <li>Configurar objetivos de conversión en GA4</li>
              <li>Crear dashboard personalizado con métricas clave</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="📅 Rutina de monitoreo SEO semanal">
            <p><strong>Lunes (15 min):</strong></p>
            <ul>
              <li>Revisar GSC: nuevas keywords ranking</li>
              <li>Identificar caídas/subidas significativas</li>
              <li>Comprobar errores de crawling</li>
            </ul>

            <p><strong>Viernes (30 min):</strong></p>
            <ul>
              <li>Analizar tráfico orgánico semanal</li>
              <li>Revisar top pages y keywords</li>
              <li>Planificar optimizaciones para siguiente semana</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="plan-seo-proyecto">
          <h2>8.7 Plan SEO para el proyecto</h2>
          
          <p>
            Ahora aplicamos todo lo aprendido al proyecto "Consultoría Digital Pro". 
            Plan ejecutable que llevará el sitio al top 10 en 6 meses.
          </p>

          <ActivityBox title="🚀 Plan SEO ejecutable: Consultoría Digital Pro">
            <h4>🎯 OBJETIVOS (6 meses)</h4>
            <ul>
              <li>Top 10 para "consultoría digitalización empresas [ciudad]"</li>
              <li>1000+ visitantes orgánicos/mes</li>
              <li>50+ leads cualificados desde SEO</li>
              <li>Authority Score +20 puntos</li>
            </ul>

            <h4>📅 CRONOGRAMA</h4>
            <p><strong>Mes 1-2: Fundación</strong></p>
            <ul>
              <li>Keyword research completo (100+ keywords)</li>
              <li>Auditoría técnica + correcciones</li>
              <li>Optimización on-page páginas principales</li>
              <li>Setup Google Search Console + Analytics</li>
            </ul>

            <p><strong>Mes 3-4: Contenido</strong></p>
            <ul>
              <li>Blog: 8 posts optimizados (2/semana)</li>
              <li>Páginas de servicio específicas</li>
              <li>Optimización imágenes + Alt text</li>
              <li>Schema markup para servicios</li>
            </ul>

            <p><strong>Mes 5-6: Autoridad</strong></p>
            <ul>
              <li>Link building: 20 backlinks calidad</li>
              <li>Google My Business optimización</li>
              <li>Contenido local específico</li>
              <li>Análisis competencia + gap analysis</li>
            </ul>
          </ActivityBox>
        </section>

        <div className="doc-hero" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #0073aa, #00a0d2)' }}>
          <h3>🏆 ¡Estrategia SEO masterizada!</h3>
          <p>
            Ya tienes las herramientas y conocimiento para posicionar cualquier WordPress en Google. 
            SEO técnico dominado, keyword research profesional, contenido optimizado y métricas claras. 
            ¡Es hora de conseguir esos primeros puestos!
          </p>
        </div>

        <div className="doc-next">
          <a href="/tema9" className="btn btn-primary">
            Siguiente: M9 · Seguridad y mantenimiento →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
