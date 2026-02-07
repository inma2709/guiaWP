export const ActivityBox = ({ title = "Actividad", children }) => (
  <section className="box box--activity">
    <h3 className="box__title">🧩 {title}</h3>
    {children}
  </section>
);

export const PracticeBox = ({ title = "Práctica guiada", children }) => (
  <section className="box box--practice">
    <h3 className="box__title">🛠️ {title}</h3>
    {children}
  </section>
);

export const WarningBox = ({ title = "Ojo", children }) => (
  <section className="box box--warning">
    <h3 className="box__title">⚠️ {title}</h3>
    {children}
  </section>
);

export const TipBox = ({ title = "Consejo", children }) => (
  <section className="box box--tip">
    <h3 className="box__title">✅ {title}</h3>
    {children}
  </section>
);

export const CodeBlock = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
);
