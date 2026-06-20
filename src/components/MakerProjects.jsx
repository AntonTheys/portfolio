// ============================================================================
//  MAKER PROJECTS
//  Renders the cards from src/data/projects.js in a responsive grid.
//  To add/edit projects, edit that data file — not this component.
//
//  USING REAL IMAGES (instead of embeds):
//    1. Put files in src/assets/images/, e.g. drone.jpg
//    2. import drone from "../assets/images/drone.jpg";  (below)
//    3. In projects.js set  image: drone  on that project.
// ============================================================================

// import drone from "../assets/images/drone.jpg";
// import arm from "../assets/images/arm.jpg";

import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./MakerProjects.module.css";

export default function MakerProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Build log"
          title="Maker projects"
          intro="Hardware I design, print, and document — usually as short cinematic build-and-fly reels."
        />

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title + i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
