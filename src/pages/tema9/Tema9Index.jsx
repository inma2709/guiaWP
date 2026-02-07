import TopicLayout from "../../components/TopicLayout";
import { TipBox, PracticeBox, WarningBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema9Index() {
  return (
    <TopicLayout
      title="M9 · Seguridad y mantenimiento"
      subtitle="Protege tu inversión digital: estrategia completa de seguridad, copias y mantenimiento preventivo"
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 9</div>
          <h1>Seguridad y mantenimiento</h1>
          <p className="doc-lead">
            Protege tu inversión digital: estrategia completa de seguridad, copias y mantenimiento preventivo
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#panorama-amenazas">Panorama de amenazas: conoce a tu enemigo</a></li>
            <li><a href="#seguridad-basica">Seguridad básica: lo esencial</a></li>
            <li><a href="#copias-seguridad">Copias de seguridad automáticas</a></li>
            <li><a href="#firewall-proteccion">Firewall y protección avanzada</a></li>
            <li><a href="#mantenimiento-preventivo">Mantenimiento preventivo</a></li>
            <li><a href="#monitorizacion">Monitorización y alertas</a></li>
            <li><a href="#plan-recuperacion">Plan de recuperación ante desastres</a></li>
          </ol>
        </div>

        <TipBox title="🎯 Objetivo del módulo">
          <p>
            La seguridad no es opcional - es supervivencia digital. Aprenderás a proteger cualquier 
            sitio WordPress contra el 99% de ataques, implementar sistema de copias automáticas 
            y crear rutinas de mantenimiento que eviten problemas antes de que ocurran.
          </p>
        </TipBox>

        <PracticeBox title="🛡️ Plan maestro de seguridad">
          <p>
            Implementaremos el "Fort Knox Digital": firewall profesional, copias automáticas multi-destino, 
            monitoreo 24/7, usuarios con roles perfectos y plan de recuperación ante desastres. 
            Tu WordPress será más seguro que el 95% de sitios en internet.
          </p>
        </PracticeBox>

        <section className="doc-section" id="panorama-amenazas">
          <h2>9.1 Panorama de amenazas: conoce a tu enemigo</h2>
          
          <p>
            WordPress mueve el 43% de internet, por eso es target #1 de cibercriminales. 
            Pero no por vulnerabilidades del core (que es muy seguro), sino por malas prácticas de usuarios.
          </p>

          <WarningBox>
            <p>
              <strong>⚠️ Realidad brutal:</strong> Se hackean 30,000 sitios web diariamente. 
              El 94% son ataques automatizados que buscan vulnerabilidades conocidas. 
              <em>La buena noticia: el 99% son 100% prevenibles con seguridad básica.</em>
            </p>
          </WarningBox>

          <h3>TOP 5 vectores de ataque más comunes</h3>
          <div className="two-columns">
            <div className="column">
              <h4>🤖 FUERZA BRUTA</h4>
              <p><strong>Qué es:</strong> Probar miles de contraseñas automáticamente</p>
              <ul>
                <li>Target: wp-admin y wp-login.php</li>
                <li>Señal: Muchos intentos de login fallidos</li>
                <li>Defensa: Límite intentos + 2FA</li>
              </ul>
            </div>

            <div className="column">
              <h4>💉 INYECCIÓN SQL</h4>
              <p><strong>Qué es:</strong> Insertar código malicioso en formularios</p>
              <ul>
                <li>Target: Formularios sin validar</li>
                <li>Objetivo: Acceso a base de datos</li>
                <li>Defensa: Validar inputs + WAF</li>
              </ul>
            </div>
          </div>

          <ActivityBox title="🎯 TOP 5 VECTORES DE ATAQUE">
            <ol>
              <li><strong>Credenciales débiles:</strong> admin/admin, password123, etc.</li>
              <li><strong>Plugins desactualizados:</strong> 60% de los hackeos por esta causa</li>
              <li><strong>Hosting inseguro:</strong> Servidores mal configurados</li>
              <li><strong>Archivos maliciosos:</strong> Backdoors en themes/plugins pirata</li>
              <li><strong>Inyección SQL:</strong> Formularios mal protegidos</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="seguridad-basica">
          <h2>9.2 Fortaleza digital: usuarios y accesos</h2>
          
          <p>
            El 67% de hackeos empiezan por credenciales débiles. Un usuario seguro es tu primera 
            y más efectiva línea de defensa. Te enseño el sistema que uso con clientes enterprise.
          </p>

          <TipBox title="🔐 CONTRASEÑAS ENTERPRISE">
            <ul>
              <li><strong>📏 Longitud:</strong> Mínimo 15 caracteres (idealmente 20+)</li>
              <li><strong>🔤 Complejidad:</strong> Mayús + minus + números + símbolos</li>
              <li><strong>🚫 Evitar:</strong> Diccionario, datos personales, patrones</li>
              <li><strong>🔄 Rotación:</strong> Cambiar cada 90 días (críticos cada 30)</li>
              <li><strong>💾 Gestor:</strong> 1Password, Bitwarden, LastPass</li>
            </ul>
          </TipBox>

          <PracticeBox title="👤 SISTEMA DE ROLES PROFESIONAL">
            <ul>
              <li><strong>🎯 Principio mínimo privilegio:</strong> Solo permisos necesarios</li>
              <li><strong>👑 Administrador:</strong> Solo 1-2 personas (fundadores/CTO)</li>
              <li><strong>✏️ Editor:</strong> Contenido y moderación</li>
              <li><strong>📝 Autor:</strong> Solo sus propios posts</li>
              <li><strong>👀 Colaborador:</strong> Escribir para revisión</li>
            </ul>
          </PracticeBox>

          <ActivityBox title="🔐 Configurar fortaleza de usuarios">
            <h4>1. Auditoría de usuarios actual</h4>
            <ol>
              <li>Ve a <strong>Usuarios → Todos los usuarios</strong></li>
              <li>Identifica usuarios innecesarios y elimínalos</li>
              <li>Verifica roles: ¿realmente necesita ser admin?</li>
              <li>Cambia username "admin" si existe</li>
            </ol>

            <h4>2. Instalar plugin 2FA</h4>
            <ol>
              <li>Instalar <strong>"Two Factor Authentication"</strong> by miniOrange</li>
              <li>Activar 2FA obligatorio para administradores</li>
              <li>Configurar app móvil (Google Authenticator)</li>
              <li>Generar y guardar códigos de backup</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="copias-seguridad">
          <h2>9.3 Copias de seguridad: tu seguro de vida digital</h2>
          
          <p>
            Las copias de seguridad no son para "por si acaso" - son para "cuando pase". 
            Todo sitio web eventualmente necesitará una restauración.
          </p>

          <WarningBox>
            <p>
              <strong>⚠️ Regla 3-2-1 de backups enterprise:</strong> 3 copias de tus datos, 
              en 2 medios diferentes, con 1 copia off-site. Si no cumples esto, no tienes 
              backup real, tienes una ilusión de seguridad.
            </p>
          </WarningBox>

          <TipBox title="📦 QUÉ INCLUIR EN BACKUP">
            <ul>
              <li><strong>✅ Base de datos completa:</strong> Posts, páginas, usuarios, configuración</li>
              <li><strong>✅ Archivos wp-content:</strong> Temas, plugins, uploads</li>
              <li><strong>✅ Archivos configuración:</strong> wp-config.php, .htaccess</li>
              <li><strong>✅ Core WordPress:</strong> Para restauración completa</li>
            </ul>
          </TipBox>

          <PracticeBox title="🥇 PLUGINS DE BACKUP RECOMENDADOS">
            <h4>UpdraftPlus (Recomendado)</h4>
            <ul>
              <li><strong>Pros:</strong> Interface simple, múltiples destinos, restauración fácil</li>
              <li><strong>Precio:</strong> Gratis básico, $70/año premium</li>
              <li><strong>Mejor para:</strong> Principiantes y sitios medianos</li>
            </ul>

            <h4>BackWPup (Avanzado)</h4>
            <ul>
              <li><strong>Pros:</strong> Configuración avanzada, logs detallados</li>
              <li><strong>Precio:</strong> Gratis completo, $99/año pro</li>
              <li><strong>Mejor para:</strong> Usuarios técnicos</li>
            </ul>
          </PracticeBox>
        </section>

        <section className="doc-section" id="firewall-proteccion">
          <h2>9.4 Firewall y protección avanzada</h2>
          
          <p>
            Un plugin de seguridad bien configurado puede detener el 95% de ataques antes de que 
            lleguen a tu sitio. Es como tener un guardia de seguridad 24/7 que nunca duerme.
          </p>

          <TipBox title="🛡️ Los 3 mejores plugins de seguridad WordPress">
            <h4>🥇 Wordfence Security</h4>
            <ul>
              <li>Firewall avanzado</li>
              <li>Escaneo malware en tiempo real</li>
              <li>Login protection</li>
              <li>Gratuito + Premium</li>
            </ul>

            <h4>🥈 Sucuri Security</h4>
            <ul>
              <li>Auditoría de seguridad</li>
              <li>Monitoreo integridad archivos</li>
              <li>Notificaciones de cambios</li>
              <li>Limpieza post-hack</li>
            </ul>
          </TipBox>

          <ActivityBox title="🛡️ Implementar Wordfence paso a paso">
            <ol>
              <li><strong>Instalación:</strong> Plugins → "Wordfence Security"</li>
              <li><strong>Configurar Firewall:</strong> Enable Extended Protection</li>
              <li><strong>Primer escaneo:</strong> Start New Scan (15-30 min)</li>
              <li><strong>Login Protection:</strong> Enable 2FA para tu usuario</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="mantenimiento-preventivo">
          <h2>9.5 Mantenimiento preventivo</h2>
          
          <p>
            Las actualizaciones son un dilema: no actualizas = vulnerabilidades conocidas, 
            actualizas mal = sitio roto. La clave es una estrategia controlada.
          </p>

          <TipBox title="📈 Estrategia profesional de actualizaciones">
            <ul>
              <li><strong>🔄 WordPress Core:</strong> Automático para minor, manual para major</li>
              <li><strong>🔌 Plugins críticos:</strong> Actualizar inmediatamente (seguridad)</li>
              <li><strong>🎨 Temas:</strong> Nunca automático, siempre en staging primero</li>
              <li><strong>💾 Backup pre-update:</strong> Siempre, sin excepciones</li>
            </ul>
          </TipBox>
        </section>

        <section className="doc-section" id="monitorizacion">
          <h2>9.6 Monitoreo proactivo</h2>
          
          <p>
            El monitoreo proactivo es la diferencia entre un profesional y un amateur. 
            Detectar problemas a las 3 AM antes que tus clientes se despierten es oro puro.
          </p>

          <PracticeBox title="📊 MÉTRICAS CRÍTICAS A MONITOREAR">
            <ul>
              <li><strong>⚡ Uptime:</strong> ¿Está tu sitio online? (objetivo: 99.9%)</li>
              <li><strong>🐌 Performance:</strong> Tiempo de carga (&lt;3 segundos)</li>
              <li><strong>🔒 SSL Certificate:</strong> ¿Caduca pronto? (alertar 30 días antes)</li>
              <li><strong>🛡️ Seguridad:</strong> Intentos de hack, archivos modificados</li>
            </ul>
          </PracticeBox>

          <ActivityBox title="📊 Configurar monitoreo gratuito">
            <h4>1. UptimeRobot - Monitoreo uptime</h4>
            <ol>
              <li>Registrarse en <strong>uptimerobot.com</strong></li>
              <li>Añadir monitor tipo "HTTP(s)"</li>
              <li>Intervalo: 5 minutos</li>
              <li>Alertas: Email + SMS</li>
            </ol>

            <h4>2. Google Analytics - Comportamiento</h4>
            <ol>
              <li>Configurar GA4 si no está activo</li>
              <li>Crear alertas: caída tráfico, bounce rate alto</li>
            </ol>
          </ActivityBox>
        </section>

        <section className="doc-section" id="plan-recuperacion">
          <h2>9.7 Plan de recuperación ante desastres</h2>
          
          <p>
            Murphy's Law también aplica a WordPress: "Todo lo que pueda salir mal, saldrá mal". 
            Tener un plan claro puede ahorrar horas de pánico y miles de euros.
          </p>

          <WarningBox>
            <h4>🚨 ESCENARIOS DE DESASTRE COMÚN</h4>
            <ul>
              <li><strong>🔥 Sitio hackeado:</strong> Malware, defacement, redirecciones</li>
              <li><strong>💥 Actualización rota:</strong> Pantalla blanca, errores fatales</li>
              <li><strong>🗄️ Base datos corrupta:</strong> Error connecting to database</li>
              <li><strong>👤 Error humano:</strong> Borrado accidental</li>
            </ul>
          </WarningBox>

          <ActivityBox title="📋 Plan de acción paso a paso">
            <h4>🚨 FASE 1: EVALUACIÓN RÁPIDA (5-10 min)</h4>
            <ol>
              <li><strong>Diagnóstico:</strong> ¿Qué ven los usuarios?</li>
              <li><strong>Timeline:</strong> ¿Cuándo empezó el problema?</li>
              <li><strong>Comunicación:</strong> Informar a stakeholders</li>
            </ol>

            <h4>🛠️ FASE 2: ESTABILIZACIÓN (15-30 min)</h4>
            <ol>
              <li><strong>Contener daño:</strong> Cambiar contraseñas si es hack</li>
              <li><strong>Diagnóstico profundo:</strong> Revisar logs de error</li>
              <li><strong>Activar mantenimiento:</strong> Página temporal</li>
            </ol>

            <h4>🔄 FASE 3: RESTAURACIÓN (30-120 min)</h4>
            <ol>
              <li><strong>Backup:</strong> Usar backup más reciente y confiable</li>
              <li><strong>Testing:</strong> Verificar en staging primero</li>
              <li><strong>Deploy:</strong> Mover a producción cuando esté perfecto</li>
            </ol>
          </ActivityBox>
        </section>

        <div className="doc-hero" style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #0073aa, #00a0d2)' }}>
          <h3>🛡️ ¡WordPress Fort Knox completado!</h3>
          <p>
            Tu sitio web ahora tiene seguridad de nivel enterprise: usuarios blindados, firewall avanzado, 
            copias automáticas multi-destino, monitoreo 24/7 y plan de recuperación probado. 
            Estás en el top 5% de sitios más seguros de internet.
          </p>
        </div>

        <div className="doc-next">
          <a href="/tema10" className="btn btn-primary">
            Siguiente: M10 · Hosting y dominio →
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}