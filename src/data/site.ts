/**
 * Single source of truth for identity, contact details and the primary CTA.
 * Change a number here and every button, link and schema block follows.
 */

const WHATSAPP_NUMBER = "254723118064"; // E.164 without the leading +

/** Builds a wa.me deep link with the message already typed for the visitor. */
export function whatsapp(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "emtatudatatech",
  legalName: "Michael Maina Mwangi",
  url: "https://emtatudatatech.github.io",
  title: "emtatudatatech — I Turn Company Data Into Money You Can Count",
  description:
    "Data, analytics and AI consulting for banks, fintechs, SMEs and operators in East Africa. Fraud models, credit early-warning systems, BI dashboards, GenAI document automation, and websites and web applications for growing businesses.",
  /**
   * Titles deliberately carry no employer name. Where Michael has worked is
   * answered by the CV and the work-history timeline, not by his job title.
   */
  role: "Senior Data Scientist",
  /** One-line variant for tight spots like the hero badge. */
  roleShort: "Senior Data Scientist · Data, Analytics & AI",
  location: "Nairobi, Kenya",
  email: "michaelmainacodes@gmail.com",
  phoneDisplay: "+254 723 118 064",
  phoneHref: "tel:+254723118064",
  whatsappNumber: WHATSAPP_NUMBER,
  socials: {
    github: "https://github.com/emtatudatatech",
    linkedin: "https://www.linkedin.com/in/michael-maina-0a6a5b90/",
    x: "https://x.com/awuloli",
    substack: "https://substack.com/@michaelmaina",
  },
} as const;

/** The one message every primary button sends. Keep it short — people edit it. */
export const PRIMARY_CTA_MESSAGE =
  "Hi Michael — I found emtatudatatech. I'd like to talk about a data project.";

export const primaryCta = {
  label: "Start on WhatsApp",
  href: whatsapp(PRIMARY_CTA_MESSAGE),
} as const;
