// ============================================================================
//  CONTACT
//  No backend / form — just a mailto link and social icons (perfect for a
//  static site). Email and socials come from src/data/site.js.
// ============================================================================

import { site } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { MailIcon } from "./Icons.jsx";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Get in touch" />

        <div className={styles.panel}>
          {site.contactLine && <p className={styles.line}>{site.contactLine}</p>}

          {site.email && (
            <a className={styles.email} href={`mailto:${site.email}`}>
              <MailIcon size={22} />
              {site.email}
            </a>
          )}

          <div className={styles.socials}>
            <span className={styles.elsewhere}>Elsewhere</span>
            <SocialLinks size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
