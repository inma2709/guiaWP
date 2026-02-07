import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema10Index() {
  return (
    <TopicLayout
      title="M10 · Hosting y dominio"
      subtitle="Elige el hosting perfecto y configura tu dominio como un profesional"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 10</div>
          <h1>Hosting y dominio</h1>
          <p className="doc-lead">
            Elige el hosting perfecto y configura tu dominio como un profesional
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#tipos-hosting">Tipos de hosting para WordPress</a></li>
            <li><a href="#elegir-hosting">Cómo elegir el hosting perfecto</a></li>
            <li><a href="#dominios">Dominios y DNS</a></li>
            <li><a href="#migracion">Migración desde local a producción</a></li>
            <li><a href="#ssl-seguridad">SSL y configuración de seguridad</a></li>
            <li><a href="#rendimiento">Optimización de rendimiento</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            Llevar tu sitio WordPress desde LocalWP al mundo real. Aprenderás a elegir hosting, 
            configurar dominios, migrar sin perder datos y optimizar para máximo rendimiento.
            ¡Tu sitio estará listo para recibir visitantes!
          </p>
        </TipBox>

        <section className="doc-section" id="tipos-hosting">
          <h2>10.1 Tipos de hosting para WordPress</h2>
          
          <p>
            No todos los hostings son iguales. La elección incorrecta puede arruinar 
            la experiencia de tus visitantes y complicar el mantenimiento del sitio.
          </p>

          <div className="two-columns">
            <div className="column">
              <h4>🚫 SHARED HOSTING</h4>
              <p><strong>Qué es:</strong> Tu sitio comparte servidor con cientos de otros</p>
              <ul>
                <li>💰 Precio: 2-10€/mes</li>
                <li>🐌 Performance: Lenta, variable</li>
                <li>🔒 Seguridad: Básica</li>
                <li>🎯 Para: Blogs personales, proyectos de prueba</li>
                <li>❌ No para: E-commerce, sitios profesionales</li>
              </ul>
            </div>

            <div className="column">
              <h4>✅ VPS/CLOUD HOSTING</h4>
              <p><strong>Qué es:</strong> Servidor virtual dedicado con recursos garantizados</p>
              <ul>
                <li>💰 Precio: 15-50€/mes</li>
                <li>⚡ Performance: Excelente, predecible</li>
                <li>🔒 Seguridad: Avanzada</li>
                <li>🎯 Para: Sitios profesionales, e-commerce</li>
                <li>✅ Escalable según necesidades</li>
              </ul>
            </div>
          </div>

          <PracticeBox title="🏆 Hostings WordPress recomendados">
            <h4>Profesionales (VPS/Cloud):</h4>
            <ul>
              <li><strong>SiteGround:</strong> WordPress optimizado, soporte excelente</li>
              <li><strong>Kinsta:</strong> Premium, Google Cloud, muy rápido</li>
              <li><strong>WP Engine:</strong> Managed WordPress, perfecto para agencias</li>
              <li><strong>Cloudways:</strong> Cloud hosting fácil, muy flexible</li>
            </ul>

            <h4>Económicos (para empezar):</h4>
            <ul>
              <li><strong>Hostinger:</strong> Barato y decente para principiantes</li>
              <li><strong>Namecheap:</strong> Buen soporte, precios competitivos</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="elegir-hosting">
          <h2>10.2 Cómo elegir el hosting perfecto</h2>
          
          <ActivityBox title="📋 Checklist para elegir hosting">
            <h4>✅ Requisitos técnicos mínimos:</h4>
            <ul>
              <li><strong>PHP 8.0+</strong> (WordPress actual requiere PHP moderno)</li>
              <li><strong>MySQL 5.7+</strong> o MariaDB 10.3+</li>
              <li><strong>HTTPS/SSL gratuito</strong> (obligatorio para SEO)</li>
              <li><strong>Copias de seguridad automáticas</strong></li>
              <li><strong>CDN incluida</strong> (mejora velocidad global)</li>
            </ul>

            <h4>✅ Características importantes:</h4>
            <ul>
              <li><strong>Staging environment</strong> (probar cambios sin riesgo)</li>
              <li><strong>1-click WordPress install</strong></li>
              <li><strong>Soporte 24/7 en español</strong></li>
              <li><strong>Garantía uptime 99.9%+</strong></li>
              <li><strong>Migración gratuita</strong></li>
            </ul>
          </ActivityBox>

          <WarningBox>
            <p>
              <strong>⚠️ Red flags - Evita hostings que:</strong>
            </p>
            <ul>
              <li>Prometen "ilimitado" todo por 1€/mes (es imposible)</li>
              <li>No especifican versión de PHP/MySQL</li>
              <li>No incluyen SSL gratuito</li>
              <li>Tienen reviews muy negativas sobre soporte</li>
              <li>No ofrecen period de prueba o garantía</li>
            </ul>
          </WarningBox>
        </section>

        <section className="doc-section" id="dominios">
          <h2>10.3 Dominios y DNS</h2>
          
          <p>
            El dominio es tu dirección en internet. Una buena elección impacta en SEO, 
            branding y la percepción profesional de tu sitio.
          </p>

          <TipBox title="🎯 Consejos para elegir dominio">
            <ul>
              <li><strong>Corto y memorable:</strong> Máximo 15 caracteres</li>
              <li><strong>Fácil de escribir:</strong> Sin guiones ni números confusos</li>
              <li><strong>Extensión apropiada:</strong> .com (universal), .es (España), .org (organizaciones)</li>
              <li><strong>Brandeable:</strong> Que funcione como nombre de marca</li>
              <li><strong>Sin trademark issues:</strong> Verifica que no infringe marcas registradas</li>
            </ul>
          </TipBox>

          <h3>Configuración DNS básica</h3>
          <p>Los registros DNS más importantes para WordPress:</p>
          <ul>
            <li><strong>A Record:</strong> Conecta tu dominio a la IP del servidor</li>
            <li><strong>CNAME:</strong> Para subdominios como www.tudominio.com</li>
            <li><strong>MX Records:</strong> Para email corporativo</li>
            <li><strong>TXT Records:</strong> Para verificaciones (Google, email)</li>
          </ul>
        </section>

        <section className="doc-section" id="migracion">
          <h2>10.4 Migración desde local a producción</h2>
          
          <p>
            El momento de la verdad: llevar tu sitio desde LocalWP al hosting real.
            Una migración mal hecha puede romper todo el trabajo.
          </p>

          <ActivityBox title="🚀 Proceso de migración paso a paso">
            <h4>PREPARACIÓN (en LocalWP):</h4>
            <ol>
              <li><strong>URLs:</strong> Cambia todas las URLs locales por las definitivas</li>
              <li><strong>Plugins:</strong> Desactiva plugins de desarrollo/debug</li>
              <li><strong>Base de datos:</strong> Exporta vía phpMyAdmin o wp-cli</li>
              <li><strong>Archivos:</strong> Comprime toda la carpeta public</li>
            </ol>

            <h4>SUBIDA AL HOSTING:</h4>
            <ol>
              <li><strong>FTP/SFTP:</strong> Sube archivos a public_html</li>
              <li><strong>Base de datos:</strong> Importa SQL en cPanel/hosting panel</li>
              <li><strong>wp-config.php:</strong> Actualiza datos de conexión BD</li>
              <li><strong>URLs:</strong> Search/Replace final en la base de datos</li>
            </ol>
          </ActivityBox>

          <PracticeBox title="🛠️ Plugins útiles para migración">
            <ul>
              <li><strong>All-in-One WP Migration:</strong> Migración 1-click (sitios pequeños)</li>
              <li><strong>Duplicator:</strong> Backup completo + installer automático</li>
              <li><strong>WP Migrate DB:</strong> Para developers, muy flexible</li>
              <li><strong>UpdraftPlus:</strong> Backup + migración directa</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="ssl-seguridad">
          <h2>10.5 SSL y configuración de seguridad</h2>
          
          <p>
            HTTPS ya no es opcional. Google penaliza sitios sin SSL y los navegadores 
            los marcan como "no seguros". Configurarlo correctamente es fundamental.
          </p>

          <PracticeBox title="🔒 Configurar SSL correctamente">
            <h4>1. Activar SSL en el hosting:</h4>
            <ul>
              <li>Accede a cPanel → SSL/TLS</li>
              <li>Activa "Let's Encrypt" (gratuito)</li>
              <li>Espera 5-10 minutos para propagación</li>
            </ul>

            <h4>2. Configurar WordPress:</h4>
            <ul>
              <li>Ajustes → Generales</li>
              <li>Cambia URLs a https://</li>
              <li>Instala plugin "SSL Insecure Content Fixer"</li>
              <li>Configura redirección 301 HTTP → HTTPS</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="rendimiento">
          <h2>10.6 Optimización de rendimiento</h2>
          
          <p>
            Un sitio lento mata conversiones y daña SEO. Con la configuración correcta
            tu WordPress puede cargar en menos de 2 segundos.
          </p>

          <TipBox title="⚡ Optimizaciones esenciales">
            <ul>
              <li><strong>Plugin caché:</strong> WP Rocket (premium) o W3 Total Cache (gratuito)</li>
              <li><strong>Optimización imágenes:</strong> Smush o ShortPixel</li>
              <li><strong>CDN:</strong> Cloudflare (gratuito) o MaxCDN</li>
              <li><strong>Minificación:</strong> CSS/JS comprimidos automáticamente</li>
              <li><strong>Database cleanup:</strong> WP-Optimize para limpiar BD</li>
            </ul>
          </TipBox>

          <WarningBox>
            <p>
              <strong>🚨 Errores comunes que arruinan rendimiento:</strong>
            </p>
            <ul>
              <li>Demasiados plugins activos (máximo 15-20)</li>
              <li>Imágenes sin optimizar (JPG gigantes)</li>
              <li>Tema mal programado con muchos recursos</li>
              <li>No usar caché</li>
              <li>Hosting compartido saturado</li>
            </ul>
          </WarningBox>

          <ActivityBox title="📊 Testing de rendimiento">
            <p><strong>Herramientas para medir velocidad:</strong></p>
            <ul>
              <li><strong>PageSpeed Insights:</strong> Métricas de Google, móvil + desktop</li>
              <li><strong>GTmetrix:</strong> Análisis detallado + waterfall</li>
              <li><strong>Pingdom:</strong> Testing desde múltiples ubicaciones</li>
              <li><strong>WebPageTest:</strong> El más completo para developers</li>
            </ul>
            
          
          </ActivityBox>
        </section>

        <div className="doc-next">
          <a href="/tema11" className="btn btn-primary">
            Siguiente: M11 · WordPress para profesionales →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}
