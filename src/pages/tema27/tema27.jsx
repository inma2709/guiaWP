import React from "react";
import TopicLayout from "../../components/TopicLayout";
import {
  TipBox,
  WarningBox,
  PracticeBox,
  ActivityBox,
} from "../../components/ContentBoxes";

export default function TemaWP_SubirProyectoAGitHub() {
  return (
    <TopicLayout>
      {/* HERO */}
      <header className="doc doc-hero">
        <p className="doc-kicker"> · WordPress · Profesionalización</p>
        <h1>Cómo subir tu proyecto WordPress a GitHub (con .gitignore + README)</h1>
        <p className="doc-lead">
          En este tema aprenderás a <strong>versionar y publicar</strong> tu proyecto WordPress de forma profesional:
          qué carpetas se suben, qué se ignora, cómo documentar el proyecto y cómo incluir capturas en el README.
        </p>

        <TipBox title="🎯 Objetivo del tema">
          <p>
            Dejar el proyecto listo para portfolio: repositorio limpio, reproducible y bien documentado.
          </p>
          <p>
            Incluye nuestro caso real: <strong>CPT “Paseos”</strong>, plantilla <code>single-paseo.php</code>,
            listado automático (<code>archive-paseo.php</code> o página plantilla), estilos independientes encolados
            y plugins: <strong>Simply Schedule Appointments</strong>, <strong>GTranslate</strong>,{" "}
            <strong>Click to Chat (WhatsApp)</strong> y <strong>Ultimate Member</strong>.
          </p>
        </TipBox>
      </header>

      {/* ÍNDICE */}
      <section className="doc-index" aria-label="Índice del tema">
        <h2>Contenido</h2>
        <ol>
          <li><a href="#que-es-git">Qué es Git y qué aporta a WordPress</a></li>
          <li><a href="#que-subir">Qué se sube a GitHub y qué NO</a></li>
          <li><a href="#estructura-repo">Estructura recomendada del repositorio</a></li>
          <li><a href="#gitignore">Crear el .gitignore (WordPress + seguridad)</a></li>
          <li><a href="#readme">Crear un README profesional (plantilla completa)</a></li>
          <li><a href="#pantallazos">Dónde guardar pantallazos para el README</a></li>
          <li><a href="#subir-a-github">Cómo subirlo a GitHub (paso a paso)</a></li>
          <li><a href="#checklist">Checklist final + errores típicos</a></li>
          <li><a href="#practica">Práctica evaluable</a></li>
        </ol>
      </section>

      {/* SECCIÓN 1 */}
      <section id="que-es-git" className="doc-section">
        <h2>1) Qué es Git y qué aporta a WordPress</h2>

        <details className="dd" open>
          <summary>Idea clave (en 20 segundos)</summary>
          <div className="dd-body">
            <p>
              <strong>Git</strong> guarda el historial de cambios del proyecto. <strong>GitHub</strong> lo publica
              en la nube para colaborar, evaluar y mostrar portfolio.
            </p>
            <ul>
              <li>Te protege contra “rompí el tema y no sé volver atrás”.</li>
              <li>Permite trabajar por versiones (ramas) y revisar cambios (commits).</li>
              <li>Te obliga a profesionalizar estructura, seguridad y documentación.</li>
            </ul>
          </div>
        </details>

        <TipBox title="📌 En WordPress, Git NO es para todo">
          <p>
            WordPress tiene mucho “ruido” (core, cachés, subidas). Git se usa para lo que <strong>desarrollas</strong>:
            tema hijo, plantillas, CSS/JS, ajustes en <code>functions.php</code>, y (si aplica) plugins propios.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 2 */}
      <section id="que-subir" className="doc-section">
        <h2>2) Qué se sube a GitHub y qué NO</h2>

        <details className="dd" open>
          <summary>✅ Lo que SÍ se sube (nuestro proyecto)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Tema hijo</strong>: <code>wp-content/themes/tu-tema-hijo/</code>
                <ul>
                  <li>Plantillas: <code>single-paseo.php</code>, <code>archive-paseo.php</code>, etc.</li>
                  <li><code>functions.php</code>: encolado de CSS/JS, hooks esenciales.</li>
                  <li>CSS independientes: <code>/assets/css/...</code> (y su enqueue).</li>
                </ul>
              </li>
              <li>
                <strong>Configuración del proyecto</strong> para reproducir:
                <ul>
                  <li><code>README.md</code> con pasos de instalación.</li>
                  <li><code>.gitignore</code> bien hecho.</li>
                  <li>Opcional: <code>.env.example</code> (si usas variables; nunca el .env real).</li>
                </ul>
              </li>
              <li>
                <strong>Documentación</strong>: <code>/docs/</code> con capturas y notas técnicas.
              </li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>❌ Lo que NO se sube (por seguridad y tamaño)</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Core de WordPress</strong>: <code>wp-admin/</code>, <code>wp-includes/</code>.
              </li>
              <li>
                <strong>Configuración sensible</strong>: <code>wp-config.php</code> (contiene claves/DB).
              </li>
              <li>
                <strong>Base de datos</strong> real (usuarios, pedidos, datos personales).
                <ul>
                  <li>Si necesitas demo: export “vacía” o datos ficticios.</li>
                </ul>
              </li>
              <li>
                <strong>Uploads</strong>: <code>wp-content/uploads/</code> (pesado y cambia mucho).
                <ul>
                  <li>En su lugar: sube 4–8 imágenes de ejemplo en <code>/docs/img/</code>.</li>
                </ul>
              </li>
              <li>
                Cachés y temporales: <code>wp-content/cache/</code>, <code>upgrade/</code>, logs.
              </li>
            </ul>
          </div>
        </details>

        <WarningBox title="⚠️ Regla de oro">
          <p>
            GitHub es público (o puede serlo). Si subes <code>wp-config.php</code> o credenciales, es un incidente real.
            Se considera fallo grave en evaluación.
          </p>
        </WarningBox>
      </section>

      {/* SECCIÓN 3 */}
      <section id="estructura-repo" className="doc-section">
        <h2>3) Estructura recomendada del repositorio</h2>

        <details className="dd" open>
          <summary>Estructura “portfolio” (la más limpia)</summary>
          <div className="dd-body">
            <p>
              Esta estructura evita subir todo WordPress y deja claro qué has construido:
            </p>
            <pre><code>{`/ (repo)
├─ README.md
├─ .gitignore
├─ docs/
│  ├─ img/               # capturas para el README
│  └─ notas/             # opcional: decisiones técnicas
└─ wp-content/
   └─ themes/
      └─ tu-tema-hijo/
         ├─ style.css
         ├─ functions.php
         ├─ single-paseo.php
         ├─ archive-paseo.php
         └─ assets/
            ├─ css/
            └─ js/`}</code></pre>
          </div>
        </details>

        <TipBox title="🧠 Por qué esta estructura funciona">
          <p>
            Porque el evaluador/empresa puede ver <strong>tu código real</strong> sin ruido. Y cualquiera puede
            recrear un WordPress limpio e instalar tu tema hijo.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 4 */}
      <section id="gitignore" className="doc-section">
        <h2>4) Crear el .gitignore (WordPress + seguridad)</h2>

        <details className="dd" open>
          <summary>Paso a paso (rápido)</summary>
          <div className="dd-body">
            <ol>
              <li>En la raíz del archivo crea un archivo llamado <code>.gitignore</code></li>
              <li>Pega la plantilla base (abajo).</li>
                <li>Asegúrate de que incluye:
                    <ul>
                        <li><code>wp-config.php</code> (seguridad)</li>
                        <li><code>wp-content/uploads/</code> (tamaño y ruido)</li>
                        <li><code>wp-admin/</code> y <code>wp-includes/</code> (core no relevante)</li>
                    </ul>
                </li>
              <li>Guarda el archivo. Git ya ignorará esos archivos/carpetas.</li>
              
            </ol>
          </div>
        </details>

        <PracticeBox title="📌 Plantilla .gitignore recomendada (cópiala tal cual)">
          <pre><code>{`# ==========================
# WordPress (portfolio repo)
# ==========================

# Core WordPress (si tu repo tuviera WP completo)
wp-admin/
wp-includes/

# Seguridad: nunca subir config real
wp-config.php
.env
.env.*
*.key
*.pem

# Uploads (pesado y cambiante)
wp-content/uploads/

# Cachés y temporales
wp-content/cache/
wp-content/upgrade/
wp-content/backup*/
wp-content/backups*/
*.log

# Dependencias (si aplicara en tools)
node_modules/
vendor/

# OS / Editor
.DS_Store
Thumbs.db
.vscode/
.idea/

# Paquetes
*.zip
*.tar
*.gz`}</code></pre>
        </PracticeBox>

      </section>

      {/* SECCIÓN 5 */}
      <section id="readme" className="doc-section">
        <h2>5) Crear un README profesional </h2>

        <details className="dd" open>
          <summary>Qué debe tener </summary>
          <div className="dd-body">
            <ul>
              <li>Descripción breve del proyecto + objetivo.</li>
              <li>Funcionalidades (CPT Paseos, reservas, WhatsApp, login/miembro, traducción).</li>
              <li>Stack y plugins usados.</li>
              <li>Estructura del repo.</li>
              <li>Cómo instalar en local (pasos reproducibles).</li>
              <li>Capturas (pantallazos) y enlaces.</li>
                <li>Recuerda que esta va a ser tu tarjeta de presentación así que pon en valor todo lo que has puesto en práctica.</li>
            </ul>
          </div>
        </details>

