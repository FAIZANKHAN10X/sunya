import type { MenuItem } from "@/types";

/** Primary nav — homepage sections only (smooth-scroll targets). */
export const menuItems: MenuItem[] = [
  { id: "home", label: "Home", sectionId: "hero" },
  { id: "introduction", label: "Introduction", sectionId: "introduction" },
  { id: "beliefs", label: "Beliefs", sectionId: "beliefs" },
  { id: "community", label: "Community", sectionId: "community" },
  { id: "stories", label: "Stories", sectionId: "stories" },
  { id: "begin", label: "Begin", sectionId: "begin" },
];

export const socialLinks: MenuItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/fznmco/",
  },
  { id: "youtube", label: "YouTube" },
  { id: "x", label: "X" },
];

export const quickLinks: MenuItem[] = [
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "newsletter", label: "Newsletter", sectionId: "newsletter" },
];
