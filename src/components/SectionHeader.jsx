// ============================================================================
//  SECTION HEADER  —  reusable heading block used by every major section.
//  Renders a small monospace "eyebrow" label with a tick marker (the subtle
//  schematic/technical touch), the section title, and an optional intro line.
// ============================================================================

import styles from "./SectionHeader.module.css";

export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <header className={styles.header}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.tick} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={styles.title}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