<PracticeBox title="📌 Plantilla README.md (cópiala y personaliza a tu gusto y experiencia)">
  <p>Para quince minutos y reflexiona sobre cómo presentar tu proyecto de la mejor manera.</p>

  <pre><code>{`# Paseando por Sevilla — Web de reservas de paseos (WordPress)

Este proyecto consiste en el desarrollo de una página web turística construida con WordPress que permite mostrar diferentes paseos por Sevilla y facilitar su reserva por parte de los usuarios.

El objetivo del proyecto ha sido aprender a utilizar WordPress como un CMS personalizado, creando tipos de contenido propios, plantillas específicas y funcionalidades adicionales mediante plugins.

Además, este proyecto forma parte de mi aprendizaje como desarrollador web y ha sido pensado también como parte de mi portfolio profesional.

---

# ¿Qué hace este proyecto?

La web permite:

- Mostrar diferentes paseos turísticos organizados en una estructura clara.
- Visualizar cada paseo en una página propia con información detallada.
- Listar automáticamente todos los paseos disponibles.
- Reservar cada paseo mediante un sistema de reservas integrado.
- Traducir la página a varios idiomas.
- Contactar directamente con la empresa mediante WhatsApp.
- Permitir acceso de usuarios mediante sistema de login.

---

# Tecnologías y herramientas utilizadas

## CMS

WordPress

## Lenguajes

PHP  
HTML  
CSS  

## Plugins utilizados

| Plugin | Función |
|---|---|
| Simply Schedule Appointments | Sistema de reservas para cada paseo |
| GTranslate | Traducción automática a varios idiomas |
| Click to Chat | Botón de contacto directo con WhatsApp |
| Ultimate Member | Sistema de registro y login de usuarios |

---

# Conceptos técnicos aplicados

Durante el desarrollo del proyecto se han puesto en práctica varios conceptos importantes de WordPress:

- Creación de Custom Post Types (CPT) para gestionar los paseos.
- Uso de la jerarquía de plantillas de WordPress.
- Creación de plantillas personalizadas como \`single-paseo.php\`.
- Generación automática de listados de contenido.
- Encolado de archivos CSS independientes desde \`functions.php\`.
- Uso básico de hooks de WordPress.
- Integración de diferentes plugins para ampliar funcionalidades.

Estos conceptos me han permitido comprender mejor cómo WordPress puede transformarse en un CMS flexible y adaptable a diferentes proyectos.

---

# Capturas del proyecto

## Página principal

![Home](docs/img/home.png)

## Listado automático de paseos

![Listado de paseos](docs/img/listado-paseos.png)

## Página de reserva de paseo

![Reserva paseo](docs/img/reserva.png)

---

# Estructura del proyecto

La estructura principal del repositorio es la siguiente:

\`\`\`
paseos-wordpress/
├─ README.md
├─ .gitignore
├─ docs/
│  └─ img/
│     ├─ home.png
│     ├─ listado-paseos.png
│     └─ reserva.png
└─ wp-content/
   └─ themes/
      └─ tema-hijo/
         ├─ style.css
         ├─ functions.php
         ├─ single-paseo.php
         ├─ archive-paseo.php
         └─ assets/
            └─ css/
\`\`\`

---

# Instalación del proyecto

Para probar el proyecto en local se pueden seguir los siguientes pasos:

1. Instalar WordPress en local (por ejemplo con LocalWP, XAMPP o MAMP).

2. Copiar el tema hijo dentro de la carpeta \`wp-content/themes/\`.

3. Activar el tema desde el panel de administración de WordPress.

4. Instalar y activar los plugins utilizados en el proyecto:

- Simply Schedule Appointments
- GTranslate
- Click to Chat
- Ultimate Member

5. Crear varios paseos de prueba para comprobar el funcionamiento del listado y las plantillas.

---

# Aprendizaje y retos del proyecto

Este proyecto ha supuesto un paso importante en mi aprendizaje de WordPress.

Uno de los principales retos fue entender cómo funciona la jerarquía de plantillas de WordPress y cómo crear una plantilla personalizada para mostrar cada paseo.

También tuve que aprender a:

- Encolar correctamente archivos CSS desde \`functions.php\`
- Crear un Custom Post Type para organizar el contenido
- Generar un listado automático de los paseos
- Integrar diferentes plugins sin que generaran conflictos

Durante el desarrollo cometí varios errores, especialmente al principio con las rutas de las plantillas y el encolado de estilos, pero poco a poco fui entendiendo mejor cómo funciona la estructura interna de WordPress.

Este proyecto me ayudó a comprender que WordPress no es solo un gestor de contenidos, sino una plataforma que puede adaptarse a muchos tipos de proyectos web.

---

# Mejoras futuras

Si continuara desarrollando este proyecto, me gustaría añadir algunas mejoras:

- Implementar un sistema de pago online para las reservas.
- Añadir filtros para buscar paseos por categoría o zona.
- Crear un panel de usuario donde ver reservas realizadas.
- Mejorar el diseño responsive para móviles.
- Optimizar el rendimiento de carga de la página.

---

# Conclusión

Este proyecto me ha permitido comprender cómo desarrollar una web funcional con WordPress combinando código propio y plugins.

Gracias a la creación de Custom Post Types, plantillas personalizadas y la integración de diferentes herramientas, he conseguido construir una web usable y preparada para mostrar contenido turístico de forma clara.

Además, este proyecto representa un paso más en mi aprendizaje como desarrollador web y en la construcción de mi portfolio profesional.
`}</code></pre>
</PracticeBox>
        <TipBox title="✅ Truco de profe: README que puntúa alto">
          <p>
            Si añades una sección “Decisiones técnicas” y explicas 3 decisiones (por ejemplo: por qué encolamos CSS,
            por qué ignoramos uploads y cómo resolvimos el listado automático), el README sube mucho de nivel.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 6 */}
      <section id="pantallazos" className="doc-section">
        <h2>6) Dónde guardar pantallazos para el README</h2>

        <details className="dd" open>
          <summary>Carpeta estándar</summary>
          <div className="dd-body">
            <p>
              Crea esta ruta en la raíz del repo:
            </p>
            <pre><code>{`/docs/img/`}</code></pre>
            <p>
              Guarda ahí tus capturas con nombres claros:
            </p>
            <ul>
              <li><code>home.png</code></li>
              <li><code>listado-paseos.png</code></li>
              <li><code>single-paseo-reserva.png</code></li>
              <li><code>login-um.png</code></li>
            </ul>
            <p>
              Luego las enlazas desde el README así:
              <code>![Texto](docs/img/archivo.png)</code>
            </p>
          </div>
        </details>

        <WarningBox title="⚠️ Tamaño de imágenes">
          <p>
            Evita capturas gigantes. Recomendación: ancho 1400–1800px, formato PNG, y si pesa mucho, comprime antes
            (siempre sin perder legibilidad).
          </p>
        </WarningBox>

        <WarningBox title="⚠️ Errores que hacen que un README parezca de principiante">

