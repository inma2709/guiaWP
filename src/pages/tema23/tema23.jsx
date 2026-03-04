import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function WP_Plugins_Reservas() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="kicker">UF1841 · WordPress · Desarrollo profesional</p>
        <h1>Plugins de Reservas en WordPress · Guía Completa</h1>
        <p className="lead">
          Aprende a integrar sistemas de reservas profesionales en WordPress usando <strong>únicamente herramientas gratuitas</strong>. 
          Analizaremos las mejores opciones disponibles y nos enfocaremos en Simply Schedule Appointments 
          (versión gratuita) como la única solución que ofrece funcionalidad completa sin costos adicionales.
        </p>

        <TipBox title="🎯 Objetivo de este tema">
          <p>
            <strong>Al finalizar dominarás:</strong> Implementar un sistema de reservas 100% funcional y profesional 
            usando <strong>únicamente la versión gratuita</strong> de Simply Schedule Appointments.
          </p>
          <p><strong>Tiempo estimado:</strong> 3 horas · <strong>Nivel:</strong> Intermedio</p>
          <p><strong>Requisitos previos:</strong> WordPress básico · <strong>Presupuesto:</strong> €0 (todo gratuito)</p>
        </TipBox>
      </header>

      {/* FUNDAMENTOS */}
      <section className="doc doc-section" id="fundamentos">
        <h2>Fundamentos: ¿Por qué necesitas un sistema de reservas?</h2>
        
        <div className="doc-content">
          <p>
            En la era digital, <strong>automatizar las reservas</strong> es fundamental para cualquier negocio 
            que ofrezca servicios con cita previa: peluquerías, clínicas, restaurantes, consultoría, 
            talleres educativos, y muchos más.
          </p>

          <TipBox>
            <p>
              <strong>Problema común:</strong> Muchos negocios pierden clientes porque dependen de llamadas 
              telefónicas o emails para agendar citas. Los clientes modernos esperan poder reservar 
              24/7 desde cualquier dispositivo.
            </p>
          </TipBox>

          <h3>Beneficios de un sistema de reservas automatizado</h3>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dee2e6'}}>
              <h4 style={{color: '#198754', margin: '0 0 1rem 0'}}>🚀 Para el negocio</h4>
              <ul style={{margin: 0, listStyle: 'none', paddingLeft: 0}}>
                <li>✅ Reduce llamadas telefónicas</li>
                <li>✅ Elimina errores de agendamiento</li>
                <li>✅ Optimiza la gestión del tiempo</li>
                <li>✅ Aumenta las reservas fuera del horario comercial</li>
                <li>✅ Recopila datos de clientes automáticamente</li>
              </ul>
            </div>
            
            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dee2e6'}}>
              <h4 style={{color: '#0d6efd', margin: '0 0 1rem 0'}}>👥 Para los clientes</h4>
              <ul style={{margin: 0, listStyle: 'none', paddingLeft: 0}}>
                <li>✅ Reserva inmediata 24/7</li>
                <li>✅ Ve disponibilidad en tiempo real</li>
                <li>✅ Recibe confirmaciones automáticas</li>
                <li>✅ Puede cancelar o reprogramar</li>
                <li>✅ Experiencia moderna y profesional</li>
              </ul>
            </div>
          </div>

          <WarningBox>
            <p>
              <strong>Clave del éxito:</strong> Elegir el plugin correcto marca la diferencia entre 
              un sistema que facilita tu trabajo y uno que te genera más problemas. No todos los 
              plugins son igual de confiables.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* PANORAMA DE PLUGINS */}
      <section className="doc doc-section" id="panorama-plugins">
        <h2>Panorama de plugins de reservas en WordPress</h2>
        
        <div className="doc-content">
          <p>
            El ecosistema de WordPress ofrece múltiples opciones para implementar sistemas de reservas. 
            Cada plugin tiene fortalezas y limitaciones específicas que debemos evaluar según nuestras necesidades.
          </p>

          <h3>Categorías principales de plugins de reservas</h3>

          <details className="dd">
            <summary>🏢 Plugins empresariales premium</summary>
            <div className="dd-body">
              <p>
                Soluciones completas diseñadas para empresas medianas y grandes con presupuesto específico para software.
              </p>
              
              <div className="table-wrap">
                <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                  <thead>
                    <tr style={{background: '#f8f9fa'}}>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Plugin</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Precio</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Fortalezas</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Limitaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Amelia</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€89/año</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Interfaz moderna, múltiples empleados, analytics</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Costoso, curva de aprendizaje elevada</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>BookingPress</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>€129/año</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Muy personalizable, integraciones avanzadas</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Complejo de configurar, requiere conocimientos técnicos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🛠️ Plugins con versión gratuita limitada</summary>
            <div className="dd-body">
              <p>
                La estrategia "freemium": ofrecen funcionalidades básicas gratuitas, pero las características realmente útiles requieren pago.
              </p>
              
              <div className="table-wrap">
                <table style={{width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #dee2e6'}}>
                  <thead>
                    <tr style={{background: '#f8f9fa'}}>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Plugin</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Versión gratuita</th>
                      <th style={{padding: '12px', border: '1px solid #dee2e6', fontWeight: 'bold'}}>Limitaciones gratuitas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Bookly</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Funcional pero básica</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Solo un empleado, sin pagos online, marca de agua</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>Easy Appointments</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Muy limitada</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Sin notificaciones automaticas, diseño básico</td>
                    </tr>
                    <tr>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}><strong>WP Simple Booking</strong></td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Solo calendario básico</td>
                      <td style={{padding: '12px', border: '1px solid #dee2e6'}}>Sin gestión de clientes, configuración limitada</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <WarningBox>
                <p>
                  <strong>Realidad del freemium:</strong> La mayoría de estos plugins te "enganchan" con la versión gratuita, 
                  pero para usar el sistema en producción necesitas pagar. A menudo, el costo total es similar o superior 
                  a opciones premium desde el inicio.
                </p>
              </WarningBox>
            </div>
          </details>

          <details className="dd">
            <summary>💎 Plugins realmente gratuitos y funcionales</summary>
            <div className="dd-body">
              <p>
                Pocas opciones ofrecen funcionalidades completas sin costo. Aquí es donde destaca nuestra recomendación principal.
              </p>
              
              <div style={{background: '#d1ecf1', padding: '1.5rem', borderRadius: '8px', border: '1px solid #bee5eb', margin: '1rem 0'}}>
                <h4 style={{color: '#0c5460', margin: '0 0 1rem 0'}}>🌟 Simply Schedule Appointments (VERSIÓN GRATUITA)</h4>
                <p style={{margin: '0 0 1rem 0'}}>
                  <strong>¿Por qué destaca?</strong> Es el único plugin que ofrece un sistema de reservas 
                  completamente funcional en su versión gratuita, sin limitaciones artificiales que fuercen 
                  la migración a premium.
                </p>
                <ul style={{margin: '0 0 1rem 0'}}>
                  <li>✅ Calendario completamente funcional</li>
                  <li>✅ Multiple tipos de servicios</li>
                  <li>✅ Notificaciones por email automáticas</li>
                  <li>✅ Gestión de disponibilidad completa</li>
                  <li>✅ Integración con Google Calendar</li>
                  <li>✅ Sin marca de agua ni limitaciones de tiempo</li>
                  <li>✅ Diseño moderno responsive</li>
                </ul>
                <div style={{background: 'rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '6px', marginTop: '1rem'}}>
                  <p style={{margin: 0, fontSize: '0.9rem', fontWeight: 'bold'}}>
                    ⚠️ <strong>LO QUE NO INCLUYE LA VERSIÓN GRATUITA:</strong> Pagos online integrados, SMS, reportes avanzados, múltiples ubicaciones.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ANÁLISIS DETALLADO */}
      <section className="doc doc-section" id="analisis-detallado">
        <h2>Análisis detallado: ¿Por qué Simply Schedule Appointments?</h2>
        
        <div className="doc-content">
          <p>
            Después de evaluar varios plugins de reservas diferentes, <strong>Simply Schedule Appointments</strong> 
            emerge como la opción más equilibrada para proyectos profesionales que requieren funcionalidad 
            completa sin costos adicionales.
          </p>

          <h3>Ventajas técnicas y comerciales</h3>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
            
            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dee2e6'}}>
              <h4 style={{color: '#198754', margin: '0 0 1rem 0'}}>🔧 Aspectos técnicos</h4>
              <ul style={{marginBottom: '1rem'}}>
                <li><strong>Código limpio:</strong> No ralentiza la web</li>
                <li><strong>Compatible:</strong> Funciona con cualquier tema</li>
                <li><strong>Actualizado:</strong> Desarrollo activo y soporte</li>
                <li><strong>Seguro:</strong> Cumple estándares WordPress</li>
              </ul>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dee2e6'}}>
              <h4 style={{color: '#0d6efd', margin: '0 0 1rem 0'}}>💼 Aspectos comerciales</h4>
              <ul style={{marginBottom: '1rem'}}>
                <li><strong>Transparencia:</strong> No hay costos ocultos</li>
                <li><strong>Escalabilidad:</strong> Crece con tu negocio</li>
                <li><strong>ROI inmediato:</strong> Funciona desde día uno</li>
                <li><strong>Profesional:</strong> No parece "plugin gratuito"</li>
              </ul>
            </div>
          </div>

          <TipBox title="💡 Caso de uso típico">
            <p>
              <strong>Escenario:</strong> Una clínica dental necesita reemplazar su sistema telefónico de citas.
            </p>
            <p>
              <strong>Con Simply Schedule Appointments:</strong> En 2 horas tienen un sistema completo donde los 
              pacientes pueden agendar citas online, reciben confirmaciones automáticas, y el personal ve 
              toda la agenda centralizada. Costo: €0.
            </p>
            <p>
              <strong>Con otros plugins:</strong> O pagan €100+ anuales desde el inicio, o usan versiones limitadas 
              que no cumplen las expectativas profesionales del cliente.
            </p>
          </TipBox>

          <h3>Limitaciones de la versión gratuita</h3>
          
          <WarningBox title="🚨 Limitaciones de la versión gratuita (importante conocerlas)">
            <p><strong>Simply Schedule Appointments GRATUITO NO incluye:</strong></p>
            <ul>
              <li>❌ <strong>Pagos online integrados</strong> (pero se puede combinar con WooCommerce o PayPal links)</li>
              <li>❌ <strong>Recordatorios por SMS</strong> (solo email, pero suficiente para la mayoría)</li>
              <li>❌ <strong>Reportes avanzados</strong> (pero sí exporta datos básicos en CSV)</li>
              <li>❌ <strong>Múltiples sucursales</strong> (solo una ubicación, pero equipos múltiples sí)</li>
              <li>❌ <strong>Integraciones premium</strong> (Zoom, Mailchimp, etc. requieren pago)</li>
            </ul>
            <p>
              <strong>Realidad:</strong> El 90% de pequeños negocios NO necesitan estas características para operar exitosamente. 
              <strong>Todo este tutorial se basa en la versión gratuita</strong> y conseguirás un sistema 100% profesional.
            </p>
          </WarningBox>
        </div>
      </section>

      {/* INSTALACIÓN Y CONFIGURACIÓN */}
      <section className="doc doc-section" id="instalacion">
        <h2>Instalación y configuración paso a paso</h2>
        
        <div className="doc-content">
          <p>
            La instalación de Simply Schedule Appointments es directa, pero la configuración inicial 
            requiere atención a los detalles para obtener resultados profesionales.
          </p>

          <h3>Paso 1: Instalación desde WordPress</h3>

          <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0'}}>
            <h4>📝 Proceso de instalación</h4>
            <ol>
              <li>Ve a <strong>Plugins → Añadir nuevo</strong> en tu WordPress</li>
              <li>Busca "<strong>Simply Schedule Appointments</strong>"</li>
              <li>Verifica que el autor sea "<strong>Simplicity Elevated</strong>"</li>
              <li>Haz clic en <strong>Instalar ahora</strong></li>
              <li>Activa el plugin</li>
              <li>WordPress te redirigirá al wizard de configuración inicial</li>
            </ol>
          </div>

          <h3>Paso 2: Configuración inicial (el wizard)</h3>

          <details className="dd">
            <summary>🏢 Configuración del negocio</summary>
            <div className="dd-body">
              <p><strong>Primera pantalla: Información básica</strong></p>
              <ul>
                <li><strong>Business Name:</strong> El nombre que verán los clientes</li>
                <li><strong>Business Address:</strong> Para envios de confirmación</li>
                <li><strong>Time Zone:</strong> ¡Crítico! Debe coincidir con tu ubicación</li>
                <li><strong>Date Format:</strong> Según tu audiencia (DD/MM/YYYY para España)</li>
              </ul>
              
              <div className="callout tip">
                Puedes cambiar estos valores después, pero es mejor definirlos bien desde el inicio 
                para evitar confusiones con clientes que ya agendaron.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>⏰ Configuración de horarios</summary>
            <div className="dd-body">
              <p><strong>Segunda pantalla: Horarios de trabajo</strong></p>
              <ul>
                <li><strong>Working Days:</strong> Marca los días que ofreces servicios</li>
                <li><strong>Working Hours:</strong> Horario de atención (puede ser diferente por día)</li>
                <li><strong>Buffer Time:</strong> Tiempo entre citas (recomendado: 15-30 min)</li>
                <li><strong>Advance Booking:</strong> Con cuánta anticipación pueden reservar</li>
              </ul>
              
              <div className="callout warn">
                <strong>Error común:</strong> No configurar correctamente el buffer time puede generar 
                citas consecutivas sin tiempo para preparación o desplazamiento.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🔧 Configuración de servicios</summary>
            <div className="dd-body">
              <p><strong>Tercera pantalla: Primer servicio</strong></p>
              <ul>
                <li><strong>Service Name:</strong> Nombre descriptivo ("Corte de cabello", "Consulta médica")</li>
                <li><strong>Duration:</strong> Duración realista (incluye preparación y limpieza)</li>
                <li><strong>Price:</strong> Precio si lo deseas mostrar (opcional)</li>
                <li><strong>Description:</strong> Qué incluye el servicio</li>
              </ul>

              <div className="callout tip">
                Inicia con un servicio básico. Puedes añadir más servicios después con configuraciones específicas.
              </div>
            </div>
          </details>

          <h3>Paso 3: Personalización avanzada</h3>

          <p>
            Una vez completado el wizard, accedes al panel de configuración completo donde puedes 
            refinar la experiencia según tu negocio específico.
          </p>

          <details className="dd">
            <summary>🎨 Personalización visual</summary>
            <div className="dd-body">
              <p>En <strong>Simply Schedule Appointments → Styles</strong>:</p>
              
              <h4>Colores y tipografia</h4>
              <ul>
                <li><strong>Primary Color:</strong> Color principal (botones, enlaces)</li>
                <li><strong>Background Color:</strong> Fondo del calendario</li>
                <li><strong>Text Color:</strong> Color del texto</li>
                <li><strong>Font:</strong> Tipografía (recomendado: misma que tu web)</li>
              </ul>

              <h4>Layout y estructura</h4>
              <ul>
                <li><strong>Layout Style:</strong> Clásico vs Moderno</li>
                <li><strong>Calendar View:</strong> Mensual, semanal o lista</li>
                <li><strong>Form Position:</strong> Lado izquierdo, derecho o abajo</li>
              </ul>

              <div className="callout tip">
                <strong>Pro tip:</strong> Usa los colores de tu marca para que el sistema de reservas 
                se integre visualmente con tu web. La coherencia visual aumenta la confianza del cliente.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📧 Configuración de emails</summary>
            <div className="dd-body">
              <p>En <strong>Simply Schedule Appointments → Notifications</strong>:</p>
              
              <h4>Tipos de notificaciones</h4>
              <ul>
                <li><strong>Confirmation Email:</strong> Al cliente cuando agenda</li>
                <li><strong>Admin Notification:</strong> A ti cuando alguien agenda</li>
                <li><strong>Reminder Email:</strong> Recordatorio al cliente (24h antes)</li>
                <li><strong>Cancellation Email:</strong> Cuando se cancela una cita</li>
              </ul>

              <h4>Personalización de contenido</h4>
              <p>Cada email se puede personalizar con:</p>
              <ul>
                <li>Asunto personalizado</li>
                <li>Mensaje con variables dinámicas (nombre, fecha, servicio, etc.)</li>
                <li>Información de contacto adicional</li>
                <li>Logo o imagen de cabecera</li>
              </ul>

              <div className="callout warn">
                <strong>Configuración crítica:</strong> Verifica que los emails lleguen correctamente. 
                Si tu hosting no tiene SMTP configurado, los emails pueden ir a spam.
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* USO PRÁCTICO */}
      <section className="doc doc-section" id="uso-practico">
        <h2>Uso práctico: De la instalación a las primeras reservas</h2>
        
        <div className="doc-content">
          <p>
            Con la configuración básica lista, es hora de integrar el sistema en tu web y 
            obtener las primeras reservas reales.
          </p>

          <h3>Integración en páginas</h3>

          <details className="dd">
            <summary>🔗 Mediante shortcodes</summary>
            <div className="dd-body">
              <p>El método más simple y efectivo:</p>
              
              <h4>Shortcode principal</h4>
              <pre><code>{`[ssa_booking]`}</code></pre>
              
              <p>Este shortcode inserta el calendario completo con formulario de reserva.</p>

              <h4>Shortcodes específicos</h4>
              <ul>
                <li><code>[ssa_booking type="1"]</code> - Solo para un tipo de servicio específico</li>
                <li><code>[ssa_booking staff="john"]</code> - Solo para un empleado específico</li>
                <li><code>[ssa_booking view="calendar"]</code> - Solo vista calendario</li>
              </ul>

              <div className="callout tip">
                La belleza de los shortcodes es que funcionan en cualquier página, entrada, 
                o widget de texto. Maxima flexibilidad con mínimo esfuerzo técnico.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📱 Mediante bloques de Gutenberg</summary>
            <div className="dd-body">
              <p>Para usuarios de Gutenberg (editor de bloques):</p>
              
              <ol>
                <li>En cualquier página/entrada, añade un nuevo bloque</li>
                <li>Busca "Simply Schedule Appointments"</li>
                <li>Selecciona el bloque y configura opciones visualmente</li>
                <li>Preview y publica</li>
              </ol>

              <p><strong>Ventajas del bloque:</strong> Configuración visual más fácil y preview en tiempo real.</p>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Mediante página dedicada</summary>
            <div className="dd-body">
              <p>La estrategia más profesional: crear una página específica para reservas.</p>
              
              <h4>Estructura recomendada</h4>
              <ol>
                <li><strong>Título principal:</strong> "Reserva tu cita"</li>
                <li><strong>Introducción breve:</strong> Qué servicios ofreces</li>
                <li><strong>Instrucciones claras:</strong> "Selecciona fecha y horario disponible"</li>
                <li><strong>El calendario:</strong> <code>[ssa_booking]</code></li>
                <li><strong>Información adicional:</strong> Políticas de cancelación, ubicación, contacto</li>
              </ol>

              <div className="callout tip">
                <strong>SEO tip:</strong> Esta página puede posicionarse para búsquedas como 
                "reservar cita [tu servicio] [tu ciudad]", generando tráfico orgánico de clientes potenciales.
              </div>
            </div>
          </details>

          <h3>Gestión de reservas diarias</h3>

          <details className="dd">
            <summary>📅 Panel de administración</summary>
            <div className="dd-body">
              <p>En <strong>Simply Schedule Appointments → Appointments</strong>:</p>
              
              <h4>Vista general</h4>
              <ul>
                <li><strong>Calendar View:</strong> Ve todas las citas en formato calendario</li>
                <li><strong>List View:</strong> Lista cronológica de próximas citas</li>
                <li><strong>Filter Options:</strong> Por fecha, servicio, estado, etc.</li>
              </ul>

              <h4>Acciones disponibles</h4>
              <ul>
                <li><strong>Confirmar citas:</strong> Cambiar estado a confirmado</li>
                <li><strong>Reagendar:</strong> Mover cita a otro horario</li>
                <li><strong>Cancelar:</strong> Con notificación automática al cliente</li>
                <li><strong>Añadir notas:</strong> Información adicional sobre la cita</li>
              </ul>

              <div className="callout info">
                <strong>Flujo eficiente:</strong> Cada mañana, revisa las citas del día, confirma las pendientes, 
                y prepara lo necesario. Al final del día, revisa las nuevas reservas para el día siguiente.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>👥 Gestión de clientes</summary>
            <div className="dd-body">
              <p>En <strong>Simply Schedule Appointments → Customers</strong>:</p>
              
              <h4>Base de datos automática</h4>
              <p>Cada reserva crea automáticamente un perfil de cliente con:</p>
              <ul>
                <li>Información de contacto</li>
                <li>Historial de citas</li>
                <li>Preferencias de horario</li>
                <li>Notas sobre servicios previos</li>
              </ul>

              <h4>Funcionalidades de CRM básico</h4>
              <ul>
                <li><strong>Buscar clientes:</strong> Por nombre, email, teléfono</li>
                <li><strong>Ver historial:</strong> Todos los servicios recibidos</li>
                <li><strong>Contactar directamente:</strong> Enlaces a email/teléfono</li>
                <li><strong>Agendar nueva cita:</strong> Directamente desde perfil</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* CASOS PRÁCTICOS */}
      <section className="doc doc-section" id="casos-practicos">
        <h2>Casos prácticos por sector</h2>
        
        <div className="doc-content">
          <p>
            Simply Schedule Appointments se adapta a múltiples sectores. Aquí tienes configuraciones 
            específicas para los casos de uso más comunes.
          </p>

          <TipBox title="🔗 Pro tip: Enlazar directamente al calendario desde otras páginas">
            <p>
              <strong>Truco profesional:</strong> Puedes crear botones desde cualquier página que lleven directamente 
              al calendario de reservas usando anclas HTML.
            </p>
            
            <h4>Paso 1: Añadir ID al calendario</h4>
            <p>En la página donde insertaste <code>[ssa_booking]</code>, envuelve el shortcode en un contenedor con ID:</p>
            <pre><code>{`<div id="calendario-reservas">
  [ssa_booking]
</div>`}</code></pre>

            <h4>Paso 2: Crear botones de enlace</h4>
            <p>Desde cualquier página, crea botones que lleven directamente al calendario:</p>
            <pre><code>{`<!-- Botón simple -->
<a href="/reservas/#calendario-reservas" class="btn btn-primary">
  📅 Reservar ahora
</a>

<!-- Botón en Home con estilo WordPress -->
<a href="/reservas/#calendario-reservas" class="wp-block-button__link">
  ¡Reserva tu cita!
</a>`}</code></pre>

            <p>
              <strong>Ventaja:</strong> El usuario llega directamente al calendario, no tiene que buscar el formulario en la página. 
              Esto mejora significativamente la conversión.
            </p>
          </TipBox>

          <details className="dd">
            <summary>💇 Peluquería / Salón de belleza</summary>
            <div className="dd-body">
              <h4>Configuración específica</h4>
              <ul>
                <li><strong>Servicios múltiples:</strong> Corte, coloración, tratamientos</li>
                <li><strong>Duraciones variables:</strong> 30min (corte) hasta 3h (coloración completa)</li>
                <li><strong>Empleados específicos:</strong> Cada estilista con horarios diferentes</li>
                <li><strong>Buffer time:</strong> 15 minutos para limpieza entre clientes</li>
              </ul>

              <h4>Servicios recomendados</h4>
              <ul>
                <li>Corte básico (45min - €25)</li>
                <li>Corte + peinado (90min - €40)</li>
                <li>Coloración completa (180min - €80)</li>
                <li>Tratamiento capilar (60min - €35)</li>
                <li>Peinado evento (120min - €60)</li>
              </ul>

              <div className="callout tip">
                <strong>Pro tip sector:</strong> Configura recordatorios automáticos 24h antes. 
                Los "no-shows" son costosos en peluquerías por el tiempo perdido.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🏥 Consulta médica / Centro de salud</summary>
            <div className="dd-body">
              <h4>Configuración específica</h4>
              <ul>
                <li><strong>Servicios por especialidad:</strong> Medicina general, especialistas</li>
                <li><strong>Horarios estrictos:</strong> Citas puntuales cada 15-20 minutos</li>
                <li><strong>Buffer mínimo:</strong> Tiempo para higienización entre pacientes</li>
                <li><strong>Información adicional:</strong> Campos para síntomas, alergias, etc.</li>
              </ul>

              <h4>Servicios recomendados</h4>
              <ul>
                <li>Consulta medicina general (20min)</li>
                <li>Consulta especialista (30min)</li>
                <li>Revisión rutinaria (15min)</li>
                <li>Análisis/pruebas (45min)</li>
              </ul>

              <div className="callout warn">
                <strong>Consideración médica:</strong> Asegúrate de cumplir con GDPR/LOPD para 
                datos de pacientes. No solicites información médica sensible en el formulario 
                de reserva inicial.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>🍽️ Restaurante</summary>
            <div className="dd-body">
              <h4>Configuración específica</h4>
              <ul>
                <li><strong>Servicios por comida:</strong> Desayuno, almuerzo, cena</li>
                <li><strong>Mesas limitadas:</strong> Usar "staff" para representar mesas</li>
                <li><strong>Duraciones standard:</strong> 90min almuerzo, 120min cena</li>
                <li><strong>Horarios de servicio:</strong> Ventanas específicas de comida</li>
              </ul>

              <h4>Configuración de "empleados" (mesas)</h4>
              <ul>
                <li>Mesa 1 (2 personas)</li>
                <li>Mesa 2 (4 personas)</li>
                <li>Mesa 3 (6 personas) - Solo cenas</li>
                <li>Terraza 1 (4 personas) - Solo buen tiempo</li>
              </ul>

              <div className="callout tip">
                <strong>Hack restaurante:</strong> Usa el campo "service" para diferentes tipos de experiencia 
                (menú ejecutivo, carta completa, menú degustación) con duraciones y precios específicos.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>📚 Consultoría / Coaching</summary>
            <div className="dd-body">
              <h4>Configuración específica</h4>
              <ul>
                <li><strong>Sesiones online/presencial:</strong> Servicios separados</li>
                <li><strong>Paquetes de sesiones:</strong> Descuentos por múltiples citas</li>
                <li><strong>Horarios flexibles:</strong> Incluyendo fines de semana/noches</li>
                <li><strong>Zonas horarias:</strong> Para clientes internacionales</li>
              </ul>

              <h4>Servicios recomendados</h4>
              <ul>
                <li>Sesión inicial (gratis - 30min)</li>
                <li>Sesión individual (60min - €80)</li>
                <li>Sesión seguimiento (45min - €65)</li>
                <li>Workshop grupal (120min - €200)</li>
              </ul>

              <div className="callout info">
                <strong>Estrategia consultoría:</strong> Ofrece la primera sesión gratuita o a precio reducido. 
                Esto reduce la barrera de entrada y permite demostrar valor antes del compromiso económico.
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* OPTIMIZACIÓN Y MEJORES PRÁCTICAS */}
      <section className="doc doc-section" id="optimizacion">
        <h2>Optimización y mejores prácticas</h2>
        
        <div className="doc-content">
          <p>
            Un sistema de reservas instalado es solo el inicio. La optimización continua mejora 
            la experiencia del cliente y la eficiencia operativa.
          </p>

          <h3>Mejores prácticas de configuración</h3>

          <TipBox title="⚡ Rendimiento y velocidad">
            <ul>
              <li><strong>Optimiza imágenes:</strong> Si usas fotos en servicios, mantenlas bajo 100KB</li>
              <li><strong>Cache compatible:</strong> SSA funciona bien con plugins de cache</li>
              <li><strong>Minifica CSS:</strong> Los estilos custom pueden comprimirse</li>
              <li><strong>CDN recomendado:</strong> Para cargas globales más rápidas</li>
            </ul>
          </TipBox>

          <h3>Estrategias para aumentar conversiones</h3>

          <details className="dd">
            <summary>🎯 Optimización de la experiencia de usuario</summary>
            <div className="dd-body">
              <h4>Diseño que convierte</h4>
              <ul>
                <li><strong>Colores contrastantes:</strong> Botones visibles y atractivos</li>
                <li><strong>Instrucciones claras:</strong> "Paso 1: Elige servicio", etc.</li>
                <li><strong>Disponibilidad visible:</strong> Muestra horas disponibles prominentemente</li>
                <li><strong>Información de contacto:</strong> Para dudas o cambios</li>
              </ul>

              <h4>Reducir abandono de reservas</h4>
              <ul>
                <li><strong>Formulario mínimo:</strong> Solo campos esenciales inicialmente</li>
                <li><strong>Confirmación inmediata:</strong> Mensaje de éxito claro</li>
                <li><strong>Email automático:</strong> Confirmación llega en menos de 5 minutos</li>
                <li><strong>Instrucciones post-reserva:</strong> Qué esperar a continuación</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>📊 Métricas y seguimiento</summary>
            <div className="dd-body">
              <h4>KPIs importantes para monitorear</h4>
              <ul>
                <li><strong>Tasa de conversión:</strong> Visitantes que completan reserva</li>
                <li><strong>Abandono por paso:</strong> Dónde pierdes más usuarios</li>
                <li><strong>No-shows:</strong> Porcentaje de citas no cumplidas</li>
                <li><strong>Horarios populares:</strong> Para ajustar disponibilidad</li>
                <li><strong>Servicios más solicitados:</strong> Para enfocar marketing</li>
              </ul>

              <h4>Herramientas de seguimiento</h4>
              <ul>
                <li><strong>Google Analytics:</strong> Eventos personalizados para reservas</li>
                <li><strong>Export de datos SSA:</strong> Análisis manual de patrones</li>
                <li><strong>Surveys post-servicio:</strong> Feedback de experiencia</li>
              </ul>
            </div>
          </details>

          <h3>Integración con otras herramientas</h3>

          <details className="dd">
            <summary>🔗 Integraciones recomendadas</summary>
            <div className="dd-body">
              <h4>Marketing y comunicación</h4>
              <ul>
                <li><strong>Google Calendar:</strong> Sincronización bidireccional incluida</li>
                <li><strong>Mailchimp:</strong> Añadir clientes automáticamente a newsletters</li>
                <li><strong>WhatsApp Business:</strong> Recordatorios por WhatsApp (manual)</li>
                <li><strong>SMS services:</strong> Para recordatorios críticos</li>
              </ul>

              <h4>Pagos y facturación</h4>
              <ul>
                <li><strong>WooCommerce:</strong> Para pagos online (requiere configuración)</li>
                <li><strong>PayPal:</strong> Enlaces directos en emails de confirmación</li>
                <li><strong>Stripe:</strong> Con plugins bridge de terceros</li>
              </ul>

              <div className="callout info">
                <strong>Alternativas gratuitas para pagos:</strong> Aunque la versión gratuita de SSA no incluye pagos integrados, 
                puedes usar PayPal.me links en emails de confirmación, o integrar con WooCommerce (también gratuito) 
                para crear un flujo de pago completo sin costos adicionales.
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* RESOLUCIÓN DE PROBLEMAS */}
      <section className="doc doc-section" id="problemas-comunes">
        <h2>Resolución de problemas comunes</h2>
        
        <div className="doc-content">
          <p>
            Aunque Simply Schedule Appointments es generalmente confiable, aquí tienes soluciones 
            para los problemas más frecuentes que pueden surgir.
          </p>

          <details className="dd">
            <summary>📧 Problemas con emails</summary>
            <div className="dd-body">
              <h4>Los emails de confirmación no llegan</h4>
              <p><strong>Causas comunes:</strong></p>
              <ul>
                <li>SMTP no configurado en el hosting</li>
                <li>Domain reputation pobre</li>
                <li>Filtros de spam demasiado agresivos</li>
              </ul>

              <p><strong>Soluciones:</strong></p>
              <ol>
                <li><strong>Verifica SMTP:</strong> Instala plugin como "Easy WP SMTP"</li>
                <li><strong>Test de emails:</strong> Usa tu propio email para probar</li>
                <li><strong>Revisa spam folders:</strong> Tuyo y de clientes test</li>
                <li><strong>Configura SPF/DKIM:</strong> Con tu provider de hosting</li>
              </ol>

              <div className="callout warn">
                <strong>Crítico:</strong> Los emails son fundamentales para la experiencia del cliente. 
                Si no funcionan consistentemente, considera un servicio SMTP dedicado como SendGrid.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>⏰ Problemas de zona horaria</summary>
            <div className="dd-body">
              <h4>Las horas aparecen incorrectas</h4>
              <p><strong>Pasos para verificar:</strong></p>
              <ol>
                <li>WordPress Settings → General → Timezone</li>
                <li>SSA Settings → Business → Time Zone</li>
                <li>Servidor/hosting timezone configuration</li>
                <li>Browser del cliente timezone</li>
              </ol>

              <p><strong>Configuración recomendada:</strong></p>
              <ul>
                <li>WordPress: UTC+1 (Madrid) para España</li>
                <li>SSA: Europe/Madrid</li>
                <li>Servidor: UTC (deja que WordPress maneje conversiones)</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>🎨 Problemas de diseño</summary>
            <div className="dd-body">
              <h4>El calendario se ve mal en móvil</h4>
              <p><strong>Soluciones CSS:</strong></p>
              <pre><code>{`/* Añadir al CSS del tema */
.ssa-booking-container {
    overflow-x: auto;
    margin: 0 -15px;
    padding: 0 15px;
}

@media (max-width: 768px) {
    .ssa-calendar {
        font-size: 14px;
    }
    
    .ssa-form-group input {
        font-size: 16px; /* Evita zoom en iOS */
    }
}`}</code></pre>

              <h4>Conflictos con el tema</h4>
              <ul>
                <li>Revisa CSS del tema que pueda sobrescribir estilos de SSA</li>
                <li>Usa inspector de elementos para identificar conflictos</li>
                <li>Añade CSS específico con mayor especificidad</li>
              </ul>
            </div>
          </details>

          <details className="dd">
            <summary>🔧 Problemas técnicos</summary>
            <div className="dd-body">
              <h4>El calendar no carga</h4>
              <p><strong>Pasos de diagnóstico:</strong></p>
              <ol>
                <li>Verifica que JavaScript esté habilitado</li>
                <li>Revisa conflictos con otros plugins</li>
                <li>Comprueba versión de WordPress (mínimo requerido)</li>
                <li>Revisa logs de error del servidor</li>
              </ol>

              <h4>Reservas duplicadas</h4>
              <p>Si aparecen reservas duplicadas:</p>
              <ul>
                <li>Verifica que no haya cache agresivo</li>
                <li>Comprueba sincronización con Google Calendar</li>
                <li>Revisa configuración de zona horaria</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ACTIVIDADES PRÁCTICAS */}
      <section className="doc doc-section" id="actividades">
        <h2>Actividades prácticas</h2>
        
        <PracticeBox title="🧪 Actividad 1: Instalación y configuración básica">
          <h3>Objetivo</h3>
          <p>Instalar y configurar Simply Schedule Appointments para un negocio ficticio.</p>
          
          <h3>Escenario</h3>
          <p>
            Eres el desarrollador web de <strong>"Wellness Center Madrid"</strong>, un centro que ofrece:
          </p>
          <ul>
            <li>Masajes relajantes (60 min - €50)</li>
            <li>Fisioterapia (45 min - €40)</li>
            <li>Consultas nutricionales (30 min - €35)</li>
          </ul>

          <h3>Tareas específicas</h3>
          <ol>
            <li>Instala el plugin y completa el wizard inicial</li>
            <li>Configura horarios: L-V 9:00-19:00, S 9:00-14:00</li>
            <li>Crea los tres servicios con duraciones y precios correctos</li>
            <li>Personaliza colores para coincidir con identidad de marca wellness</li>
            <li>Configura emails de confirmación personalizados</li>
            <li>Crea página de reservas e inserta el sistema</li>
            <li>Realiza reserva de prueba y verifica email</li>
          </ol>

          <h3>Entregable</h3>
          <p>URL de la página de reservas funcionando + screenshot de email de confirmación.</p>
        </PracticeBox>

        <PracticeBox title="🧪 Actividad 2: Optimización para conversión">
          <h3>Objetivo</h3>
          <p>Optimizar el sistema para maximizar reservas completadas.</p>
          
          <h3>Tareas de optimización</h3>
          <ol>
            <li><strong>A/B testing de colores:</strong> Prueba 2 esquemas de colores diferentes</li>
            <li><strong>Simplificación de form:</strong> Reduce campos al mínimo esencial</li>
            <li><strong>Mejora de copy:</strong> Escribe descripciones de servicios más persuasivas</li>
            <li><strong>Optimización mobile:</strong> Verifica funcionamiento en 3 dispositivos</li>
            <li><strong>Speed test:</strong> Mide tiempo de carga de página de reservas</li>
            <li><strong>Flujo completo:</strong> Documenta experiencia completa del usuario</li>
          </ol>

          <h3>Métricas a medir</h3>
          <ul>
            <li>Tiempo desde llegada a página hasta reserva completada</li>
            <li>Puntos donde usuarios abandonan el proceso</li>
            <li>Compatibilidad móvil (responsive test)</li>
            <li>Velocidad de carga</li>
          </ul>
        </PracticeBox>

        <ActivityBox title="🎯 Proyecto final: Sistema completo multi-servicio">
          <h3>Briefing del cliente</h3>
          <p>
            <strong>Cliente:</strong> "Academia de Idiomas Global" necesita sistema de reservas para:
          </p>
          
          <h4>Servicios ofrecidos</h4>
          <ul>
            <li><strong>Clases individuales:</strong> 60min, múltiples idiomas, precios variables</li>
            <li><strong>Evaluaciones oficiales:</strong> 90min, horarios específicos</li>
            <li><strong>Workshops grupales:</strong> 120min, fines de semana</li>
            <li><strong>Consultoría empresarial:</strong> 45min, solo entre semana</li>
          </ul>

          <h4>Requerimientos técnicos</h4>
          <ul>
            <li>3 profesores con horarios diferentes</li>
            <li>Idiomas: Inglés, Francés, Alemán, Chino</li>
            <li>Horarios: L-V 9:00-21:00, S 10:00-16:00</li>
            <li>Cancellación hasta 24h antes sin penalización</li>
            <li>Emails en 2 idiomas (ESP/ENG)</li>
          </ul>

          <h4>Entregables del proyecto</h4>
          <ol>
            <li><strong>Sistema funcionando:</strong> Instalación completa configurada</li>
            <li><strong>Documentación:</strong> Manual de uso para administradores</li>
            <li><strong>Training:</strong> Video-tutorial de 10 min para el cliente</li>
            <li><strong>Optimización:</strong> Informe de mejoras implementadas</li>
            <li><strong>Backup:</strong> Plan de mantenimiento y actualizaciones</li>
          </ol>

          <h4>Criterios de evaluación</h4>
          <ul>
            <li><strong>Funcionalidad (40%):</strong> Todo funciona según requisitos</li>
            <li><strong>Experiencia usuario (30%):</strong> Fácil de usar para clientes finales</li>
            <li><strong>Professionalismo (20%):</strong> Apariencia y comunicaciones</li>
            <li><strong>Documentación (10%):</strong> Claridad para mantenimiento futuro</li>
          </ul>
        </ActivityBox>
      </section>

      {/* REPASO Y CHECKLIST */}
      <section className="doc doc-section" id="repaso">
        <h2>Repaso y checklist final 🎓</h2>
        
        <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '12px', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1rem 0', color: 'white'}}>🏆 ¡Felicidades! Has completado el sistema de reservas</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>🔄 Automatización Completa</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Reservas 24/7 sin intervención manual</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>📈 Crecimiento del Negocio</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Más reservas, mejor experiencia</p>
            </div>
            <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', textAlign: 'center'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'white'}}>💰 ROI Inmediato</h4>
              <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>Solución profesional sin costos adicionales</p>
            </div>
          </div>
        </div>
        
        <div style={{background: '#f8f9fa', border: '2px solid #dee2e6', borderRadius: '10px', padding: '1.5rem', margin: '1.5rem 0'}}>
          <h3 style={{margin: '0 0 1.5rem 0', textAlign: 'center'}}>✅ Checklist de implementación exitosa</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start'}}>
            <div>
              <h4 style={{color: '#198754', margin: '0 0 1rem 0'}}>🔧 Configuración técnica</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li>✅ Plugin instalado y activado</li>
                <li>✅ Zona horaria configurada correctamente</li>
                <li>✅ Servicios creados con duraciones reales</li>
                <li>✅ Horarios de trabajo definidos</li>
                <li>✅ Emails de notificación funcionando</li>
                <li>✅ Página de reservas publicada</li>
                <li>✅ Diseño integrado con tema de la web</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{color: '#0d6efd', margin: '0 0 1rem 0'}}>📊 Optimización y mantenance</h4>
              <ul style={{fontSize: '0.9rem', margin: 0}}>
                <li>✅ Testeos en múltiples dispositivos</li>
                <li>✅ Flujo completo de reserva validado</li>
                <li>✅ Métricas de conversión definidas</li>
                <li>✅ Backup y plan de actualizaciones</li>
                <li>✅ Documentación para el cliente</li>
                <li>✅ Procedimientos de gestión diaria</li>
                <li>✅ Plan de crecimiento futuro</li>
              </ul>
            </div>
          </div>
        </div>

        <details className="dd">
          <summary>🎯 Hoja de ruta para dominar sistemas de reservas</summary>
          <div className="dd-body">
            <h4>Próximos pasos recomendados</h4>
            
            <h5>A corto plazo (próximas 2 semanas)</h5>
            <ul>
              <li>Implementa sistema completo en proyecto real</li>
              <li>Documenta mejores prácticas específicas de tu sector</li>
              <li>Experimenta con integraciones (Google Calendar, SMTP)</li>
            </ul>

            <h5>A medio plazo (próximo mes)</h5>
            <ul>
              <li>Analiza métricas de conversión y optimiza</li>
              <li>Explora plugins complementarios (pagos, SMS)</li>
              <li>Desarrolla plantillas personalizadas para diferentes sectores</li>
            </ul>

            <h5>A largo plazo (próximos 3 meses)</h5>
            <ul>
              <li>Considera upgrade a versión premium si el negocio justifica</li>
              <li>Estudia integración con CRMs externos</li>
              <li>Desarrolla expertise en sectores específicos (salud, belleza, etc.)</li>
            </ul>

            <WarningBox>
              <p>
                <strong>Importante:</strong> Mantén actualizados tanto WordPress como el plugin. 
                Programa revisiones mensuales para verificar funcionamiento y optimizar según 
                el uso real del cliente.
              </p>
            </WarningBox>
          </div>
        </details>

        <TipBox>
          <p>
            <strong>¡Enhorabuena!</strong> Has implementado un sistema de reservas profesional que 
            puede transformar la operación de cualquier negocio de servicios. Este conocimiento 
            te posiciona como desarrollador WordPress especializado en soluciones comerciales reales.
          </p>
        </TipBox>

       
      </section>
    </TopicLayout>
  );
}
