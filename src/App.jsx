// ============================================================================
//  APP  —  assembles the page. Section order is set here.
//  Each section's content lives in src/data/*.js; layout lives in components.
//  The id on each <section> matches the nav anchor links in Navbar.jsx.
// ============================================================================

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Research from "./components/Research.jsx";
import MakerProjects from "./components/MakerProjects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* Anchor target for the "back to top" brand link. */}
      <span id="top" />

      <Navbar />

      <main>
        <Hero />
        <Research />
        <MakerProjects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