<p>
Un README es la primera impresión de tu proyecto. Muchos proyectos buenos parecen poco profesionales
porque su documentación tiene errores básicos. Evita los siguientes.
</p>

<ul>

<li>
<strong>1️⃣ No explicar qué hace el proyecto.</strong><br/>
Un error muy común es comenzar directamente con el código o con las tecnologías usadas.
El lector debe entender en pocos segundos <em>para qué sirve la aplicación</em>.
Si alguien entra en tu repositorio y no entiende el objetivo del proyecto, lo abandonará rápidamente.
</li>

<br/>

<li>
<strong>2️⃣ No incluir imágenes del proyecto.</strong><br/>
Un README sin capturas obliga al lector a imaginar cómo funciona la aplicación.
Siempre es recomendable mostrar al menos:
<ul>
<li>la página principal</li>
<li>una funcionalidad importante</li>
<li>una vista interna de la aplicación</li>
</ul>
Las imágenes ayudan a comprender el proyecto en segundos.
</li>

<br/>

<li>
<strong>3️⃣ No explicar cómo ejecutar el proyecto.</strong><br/>
Un repositorio profesional siempre incluye una sección de instalación.
Si alguien clona tu repositorio pero no sabe cómo probar la aplicación,
el proyecto pierde valor aunque el código sea bueno.
</li>

