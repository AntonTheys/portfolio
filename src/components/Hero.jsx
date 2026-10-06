// ============================================================================
//  HERO / ABOUT  —  the top of the page.
//  All text comes from src/data/site.js — you shouldn't need to edit this file
//  to change wording. To use a real profile photo, see the note by `profileImage`.
//
//  USING A REAL PHOTO: see the import + `profileImage` in src/data/site.js.
// ============================================================================

import { site } from "../data/site.js";
import SocialLinks from "./SocialLinks.jsx";
import { ArrowDownIcon } from "./Icons.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      {/* Faint blueprint grid backdrop (decorative). */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          {/* Mono "field tags" line */}
          {site.fields?.length > 0 && (
            <p className={styles.fields}>
              {site.fields.map((f, i) => (
                <span key={f}>
                  {f}
                  {i < site.fields.length - 1 && (
                    <span className={styles.sep} aria-hidden="true">
                      /
                    </span>
                  )}
                </span>
              ))}
            </p>
          )}

          <h1 className={styles.name}>{site.name}</h1>

          <p className={styles.role}>{site.role}</p>

          {site.tagline && <p className={styles.tagline}>{site.tagline}</p>}

          <p className={styles.bio}>{site.bio}</p>

          <div className={styles.actions}>
            <SocialLinks size={20} />
          </div>

          <a href="#research" className={styles.scrollCue}>
            <ArrowDownIcon size={18} />
            <span>View work</span>
          </a>
        </div>

        {/* Profile photo (or labelled placeholder) */}
        <div className={styles.portraitWrap}>
          <figure className={styles.portrait}>
            {site.profileImage ? (
              <img src={site.profileImage} alt={site.profileAlt} />
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderTag}>profile.jpg</span>
                <span className={styles.placeholderHint}>
                  set in src/data/site.js
                </span>
              </div>
            )}
            {/* Schematic corner ticks */}
            <span className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
            <span className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
          </figure>
        </div>
      </div>
    </section>
  );
}
