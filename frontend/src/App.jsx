import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SecuriteRoutiere from "./pages/SecuriteRoutiere.jsx";
import SoftSkills from "./pages/SoftSkills.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/securite-routiere" element={<SecuriteRoutiere />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