<br/>

<li>
<strong>4️⃣ No explicar qué has aprendido o qué problemas resolviste.</strong><br/>
El README no solo describe el código, también muestra tu evolución como desarrollador.
Explicar los retos que encontraste demuestra pensamiento técnico y capacidad de aprendizaje.
</li>

<br/>

<li>
<strong>5️⃣ No proponer mejoras futuras.</strong><br/>
Un proyecto profesional siempre deja abierta la posibilidad de evolución.
Incluir una sección de mejoras demuestra que entiendes las limitaciones actuales
y que sabes cómo podría crecer el proyecto.
</li>

</ul>

<p>
Un buen README no solo documenta el proyecto: demuestra que sabes comunicar,
reflexionar sobre tu trabajo y presentar tu código de forma profesional.
</p>

</WarningBox>
      </section>

      {/* SECCIÓN 7 */}
      <section id="subir-a-github" className="doc-section">
        <h2>7) Cómo subirlo a tu GitHub (paso a paso)</h2>

      <details className="dd" open>
  <summary>Workflow estándar para subir tu proyecto a GitHub</summary>

  <div className="dd-body">

  <p>
  Para subir tu proyecto a GitHub debes ejecutar los comandos desde la 
  <strong>carpeta raíz del proyecto</strong>.
  </p>

  <p>
  En este proyecto WordPress la carpeta raíz es <code>public</code>, porque dentro de ella
  se encuentran las carpetas principales de WordPress:
  </p>

