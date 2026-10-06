// ============================================================================
//  RESEARCH & PUBLICATIONS
//  Each entry is one card/row. To add a new one, copy a block and edit it.
//  Order in this array = order on the page (newest first reads best).
//
//  Fields:
//    title       — required. Paper / project title.
//    venue       — conference, journal, or "Preprint" / "In review".
//    year        — string, e.g. "2025".
//    description — 1–3 sentences, plain text.
//    tags        — keywords shown as mono chips. Keep them short.
//    link        — DOI / arXiv / PDF / project URL. Use "" for no link.
//    linkLabel   — text for the link (e.g. "PDF", "DOI", "arXiv"). Optional.
// ============================================================================

export const publications = [
  {
    title: "Needles in the Landscape: Semi-Supervised Pseudolabeling for Archaeological Site Discovery under Label Scarcity",
    venue: "Preprint",
    year: "2025",
    description:
      "Asymmetric dual pseudolabeling (DPL), an end-to-end deep learning method that learns from sparse positives directly from multi-band geospatial imagery for archeological predictive modelling.",
    tags: ["Archeology", "Machine Learning", "PU learning", "Transfer learning"],
    link: "https://arxiv.org/abs/2510.16814",
    linkLabel: "PDF",
  },
  {
    title: "Coverage-Constrained 3D Reconstruction from Forward-Looking Sonar in Mine Countermeasures",
    venue: "[CONFERENCE]",
    year: "2026",
    description:
      "A pipeline that reconstructs three-dimensional target geometry from sequences of 2D sonar frames, comparing classical backprojection against learned implicit-surface methods.",
    tags: ["3D reconstruction", "Sonar", "Implicit surfaces"],
    link: "",
    linkLabel: "DOI",
  },
  {
    title: "SPARC: Self-Correcting Reconstruction from Forward-Looking Sonar under Navigation Drift",
    venue: "Abstract",
    year: "2027",
    description:
      "presenting SPARC (spline pose adjustment from reconstruction consistency), which corrects the poses from the degraded reconstruction improving the classical ADMM method. ",
    tags: ["Few-shot", "Detection", "Long-tail"],
    link: "",
    linkLabel: "arXiv",
  },
  // ---- Copy the block below to add another entry -----------------------------
  // {
  //   title: "[TITLE]",
  //   venue: "[VENUE]",
  //   year: "2026",
  //   description: "[One or two sentences.]",
  //   tags: ["Tag", "Tag"],
  //   link: "",
  //   linkLabel: "PDF",
  // },
];
