// ============================================================================
//  SOCIAL LINKS  —  reusable row of social icons.
//  Reads from site.socials and automatically skips any link left as "".
//  Used by both the Hero and the Contact section.
// ============================================================================

import { site } from "../data/site.js";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  ScholarIcon,
  OrcidIcon,
} from "./Icons.jsx";
import styles from "./SocialLinks.module.css";

// Maps social keys (from src/data/site.js) to their icon + accessible label.
// Order here = display order. Add a new platform by adding an icon to
// Icons.jsx, a key to site.socials, and an entry here.
const socialMeta = {
  github: { label: "GitHub", Icon: GitHubIcon },
  linkedin: { label: "LinkedIn", Icon: LinkedInIcon },
  youtube: { label: "YouTube", Icon: YouTubeIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  scholar: { label: "Google Scholar", Icon: ScholarIcon },
  orcid: { label: "ORCID", Icon: OrcidIcon },
};

export default function SocialLinks({ size = 20, className = "" }) {
  // Keep only socials that have a non-empty URL, in the order defined above.
  const entries = Object.entries(socialMeta).filter(
    ([key]) => site.socials[key] && site.socials[key].trim() !== ""
  );

  return (
    <ul className={`${styles.row} ${className}`}>
      {entries.map(([key, { label, Icon }]) => (
        <li key={key}>
          <a
            className={styles.link}
            href={site.socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
