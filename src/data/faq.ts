/**
 * Objection handling. Each entry is a real reason someone does not send the
 * message — answered plainly, without hedging.
 */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Our data is a mess. Should we clean it up before calling you?",
    a: "No. Every engagement I have ever run started with messy data — duplicated customers, three versions of the truth, exports held together by one person's spreadsheet. Cleaning it up is the job, not the prerequisite. If you wait until it is tidy you will wait forever.",
  },
  {
    q: "We're not a bank. Does this still apply?",
    a: "Banking is where the problems are hardest and the tolerance for error is lowest, which is why the work reads that way. The underlying questions are the same everywhere: who is about to leave, where is money leaking, which customers are worth more than they cost, and what should we do on Monday. I work with fintechs, insurers, health and public sector programmes, retailers and SMEs.",
  },
  {
    q: "How quickly will we see something real?",
    a: "The Data Health Check delivers a ranked, valued opportunity list in two weeks. The Decision Cockpit puts working dashboards in front of your team in four to six. The Revenue Engine takes eight to twelve weeks because production models need time to be proven, not just built. You will see working output at the end of every week, not one reveal at the end.",
  },
  {
    q: "Do you work remotely, or outside Kenya?",
    a: "Both. I am based in Nairobi and work on site with clients across East Africa, and remotely beyond it. Most delivery happens remotely regardless — what matters is a fixed weekly rhythm and a named decision-maker on your side.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Code, models, dashboards, pipelines and documentation are handed over and are yours outright. There is no licence to keep paying, no black box you cannot open, and no dependency on me to keep it running. Handover and training are part of the scope, not an upsell.",
  },
  {
    q: "Do we need to buy new tools first?",
    a: "Almost never. Most organisations are already paying for more capability than they use — a Power BI licence nobody has configured, a warehouse with one table in it, a cloud account running a single VM. I will build on what you own and tell you honestly when something genuinely needs to be bought.",
  },
  {
    q: "What do you need from us?",
    a: "Read access to the relevant data, one person empowered to make decisions, and about two hours of your team's time each week. That is the whole ask. Engagements stall when there is no decision-maker in the room — not when the data is difficult.",
  },
  {
    q: "How many clients do you take on?",
    a: "A small number at a time, deliberately. This is a hands-on practice — I do the work rather than route it to a junior team — so capacity is genuinely limited and start dates are booked in advance. If the fit is wrong I will tell you on the first call rather than sell you something that will not land.",
  },
];
