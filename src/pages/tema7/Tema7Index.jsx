import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema7Index() {
  return (
    <TopicLayout
      title="M7 · Páginas y arquitectura web"
      subtitle="Construye la web completa que necesita tu cliente para convertir visitantes en clientes"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 7</div>
          <h1>Páginas y arquitectura web</h1>
          <p className="doc-lead">
            Construye la web completa que necesita tu cliente para convertir visitantes en clientes
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#arquitectura-informacion">Arquitectura de información</a></li>
            <li><a href="#pagina-inicio">Página de inicio que convierte</a></li>
            <li><a href="#paginas-corporativas">Páginas corporativas estratégicas</a></li>
            <li><a href="#sistema-navegacion">Sistema de navegación</a></li>
            <li><a href="#formularios-contacto">Formularios de contacto</a></li>
            <li><a href="#paginas-legales">Páginas legales obligatorias</a></li>
            <li><a href="#blog-estrategia">Blog y estrategia de contenidos</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            No más páginas "corporativas" aburridas que nadie lee. Construiremos una web 
            estratégica con páginas que tienen un propósito claro: convertir visitantes 
            en clientes. Cada página optimizada para la acción que queremos que haga el usuario.
          </p>
        </TipBox>

        <WarningBox>
          <p>
            <strong>⚠️ Error típico:</strong> Copiar estructura de la competencia sin pensar. 
            Resultado: web genérica que no destaca. <em>Tu arquitectura debe reflejar 
            cómo tu cliente ideal busca y consume información.</em>
          </p>
        </WarningBox>

        <section className="doc-section" id="arquitectura-informacion">
          <h2>7.1 Arquitectura de información estratégica</h2>
          
          <p>
            La arquitectura de información no es solo "qué páginas hacer" - es planificar 
            el journey del usuario para llevarlo del descubrimiento a la conversión sin fricciones.
          </p>

          <ActivityBox title="📊 Planificación: Consultoría Digital Pro">
            <h4>🎯 OBJETIVOS</h4>
            <ul>
              <li><strong>Business:</strong> Generar consultas de nuevos clientes</li>
              <li><strong>Usuario:</strong> Encontrar consultor confiable para digitalización</li>
              <li><strong>KPI:</strong> 5+ consultas cualificadas por semana</li>
            </ul>

            <h4>🧑‍💼 USER PERSONAS</h4>
            <ul>
              <li><strong>CEO PYME (40-55 años):</strong> Busca ROI claro, casos de éxito</li>
              <li><strong>Director IT (30-45 años):</strong> Quiere detalles técnicos, metodología</li>
              <li><strong>Responsable Marketing (25-40 años):</strong> Interesa automatización, herramientas</li>
            </ul>

            <h4>🗺️ CUSTOMER JOURNEY</h4>
            <p><strong>Awareness → Interest → Consideration → Action</strong></p>
            <ul>
              <li><strong>Awareness:</strong> "Necesito digitalizar mi empresa"</li>
              <li><strong>Interest:</strong> "¿Qué incluye la consultoría digital?"</li>
              <li><strong>Consideration:</strong> "¿Es esta empresa la indicada?"</li>
              <li><strong>Action:</strong> "Solicitar consulta gratuita"</li>
            </ul>
          </ActivityBox>

          <PracticeBox title="🏗️ Arquitectura web resultante">
            <h4>📄 PÁGINAS PRINCIPALES</h4>
            <ul>
              <li><strong>Inicio:</strong> Propuesta valor + CTA</li>
              <li><strong>Servicios:</strong> Qué ofrecemos (con subpáginas específicas)</li>
              <li><strong>Casos de éxito:</strong> Resultados reales con números</li>
              <li><strong>Sobre nosotros:</strong> Confianza y experiencia</li>
              <li><strong>Blog:</strong> Contenido que demuestra expertise</li>
              <li><strong>Contacto:</strong> Múltiples formas de contactar</li>
            </ul>

            <h4>🔗 ESTRUCTURA DE NAVEGACIÓN</h4>
            <ul>
              <li><strong>Header:</strong> Inicio | Servicios | Casos | Sobre nosotros | Blog | Contacto</li>
              <li><strong>Footer:</strong> Servicios detallados | Blog reciente | Legal | Redes sociales</li>
              <li><strong>Sidebar:</strong> CTA consulta gratuita (siempre visible)</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="pagina-inicio">
          <h2>7.2 Página de inicio que convierte</h2>
          
          <p>
            La página de inicio no es una "bienvenida" - es tu vendedor 24/7. 
            En 5 segundos debe dejar claro qué haces, para quién y por qué eres la mejor opción.
          </p>

          <TipBox title="📐 Estructura de homepage que convierte">
            <ol>
              <li><strong>🎯 Hero Section:</strong> Propuesta de valor + CTA principal</li>
              <li><strong>🏆 Resultados:</strong> Números y logros cuantificables</li>
              <li><strong>⚙️ Servicios:</strong> Los 3 principales con beneficios claros</li>
              <li><strong>💼 Casos de éxito:</strong> 2-3 proyectos destacados</li>
              <li><strong>👥 Testimonios:</strong> Reseñas con foto y empresa real</li>
              <li><strong>📞 CTA Final:</strong> Última oportunidad de conversión</li>
            </ol>
          </TipBox>

          <ActivityBox title="✍️ Copywriting para hero section">
            <p><strong>Fórmula probada: Problema + Solución + Resultado</strong></p>
            
            <h4>❌ MAL (genérico):</h4>
            <p><em>"Consultoría Digital Pro es una empresa líder en servicios de transformación digital para empresas de todos los sectores."</em></p>

            <h4>✅ BIEN (específico):</h4>
            <p><em>"Digitalizamos PYMES en 90 días: de procesos manuales caóticos a sistemas automáticos que dan visibilidad total y ahorran 20h/semana"</em></p>

            <p><strong>CTA que funciona:</strong> "Ver cómo lo hacemos" (mejor que "Más información")</p>
          </ActivityBox>
        </section>

        <section className="doc-section" id="paginas-corporativas">
          <h2>7.3 Páginas corporativas que venden</h2>
          
          <p>
            Las páginas "Sobre nosotros", "Servicios" y "Contacto" no son relleno - 
            son herramientas de conversión. Cada una tiene un objetivo específico.
          </p>

          <div className="two-columns">
            <div className="column">
              <h4>📄 SERVICIOS</h4>
              <ul>
                <li><strong>Estructura:</strong> Problema → Solución → Beneficios → Precio → CTA</li>
                <li><strong>Contenido:</strong> Qué incluye exactamente cada servicio</li>
                <li><strong>Social proof:</strong> Casos específicos por servicio</li>
                <li><strong>CTA:</strong> "Solicitar cotización gratuita"</li>
              </ul>
            </div>

            <div className="column">
              <h4>👥 SOBRE NOSOTROS</h4>
              <ul>
                <li><strong>Objetivo:</strong> Generar confianza y credibilidad</li>
                <li><strong>Historia:</strong> Por qué empezaste (misión personal)</li>
                <li><strong>Experiencia:</strong> Años, proyectos, certificaciones</li>
                <li><strong>Equipo:</strong> Fotos reales, roles, LinkedIn</li>
              </ul>
            </div>
          </div>

          <PracticeBox title="📝 Página 'Servicios' optimizada">
            <h4>Para 'Auditoría Digital Completa':</h4>
            <ul>
              <li><strong>Problema:</strong> "¿Tu empresa pierde dinero por procesos ineficientes?"</li>
              <li><strong>Solución:</strong> "Auditoría de 7 días que identifica exactamente dónde pierdes tiempo y dinero"</li>
              <li><strong>Incluye:</strong> Lista específica de 15 elementos que auditas</li>
              <li><strong>Entregable:</strong> "Informe de 20 páginas + roadmap de implementación"</li>
              <li><strong>Precio:</strong> "Inversión: 1.500€ (se descuenta si contratas implementación)"</li>
              <li><strong>CTA:</strong> "Reservar tu auditoría gratuita de 30 min"</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="sistema-navegacion">
          <h2>7.4 Sistema de navegación intuitivo</h2>
          
          <p>
            Una navegación confusa mata conversiones. El usuario debe encontrar lo que busca 
            en máximo 3 clicks, sin pensar dónde está cada cosa.
          </p>

          <TipBox title="🧭 Principios de navegación que funciona">
            <ul>
              <li><strong>Regla de los 7±2:</strong> Máximo 7 elementos en menú principal</li>
              <li><strong>Labels descriptivos:</strong> "Servicios" no "Qué hacemos"</li>
              <li><strong>Jerarquía clara:</strong> Principal → Secundario → Terciario</li>
            
            </ul>
          </TipBox>

          <ActivityBox title="🔧 Implementar navegación en WordPress">
            <h4>Configuración paso a paso:</h4>
            <ol>
              <li><strong>Apariencia → Menús:</strong> Crear "Menú Principal"</li>
              <li><strong>Añadir páginas:</strong> Arrastar en orden de importancia</li>
              <li><strong>Submenús:</strong> Arrastrar ligeramente a la derecha</li>
              <li><strong>Asignar ubicación:</strong> "Primary Menu" o "Header Menu"</li>
              <li><strong>Personalizar:</strong> Apariencia → Personalizar → Menús</li>
            </ol>

            <p><strong>Estructura recomendada para Consultoría Digital Pro:</strong></p>
            <ul>
              <li>Inicio</li>
              <li>Servicios (con dropdown: Auditoría | Implementación | Formación)</li>
              <li>Casos de éxito</li>
              <li>Blog</li>
              <li>Sobre nosotros</li>
              <li>Contacto</li>
            </ul>
          </ActivityBox>
        </section>

        <section className="doc-section" id="formularios-contacto">
          <h2>7.5 Formularios que convierten</h2>
          
          <p>
            Un mal formulario puede matar el 50% de tus conversiones. 
            La clave está en el equilibrio: pedir lo suficiente para calificar el lead, 
            pero no tanto que abandone.
          </p>

          <WarningBox>
            <p>
              <strong>🚨 Errores que matan conversiones en formularios:</strong>
            </p>
            <ul>
              <li>Pedir teléfono como obligatorio (reduce conversiones 20%)</li>
              <li>Más de 5 campos para primer contacto</li>
              <li>No explicar qué pasa después de enviar</li>
              <li>Mensaje de error genérico</li>
              <li>No funciona en móvil</li>
            </ul>
          </WarningBox>

          <PracticeBox title="📋 Formulario de contacto optimizado">
            <h4>Campos para 'Consulta gratuita':</h4>
            <ol>
              <li><strong>Nombre*</strong> (placeholder: "Tu nombre")</li>
              <li><strong>Email*</strong> (placeholder: "email@empresa.com")</li>
              <li><strong>Empresa</strong> (placeholder: "Nombre de tu empresa")</li>
              <li><strong>¿Cuál es tu principal reto?*</strong> (textarea)</li>
              <li><strong>¿Cuántos empleados?</strong> (select: 1-10 | 11-50 | 51-200 | 200+)</li>
            </ol>

            <h4>Texto del botón y confirmación:</h4>
            <ul>
              <li><strong>Botón:</strong> "Solicitar mi consulta gratuita" (no "Enviar")</li>
              <li><strong>Confirmación:</strong> "¡Perfecto! Te contacto en las próximas 24h"</li>
              <li><strong>Email automático:</strong> Con calendario para agendar llamada</li>
            </ul>
          </PracticeBox>

          <ActivityBox title="🛠️ Implementar con Contact Form 7">
            <h4>Código del formulario optimizado:</h4>
            <pre><code>[text* tu-nombre placeholder "Tu nombre"]
[email* tu-email placeholder "email@empresa.com"]  
[text empresa placeholder "Nombre de tu empresa"]
[textarea* reto placeholder "¿Cuál es tu principal reto digital?"]
[select empleados "Selecciona tamaño" "1-10 empleados" "11-50 empleados" "51-200 empleados" "200+ empleados"]
[submit "Solicitar mi consulta gratuita"]</code></pre>

            <p><strong>Mensaje de confirmación:</strong> ¡Perfecto [tu-nombre]! He recibido tu consulta sobre [reto]. Te contacto en las próximas 24 horas para agendar tu consulta gratuita.</p>
          </ActivityBox>
        </section>

        <section className="doc-section" id="paginas-legales">
          <h2>7.6 Páginas legales (obligatorias)</h2>
          
          <p>
            No son opcionales - son obligatorias por ley. Una web sin aviso legal correcto 
            puede tener multas de hasta 600.000€. Te doy las plantillas que necesitas.
          </p>

          <TipBox title="📋 Páginas legales obligatorias en España">
            <ul>
              <li><strong>✅ Aviso Legal:</strong> Datos de la empresa, actividad, responsabilidades</li>
              <li><strong>✅ Política de Privacidad:</strong> Cómo tratas datos personales (RGPD)</li>
              <li><strong>✅ Política de Cookies:</strong> Qué cookies usas y para qué</li>
              <li><strong>✅ Términos y Condiciones:</strong> Si vendes online o tienes suscripciones</li>
            </ul>
          </TipBox>

          <ActivityBox title="⚖️ Generar páginas legales rápido">
            <h4>Opción 1: Generador automático</h4>
            <ul>
              <li><strong>Iubenda:</strong> Crea automáticamente todas las páginas (desde 25€/mes)</li>
              <li><strong>Termly:</strong> Alternativa gratuita para sitios básicos</li>
              <li><strong>CookieBot:</strong> Especializado en cookies (desde 5€/mes)</li>
            </ul>

            <h4>Opción 2: Plantillas personalizadas</h4>
            <p>Usa las plantillas que incluyo en los recursos del módulo, 
            adaptadas específicamente para consultorías digitales en España.</p>

            <p><strong>⚠️ Importante:</strong> Revisa con abogado si manejas datos sensibles o tienes operaciones complejas.</p>
          </ActivityBox>
        </section>

        <section className="doc-section" id="blog-estrategia">
          <h2>7.7 Blog corporativo con estrategia</h2>
          
          <p>
            Un blog sin estrategia es tiempo perdido. Pero bien ejecutado, es tu mejor 
            herramienta de marketing: demuestra expertise, atrae tráfico SEO y nutre leads.
          </p>

          <PracticeBox title="📝 Estrategia de contenidos para consultoría digital">
            <h4>📊 PILARES DE CONTENIDO (70/20/10)</h4>
            <ul>
              <li><strong>70% Educational:</strong> Guías, tutoriales, casos de estudio</li>
              <li><strong>20% Inspirational:</strong> Tendencias, opiniones, futuro del sector</li>
              <li><strong>10% Promotional:</strong> Servicios, logros, equipo</li>
            </ul>

            <h4>🎯 TEMAS QUE FUNCIONAN</h4>
            <ul>
              <li>"Cómo digitalizar [proceso específico] en 30 días"</li>
              <li>"[Número] errores que matan la productividad de tu PYME"</li>
              <li>"Caso de éxito: Cómo [empresa] aumentó ventas 40% con automatización"</li>
              <li>"Herramientas gratuitas para automatizar tu [departamento]"</li>
            </ul>

            <h4>📅 CALENDARIO EDITORIAL</h4>
            <ul>
              <li><strong>Lunes:</strong> Guía práctica (how-to)</li>
              <li><strong>Miércoles:</strong> Caso de estudio o noticia sector</li>
              <li><strong>Viernes:</strong> Herramientas o recursos</li>
            </ul>
          </PracticeBox>

          <ActivityBox title="🔧 Configurar blog en WordPress">
            <h4>Setup inicial:</h4>
            <ol>
              <li><strong>Ajustes → Lectura:</strong> "Tu página de inicio muestra" → Una página estática</li>
              <li><strong>Página de inicio:</strong> Seleccionar tu homepage</li>
              <li><strong>Página de entradas:</strong> Crear página "Blog" y seleccionarla</li>
              <li><strong>Menús:</strong> Añadir página "Blog" a navegación principal</li>
            </ol>

            <h4>Optimización para conversión:</h4>
            <ol>
              <li><strong>Sidebar:</strong> CTA para consulta gratuita</li>
              <li><strong>Footer posts:</strong> Lead magnet relacionado</li>
              <li><strong>Autor box:</strong> Con foto, bio y CTA</li>
              <li><strong>Related posts:</strong> Para aumentar tiempo en sitio</li>
            </ol>
          </ActivityBox>
        </section>

        <div className="doc-hero" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #0073aa, #00a0d2)' }}>
          <h3>🏗️ ¡Has construido una web profesional completa!</h3>
          <p>
            Tu sitio web tiene arquitectura sólida, páginas que convierten, navegación intuitiva, 
            formularios optimizados, páginas legales y estrategia de contenidos. Esto es trabajo 
            de nivel profesional que puedes facturar 2000-5000€.
          </p>
        </div>

        <TipBox title="📝 Web profesional completada">
          <ul>
            <li>✅ Planificación y arquitectura de información</li>
            <li>✅ Página de inicio optimizada para conversión</li>
            <li>✅ Páginas corporativas estratégicas</li>
            <li>✅ Sistema de navegación profesional</li>
            <li>✅ Formularios de contacto optimizados</li>
            <li>✅ Páginas legales obligatorias</li>
            <li>✅ Blog corporativo con estrategia de contenidos</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a href="/tema8" className="btn btn-primary">
            Siguiente: M8 · SEO y posicionamiento →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
