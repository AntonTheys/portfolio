// ============================================================================
//  SITE DATA  —  edit this file to change your name, bio, and social links.
//  Nothing here touches layout; it's all plain text you can safely rewrite.
//  Placeholders are wrapped in [BRACKETS] so you can find/replace them fast.
// ============================================================================

import portrait from "../assets/images/portrait.jpeg";

export const site = {
  // --- Identity -------------------------------------------------------------
  name: "Anton Theys",

  // Shown directly under your name. Keep it short.
  role: "AI Researcher — Underwater Perception",

  // The mono "field tag" line above your name in the hero. A few short tokens.
  fields: ["Sonar perception", "3D reconstruction", "Self-supervised learning"],

  // One-line tagline (sits beside the role). Optional — set to "" to hide.
  tagline:
    "I build machine-learning systems that see through sound - detecting and reconstructing objects from raw sonar.",

  // --- Bio ------------------------------------------------------------------
  // One paragraph. Plain text. This is your elevator pitch.
  bio: "I'm a researcher working on automated underwater mine detection from high-frequency sonar, as part of a European defence research programme. My work spans 2D classification of mine-like contacts, 3D reconstruction from acoustic returns, self-supervised pretraining on unlabelled sonar, and few-shot learning for rare targets. I hold a Master's in Artificial Intelligence. Away from the lab I'm a maker — I design, print, and fly fixed-wing drones and I'm building a 3D-printed robotic arm.",

  // --- Profile photo --------------------------------------------------------
  // Put your photo in  src/assets/images/, import it at the top of this file,
  // then set this to that import (no quotes).
  // Leave as null to show a labelled placeholder instead.
  profileImage: portrait,
  profileAlt: "Portrait of Anton Theys",

  // --- Contact + socials ----------------------------------------------------
  // Set any value to "" to hide that link everywhere it appears.
  email: "anton.theys@telenet.be",

  socials: {
    github: "https://github.com/AntonTheys",
    linkedin: "https://www.linkedin.com/in/anton-theys-959605179",
    youtube: "https://www.youtube.com/@ElekTonny",
    instagram: "https://www.instagram.com/your-handle/",
    // Optional extras — uncomment/fill and they'll appear automatically:
    scholar: "", // e.g. https://scholar.google.com/citations?user=XXXX
    orcid: "",   // e.g. https://orcid.org/0000-0000-0000-0000
  },

  // Short line shown in the Contact section.
  contactLine:
    "Open to research collaborations, talks, and interesting hardware problems.",

  // Footer note (year is added automatically).
  footerNote: "Built with React + Vite. Hosted on GitHub Pages.",
};
