// ============================================================================
//  NAVBAR  —  sticky top bar with smooth-scroll links to each section.
//  Collapses into a toggle menu on small screens.
//
//  To rename/reorder nav items or point them elsewhere, edit NAV_LINKS below.
//  The `href` values are anchor IDs that must match the section IDs in App.jsx.
// ============================================================================

import { useEffect, useState } from "react";
import { site } from "../data/site.js";
import { MenuIcon, CloseIcon } from "./Icons.jsx";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Build short initials from the name for the logo mark (e.g. "Jane Doe" → "JD").
function initialsFrom(name) {
  const clean = name.replace(/\[|\]/g, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "··";
  return (parts[0][0] + (parts[parts.length - 1][0] || "")).toUpperCase();
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.bar}>
      <nav className={`${styles.inner} container`} aria-label="Primary">
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true">
            {initialsFrom(site.name)}
          </span>
          <span className={styles.brandName}>{site.name}</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
