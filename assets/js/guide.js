/* Swift AI Academy - Qualification Playbook
   Wayfinding layer. Task-based entry points for the home page, and an
   answer-first header for every section page. */

(function (P) {
  "use strict";

  /* ---------------------------------------------------------- home: start with a job */
  P.tasks = [
    { q: "I need a nationally recognised skill qualification", to: "routes",
      note: "Compare the twelve routes and pick the fastest one that supports the claim." },
    { q: "I want learners to earn credit towards a degree", to: "credit",
      note: "How credit is actually created, and why platforms cannot create it." },
    { q: "I want a university or IIT certificate", to: "universities",
      note: "What each institution type can issue and how approval travels inside it." },
    { q: "I am approaching a state government", to: "states",
      note: "All 36 states and UTs, the right office, and what each can provide." },
    { q: "I have a partner meeting coming up", to: "partnerships",
      note: "What to bring, what to ask, and a template you can send today." },
    { q: "Someone told me a certificate counts. Does it?", to: "myths",
      note: "Twelve confident claims that are not true, each with the reality." },
    { q: "These words all sound the same to me", to: "vocabulary",
      note: "Twenty terms, who gives each authority, what it is worth." },
    { q: "Tell me what to do in the next 90 days", to: "action",
      note: "A prioritised pipeline and month-by-month deliverables." }
  ];

  /* ---------------------------------------------------------- per-section header
     answer    one sentence: what this page settles
     takeaways the three things worth knowing if you read nothing else
     jobs      concrete tasks this page supports */
  P.helps = {

    start: {
      answer: "India runs several separate credential systems, and which one you need depends entirely on what the learner should end up holding.",
      takeaways: [
        "Formal skill recognition, university certification, academic credit and industry certification are four different systems with four different authorities.",
        "Holding one never gets you the others. Each has to be obtained from whoever controls it.",
        "Because the systems are independent, you can launch on one layer while another is still in approval."
      ],
      jobs: ["Decide which credential layers a programme needs", "Brief someone new on how the ecosystem fits together", "Set the four parallel tracks for the next 90 days"]
    },

    navigator: {
      answer: "Pick the outcome you want the learner to hold, and this names the pathway, the organisation and your first move.",
      takeaways: [
        "Ten learner outcomes, each mapped to one regulatory pathway and one named type of organisation.",
        "The first move is always concrete: search the register, propose a pilot, map an exam.",
        "It names the pathway. It does not verify that a given partner currently holds the scope you need."
      ],
      jobs: ["Choose a pathway before contacting anyone", "Settle an internal argument about which route to take"]
    },

    vocabulary: {
      answer: "Twenty credential terms, who gives each one its authority, and what it is actually worth to a learner.",
      takeaways: [
        "'Qualification' on its own promises nothing. The issuing authority carries the value.",
        "A university can legitimately issue a certificate that is neither a degree nor an NSQF qualification.",
        "Fix this vocabulary internally before anyone writes marketing copy or a proposal."
      ],
      jobs: ["Write recognition language that survives due diligence", "Check a claim before it reaches a brochure", "Build the internal claims matrix"]
    },

    ecosystem: {
      answer: "Nineteen national bodies, and which of them can actually award a credential rather than regulate or merely record one.",
      takeaways: [
        "NCVET regulates and recognises. It never awards. You go to a body it has approved.",
        "You only need the NCVET route if your claim depends on national vocational recognition.",
        "Recognition is an annually reviewed operating model, not a one-time licence."
      ],
      jobs: ["Work out whether you need NCVET at all", "Shortlist Awarding Bodies to approach", "Scope what becoming an Awarding Body would require"]
    },

    routes: {
      answer: "Twelve ways to get a learner a credential, compared by complexity and realistic planning time.",
      takeaways: [
        "A private programme certificate launches immediately. Your own Awarding Body recognition is a six to twelve month planning assumption.",
        "Partnering an existing Awarding Body reaches an NSQF qualification in roughly six to sixteen weeks.",
        "These timings are internal planning estimates, not regulator service levels."
      ],
      jobs: ["Pick the fastest route that still supports your claim", "Set a realistic launch date", "Compare partnering against building your own"]
    },

    states: {
      answer: "All 36 states and union territories, with the office to approach and what each can realistically provide.",
      takeaways: [
        "States follow six broad operating patterns. Identify the pattern and you know who signs.",
        "Gujarat, Delhi, Assam, Maharashtra and Sikkim have skill universities built for industry partnerships.",
        "Official directories list institutions accurately but carry outdated names of officials."
      ],
      jobs: ["Find the entry point in a target state", "Pick three states to prioritise", "Prepare for a Mission Director meeting"]
    },

    universities: {
      answer: "What each type of university or institute can issue, and how approval actually travels inside them.",
      takeaways: [
        "Only a university's own academic bodies can create a certificate or credit. One signature is not approval.",
        "An IIT can be involved in four different ways, and only one of them produces an NSQF qualification.",
        "Degrees are restricted by law to specific institution types. Certificates are far more flexible."
      ],
      jobs: ["Structure a university partnership that survives scrutiny", "Decide between a certificate and a credit-bearing course", "Find the approval chain inside an institution"]
    },

    sectors: {
      answer: "Which sector council owns your job role, and how vendor certifications sit alongside formal qualifications.",
      takeaways: [
        "Qualifications are allocated by occupation, not by the technology in the course title.",
        "Search the National Qualifications Register before designing anything new.",
        "Vendor certifications carry real employer weight and are not a substitute for formal recognition."
      ],
      jobs: ["Find the council that owns your job role", "Check whether a suitable qualification already exists", "Map a programme to OEM exams"]
    },

    credit: {
      answer: "How academic credit is created, and why credit platforms and digital lockers cannot create it for you.",
      takeaways: [
        "Only an authorised institution can award credit. ABC stores it; it does not create it.",
        "Assessment is mandatory for creditisation. Attendance and completion are not enough.",
        "Recognition of Prior Learning can carry up to 30 percent of a degree, at the university's discretion."
      ],
      jobs: ["Design a course that can carry credit", "Judge whether a credit claim is safe to make", "Plan a long-term RPL pathway"]
    },

    partnerships: {
      answer: "How to approach each partner type, what to say when you get the meeting, and what to settle in writing before signing.",
      takeaways: [
        "Twelve partnership models, each with a different dependency profile and a different key risk.",
        "Ready-to-send templates for email, LinkedIn, WhatsApp and government notes.",
        "Ownership, certificate control, branding and termination go in writing on day one."
      ],
      jobs: ["Send a first-contact message today", "Prepare for a specific partner meeting", "Assemble the documents a partner will ask for"]
    },

    stakeholders: {
      answer: "Who to contact at each organisation, and the order of approach that actually works.",
      takeaways: [
        "Secure the academic or technical sponsor before approaching the person who signs.",
        "Certificates and credit are handled by different offices with different powers.",
        "One internal committee should own all recognition language."
      ],
      jobs: ["Find the right person to email", "Sequence an approach correctly", "Set up internal credential governance"]
    },

    myths: {
      answer: "Twelve claims that get made confidently and are not true, plus the eighteen things most likely to go wrong.",
      takeaways: [
        "A logo, an MoU or a DigiLocker entry creates no recognition whatsoever.",
        "The 'depends' verdicts carry more risk than the outright false ones, because they are true in one narrow case.",
        "The risk register is a quarterly review, not a one-time read."
      ],
      jobs: ["Audit your current marketing claims", "Brief a sales team on what they cannot say", "Run a quarterly partnership risk review"]
    },

    architecture: {
      answer: "Six credential layers you can attach to a programme, and the right combination for ten programme types.",
      takeaways: [
        "University certification and academic credit are separate layers needing separate approvals.",
        "Every extra layer adds an approval dependency and another partner who can block launch.",
        "Treat the stack table as a ceiling, not a target."
      ],
      jobs: ["Design the credential stack for a new programme", "Justify dropping a layer that is slowing you down"]
    },

    action: {
      answer: "A prioritised pipeline of named organisations, and what to achieve in each of the first three months.",
      takeaways: [
        "Month one is for evidence and shortlisting. No applications.",
        "Three P0 items need no external partner and can start this week.",
        "Announce nothing about credit, NSQF status or government recognition before written approval exists."
      ],
      jobs: ["Plan the next 90 days", "Check what to obtain before signing", "Set this quarter's partnership targets"]
    }
  };

  /* ---------------------------------------------------------- section card badges */
  P.badges = {
    start:        "6 layers",
    navigator:    "10 outcomes",
    vocabulary:   "20 terms",
    ecosystem:    "19 bodies",
    routes:       "12 routes",
    states:       "36 states & UTs",
    universities: "8 institution types",
    sectors:      "13 programmes",
    credit:       "NCrF · ABC · RPL",
    partnerships: "12 models · 6 templates",
    stakeholders: "16 roles",
    myths:        "12 myths · 18 risks",
    architecture: "6 layers · 10 stacks",
    action:       "90-day plan"
  };

})(window.PLAYBOOK);
