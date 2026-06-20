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
    title: "[PUBLICATION TITLE — e.g. Self-Supervised Pretraining for Sonar Mine Detection]",
    venue: "[VENUE / JOURNAL]",
    year: "2025",
    description:
      "Pretrained a vision backbone on large volumes of unlabelled forward-looking sonar, then fine-tuned for mine-like contact classification — cutting the labelled data needed to reach target accuracy.",
    tags: ["Self-supervised", "Sonar", "Classification", "Transfer learning"],
    link: "",
    linkLabel: "PDF",
  },
  {
    title: "[PUBLICATION TITLE — e.g. 3D Reconstruction of Seabed Targets from Acoustic Returns]",
    venue: "[CONFERENCE]",
    year: "2024",
    description:
      "A pipeline that reconstructs three-dimensional target geometry from sequences of 2D sonar frames, comparing classical backprojection against learned implicit-surface methods.",
    tags: ["3D reconstruction", "Sonar", "Implicit surfaces"],
    link: "",
    linkLabel: "DOI",
  },
  {
    title: "[PUBLICATION TITLE — e.g. Few-Shot Detection of Rare Mine-Like Objects]",
    venue: "[WORKSHOP]",
    year: "2024",
    description:
      "Adapts a detector to previously unseen target classes from only a handful of examples, addressing the long-tail problem where dangerous objects are rare in real survey data.",
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
