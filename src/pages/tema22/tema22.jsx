import React from "react";
import TopicLayout from "../../components/TopicLayout";
import { TipBox, WarningBox, PracticeBox, ActivityBox } from "../../components/ContentBoxes";

export default function Tema22LoginClienteWordPress() {
  return (
    <TopicLayout>
      <div className="doc">
        {/* HERO */}
        <header className="doc doc-hero">
          <p className="kicker">UF1841 · WordPress · Experiencia de Usuario</p>
          <h1>Sistema de Login de Cliente · Manual completo</h1>
          <p className="lead">
            Aprende a crear un sistema completo de autenticación y área de cliente en WordPress.
            Desde la planificación hasta la implementación, incluyendo registro, login, perfiles y áreas privadas.
          </p>

          <TipBox title="🎯 Objetivo de este tema">
            <p>
              <strong>Al finalizar dominarás:</strong> Implementar un sistema profesional donde los clientes
              se registren, accedan y gestionen su información sin tocar el admin de WordPress.
            </p>
            <p>
              <strong>Tiempo estimado:</strong> 3 horas · <strong>Nivel:</strong> Intermedio
            </p>
            <p>
              <strong>Requisitos previos:</strong> <a href="/tema4">Temas en WordPress (M4)</a> y conocimientos de shortcodes
            </p>
          </TipBox>

          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "2rem",
              borderRadius: "12px",
              margin: "1.5rem 0",
            }}
          >
            <h3 style={{ margin: "0 0 1rem 0", color: "white" }}>🚀 Sistema completo que construiremos</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "white" }}>👤 Registro de Clientes</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Formulario público sin admin</p>
              </div>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "white" }}>🔐 Área de Usuario</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Perfil, datos y reservas</p>
              </div>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "white" }}>🎨 UX Integrada</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Menús dinámicos y navegación</p>
              </div>
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.1)", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "white" }}>📅 Área de Reservas</h4>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Base para futuras integraciones</p>
              </div>
            </div>
          </div>
        </header>

        {/* ÍNDICE */}
        <nav className="doc doc-index" aria-label="Índice de la lección">
          <a href="#fundamentos">1) Fundamentos: ¿Por qué necesitas login de cliente?</a>
          <a href="#herramientas">2) Herramientas: Plugins que resuelven login de cliente</a>
          <a href="#ultimate-member">3) Ultimate Member: Nuestra elección y justificación</a>
          <a href="#instalacion">4) Implementación paso a paso</a>
          <a href="#menu-saludo">5) Saludo en el menú + enlace Login/Logout</a>
          <a href="#perfil-rutas">6) Perfil “Rutas reservadas” (placeholder)</a>
          <a href="#practica">7) Práctica final</a>
        </nav>

        {/* 1 */}
        <section className="doc-section" id="fundamentos">
          <h2>1) Fundamentos: ¿Por qué necesitas login de cliente?</h2>

          <details className="dd" >
            <summary>🤔 Escenarios donde necesitas área de cliente</summary>
            <div className="dd-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
                <div style={{ padding: "1rem", border: "3px solid #28a745", borderRadius: "8px", background: "#f8fff9" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#28a745" }}>🏪 Tiendas Online</h4>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Historial de pedidos</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Lista de deseos</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Direcciones guardadas</p>
                </div>
                <div style={{ padding: "1rem", border: "3px solid #007bff", borderRadius: "8px", background: "#f8fcff" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#007bff" }}>🎓 Plataformas Educativas</h4>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Progreso de cursos</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Certificados</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Materiales descargables</p>
                </div>
                <div style={{ padding: "1rem", border: "3px solid #fd7e14", borderRadius: "8px", background: "#fff8f3" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "#fd7e14" }}>🚶 Servicios de Tours</h4>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Reservas activas</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Historial de paseos</p>
                  <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>✅ Preferencias personales</p>
                </div>
              </div>

              <div className="callout info">
                <h4>🎯 Nuestro caso práctico: Sistema de paseos turísticos</h4>
                <p>
                  <strong>Necesidad del cliente:</strong> "Quiero que mis usuarios se registren y vean sus reservas sin tener acceso al admin"
                </p>
                <ul>
                  <li>
                    👤 <strong>Registro público:</strong> Sin intervención manual
                  </li>
                  <li>
                    📋 <strong>Área personal:</strong> Ver reservas y datos
                  </li>
                  <li>
                    🔄 <strong>Gestión autónoma:</strong> Cambiar contraseña, actualizar datos
                  </li>
                  <li>
                    🚫 <strong>Sin acceso admin:</strong> Mantener seguridad del sitio
                  </li>
                </ul>
              </div>
            </div>
          </details>

          <details className="dd" >
            <summary>⚖️ WordPress básico vs Sistema de login cliente</summary>
            <div className="dd-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", margin: "1.5rem 0" }}>
                <div style={{ border: "3px solid #dc3545", borderRadius: "10px", padding: "1.5rem", background: "#fff5f5" }}>
                  <h4 style={{ color: "#dc3545", margin: "0 0 1rem 0" }}>❌ WordPress sin área cliente</h4>
                  <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                    <li>🔴 Usuarios van al admin (/wp-admin/)</li>
                    <li>🔴 Ven dashboard de WordPress</li>
                    <li>🔴 Pueden tocar configuraciones</li>
                    <li>🔴 Interfaz confusa para clientes</li>
                    <li>🔴 Riesgo de seguridad</li>
                    <li>🔴 No hay experiencia de marca</li>
                  </ul>
                </div>

                <div style={{ border: "3px solid #28a745", borderRadius: "10px", padding: "1.5rem", background: "#f8fff9" }}>
                  <h4 style={{ color: "#28a745", margin: "0 0 1rem 0" }}>✅ Con área cliente personalizada</h4>
                  <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                    <li>🟢 Login en el frontend del sitio</li>
                    <li>🟢 Área personalizada con tu diseño</li>
                    <li>🟢 Solo ven lo que necesitan</li>
                    <li>🟢 Interfaz intuitiva y simple</li>
                    <li>🟢 Admin protegido</li>
                    <li>🟢 Experiencia consistente con tu marca</li>
                  </ul>
                </div>
              </div>

              <TipBox title="🏗️ Filosofía del área cliente">
                <p>
                  <strong>Principio fundamental:</strong> El cliente nunca debería ver el admin de WordPress
                </p>
                <p>Su experiencia debe ser:</p>
                <ol>
                  <li>
                    📱 <strong>Familiar:</strong> Como cualquier app que usan diariamente
                  </li>
                  <li>
                    🎯 <strong>Específica:</strong> Solo funciones que realmente necesitan
                  </li>
                  <li>
                    🎨 <strong>Coherente:</strong> Mismo diseño que el resto del sitio
                  </li>
                </ol>
              </TipBox>
            </div>
          </details>

          <ActivityBox title="🤔 Test de comprensión: ¿Necesitas área cliente?">
            <p>Evalúa estos proyectos. ¿Cuáles necesitarían sistema de login cliente?</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
              <div style={{ padding: "1rem", background: "#fff3cd", borderRadius: "8px", border: "2px solid #ffc107" }}>
                <h4 style={{ color: "#856404", margin: "0 0 0.5rem 0" }}>🤔 Casos a evaluar</h4>
                <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                  <li>🏢 Web corporativa con información de empresa</li>
                  <li>🛒 Tienda online con WooCommerce</li>
                  <li>📰 Blog personal de un escritor</li>
                  <li>🏥 Clínica médica con citas online</li>
                  <li>🎭 Web de eventos con venta de entradas</li>
                  <li>📚 Biblioteca con catálogo público</li>
                  <li>🏋️ Gimnasio con clases y horarios</li>
                </ul>
              </div>
              <div style={{ padding: "1rem", background: "#d1ecf1", borderRadius: "8px", border: "2px solid #bee5eb" }}>
                <h4 style={{ color: "#0c5460", margin: "0 0 0.5rem 0" }}>📏 Regla de decisión</h4>
                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", margin: "0.5rem 0" }}>
                  <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold", color: "#28a745" }}>✅ SÍ necesita área cliente cuando:</p>
                  <ul style={{ margin: 0, fontSize: "0.85rem" }}>
                    <li>
                      <strong>Datos personales</strong> que el usuario debe ver
                    </li>
                    <li>
                      <strong>Historial o estado</strong> de servicios
                    </li>
                    <li>
                      <strong>Gestión de reservas/pedidos</strong>
                    </li>
                    <li>
                      <strong>Personalización</strong> de la experiencia
                    </li>
                  </ul>
                </div>
                <div style={{ background: "#f8d7da", padding: "0.75rem", borderRadius: "6px" }}>
                  <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold", color: "#721c24" }}>❌ NO necesita cuando:</p>
                  <ul style={{ margin: 0, fontSize: "0.85rem" }}>
                    <li>
                      <strong>Solo información</strong> estática
                    </li>
                    <li>
                      <strong>No hay interacción</strong> personal
                    </li>
                    <li>
                      <strong>Un formulario contacto</strong> es suficiente
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <details className="dd" style={{ marginTop: "1rem" }}>
              <summary>👆 Ver respuestas correctas</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    🏢 <strong>Web corporativa:</strong> ❌ Solo información, no necesita área cliente
                  </li>
                  <li>
                    🛒 <strong>Tienda online:</strong> ✅ Historial de pedidos, lista de deseos
                  </li>
                  <li>
                    📰 <strong>Blog personal:</strong> ❌ Contenido público, comentarios suficientes
                  </li>
                  <li>
                    🏥 <strong>Clínica médica:</strong> ✅ Historial médico, próximas citas
                  </li>
                  <li>
                    🎭 <strong>Eventos con entradas:</strong> ✅ Entradas compradas, próximos eventos
                  </li>
                  <li>
                    📚 <strong>Biblioteca:</strong> ❌ Catálogo público, no gestión personal
                  </li>
                  <li>
                    🏋️ <strong>Gimnasio:</strong> ✅ Clases reservadas, rutinas personalizadas
                  </li>
                </ul>
              </div>
            </details>
          </ActivityBox>
        </section>

        {/* 2 */}
        <section className="doc-section" id="herramientas">
          <h2>2) Herramientas: Plugins que resuelven login de cliente</h2>

          <details className="dd" >
            <summary>🧭 Mapa de soluciones disponibles</summary>
            <div className="dd-body">
              <div
                style={{
                  background: "#f8f9fa",
                  border: "2px solid #dee2e6",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  margin: "1rem 0",
                }}
              >
                <h4 style={{ margin: "0 0 1rem 0", color: "#495057" }}>🎯 Nuestra necesidad específica</h4>
                <p style={{ margin: "0 0 1rem 0", fontSize: "0.95rem" }}>
                  No queremos una "red social" ni un "marketplace". Necesitamos <strong>área cliente profesional</strong>:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                  <div style={{ background: "#e7f3ff", padding: "0.75rem", borderRadius: "6px", textAlign: "center" }}>
                    <strong>📝 Registro</strong>
                    <br />
                    <small>Frontend, sencillo</small>
                  </div>
                  <div style={{ background: "#f0f9ff", padding: "0.75rem", borderRadius: "6px", textAlign: "center" }}>
                    <strong>🔐 Login</strong>
                    <br />
                    <small>Sin ir a /wp-admin/</small>
                  </div>
                  <div style={{ background: "#f8fff9", padding: "0.75rem", borderRadius: "6px", textAlign: "center" }}>
                    <strong>👤 Perfil</strong>
                    <br />
                    <small>Datos + funciones cliente</small>
                  </div>
                </div>
              </div>
            </div>
          </details>

          <div className="table-wrap" tabIndex={0} aria-label="Comparativa de plugins de login y perfiles">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Plugin</th>
                  <th>Qué resuelve bien</th>
                  <th>En free, ojo con…</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Ultimate Member</strong>
                  </td>
                  <td>Registro, login, perfil/cuenta, roles y shortcodes muy directos.</td>
                  <td>Extras “social” y automatizaciones avanzadas suelen ser add-ons.</td>
                </tr>
                <tr>
                  <td>WP User Manager</td>
                  <td>Perfiles + formularios de login/registro, enfoque modular.</td>
                  <td>Algunas piezas avanzadas suelen ir por add-ons.</td>
                </tr>
                <tr>
                  <td>UsersWP</td>
                  <td>Ligero, perfiles + login/registro, buena integración con maquetadores.</td>
                  <td>Parte del ecosistema funciona por extensiones.</td>
                </tr>
                <tr>
                  <td>User Registration (WPEverest)</td>
                  <td>Registro/login muy sólido con shortcodes.</td>
                  <td>Perfil “tipo comunidad” suele requerir configuración/add-ons.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox>
            <p>
              Para el proyecto “Paseos / Rutas”, el objetivo no es una red social. Queremos un <strong>área cliente</strong> simple, limpia y usable.
            </p>
          </TipBox>

          <ActivityBox title="🎯 Test de decisión: ¿Qué plugin usar?">
            <p>Analiza estos escenarios y decide qué plugin recomendarías:</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
              <div style={{ background: "#f8f9fa", border: "2px solid #dee2e6", borderRadius: "8px", padding: "1rem" }}>
                <h4 style={{ color: "#495057", margin: "0 0 0.75rem 0" }}>📋 Casos reales</h4>

                <div
                  style={{
                    background: "white",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    marginBottom: "0.75rem",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <strong>Caso A:</strong> Tienda de ropa online
                  <br />
                  <small>Necesita: registro rápido, perfil con pedidos, newsletter</small>
                </div>

                <div
                  style={{
                    background: "white",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    marginBottom: "0.75rem",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <strong>Caso B:</strong> Academia de programación
                  <br />
                  <small>Necesita: cursos por nivel, tracking progreso, certificados</small>
                </div>

                <div
                  style={{
                    background: "white",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    marginBottom: "0.75rem",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <strong>Caso C:</strong> Consultora B2B
                  <br />
                  <small>Necesita: área cliente con documentos, minimal design</small>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}>
                  <strong>Caso D:</strong> Startup tech con presupuesto
                  <br />
                  <small>Necesita: login con Google/GitHub, dashboard custom</small>
                </div>
              </div>

              <div style={{ background: "#e7f3ff", border: "2px solid #0066cc", borderRadius: "8px", padding: "1rem" }}>
                <h4 style={{ color: "#0066cc", margin: "0 0 0.75rem 0" }}>🎯 Criterios de decisión</h4>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#28a745", margin: "0 0 0.25rem 0" }}>Ultimate Member ✅</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Casos A, B, C: solución completa out-of-the-box</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#6f42c1", margin: "0 0 0.25rem 0" }}>WP User Manager 🔧</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Caso B (academia): mayor flexibilidad en campos</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#fd7e14", margin: "0 0 0.25rem 0" }}>UsersWP 🏃‍♂️</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Caso C (consultora): sitio rápido y minimalista</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px" }}>
                  <h6 style={{ color: "#dc3545", margin: "0 0 0.25rem 0" }}>Desarrollo custom 💻</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Caso D (startup): OAuth y dashboard específico</p>
                </div>
              </div>
            </div>

            <div className="callout info">
              <p>
                <strong>📚 Para nuestro tutorial:</strong> Usaremos Ultimate Member porque cubre todos los fundamentos que necesitas aprender, y luego puedes migrar a soluciones específicas si tu proyecto requiere más complejidad.
              </p>
            </div>
          </ActivityBox>
        </section>

        {/* 3 */}
        <section className="doc-section" id="ultimate-member">
          <h2>3) Ultimate Member: Nuestra elección y justificación</h2>

          <details className="dd" >
            <summary>🎯 ¿Por qué Ultimate Member es perfecto para empezar?</summary>
            <div className="dd-body">
              <div style={{ background: "#f8fff9", border: "3px solid #28a745", borderRadius: "10px", padding: "1.5rem", margin: "1rem 0" }}>
                <h4 style={{ color: "#28a745", margin: "0 0 1rem 0" }}>🏆 La fórmula ganadora</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <h5 style={{ color: "#155724", margin: "0 0 0.5rem 0" }}>✅ Qué incluye GRATIS</h5>
                    <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                      <li>
                        <strong>Frontend login/registro</strong> completo
                      </li>
                      <li>
                        <strong>Perfiles personalizables</strong> con campos
                      </li>
                      <li>
                        <strong>Shortcodes</strong> plug-and-play
                      </li>
                      <li>
                        <strong>Roles y permisos</strong> granulares
                      </li>
                      <li>
                        <strong>Integración con themes</strong> automática
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ color: "#155724", margin: "0 0 0.5rem 0" }}>🎯 Por qué es ideal para login cliente</h5>
                    <ul style={{ margin: 0, fontSize: "0.9rem" }}>
                      <li>
                        <strong>Cero código:</strong> Todo funciona con shortcodes
                      </li>
                      <li>
                        <strong>Separación clara:</strong> Frontend vs backend
                      </li>
                      <li>
                        <strong>Escalable:</strong> De básico a complejo
                      </li>
                      <li>
                        <strong>Documentación:</strong> Amplia comunidad
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="callout tip">
                <h4>🧠 Filosofía de Ultimate Member</h4>
                <p>
                  <strong>Principio:</strong> "El usuario nunca debe ver /wp-admin/ si no es administrador"
                </p>
                <p>Esto resuelve exactamente nuestro problema: <strong>área cliente profesional</strong> sin acceso al backend</p>
              </div>
            </div>
          </details>

          <details className="dd" >
            <summary>🔧 Así se integra en tu sitio web</summary>
            <div className="dd-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
                <div style={{ background: "#e7f3ff", border: "2px solid #007bff", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                  <h4 style={{ color: "#007bff", margin: "0 0 0.75rem 0" }}>1️⃣ Páginas automáticas</h4>
                  <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>
                    Login, registro y perfil se crean automáticamente con shortcodes
                  </p>
                  <code style={{ background: "#f8f9fa", padding: "0.25rem", borderRadius: "3px", fontSize: "0.8rem" }}>
                    [ultimatemember form_id="login"]
                  </code>
                </div>

                <div style={{ background: "#f0f9ff", border: "2px solid #0ea5e9", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                  <h4 style={{ color: "#0ea5e9", margin: "0 0 0.75rem 0" }}>2️⃣ Menús inteligentes</h4>
                  <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>
                    Enlaces que cambian según el estado del usuario
                  </p>
                  <div style={{ fontSize: "0.8rem" }}>
                    <p style={{ margin: "0.25rem 0" }}>👤 No logueado: "Iniciar sesión"</p>
                    <p style={{ margin: "0.25rem 0" }}>✅ Logueado: "Hola, María"</p>
                  </div>
                </div>

                <div style={{ background: "#f8fff9", border: "2px solid #10b981", borderRadius: "8px", padding: "1rem", textAlign: "center" }}>
                  <h4 style={{ color: "#10b981", margin: "0 0 0.75rem 0" }}>3️⃣ Protección simplificada</h4>
                  <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>
                    Páginas privadas con un checkbox
                  </p>
                  <div style={{ fontSize: "0.8rem", background: "#f8f9fa", padding: "0.5rem", borderRadius: "4px" }}>
                    ☑️ "Solo usuarios logueados"
                  </div>
                </div>
              </div>

              <WarningBox title="🚨 Importante para proyectos reales">
                <p>
                  <strong>Ultimate Member es la base:</strong> Funciona perfecto para login/registro/perfil
                </p>
                <p>Para funciones específicas (reservas, pagos, etc.) se integra con otros plugins:</p>
                <ul style={{ margin: "0.5rem 0 0 1rem" }}>
                  <li>
                    <strong>WooCommerce:</strong> Para tiendas online
                  </li>
                  <li>
                    <strong>Amelia/BookingPress:</strong> Para reservas
                  </li>
                  <li>
                    <strong>LearnDash/Tutor:</strong> Para cursos online
                  </li>
                  <li>
                    <strong>Custom fields:</strong> Para datos específicos del negocio
                  </li>
                </ul>
              </WarningBox>
            </div>
          </details>

          <ActivityBox title="🧪 Análisis de viabilidad">
            <p>Evalúa si Ultimate Member es la solución correcta para estos proyectos:</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
              <div style={{ background: "#f8f9fa", border: "2px solid #dee2e6", borderRadius: "8px", padding: "1rem" }}>
                <h4 style={{ color: "#495057", margin: "0 0 0.75rem 0" }}>🤔 Casos a evaluar</h4>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem", border: "1px solid #dee2e6" }}>
                  <strong>Proyecto 1:</strong> Veterinaria online
                  <br />
                  <small>Necesita: citas, historiales mascotas, recordatorios vacunas</small>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem", border: "1px solid #dee2e6" }}>
                  <strong>Proyecto 2:</strong> Sitio de freelancers
                  <br />
                  <small>Necesita: portfolios públicos, mensajería, rating</small>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem", border: "1px solid #dee2e6" }}>
                  <strong>Proyecto 3:</strong> Empresa de catering
                  <br />
                  <small>Necesita: área cliente simple, ver pedidos, contacto</small>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}>
                  <strong>Proyecto 4:</strong> Startup fintech
                  <br />
                  <small>Necesita: dashboard complejo, APIs, 2FA</small>
                </div>
              </div>

              <div style={{ background: "#e7f3ff", border: "2px solid #0066cc", borderRadius: "8px", padding: "1rem" }}>
                <h4 style={{ color: "#0066cc", margin: "0 0 0.75rem 0" }}>✅ Análisis de viabilidad</h4>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#28a745", margin: "0 0 0.25rem 0" }}>Proyecto 1: ✅ VIABLE</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>UM + plugin de citas (Amelia) + campos personalizados</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#ffc107", margin: "0 0 0.25rem 0" }}>Proyecto 2: ⚠️ PARCIAL</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>UM para login, pero necesita plugins sociales avanzados</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.75rem" }}>
                  <h6 style={{ color: "#28a745", margin: "0 0 0.25rem 0" }}>Proyecto 3: ✅ PERFECTO</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Caso ideal para UM. Simple, efectivo, rápido</p>
                </div>

                <div style={{ background: "white", padding: "0.75rem", borderRadius: "6px" }}>
                  <h6 style={{ color: "#dc3545", margin: "0 0 0.25rem 0" }}>Proyecto 4: ❌ NO VIABLE</h6>
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Necesita desarrollo custom desde cero</p>
                </div>
              </div>
            </div>

            <div className="callout info">
              <p>
                <strong>🎯 Regla de oro:</strong> Si necesitas más del 70% de funciones custom, considera desarrollo específico. Si necesitas menos del 30%, Ultimate Member es perfecto.
              </p>
            </div>
          </ActivityBox>
        </section>

        {/* 4 */}
        <section className="doc-section" id="instalacion">
          <h2>4. Implementación paso a paso</h2>

          <details className="dd" >
            <summary>4.1 Instalar y activar</summary>
            <div className="dd-body">
              <ol>
                <li>Plugins → Añadir nuevo</li>
                <li>
                  Buscar: <strong>Ultimate Member</strong>
                </li>
                <li>Instalar → Activar</li>
              </ol>

              <TipBox>
                <p>
                  Ultimate Member se apoya mucho en <strong>shortcodes</strong> para mostrar formularios y perfiles.
                </p>
              </TipBox>
            </div>
          </details>

          <details className="dd" >
            <summary>4.2 Crear páginas del área cliente (login, registro, perfil)</summary>
            <div className="dd-body">
              <p>Crea estas páginas (Páginas → Añadir nueva). Los nombres son orientativos, lo importante es la función:</p>

              <div className="table-wrap" tabIndex={0} aria-label="Páginas recomendadas para área cliente">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Página</th>
                      <th>Slug sugerido</th>
                      <th>Contenido</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acceder</td>
                      <td>
                        <code>login</code>
                      </td>
                      <td>Bloque Shortcode con el shortcode de login de Ultimate Member</td>
                    </tr>
                    <tr>
                      <td>Registro</td>
                      <td>
                        <code>registro</code>
                      </td>
                      <td>Bloque Shortcode con el shortcode de registro</td>
                    </tr>
                    <tr>
                      <td>Mi Perfil</td>
                      <td>
                        <code>mi-perfil</code>
                      </td>
                      <td>Bloque Shortcode con el shortcode de perfil/cuenta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="callout tip">
                Usa el bloque <strong>“Shortcode”</strong> (no “HTML personalizado”) para pegar los shortcodes: es más limpio y evita errores.
              </div>

              <p>
                Los shortcodes exactos dependen de la configuración/IDs de formularios de Ultimate Member, pero la idea es:{" "}
                <strong>login</strong>, <strong>registro</strong> y <strong>perfil</strong> mediante shortcodes.
              </p>
            </div>
          </details>
        </section>

        {/* 5 */}
        <section className="doc-section" id="menu-saludo">
          <h2>5. Saludo en el menú + enlace Login/Logout</h2>

          <TipBox>
            <p>Esto eleva mucho la sensación de “área cliente”: el menú cambia según si hay sesión iniciada.</p>
          </TipBox>

          <details className="dd" >
            <summary>5.1 Añadir enlaces al menú (sin código)</summary>
            <div className="dd-body">
              <ol>
                <li>Apariencia → Menús</li>
                <li>
                  Añadir las páginas: <strong>Acceder</strong>, <strong>Registro</strong>, <strong>Mi Perfil</strong>
                </li>
                <li>Guardar menú</li>
              </ol>

              <div className="callout warn">
                El enlace de “Cerrar sesión” normalmente se gestiona con el plugin o con un enlace personalizado. Si tu plugin no te lo da directo, se puede resolver con un pequeño snippet.
              </div>
            </div>
          </details>

          <details className="dd" >
            <summary>5.2 Saludo “Hola, Nombre” con un snippet (tema hijo)</summary>
            <div className="dd-body">
              <p>
                Añade este código en el tema hijo para insertar un ítem de menú con saludo (y opcionalmente Login/Logout). Es compatible con Astra porque se engancha al filtro de WordPress del menú.
              </p>

              <p className="ps-muted">
                Ruta: <code>/wp-content/themes/tu-tema-hijo/functions.php</code>
              </p>

              <pre>
                <code>{`/**
 * Menú: saludo + link login/logout
 * Ajusta 'menu-principal' por el slug/ubicación real si lo necesitas.
 */
add_filter('wp_nav_menu_items', function($items, $args){

  // Opcional: limita a una ubicación concreta
  // if ($args->theme_location !== 'menu-principal') return $items;

  if ( is_user_logged_in() ) {
    $u = wp_get_current_user();
    $name = $u->display_name ? $u->display_name : $u->user_login;

    // Saludo (sin enlace)
    $items .= '<li class="menu-item menu-item--greeting"><span class="nav-greeting">Hola, ' . esc_html($name) . '</span></li>';

    // Logout (enlace)
    $items .= '<li class="menu-item"><a href="' . esc_url( wp_logout_url( home_url('/') ) ) . '">Cerrar sesión</a></li>';

  } else {
    // Login (enlace a tu página)
    $items .= '<li class="menu-item"><a href="' . esc_url( home_url('/login/') ) . '">Acceder</a></li>';
  }

  return $items;
}, 10, 2);`}</code>
              </pre>

              <div className="callout tip">El saludo usa el <code>display_name</code> del usuario, que es el nombre más “humano”.</div>

              <details className="dd">
                <summary>CSS opcional para que el saludo quede integrado</summary>
                <div className="dd-body">
                  <pre>
                    <code>{`.menu-item--greeting .nav-greeting{
  display:inline-flex;
  align-items:center;
  padding:.45rem .75rem;
  border-radius:999px;
  background: rgba(216,164,76,.18);
  border:1px solid rgba(216,164,76,.35);
  font-weight:700;
}`}</code>
                  </pre>
                </div>
              </details>
            </div>
          </details>
        </section>

        {/* 6 */}
        <section className="doc-section" id="perfil-rutas">
          <h2>6. Perfil “Rutas reservadas” (placeholder)</h2>

          <p>
            Para preparar el área cliente, crea una sección visible “Rutas reservadas”. De momento estará vacía, pero el contenedor/estructura existe.
          </p>

          <details className="dd" >
            <summary>Opción simple: sección fija dentro de “Mi Perfil”</summary>
            <div className="dd-body">
              <p>
                En la página <strong>Mi Perfil</strong>, además del shortcode del perfil, añade un bloque “Grupo/Contenedor” con este contenido:
              </p>

              <pre>
                <code>{`<h2>Rutas reservadas</h2>
<p>Aquí aparecerán las reservas asociadas a esta cuenta.</p>
<p><em>Actualmente no hay reservas.</em></p>`}</code>
              </pre>

              <div className="callout tip">
                Más adelante, esta sección se conectará con el sistema de reservas <strong>Simply Schedule Appointments</strong> 
                para listar reservas por usuario. SSA permite mostrar las citas de un cliente específico usando shortcodes 
                como <code>[ssa_customer_panel]</code> o mediante integración con Ultimate Member. 
                Ahora se deja preparada la UX y la arquitectura.
              </div>
              
              <div className="callout info">
                <p><strong>Implementación futura con Simply Schedule Appointments:</strong></p>
                <ul>
                  <li><strong>Shortcode directo:</strong> <code>[ssa_customer_panel]</code> muestra las citas del usuario logueado</li>
                  <li><strong>Integración UM + SSA:</strong> Los datos se sincronizan automáticamente por ID de usuario</li>
                  <li><strong>Personalización:</strong> Se puede filtrar por estado (próximas, pasadas, canceladas)</li>
                </ul>
              </div>
            </div>
          </details>
        </section>

        {/* 7 */}
        <section className="doc-section" id="practica">
          <h2>7. Práctica final</h2>

          <PracticeBox>
            <h3>Checklist de implementación</h3>
            <ol>
              <li>Instalar y activar <strong>Ultimate Member</strong>.</li>
              <li>
                Crear páginas: <strong>Login</strong>, <strong>Registro</strong>, <strong>Mi Perfil</strong>.
              </li>
              <li>Insertar los shortcodes correspondientes en cada página.</li>
              <li>Añadir páginas al menú (Acceder / Registro / Mi Perfil).</li>
              <li>
                Implementar el snippet del <strong>saludo en menú</strong> (Hola, Nombre + Cerrar sesión).
              </li>
              <li>En “Mi Perfil”, añadir el bloque “Rutas reservadas” (placeholder).</li>
            </ol>
          </PracticeBox>

          <ActivityBox>
            <h3>Actividad de calidad</h3>
            <ul>
              <li>Probar el flujo completo: Registro → Login → Ver “Mi Perfil” → Logout → Login de nuevo.</li>
              <li>Comprobar que el menú cambia en función de la sesión.</li>
              <li>
                Revisar que <strong>no se muestra el escritorio</strong> como parte del flujo habitual del cliente.
              </li>
            </ul>
          </ActivityBox>
        </section>

        {/* CIERRE */}
        <div className="doc-hero">
          <h2>Cierre</h2>
          <p className="lead">
            Con esto queda montada una base sólida de “área cliente”. El siguiente salto será conectar “Rutas reservadas” con el sistema de reservas para que el perfil muestre datos reales.
          </p>

          <TipBox>
            <p>
              Si la web ya tiene CPT + plantillas, un login de cliente es el complemento perfecto: convierte el sitio en un sistema con usuarios, no solo una web informativa.
            </p>
          </TipBox>

          <div className="doc-next">
            <a className="btn btn-primary" href="#fundamentos">
              Repasar el Tema 22
            </a>
          </div>
        </div>
      </div>
    </TopicLayout>
  );
}