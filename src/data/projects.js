// ============================================================================
//  MAKER PROJECTS
//  Each entry renders as a project card. Copy a block to add a new one.
//
//  Fields:
//    title       — required.
//    summary     — short one-liner under the title (mono, optional → "").
//    description — 1–3 sentences, plain text.
//    tech        — tools/tech shown as mono chips (e.g. "Fusion 360", "PLA").
//    youtubeId   — JUST the video ID, not the full URL. (See note below.)
//                  Set to "" to show the image/placeholder instead.
//    image       — imported image for the card. Leave null for a placeholder.
//                  To use a real image: drop it in src/assets/images/, import
//                  it at the top of src/components/MakerProjects.jsx, and set
//                  this to that import.
//    imageAlt    — alt text for the image.
//    links       — array of { label, url }. Use [] for none.
//
//  How to get a YouTube ID:
//    From  https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  the ID is  dQw4w9WgXcQ
//    From  https://youtu.be/dQw4w9WgXcQ                →  same ID
//    For a Short:  https://www.youtube.com/shorts/<ID> →  use <ID>
// ============================================================================

export const projects = [
  {
    title: "3D-Printed Fixed-Wing Drone",
    summary: "Design → print → fly",
    description:
      "A fully 3D-printed fixed-wing aircraft designed from scratch — airframe modelled in CAD, printed in lightweight filament, and flown FPV. Documented as a cinematic build-and-fly reel.",
    tech: ["Fusion 360", "LW-PLA", "FPV", "Betaflight", "Bambu Lab"],
    youtubeId: "", // ← paste your video ID here to embed it
    image: null, // ← or set an imported image (see header note)
    imageAlt: "3D-printed fixed-wing drone in flight",
    links: [
      { label: "Watch the build", url: "" },
      { label: "STL files", url: "" },
    ],
  },
  {
    title: "3D-Printed Robotic Arm",
    summary: "Work in progress",
    description:
      "A multi-axis robotic arm built almost entirely from printed parts and hobby servos, with a custom controller. An exercise in mechanical design, motion control, and patience.",
    tech: ["CAD", "Servos", "ESP32", "Inverse kinematics"],
    youtubeId: "GbiSnPxKTg0",
    image: null,
    imageAlt: "3D-printed robotic arm prototype",
    links: [{ label: "Project log", url: "" }],
  },
  // ---- Copy the block below to add another project ---------------------------
  // {
  //   title: "[PROJECT NAME]",
  //   summary: "[Short tagline]",
  //   description: "[One or two sentences.]",
  //   tech: ["Tool", "Tool"],
  //   youtubeId: "",
  //   image: null,
  //   imageAlt: "[Describe the image]",
  //   links: [{ label: "Link", url: "" }],
  // },
];
