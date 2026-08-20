/**
 * The five capability areas — the answer to "what exactly does emtatudatatech do?".
 * Every `proof` string is traceable to a real engagement in the CV. Do not add a
 * number here that you cannot defend in a meeting.
 */

export interface Service {
  id: string;
  icon: string; // key in components/Icon.astro
  name: string;
  /** The buyer's problem, in their words — not the technique's name. */
  pain: string;
  outcome: string;
  deliverables: string[];
  proof: string;
  stack: string[];
}

export const services: Service[] = [
  {
    id: "decision-dashboards",
    icon: "chart",
    name: "Decision Dashboards",
    pain: "Your team spends the first week of every month rebuilding the same report, and by the time it lands the number is already stale.",
    outcome:
      "One place your executives open every morning that tells them what changed, why, and what to do about it — refreshed automatically.",
    deliverables: [
      "Executive and operational dashboards in Power BI, Tableau or Looker Studio",
      "Automated refresh pipelines — no more manual exports",
      "A single agreed definition for every metric, documented",
      "Handover training so your team can extend it without me",
    ],
    proof:
      "A 360° customer dashboard cut branch service time by 50%. A credit monitoring dashboard cut default rates by 50%.",
    stack: ["Power BI", "Tableau", "Looker Studio", "SQL", "DAX"],
  },
  {
    id: "machine-learning",
    icon: "target",
    name: "Machine Learning That Pays For Itself",
    pain: "You are losing money to fraud, defaults or waste — and you find out weeks after it happened, when nothing can be done.",
    outcome:
      "Models running in production that flag the loss before it lands, scored against one line of your P&L so the return is not a matter of opinion.",
    deliverables: [
      "Fraud detection and transaction risk scoring",
      "Credit early-warning and delinquency prediction",
      "Customer segmentation, churn and propensity models",
      "Cost and route optimization models",
      "Monitoring so you know the day a model starts drifting",
    ],
    proof:
      "Fraud models stopped 11,000 transactions worth $4M. An overdraft early-warning system catches 83% of customers before they go delinquent.",
    stack: ["Python", "Scikit-Learn", "PyTorch", "TensorFlow", "PySpark"],
  },
  {
    id: "generative-ai",
    icon: "spark",
    name: "Generative AI & Document Automation",
    pain: "Skilled, expensive people spend their days retyping numbers out of PDFs and hunting through folders for a policy document.",
    outcome:
      "The typing stops. Documents are read, extracted and checked automatically, and your team asks a question instead of searching for a file.",
    deliverables: [
      "OCR and document extraction pipelines with human review built in",
      "RAG knowledge bases over your policies, contracts and manuals",
      "Internal assistants for onboarding, HR and support desks",
      "Evaluation harnesses so accuracy is measured, not assumed",
    ],
    proof:
      "A conveyancing OCR pipeline captures legal document data 7× faster than manual entry.",
    stack: ["LLM APIs", "RAG", "OCR", "spaCy", "NLTK", "FastAPI"],
  },
  {
    id: "data-engineering",
    icon: "layers",
    name: "Data Engineering & Foundations",
    pain: "Three departments report three different revenue figures, and nobody can say which one is right.",
    outcome:
      "One pipeline, one warehouse, one number — with a catalog that tells anyone where a figure came from and who owns it.",
    deliverables: [
      "ETL and ELT pipelines from source systems to warehouse",
      "Data models built for the questions you actually ask",
      "Data catalog, metadata and lineage documentation",
      "Data quality checks that alert before the report breaks",
    ],
    proof:
      "500M+ card transactions processed and modelled. A purpose-built data catalog lifted a team's organizational proficiency by 60%.",
    stack: ["SQL", "Python", "Snowflake", "Postgres", "Oracle", "Azure", "GCP", "AWS"],
  },
  {
    id: "web-apps",
    icon: "browser",
    name: "Websites & Web Applications",
    pain: "Your business runs on WhatsApp threads and a spreadsheet, and customers cannot find you online — or they find a site that loads slowly and says nothing.",
    outcome:
      "A fast, mobile-first site that brings in enquiries, or an internal tool that replaces the spreadsheet everyone is scared to touch.",
    deliverables: [
      "Marketing sites built to load in under a second on Kenyan mobile data",
      "Custom web applications — bookings, inventory, portals, admin tools",
      "Dashboards and reporting built into your own product",
      "AI assistants and chatbots trained on your documents",
      "Search, analytics and hosting set up so you can see what is working",
    ],
    proof:
      "Built and shipped full-stack applications on Next.js, Django and Flask — including a live serverless FX risk dashboard on Next.js and Neon Postgres. This site is one of them.",
    stack: ["Next.js", "Astro", "TypeScript", "Django", "Flask", "Postgres", "Tailwind"],
  },
  {
    id: "enablement",
    icon: "users",
    name: "Team Enablement & Training",
    pain: "You bought the licences and hired the analysts, but the work still funnels through one or two people who know how it fits together.",
    outcome:
      "A team that ships its own analysis — and new hires who are useful in weeks instead of months.",
    deliverables: [
      "Role-specific curricula in SQL, Python, Power BI and applied ML",
      "Live workshops plus recorded material your team keeps",
      "Project mentorship and code review",
      "Onboarding tracks that shorten ramp-up for new analysts",
    ],
    proof:
      "2,000+ learners trained and 40+ projects mentored. In-house programmes lifted team proficiency by 30% and cut onboarding time.",
    stack: ["SQL", "Python", "Power BI", "R", "Applied ML"],
  },
];
