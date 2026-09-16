/* Swift AI Academy - India Qualifications, Certification & Awarding Body Playbook
   Content model. Every section carries a What / Why / How triad plus typed blocks
   that the renderer turns into prose, tables, flows, cards, accordions and tools. */

const PLAYBOOK = {
  meta: {
    title: "India Qualifications, Certification & Awarding Body Playbook",
    owner: "Swift AI Academy",
    version: "1.0",
    verified: "Research verified as of 16 September 2026",
    strapline: "Pick the minimum credible credential authority for each learner outcome. Keep an alternative route for every programme that matters.",
    disclaimer: "Complexity ratings and planning times in this playbook are internal planning estimates, not regulator service levels. Confirm fees, thresholds, tenure and renewal deadlines against the current amended guidelines before filing anything."
  },

  /* ------------------------------------------------------------------ */
  sections: [

  {
    id: "start",
    num: "01",
    title: "Start here",
    eyebrow: "ORIENTATION",
    summary: "India has several overlapping credential systems, not one. This playbook tells you which one to use, and when.",
    wwh: {
      what: "A single operating manual for every way a learner in India can be awarded something: national vocational qualifications, university certificates, academic credit, state credentials and industry certifications.",
      why: "Treating these outputs as interchangeable is the most expensive mistake in the sector. An IIT certificate is not an NSQF qualification. An NSQF qualification is not university credit. DigiLocker publication is not government recognition.",
      how: "Work outcome-first. Decide what the learner should receive, identify who has legal authority to issue exactly that, then select the route. Use the Credential Navigator to short-cut the decision."
    },
    blocks: [
      { t: "callout", tone: "navy", title: "The central strategic conclusion",
        html: "India does not have one single qualification or certification system. It has several overlapping systems that provide different forms of value to learners. The separation of authority between NCVET, universities, UGC, DGT and the credit systems is an advantage, because it reduces partner lock-in." },

      { t: "tree", title: "What should the learner receive?",
        root: "WHAT SHOULD THE LEARNER RECEIVE?",
        branches: [
          { label: "Formal vocational qualification", nodes: ["NCVET / NSQF", "DGT / NTC-NAC"], outcome: "National vocational recognition" },
          { label: "Academic value", nodes: ["University certificate", "Academic credit"], outcome: "Institutional recognition and degree mobility" },
          { label: "Market value", nodes: ["IIT / INI certificate", "OEM / industry certification"], outcome: "Prestige, learning and employer relevance" }
        ] },

      { t: "prose", html: "<p>The mistake to avoid is treating these outputs as interchangeable. An IIT certificate is not automatically an NSQF qualification. An NSQF qualification does not automatically become university credit. An ABC entry does not create academic credit. DigiLocker publication does not by itself create government recognition. A university certificate can be entirely legitimate while still being neither an NSQF qualification nor a degree.<sup class='ref' data-ref='1'>1</sup></p>" },

      { t: "callout", tone: "gold", title: "Recommended strategic posture",
        html: "Do not build the organisation around a single regulatory dependency. Build a credential architecture in which programme delivery, formal vocational recognition, university recognition, academic credit and industry certification can be assembled independently and combined where useful." },

      { t: "flow", title: "Target credential architecture", orientation: "fan",
        root: "Core programme owned and delivered by us",
        steps: [
          "Programme completion credential",
          "OEM / industry exam credential",
          "Existing NCVET Awarding Body qualification where justified",
          "University certificate / executive credential",
          "University academic credit for selected programmes",
          "State Skill University / State Mission route where strategically useful"
        ] },

      { t: "table", id: "tracks", title: "Priority recommendation: four parallel tracks for the next 90 days",
        columns: [
          { key: "track", label: "Track", filter: true },
          { key: "obj", label: "Initial objective" },
          { key: "why", label: "Why" }
        ],
        rows: [
          { track: "National vocational", obj: "Partner with existing NCVET Awarding Bodies before seeking own AB status", why: "Fastest path to NSQF qualifications without direct regulatory dependence" },
          { track: "Higher education", obj: "Establish 2-3 university or Institute of National Importance partnerships", why: "Creates university certification and, separately where approved, credit possibilities" },
          { track: "State", obj: "Pilot with 2-3 strong Skill University / State Mission ecosystems", why: "Creates distribution, government alignment and state-specific routes" },
          { track: "Industry", obj: "Integrate OEM credentials into technology programmes", why: "Provides immediate employer-facing value without waiting for qualification approval" }
        ] },

      { t: "prose", html: "<p>This approach is consistent with the fact that NCVET currently recognises universities, Sector Skill Councils, institutions and other entities as Awarding Bodies, while UGC permits universities to run certificate and diploma courses through their own competent academic authorities.<sup class='ref' data-ref='2'>2</sup></p>" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "navigator",
    num: "02",
    title: "Credential Navigator",
    eyebrow: "DECISION TOOL",
    summary: "Choose the learner outcome. Get the pathway, the organisation to approach, the approval that governs it and the first practical move.",
    wwh: {
      what: "An interactive version of the decision framework and decision tree. Ten learner outcomes mapped to a regulatory pathway and a first move.",
      why: "Most delays come from approaching the wrong body for the credential you actually want. This removes the guesswork before anyone sends an email.",
      how: "Pick an outcome below. Read the pathway, then jump to the linked route and stakeholder detail. Cross-check with the Pre-signing evidence list before contracting."
    },
    blocks: [
      { t: "navigator" },

      { t: "tree", title: "Simple decision tree", root: "What outcome do we want?",
        branches: [
          { label: "Formal national vocational recognition", nodes: ["Is an existing NQR qualification suitable? Yes: partner an existing AB", "No: develop the qualification through an existing AB", "Only later consider becoming an AB yourself"], outcome: "NSQF qualification" },
          { label: "Academic credit", nodes: ["University / IIT / INI", "Approved credit-bearing course", "ABC record"], outcome: "Credits toward a degree" },
          { label: "University or IIT brand without degree credit", nodes: ["Continuing education / certificate programme"], outcome: "Institutional certificate" },
          { label: "State government scale", nodes: ["SSDM / State Skill University / technical board", "Identify the actual awarding authority"], outcome: "State credential or scheme certificate" },
          { label: "Employer technology validation", nodes: ["OEM certification"], outcome: "Vendor credential" },
          { label: "Both formal and employer value", nodes: ["Dual credential architecture"], outcome: "Two independent credentials" }
        ] },

      { t: "callout", tone: "danger", title: "The final operating rule",
        html: "Before launching any programme, answer these in order. What exactly will the learner receive? Who has legal or institutional authority to issue it? Is the intended marketing description identical to that authority? Does it carry NSQF status, and can you show NQR or NCVET evidence? Does it carry academic credit, and can you show the university approval? Does it carry a university brand, and can you show institutional approval? Only then approve marketing and enrolment." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "vocabulary",
    num: "03",
    title: "Vocabulary & claims",
    eyebrow: "TERMINOLOGY",
    summary: "Twenty terms, who gives each one authority, and what it is actually worth to a learner.",
    wwh: {
      what: "The internal dictionary. Every credential word used in a proposal, a contract or a campaign, with its source of authority.",
      why: "Claims governance starts with shared language. A salesperson who says 'government approved' without a basis creates regulatory and reputational exposure.",
      how: "Fix this vocabulary internally first. No recognition language should reach a customer without matching a row in this table."
    },
    blocks: [
      { t: "table", id: "vocab", title: "Credential vocabulary", searchable: true,
        note: "Search by term or filter by who gives it authority.",
        columns: [
          { key: "term", label: "Term", width: "wide" },
          { key: "meaning", label: "Plain-English meaning", width: "wider" },
          { key: "authority", label: "Who gives it authority" },
          { key: "value", label: "Practical learner value" }
        ],
        rows: [
          { term: "Qualification", meaning: "A structured learning award based on defined learning outcomes and assessment. The word alone does not imply national recognition.", authority: "Depends on system: university, NCVET-recognised AB, DGT, statutory board or another competent body", value: "Depends entirely on awarding authority" },
          { term: "NSQF-aligned qualification", meaning: "A vocational qualification formally positioned within the National Skills Qualifications Framework and approved through the national skill qualification process", authority: "NSQC / NCVET ecosystem, with certification by the recognised AB", value: "Nationally legible skill level and formal vocational recognition", ref: "3" },
          { term: "Nationally recognised vocational qualification", meaning: "A vocational award operating under a national statutory or regulatory system", authority: "NCVET-recognised AB, DGT or another competent national authority", value: "Strongest formal vocational route" },
          { term: "State-recognised qualification", meaning: "Qualification created or awarded under a State university, board, council or statutory framework", authority: "State Act, State university, State board or council", value: "Formal state-system credential, with portability depending on credential type" },
          { term: "Academic qualification", meaning: "Degree, diploma or other academic award granted under higher-education authority", authority: "A university created by Central or State legislation, deemed-to-be university or institution specially empowered by Parliament", value: "Formal higher-education progression. UGC Act Section 22 limits degree-conferring authority to such institutions.", ref: "4" },
          { term: "Academic credit", meaning: "A quantified unit of learning accepted under an HEI's academic regulations", authority: "University or HEI through academic regulations and competent bodies", value: "Can contribute to a degree or other academic award when accepted" },
          { term: "Vocational credit", meaning: "Credit earned from assessed vocational learning under the National Credit Framework or relevant qualification framework", authority: "Competent vocational awarding system and accepting institution", value: "Can support mobility, but transfer is not automatic" },
          { term: "Micro-credential", meaning: "A smaller assessed learning unit, often designed to be stackable", authority: "Depends on issuer. NCVET's 2025 AB framework expressly encompasses smaller units such as micro-credentials within its qualification architecture.", value: "Targeted proof of learning; stackability depends on framework", ref: "5" },
          { term: "Certificate programme", meaning: "A structured programme culminating in a certificate", authority: "University, IIT / INI, vocational AB, industry body or private provider", value: "Value depends on issuer and whether credit or regulatory recognition attaches" },
          { term: "Certificate of completion", meaning: "Evidence that a learner completed a programme", authority: "Any legitimate provider may issue one", value: "Useful evidence of training, but not inherently a regulated qualification" },
          { term: "Joint / co-branded certificate", meaning: "Certificate showing two or more participating organisations", authority: "The signatories under their own authority", value: "Reputation and signalling; does not automatically create regulatory recognition" },
          { term: "Industry certification", meaning: "Competency credential issued by an employer, technology vendor or professional ecosystem", authority: "Vendor or industry certification owner", value: "Often strong employer value, but usually not an Indian academic or NSQF qualification" },
          { term: "Awarding Body", meaning: "An organisation formally recognised in the vocational framework to award approved qualifications", authority: "NCVET recognition", value: "Can issue NSQF qualification certificates within approved scope", ref: "6" },
          { term: "Assessment Agency", meaning: "Organisation recognised to conduct assessment against approved qualifications", authority: "NCVET recognition", value: "Provides independent or approved competency assessment; does not become the AB merely by assessing", ref: "7" },
          { term: "Qualification developer", meaning: "Entity contributing occupational standards, curriculum, outcomes or qualification design", authority: "Development itself does not necessarily convey awarding authority", value: "Allows curriculum and IP influence without becoming an AB" },
          { term: "Training provider", meaning: "Organisation delivering training", authority: "Usually onboarded or affiliated under an AB or scheme where a regulated qualification is involved", value: "Can train learners but cannot claim AB authority merely because it delivers the programme", ref: "8" },
          { term: "University certification", meaning: "Certificate issued under a university's institutional authority", authority: "University's statutes, ordinances, governing and academic bodies", value: "Legitimate university credential, but not automatically an NSQF qualification" },
          { term: "Diploma / Advanced Diploma", meaning: "A formally titled programme award", authority: "University, technical board or another competent statutory body", value: "Stronger structural recognition than an informal certificate, but authority must be checked" },
          { term: "Credit-bearing course", meaning: "A course whose learning is formally assigned credits by an authorised institution", authority: "HEI or competent awarding framework", value: "Can contribute toward a formal programme subject to acceptance" },
          { term: "Non-credit course", meaning: "Learning that does not count toward a formal credit requirement", authority: "Any provider or institution", value: "Upskilling and certification without degree progression" }
        ] },

      { t: "callout", tone: "blue", title: "The distinction that matters most",
        html: "UGC expressly states that diploma and certificate courses themselves are not specified by UGC, and that universities can run such programmes with approval of their governing councils or the relevant statutory council where required. A university can legitimately issue a certificate without that certificate being an NSQF qualification or a degree.<sup class='ref' data-ref='9'>9</sup>" },

      { t: "prose", html: "<p>The National Credit Framework further integrates academic, vocational and experiential learning conceptually, but assessment remains mandatory and actual recognition and redemption operate through competent institutions. NCrF applies across higher education, including Institutes of National Importance such as IITs, NITs and IIITs, and is intended to operate through the Academic Bank of Credits.<sup class='ref' data-ref='10'>10</sup></p>" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "ecosystem",
    num: "04",
    title: "National ecosystem",
    eyebrow: "MASTER TABLE A",
    summary: "Nineteen national bodies and systems. Who actually awards, who only regulates, and where a private organisation can partner.",
    wwh: {
      what: "A map of every national organisation that touches qualifications, credentials or credit, with its real authority rather than its reputation.",
      why: "NCVET recognition is mandatory only when the claim depends on the NCVET-regulated vocational ecosystem. It is not a prerequisite for a university certificate, an IIT continuing education certificate, a proprietary training certificate or an OEM credential.",
      how: "Filter by whether the body can award and whether a private organisation can partner. Start with the practical route column, not the organisation name."
    },
    blocks: [
      { t: "table", id: "tableA", title: "Master Table A: national ecosystem", searchable: true,
        note: "Filter by type, awarding power and partnership openness.",
        columns: [
          { key: "org", label: "Organisation / system", width: "wide" },
          { key: "type", label: "Type", filter: true },
          { key: "authority", label: "Actual authority", width: "wider" },
          { key: "covers", label: "Covers" },
          { key: "award", label: "Can award?", filter: true, chip: true },
          { key: "credit", label: "Can provide credits?" },
          { key: "partner", label: "Private partnership?", filter: true, chip: true },
          { key: "route", label: "Practical route", width: "wide" }
        ],
        rows: [
          { org: "Ministry of Skill Development & Entrepreneurship", type: "Central Ministry", authority: "National skill policy, schemes and oversight", covers: "VET, skilling, apprenticeship ecosystem", award: "Not directly", credit: "Not by itself", partner: "Yes", route: "Work through NCVET, DGT, NSDC, SSDMs", ref: "11" },
          { org: "NCVET", type: "National vocational regulator", authority: "Recognises and regulates Awarding Bodies and Assessment Agencies and anchors the NSQF system", covers: "Long- and short-term VET", award: "No", credit: "Framework supports vocational credit", partner: "Yes", route: "AB recognition, AA recognition or work under an existing AB", ref: "12" },
          { org: "NSQC", type: "National committee", authority: "Apex body for NSQF implementation and qualification approval architecture", covers: "NSQF qualifications", award: "No", credit: "Establishes qualification positioning", partner: "Via AB", route: "New qualification approval", ref: "13" },
          { org: "National Qualifications Register", type: "National repository", authority: "Records approved NSQF-aligned qualifications", covers: "Vocational qualifications", award: "No", credit: "Displays qualification information", partner: "Indirect", route: "Search first before creating a new qualification", ref: "14" },
          { org: "NSDC", type: "Public-private institution", authority: "Ecosystem development, implementation, financing, partnerships and SSC support", covers: "Skill ecosystem", award: "Not a general statutory awarding authority", credit: "Not inherently", partner: "Yes", route: "Training, programmes, SSC links, government schemes", ref: "15" },
          { org: "Sector Skill Councils", type: "Industry-sector bodies", authority: "Develop standards and qualifications and, where NCVET-recognised, act as ABs", covers: "Sector-specific skills", award: "Yes where recognised AB", credit: "Vocational credit where framework allows", partner: "Yes", route: "Qualification adoption, training affiliation, qualification development", ref: "16" },
          { org: "DGT", type: "Directorate under MSDE", authority: "National development and coordination of vocational training, CTS and related systems", covers: "ITIs, CTS, CITS, trade training", award: "Yes through DGT schemes", credit: "Vocational pathway", partner: "Yes, subject to scheme rules", route: "ITI affiliation, Flexi-MoU, apprenticeship, new-age trades", ref: "17" },
          { org: "CTS / ITI system", type: "National-state vocational system", authority: "National standards with State and UT administration", covers: "Trade training", award: "Yes, National Trade Certificate", credit: "Vocational", partner: "Yes via affiliated ITIs", route: "Suitable mainly for trade and technician occupations", ref: "18" },
          { org: "NAPS / apprenticeship under DGT", type: "Statutory apprenticeship route", authority: "Apprentices Act ecosystem", covers: "Apprentices in designated and optional trades", award: "Yes, National Apprenticeship Certificate", credit: "Primarily vocational", partner: "Yes, especially employers", route: "Employer-linked apprenticeship", ref: "19" },
          { org: "NATS", type: "Ministry of Education apprenticeship system", authority: "Operates under the Apprentices Act, 1961", covers: "Graduate, diploma and eligible apprentices", award: "Yes, Certificate of Proficiency", credit: "Not automatically university credit", partner: "Yes, employers register", route: "Graduate and diploma apprenticeship", ref: "20" },
          { org: "UGC", type: "Statutory higher-education regulator", authority: "Coordination and maintenance of higher-education standards under the UGC Act", covers: "Universities and HEIs", award: "No", credit: "Regulates higher-education credit architecture", partner: "Indirect via HEIs", route: "Partner a university rather than seek 'UGC certification'", ref: "21" },
          { org: "Universities", type: "Degree-awarding institutions", authority: "Constituting Act, UGC Act Section 22 and university statutes", covers: "Academic qualifications", award: "Yes", credit: "Yes", partner: "Yes, subject to institutional approvals", route: "Certificate, diploma, credit course, degree embedding, executive education", ref: "22" },
          { org: "AICTE", type: "National technical education body", authority: "Approval and policy architecture for regulated technical education", covers: "Technical education", award: "Normally no", credit: "Influences approved technical programmes", partner: "Via approved institutions", route: "Technical institution route", ref: "23" },
          { org: "State Technical Education Boards", type: "State statutory bodies", authority: "State diploma and technical education systems", covers: "Polytechnic and technical diplomas", award: "Often yes", credit: "State technical academic credits", partner: "Potentially", route: "Board-approved diploma or certificate model", ref: "24" },
          { org: "Academic Bank of Credits", type: "Digital credit infrastructure", authority: "Storage, accumulation, transfer and redemption of eligible academic credits", covers: "Registered award-granting institutions and learners", award: "No", credit: "Stores eligible credits, does not create them", partner: "Only through authorised awarding institutions", route: "University must first approve credit", ref: "25" },
          { org: "APAAR", type: "Learner academic identity infrastructure", authority: "Supports lifelong academic records and credit mobility", covers: "Learner identity", award: "No", credit: "Supports records and transfers", partner: "Indirect", route: "Used alongside institutional systems", ref: "26" },
          { org: "NAD / DigiLocker", type: "Digital award repository", authority: "Secure publication and verification of academic awards", covers: "Degrees, diplomas, certificates and records", award: "No", credit: "No independent credit authority", partner: "Institutions publish awards", route: "Credential verification only", ref: "27" },
          { org: "SWAYAM Plus", type: "MoE platform via IIT Madras", authority: "Industry-aligned online learning and credit-enabled courses", covers: "Higher-ed and workforce learners", award: "Course certificates by design", credit: "Some courses explicitly NCrF-credit eligible", partner: "Yes", route: "Scalable industry and university pathway", ref: "28" },
          { org: "IITs and other INIs", type: "Institutions empowered by Parliament", authority: "Powers defined by constituting Acts and statutes", covers: "Higher education, research, continuing education", award: "Yes", credit: "Yes under institutional academic approvals", partner: "Yes", route: "Continuing education, executive education, academic programme, research partnership", ref: "29" }
        ] },

      { t: "callout", tone: "gold", title: "Practical consequence",
        html: "NCVET recognition is mandatory only when the desired claim depends on the NCVET-regulated vocational ecosystem. Conversely, none of the alternatives should be marketed as an NSQF qualification unless the NSQF and NCVET requirements have actually been satisfied.<sup class='ref' data-ref='30'>30</sup>" },

      { t: "heading", text: "NCVET deep dive" },
      { t: "prose", html: "<p>NCVET was notified by MSDE and acts as the national regulator for vocational education and training. Its functions include recognition, regulation, monitoring and, where necessary, de-recognition of Awarding Bodies and Assessment Agencies. Its current operating framework includes the Guidelines for Recognition and Regulation of Awarding Bodies, 2025, subsequent office orders and amendments, and the current recognition list.<sup class='ref' data-ref='31'>31</sup></p>" },

      { t: "flow", title: "The practical chain", orientation: "chain",
        steps: [
          "Occupation or skill need identified",
          "Qualification and learning outcomes designed",
          "NCVET-recognised Awarding Body engaged",
          "Qualification submitted and approved under the NSQF process",
          "Qualification appears in the national qualification architecture / NQR",
          "Training entity affiliated or onboarded by the Awarding Body",
          "Assessment under the approved assessment strategy",
          "Awarding Body issues the qualification certificate"
        ] },

      { t: "prose", html: "<p>Training organisations are not automatically Awarding Bodies. NCVET's framework provides for training entities to be onboarded or affiliated by recognised Awarding Bodies, while recognised Assessment Agencies conduct assessments for approved NSQF qualifications.<sup class='ref' data-ref='32'>32</sup> NCVET also explicitly states that universities may seek recognition as Awarding Bodies or dual recognition for awarding and assessment functions.<sup class='ref' data-ref='33'>33</sup> Its communication around the 2025 guidelines expressly identifies higher-education institutions, school boards, government undertakings, PSUs, multinational companies and leading Indian enterprises among the types of institutions capable of participating.<sup class='ref' data-ref='34'>34</sup></p>" },

      { t: "table", id: "abreq", title: "What NCVET will need confidence in",
        columns: [
          { key: "area", label: "Area", width: "wide" },
          { key: "need", label: "What NCVET will need confidence in", width: "wider" }
        ],
        rows: [
          { area: "Legal standing", need: "Properly constituted entity and documented governance" },
          { area: "Financial capacity", need: "Financial sustainability appropriate to the requested jurisdiction" },
          { area: "Domain competence", need: "Demonstrated sector, qualification or educational capability" },
          { area: "Governance", need: "Defined board and management responsibilities and conflict controls" },
          { area: "Qualification management", need: "Ability to develop, maintain and periodically review qualifications" },
          { area: "Training ecosystem", need: "Rules for accrediting and onboarding training entities" },
          { area: "Assessment", need: "Credible assessment strategy and approved agencies and processes" },
          { area: "Quality assurance", need: "Monitoring, audit, learner feedback and corrective action" },
          { area: "Technology", need: "MIS, data and reporting capacity and NCVET platform compliance" },
          { area: "Learner protection", need: "Grievance, certification integrity and records" },
          { area: "Industry evidence", need: "Employer validation and demonstrated labour-market relevance" }
        ] },

      { t: "callout", tone: "danger", title: "Recognition is an operating model, not a licence",
        html: "NCVET performs annual performance review and continuing monitoring of recognised entities and expects data, MIS and quality-system compliance.<sup class='ref' data-ref='35'>35</sup> The 2025 guidelines publish a non-refundable application processing fee of Rs 25,000 and contain renewal provisions. Because those guidelines have since been subject to NCVET office orders and amendments, all fees, financial thresholds, tenure and renewal deadlines should be checked against the amended version immediately before filing.<sup class='ref' data-ref='36'>36</sup> No published end-to-end approval turnaround reliable enough for planning was verified in the official materials reviewed." },

      { t: "prose", html: "<p>Current entry point: NCVET publishes a proposal email and help channel for recognition enquiries, while KaushalVerse is its digital platform for recognition and management of Awarding Bodies and Assessment Agencies.<sup class='ref' data-ref='37'>37</sup> The current NCVET recognition list was updated through 19 August 2026, and the recognised ecosystem is not limited to Sector Skill Councils.<sup class='ref' data-ref='38'>38</sup></p>" },

      { t: "cards", title: "Recognised bodies that matter strategically",
        items: [
          { title: "IIT Guwahati", tag: "Institute of National Importance", body: "Current NCVET records show IIT Guwahati with an Awarding Body recognition agreement and PAN-India jurisdiction. This decisively establishes that an IIT can, where separately recognised, act in the NCVET AB system.", ref: "39" },
          { title: "Medhavi Skill University", tag: "Private Skill University", body: "Appears in NCVET's recognised Awarding Body list, showing a Skill University route into formal vocational awarding.", ref: "40" },
          { title: "Centurion University of Technology and Management", tag: "University", body: "Also appears in the recognised AB list, demonstrating that university-based AB models are not theoretical.", ref: "40" },
          { title: "Ratan Tata Maharashtra State Skills University", tag: "State Skill University", body: "NCVET's platform records dual Awarding Body recognition, showing a State Skill University model combining academic and vocational functions.", ref: "41" },
          { title: "Media & Entertainment Skills Council", tag: "Sector Skill Council", body: "Publicly states that it is an NCVET Awarding Body and operates QPs, training partners and assessment agencies.", ref: "42" }
        ] },

      { t: "callout", tone: "blue", title: "Should we become an Awarding Body?",
        html: "Not initially, unless the organisation intends to own and regulate a sizeable portfolio of formal vocational qualifications and is prepared to maintain qualification governance, training-provider oversight, assessments, certification, regulatory data and annual quality assurance." },

      { t: "flow", title: "Lower-dependency sequence", orientation: "chain",
        steps: [
          "Phase A: use an existing AB's qualification",
          "Phase B: co-develop a qualification with the AB",
          "Phase C: own curriculum and IP contractually while the AB owns regulated awarding",
          "Phase D: apply for own AB recognition only after volume and portfolio justify it"
        ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "routes",
    num: "05",
    title: "Qualification routes",
    eyebrow: "MASTER TABLE B",
    summary: "Twelve routes from private certificate to full Awarding Body recognition, with complexity and planning time.",
    wwh: {
      what: "Every practical route to a credential in India, side by side, with the regulator, the partner you need and a realistic planning window.",
      why: "Route choice determines speed. A private programme certificate launches immediately; own AB recognition is a six to twelve month planning assumption before you even begin qualification work.",
      how: "Filter by complexity or planning time. Pick the lowest-complexity route that still supports the claim you need to make."
    },
    blocks: [
      { t: "callout", tone: "navy", title: "Read this first",
        html: "The complexity and timing below are internal planning estimates, not regulator service levels." },

      { t: "table", id: "tableB", title: "Master Table B: qualification routes", searchable: true,
        columns: [
          { key: "route", label: "Route", width: "wide" },
          { key: "credential", label: "Credential" },
          { key: "recognition", label: "Recognition", filter: true },
          { key: "geo", label: "Geography" },
          { key: "regulator", label: "Regulator / authority", filter: true },
          { key: "partner", label: "Partner needed" },
          { key: "complexity", label: "Complexity", filter: true, chip: true },
          { key: "time", label: "Planning time" },
          { key: "use", label: "Best use case", width: "wide" }
        ],
        rows: [
          { route: "Existing NCVET AB + existing qualification", credential: "NSQF qualification", recognition: "National vocational", geo: "AB jurisdiction", regulator: "NCVET", partner: "Recognised AB", complexity: "Medium", time: "6-16 weeks", use: "Fast formal skilling launch" },
          { route: "Existing AB + new qualification", credential: "New NSQF qualification", recognition: "National vocational after approval", geo: "AB jurisdiction", regulator: "NCVET / NSQC", partner: "AB", complexity: "High", time: "4-9+ months", use: "New job role or emerging technology" },
          { route: "Become NCVET AB", credential: "Portfolio of qualifications", recognition: "National or state per recognition", geo: "Approved jurisdiction", regulator: "NCVET", partner: "None after recognition", complexity: "Very high", time: "6-12+ months planning assumption", use: "Large long-term portfolio" },
          { route: "DGT / CTS", credential: "NTC or related DGT credential", recognition: "National trade", geo: "India", regulator: "DGT + State system", partner: "Affiliated ITI or approved mechanism", complexity: "High", time: "6-12+ months", use: "Technician and trade programmes", ref: "17" },
          { route: "Apprenticeship", credential: "NAC or Certificate of Proficiency", recognition: "Statutory apprenticeship", geo: "India", regulator: "DGT / NATS", partner: "Employer or establishment", complexity: "Medium", time: "Programme dependent", use: "Work-integrated learning", ref: "43" },
          { route: "State Skill University", credential: "University award, plus NCVET award where separately recognised", recognition: "Academic and/or vocational", geo: "Credential dependent", regulator: "University + NCVET if relevant", partner: "Skill University", complexity: "Medium", time: "2-6 months for partnership", use: "Applied programmes" },
          { route: "University certificate", credential: "University certificate", recognition: "Institutional / academic", geo: "Nationally usable as a university-issued certificate", regulator: "University", partner: "University", complexity: "Medium", time: "2-6 months", use: "Short executive or skill programmes" },
          { route: "University credit course", credential: "University credits", recognition: "Academic", geo: "Transfer subject to rules", regulator: "University / UGC framework", partner: "University", complexity: "High", time: "4-9 months", use: "Degree embedding" },
          { route: "State Mission", credential: "Scheme, AB or state certificate per design", recognition: "State or national per awarding architecture", geo: "Usually state implementation", regulator: "State", partner: "SSDM + relevant awarder", complexity: "High", time: "3-9+ months", use: "Government-scale deployment" },
          { route: "IIT / INI continuing education", credential: "IIT or INI certificate", recognition: "Institutional", geo: "Institution credential", regulator: "IIT / INI", partner: "Institute", complexity: "Medium-high", time: "3-6 months", use: "Premium professional learning" },
          { route: "OEM", credential: "Vendor certification", recognition: "Industry", geo: "Global vendor ecosystem", regulator: "Vendor", partner: "Vendor or exam system", complexity: "Low-medium", time: "1-3 months", use: "Cloud, cyber, AI, networking" },
          { route: "Private programme certificate", credential: "Completion certificate", recognition: "Provider-level", geo: "No automatic government status", regulator: "Organisation", partner: "None", complexity: "Low", time: "Immediate", use: "Short training and rapid innovation" }
        ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "states",
    num: "06",
    title: "State landscape",
    eyebrow: "MASTER TABLE C",
    summary: "All 36 states and union territories: skill mission, skill university route, vocational route, technical education route and the partnership play.",
    wwh: {
      what: "A state-by-state directory of skilling entry points, plus six operating models and four high-potential deep dives.",
      why: "State systems are heterogeneous. Some organise skilling through a mission or corporation, some through employment and training departments, some through skill universities. Most run a hybrid that also includes SCVT / ITI infrastructure and technical education boards.",
      how: "Search for your state, read the partnership route, then check the operating model table to identify who actually signs. Recheck current leadership and procurement rules immediately before outreach."
    },
    blocks: [
      { t: "callout", tone: "navy", title: "Use the directory to find institutions, not office-holders",
        html: "The MSDE State Skill Development Mission directory contains older incumbent names. Use it to identify institutions. The AICTE national directory is useful for locating State Directorates and Boards of Technical Education. Current partner status, leadership and procurement rules should always be rechecked immediately before outreach.<sup class='ref' data-ref='44'>44</sup>" },

      { t: "table", id: "tableC", title: "Master Table C: state and UT landscape", searchable: true,
        note: "Search by state. Filter by whether a dedicated skill university route was verified.",
        columns: [
          { key: "state", label: "State / UT", width: "wide" },
          { key: "mission", label: "Skill mission / principal entry point", width: "wider" },
          { key: "university", label: "Skill University route", filter: true },
          { key: "scvt", label: "SCVT / vocational route" },
          { key: "tech", label: "Technical education route" },
          { key: "partnership", label: "Potential partnership route", width: "wide" }
        ],
        rows: [
          { state: "Andhra Pradesh", mission: "Andhra Pradesh State Skill Development Corporation", university: "None verified", scvt: "Employment & Training / ITI system", tech: "State DTE", partnership: "Government deployment + existing AB + university" },
          { state: "Arunachal Pradesh", mission: "Department of Skill Development & Entrepreneurship", university: "None verified", scvt: "State ITI / SCVT ecosystem", tech: "Directorate of Higher & Technical Education", partnership: "Mission-led pilot" },
          { state: "Assam", mission: "Assam Skill Development Mission", university: "Assam Skill University", scvt: "State ITI / SCVT", tech: "DTE Assam", partnership: "High priority Skill University and mission route", ref: "45" },
          { state: "Bihar", mission: "Bihar Skill Development Mission", university: "None verified", scvt: "State training / SCVT", tech: "State Board of Technical Education", partnership: "Mission + board + university" },
          { state: "Chhattisgarh", mission: "Chhattisgarh State Skill Development Authority", university: "None verified", scvt: "State ITI / SCVT", tech: "DTE", partnership: "Authority-led programmes" },
          { state: "Goa", mission: "Directorate of Skill Development & Entrepreneurship", university: "None verified", scvt: "ITI system", tech: "DTE Goa", partnership: "Department + vocational partner" },
          { state: "Gujarat", mission: "Employment & Training / state skill ecosystem", university: "Kaushalya - The Skill University", scvt: "State ITI system", tech: "DTE + Technical Examination Board", partnership: "High priority Skill University route", ref: "46" },
          { state: "Haryana", mission: "Haryana Skill Development Mission", university: "Exists, institutional route to reconfirm", scvt: "DSDIT / ITIs", tech: "Technical Education Department", partnership: "Skill Mission + university model" },
          { state: "Himachal Pradesh", mission: "Himachal Pradesh Kaushal Vikas Nigam", university: "None verified", scvt: "State ITI system", tech: "State technical education", partnership: "Mission or corporation-led" },
          { state: "Jharkhand", mission: "Jharkhand Skill Development Mission Society", university: "None verified", scvt: "State ITI system", tech: "State Board / technical education", partnership: "Mission-led" },
          { state: "Karnataka", mission: "Karnataka skill development authority / system", university: "None verified", scvt: "State ITI system", tech: "DTE Karnataka", partnership: "State authority + university" },
          { state: "Kerala", mission: "Kerala Academy for Skills Excellence", university: "None verified", scvt: "Industrial Training Department", tech: "DTE / Board of Technical Examinations", partnership: "KASE + higher-education institution" },
          { state: "Madhya Pradesh", mission: "Madhya Pradesh Skill Development Mission", university: "None verified", scvt: "ITIs / SCVT", tech: "Technical Education Department", partnership: "Mission + technical institutions" },
          { state: "Maharashtra", mission: "Maharashtra State Skill Development Society", university: "Ratan Tata Maharashtra State Skills University", scvt: "State ITI system", tech: "DTE Maharashtra", partnership: "High priority dual academic and NCVET route", ref: "41" },
          { state: "Manipur", mission: "Manipur Skill Development Mission", university: "None verified", scvt: "State training system", tech: "Technical education", partnership: "Mission-led" },
          { state: "Meghalaya", mission: "Labour / skill development administration", university: "None verified", scvt: "State vocational / ITI", tech: "Directorate of Higher & Technical Education", partnership: "Department-led" },
          { state: "Mizoram", mission: "Labour, Employment, Skill Development & Entrepreneurship", university: "None verified", scvt: "State ITI system", tech: "DH&TE", partnership: "Department-led" },
          { state: "Nagaland", mission: "Directorate of Employment & Skill Development", university: "None verified", scvt: "State ITIs", tech: "DTE Nagaland", partnership: "Directorate-led" },
          { state: "Odisha", mission: "Odisha Skill Development Authority", university: "None verified", scvt: "State training system", tech: "DTET Odisha", partnership: "Strong government skilling route" },
          { state: "Punjab", mission: "Technical Education & Industrial Training / skill mission", university: "None verified", scvt: "State ITIs", tech: "Punjab Board of Technical Education", partnership: "Board + government" },
          { state: "Rajasthan", mission: "Rajasthan Skill and Livelihoods Development Corporation", university: "University-based skill institutions, verify per proposal", scvt: "ITI / SCVT", tech: "State technical education board", partnership: "RSLDC + university" },
          { state: "Sikkim", mission: "Skill Development & Entrepreneurship Department", university: "Medhavi Skill University, an NCVET-recognised AB", scvt: "State vocational system", tech: "DTE", partnership: "High priority private Skill University and AB route", ref: "40" },
          { state: "Tamil Nadu", mission: "Tamil Nadu Skill Development Corporation", university: "None verified", scvt: "Employment & Training / ITIs", tech: "Directorate of Technical Education", partnership: "High-volume mission route" },
          { state: "Telangana", mission: "Telangana skill development ecosystem", university: "Evaluate case by case", scvt: "State ITIs", tech: "Technical Education Department", partnership: "Government + university" },
          { state: "Tripura", mission: "Tripura Skill Development Mission", university: "None verified", scvt: "ITIs", tech: "Higher / technical education", partnership: "Mission-led" },
          { state: "Uttar Pradesh", mission: "Uttar Pradesh Skill Development Mission", university: "University partnerships available", scvt: "State ITI / SCVT", tech: "Board of Technical Education UP", partnership: "Major mission + board + university market" },
          { state: "Uttarakhand", mission: "Uttarakhand Skill Development Mission", university: "University route available", scvt: "State ITI system", tech: "Uttarakhand Board of Technical Education", partnership: "Mission + board" },
          { state: "West Bengal", mission: "Department of Technical Education, Training & Skill Development", university: "University route available", scvt: "Integrated vocational / skill council system", tech: "State Council / technical education system", partnership: "Board-led hybrid" },
          { state: "Andaman & Nicobar Islands", mission: "Confirm current nodal mission", university: "None verified", scvt: "UT ITI system", tech: "UT administration", partnership: "Scheme-specific" },
          { state: "Chandigarh", mission: "Chandigarh Skill Development Mission", university: "University / institutional route", scvt: "UT ITI system", tech: "Chandigarh / Punjab technical ecosystem", partnership: "Mission + HEI" },
          { state: "Dadra & Nagar Haveli and Daman & Diu", mission: "Confirm current UT nodal department", university: "None verified", scvt: "UT ITI system", tech: "UT administration", partnership: "Scheme-specific" },
          { state: "Delhi", mission: "Delhi government skill ecosystem", university: "Delhi Skill and Entrepreneurship University", scvt: "ITI / SCVT ecosystem", tech: "Delhi technical education", partnership: "High priority DSEU route", ref: "47" },
          { state: "Jammu & Kashmir", mission: "J&K Skill Development Mission", university: "Universities available", scvt: "ITI system", tech: "J&K DTE", partnership: "Mission + university" },
          { state: "Ladakh", mission: "Confirm current UT nodal body", university: "None verified", scvt: "UT vocational system", tech: "UT administration", partnership: "Small targeted government partnership" },
          { state: "Lakshadweep", mission: "Confirm current UT nodal body", university: "None verified", scvt: "Vocational system", tech: "UT administration", partnership: "Scheme-specific" },
          { state: "Puducherry", mission: "Puducherry State Skill Development Mission", university: "University route", scvt: "ITI system", tech: "Directorate of Higher & Technical Education", partnership: "Mission + HEI" }
        ] },

      { t: "table", id: "statemodels", title: "State operating models",
        note: "These are operating models rather than legal classifications.",
        columns: [
          { key: "model", label: "Model", filter: true },
          { key: "states", label: "Typical states", width: "wide" },
          { key: "entry", label: "Best entry point" },
          { key: "gives", label: "What it can realistically provide", width: "wide" }
        ],
        rows: [
          { model: "Skill University-led", states: "Gujarat, Delhi, Assam, Maharashtra and selected private Skill University ecosystems", entry: "Registrar / Dean Academic / Industry Partnerships", gives: "University certificate, diploma, degree-linked learning and sometimes NCVET credentials" },
          { model: "Mission-led", states: "AP, Bihar, Tamil Nadu, UP, Rajasthan, Odisha, MP", entry: "Mission Director / CEO", gives: "Government-funded or government-endorsed skilling implementation" },
          { model: "Board-led", states: "UP, Uttarakhand, Punjab, Gujarat, Kerala, West Bengal", entry: "Secretary / Controller / Director Technical Education", gives: "Technical diplomas and certificates within board powers" },
          { model: "SCVT / ITI-led", states: "Most states", entry: "Director Employment & Training / State Apprenticeship Adviser", gives: "ITI and apprenticeship-aligned vocational pathways" },
          { model: "University-led", states: "States without a dedicated Skill University", entry: "Registrar / Dean Academic", gives: "Certificates, credit courses and academic integration" },
          { model: "Hybrid", states: "Most mature ecosystems", entry: "Government + university + AB", gives: "Strongest option for scale because recognition and delivery are separated" }
        ] },

      { t: "heading", text: "High-potential state pathways" },
      { t: "accordion", title: "Four deep dives", items: [
        { q: "Gujarat: Kaushalya - The Skill University", a: "<p>Established through an Act of the Gujarat Legislative Assembly in 2021. It offers a skill-focused university structure and publicly describes its objective as 'Education with Skill'. Its ecosystem includes certificate, diploma, degree and postgraduate programming and industry collaboration.<sup class='ref' data-ref='48'>48</sup></p><p class='ask'><strong>Recommended ask:</strong> Establish a jointly designed emerging-technology certificate and diploma stack in AI, cybersecurity, cloud or digital skills, with KSU retaining academic governance and award authority while we provide industry curriculum, platform, labs, instructors and employer pathways.</p><p class='muted'>Potential approval chain: school or department, Dean, academic authorities, Registrar, competent statutory body.</p>" },
        { q: "Delhi: Delhi Skill and Entrepreneurship University", a: "<p>DSEU is a State university created under the Delhi Skill and Entrepreneurship University Act. Its current offerings include three-year technical diploma programmes, and its constituting framework expressly contemplates degree, diploma and certificate programmes.<sup class='ref' data-ref='47'>47</sup></p><p class='ask'><strong>Recommended ask:</strong> Launch an applied certificate or credit-enabled programme through an academic school, initially as a pilot and only later seek embedding into diploma or degree curricula.</p>" },
        { q: "Assam: Assam Skill University", a: "<p>Derives from the Assam Skill University Act, 2020, and in 2026 publicly lists both long-term and short-term courses. It has also published an SOP expressly intended to structure partnerships with companies, MSMEs, start-ups and industry associations, which makes the partnership route institutionally explicit.<sup class='ref' data-ref='49'>49</sup></p><p class='ask'><strong>Recommended ask:</strong> Become an industry curriculum and delivery partner for a short-term emerging-tech programme, with a later pathway into an academic or work-integrated programme.</p>" },
        { q: "Maharashtra and Sikkim: dual-capability universities", a: "<p>Ratan Tata Maharashtra State Skills University is particularly important because NCVET's own platform records it as a dual Awarding Body. That allows an architecture in which a State Skill University relationship and formal NCVET vocational functions sit within the same institutional ecosystem.<sup class='ref' data-ref='41'>41</sup> Medhavi Skill University in Sikkim appears on NCVET's recognised AB list and provides a similar hybrid route.<sup class='ref' data-ref='40'>40</sup></p><p class='ask'><strong>Recommended ask:</strong> Explore dual credential programmes where learners receive a university credential plus, where an approved qualification exists, an NCVET-regulated vocational credential.</p>" }
      ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "universities",
    num: "07",
    title: "Universities & IITs",
    eyebrow: "MASTER TABLE D",
    summary: "Eight institution types, what each can actually issue, and the four very different ways an IIT can be involved.",
    wwh: {
      what: "The higher-education route: which institution types can issue certificates, award credit, run joint programmes and confer formal academic qualifications, and how approval travels inside them.",
      why: "A private organisation should not ask a university merely to sign the certificate. It should ask the university to approve an academically governed programme. Degrees are restricted by Section 22 of the UGC Act to universities established under specified legal routes and institutions specially empowered by Parliament.",
      how: "Identify the academic sponsor first, then the approving body, then the Registrar. Settle certificate wording before any commercial agreement."
    },
    blocks: [
      { t: "table", id: "tableD", title: "Master Table D: university models", searchable: true,
        columns: [
          { key: "type", label: "Institution type", width: "wide" },
          { key: "cert", label: "Certificate", filter: true },
          { key: "credit", label: "Academic credit" },
          { key: "joint", label: "Joint programme with private partner" },
          { key: "formal", label: "Formal academic qualification" },
          { key: "approval", label: "Typical approval route", width: "wider" }
        ],
        rows: [
          { type: "IIT / Institute of National Importance", cert: "Yes", credit: "Yes, if academically approved", joint: "Yes, precedents exist", formal: "Yes under constituting Act", approval: "Department or Centre, then Dean / CEP / Academic Affairs, then competent institute authority" },
          { type: "NIT / IIIT / other INI", cert: "Generally possible", credit: "Yes where approved", joint: "Possible", formal: "Under constituting Act and statutes", approval: "Department, then continuing education or academic authority, then institute" },
          { type: "Central University", cert: "Yes", credit: "Yes", joint: "Possible", formal: "Yes", approval: "Department or School, then Board of Studies, then Academic Council or delegated authority" },
          { type: "State University", cert: "Yes", credit: "Yes", joint: "Possible", formal: "Yes", approval: "Department, then Board of Studies, then Academic Council or Syndicate" },
          { type: "Private University", cert: "Yes if validly established", credit: "Yes", joint: "Commonly possible", formal: "Yes within its legal powers", approval: "School, then academic and statutory bodies" },
          { type: "Deemed-to-be University", cert: "Yes", credit: "Yes", joint: "Possible", formal: "Yes within deemed-university framework", approval: "Department, then academic authorities" },
          { type: "State Skill University", cert: "Yes", credit: "Yes", joint: "Often designed for industry involvement", formal: "Yes", approval: "School, then industry and academic governance, then statutory authorities" },
          { type: "Autonomous college", cert: "Add-on or certificate programmes may be possible", credit: "Within its academic autonomy and parent framework", joint: "Possible", formal: "Degree-awarding authority must be checked separately", approval: "Principal or Dean, then Board of Studies, Academic Council or affiliating university" }
        ] },

      { t: "split", title: "The safest contract architecture",
        left: { title: "University owns", items: ["Academic approval", "Definition and approval of learning outcomes", "Faculty and assessment approval", "Control of credits", "Issue of the university credential"] },
        right: { title: "External partner supplies", items: ["Technology and content", "Labs and LMS", "Faculty and industry experts where agreed", "Learner acquisition", "Placement and employer engagement", "Co-branding if approved"] } },

      { t: "heading", text: "Can an IIT be an Awarding Body for us?" },
      { t: "prose", html: "<p>Yes in one specific sense, but that is only one of four very different structures.</p>" },

      { t: "table", id: "iitroutes", title: "Four IIT structures",
        columns: [
          { key: "route", label: "Route", width: "wide" },
          { key: "answer", label: "Answer", filter: true, chip: true },
          { key: "basis", label: "Legal / institutional basis", width: "wider" },
          { key: "learner", label: "What the learner gets" },
          { key: "need", label: "What we need" }
        ],
        rows: [
          { route: "IIT as NCVET Awarding Body", answer: "Yes, where separately recognised", basis: "NCVET recognises universities and HEIs as ABs. IIT Guwahati currently appears as an NCVET-recognised AB with PAN-India jurisdiction.", learner: "Approved NSQF qualification", need: "Qualification must sit inside the IIT's NCVET recognition scope", ref: "50" },
          { route: "IIT independently issues its certificate", answer: "Yes", basis: "IIT statutory and institutional powers plus continuing-education mechanisms. IIT Delhi states that its Continuing Education Programme is the statutory body for conducting certificate programmes and issuing certificates.", learner: "IIT continuing-education or completion certificate", need: "Internal IIT programme approval", ref: "29" },
          { route: "IIT jointly delivers with an external organisation", answer: "Yes, precedents exist", basis: "IIT Delhi CEP publicly lists programme partners including private education companies such as TimesPro and TeamLease EdTech.", learner: "Usually an IIT CEP certificate under programme rules", need: "Academic ownership, commercial agreement, delivery and brand rules", ref: "51" },
          { route: "IIT gives academic credit or curriculum validation without being an NCVET AB", answer: "Potentially yes", basis: "NCrF applies to INIs including IITs, while the institution retains academic authority over assessment and credits.", learner: "Academic credits, approved course status or institutional endorsement", need: "Formal academic approval, not merely continuing-education marketing", ref: "10" }
        ] },

      { t: "callout", tone: "danger", title: "Put this line in every commercial proposal",
        html: "\"Certificate issued by IIT X\" is not the same claim as \"qualification awarded by IIT X as an NCVET-recognised Awarding Body.\" Both may be valuable. Their regulatory meaning is different.<sup class='ref' data-ref='52'>52</sup>" },

      { t: "flow", title: "IIT partnership operating model", orientation: "chain",
        steps: [
          "Identify the IIT department or continuing education centre",
          "Determine the desired outcome: certificate, credit or NCVET qualification",
          "Certificate goes through the CEP or CEC process; credit goes through Academic Affairs; NCVET qualification requires the IIT to hold AB recognition",
          "Secure academic approval: Senate or delegated authority for credit, qualification scope and NSQF positioning for NCVET",
          "Commercial and programme partner agreement",
          "Pilot"
        ] },

      { t: "prose", html: "<p>For continuing education, approach the Dean or Head of Continuing Education plus the academic department that will own the subject. For credit, add the Dean Academic Affairs or Academic Section. For NCVET qualification work, add the institute team responsible for its AB recognition.<sup class='ref' data-ref='65'>65</sup></p>" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sectors",
    num: "08",
    title: "Sectors & programmes",
    eyebrow: "SSC + OEM STRATEGY",
    summary: "Which Sector Skill Council owns your occupation, thirteen programme-by-programme strategies, and where OEM credentials fit.",
    wwh: {
      what: "The mapping layer. Occupation to sector council, programme to route, and technology programme to vendor certification.",
      why: "The qualification should be allocated by the occupation and learning outcomes, not by whatever technology appears in the course title. 'AI Engineer' is primarily a digital occupation; 'AI-enabled medical imaging technician' may belong in a healthcare occupation with technology components.",
      how: "Search the NQR first. Creating a new QP where an appropriate approved qualification already exists adds unnecessary time and regulatory burden."
    },
    blocks: [
      { t: "callout", tone: "blue", title: "What actually matters contractually",
        html: "NSDC reports 36 Sector Skill Councils in its ecosystem. The only issue that matters contractually is not whether an entity calls itself an SSC. It is whether it is currently recognised by NCVET for the awarding function your programme requires, and whether the qualification itself is currently approved.<sup class='ref' data-ref='53'>53</sup>" },

      { t: "table", id: "ssc", title: "Sector councils to investigate for emerging technology", searchable: true,
        columns: [
          { key: "council", label: "Council / sector", width: "wide" },
          { key: "programmes", label: "Relevant programmes" },
          { key: "role", label: "Role" },
          { key: "opportunity", label: "Partnership opportunity", width: "wide" },
          { key: "limit", label: "Key limitation", width: "wide" }
        ],
        rows: [
          { council: "IT-ITeS Sector Skills Council / NASSCOM ecosystem", programmes: "AI, GenAI, data science, analytics, coding, cybersecurity, cloud", role: "Standards, assessments, qualifications and industry skills", opportunity: "Adopt existing qualifications, create a new one, integrate FutureSkills-type content", limit: "A programme being offered by NASSCOM does not itself prove every course is an NCVET qualification" },
          { council: "Electronics Sector Skills Council", programmes: "Embedded AI, IoT, semiconductor, electronics hardware, device cyber", role: "Electronics occupational standards", opportunity: "Hardware-software hybrid qualifications", limit: "Pure software programmes may fit IT-ITeS better", ref: "54" },
          { council: "Telecom Sector Skill Council", programmes: "Telecom cloud, 5G, network cyber, IoT", role: "Telecom occupations", opportunity: "Network and cloud-edge programmes", limit: "Less suitable for generic software; check current AB ecosystem before contracting", ref: "55" },
          { council: "Media & Entertainment Skills Council", programmes: "Animation, VFX, gaming, immersive media, AVGC-XR", role: "M&E qualifications", opportunity: "Strong route for AVGC-XR", limit: "Programme must genuinely map to M&E occupations", ref: "42" },
          { council: "Management & Entrepreneurship and Professional Skills Council", programmes: "Management, entrepreneurship and professional skills", role: "Business and professional occupations", opportunity: "Employability, management, entrepreneurship", limit: "Not the primary owner of deeply technical AI programmes", ref: "55" },
          { council: "BFSI sector skill ecosystem", programmes: "FinTech, financial analytics, AI for finance", role: "Financial-sector occupations", opportunity: "Vertical AI and data qualification", limit: "Generic data science should not be artificially classified as BFSI" },
          { council: "Healthcare skill ecosystem", programmes: "Health informatics, healthcare data and AI", role: "Healthcare occupations", opportunity: "Vertical health-tech pathway", limit: "Clinical and professional scope can involve additional regulators" },
          { council: "Cross-sector route", programmes: "AI for manufacturing, banking, health, media, retail", role: "Primary occupational sector plus enabling digital skills", opportunity: "Co-development or adoption", limit: "Sector ownership must be agreed before qualification submission" }
        ] },

      { t: "table", id: "tableG", title: "Master Table G: existing qualifications and credit-eligible courses",
        note: "The first operational task should always be to search the NQR and current AB qualification catalogues before developing anything new.",
        columns: [
          { key: "q", label: "Qualification / course", width: "wide" },
          { key: "sector", label: "Sector", filter: true },
          { key: "level", label: "Level" },
          { key: "body", label: "Awarding / certificate body", width: "wide" },
          { key: "duration", label: "Duration" },
          { key: "prog", label: "Relevant programme" }
        ],
        rows: [
          { q: "Digital Application Fundamentals (STEM)", sector: "Digital & Emerging Technology", level: "NCrF 6.5 on SWAYAM Plus", body: "NASSCOM / IT-ITeS SSC ecosystem with SWAYAM Plus certificate arrangement", duration: "30 hours", prog: "AI, cloud, cybersecurity, data", ref: "56" },
          { q: "Digital Engineering", sector: "Engineering / digital", level: "NCrF 6.0 on platform", body: "NASSCOM / IT-ITeS SSC", duration: "33 hours", prog: "Digital engineering", ref: "56" },
          { q: "Digital 101", sector: "IT & services", level: "NCrF 6.0 on platform", body: "NASSCOM / IT-ITeS SSC", duration: "30 hours", prog: "Foundation digital skills", ref: "56" },
          { q: "Fundamentals of Data Curation using Python", sector: "IT / data", level: "NQR-listed", body: "Check the live NQR qualification file before adoption", duration: "Check current file", prog: "Python and data", ref: "57" }
        ] },

      { t: "prose", html: "<p>The SWAYAM Plus example matters because it shows that an industry-aligned technology course can simultaneously be delivered online and be designated credit-eligible under the NCrF architecture. The platform identifies IIT Madras as the implementing institution and separately identifies the course or certificate provider.<sup class='ref' data-ref='28'>28</sup></p>" },

      { t: "table", id: "progstrategy", title: "Programme-by-programme qualification strategy", searchable: true,
        columns: [
          { key: "prog", label: "Programme", width: "wide" },
          { key: "first", label: "First formal route to investigate", width: "wide" },
          { key: "uni", label: "University route" },
          { key: "industry", label: "Industry route" },
          { key: "gap", label: "Likely gap / opportunity", width: "wide" }
        ],
        rows: [
          { prog: "Artificial Intelligence", first: "IT-ITeS SSC; search NQR first", uni: "CS and AI departments, IIT continuing education", industry: "Microsoft, Google Cloud, AWS", gap: "Advanced applied AI roles change faster than qualification cycles" },
          { prog: "Generative AI", first: "IT-ITeS SSC plus a micro-credential approach", uni: "Continuing education or elective", industry: "Microsoft, Google Cloud, AWS", gap: "Strong case for stackable micro-credentials before a full QP" },
          { prog: "Data Science", first: "IT-ITeS or existing data qualifications", uni: "University certificate or academic elective", industry: "Google Cloud, Microsoft, AWS", gap: "Mature enough for both formal and academic pathways" },
          { prog: "Data Analytics", first: "IT-ITeS plus industry", uni: "Business, CS or data school", industry: "Microsoft, Google Cloud", gap: "Good candidate for broad university adoption" },
          { prog: "Cloud Computing", first: "IT-ITeS or telecom depending on role", uni: "CS and IT departments", industry: "AWS, Azure, Google Cloud", gap: "OEM dual credential particularly valuable" },
          { prog: "Cybersecurity", first: "IT-ITeS, electronics or telecom according to occupation", uni: "CS, cyber centres, continuing education", industry: "Cisco, Microsoft, cloud vendors", gap: "Specialisations can be modularised" },
          { prog: "Coding / software development", first: "IT-ITeS", uni: "CS departments", industry: "Vendor and tool badges where useful", gap: "Existing ecosystem is broad" },
          { prog: "AI-assisted coding", first: "Initially micro-credential or continuing education", uni: "Excellent IIT or university certificate candidate", industry: "AI coding platforms plus cloud vendors", gap: "Terminology and occupation are too new to assume a dedicated formal QP" },
          { prog: "Communication skills", first: "Professional skills or employability ecosystem", uni: "Add-on or elective", industry: "Employer assessment", gap: "Better as a cross-cutting module than a standalone national qualification" },
          { prog: "Employability skills", first: "Professional skills, DGT or SSC common modules", uni: "Foundation course", industry: "Employer-aligned", gap: "Existing content often preferable to a new QP" },
          { prog: "Management / business", first: "MEPSC or university", uni: "Business school or executive education", industry: "Professional credentials", gap: "University route often stronger" },
          { prog: "AVGC-XR", first: "MESC primarily", uni: "Design, media and technology schools", industry: "Adobe and creative-tool ecosystems where appropriate", gap: "Strong formal sector fit" },
          { prog: "Emerging technologies", first: "Choose by occupation, not buzzword", uni: "University micro-credential", industry: "OEM certification", gap: "Modular architecture prevents rapid obsolescence" }
        ] },

      { t: "heading", text: "OEM and industry credentials" },
      { t: "prose", html: "<p>Industry certifications should be treated as a separate recognition layer. Microsoft describes its credentials as verified industry-recognised credentials, AWS certifications validate specific cloud competencies, Cisco certifications validate IT-role knowledge and skills, and Google Cloud describes its certification as industry recognised. None of these descriptions turns the credential into an Indian academic degree or an NSQF qualification.<sup class='ref' data-ref='58'>58</sup> For GenAI specifically, Google Cloud now has a Generative AI Leader certification, illustrating how quickly OEM ecosystems can credential emerging technologies compared with formal qualification-development cycles.<sup class='ref' data-ref='59'>59</sup></p>" },

      { t: "split", title: "Two independent layers on one programme",
        left: { title: "Formal layer", items: ["University or NCVET credential", "Equals formal education or vocational recognition", "Slow to approve, durable in value"] },
        right: { title: "Industry layer", items: ["AWS, Microsoft, Google or Cisco", "Equals employer and technology validation", "Fast to attach, vendor dependent"] } }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "credit",
    num: "09",
    title: "Academic credit",
    eyebrow: "NCrF · ABC · RPL",
    summary: "How credit is actually created, why ABC does not create it, and where Recognition of Prior Learning opens a long-term route.",
    wwh: {
      what: "The academic credit chain from course design to an ABC record, plus the RPL route that lets a university evaluate externally delivered learning.",
      why: "ABC registration does not turn a non-credit private course into academic credit. The university must first establish the academic course, credit value and assessment through its own competent governance.",
      how: "Design courses for credit from day one. Define learning outcomes, propose a credit value under institutional rules, and secure written academic approval before any credit claim reaches a learner."
    },
    blocks: [
      { t: "prose", html: "<p>The National Credit Framework was jointly developed across UGC, AICTE, NCVET, NIOS, CBSE, NCERT and the relevant ministries. It is intended to integrate academic, vocational and experiential learning and align NHEQF and NSQF within a common credit architecture.<sup class='ref' data-ref='60'>60</sup></p>" },

      { t: "flow", title: "The operating chain", orientation: "chain",
        steps: [
          "Course exists",
          "Learning outcomes defined",
          "Credit value proposed under institutional and framework rules",
          "Assessment takes place",
          "Authorised university or institution awards credit",
          "Credit can be recorded in ABC",
          "Another programme or institution may accept it under its rules"
        ] },

      { t: "callout", tone: "danger", title: "ABC does not sit at the top of the chain",
        html: "ABC is a digital mechanism for storage, accumulation, transfer and redemption of credits issued by eligible institutions. Its own eligibility rules focus on award-granting institutions recognised by MoE, UGC, AICTE, NCVET or another competent regulator and authorised to confer relevant awards. ABC registration does not turn a non-credit private course into academic credit.<sup class='ref' data-ref='25'>25</sup>" },

      { t: "prose", html: "<p>UGC's NCrF implementation guidance confirms that assessment is mandatory for creditisation and that HEIs retain institutional flexibility within the national frameworks.<sup class='ref' data-ref='61'>61</sup> UGC's 2025 higher-education RPL guidelines provide for RPL credits up to 30 percent of a degree, subject to institutional policies and learning-outcome equivalence, and require RPL credits sent to ABC to be identified as such.<sup class='ref' data-ref='62'>62</sup></p>" },

      { t: "flow", title: "The long-term RPL strategy", orientation: "chain",
        steps: [
          "Learner completes an externally delivered skill programme",
          "Robust assessment and evidence captured",
          "University evaluates outcomes under RPL or an approved credit framework",
          "Credits accepted where the rules permit",
          "ABC record created"
        ] },

      { t: "callout", tone: "gold", title: "Do not market this as automatic conversion",
        html: "The HEI retains academic decision-making authority throughout.<sup class='ref' data-ref='63'>63</sup>" },

      { t: "table", id: "creditvsqual", title: "Qualification recognition compared with academic credit",
        columns: [
          { key: "q", label: "Question", width: "wide" },
          { key: "qual", label: "Qualification recognition", width: "wide" },
          { key: "credit", label: "Academic credit", width: "wide" }
        ],
        rows: [
          { q: "What does it prove?", qual: "Learner achieved a defined qualification", credit: "Learner completed a quantified unit of academic learning" },
          { q: "Primary authority", qual: "NCVET and AB, DGT, university or board depending on the qualification", credit: "University or authorised HEI" },
          { q: "Does an NSQF level automatically give degree credit?", qual: "No", credit: "The HEI must accept or award credit" },
          { q: "Does ABC create it?", qual: "No", credit: "No, ABC records eligible credit" },
          { q: "Can an SSC certificate automatically become degree credit?", qual: "No", credit: "Only if the HEI formally recognises it" },
          { q: "Can an HEI recognise vocational learning?", qual: "Potentially", credit: "Yes, through approved frameworks, RPL and credit rules" },
          { q: "Is assessment required?", qual: "Yes for regulated qualifications", credit: "NCrF guidance says assessment is mandatory for creditisation" }
        ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "partnerships",
    num: "10",
    title: "Partnership playbook",
    eyebrow: "MASTER TABLE F",
    summary: "Twelve partnership models, eight outreach sequences, what to say to each partner, and copy-ready first-contact templates.",
    wwh: {
      what: "The operating manual for approaching and contracting with every kind of partner, from NCVET to an OEM partner programme lead.",
      why: "Most partnerships fail on ambiguity: who owns the qualification, who controls certificate issuance, whose brand can appear and what happens on termination.",
      how: "Choose the model, run the outreach sequence, use the template, then close with the documentation checklist and the pre-signing evidence list."
    },
    blocks: [
      { t: "table", id: "tableF", title: "Master Table F: partnership options", searchable: true,
        columns: [
          { key: "model", label: "Model", width: "wide" },
          { key: "learner", label: "What the learner gets", width: "wide" },
          { key: "we", label: "What we control" },
          { key: "they", label: "What the partner controls" },
          { key: "dep", label: "Dependency", filter: true, chip: true },
          { key: "scale", label: "Scalability", filter: true },
          { key: "risk", label: "Key risk" }
        ],
        rows: [
          { model: "Become NCVET AB", learner: "Our AB's approved NSQF qualification", we: "Large part of ecosystem", they: "NCVET recognition and regulatory requirements", dep: "Very high", scale: "High once established", risk: "Compliance burden" },
          { model: "Existing AB", learner: "AB-issued NSQF qualification", we: "Delivery and content subject to agreement", they: "Qualification, assessment architecture, certification", dep: "Medium-high", scale: "High", risk: "Partner lock-in" },
          { model: "Qualification development partnership", learner: "New qualification", we: "Curriculum and IP can be negotiated", they: "AB plus NSQC / NCVET approval", dep: "Medium", scale: "High", risk: "Ownership ambiguity" },
          { model: "University-certified programme", learner: "University certificate", we: "Delivery, technology and industry elements", they: "Academic governance and award", dep: "Medium", scale: "High", risk: "Branding without substantive governance" },
          { model: "University credit-bearing course", learner: "Academic credits", we: "Curriculum input and delivery", they: "University owns credit and assessment", dep: "High", scale: "High", risk: "Slow approvals" },
          { model: "Co-branded certificate", learner: "Joint completion credential", we: "Significant", they: "Brand and signature approval", dep: "Medium", scale: "High", risk: "Misstated recognition" },
          { model: "State Skill University", learner: "Certificate, diploma, credit or NSQF award if a recognised AB", we: "Delivery and content by agreement", they: "Academic and/or AB authority", dep: "Medium", scale: "High", risk: "State and institution dependence" },
          { model: "State Skill Mission", learner: "Scheme credential or AB qualification", we: "Delivery", they: "Government procurement and standards", dep: "High", scale: "State scale", risk: "Tender cycles" },
          { model: "Sector Skill Council", learner: "NSQF qualification where the SSC is an AB", we: "Delivery and curriculum input", they: "Qualification, assessment and certification", dep: "Medium-high", scale: "National", risk: "Scope mismatch" },
          { model: "OEM", learner: "Vendor credential", we: "Training preparation", they: "Vendor exam and credential", dep: "Low-medium", scale: "Very high", risk: "Vendor dependency" },
          { model: "Academic plus industry dual credential", learner: "University certificate or credit plus OEM", we: "Delivery orchestration", they: "Separate university and vendor controls", dep: "Diversified", scale: "Very high", risk: "Operational complexity" },
          { model: "Training Provider under an existing qualification", learner: "Existing qualification", we: "Training", they: "AB certification and assessment", dep: "Medium", scale: "High", risk: "Margin and control" }
        ] },

      { t: "table", id: "outreach", title: "Outreach sequences",
        columns: [
          { key: "partner", label: "Partner", filter: true },
          { key: "seq", label: "Outreach sequence", width: "widest" }
        ],
        rows: [
          { partner: "IIT / INI", seq: "Identify department, identify the CEP or CEC mechanism, secure a faculty sponsor, submit a two-page concept, agree academic governance, settle certificate wording, commercial and legal agreement, institute approvals, pilot" },
          { partner: "University", seq: "Dean or HoD, Registrar or Academic Affairs, curriculum mapping, certificate versus credit decision, Board of Studies or Academic Council route, MoU, pilot" },
          { partner: "State Skill University", seq: "Industry Partnerships, relevant school, Registrar, determine university versus NCVET credential, approval, pilot" },
          { partner: "State Government / SSDM", seq: "Mission Director or CEO, concise government note, map State priority and beneficiaries, identify funding and procurement route, pilot approval, awarder selection, implementation" },
          { partner: "Sector Skill Council", seq: "CEO or Head Qualifications, qualification-gap note, compare against NQR, adopt an existing QP or develop a new one, training affiliation, assessment, certification" },
          { partner: "Existing NCVET AB", seq: "CEO or Qualifications Head, share curriculum, gap mapping, commercial and quality diligence, affiliation, assessment agreement, launch" },
          { partner: "Technical Education Board", seq: "Director Technical Education or Board Secretary, confirm statutory power, programme concept, curriculum committee, affiliation or approval, examination and certification" },
          { partner: "NCVET direct AB", seq: "Pre-consultation, eligibility gap assessment, governance and financial package, KaushalVerse filing, scrutiny, recognition, qualifications, training and assessment network" }
        ] },

      { t: "table", id: "whattosay", title: "What to say to each partner", searchable: true,
        columns: [
          { key: "partner", label: "Partner", filter: true },
          { key: "matters", label: "What matters to them", width: "wide" },
          { key: "offer", label: "What we offer", width: "wide" },
          { key: "need", label: "What we need" },
          { key: "learner", label: "Learner receives" },
          { key: "inst", label: "Institution receives" }
        ],
        rows: [
          { partner: "University", matters: "Academic standards, employability, outcomes, reputation", offer: "Industry curriculum, LMS, labs, employer links, scale", need: "Programme approval, academic oversight, certificate or credit", learner: "University credential", inst: "New industry programme, revenue and outcomes" },
          { partner: "IIT / INI", matters: "Academic quality, faculty relevance, reputation, selectivity", offer: "Applied curriculum, platform, industry use cases, operations", need: "CEP or CEC or academic partnership", learner: "IIT or INI credential as agreed", inst: "Outreach, industry engagement, programme income" },
          { partner: "Skill University", matters: "Work integration and placements", offer: "Technology curriculum plus delivery network", need: "Award, credit or qualification partnership", learner: "Skill university credential", inst: "Scale and industry relevance" },
          { partner: "SSDM", matters: "Employment, inclusion, measurable outcomes", offer: "Mobilisation, technology, training, placement data", need: "Government pilot or programme access", learner: "Scheme or approved credential", inst: "State skilling outcomes" },
          { partner: "SSC / AB", matters: "Qualification integrity, sector demand", offer: "Demand, curriculum, employers, learners", need: "Qualification access or development", learner: "NSQF award", inst: "Certification volume and industry relevance" },
          { partner: "OEM", matters: "Product skills and exam adoption", offer: "Learner volume and training", need: "Partner and exam integration", learner: "OEM certification", inst: "Ecosystem adoption" },
          { partner: "Technical Board", matters: "Academic standards and exam integrity", offer: "Updated industry curriculum and labs", need: "Formal board route", learner: "Board credential where approved", inst: "Modernised programme" }
        ] },

      { t: "heading", text: "First-contact templates" },
      { t: "templates", items: [
        { label: "Formal introductory email", subject: "Proposal for industry-aligned [AI / Data / Cybersecurity] programme partnership",
          body: "Dear [Title / Name],\n\nWe are developing an industry-aligned programme portfolio in [domain] and are exploring a structured partnership with [Institution] rather than a simple co-branding arrangement.\n\nWe would like to discuss a model under which [Institution] provides the appropriate academic or qualification governance while we contribute curriculum development, technology infrastructure, industry practitioners, learner delivery and employer engagement.\n\nDepending on your framework, the programme could be structured as a university or institutional certificate, a credit-bearing course, a formal skill qualification or a dual credential.\n\nWe have prepared a concise programme architecture and would value a 30-minute discussion with the relevant academic and partnerships team.\n\nRegards,\n[Name / Role]" },
        { label: "LinkedIn message",
          body: "We are building industry-aligned programmes in [domain] and are exploring institutional partnerships covering academic governance, certification and potentially credits. I believe [Institution] could be a strong fit. May I send you a two-page concept note and request a brief discussion with the appropriate team?" },
        { label: "WhatsApp through a mutual connection",
          body: "Thank you for connecting us. We are exploring a structured partnership with [Institution] for emerging-technology programmes, potentially covering institutional certification, academic credit or formal skill qualifications depending on the institution's framework. We have a short concept note and would appreciate a brief exploratory meeting with the appropriate academic or partnership team." },
        { label: "Meeting request",
          body: "We would like to request a 30 to 45 minute meeting to assess whether our [programme] can fit within your existing certificate, continuing education, credit or qualification framework. The discussion would focus on academic governance, learner outcomes, certification structure, delivery responsibilities and a possible pilot." },
        { label: "Government meeting note introduction",
          body: "Purpose: Explore a State partnership for employment-linked training in [domain].\n\nProposed structure: State identifies target beneficiaries and priorities; an authorised awarding institution governs the credential; we provide curriculum, digital delivery, labs, trainers, industry projects and placement support.\n\nDecision sought: Identification of the appropriate State credential pathway and approval for development of a pilot proposal." },
        { label: "University concept note introduction",
          body: "This proposal is for an academically governed, industry-aligned programme rather than a certificate-branding arrangement. The institution would retain control over curriculum approval, assessment requirements, academic standards and the credential. The industry partner would provide applied curriculum, technology, delivery support, practitioner faculty and employer integration." }
      ] },

      { t: "table", id: "meetingprep", title: "Meeting preparation framework", searchable: true,
        columns: [
          { key: "partner", label: "Partner", filter: true },
          { key: "bring", label: "Bring", width: "wide" },
          { key: "ask", label: "Questions to ask", width: "wide" },
          { key: "assume", label: "Do not assume", width: "wide" },
          { key: "decide", label: "Decisions needed" },
          { key: "evidence", label: "Evidence before signing", width: "wide" }
        ],
        rows: [
          { partner: "IIT / INI", bring: "Two-page concept, curriculum, faculty profiles, delivery model", ask: "Is this CEP, CEC, academic credit or NCVET? Who approves certificate wording?", assume: "That the IIT brand means NSQF", decide: "Credential, approvals, faculty role", evidence: "Institute approval, brand authorisation, awarding wording" },
          { partner: "University", bring: "Curriculum, credit mapping, assessment", ask: "Can credits be awarded? Which statutory body approves?", assume: "That an MoU creates academic credit", decide: "Certificate versus credit", evidence: "Academic approval minutes or order" },
          { partner: "Skill University", bring: "Programme plus qualification mapping", ask: "University award or NCVET award?", assume: "That all skill-university awards are NSQF", decide: "Exact credential", evidence: "University plus AB status where relevant" },
          { partner: "SSC / AB", bring: "NQR comparison, demand evidence", ask: "Existing qualification? New QP? What scope?", assume: "That an AB can certify anything", decide: "QP and ownership", evidence: "Current NCVET recognition plus qualification file" },
          { partner: "SSDM", bring: "Government note, outcomes, costing", ask: "Procurement or funding? Who awards? What geography?", assume: "That a government programme equals a government qualification", decide: "Pilot mechanism", evidence: "Scheme order, certification authority" },
          { partner: "Technical Board", bring: "Curriculum and level mapping", ask: "Does the statute permit this award? Affiliation? Exams?", assume: "That the board can approve arbitrary short courses", decide: "Exact board credential", evidence: "Regulation or order and affiliation approval" },
          { partner: "OEM", bring: "Certification mapping", ask: "Authorised training status? Exam voucher? Branding?", assume: "That training completion equals professional certification", decide: "Exam pathway", evidence: "Vendor partner terms" }
        ] },

      { t: "table", id: "docs", title: "Documentation and approval checklist", searchable: true,
        note: "Twenty-one documents and capabilities across six partner types.",
        columns: [
          { key: "doc", label: "Document / capability", width: "wide" },
          { key: "ncvet", label: "NCVET AB" },
          { key: "ab", label: "Existing AB partner" },
          { key: "uni", label: "University" },
          { key: "ssdm", label: "SSDM" },
          { key: "board", label: "Technical Board" },
          { key: "oem", label: "OEM" }
        ],
        rows: [
          { doc: "Incorporation / legal documents", ncvet: "Usually mandatory", ab: "Usually mandatory", uni: "Usually mandatory", ssdm: "Usually mandatory", board: "Often required", oem: "Often required" },
          { doc: "Organisation profile", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Often" },
          { doc: "Audited financials", ncvet: "Usually mandatory", ab: "Often", uni: "Depends", ssdm: "Often", board: "Depends", oem: "Depends" },
          { doc: "Governance structure", ncvet: "Mandatory", ab: "Often", uni: "Depends", ssdm: "Depends", board: "Depends", oem: "Optional" },
          { doc: "Curriculum", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Required for alignment" },
          { doc: "Learning outcomes", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Often", board: "Mandatory", oem: "Often" },
          { doc: "Qualification file", ncvet: "Mandatory for a new qualification", ab: "Mandatory if a new QP", uni: "Not normally", ssdm: "Depends", board: "Depends", oem: "No" },
          { doc: "Occupational standards", ncvet: "Often mandatory for an occupational QP", ab: "As applicable", uni: "Optional", ssdm: "Depends", board: "Depends", oem: "No" },
          { doc: "Assessment framework", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Vendor-defined" },
          { doc: "Trainer criteria", ncvet: "Mandatory", ab: "Mandatory", uni: "Often", ssdm: "Mandatory", board: "Often", oem: "Vendor-defined" },
          { doc: "Infrastructure specification", ncvet: "Mandatory", ab: "Often", uni: "Depends", ssdm: "Often", board: "Often", oem: "Depends" },
          { doc: "Industry validation", ncvet: "Often required", ab: "Important", uni: "Strongly desirable", ssdm: "Strongly desirable", board: "Often", oem: "Not applicable" },
          { doc: "Faculty / trainer CVs", ncvet: "Often", ab: "Often", uni: "Usually required", ssdm: "Often", board: "Often", oem: "Depends" },
          { doc: "LMS evidence", ncvet: "Often", ab: "Often", uni: "Depends", ssdm: "Often", board: "Depends", oem: "Depends" },
          { doc: "Quality assurance framework", ncvet: "Mandatory", ab: "Mandatory", uni: "Often", ssdm: "Often", board: "Often", oem: "Depends" },
          { doc: "Learner grievance system", ncvet: "Mandatory", ab: "Often", uni: "Often", ssdm: "Often", board: "Depends", oem: "Depends" },
          { doc: "Certification architecture", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Vendor-defined" },
          { doc: "Data protection / learner records", ncvet: "Mandatory", ab: "Usually", uni: "Usually", ssdm: "Usually", board: "Often", oem: "Usually" },
          { doc: "MoU / services agreement", ncvet: "After recognition", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Partner agreement" },
          { doc: "IP ownership schedule", ncvet: "Strongly recommended", ab: "Essential", uni: "Essential", ssdm: "Essential", board: "Essential", oem: "Depends" },
          { doc: "Brand usage rules", ncvet: "Mandatory", ab: "Mandatory", uni: "Mandatory", ssdm: "Mandatory", board: "Mandatory", oem: "Mandatory" }
        ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "stakeholders",
    num: "11",
    title: "Stakeholder directory",
    eyebrow: "MASTER TABLE E",
    summary: "Sixteen stakeholder roles across regulators, awarding bodies, institutions, states and vendors, with the correct entry point for each.",
    wwh: {
      what: "Who to contact, in which order, and what to ask them for.",
      why: "Approaching a Registrar before an academic sponsor, or an SSC CEO before checking the NQR, wastes the meeting and the relationship.",
      how: "Filter by organisation type. Secure the academic or technical sponsor first, then the authority that signs."
    },
    blocks: [
      { t: "table", id: "tableE", title: "Master Table E: stakeholder directory", searchable: true,
        columns: [
          { key: "org", label: "Organisation", filter: true },
          { key: "role", label: "Stakeholder role", width: "wide" },
          { key: "why", label: "Why they matter" },
          { key: "need", label: "What we need", width: "wide" },
          { key: "entry", label: "Best entry point", width: "wide" }
        ],
        rows: [
          { org: "NCVET", role: "Director or team handling AB proposals", why: "Recognition architecture", need: "Clarify AB, qualification or deemed and dual route", entry: "NCVET proposal channel", ref: "64" },
          { org: "NCVET", role: "Qualifications / NSQF team", why: "New qualification process", need: "Validate route and qualification ownership", entry: "Formal concept note" },
          { org: "Existing NCVET AB", role: "CEO or Head Qualifications", why: "Can award existing and new NSQF qualifications", need: "Qualification adoption or co-development", entry: "CEO office, then the qualification team", ref: "38" },
          { org: "Sector Skill Council", role: "CEO, COO or Head Standards & Qualifications", why: "Sector fit", need: "Existing QP or new QP route", entry: "Partnership concept note" },
          { org: "Assessment Agency", role: "CEO or Head Operations", why: "Assessment delivery", need: "Assessment capacity and pricing", entry: "AB-approved route", ref: "7" },
          { org: "IIT", role: "Head or Dean Continuing Education", why: "Certificate route", need: "CEP or CEC programme", entry: "Continuing education office", ref: "65" },
          { org: "IIT", role: "Relevant Department Head or faculty programme coordinator", why: "Academic ownership", need: "Curriculum and faculty endorsement", entry: "Department first" },
          { org: "IIT", role: "Dean Academic Affairs", why: "Credit-bearing proposal", need: "Formal academic credit", entry: "After a department sponsor is secured" },
          { org: "University", role: "Registrar", why: "Institutional authority and contracts", need: "Programme and MoU route", entry: "Registrar after the academic sponsor" },
          { org: "University", role: "Dean or Head of School", why: "Academic sponsor", need: "Curriculum governance", entry: "Best initial academic contact" },
          { org: "University", role: "Dean Academic Affairs", why: "Credit", need: "Credit course or elective approval", entry: "Academic proposal" },
          { org: "State Skill University", role: "Registrar or Dean Industry Partnerships", why: "Academic plus skill route", need: "Pilot certificate, credit or qualification", entry: "Industry partnerships office" },
          { org: "SSDM", role: "Mission Director or CEO", why: "Government-scale programme", need: "State pilot or scheme", entry: "Formal government note" },
          { org: "State Technical Board", role: "Secretary, Director or Controller", why: "Diploma and certificate authority", need: "Approval or affiliation options", entry: "DTE or Board secretariat", ref: "24" },
          { org: "DGT / State Employment & Training", role: "Director", why: "ITI, CTS and apprenticeship", need: "Trade or apprenticeship route", entry: "State directorate", ref: "66" },
          { org: "OEM", role: "Education, Training or Partner Programme Lead", why: "Vendor credential", need: "Authorised training and exam integration", entry: "Partner programme" }
        ] },

      { t: "callout", tone: "navy", title: "Internal governance to establish",
        html: "A Credential Steering Committee with a regulatory and NCVET lead, a higher education partnerships lead, a state partnerships lead, a curriculum and assessment lead, legal and compliance, product, LMS and credentials, and industry and OEM partnerships. No salesperson or business-development executive should be able to alter recognition language without this group's approval." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "myths",
    num: "12",
    title: "Myths & risks",
    eyebrow: "CLAIMS GOVERNANCE",
    summary: "Twelve claims teams get wrong, each with a verdict, plus an eighteen-item risk register with mitigations.",
    wwh: {
      what: "The false-claim checklist and the risk register that sits behind it.",
      why: "Misstated recognition is the single fastest way to lose a regulator, a university partner and a customer at the same time.",
      how: "Filter the myths by verdict. Run the risk register quarterly against live partnerships."
    },
    blocks: [
      { t: "table", id: "mythtable", title: "What teams commonly get wrong", searchable: true,
        columns: [
          { key: "claim", label: "Statement", width: "wider" },
          { key: "verdict", label: "Verdict", filter: true, chip: true },
          { key: "reality", label: "Reality", width: "widest" }
        ],
        rows: [
          { claim: "If a university signs the certificate, it becomes nationally recognised.", verdict: "False", reality: "It becomes a university-issued certificate only if properly authorised by the university. That does not make it an NSQF qualification or a degree. UGC allows universities to run certificate programmes through their own governing processes.", ref: "9" },
          { claim: "An IIT certificate is equivalent to an NSQF qualification.", verdict: "False", reality: "An IIT can issue institutional certificates independently. An NSQF qualification requires the NCVET pathway. IIT Guwahati's separate NCVET AB recognition demonstrates the distinction.", ref: "67" },
          { claim: "A Sector Skill Council certificate automatically provides academic credit.", verdict: "False", reality: "Academic credit is controlled by the accepting HEI. NCrF enables mobility but assessment and HEI acceptance remain necessary.", ref: "68" },
          { claim: "DigiLocker availability means a qualification is government recognised.", verdict: "False", reality: "NAD and DigiLocker provide secure publication and legally usable digital records. Repository presence does not create the underlying institution's authority to issue the award.", ref: "27" },
          { claim: "ABC registration makes a course credit-bearing.", verdict: "False", reality: "ABC stores and transfers credits created by authorised institutions.", ref: "25" },
          { claim: "Co-branding with a government body makes the qualification government approved.", verdict: "False", reality: "Branding and qualification authority are separate. Verify the actual awarding statute or regulator." },
          { claim: "An Awarding Body can issue any qualification it wants.", verdict: "False", reality: "NCVET recognition operates within approved qualification, scope, jurisdiction and quality requirements.", ref: "69" },
          { claim: "Academic credit and NSQF level are the same thing.", verdict: "False", reality: "NSQF describes vocational qualification levels; academic credit quantifies assessed learning. NCrF connects the systems but does not collapse them into one concept.", ref: "60" },
          { claim: "A university partnership eliminates the need for academic approval.", verdict: "False", reality: "The university must use its competent governing or academic process for its programme and credential.", ref: "9" },
          { claim: "A certificate of completion is a qualification.", verdict: "Depends", reality: "It may simply prove attendance or completion unless it sits within a recognised qualification framework." },
          { claim: "Government-funded training is automatically a government qualification.", verdict: "False", reality: "The funding agency and the awarding authority can be entirely different." },
          { claim: "Industry certification is inferior because it is not government regulated.", verdict: "False", reality: "It provides a different form of value. Major vendors explicitly position certifications as industry-recognised competency validation.", ref: "70" }
        ] },

      { t: "table", id: "risks", title: "Risk register", searchable: true,
        columns: [
          { key: "risk", label: "Risk", filter: true },
          { key: "what", label: "What can go wrong", width: "wide" },
          { key: "mit", label: "Mitigation", width: "wide" }
        ],
        rows: [
          { risk: "Regulatory dependence", what: "One regulator or AB becomes a bottleneck", mit: "Keep university, AB and industry routes separate" },
          { risk: "Single-AB dependence", what: "Pricing, service or qualification access changes", mit: "Contract with two to three ABs across the portfolio" },
          { risk: "Qualification ownership", what: "Partner claims curriculum or QP ownership", mit: "IP schedule in the MoU from day one" },
          { risk: "Certification control", what: "Partner can withhold certificates", mit: "Define an objective issuance SLA and audit rights" },
          { risk: "Assessment control", what: "Assessments become slow or inconsistent", mit: "Approved multi-AA architecture where allowed" },
          { risk: "Misleading claims", what: "Sales team says 'government approved' without a basis", mit: "Pre-approved credential-language matrix" },
          { risk: "Renewal risk", what: "AB recognition expires or changes", mit: "Quarterly check of the NCVET list" },
          { risk: "Partner lock-in", what: "Programme cannot move elsewhere", mit: "Keep LMS, content and IP separable" },
          { risk: "Academic-credit ambiguity", what: "Marketing promises credits the Academic Council has not approved", mit: "Do not launch a credit claim before written approval" },
          { risk: "Brand misuse", what: "IIT or university logo used outside the approved programme", mit: "Written brand schedule" },
          { risk: "Geographic limits", what: "AB jurisdiction does not cover the delivery footprint", mit: "Verify current NCVET jurisdiction" },
          { risk: "State procurement risk", what: "Long tender and payment cycles", mit: "Begin with a pilot or institutional route" },
          { risk: "University delays", what: "Academic calendars delay approval", mit: "Start six to nine months before the required intake" },
          { risk: "Qualification obsolescence", what: "AI and cyber curriculum ages rapidly", mit: "Modular yearly curriculum refresh" },
          { risk: "Learner data ownership", what: "Partners dispute records or leads", mit: "Contractual data-controller and processor framework" },
          { risk: "Exclusivity", what: "Partner blocks alternative credential routes", mit: "Avoid portfolio-wide exclusivity" },
          { risk: "Outcome liability", what: "Employment promises become contractual", mit: "Define placement support versus guarantee precisely" },
          { risk: "Credential discontinuation", what: "OEM qualification changes", mit: "Keep programme outcomes vendor-neutral where possible" }
        ] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "architecture",
    num: "13",
    title: "Credential architecture",
    eyebrow: "SIX LAYERS",
    summary: "Six independent credential layers and the recommended stack for ten programme types.",
    wwh: {
      what: "The design pattern. Six layers that can be assembled independently, and the right combination for each programme type.",
      why: "The key design change is that university certification and academic credit are separate layers. They should not be bundled conceptually. A programme should not receive every layer merely because it can.",
      how: "Start from the learner outcome, select the minimum credible set of layers, and keep at least one alternative route for every strategically important programme."
    },
    blocks: [
      { t: "layers", title: "Six independent credential layers",
        items: [
          { key: "A", title: "Programme learning", body: "Our own completion credential. Always present. Fastest to change." },
          { key: "B", title: "External validation", body: "Industry or OEM exam credential. Employer-facing proof, vendor controlled." },
          { key: "C", title: "Formal vocational", body: "NSQF qualification where the occupation genuinely warrants it." },
          { key: "D", title: "Institutional", body: "University or IIT certificate where institutional value matters." },
          { key: "E", title: "Academic credit", body: "Only where degree mobility matters. Separate from layer D." },
          { key: "F", title: "State recognition", body: "Government pathway where distribution or public funding matters." }
        ] },

      { t: "table", id: "stacks", title: "Recommended credential stack by programme type", searchable: true,
        columns: [
          { key: "prog", label: "Programme type", width: "wide" },
          { key: "stack", label: "Recommended credential stack", width: "widest" }
        ],
        rows: [
          { prog: "GenAI bootcamp for professionals", stack: "Programme certificate + OEM + IIT or university certificate" },
          { prog: "AI job-role programme for entry-level learners", stack: "Programme + a suitable NCVET qualification + OEM" },
          { prog: "Data analytics for university students", stack: "University credit + programme certificate + industry credential" },
          { prog: "Cloud career programme", stack: "Programme + AWS, Azure or Google credential + optional NSQF" },
          { prog: "Cybersecurity professional programme", stack: "University or IIT certificate + vendor credential + formal qualification where job-role mapping is strong" },
          { prog: "AVGC-XR", stack: "Programme + MESC qualification + technology or tool credential" },
          { prog: "Employability programme", stack: "University or college credit or add-on certificate; avoid unnecessary full qualification creation" },
          { prog: "Management executive education", stack: "University or IIT executive certificate; formal NSQF route only where an occupational need exists" },
          { prog: "Government-funded youth skilling", stack: "State or central scheme + a current NCVET qualification + placement architecture" },
          { prog: "Rapidly evolving experimental technology", stack: "Institution or industry micro-credential first; formal QP after labour-market stability" }
        ] },

      { t: "callout", tone: "gold", title: "This architecture avoids the two biggest traps",
        html: "Waiting for formal qualification approval before launching innovation, and making regulatory claims that the actual award does not support." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "action",
    num: "14",
    title: "Action plan",
    eyebrow: "MASTER TABLE H · 90 DAYS",
    summary: "Fourteen prioritised pipeline items and a day 30, day 60, day 90 execution plan.",
    wwh: {
      what: "The execution layer. A prioritised pipeline of named organisations, then three thirty-day blocks with concrete deliverables.",
      why: "The first month should be an evidence and pipeline month rather than an application month. The NQR scan must precede new qualification design.",
      how: "Work P0 items to completion before opening P1 conversations. Do not announce university credits, an NCVET qualification or government recognition until documentary approval exists."
    },
    blocks: [
      { t: "table", id: "tableH", title: "Master Table H: action pipeline", searchable: true,
        columns: [
          { key: "p", label: "Priority", filter: true, chip: true },
          { key: "org", label: "Organisation / ecosystem", width: "wide" },
          { key: "model", label: "Proposed model" },
          { key: "stake", label: "Stakeholder", width: "wide" },
          { key: "ask", label: "Ask", width: "wide" },
          { key: "next", label: "Next action" },
          { key: "dep", label: "Dependency" }
        ],
        rows: [
          { p: "P0", org: "Internal", model: "Credential governance", stake: "CEO, academic and legal", ask: "Create an approved terminology and claims matrix", next: "Complete immediately", dep: "None" },
          { p: "P0", org: "NQR", model: "Qualification discovery", stake: "Internal qualification team", ask: "Map existing qualifications across AI, data, cyber, cloud and AVGC", next: "Build a qualification inventory", dep: "None", ref: "14" },
          { p: "P0", org: "NCVET", model: "Regulatory clarification", stake: "AB proposal and qualification team", ask: "Confirm the 2025 amended recognition pathway", next: "Send structured questions", dep: "Current guidelines", ref: "71" },
          { p: "P1", org: "IIT Guwahati", model: "NCVET AB and institutional partnership", stake: "Relevant AB and academic leadership", ask: "Explore qualification and certificate structures", next: "Request a meeting", dep: "Scope of IITG AB recognition", ref: "39" },
          { p: "P1", org: "IIT Delhi CEP", model: "Institutional certificate", stake: "CEP and subject department", ask: "Emerging-tech programme", next: "Submit a two-page concept", dep: "Faculty sponsor", ref: "72" },
          { p: "P1", org: "IT-ITeS / NASSCOM ecosystem", model: "Qualification and industry pathway", stake: "CEO and qualifications", ask: "Map AI, data, cyber and cloud qualifications", next: "Qualification workshop", dep: "Current NCVET scope" },
          { p: "P1", org: "MESC", model: "AVGC-XR qualification", stake: "CEO and qualifications", ask: "Map the VFX, gaming and XR portfolio", next: "Qualification gap workshop", dep: "Current QPs", ref: "42" },
          { p: "P1", org: "Ratan Tata Maharashtra State Skills University", model: "Dual university and vocational", stake: "Registrar, industry and AB team", ask: "Dual-credential pilot", next: "Concept meeting", dep: "Programme fit", ref: "41" },
          { p: "P1", org: "Kaushalya Skill University", model: "State Skill University", stake: "Registrar, Dean and Industry Partnerships", ask: "AI, cyber and data programme", next: "Send a concept note", dep: "Academic approval", ref: "73" },
          { p: "P1", org: "Assam Skill University", model: "Skill University partnership", stake: "Industry Partnerships and Registrar", ask: "Short-term programme pilot", next: "Use the published industry-partnership route", dep: "Programme approval", ref: "74" },
          { p: "P1", org: "DSEU", model: "University certificate or credit", stake: "Dean and Registrar", ask: "Applied emerging-tech pilot", next: "Academic proposal", dep: "Internal approval", ref: "75" },
          { p: "P2", org: "Medhavi Skill University", model: "University plus NCVET AB", stake: "Registrar and AB team", ask: "Formal skill programme", next: "Due diligence", dep: "Qualification scope", ref: "40" },
          { p: "P2", org: "Selected SSDM", model: "Government pilot", stake: "Mission Director", ask: "State employment-linked pilot", next: "Government note", dep: "Budget and procurement" },
          { p: "P2", org: "Microsoft / AWS / Google / Cisco", model: "OEM credentials", stake: "Education and partner lead", ask: "Exam alignment and partner options", next: "Map certifications", dep: "Vendor rules", ref: "58" }
        ] },

      { t: "phases", title: "Ninety-day execution plan",
        items: [
          { label: "First 30 days", note: "An evidence and pipeline month, not an application month.",
            rows: [
              ["Credential taxonomy", "One-page approved internal definitions matching this playbook"],
              ["Claims governance", "Approved terms: NSQF-aligned, university certified, credit-bearing, industry certified, co-branded, completion certificate"],
              ["Qualification inventory", "NQR scan for AI, GenAI, data science, analytics, cloud, cyber, coding, AVGC-XR, management and employability"],
              ["Programme mapping", "Each current programme mapped against its intended learner outcome"],
              ["NCVET", "Clarification call or meeting on the AB pathway and qualification development"],
              ["Existing ABs", "Shortlist three to five ABs and SSCs"],
              ["IITs", "Approach at least IIT Guwahati and one continuing-education IIT route"],
              ["Universities", "Approach KSU, DSEU, Assam Skill University, RTMSSU plus two mainstream universities"],
              ["OEM", "Map exams from Microsoft, AWS, Google Cloud and Cisco against the curriculum"],
              ["State", "Select three target states based on learner volume and government access"],
              ["Internal documents", "Incorporation, audited accounts, programme catalogue, governance chart, trainer and faculty pool, QA, LMS architecture, learner grievance system"],
              ["Legal", "Standard MoU plus IP, brand, data and certification schedules"]
            ] },
          { label: "Days 31-60", note: "Do not announce any university credits, NCVET qualification or government recognition until documentary approval exists.",
            rows: [
              ["AB pilot", "Negotiate one programme under an existing approved qualification"],
              ["Qualification gap", "Select no more than one or two genuinely new qualifications for development"],
              ["University certificate", "Reach term-sheet stage with at least one university or IIT"],
              ["Academic credit", "Submit one course for formal credit consideration"],
              ["Skill University", "Negotiate one pilot with KSU, ASU, DSEU, RTMSSU or equivalent"],
              ["State", "Conduct Mission Director and department meetings in selected states"],
              ["OEM", "Agree the certification and exam architecture for a cloud, cyber or AI programme"],
              ["Governance", "Create the Credential Approval Committee internally"],
              ["Commercial", "Standardise revenue share, assessment fees and certification fees"],
              ["Legal", "Draft partner-specific MoUs with separate schedules for award, IP, branding and data"]
            ] },
          { label: "Days 61-90", note: "Required outcomes at the end of the first quarter.",
            rows: [
              ["National vocational route", "First AB partnership executed"],
              ["Qualification development", "One formal qualification-development decision, only if a gap is proven"],
              ["IIT / university", "First institutional certificate programme approved or in final approval"],
              ["Credit pilot", "Academic approval process formally underway"],
              ["State", "One State Skill University or mission pilot term sheet"],
              ["Industry", "At least one OEM exam pathway integrated"],
              ["Assessment", "Assessment and re-assessment SOP locked"],
              ["Certification", "Certificate designs and exact recognition wording approved"],
              ["Data", "Learner ID, assessment, certificate and verification architecture finalised"],
              ["Quality", "Programme audit and grievance processes operational"],
              ["Marketing", "Recognition-claims checklist made mandatory before campaign release"]
            ] }
        ] },

      { t: "table", id: "presign", title: "What to obtain before signing any credential partnership", searchable: true,
        note: "The most important evidence is not a logo, a presentation or an MoU. Obtain documentary answers to these questions.",
        columns: [
          { key: "q", label: "Question", width: "wider" },
          { key: "e", label: "Evidence required", width: "wider" }
        ],
        rows: [
          { q: "Who legally issues the learner credential?", e: "Statute, regulation or recognition plus written partner confirmation" },
          { q: "Is it NSQF aligned?", e: "Current NQR or approved qualification record" },
          { q: "Is the partner currently an NCVET AB?", e: "Current NCVET recognition list" },
          { q: "What is its jurisdiction?", e: "NCVET recognition entry or agreement" },
          { q: "Can credits be awarded?", e: "University academic approval or regulation" },
          { q: "How many credits?", e: "Course approval or curriculum document" },
          { q: "Can credits enter ABC?", e: "The HEI's ABC status and process" },
          { q: "Who assesses?", e: "Approved assessment strategy or AA arrangement" },
          { q: "Who owns the qualification and IP?", e: "Executed IP schedule" },
          { q: "Who controls certificate issuance?", e: "Agreement plus SLA" },
          { q: "Can our brand appear?", e: "Written brand approval" },
          { q: "What happens if the partnership terminates?", e: "Teach-out and learner-protection clause" },
          { q: "Can current students still be certified?", e: "Explicit survival clause" },
          { q: "Who owns learner data?", e: "Data schedule" },
          { q: "Can the partner increase fees?", e: "Commercial change-control clause" },
          { q: "Is exclusivity involved?", e: "Narrow, explicit scope only" }
        ] },

      { t: "callout", tone: "navy", title: "The resulting strategy",
        html: "The question is not 'which awarding body should we depend on?' For each learner outcome, select the minimum credible credential authority required, preserve curriculum and delivery control where possible, and maintain at least one alternative route for every strategically important programme.<sup class='ref' data-ref='76'>76</sup>" }
    ]
  }

  ],

  /* ------------------------------------------------------------------ */
  navigator: [
    { outcome: "Nationally recognised NSQF qualification", pathway: "NCVET ecosystem", org: "Current AB, SSC or recognised university AB", approval: "Qualification must be approved and within the AB's scope", move: "Search the NQR, then shortlist three ABs", section: "routes", layers: ["C"] },
    { outcome: "State-recognised skill credential", pathway: "State framework", org: "Skill University, technical board or SSDM", approval: "State or institutional", move: "Identify the state statutory issuer", section: "states", layers: ["F"] },
    { outcome: "Academic credits toward a degree", pathway: "Higher education", org: "University or Institute of National Importance", approval: "Academic bodies", move: "Start with a two to four credit elective", section: "credit", layers: ["E"] },
    { outcome: "University-issued certificate", pathway: "University", org: "Continuing education, school or Registrar", approval: "University programme approval", move: "Propose a 30 to 120 hour pilot", section: "universities", layers: ["D"] },
    { outcome: "Prestigious institutional credential", pathway: "IIT or INI", org: "CEP, CEC or department", approval: "Institutional", move: "Approach the academic department plus continuing education", section: "universities", layers: ["D"] },
    { outcome: "Industry or OEM certification", pathway: "Vendor ecosystem", org: "Microsoft, AWS, Google, Cisco and similar", approval: "Vendor exam rules", move: "Map the programme to the exam", section: "sectors", layers: ["B"] },
    { outcome: "Short-term skill certificate", pathway: "Private or institutional", org: "Your organisation, a university or an industry body", approval: "Depends on the claim", move: "Decide whether formal recognition is actually required", section: "routes", layers: ["A"] },
    { outcome: "Jointly branded certificate", pathway: "Institution plus partner", org: "University, INI or industry body", approval: "Brand plus programme governance", move: "Agree the wording before launch", section: "partnerships", layers: ["A", "D"] },
    { outcome: "Stackable micro-credential", pathway: "NCVET or HEI framework", org: "Awarding Body or university", approval: "Competent academic or regulatory body", move: "Design a standalone assessed unit", section: "vocabulary", layers: ["A", "C"] },
    { outcome: "Future ABC linkage", pathway: "Higher education and NCrF", org: "ABC-eligible HEI", approval: "University credit approval", move: "Design the course for credit from day one", section: "credit", layers: ["E"] }
  ],

  /* ------------------------------------------------------------------ */
  sources: [
    { n: "1,3,13", label: "NSQF notification, NCVET", url: "https://ncvet.gov.in/national-skills-qualification-framework/nsqf-notification/" },
    { n: "2,30", label: "Universities, NCVET", url: "https://ncvet.gov.in/universities/" },
    { n: "4,21,22", label: "University Grants Commission", url: "https://www.ugc.gov.in/" },
    { n: "5,6,33,69", label: "Guidelines for Recognition and Regulation of Awarding Bodies, 2025", url: "https://ncvet.gov.in/wp-content/uploads/2025/07/Guidelines-For-Recognition-and-Regulation-of-Awarding-Bodies-2025.pdf" },
    { n: "7", label: "Assessment Agencies, NCVET", url: "https://ncvet.gov.in/assessment-agencies/" },
    { n: "8,32", label: "Training Centers, NCVET", url: "https://ncvet.gov.in/training-centers/" },
    { n: "9", label: "UGC FAQ", url: "https://www.ugc.gov.in/Home/faq" },
    { n: "10,60", label: "Report of the National Credit Framework", url: "https://www.ugc.gov.in/pdfnews/9028476_Report-of-National-Credit-Framework.pdf" },
    { n: "11,17,18,19,66", label: "Directorate General of Training", url: "https://dgt.gov.in/" },
    { n: "12", label: "About NCVET", url: "https://ncvet.gov.in/about-ncvet/" },
    { n: "14", label: "Minutes of the 42nd NSQC meeting", url: "https://ncvet.gov.in/wp-content/uploads/2025/03/MoM-42nd-NSQC-1.pdf" },
    { n: "15,53", label: "National Skill Development Corporation", url: "https://nsdcindia.org/" },
    { n: "16,38,39,50,76", label: "Recognition of AB and AA, NCVET", url: "https://ncvet.gov.in/recognition-of-ab-aa/" },
    { n: "20,43", label: "National Apprenticeship Training Scheme", url: "https://nats.education.gov.in/" },
    { n: "23,24", label: "AICTE Board of Technical Education directory", url: "https://www.aicte-india.org/education/institutions/Board-of-Technical-Education" },
    { n: "25", label: "Academic Bank of Credits", url: "https://www.abc.gov.in/" },
    { n: "26", label: "APAAR", url: "https://apaar.education.gov.in/" },
    { n: "27", label: "National Academic Depository / DigiLocker", url: "https://nad.digilocker.gov.in/" },
    { n: "28", label: "SWAYAM Plus", url: "https://swayamplus.education.gov.in/" },
    { n: "29", label: "IIT System structure", url: "https://www.iitsystem.ac.in/structure" },
    { n: "31,35", label: "Monitoring, NCVET", url: "https://ncvet.gov.in/hi/monitoring/" },
    { n: "34", label: "NCVET communication on the 2025 Awarding Body guidelines", url: "https://www.linkedin.com/posts/national-council-for-vocational-education-and-training_ncvet-awardingbodies-guidelines2025-activity-7353764400958238720-Qgmv" },
    { n: "36", label: "Awarding Body guidelines 2025 (fees and renewal)", url: "https://ncvet.gov.in/wp-content/uploads/2025/07/Guidelines-For-Recognition-and-Regulation-of-Awarding-Bodies-2025.pdf" },
    { n: "37,41", label: "KaushalVerse, NCVET", url: "https://www.kaushalverse.ncvet.gov.in/" },
    { n: "40,54,55", label: "Awarding Bodies list, NCVET", url: "https://ncvet.gov.in/awarding-bodies-3/" },
    { n: "42", label: "Media & Entertainment Skills Council", url: "https://www.mescindia.org/" },
    { n: "44", label: "Contact details of State Skill Development Missions, MSDE", url: "https://www.msde.gov.in/static/uploads/2024/02/Contact-details-of-State-Skill-Development-Missions-1.pdf" },
    { n: "45", label: "Assam Skill University", url: "https://asu.ac.in/" },
    { n: "46,48,73", label: "Kaushalya - The Skill University", url: "https://kaushalyaskilluniversity.ac.in/" },
    { n: "47,75", label: "Delhi Skill and Entrepreneurship University", url: "https://dseu.ac.in/" },
    { n: "49", label: "Assam Skill University Act, 2020", url: "https://legislative.assam.gov.in/documents-detail/assam-skill-university-act-2020" },
    { n: "51", label: "IIT Delhi Continuing Education Programme", url: "https://cepqip.iitd.ac.in/" },
    { n: "52", label: "IIT Delhi CEP programme example", url: "https://cepqip.iitd.ac.in/post/program/artificial-intelligence-and-machine-learning-for-industry-batch-8" },
    { n: "56", label: "SWAYAM Plus, Digital Application Fundamentals (STEM)", url: "https://swayamplus.education.gov.in/courses/digital-application-fundamentals-stem" },
    { n: "57", label: "National Qualifications Register, qualification 13408", url: "https://nqr.gov.in/qualifications/13408" },
    { n: "58,70", label: "Microsoft Learn credentials", url: "https://learn.microsoft.com/" },
    { n: "59", label: "Google Cloud Generative AI Leader certification", url: "https://cloud.google.com/learn/certification/generative-ai-leader" },
    { n: "61,63,68", label: "SOP for operationalisation of NCrF in HEIs, UGC", url: "https://www.ugc.gov.in/pdfnews/0493222_Final-SOP_for_operationalization_of_NCrF_in_HEI.pdf" },
    { n: "62", label: "RPL guidelines, UGC", url: "https://www.ugc.gov.in/pdfnews/5018065_RPL-GUIDELINES.pdf" },
    { n: "64", label: "Contact Us, NCVET", url: "https://ncvet.gov.in/contact-us/" },
    { n: "65,67,72", label: "About CEP, IIT Delhi", url: "https://cepqip.iitd.ac.in/aboutCEP" },
    { n: "71", label: "Office Orders, NCVET", url: "https://ncvet.gov.in/office-orders/" },
    { n: "74", label: "Assam Skill University collaborations", url: "https://asu.ac.in/index_collaborations_all.php" }
  ]
};

if (typeof window !== "undefined") window.PLAYBOOK = PLAYBOOK;
