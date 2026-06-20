// ============================================================================
//  FOOTER  —  small print. Year is generated automatically.
// ============================================================================

import { site } from "../data/site.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const cleanName = site.name.replace(/\[|\]/g, "").trim() || "[YOUR NAME]";

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.copy}>
          © {year} {cleanName}
        </span>
        {site.footerNote && (
          <span className={styles.note}>{site.footerNote}</span>
        )}
      </div>
    </footer>
  );
}