<pre><code>{`public/
├─ wp-admin
├─ wp-content
├─ wp-includes
├─ wp-config.php
└─ .htaccess`}</code></pre>

  <p>
  Por tanto, todos los comandos de Git deben ejecutarse desde esa carpeta.
  </p>

  <h4>Flujo básico de trabajo con Git</h4>

<pre><code>{`CARPETA DEL PROYECTO
        │
        │  git add .
        ▼
ARCHIVOS PREPARADOS
        │
        │  git commit
        ▼
VERSIÓN GUARDADA
        │
        │  git push
        ▼
REPOSITORIO EN GITHUB`}</code></pre>

  <p>
  En Git siempre seguimos la misma secuencia:
  </p>

  <ul>
    <li><code>git add</code> → preparar los archivos</li>
    <li><code>git commit</code> → guardar una versión</li>
    <li><code>git push</code> → subir los cambios a GitHub</li>
  </ul>

  <h4>Primer subida del proyecto</h4>

<pre><code>{`# 1. Entrar en la carpeta raíz del proyecto
cd public

# 2. Inicializar Git
git init

# 3. Añadir todos los archivos al control de versiones
git add .

# 4. Crear el primer commit
git commit -m "Primer commit del proyecto"

# 5. Conectar con el repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# 6. Asegurar que la rama principal se llama main
git branch -M main

# 7. Subir el proyecto a GitHub
git push -u origin main`}</code></pre>

  <h4>Actualizar el proyecto después</h4>

