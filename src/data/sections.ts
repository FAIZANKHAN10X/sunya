import type { Section } from "@/types";

export const sections: Section[] = [
  {
    id: "hero",
    variant: "hero",
    label: "Welcome",
    heading: "Space to return to yourself",
    description:
      "Sunya is a quiet home for mindful movement, breath, and presence. Practice without pressure—whether you are beginning or deepening a lifelong path.",
    primaryCta: "Begin practice",
    secondaryCta: "Explore philosophy",
  },
  {
    id: "philosophy",
    variant: "features",
    label: "Philosophy",
    heading: "Less noise. More presence.",
    description:
      "Our approach is simple: create enough stillness for awareness to surface. Every class, cue, and pause is designed to support calm attention rather than performance.",
    items: [
      {
        title: "Stillness first",
        description:
          "We begin by arriving—softening the breath, settling the body, and noticing what is already here.",
      },
      {
        title: "Movement with meaning",
        description:
          "Shapes are invitations, not achievements. Alignment serves comfort, clarity, and longevity.",
      },
      {
        title: "Breath as guide",
        description:
          "Pranayama and unforced rhythm keep the practice grounded, steady, and deeply restorative.",
      },
    ],
  },
  {
    id: "practice",
    variant: "cards",
    label: "Practice",
    heading: "A practice that meets you where you are",
    description:
      "Choose the rhythm that fits your day. Each offering balances structure with spaciousness so you can practice with intention—not obligation.",
    items: [
      {
        title: "Morning flow",
        description:
          "Gentle sequencing to wake the body, clear the mind, and set a quiet tone for the hours ahead.",
      },
      {
        title: "Restorative stillness",
        description:
          "Supported postures, longer holds, and soft guidance for recovery and deep nervous-system ease.",
      },
      {
        title: "Breath & meditation",
        description:
          "Seated and reclined practices that refine attention through simple, sustainable techniques.",
      },
    ],
  },
  {
    id: "benefits",
    variant: "features",
    label: "Benefits",
    heading: "What a steady practice can offer",
    description:
      "Yoga at Sunya is not about perfection. It is about building capacity—for focus, resilience, and a kinder relationship with your body.",
    items: [
      {
        title: "Clarity of mind",
        description:
          "Short, consistent sessions help quiet mental clutter and improve everyday focus.",
      },
      {
        title: "Ease in the body",
        description:
          "Thoughtful mobility work supports joints, posture, and a more comfortable range of motion.",
      },
      {
        title: "Emotional steadiness",
        description:
          "Breath-led practice creates room between stimulus and response—on and off the mat.",
      },
      {
        title: "Sustainable ritual",
        description:
          "Simple frameworks make it easier to return, even on busy or difficult days.",
      },
    ],
  },
  {
    id: "journey",
    variant: "steps",
    label: "Journey",
    heading: "How your path can unfold",
    description:
      "There is no single correct pace. These stages describe a gentle arc many students recognize as they grow into the practice.",
    items: [
      {
        title: "Arrive",
        description:
          "Learn foundational postures, breathing patterns, and how to listen without judgment.",
      },
      {
        title: "Establish",
        description:
          "Build a repeatable rhythm—short daily sessions that feel nourishing rather than demanding.",
      },
      {
        title: "Deepen",
        description:
          "Explore subtlety: alignment nuance, longer holds, and a quieter relationship with effort.",
      },
      {
        title: "Integrate",
        description:
          "Carry presence into ordinary life—work, rest, relationships, and transitions between them.",
      },
    ],
  },
  {
    id: "community",
    variant: "split",
    label: "Community",
    heading: "Practice together, without performance",
    description:
      "Sunya is built for people who value sincerity over spectacle. Come as you are—curious, tired, experienced, or entirely new.",
    items: [
      {
        title: "Shared rooms",
        description:
          "In-person and virtual spaces held with the same calm tone, clear cues, and unhurried pacing.",
      },
      {
        title: "Guided series",
        description:
          "Multi-week pathways that help you build confidence without racing toward outcomes.",
      },
      {
        title: "Quiet mentorship",
        description:
          "Thoughtful feedback and optional check-ins for students who want support along the way.",
      },
    ],
  },
  {
    id: "contact",
    variant: "contact",
    label: "Contact",
    heading: "We would love to hear from you",
    description:
      "Questions about classes, private sessions, or simply where to begin? Reach out—we respond with care and without rush.",
    details: [
      {
        label: "Email",
        value: "hello@sunya.studio",
      },
      {
        label: "Studio",
        value: "12 Quiet Lane, City Center",
      },
      {
        label: "Hours",
        value: "Mon–Sat, 7:00–20:00",
      },
    ],
    cta: "Send a message",
  },
];
