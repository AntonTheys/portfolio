import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ==========================================================================
  //  GITHUB PAGES BASE PATH  —  IMPORTANT, READ THIS
  // --------------------------------------------------------------------------
  //  This MUST match how your site is served, or CSS/JS will 404 (blank page).
  //
  //  • Project page  →  https://<username>.github.io/<repo-name>/
  //       set base to "/<repo-name>/"   (this is the common case)
  //
  //  • User/org page →  https://<username>.github.io/
  //       (repo named <username>.github.io)
  //       set base to "/"
  //
  //  • Custom domain →  https://yourdomain.com/
  //       set base to "/"
  //
  //  Replace REPO-NAME below with your actual repository name.
  // ==========================================================================
  base: "/portfolio/",
});
