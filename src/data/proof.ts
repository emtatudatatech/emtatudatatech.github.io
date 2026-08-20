/**
 * Every figure on this page is drawn from a delivered engagement (see /cv).
 * Rule for this file: if it cannot survive a follow-up question in a sales
 * meeting, it does not belong here.
 */

export interface Stat {
  value: string;
  label: string;
  context: string;
}

/** The headline bar — the four numbers that do the most work. */
export const headlineStats: Stat[] = [
  {
    value: "$4M",
    label: "in fraud stopped",
    context: "11,000 fraudulent transactions blocked by models I built",
  },
  {
    value: "500M+",
    label: "transactions analysed",
    context: "Card data modelled end to end with Python, SQL and Power BI",
  },
  {
    value: "USD 500K",
    label: "in cost removed",
    context: "Cash-in-transit spend cut 5.5% in a single half-year",
  },
  {
    value: "2,000+",
    label: "analysts trained",
    context: "Across in-house programmes and 40+ mentored projects",
  },
];

/** Secondary results, used in the results grid. */
export const resultStats: Stat[] = [
  {
    value: "5% → 0.45%",
    label: "transaction failure rate",
    context: "Card platform reliability, after root-cause analysis at scale",
  },
  {
    value: "83%",
    label: "delinquency catch rate",
    context: "Overdraft early-warning system for corporate banking customers",
  },
  {
    value: "50%",
    label: "lower default rates",
    context: "Real-time credit monitoring dashboard and risk workflow",
  },
  {
    value: "7×",
    label: "faster document capture",
    context: "OCR pipeline for legal conveyancing documents",
  },
  {
    value: "50%",
    label: "shorter branch service time",
    context: "360° customer insight dashboard used at the counter",
  },
  {
    value: "80%",
    label: "faster salary proofing",
    context: "Batch reconciliation tool, plus 50% better staff allocation",
  },
  {
    value: "20%+",
    label: "growth in digital lending",
    context: "BI reporting that redirected the lending funnel",
  },
  {
    value: "60%",
    label: "higher team proficiency",
    context: "Purpose-built data catalog and metadata manager",
  },
];

export interface Credential {
  name: string;
  issuer: string;
  date: string;
  url: string;
  image: string; // filename in src/assets/certificates
}

export const credentials: Credential[] = [
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    date: "October 2025",
    url: "https://www.credly.com/badges/7c4ba7b2-5a6f-4b43-b081-06957a10dc3d/public_url",
    image: "generative-ai-leader.png",
  },
  {
    name: "Relational Database Developer",
    issuer: "freeCodeCamp",
    date: "April 2025",
    url: "https://www.freecodecamp.org/certification/michaelmainacodes/relational-database-v8",
    image: "relational-database-developer.png",
  },
  {
    name: "Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "December 2022",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MichaelMaina-9701/DD073889B8A863F4?sharingId=DE4EA40088CE7FD9",
    image: "power-bi-data-analyst.png",
  },
  {
    name: "Professional Data Analyst",
    issuer: "DataCamp",
    date: "July 2022",
    url: "https://www.datacamp.com/certificate/DA0012369390393",
    image: "professional-data-analyst.png",
  },
  {
    name: "AI Ethics",
    issuer: "Udemy",
    date: "June 2022",
    url: "https://www.udemy.com/certificate/UC-9b415c1a-5c0a-4ee9-a9d5-d8b23a37e093/",
    image: "ai-ethics.png",
  },
  {
    name: "Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "December 2021",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/MichaelMaina-9701/A32B75141FB11589?sharingId=DE4EA40088CE7FD9",
    image: "power-platform-fundamentals.png",
  },
];

/** Where the work was done. Used as a quiet authority strip. */
export const clients = [
  "I&M Group PLC",
  "Equity Group Holdings",
  "Equity Bank Rwanda",
  "Bima Mkononi",
  "Great Learning",
  "Strathmore University",
];
