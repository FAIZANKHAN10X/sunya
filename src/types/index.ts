export type MenuItem = {
  id: string;
  label: string;
};

export type Theme = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export type ContentItem = {
  title: string;
  description: string;
};

export type ContactDetail = {
  label: string;
  value: string;
};

type SectionBase = {
  id: string;
  label: string;
  heading: string;
  description: string;
};

export type HeroSectionData = SectionBase & {
  variant: "hero";
  primaryCta: string;
  secondaryCta: string;
};

export type FeaturesSectionData = SectionBase & {
  variant: "features";
  items: ContentItem[];
};

export type CardsSectionData = SectionBase & {
  variant: "cards";
  items: ContentItem[];
};

export type StepsSectionData = SectionBase & {
  variant: "steps";
  items: ContentItem[];
};

export type SplitSectionData = SectionBase & {
  variant: "split";
  items: ContentItem[];
};

export type ContactSectionData = SectionBase & {
  variant: "contact";
  details: ContactDetail[];
  cta: string;
};

export type Section =
  | HeroSectionData
  | FeaturesSectionData
  | CardsSectionData
  | StepsSectionData
  | SplitSectionData
  | ContactSectionData;
