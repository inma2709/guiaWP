import { useMemo, useState, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../data/menuItems";

const SCROLL_KEY = "sidebar-scroll";

function getIcon(title) {
  if (title?.startsWith("🏠")) return "";
  if (title?.startsWith("M")) return title.split("·")[0].trim();
  return "•";
}

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sidebarRef = useRef(null);

  const isGroupActive = useMemo(() => {
    return (groupPath) => {
      if (groupPath === "/") {
        return location.pathname === "/";
      }
      // Mejorar matching para rutas como /tema18, /tema21, etc.
      const currentPath = location.pathname.toLowerCase();
      const targetPath = groupPath.toLowerCase();
      
      // Match exacto o que la ruta actual empiece con la ruta del grupo + "/"
      return currentPath === targetPath || currentPath.startsWith(targetPath + "/");
    };
  }, [location.pathname]);

  const handleToggle = () => {
    if (collapsed) {
      setIsVisible((v) => !v);
    } else {
      onToggle();
    }
  };

  const handleExpandFromCollapsed = () => {
    onToggle();
    setIsVisible(false);
  };

  const handleCloseMobile = () => setIsVisible(false);

  // Si pasas a no colapsado, cerramos el modo visible móvil
  useEffect(() => {
    if (!collapsed) setIsVisible(false);
  }, [collapsed]);

  // Restaurar el scroll del sidebar al montar (viene de sessionStorage)
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved && sidebarRef.current) {
      sidebarRef.current.scrollTop = parseInt(saved, 10);
    }
  }, []);

  // Guardar el scroll del sidebar al desmontar
  useEffect(() => {
    return () => {
      if (sidebarRef.current) {
        sessionStorage.setItem(SCROLL_KEY, sidebarRef.current.scrollTop);
      }
    };
  }, []);

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

      <aside ref={sidebarRef} className={sidebarClasses} aria-label="Navegación del manual">
        {/* Encabezado con controles */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            borderBottom: "1px solid #eee",
          }}
        >
          <button
            className="icon-btn"
            onClick={handleToggle}
            aria-label={collapsed ? "Abrir menú" : "Colapsar menú"}
            title={collapsed ? "Abrir menú" : "Colapsar menú"}
            style={{
              fontSize: "1.2rem",
              minWidth: "2rem",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {collapsed ? "☰" : "⟨"}
          </button>

          {collapsed && (
            <button
              className="icon-btn"
              onClick={handleExpandFromCollapsed}
              aria-label="Expandir menú permanentemente"
              title="Expandir menú permanentemente"
              style={{
                fontSize: "1.2rem",
                minWidth: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "0.25rem",
              }}
            >
              ⟩
            </button>
          )}
        </div>

        <nav className="menu" aria-label="Menú principal">
          {menuItems.map((item) => {
            const isActiveGroup = isGroupActive(item.path);

            return (
              <div key={item.path} className="nav-group">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `nav-item ${isActive || isActiveGroup ? "active" : ""}`
                  }
                  title={item.title}
                  onClick={() => {
                    // Guardar posición actual en sessionStorage antes de navegar
                    if (sidebarRef.current) {
                      sessionStorage.setItem(SCROLL_KEY, sidebarRef.current.scrollTop);
                    }
                    if (window.innerWidth <= 900) setIsVisible(false);
                  }}
                >
                  <span aria-hidden="true">{getIcon(item.title)}</span>
                  <span className="label">{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
