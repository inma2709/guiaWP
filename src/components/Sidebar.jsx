import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../data/menuItems";

function getModuleLabel(title) {
  if (title?.startsWith("M")) return title.split("·")[0].trim(); // "M1"
  if (title?.startsWith("🏠")) return "HOME";
  return "•";
}

function getIcon(title) {
  if (title?.startsWith("🏠")) return "";
  if (title?.startsWith("M")) return title.split("·")[0].trim(); // "M1"
  return "•";
}

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const isGroupActive = useMemo(() => {
    return (groupPath) =>
      groupPath === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(groupPath);
  }, [location.pathname]);

  const activeModule = useMemo(() => {
    const found = menuItems.find((it) => isGroupActive(it.path));
    if (!found) return "";
    return found.title.startsWith("M") ? getModuleLabel(found.title) : "";
  }, [isGroupActive]);

  const handleToggle = () => {
    // Desktop: colapsa/expande (ancho)
    // Mobile: si estás colapsado, mostramos/ocultamos panel con isVisible
    if (collapsed) {
      setIsVisible((v) => !v);
    } else {
      onToggle(); // colapsar
    }
  };

  const handleExpandFromCollapsed = () => {
    // Si el usuario quiere “expandir” estando colapsado, llamamos al toggle del padre
    // y cerramos el panel móvil
    onToggle();
    setIsVisible(false);
  };

  const handleCloseMobile = () => setIsVisible(false);

  // Si pasas a no colapsado, cerramos el modo visible móvil
  useEffect(() => {
    if (!collapsed) setIsVisible(false);
  }, [collapsed]);

  const sidebarClasses = [
    "sidebar",
    collapsed && "sidebar--collapsed",
    collapsed && isVisible && "sidebar--visible",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* Overlay para móvil */}
      <div
        className={[
          "sidebar-overlay",
          collapsed && isVisible && "sidebar-overlay--visible",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={handleCloseMobile}
        aria-hidden="true"
      />

      {/* 👇 AQUÍ estaba el fallo: ahora sí usamos sidebarClasses */}
      <aside className={sidebarClasses} aria-label="Navegación del manual">
        {/* Botón principal */}
        <button
          className="icon-btn"
          onClick={handleToggle}
          aria-label={collapsed ? "Abrir menú" : "Colapsar menú"}
          title={collapsed ? "Abrir menú" : "Colapsar menú"}
        >
          {collapsed ? "☰" : "⟨"}
        </button>

        {/* Botón extra cuando está colapsado: expandir ancho (modo escritorio) */}
        {collapsed ? (
          <button
            className="icon-btn"
            onClick={handleExpandFromCollapsed}
            aria-label="Expandir menú"
            title="Expandir menú"
            style={{ marginLeft: ".5rem" }}
          >
            ⟩
          </button>
        ) : null}

        {/* Mini indicador del módulo activo (opcional, útil docente) */}
        {activeModule ? (
          <div style={{ marginTop: ".6rem", fontWeight: 800, opacity: 0.9 }}>
            Estás en: {activeModule}
          </div>
        ) : null}

        <nav className="menu" aria-label="Menú principal">
          {menuItems.map((item) => {
            const isActiveGroup = isGroupActive(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive || isActiveGroup ? "active" : ""}`
                }
                title={item.title}
                onClick={() => {
                  // En móviles, al seleccionar un tema cerramos el panel lateral
                  if (window.innerWidth <= 900) {
                    setIsVisible(false);
                  }
                }}
              >
                <span aria-hidden="true">{getIcon(item.title)}</span>
                <span className="label">{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
