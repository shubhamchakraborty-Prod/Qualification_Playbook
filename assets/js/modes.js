/* Swift AI Academy - Qualification Playbook
   Reading modes. Attaches beginner explainers, advanced practitioner notes,
   per-mode table columns and a plain-language glossary onto PLAYBOOK. */

(function (P) {
  "use strict";

  /* ---------------------------------------------------------- mode meta */
  P.modes = [
    { k: "b", label: "Beginner", short: "B",
      blurb: "Plain language. No jargon. Every section explained from scratch, with the big tables trimmed to their essential columns." },
    { k: "i", label: "Intermediate", short: "I",
      blurb: "The working playbook. Full tables, full detail, written for someone who already knows the ecosystem." },
    { k: "a", label: "Advanced", short: "A",
      blurb: "Everything in Intermediate plus practitioner notes: the regulatory caveats, the traps and the things to verify before you file or sign." }
  ];

  /* ---------------------------------------------------------- glossary
     Used only in Beginner mode. First occurrence per element gets a tooltip. */
  P.gloss = {
    "NCVET": "National Council for Vocational Education and Training. The national regulator for skills training. It does not hand out certificates itself; it approves the bodies that do.",
    "NSQF": "National Skills Qualifications Framework. A national ladder that places every approved skill qualification at a level, so employers can compare them.",
    "NSQC": "National Skills Qualifications Committee. The apex committee that approves new skill qualifications.",
    "NQR": "National Qualifications Register. The public list of every approved skill qualification. Always search it before designing a new one.",
    "NSDC": "National Skill Development Corporation. Funds, builds and supports the skilling ecosystem. It is not a general certificate-awarding authority.",
    "SSC": "Sector Skill Council. An industry body for one sector, such as IT or media. Where NCVET has recognised it, it can award qualifications.",
    "SSCs": "Sector Skill Councils. Industry bodies, one per sector, that set standards and, where recognised, award qualifications.",
    "DGT": "Directorate General of Training. Runs the national trade training system, including ITIs and apprenticeships.",
    "ITI": "Industrial Training Institute. A government or private institute that teaches recognised trades.",
    "ITIs": "Industrial Training Institutes. Government or private institutes that teach recognised trades.",
    "CTS": "Craftsmen Training Scheme. The national scheme that ITIs run, leading to a National Trade Certificate.",
    "NAPS": "National Apprenticeship Promotion Scheme. The route for employer-based apprenticeships.",
    "NATS": "National Apprenticeship Training Scheme. The apprenticeship route for graduates and diploma holders.",
    "UGC": "University Grants Commission. The regulator for higher education. It does not award certificates to learners.",
    "AICTE": "All India Council for Technical Education. Approves technical education institutions and programmes.",
    "ABC": "Academic Bank of Credits. A digital store for credits a university has already awarded. It cannot create credit.",
    "APAAR": "A lifelong academic ID for learners, used to carry records between institutions.",
    "NAD": "National Academic Depository. The system behind DigiLocker for storing academic awards.",
    "NCrF": "National Credit Framework. The national scheme that connects academic, vocational and experiential learning through credits.",
    "RPL": "Recognition of Prior Learning. A process where a university assesses learning someone already has and may award credit for it.",
    "Awarding Body": "An organisation NCVET has recognised to issue approved skill qualifications. Training providers are not automatically Awarding Bodies.",
    "Assessment Agency": "An organisation recognised to test learners against an approved qualification. Testing does not make it the Awarding Body.",
    "QP": "Qualification Pack. The formal document defining a job role, its outcomes and how it is assessed.",
    "QPs": "Qualification Packs. The formal documents defining job roles, their outcomes and how they are assessed.",
    "OEM": "Original Equipment Manufacturer. In practice, technology vendors such as Microsoft, AWS, Google Cloud and Cisco that run their own certifications.",
    "INI": "Institute of National Importance. Institutions such as the IITs, NITs and IIITs, created or empowered by Parliament.",
    "INIs": "Institutes of National Importance, such as the IITs, NITs and IIITs.",
    "HEI": "Higher Education Institution. A university or college.",
    "HEIs": "Higher Education Institutions. Universities and colleges.",
    "SSDM": "State Skill Development Mission. The state government body that runs skilling programmes in that state.",
    "SSDMs": "State Skill Development Missions. The state bodies that run skilling programmes.",
    "MESC": "Media and Entertainment Skills Council. The sector council for animation, VFX, gaming and immersive media.",
    "DSEU": "Delhi Skill and Entrepreneurship University. A Delhi state university created by its own Act.",
    "MSDE": "Ministry of Skill Development and Entrepreneurship. The central ministry for skilling.",
    "MoU": "Memorandum of Understanding. A signed agreement between two organisations. On its own it does not create academic credit or government recognition.",
    "LMS": "Learning Management System. The platform that delivers and tracks the course.",
    "SLA": "Service Level Agreement. A written promise about how fast something will be done, such as issuing certificates.",
    "CEP": "Continuing Education Programme. The unit inside an IIT that runs short professional certificate courses.",
    "AVGC-XR": "Animation, Visual Effects, Gaming, Comics and Extended Reality. A recognised creative-technology sector.",
    "NTC": "National Trade Certificate. The credential a learner earns through the ITI trade training system.",
    "SCVT": "State Council for Vocational Training. The state-level body in the trade training system.",
    "DTE": "Directorate of Technical Education. The state body for polytechnics and technical diplomas.",
    "MoE": "Ministry of Education."
  };

  /* ---------------------------------------------------------- beginner columns
     Which columns survive in Beginner mode. Tables not listed keep all columns. */
  P.cols = {
    vocab:        ["term", "meaning", "value"],
    tableA:       ["org", "type", "award", "route"],
    tableB:       ["route", "credential", "complexity", "time"],
    tableC:       ["state", "mission", "university"],
    statemodels:  ["model", "entry", "gives"],
    tableD:       ["type", "cert", "credit", "formal"],
    iitroutes:    ["route", "answer", "learner"],
    ssc:          ["council", "programmes", "opportunity"],
    tableG:       ["q", "body", "duration"],
    progstrategy: ["prog", "first", "industry"],
    tableF:       ["model", "learner", "dep", "risk"],
    whattosay:    ["partner", "matters", "offer"],
    meetingprep:  ["partner", "ask", "assume"],
    docs:         ["doc", "ncvet", "uni"],
    tableE:       ["org", "role", "entry"],
    tableH:       ["p", "org", "ask", "next"]
  };

  /* ---------------------------------------------------------- beginner content */
  P.plain = {

    start: {
      wwh: {
        what: "A guide to every kind of certificate a learner in India can be given, and who is allowed to give it.",
        why: "People assume all certificates are roughly equal. They are not. Promising the wrong one is how organisations lose partners and customers.",
        how: "Decide what the learner should walk away holding. Then find who has the legal right to issue exactly that. Then go to them."
      },
      lede: "India does not have one certificate system. It has several, run by different authorities, and each gives the learner a different kind of value.",
      analogy: "Think of a driving licence, a car insurance policy and a road-trip photo album. All three are about driving. Only one of them lets you legally drive. Certificates work the same way: they can look almost identical and mean completely different things.",
      points: [
        { h: "There are three kinds of value", p: "A certificate can prove a job skill the government formally recognises, it can count towards a college degree, or it can impress an employer. Those are three separate things and three separate systems." },
        { h: "Getting one does not get you the others", p: "An IIT certificate does not make something a government-recognised skill qualification. A skill qualification does not become degree credit. Appearing in DigiLocker does not make anything official. Each one has to be obtained from whoever controls it." },
        { h: "That separation is good news", p: "Because the systems are independent, you are never trapped with one partner. If a university says no, the industry route still works. If a regulator is slow, you can launch on a different layer while you wait." }
      ],
      next: [
        "Write down what you want the learner to hold at the end of your programme.",
        "Ask who is legally allowed to issue that exact thing.",
        "Only then decide who to contact."
      ]
    },

    navigator: {
      wwh: {
        what: "A picker. Choose what the learner should end up holding and it tells you where to go and what to do first.",
        why: "Most wasted months come from contacting the wrong organisation for the certificate you actually want.",
        how: "Pick your outcome from the dropdown. Read the four boxes. Then open the section it points you to."
      },
      lede: "Start from what you want the learner to end up holding. Everything else follows from that one decision.",
      analogy: "It is like booking travel. You pick the destination first, then the route, then the ticket. Almost every expensive mistake happens when someone books a ticket before deciding where they are going.",
      points: [
        { h: "Outcome first, partner second", p: "Do not start with 'which university should we approach'. Start with 'what should the learner receive'. The right partner falls out of that answer." },
        { h: "Each outcome has one owner", p: "Government skill recognition, degree credit, a university certificate and a vendor certification are each controlled by a different body. Only that body can give you that thing." },
        { h: "Check the evidence before signing", p: "Whatever the dropdown tells you, the last step is always the same: get documentary proof that the partner can actually issue what they are promising." }
      ],
      next: [
        "Use the dropdown and note the organisation it names.",
        "Open the section it links to and read the detail.",
        "Check the pre-signing evidence list in the Action plan section before you commit to anything."
      ]
    },

    vocabulary: {
      wwh: {
        what: "A dictionary of the twenty words used for certificates, and what each one is actually worth.",
        why: "These words look interchangeable and are not. Using the wrong one in a brochure is a genuine legal and reputational risk.",
        how: "Agree this vocabulary internally before anyone writes marketing copy or a proposal."
      },
      lede: "The words in this field look interchangeable. They are not. Writing the wrong one on a brochure is a real risk, not a wording preference.",
      analogy: "'Qualification', 'certificate' and 'credit' are like 'degree', 'diploma' and 'attendance slip'. All three are pieces of paper. Only some of them open doors, and only for certain doors.",
      points: [
        { h: "'Qualification' alone promises nothing", p: "The word does not mean a government recognised it. It only means there were learning outcomes and an assessment. Who issued it is what decides its worth." },
        { h: "A certificate of completion is just proof you attended", p: "Anyone can issue one legitimately. It is useful evidence of training. It is not a regulated qualification unless it sits inside a recognised framework." },
        { h: "A university certificate is real but limited", p: "A university can properly issue a certificate without that certificate being a degree or a national skill qualification. All three are legitimate. They are simply different." }
      ],
      next: [
        "Pick the row in the table that matches what you are about to promise.",
        "Copy that row's wording into your proposal, unchanged.",
        "If no row matches what you want to say, you cannot say it yet."
      ]
    },

    ecosystem: {
      wwh: {
        what: "A who's who of the nineteen national bodies involved in certificates and credits.",
        why: "Some of these bodies write rules, some issue certificates, and some only store records. Confusing them costs months.",
        how: "Find the body you were planning to contact and check the 'can award' column before you write to them."
      },
      lede: "A quick who's who. Some of these organisations make the rules, some hand out certificates, and some only keep records. Mixing them up is the most common and most expensive error.",
      analogy: "Think of a cricket board, the umpires and the scoreboard. The board writes the rules, the umpires make the calls, and the scoreboard only displays what already happened. DigiLocker is the scoreboard. Putting a certificate on it does not make the certificate official.",
      points: [
        { h: "The regulator does not issue certificates", p: "NCVET approves organisations to award qualifications. It does not award them itself. So you never ask NCVET for a certificate; you ask an organisation NCVET has approved." },
        { h: "You often do not need the regulator at all", p: "You only need the NCVET route if you want to claim national skill recognition. A university certificate, an IIT certificate or a vendor certification does not need it." },
        { h: "Recognition is an ongoing job, not a one-time licence", p: "Approved bodies are reviewed every year and must keep their data and quality systems in order. Becoming one is a commitment, not a certificate you hang on a wall." }
      ],
      next: [
        "Decide whether your claim actually needs national skill recognition.",
        "If it does, find an already-approved body rather than applying yourself.",
        "If it does not, skip this whole system and use the university or industry route."
      ]
    },

    routes: {
      wwh: {
        what: "Twelve different ways to get a learner a credential, side by side.",
        why: "Route choice decides your speed. One route launches this week. Another needs a year of preparation.",
        how: "Pick the simplest route that still supports the claim you genuinely need to make."
      },
      lede: "Twelve ways to get a learner a credential, ranging from 'we could do this next week' to 'this will take us a year'.",
      analogy: "Like travel again. Walking costs nothing and starts immediately but only goes so far. A flight needs booking, documents and time, and goes much further. Neither is better. It depends where you are going.",
      points: [
        { h: "Your own certificate is instant and free", p: "You can issue a programme completion certificate today. It carries no government status, and for many short courses that is completely fine." },
        { h: "Borrowing beats building", p: "Working with an organisation that already has approval takes weeks. Getting your own approval takes many months. Start by borrowing." },
        { h: "The timings here are our own estimates", p: "They are planning assumptions, not promises from any regulator. Nobody publishes a reliable turnaround you can plan a launch date around." }
      ],
      next: [
        "Decide the claim you need to make to sell the programme.",
        "Find the lowest-complexity row in the table that supports that claim.",
        "Start there. You can always add a stronger route later."
      ]
    },

    states: {
      wwh: {
        what: "A state-by-state directory for all 36 states and union territories.",
        why: "Every state organises skilling differently. Writing to the wrong office is the usual reason a state conversation stalls.",
        how: "Find your state, note the entry point, then check which of the six operating models it follows."
      },
      lede: "Every Indian state runs skilling a little differently. Before you write to anybody, work out which kind of state you are dealing with.",
      analogy: "Same sport, different ground rules in every stadium. You would not walk onto a pitch without checking the local rules first.",
      points: [
        { h: "There are really six patterns", p: "Some states run skilling through a mission, some through a dedicated skill university, some through a technical board, and most through a mix. Identify the pattern and you know who signs." },
        { h: "A few states are unusually easy to start with", p: "Gujarat, Delhi, Assam, Maharashtra and Sikkim all have skill universities set up to work with industry partners. Assam has even published how to partner with it." },
        { h: "Always check who is in the chair today", p: "The official directories list institutions accurately but carry outdated names of officials. Use them to find the office, never the person." }
      ],
      next: [
        "Search for your state in the table.",
        "Note its entry point and its operating model.",
        "Confirm the current officeholder and procurement rules before you send anything."
      ]
    },

    universities: {
      wwh: {
        what: "What each type of university or institute can actually issue, and how approval moves inside them.",
        why: "A signature from one senior person is not approval. Only the university's own academic committees can create a certificate or credit.",
        how: "Win the academic sponsor first, then the approving committee, then the Registrar and the contract."
      },
      lede: "Universities can give certificates and they can give credits. But only their own academic committees can approve either. One senior person's signature is not enough.",
      analogy: "A university is not one person. Asking a Registrar to sign off a programme is a bit like asking a bank's receptionist to approve a loan. Friendly, willing, and not the person who decides.",
      points: [
        { h: "Ask for governance, not a logo", p: "Do not ask a university to sign your certificate. Ask it to approve and academically govern a programme. That is what makes the credential real, and it is also what protects you." },
        { h: "An IIT can be involved in four completely different ways", p: "It can run its own certificate course, deliver jointly with you, award academic credit, or, if separately approved, award a national skill qualification. These mean very different things and must never be blurred in a proposal." },
        { h: "Only certain institutions can award degrees", p: "Degrees are restricted by law to universities set up under specific legal routes. Certificates and diplomas are far more flexible, but the institution's own authority still has to be checked." }
      ],
      next: [
        "Find a department head or dean who wants the programme to exist.",
        "Ask early whether you are seeking a certificate or credit. They follow different approval paths.",
        "Get the exact certificate wording agreed in writing before launch."
      ]
    },

    sectors: {
      wwh: {
        what: "Which industry sector council owns your job role, and where vendor certifications fit.",
        why: "Qualifications are grouped by job, not by technology. Sending your paperwork to the wrong council wastes the whole cycle.",
        how: "Search the national register first. Adopt an existing qualification before you try to create one."
      },
      lede: "Skill qualifications are grouped by the job a person will do, not by the technology they use. Pick the sector council that owns that job.",
      analogy: "Someone who repairs hospital machines is a healthcare worker who uses electronics, not an electronics worker who happens to be in a hospital. Get this the wrong way round and your paperwork lands on the wrong desk.",
      points: [
        { h: "Search before you build", p: "There is a public register of every approved qualification. Creating a new one when a suitable one already exists adds months of work for no benefit." },
        { h: "Vendor certifications are a separate layer", p: "Certifications from Microsoft, AWS, Google Cloud and Cisco carry real weight with employers. They are not Indian degrees or national skill qualifications, and they are not meant to be." },
        { h: "New technology moves faster than qualifications", p: "For genuinely new fields, a small stackable credential or a university certificate is the sensible first step. Wait for the job role to settle before building a full national qualification." }
      ],
      next: [
        "Write down the job title your learner will apply for, not the technology they will learn.",
        "Search the national register for that job.",
        "Approach the council that owns it, with evidence that employers want it."
      ]
    },

    credit: {
      wwh: {
        what: "How academic credit is actually created, and why the credit apps and lockers do not create it.",
        why: "Promising credit that no academic council has approved is one of the fastest ways to lose a university partner.",
        how: "Design the course for credit from day one, and never announce a credit claim before written academic approval exists."
      },
      lede: "Credit is the thing that counts towards a degree. Only a university can create it. No app, no website and no digital locker can create it for you.",
      analogy: "The Academic Bank of Credits is a passbook. A passbook records money that a bank has already put in your account. It does not print money. The university prints the money.",
      points: [
        { h: "The order never changes", p: "The course is designed, the learning outcomes are set, the university approves a credit value, the learner is assessed, and only then does credit exist and get recorded." },
        { h: "Assessment is not optional", p: "National guidance is explicit that learning has to be assessed before it can carry credit. Attendance and completion are not enough." },
        { h: "There is a long game worth playing", p: "Universities can assess learning someone already has and award credit for it, up to about a third of a degree. That is a genuine opportunity, but the university decides, every time." }
      ],
      next: [
        "Decide at design time whether the course needs to carry credit.",
        "If it does, build the assessment in from the start.",
        "Do not put the word 'credit' in any marketing until you hold the written approval."
      ]
    },

    partnerships: {
      wwh: {
        what: "How to approach each kind of partner, what to say, and what to settle before signing.",
        why: "Partnerships fail on ambiguity: who owns the curriculum, who controls certificates, whose logo can appear, and what happens if it ends.",
        how: "Follow the outreach sequence, use the ready-made templates, then work through the documentation checklist."
      },
      lede: "How to actually approach a partner, what to say when you get the meeting, and what to nail down before anyone signs.",
      analogy: "Think of a rental agreement. The friendly conversation with the landlord is not the agreement. What matters is what is written down about who owns what, and what happens when someone wants to leave.",
      points: [
        { h: "Lead with what they care about", p: "A university cares about academic standards and reputation. A state mission cares about jobs and measurable outcomes. A vendor cares about exam adoption. The same programme has to be pitched three different ways." },
        { h: "Use the ready-made templates", p: "There are copy-and-paste openers here for email, LinkedIn, WhatsApp and government notes. Copy the button on each one and fill in the brackets." },
        { h: "Settle ownership before the launch, not after", p: "Who owns the curriculum, who can withhold certificates, whose brand can appear, and what happens to enrolled learners if the partnership ends. All of it goes in writing on day one." }
      ],
      next: [
        "Pick your partner type and read its outreach sequence.",
        "Copy the matching template and send it.",
        "Before signing, work through the evidence list in the Action plan section."
      ]
    },

    stakeholders: {
      wwh: {
        what: "Who to contact at each organisation, and in what order.",
        why: "Going straight to the most senior person usually slows things down rather than speeding them up.",
        how: "Find the person who wants the programme to exist first. Then approach the person who signs."
      },
      lede: "Who to email, and in what order. Going to the top first almost always slows you down.",
      analogy: "Get the teacher on your side before you go to the principal. The principal will ask the teacher anyway.",
      points: [
        { h: "Find the sponsor before the signatory", p: "A department head or dean who genuinely wants your programme will carry it through the approval committees. A Registrar approached cold will simply forward your email to that same person." },
        { h: "Match the person to the outcome", p: "Continuing education offices handle certificates. Academic affairs handles credit. They are different people with different powers, and asking the wrong one produces a polite dead end." },
        { h: "Keep one group in charge of claims", p: "Set up a small internal committee that owns all recognition language. No salesperson should be able to change what the certificate claims." }
      ],
      next: [
        "Find your target organisation in the table.",
        "Contact the sponsor role first, not the signing role.",
        "Set up your internal claims committee before any of this reaches a customer."
      ]
    },

    myths: {
      wwh: {
        what: "Twelve confident statements that are simply untrue, plus the eighteen things most likely to go wrong.",
        why: "Every one of these has already cost somebody time, a partner or their credibility.",
        how: "Read the myths once as a team. Run the risk list every quarter against live partnerships."
      },
      lede: "Twelve things people say with total confidence that are simply not true. Each one has already cost somebody time or credibility.",
      analogy: "These are the field's urban legends. They sound sensible, everyone repeats them, and acting on them is expensive.",
      points: [
        { h: "A logo is not a recognition", p: "Co-branding with a government body, appearing in DigiLocker, or having a university sign a certificate does not create government recognition. Recognition comes from a statute or a regulator, not from a design." },
        { h: "Watch the 'depends' answers", p: "The outright false claims are easy to catch. The dangerous ones are the claims that are true in one narrow situation and false everywhere else." },
        { h: "Vendor certifications are not second class", p: "They are not government qualifications and are not trying to be. For many technology jobs they are what actually gets someone hired." }
      ],
      next: [
        "Read the twelve myths aloud in one team meeting.",
        "Check your current marketing copy against them.",
        "Diary the risk list for a quarterly review."
      ]
    },

    architecture: {
      wwh: {
        what: "Six kinds of credential you can attach to one programme, and which combination suits which programme.",
        why: "You can stack all six. You almost never should. Each one adds cost, delay and a dependency.",
        how: "Start from the learner outcome and add the fewest layers that support it."
      },
      lede: "You can stack up to six different credentials onto a single programme. You usually should not stack all six.",
      analogy: "Like toppings on a pizza. You can add everything on the menu. It does not make it better, it costs more, and it takes longer to arrive.",
      points: [
        { h: "Each layer is independent", p: "Your own certificate, a vendor certification, a national skill qualification, a university certificate, academic credit and a state credential. Any of them can be added or dropped without breaking the others." },
        { h: "A university certificate and university credit are not the same layer", p: "This is the distinction people collapse most often. A university can give you a certificate without any credit attached, and the two need separate approvals." },
        { h: "More layers means more ways to be blocked", p: "Every extra layer is another partner who can be slow, change their terms, or say no. Add layers because the learner needs them, not because you can." }
      ],
      next: [
        "Write down what your learner needs the credential to do for them.",
        "Pick the smallest set of layers that delivers that.",
        "Keep one backup route for any programme that really matters to the business."
      ]
    },

    action: {
      wwh: {
        what: "A prioritised list of who to approach, and what to achieve in the first ninety days.",
        why: "Month one is for finding out, not for applying. Applying early is how organisations waste a quarter.",
        how: "Finish the P0 items before opening any P1 conversation. Announce nothing until the approval is on paper."
      },
      lede: "What to actually do in the first three months. Month one is for finding things out, not for filing applications.",
      analogy: "Measure twice, cut once. The first month is all measuring.",
      points: [
        { h: "Month one: find out", p: "Agree your internal vocabulary, search the national register for qualifications that already exist, and shortlist partners. No applications yet." },
        { h: "Month two: negotiate", p: "Get one programme moving under an existing approved qualification, reach a draft agreement with one university, and submit one course for credit consideration." },
        { h: "Month three: close", p: "First partnership signed, first certificate programme approved, exact certificate wording locked, and a claims checklist made mandatory before any campaign goes out." }
      ],
      next: [
        "Do the three P0 items this week. They need no external partner.",
        "Search the national register before designing anything new.",
        "Announce nothing about credits, national recognition or government backing until you hold the paperwork."
      ]
    }
  };

  /* ---------------------------------------------------------- advanced notes */
  P.pro = {

    start: [
      { h: "Separation of authority is the hedge", p: "The independence of NCVET, the universities, UGC, DGT and the credit systems is not a defect to be worked around. It is the reason a portfolio can survive one regulator or one partner turning slow, restrictive or expensive. Architect for it deliberately." },
      { h: "Four tracks must run in parallel, not in sequence", p: "Running national vocational, higher education, state and industry tracks sequentially makes each one a critical path. Run them concurrently and any single blockage costs optionality rather than the quarter." }
    ],

    navigator: [
      { h: "The navigator answers 'who', not 'whether'", p: "It names the pathway and the first move. It does not establish that a given partner currently holds the recognition, the scope or the jurisdiction you need. That is the pre-signing evidence list, and it is a separate step every time." },
      { h: "Dual-credential designs need two independent verifications", p: "Where an outcome touches two layers, verify each authority separately. A State Skill University that is also a recognised Awarding Body holds two distinct powers with two distinct scopes, and a programme can fall inside one and outside the other." }
    ],

    vocabulary: [
      { h: "'Certificate programme' is the highest-risk phrase in a proposal", p: "It is accurate for a university short course, an IIT continuing-education course, a vocational award and a purely private course. Because it is accurate everywhere, it signals nothing, and a reader supplies the strongest meaning they can imagine. Always qualify it with the issuing authority." },
      { h: "Micro-credentials are inside the 2025 framework", p: "NCVET's 2025 Awarding Body framework expressly encompasses smaller units including micro- and nano-credentials. That makes a stackable design a legitimate route into the regulated system rather than a way around it, but stackability still depends on the framework the issuer operates under." },
      { h: "Development is not awarding", p: "Contributing occupational standards, curriculum or qualification design conveys no awarding authority whatsoever. It is still the most useful position to hold commercially, because it secures curriculum and IP influence without the regulatory operating burden." }
    ],

    ecosystem: [
      { h: "Verify against the amended guidelines, not the 2025 PDF", p: "The Guidelines for Recognition and Regulation of Awarding Bodies, 2025 have been subject to subsequent NCVET office orders and amendments. The published Rs 25,000 application processing fee, the financial thresholds, tenure and renewal deadlines must all be re-checked against the amended version immediately before filing." },
      { h: "There is no plannable approval SLA", p: "No end-to-end approval turnaround reliable enough for launch planning was verifiable in the official materials reviewed. Any commercial estimate built on an assumed timeline is provisional and should be confirmed directly with NCVET before it enters a contract or a board plan." },
      { h: "Deemed and dual structures exist", p: "The current framework distinguishes standard recognition, dual awarding-and-assessment arrangements and deemed recognition in defined circumstances. Universities may seek AB recognition or dual recognition. Establish which structure a counterparty actually holds before assuming what it can issue." },
      { h: "Jurisdiction is a separate field from recognition", p: "A body can be validly recognised and still lack jurisdiction over your delivery footprint. Read the jurisdiction on the recognition entry itself, not the marketing claim." }
    ],

    routes: [
      { h: "Complexity here is operating burden, not application difficulty", p: "Becoming an Awarding Body is rated very high not because the filing is hard but because recognition creates a permanent regulated operating model: qualification governance, training-provider oversight, assessment, certification integrity, regulatory data and annual quality review." },
      { h: "The phased sequence exists to buy learning, not just speed", p: "Moving through using an existing AB's qualification, then co-developing, then holding curriculum and IP contractually, before applying for your own recognition, teaches the regulatory operating model at someone else's cost. Skipping to the end means learning it under scrutiny." },
      { h: "Apprenticeship routes are statutory and separate", p: "NAPS under DGT and NATS under the Ministry of Education operate under the Apprentices Act with different eligible populations and different credentials. Neither is interchangeable with an NSQF qualification route." }
    ],

    states: [
      { h: "The directory identifies offices, not incumbents", p: "MSDE's State Skill Development Mission directory carries older names. Entries here deliberately avoid asserting that older mission structures survive unchanged in 2026. Treat every name as requiring confirmation and every structure as requiring a check before contracting." },
      { h: "The six models are operating patterns, not legal classifications", p: "They describe how a state actually behaves and who to approach. They carry no statutory meaning, and the legal awarding authority in any given state still has to be established from that state's own Act, statute or scheme order." },
      { h: "Hybrid ecosystems scale best because recognition and delivery are separable", p: "Where a state has a mission, a university and an Awarding Body operating independently, delivery can be contracted separately from the credential. That is structurally more robust than a single-counterparty state relationship." }
    ],

    universities: [
      { h: "Section 22 is the hard boundary", p: "Degree-conferring authority is restricted by Section 22 of the UGC Act to universities established under the specified legal routes and institutions specially empowered by Parliament. Certificates and diplomas are comparatively unconstrained, which is precisely why the issuing institution's own authority must be verified rather than assumed." },
      { h: "UGC does not specify ordinary certificate and diploma courses", p: "UGC states these are not specified by it and that universities may run them with the approval of their governing councils or the relevant statutory council where required. This is the single most useful and most misquoted fact in the higher-education route." },
      { h: "Autonomous colleges carry a split", p: "Academic autonomy over add-on and certificate programmes is a different question from degree-awarding authority, which sits with the affiliating or degree-awarding institution. Check both separately." },
      { h: "Ask for academic governance, never a signature", p: "A request to sign a certificate invites the university to treat the arrangement as branding, which is exactly the arrangement that collapses under scrutiny. A request to approve an academically governed programme produces a credential that survives due diligence." }
    ],

    sectors: [
      { h: "Allocate by occupation, then confirm the submitting structure", p: "Where sector ownership is genuinely ambiguous, the relevant Awarding Bodies and NCVET should confirm the submitting structure before qualification development begins. Discovering a disputed ownership after a qualification file is drafted costs the entire cycle." },
      { h: "Self-description is not recognition", p: "Whether an entity calls itself a Sector Skill Council is contractually irrelevant. What matters is whether it currently holds NCVET recognition for the awarding function your programme requires, and whether the specific qualification is currently approved." },
      { h: "Platform credit eligibility is a live precedent", p: "The SWAYAM Plus courses show an industry-aligned technology course delivered online and designated credit-eligible under the NCrF architecture, with the implementing institution and the certificate provider identified separately. That separation is the model worth copying." }
    ],

    credit: [
      { h: "Assessment is mandatory for creditisation", p: "UGC's NCrF operationalisation guidance is explicit. No assessment, no credit, regardless of contact hours, platform records or completion data." },
      { h: "RPL is capped and must be labelled", p: "UGC's 2025 higher-education RPL guidelines provide for RPL credits up to 30 percent of a degree, subject to institutional policy and learning-outcome equivalence, and require RPL credits sent to ABC to be identified as such. Both the cap and the labelling obligation are contractual facts, not guidance." },
      { h: "ABC eligibility runs through the awarding institution", p: "ABC's own eligibility rules focus on award-granting institutions recognised by MoE, UGC, AICTE, NCVET or another competent regulator and authorised to confer the relevant awards. A private provider cannot reach ABC except through such an institution." }
    ],

    partnerships: [
      { h: "Certificate issuance needs an objective SLA and audit rights", p: "A partner that controls certification can withhold it, and learners bear the consequence. Define issuance triggers objectively, attach a time-bound SLA, and take audit rights over the issuance process." },
      { h: "Teach-out and survival clauses protect enrolled learners", p: "Two questions decide whether a termination is an inconvenience or a crisis: what happens to learners mid-programme, and can currently enrolled students still be certified. Both need explicit clauses, not goodwill." },
      { h: "Avoid portfolio-wide exclusivity", p: "Exclusivity, where unavoidable, should be narrow and explicitly scoped to a named programme or qualification. Portfolio-wide exclusivity converts a single partner's slowdown into a company-wide blockage." },
      { h: "Keep LMS, content and IP separable", p: "Partner lock-in is usually technical before it is legal. If content and learner records cannot be lifted out cleanly, the commercial right to leave is theoretical." }
    ],

    stakeholders: [
      { h: "Sequence exists to protect the sponsor", p: "Approaching a Registrar or a Mission Director before an academic or technical sponsor forces them to arbitrate an unsponsored proposal. Most will decline rather than adjudicate, and the route closes for that cycle." },
      { h: "The Credential Steering Committee has a veto, not an advisory role", p: "Regulatory, higher education, state, curriculum, legal, product and industry leads each hold a distinct failure mode. No business-development executive should be able to alter recognition language without that group's approval, and that control needs to be structural rather than cultural." }
    ],

    myths: [
      { h: "The 'depends' verdicts carry the real exposure", p: "Outright false claims get caught in review. Claims that are true in one narrow configuration and false in every other are the ones that reach a brochure, because the person writing them genuinely heard them said truthfully once." },
      { h: "Funding and awarding are routinely conflated", p: "A government-funded programme and a government-awarded qualification are unrelated facts. The funding agency and the awarding authority are frequently different bodies, and scheme participation confers no credential status by itself." },
      { h: "Run the risk register against live partnerships quarterly", p: "Recognition expires, jurisdictions change, AB scope changes and vendor credentials get discontinued. A register reviewed only at contracting time detects none of these." }
    ],

    architecture: [
      { h: "Layers D and E must never be bundled conceptually", p: "University certification and academic credit are separate layers requiring separate approvals through different institutional bodies. Collapsing them in a proposal is the most common source of a credit claim that no academic council ever approved." },
      { h: "The stack table is a ceiling, not a target", p: "A programme should not acquire every layer merely because it can. Each additional layer adds an approval dependency, a cost line and a counterparty who can block launch." },
      { h: "Micro-credential first for unstable occupations", p: "For rapidly evolving technology, an institution or industry micro-credential should precede any formal qualification pack. Qualification development cycles outlast the stability of the job role, and an obsolete approved qualification is harder to retire than to create." }
    ],

    action: [
      { h: "The NQR scan gates everything downstream", p: "Designing a new qualification where an appropriate approved one already exists adds months of avoidable regulatory work. The register scan is a P0 item precisely because it can cancel P1 work before it starts." },
      { h: "Nothing is announced before documentary approval exists", p: "No university credit, no NSQF qualification and no government recognition should appear in any campaign, deck or contract until written approval is held. This is the single control that prevents most of the risks in the register from materialising." },
      { h: "Limit new qualification development to one or two", p: "Selecting no more than one or two genuinely new qualifications in the first quarter keeps regulatory attention concentrated. Portfolios that open five simultaneously typically complete none." }
    ]
  };

})(window.PLAYBOOK);
