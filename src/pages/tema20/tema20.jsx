import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  PracticeBox,
  WarningBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function Tema20Index() {
  return (
    <TopicLayout
      title="M20 · Formularios profesionales en WordPress"
      subtitle="De contacto básico a sistema de conversión: domina SureForms, Contact Form 7 y Fluent Forms con criterio profesional"
    >
      {/* HERO */}
      <header className="doc-hero">
        <div className="doc-kicker">Módulo 20</div>
        <h1>Formularios profesionales en WordPress</h1>
        <p className="doc-lead">
          Domina los formularios como herramienta estratégica de negocio: desde
          la arquitectura técnica hasta la optimización de conversiones. Aprende
          a usar SureForms, Contact Form 7 y Fluent Forms con criterio
          profesional para crear sistemas de captura que realmente funcionen.
        </p>

        <TipBox title="🎯 Objetivo profesional">
          <p>
            Convertir al alumno en especialista en formularios WordPress, capaz
            de diseñar, implementar y optimizar sistemas de captura de leads que
            maximicen la conversión y garanticen la entrega segura de datos.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <div className="doc-index">
        <h2>Contenido del módulo</h2>
        <ol>
          <li>
            <a href="#fundamentos">
              20.1 Fundamentos: arquitectura de formularios profesionales
            </a>
          </li>
          <li>
            <a href="#psicologia-conversion">
              20.2 Psicología de conversión y UX estratégica
            </a>
          </li>
          <li>
            <a href="#comparativa-plugins">20.3 Análisis comparativo de plugins</a>
          </li>
          <li>
            <a href="#sureforms">20.4 SureForms: visual y moderno para Gutenberg</a>
          </li>
          <li>
            <a href="#contact-form-7">
              20.5 Contact Form 7: estándar del mantenimiento
            </a>
          </li>
          <li>
            <a href="#fluent-forms">20.6 Fluent Forms: potencia profesional</a>
          </li>
          <li>
            <a href="#actividad">20.7 Actividad práctica profesional</a>
          </li>
          <li>
            <a href="#repaso">20.8 Checklist final y repaso</a>
          </li>
          <li>
            <a href="#cierre">20.9 Siguiente paso</a>
          </li>
        </ol>
      </div>

      {/* 20.1 FUNDAMENTOS */}
      <section className="doc-section" id="fundamentos">
        <h2>20.1 Fundamentos: Arquitectura de formularios profesionales</h2>

        <details className="dd" open>
          <summary>Definición estratégica más allá del HTML</summary>
          <div className="dd-body">
            <p>
              Un <strong>formulario profesional</strong> no es solo una colección
              de campos HTML. Es el punto crítico donde tu visitante anónimo se
              convierte en <strong>lead identificado</strong>. Es la interfaz
              entre la intención del usuario y el sistema de negocio.
            </p>

            <div className="callout tip">
              <p style={{ margin: 0 }}>
                <strong>🎯 Los 3 niveles de formulario</strong>
              </p>
              <ul>
                <li>
                  <strong>Básico:</strong> contacto simple (nombre, email, mensaje)
                </li>
                <li>
                  <strong>Intermedio:</strong> captura calificada (servicio, presupuesto,
                  urgencia)
                </li>
                <li>
                  <strong>Avanzado:</strong> sistema integrado (CRM, automatización,
                  lead scoring)
                </li>
              </ul>
            </div>

            <h4>🏗️ Arquitectura técnica en WordPress</h4>
            <div className="table-wrap" tabIndex={0} aria-label="Tabla: arquitectura técnica">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Capa</th>
                    <th>Función</th>
                    <th>Tecnología</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Frontend</th>
                    <td>Interfaz de usuario y validación</td>
                    <td>HTML5, CSS, JavaScript</td>
                  </tr>
                  <tr>
                    <th scope="row">Plugin</th>
                    <td>Procesamiento y lógica</td>
                    <td>PHP, hooks de WordPress</td>
                  </tr>
                  <tr>
                    <th scope="row">Entrega</th>
                    <td>Email, base de datos, APIs</td>
                    <td>wp_mail(), MySQL, REST API</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <WarningBox>
              <p>
                <strong>Punto crítico:</strong> El 70% de formularios “rotos” fallan
                en la <strong>capa de entrega</strong>, no en la interfaz. Un formulario
                bonito que no entrega datos es peor que ningún formulario.
              </p>
            </WarningBox>
          </div>
        </details>

        <details className="dd">
          <summary>ROI: Por qué los formularios son inversión, no gasto</summary>
          <div className="dd-body">
            <p>
              Un formulario optimizado puede multiplicar por 3–5 la conversión de
              un sitio web. La diferencia entre un formulario amateur y uno
              profesional se mide en ingresos.
            </p>

            <div className="callout tip">
              <ul>
                <li>
                  <strong>Formulario amateur:</strong> 1–2% de conversión
                </li>
                <li>
                  <strong>Formulario optimizado:</strong> 5–8% de conversión
                </li>
                <li>
                  <strong>Con automatización:</strong> +40% de cierre final
                </li>
              </ul>
            </div>

            <TipBox title="Ejemplo de ROI real">
              <p>
                Web de turismo con 1000 visitas/mes. Formulario malo: 20 leads/mes.
                Formulario optimizado: 60 leads/mes. Si cada lead vale 50€, la
                diferencia es 2000€/mes.
              </p>
            </TipBox>
          </div>
        </details>
      </section>

      {/* 20.2 PSICOLOGÍA / UX */}
      <section className="doc-section" id="psicologia-conversion">
        <h2>20.2 Psicología de conversión y UX estratégica</h2>

        <details className="dd" open>
          <summary>Los 8 pilares de un formulario que convierte</summary>
          <div className="dd-body">
            <div className="table-wrap" tabIndex={0} aria-label="Tabla: pilares de conversión">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Pilar</th>
                    <th>Descripción</th>
                    <th>Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Claridad</th>
                    <td>Se entiende qué pides y para qué</td>
                    <td>+30%</td>
                  </tr>
                  <tr>
                    <th scope="row">Simplicidad</th>
                    <td>Mínimos campos, máximo valor</td>
                    <td>+50%</td>
                  </tr>
                  <tr>
                    <th scope="row">Confianza</th>
                    <td>Privacidad, profesionalidad, anti-spam</td>
                    <td>+25%</td>
                  </tr>
                  <tr>
                    <th scope="row">Velocidad</th>
                    <td>Carga rápida, validación inmediata</td>
                    <td>+20%</td>
                  </tr>
                  <tr>
                    <th scope="row">Motivación</th>
                    <td>CTA claro, beneficios evidentes</td>
                    <td>+40%</td>
                  </tr>
                  <tr>
                    <th scope="row">Entrega</th>
                    <td>Mensaje llega, confirmación visible</td>
                    <td>Crítico</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile</th>
                    <td>Optimizado para dispositivos móviles</td>
                    <td>+60%</td>
                  </tr>
                  <tr>
                    <th scope="row">Seguimiento</th>
                    <td>Analytics, testing, optimización</td>
                    <td>+15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Barreras psicológicas y soluciones profesionales</summary>
          <div className="dd-body">
            <div className="callout warn">
              <p style={{ margin: 0 }}>
                <strong>🚨 Por qué la gente NO rellena formularios</strong>
              </p>
              <ul>
                <li>
                  <strong>Miedo al spam:</strong> “¿Me van a bombardear con emails?”
                </li>
                <li>
                  <strong>Desconfianza:</strong> “¿Qué harán con mis datos?”
                </li>
                <li>
                  <strong>Pereza cognitiva:</strong> “Son demasiados campos”
                </li>
                <li>
                  <strong>Incertidumbre:</strong> “¿Qué pasa después de enviar?”
                </li>
                <li>
                  <strong>Falta de valor percibido:</strong> “¿Qué saco yo de esto?”
                </li>
              </ul>
            </div>

            <TipBox title="Soluciones profesionales">
              <p>
                <strong>Confianza:</strong> texto de privacidad claro y visible.
                <br />
                <strong>Simplicidad:</strong> solo campos esenciales para el objetivo.
                <br />
                <strong>Claridad:</strong> explica el beneficio del usuario.
                <br />
                <strong>Valor:</strong> beneficio inmediato y tangible.
              </p>
            </TipBox>
          </div>
        </details>

        <details className="dd">
          <summary>Errores fatales que matan la conversión</summary>
          <div className="dd-body">
            <div className="table-wrap" tabIndex={0} aria-label="Tabla: errores fatales">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Error</th>
                    <th>Impacto</th>
                    <th>Solución</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Muchos campos obligatorios</th>
                    <td>-70% conversión</td>
                    <td>Solo lo esencial (nombre/email)</td>
                  </tr>
                  <tr>
                    <th scope="row">Botón genérico “Enviar”</th>
                    <td>-30% conversión</td>
                    <td>CTA específico con valor</td>
                  </tr>
                  <tr>
                    <th scope="row">Sin confirmación visible</th>
                    <td>Usuarios confusos</td>
                    <td>Mensaje de éxito + siguiente paso</td>
                  </tr>
                  <tr>
                    <th scope="row">Emails no llegan</th>
                    <td>ROI = 0</td>
                    <td>Pruebas reales + SMTP cuando toque</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>
      </section>

      {/* 20.3 COMPARATIVA */}
      <section className="doc-section" id="comparativa-plugins">
        <h2>20.3 Análisis comparativo de plugins</h2>

        <details className="dd" open>
          <summary>Estrategia de selección profesional</summary>
          <div className="dd-body">
            <p>
              No hay “el mejor” plugin absoluto: hay el mejor{" "}
              <strong>para tu contexto profesional</strong>. La elección depende
              del proyecto, presupuesto, mantenimiento futuro y complejidad requerida.
            </p>

            <div className="table-wrap" tabIndex={0} aria-label="Tabla comparativa de plugins">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Plugin</th>
                    <th>Nivel técnico</th>
                    <th>Constructor</th>
                    <th>Entradas guardadas</th>
                    <th>Anti-spam</th>
                    <th>Ideal para</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">SureForms</th>
                    <td>Inicial–Intermedio</td>
                    <td>Gutenberg nativo</td>
                    <td>Según configuración</td>
                    <td>Sí (básico)</td>
                    <td>Proyectos modernos, desarrollo rápido</td>
                  </tr>
                  <tr>
                    <th scope="row">Contact Form 7</th>
                    <td>Intermedio–Avanzado</td>
                    <td>Sintaxis (markup)</td>
                    <td>No (por defecto)</td>
                    <td>Con extras / ajustes</td>
                    <td>Mantenimiento, webs legacy</td>
                  </tr>
                  <tr>
                    <th scope="row">Fluent Forms</th>
                    <td>Intermedio–Pro</td>
                    <td>Drag &amp; drop avanzado</td>
                    <td>Sí</td>
                    <td>Sí</td>
                    <td>Proyectos escalables, formularios complejos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <TipBox title="Decisión estratégica profesional">
              <p>
                <strong>CF7:</strong> estándar del sector, obligatorio conocer para mantenimiento.
                <br />
                <strong>SureForms:</strong> ideal para proyectos modernos con Gutenberg.
                <br />
                <strong>Fluent Forms:</strong> balance potencia/gratuidad para proyectos profesionales.
              </p>
            </TipBox>
          </div>
        </details>
      </section>

      {/* 20.4 SUREFORMS */}
      <section className="doc-section" id="sureforms">
        <h2>20.4 SureForms: Visual y moderno para Gutenberg</h2>

        <details className="dd" open>
          <summary>Flujo profesional de implementación</summary>
          <div className="dd-body">
            <ol>
              <li>
                <strong>Instalación:</strong> instala y activa SureForms desde el repositorio.
              </li>
              <li>
                <strong>Creación:</strong> crea el formulario desde el panel de SureForms.
              </li>
              <li>
                <strong>Diseño:</strong> añade campos mínimos con el constructor visual.
              </li>
              <li>
                <strong>Configuración:</strong> notificaciones y mensaje de confirmación.
              </li>
              <li>
                <strong>Integración:</strong> inserta el formulario como bloque en una página.
              </li>
            </ol>

            <TipBox title="Ventajas profesionales">
              <p>
                • Integración nativa con Gutenberg
                <br />
                • Interfaz intuitiva para clientes
                <br />
                • Compatible con temas modernos
                <br />
                • Configuración rápida sin código
              </p>
            </TipBox>

            <details className="dd dd-nested">
              <summary>Checklist antes de publicar</summary>
              <div className="dd-body">
                <ul>
                  <li>¿Se entiende el objetivo en 3 segundos?</li>
                  <li>¿Pide solo datos necesarios?</li>
                  <li>¿Mensaje de éxito claro?</li>
                  <li>¿Prueba real de envío + llegada?</li>
                  <li>¿Anti-spam activo?</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 20.5 CF7 */}
      <section className="doc-section" id="contact-form-7">
        <h2>20.5 Contact Form 7: Estándar del mantenimiento</h2>

        <details className="dd" open>
          <summary>Por qué sigue siendo esencial conocerlo</summary>
          <div className="dd-body">
            <p>
              Contact Form 7 está presente en millones de webs WordPress. Para
              profesionales del mantenimiento y desarrollo, es imprescindible
              dominarlo.
            </p>

            <div className="callout warn">
              <p style={{ margin: 0 }}>
                <strong>⚠️ Configuración crítica:</strong> el 80% de problemas con CF7
                están en la configuración de email, no en el formulario. Siempre prueba la entrega.
              </p>
            </div>

            <h4>🔧 Sintaxis básica profesional</h4>
            <pre>
              <code>{`[text* nombre placeholder "Tu nombre"]
[email* email placeholder "Tu email"]
[textarea mensaje placeholder "Cuéntanos qué necesitas"]
[submit "Solicitar información"]`}</code>
            </pre>

            <details className="dd dd-nested">
              <summary>Correo (donde fallan las webs)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Revisa el apartado <strong>Mail</strong>: destinatario, asunto y “From”.
                  </li>
                  <li>
                    Usa un “From” coherente con tu dominio (si no, puede ir a spam).
                  </li>
                  <li>Haz pruebas reales: envío + confirmación + llegada.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 20.6 FLUENT */}
      <section className="doc-section" id="fluent-forms">
        <h2>20.6 Fluent Forms: Potencia profesional</h2>

        <details className="dd" open>
          <summary>Cuándo elegir Fluent Forms en proyectos profesionales</summary>
          <div className="dd-body">
            <p>
              Fluent Forms es la opción cuando quieres un formulario más “app”:
              guardar entradas, filtrar respuestas y mejorar UX. Te permite trabajar
              con mentalidad profesional manteniendo una base muy útil en versión gratuita.
            </p>

            <h4>💼 Casos de uso profesionales</h4>
            <ul>
              <li>
                <strong>Formularios de presupuesto</strong> con opciones y segmentación
              </li>
              <li>
                <strong>Reservas complejas</strong> con campos condicionales
              </li>
              <li>
                <strong>Captación de leads</strong> con trazabilidad (entries)
              </li>
              <li>
                <strong>Formularios de registro</strong> con validaciones avanzadas
              </li>
            </ul>

            <TipBox title="Enseñanza top">
              <p>
                Diferencia entre <strong>enviar email</strong> y <strong>guardar entradas</strong>.
                Un pro quiere trazabilidad: si falla el correo, la entrada queda guardada.
              </p>
            </TipBox>
          </div>
        </details>
      </section>

      {/* 20.7 ACTIVIDAD */}
      <section className="doc-section" id="actividad">
        <h2>20.7 Actividad práctica profesional</h2>

        <PracticeBox>
          <p>
            <strong>Proyecto:</strong> Página “Reserva Ruta” con formulario único reutilizable
            para varias rutas. Objetivo: que el usuario solicite disponibilidad en 3 clics.
          </p>
        </PracticeBox>

        <details className="dd" open>
          <summary>Requisitos mínimos (entregable)</summary>
          <div className="dd-body">
            <ul>
              <li>Crear una página “Reserva Ruta”.</li>
              <li>Insertar un formulario (SureForms o Fluent Forms).</li>
              <li>Campos mínimos: Nombre*, Email*, Ruta (select), Mensaje.</li>
              <li>Botón CTA: “Solicitar disponibilidad”.</li>
              <li>Mensaje de éxito claro + prueba de llegada al email.</li>
            </ul>

            <ActivityBox title="Extra (pro)">
              <p>
                Añade un texto de privacidad breve debajo del botón (1–2 líneas)
                y revisa que sea legible y no genere miedo.
              </p>
            </ActivityBox>
          </div>
        </details>

        <details className="dd">
          <summary>Rúbrica rápida (cómo lo evaluamos)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>UX:</strong> claridad, pocos campos, CTA concreto.
              </li>
              <li>
                <strong>Entrega:</strong> llega el email y hay confirmación.
              </li>
              <li>
                <strong>Calidad:</strong> etiquetas, placeholders, orden y coherencia.
              </li>
              <li>
                <strong>Profesionalidad:</strong> texto de privacidad + anti-spam activo.
              </li>
            </ul>
          </div>
        </details>
      </section>

      {/* 20.8 REPASO */}
      <section className="doc-section" id="repaso">
        <h2>20.8 Checklist final y repaso</h2>

        <details className="dd" open>
          <summary>Checklist profesional antes de publicar</summary>
          <div className="dd-body">
            <ul>
              <li>He probado envío real (mínimo 2 veces).</li>
              <li>El correo llega y no cae en spam.</li>
              <li>El usuario ve confirmación clara.</li>
              <li>El formulario pide solo lo necesario.</li>
              <li>Hay anti-spam activo.</li>
              <li>El botón usa un CTA específico (no “Enviar”).</li>
            </ul>

            <TipBox>
              <p>
                Si tus alumnos se llevan esto, están trabajando como profesionales:{" "}
                <strong>formularios = conversión + entrega</strong>.
              </p>
            </TipBox>
          </div>
        </details>

        <details className="dd">
          <summary>Preguntas rápidas (para clase)</summary>
          <div className="dd-body">
            <ol>
              <li>¿Qué hace que un formulario “convierta” mejor?</li>
              <li>¿Por qué es importante CF7 en mantenimiento?</li>
              <li>¿Qué ventaja pro tiene guardar entradas además de mandar email?</li>
              <li>¿Qué error típico provoca “no llegan los mensajes”?</li>
            </ol>
          </div>
        </details>
      </section>

      {/* 20.9 CIERRE */}
      <div className="doc-hero" id="cierre" style={{ marginTop: "1.2rem" }}>
        <p className="doc-kicker">Siguiente paso</p>
        <h2 style={{ margin: 0 }}>Integración en páginas de Rutas + CTA y conversión</h2>
        <p className="doc-lead">
          En la siguiente lección conectamos el formulario con el flujo real del sitio:
          tarjetas de rutas → detalle de ruta → “Reservar” → formulario (o sistema de reservas).
        </p>

        <TipBox>
          <p>
            <strong>Checklist:</strong> (1) formulario con intención, (2) entrega verificada,
            (3) anti-spam, (4) CTA claro.
          </p>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#fundamentos">
            Volver al inicio
          </a>
        </div>
      </div>
    </TopicLayout>
  );
}