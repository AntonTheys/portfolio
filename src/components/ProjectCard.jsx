// ============================================================================
//  PROJECT CARD  —  one maker project. Driven entirely by a data entry from
//  src/data/projects.js. Shows a YouTube embed if `youtubeId` is set, otherwise
//  the image (or a labelled placeholder if no image is provided yet).
// ============================================================================

import YouTubeEmbed from "./YouTubeEmbed.jsx";
import { ArrowUpRightIcon } from "./Icons.jsx";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      {/* Media: video takes priority, then image, then placeholder. */}
      <div className={styles.media}>
        {project.youtubeId ? (
          <YouTubeEmbed id={project.youtubeId} title={project.title} />
        ) : project.image ? (
          <img
            className={styles.image}
            src={project.image}
            alt={project.imageAlt || project.title}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderTag}>image / video</span>
            <span className={styles.placeholderHint}>
              add in src/data/projects.js
            </span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.headRow}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.summary && (
            <span className={styles.summary}>{project.summary}</span>
          )}
        </div>

        {project.description && (
          <p className={styles.desc}>{project.description}</p>
        )}

        {project.tech?.length > 0 && (
          <ul className={styles.tech}>
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}

        {project.links?.filter((l) => l.url).length > 0 && (
          <div className={styles.links}>
            {project.links
              .filter((l) => l.url)
              .map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {l.label}
                  <ArrowUpRightIcon size={14} />
                </a>
              ))}
          </div>
        )}
      </div>
    </article>
  );
}
