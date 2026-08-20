/**
 * Case studies, ordered by commercial weight — the strongest proof first.
 * Images are imported (not referenced by string) so Astro fingerprints and
 * converts them to AVIF/WebP at build time.
 */
import type { ImageMetadata } from "astro";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project11 from "../assets/projects/project-11.jpg";

export interface Project {
  id: string;
  /** Outcome first — the headline is the result, not the technology. */
  result: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  href?: string;
  kind: "client" | "personal";
  /** Client case studies render a photo; personal entries are text-only. */
  image?: ImageMetadata;
}

export const projects: Project[] = [
  {
    id: "fraud-detection",
    result: "$4M in fraud stopped",
    title: "Fraud Detection Models",
    client: "Equity Bank Kenya",
    category: "Machine Learning",
    year: "2022",
    description:
      "Detection models running against live payment traffic, tuned to a false positive rate under 20% and a true positive rate above 80% — 11,000 fraudulent transactions blocked without burying the review team in false alarms.",
    href: "https://equitygroupholdings.com/investor-relations/#tab_partners",
    kind: "client",
    image: project9,
  },
  {
    id: "conveyancing-ocr",
    result: "7× faster document capture",
    title: "Conveyancing OCR Pipeline",
    client: "I&M Bank Kenya",
    category: "Generative AI",
    year: "2026",
    description:
      "A document intelligence pipeline that reads conveyancing paperwork for the legal department, extracting structured data seven times faster than a person retyping it — with review steps where accuracy actually matters.",
    href: "https://www.imbankgroup.com/ke/personal/loans/home-loans/",
    kind: "client",
    image: project6,
  },
  {
    id: "cash-management",
    result: "USD 500K saved in one half-year",
    title: "Cash Management Optimization",
    client: "Equity Bank Kenya",
    category: "Machine Learning",
    year: "2023",
    description:
      "Optimization models that forecast branch and ATM cash demand, cutting cash-in-transit costs by 5.5% while holding service levels — half a million dollars off the cost line in six months.",
    href: "https://equitygroupholdings.com/ke/pay-send-money/",
    kind: "client",
    image: project5,
  },
  {
    id: "batch-proofing",
    result: "80% cut in proofing time",
    title: "Salary Reconciliation Automation",
    client: "Equity Bank Rwanda",
    category: "Web Application",
    year: "2025",
    description:
      "A batch proofing tool for digital operations that removed the manual reconciliation grind, improving staff assignment by 50% and returning most of the working day to the team.",
    href: "https://equitygroupholdings.com/rw/pay-send-money/eazzy-biz-corporate",
    kind: "client",
    image: project3,
  },
  {
    id: "treasury-analytics",
    result: "1,200 FX customers onboarded",
    title: "Treasury & FX Analytics",
    client: "Equity Bank Kenya",
    category: "Machine Learning",
    year: "2024",
    description:
      "Propensity and reactivation models for the foreign exchange book — 30% of dormant FX customers brought back and 1,200 migrated onto the digital FX platform.",
    href: "https://equitygroupholdings.com/ke/pay-send-money/personal/payment-services/eazzyfx/",
    kind: "client",
    image: project4,
  },
  {
    id: "healthcare-dashboard",
    result: "County-wide performance visibility",
    title: "Healthcare Performance Dashboard",
    client: "County Government",
    category: "Business Intelligence",
    year: "2025",
    description:
      "A public health dashboard tracking delivery milestones across county facilities, giving the executive office one view of what is on track and what is slipping.",
    kind: "client",
    image: project1,
  },
  {
    id: "otc-cash",
    result: "CDMs live in 60+ branches",
    title: "OTC Cash Transaction Analysis",
    client: "Equity Bank Kenya",
    category: "Analytics Engineering",
    year: "2024",
    description:
      "Transaction-level analysis that identified where self-service deposit machines would pay back fastest, driving installation and operationalization across more than sixty branches nationwide.",
    href: "https://equitygroupholdings.com/ke/pay-send-money/personal/deposit/customer-deposit-machine-cdm/",
    kind: "client",
    image: project11,
  },
  {
    id: "rules-engineering",
    result: "Insurance logic shipped to mobile",
    title: "Rules Engineering",
    client: "Bima Mkononi",
    category: "Analytics Engineering",
    year: "2023",
    description:
      "Designed and engineered the underwriting logic and pricing rules behind a mobile insurance platform, turning policy documents into code that holds up under audit.",
    href: "https://bimamkononi.co.ke/",
    kind: "client",
    image: project8,
  },
  {
    id: "great-learning",
    result: "2,000+ learners impacted",
    title: "Data Science & AI Evaluator",
    client: "Great Learning",
    category: "Training",
    year: "2026",
    description:
      "Mentoring and evaluating applied data science and AI projects for working professionals — 40+ projects assessed, consistently rated 4.5 and 5 stars by learners.",
    href: "https://www.mygreatlearning.com/",
    kind: "client",
    image: project2,
  },
  {
    id: "usd-kes",
    result: "Published FX rate forecast",
    title: "Time Series Analysis of USD/KES",
    client: "Independent research",
    category: "Data Analysis",
    year: "2023",
    description:
      "A public time series study of the Kenyan shilling against the dollar during the 2023 slide — modelling the trend and explaining it for a non-technical audience.",
    href: "https://www.linkedin.com/posts/michael-maina-0a6a5b90_datafam-kenya-forex-activity-7093093201825165312-6Rll",
    kind: "personal",
  },
  {
    id: "spotify",
    result: "Personal listening data, decoded",
    title: "Spotify Music Data Analysis",
    client: "Independent research",
    category: "Data Analysis",
    year: "2022",
    description:
      "A long-form analysis of a decade of personal streaming history — what the data says about taste, habit and time, written up as a public series.",
    href: "https://www.linkedin.com/pulse/who-am-i-spotify-part-1-michael-maina/",
    kind: "personal",
  },
  {
    id: "substack",
    result: "Ongoing written practice",
    title: "Essays on Substack",
    client: "Independent writing",
    category: "Writing",
    year: "2024",
    description:
      "(Re)connecting you with humanity's profitable guide to the Kingdom of God — a running essay series on faith, work and meaning.",
    href: "https://substack.com/@michaelmaina",
    kind: "personal",
  },
];
