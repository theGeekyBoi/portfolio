// ============================================================================
// ABOUT — the narrative in the About section.
// `paragraphs` render in order; `interests` is the light personality row.
// `photo` points at a file in public/images/ — swap in a real portrait
// by replacing the file or changing this path.
// ============================================================================

export const about = {
  photo: {
    src: "/images/portrait.jpg",
    alt: "Portrait of Aaditya Sharma",
  },
  paragraphs: [
    "I'm a Computer Engineering student at Virginia Tech (Honors College), concentrating in Controls, Robotics & Autonomy with a Machine Learning focus and a Computer Science minor.",
    "I like building at the seam between hardware and software — an autonomous 3D print farm that calibrates itself with computer vision, a PCA pipeline rewritten in C to run on a microcontroller, an AI notes app whose entire job queue lives inside Postgres. Most recently I spent a summer at Micron building a change-point monitoring system that's now deployed globally across their fabs.",
    "Along the way I've picked up a peer-reviewed publication, pitched research to Nestlé, and taught 350+ students how to code and build robots.",
  ],
  // The last line of the About narrative, styled as a quiet sign-off.
  closing:
    "I'm working hard to ensure the machines rise with us, not against us.",
  // The light personality accent — hobbies & interests chips.
  interests: [
    "Music",
    "Tennis",
    "Movies",
    "Dinosaurs",
    "Books",
    "Coffee",
    "Cats",
    "NBA",
    "Debate",
    "Cooking",
  ],
} as const;
