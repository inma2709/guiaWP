import TopicLayout from "../../components/TopicLayout";
import { TipBox, ActivityBox } from "../../components/ContentBoxes";

export default function EjerciciosIndex() {
  return (
    <TopicLayout
      title="Ejercicios Prácticos"
      subtitle="Pon en práctica todo lo aprendido con ejercicios guiados paso a paso"
    >
      <div className="doc">
        {/* HERO */}
        <div className="doc-hero">
          <div className="doc-kicker">Sección práctica</div>
          <h1>Ejercicios del curso</h1>
          <p className="doc-lead">
            Aquí encontrarás ejercicios prácticos para aplicar los conceptos aprendidos en cada módulo.
            Cada ejercicio incluye instrucciones paso a paso y criterios de evaluación.
          </p>
        </div>

        {/* LISTA DE EJERCICIOS */}
        <section className="doc-section">
          <h2>Ejercicios disponibles</h2>

          <div className="exercise-grid">
            <div className="exercise-card">
              <h3>
                <a href="/ejercicios/contenedores">Ejercicio 1: Contenedores</a>
              </h3>
              <p>
                Practica el diseño de contenedores profesionales aplicando padding, sombras, 
                border-radius y layouts flexibles.
              </p>
              <div className="exercise-meta">
                <span className="difficulty">⭐ Intermedio</span>
                <span className="duration">⏱️ 20-30 min</span>
              </div>
            </div>

            {/* Placeholder para futuros ejercicios */}
            <div className="exercise-card coming-soon">
              <h3>Ejercicio 2: Próximamente</h3>
              <p>Más ejercicios se agregarán conforme avances en el curso.</p>
              <div className="exercise-meta">
                <span className="status">🚧 En desarrollo</span>
              </div>
            </div>
          </div>
        </section>

        <TipBox title="📚 Cómo usar los ejercicios">
          <ul>
            <li><strong>Sigue el orden:</strong> Cada ejercicio refuerza conceptos de módulos específicos</li>
            <li><strong>Tómate tu tiempo:</strong> Es mejor entender bien que terminar rápido</li>
            <li><strong>Experimenta:</strong> Prueba variaciones una vez completado el ejercicio base</li>
            <li><strong>Guarda tu trabajo:</strong> Usa patrones para reutilizar tus creaciones</li>
          </ul>
        </TipBox>

        <ActivityBox title="🎯 Objetivos de los ejercicios">
          <ul>
            <li>Aplicar teoría en proyectos reales</li>
            <li>Desarrollar músculo memoria para flujos de trabajo</li>
            <li>Identificar y resolver problemas comunes</li>
            <li>Crear un portafolio de componentes reutilizables</li>
          </ul>
        </ActivityBox>
      </div>

      <style jsx>{`
        .exercise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .exercise-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.5rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .exercise-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .exercise-card.coming-soon {
          opacity: 0.6;
          border-style: dashed;
        }

        .exercise-card h3 {
          margin: 0 0 0.5rem 0;
          color: #1a202c;
        }

        .exercise-card h3 a {
          text-decoration: none;
          color: inherit;
        }

        .exercise-card h3 a:hover {
          color: #3182ce;
        }

        .exercise-card p {
          margin: 0 0 1rem 0;
          color: #4a5568;
          line-height: 1.5;
        }

        .exercise-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .exercise-meta span {
          display: inline-flex;
          align-items: center;
          font-size: 0.875rem;
          color: #718096;
        }
      `}</style>
    </TopicLayout>
  );
}