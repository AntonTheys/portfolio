// ============================================================================
//  RESEARCH / PUBLICATIONS
//  Renders the list from src/data/publications.js. To add or edit entries,
//  edit that data file — you don't need to touch this component.
// ============================================================================

import { publications } from "../data/publications.js";
import SectionHeader from "./SectionHeader.jsx";
import { ArrowUpRightIcon } from "./Icons.jsx";
import styles from "./Research.module.css";

// One publication row. Kept local because it's only used here.
function PublicationRow({ item }) {
  return (
    <li className={styles.row}>
      <div className={styles.meta}>
        <span className={styles.year}>{item.year}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.venue && <p className={styles.venue}>{item.venue}</p>}

        {item.description && (
          <p className={styles.desc}>{item.description}</p>
        )}

        {item.tags?.length > 0 && (
          <ul className={styles.tags}>
            {item.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {item.link && (
          <a
            className={styles.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.linkLabel || "Read"}
            <ArrowUpRightIcon size={15} />
          </a>
        )}
      </div>
    </li>
  );
}

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Research"
          title="Publications & projects"
          intro="Selected work in machine learning for underwater sonar — classification, 3D reconstruction, and learning from limited or unlabelled data."
        />

        <ul className={styles.list}>
          {publications.map((item, i) => (
            <PublicationRow key={item.title + i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