<pre><code>{`git add .
git commit -m "Descripción del cambio"
git push`}</code></pre>

  <p>
  Cada vez que hagas cambios en el proyecto solo tendrás que repetir estos tres comandos.
  </p>

  </div>
</details>

        <TipBox title="💡 Frecuencia de commits (para clase)">
          <p>
            Commit por hito: “CPT creado”, “Plantilla single lista”, “Listado automático”, “Encolado CSS”, “README final”.
            Así se entiende el progreso.
          </p>
        </TipBox>
      </section>

      {/* SECCIÓN 8 */}
      <section id="checklist" className="doc-section">
        <h2>8) Checklist final + errores típicos</h2>

        <details className="dd" open>
          <summary>Checklist antes de entregar</summary>
          <div className="dd-body">
            <ul>
              <li>✅ No está <code>wp-config.php</code> en el repo.</li>
              <li>✅ No está <code>wp-content/uploads/</code> (salvo docs/img con capturas).</li>
              <li>✅ El tema hijo contiene: plantillas, functions, assets, estilos.</li>
              <li>✅ README explica: qué hace, plugins, cómo instalar, capturas.</li>
              <li>✅ Commits con mensajes claros.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>Errores típicos (y cómo evitarlos)</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Subir WordPress entero</strong> → Repo pesado e irrelevante. Solución: sube solo tu tema + docs.</li>
              <li><strong>Subir credenciales</strong> → fallo grave. Solución: ignora <code>wp-config.php</code> y usa ejemplos.</li>
              <li><strong>README vacío</strong> → no se evalúa bien. Solución: plantilla y capturas.</li>
              <li><strong>Sin estructura</strong> → cuesta revisar. Solución: carpeta <code>docs/</code> y árbol del repo.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* PRÁCTICA */}
      <section id="practica" className="doc-section">
        <h2>9) Práctica evaluable</h2>

        <ActivityBox title="🧪 Actividad (entrega)">
          <ol>
            <li>Crea tu repo en GitHub con nombre profesional (sin espacios).</li>
            <li>Sube SOLO el tema hijo + docs + README + gitignore.</li>
            <li>Añade 4 capturas en <code>/docs/img/</code> y enlázalas en el README.</li>
            <li>En el README, documenta:
              <ul>
                <li>Plugins usados: SSA, GTranslate, Click to Chat, Ultimate Member</li>
                <li>CPT Paseos + plantilla + listado automático</li>
                <li>Encolado de estilos en functions</li>
                <li>Hooks esenciales (mínimo 2 ejemplos explicados)</li>
              </ul>
            </li>
            <li>Entrega el enlace del repositorio.</li>
          </ol>
        </ActivityBox>

        <PracticeBox title="✅ Criterios de corrección (rápido)">
          <ul>
            <li><strong>Seguridad</strong>: sin credenciales ni config sensible.</li>
            <li><strong>Limpieza</strong>: estructura clara, sin core ni uploads.</li>
            <li><strong>Documentación</strong>: README completo + capturas.</li>
            <li><strong>Profesionalidad</strong>: commits y nombres coherentes.</li>
          </ul>
        </PracticeBox>
      </section>

      {/* CIERRE */}
      <footer className="doc doc-hero" style={{ marginTop: "1.2rem" }}>
        <h2 style={{ margin: 0 }}>Cierre</h2>
        <p className="doc-lead">
          Un repositorio bien montado convierte un proyecto WordPress “de clase” en un proyecto “de portfolio”.
          La diferencia está en: <strong>qué subes</strong>, <strong>cómo lo documentas</strong> y <strong>cómo lo haces reproducible</strong>.
        </p>

        <TipBox title="Checklist final (1 minuto)">
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>Repo limpio: tema hijo + docs</li>
            <li>.gitignore correcto</li>
            <li>README con instalación + plugins + capturas</li>
            <li>Sin wp-config / sin uploads</li>
          </ul>
        </TipBox>

        <div className="doc-next">
          <a className="btn btn-primary" href="#que-es-git">Repasar desde el inicio</a>
        </div>
      </footer>
    </TopicLayout>
  );
}