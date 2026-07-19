export type MenuItem = {
  id: string;
  label: string;
  /** Section element id on the homepage (for in-page scroll). */
  sectionId?: string;
  /** Absolute path for cross-page links (e.g. /contact). */
  href?: string;
};
