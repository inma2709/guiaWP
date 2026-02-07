import TopicLayout from "../../components/TopicLayout";
import {
  ActivityBox,
  PracticeBox,
  TipBox,
  WarningBox,
  CodeBlock,
} from "../../components/ContentBoxes";

export default function Tema0Index() {
  return (
    <TopicLayout
      title="M0 · Introducción a WordPress"
      subtitle="Qué es WordPress, por qué se usa tanto y qué aprenderás en este manual."
    >
      <div className="doc">
        <div className="doc-hero">
          <div className="doc-kicker">Módulo 0</div>
          <h1>Introducción a WordPress</h1>
          <p className="doc-lead">
            Qué es WordPress, por qué se usa tanto y qué aprenderás en este manual
          </p>
        </div>

        <div className="doc-index">
          <h2>Contenido del módulo</h2>
          <ol>
            <li><a href="#que-es-wordpress">¿Qué es WordPress?</a></li>
            <li><a href="#por-que-elegir">¿Por qué elegir WordPress?</a></li>
            <li><a href="#tipos-wordpress">WordPress.org vs WordPress.com</a></li>
            <li><a href="#que-aprenderas">¿Qué aprenderás en este manual?</a></li>
            <li><a href="#prerequisitos">Prerequisitos y preparación</a></li>
          </ol>
        </div>

        <section className="doc-section" id="que-es-wordpress">
          <h2>0.1 ¿Qué es WordPress?</h2>
          
          <p>
            <strong>WordPress es un gestor de contenidos (CMS)</strong>, es decir,
            una herramienta que permite crear y gestionar páginas web
            <strong> sin necesidad de programar desde cero</strong>.
          </p>

          <p>
            Con WordPress puedes crear desde un blog personal hasta una web
            profesional completa, una tienda online o una plataforma educativa.
          </p>
          </section>

          <TipBox title="Idea clave">
            <p>
              WordPress no sustituye a la programación, pero
              <strong> facilita enormemente</strong> la creación de webs
              funcionales, escalables y mantenibles.
            </p>
          </TipBox>

          <ActivityBox title="Reflexiona">
            <p>
              Piensa en tres webs que visites habitualmente. ¿Crees que podrían
              estar hechas con WordPress? ¿Por qué?
            </p>
          </ActivityBox>
        </div>
     

      {/* 0.2 ¿Por qué WordPress es tan popular? */}
      <details className="topic-details">
        <summary>
          <span className="summary-left">
            <span className="badge">0.2</span> ¿Por qué WordPress es tan popular?
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <ul>
            <li>Es <strong>software libre</strong> y gratuito.</li>
            <li>Tiene una comunidad enorme.</li>
            <li>Existen miles de <strong>temas</strong> y <strong>plugins</strong>.</li>
            <li>Se adapta tanto a principiantes como a profesionales.</li>
            <li>Permite crecer: empezar simple y añadir complejidad después.</li>
          </ul>

          <TipBox title="Dato interesante">
            <p>
              Más del 40% de las webs del mundo usan WordPress en alguna de sus
              formas.
            </p>
          </TipBox>
        </div>
      </details>

      {/* 0.3 WordPress.com vs WordPress.org */}
      <details className="topic-details">
        <summary>
          <span className="summary-left">
            <span className="badge">0.3</span> WordPress.com vs WordPress.org
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p>
            Es muy importante entender que existen{" "}
            <strong>dos “WordPress” distintos</strong>.
          </p>

          <h4>🟦 WordPress.com</h4>
          <ul>
            <li>Servicio online (no instalas nada).</li>
            <li>Más limitado.</li>
            <li>Ideal para proyectos muy simples.</li>
          </ul>

          <h4>🟩 WordPress.org</h4>
          <ul>
            <li>Software que instalas tú.</li>
            <li>Control total sobre la web.</li>
            <li>Es el que se usa a nivel profesional.</li>
          </ul>

          <WarningBox title="Muy importante">
            <p>
              En este manual trabajaremos <strong>exclusivamente con WordPress.org</strong>,
              que es el que se usa en entornos profesionales y laborales.
            </p>
          </WarningBox>
        </div>
      </details>

      {/* 0.4 Qué vas a aprender en este manual */}
      <details className="topic-details">
        <summary>
          <span className="summary-left">
            <span className="badge">0.4</span> ¿Qué vas a aprender aquí?
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <p>
            A lo largo de este manual aprenderás a crear una web con WordPress
            <strong> paso a paso y con sentido</strong>.
          </p>

          <ul>
            <li>Instalar WordPress en local con LocalWP.</li>
            <li>Usar el panel de administración con seguridad.</li>
            <li>Trabajar con temas y plugins.</li>
            <li>Crear una web completa y funcional.</li>
            <li>Preparar una web para subirla a Internet.</li>
          </ul>

          <TipBox title="Cómo trabajar este manual">
            <p>
              No corras. Lee, prueba, equivócate y vuelve atrás. WordPress se
              aprende <strong>tocando</strong>.
            </p>
          </TipBox>
        </div>
      </details>

      {/* 0.5 Metodología */}
      <details className="topic-details">
        <summary>
          <span className="summary-left">
            <span className="badge">0.5</span> Metodología del manual
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <ul>
            <li>Explicaciones claras y progresivas.</li>
            <li>Ejemplos reales.</li>
            <li>Prácticas guiadas.</li>
            <li>Errores comunes explicados.</li>
            <li>Checklist final en cada módulo.</li>
          </ul>

          <PracticeBox title="Antes de continuar">
            <p>
              Asegúrate de que entiendes qué es WordPress y por qué lo vamos a
              usar. No pasa nada si aún no lo ves todo claro: iremos paso a paso.
            </p>
          </PracticeBox>
        </div>
      </details>

      {/* Checklist final */}
      <details className="topic-details">
        <summary>
          <span className="summary-left">
            <span className="badge">✔</span> Checklist del módulo 0
          </span>
          <span className="chev" aria-hidden="true">⌄</span>
        </summary>

        <div className="topic-details__content">
          <ul>
            <li>☑ Sé qué es WordPress.</li>
            <li>☑ Distingo WordPress.com y WordPress.org.</li>
            <li>☑ Entiendo qué aprenderé en este manual.</li>
            <li>☑ Estoy preparado/a para empezar con el entorno local.</li>
          </ul>
        </div>
      </details>
    </TopicLayout>
  );
}
