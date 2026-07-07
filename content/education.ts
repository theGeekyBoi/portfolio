// ============================================================================
// EDUCATION — shown as a compact card inside the About section.
// ============================================================================

export type Education = {
  school: string;
  degree: string;
  details: string[]; // short lines shown under the degree
  gpa: string;
  graduation: string;
};

export const education: Education = {
  school: "Virginia Tech",
  degree: "B.S. Computer Engineering",
  details: [
    "Controls, Robotics & Autonomy concentration · Machine Learning focus",
    "Minor in Computer Science · Honors College",
    "Dean's List '23, '24, '25",
  ],
  gpa: "3.70",
  graduation: "May 2027",
};
