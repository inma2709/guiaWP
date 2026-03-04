import { Routes, Route } from "react-router-dom";

// Portada
import Home from "./pages/Home";

// Módulos del manual
import Tema0Index from "./pages/tema0/Tema0Index";
import Tema1Index from "./pages/tema1/Tema1Index";
import Tema2Index from "./pages/tema2/Tema2Index";
import Tema3Index from "./pages/tema3/Tema3Index";
import Tema4Index from "./pages/tema4/Tema4Index";
import Tema5Index from "./pages/tema5/Tema5Index";
import Tema6Index from "./pages/tema6/Tema6Index";
import Tema7Index from "./pages/tema7/Tema7Index";
import Tema8Index from "./pages/tema8/Tema8Index";
import Tema9Index from "./pages/tema9/Tema9Index";
import Tema10Index from "./pages/tema10/Tema10Index";
import Tema11Index from "./pages/tema11/Tema11Index";
import Tema12Index from "./pages/tema12/Tema12Index";
import Tema13Index from "./pages/tema13/Tema13Index";
import Tema14Index from "./pages/tema14/Tema14Index";
import Tema15Index from "./pages/tema15/Tema15Index";
import Tema16Index from "./pages/tema16/tema16";
import Tema17 from "./pages/tema17/tema17";
import Tema18Index from "./pages/tema18/tema18";
import Tema19Index from "./pages/tema19/tema19";
import Tema20Index from "./pages/tema20/tema20";
import Tema21 from "./pages/tema21/tema21";
import Tema23 from "./pages/tema23/tema23";
import Tema22 from "./pages/tema22/tema22";
import Tema24 from "./pages/tema24/tema24";
import Tema25 from "./pages/tema25/tema25";
import Tema26 from "./pages/tema26/tema26";

// Ejercicios
import EjerciciosIndex from "./pages/Ejercicios/EjerciciosIndex";
import ContenedoresEjercicio from "./pages/Ejercicios/Contenedores";

export default function App() {
  return (
    <Routes>
      {/* Portada */}
      <Route path="/" element={<Home />} />

      <Route path="/tema0" element={<Tema0Index />} />
      <Route path="/tema1" element={<Tema1Index />} />
      <Route path="/tema2" element={<Tema2Index />} />
      <Route path="/tema3" element={<Tema3Index />} />
      <Route path="/tema4" element={<Tema4Index />} />
      <Route path="/tema5" element={<Tema5Index />} />
      <Route path="/tema6" element={<Tema6Index />} />
      <Route path="/tema7" element={<Tema7Index />} />
      <Route path="/tema8" element={<Tema8Index />} />
      <Route path="/tema9" element={<Tema9Index />} />
      <Route path="/tema10" element={<Tema10Index />} />
      <Route path="/tema11" element={<Tema11Index />} />
      <Route path="/tema12" element={<Tema12Index />} />
      <Route path="/tema13" element={<Tema13Index />} />
      <Route path="/tema14" element={<Tema14Index />} />
      <Route path="/tema15" element={<Tema15Index />} />
      <Route path="/tema16" element={<Tema16Index />} />
      <Route path="/tema17" element={<Tema17 />} />
      <Route path="/tema18" element={<Tema18Index />} />
      <Route path="/tema19" element={<Tema19Index />} />
      <Route path="/tema20" element={<Tema20Index />} />
      <Route path="/tema21" element={<Tema21 />} />
      <Route path="/tema22" element={<Tema22 />} />
      <Route path="/tema23" element={<Tema23 />} />
      <Route path="/tema24" element={<Tema24 />} />
      <Route path="/tema25" element={<Tema25 />} />
      <Route path="/tema26" element={<Tema26 />} />

      {/* Ejercicios */}
      <Route path="/ejercicios" element={<EjerciciosIndex />} />
      <Route path="/ejercicios/contenedores" element={<ContenedoresEjercicio />} />
    </Routes>
  );
}
