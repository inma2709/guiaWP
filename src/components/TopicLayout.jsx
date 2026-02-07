import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function TopicLayout({ title, subtitle, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
              <rect width="100" height="100" fill="white" rx="16"/>
              <text y="70" fontSize="60" fill="#0073aa" textAnchor="middle" x="50" fontFamily="system-ui" fontWeight="900">WP</text>
            </svg>
            <span>Manual de WordPress</span>
          </div>

          <div className="top-actions">
            <span style={{ fontWeight: 700, opacity: 0.9 }}>
              Docente · Inma Contreras
            </span>
          </div>
        </div>
      </header>

      <div className={`main-grid ${isCollapsed ? "is-collapsed" : ""}`}>
        <Sidebar
          collapsed={isCollapsed}
          onToggle={() => setIsCollapsed((v) => !v)}
        />

        <main id="contenido" className="content">
          <div className="hero">
            <h1>{title}</h1>
            {subtitle && <p className="doc-lead">{subtitle}</p>}
          </div>

          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
