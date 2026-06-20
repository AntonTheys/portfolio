// ============================================================================
//  YOUTUBE EMBED  —  reusable, responsive 16:9 video.
//  Pass just the video ID (see the note in src/data/projects.js).
//  Uses the privacy-friendly youtube-nocookie domain and lazy loading.
//
//  Reuse it anywhere:  <YouTubeEmbed id="dQw4w9WgXcQ" title="My build" />
// ============================================================================

import styles from "./YouTubeEmbed.module.css";

export default function YouTubeEmbed({ id, title = "YouTube video" }) {
  if (!id) return null;

  return (
    <div className={styles.frame}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
