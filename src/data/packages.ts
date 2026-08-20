/**
 * Productized engagements — the answer to "what exactly can emtatudatatech do
 * for ME?". Deliberately no prices: scope is fixed, rate is per client size.
 * Each package names its own outcome so a buyer can self-select before calling.
 */

export interface Package {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  timeline: string;
  featured?: boolean;
  includes: string[];
  /** The single sentence a buyer repeats to their boss to justify the spend. */
  walkAway: string;
  ctaMessage: string;
}

export const packages: Package[] = [
  {
    id: "health-check",
    name: "The Data Health Check",
    tagline: "Find the money before you spend any building things.",
    forWho:
      "Teams that know their data is worth something but cannot say what, or where to start.",
    timeline: "2 weeks",
    includes: [
      "Audit of your data sources, warehouse, reporting and tooling",
      "Interviews with the people who actually use the numbers",
      "A ranked register of opportunities, each with a value estimate attached",
      "A 90-day roadmap sequenced by return, not by difficulty",
      "Live executive readout and a written report you own",
    ],
    walkAway:
      "You leave with a priced, ranked list of what to fix first — usable whether or not you hire me to build it.",
    ctaMessage:
      "Hi Michael — I'm interested in the Data Health Check. Here's our situation:",
  },
  {
    id: "decision-cockpit",
    name: "The Decision Cockpit",
    tagline: "Kill the monthly reporting scramble for good.",
    forWho:
      "Teams drowning in spreadsheets, where reporting eats analyst time that should go to analysis.",
    timeline: "4–6 weeks",
    featured: true,
    includes: [
      "Everything in the Data Health Check",
      "Automated pipelines from your source systems",
      "Executive and operational dashboards built for your decisions",
      "One agreed, documented definition per metric",
      "Alerting so the numbers come to you when something breaks",
      "Team training and full handover — code, models and documentation",
      "30 days of post-launch support",
    ],
    walkAway:
      "The report that took your team a week now takes nobody any time at all, and it is right.",
    ctaMessage:
      "Hi Michael — I'm interested in the Decision Cockpit. Here's our situation:",
  },
  {
    id: "revenue-engine",
    name: "The Revenue Engine",
    tagline: "One model, in production, aimed at one line of your P&L.",
    forWho:
      "Operators with a specific, expensive problem: fraud losses, rising defaults, churn, manual document work, or runaway operating cost.",
    timeline: "8–12 weeks",
    includes: [
      "Problem framing tied to a financial baseline agreed up front",
      "Feature engineering and model development on your data",
      "Production deployment into your existing systems",
      "Monitoring, drift detection and a retraining playbook",
      "Measured before-and-after against the baseline",
      "Full documentation and knowledge transfer to your team",
    ],
    walkAway:
      "A working system with a number next to it — losses down, recoveries up, or hours returned to your team.",
    ctaMessage:
      "Hi Michael — I'm interested in the Revenue Engine. Here's our situation:",
  },
];

/** Ongoing arrangements shown below the three core packages. */
export const retainers = [
  {
    name: "Fractional Data Lead",
    description:
      "Senior data leadership without a senior data salary. I set the strategy, review the work, hire and mentor your analysts, and keep the roadmap honest. Monthly, ongoing.",
  },
  {
    name: "Team Enablement Programme",
    description:
      "A training track built for your team's actual stack and actual gaps — SQL, Python, Power BI or applied ML. Live workshops, mentored projects, material they keep.",
  },
];
