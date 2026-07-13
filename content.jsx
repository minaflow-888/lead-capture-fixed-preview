// content.jsx
// Complete bilingual content for the Lead Capture Automation case study.

window.CASE_CONTENT = {
  en: {
    meta: {
      title: "Lead Capture Automation — Case Study",
      description: "A Make.com workflow that captures website enquiries, validates required fields, logs valid leads, notifies the team and sends an automatic confirmation reply."
    },
    nav: {
      title: "Lead Capture Automation",
      back: "Back to Portfolio",
      shortBack: "Portfolio",
      languageLabel: "Choose language",
      themeDark: "Switch to light theme",
      themeLight: "Switch to dark theme"
    },
    hero: {
      eyebrow: "Portfolio demonstration",
      headingBefore: "From website enquiry to a ",
      headingAccent: "validated, logged and acknowledged",
      headingAfter: " lead.",
      description: "I built a workflow that receives website enquiries, extracts the submitted information, validates the required fields, logs valid leads, notifies the team and sends an automatic confirmation reply.",
      workflowButton: "View the workflow",
      portfolioButton: "Back to Portfolio",
      previewLabel: "Lead Capture workflow preview",
      nodes: [
        { label: "Capture", detail: "Webflow form received", icon: "inbox" },
        { label: "Parse", detail: "Name, email and message", icon: "file-text" },
        { label: "Validate", detail: "Required fields checked", icon: "check-circle", hot: true },
        { label: "Log", detail: "Google Sheets record", icon: "database" },
        { label: "Notify", detail: "Slack team alert", icon: "bell" },
        { label: "Reply", detail: "Outlook confirmation", icon: "mail" }
      ]
    },
    snapshot: [
      { icon: "flask-conical", label: "Project type", value: "Functional portfolio demonstration" },
      { icon: "git-branch", label: "Workflow structure", value: "One connected Make.com scenario" },
      { icon: "check-circle", label: "Main differentiator", value: "Validation before follow-up actions" },
      { icon: "layers", label: "Tools", value: "Webflow, Make.com, Google Sheets, Slack and Outlook" }
    ],
    problem: {
      eyebrow: "The business problem",
      title: "Receiving enquiries is easy. Managing them consistently is harder.",
      paragraphs: [
        "Website enquiries can arrive as unstructured email messages. Someone may then need to open each one, copy the lead information manually, check whether the important fields exist, add the information to a tracking sheet, notify the team and send a confirmation reply.",
        "When this is repeated for every submission, it becomes slow and error-prone — and incomplete leads can continue through the process unnoticed."
      ],
      cards: [
        { icon: "file-text", title: "Manual copying", description: "Someone needs to open each email message, copy the lead information by hand and add it to a tracking sheet." },
        { icon: "alert-triangle", title: "Incomplete lead information", description: "Submissions may arrive without a name or a usable email address, making follow-up difficult or impossible." },
        { icon: "inbox", title: "No shared follow-up record", description: "Enquiries can remain only in individual inboxes, so the team has no simple shared log of new leads." }
      ]
    },
    map: {
      eyebrow: "System map",
      title: "One connected lead capture flow",
      lede: "Each stage receives the submission, extracts the required fields, validates them, logs the lead, notifies the team and sends a confirmation reply. A lead that fails validation does not continue through the standard success path.",
      hubTitle: "Lead Capture Automation",
      hubMeta: "1 MAKE.COM SCENARIO",
      invalidLabel: "invalid → stops before follow-up",
      groups: [
        { id: "input", label: "Input", icon: "globe", chips: ["Webflow form", "submitted enquiry"] },
        { id: "capture", label: "Capture", icon: "inbox", chips: ["Make.com Mailhook", "complete email body"] },
        { id: "parse", label: "Parse", icon: "file-text", chips: ["Text Parser", "name, email, message"] },
        { id: "validate", label: "Validate", icon: "check-circle", chips: ["name exists", "email exists", "email contains @"] },
        { id: "log", label: "Log & Notify", icon: "bell", chips: ["Google Sheets log", "Slack notification"] },
        { id: "reply", label: "Reply", icon: "mail", chips: ["Outlook automatic reply"] }
      ]
    },
    workflow: {
      eyebrow: "Connected workflow",
      title: "One continuous process, five connected stages",
      lede: "Each stage receives the submission, extracts the required fields, validates them, logs the lead, notifies the team and sends a confirmation reply.",
      differentiator: "key differentiator",
      validTitle: "Valid submission",
      validText: "Continues to the log, notification and reply.",
      invalidTitle: "Incomplete or invalid",
      invalidText: "Does not continue through the standard success path.",
      stages: [
        { tag: "STAGE 1", title: "Capture", icon: "inbox", steps: ["Receives the Webflow submission through a Make.com Mailhook", "Receives the complete email body"] },
        { tag: "STAGE 2", title: "Parse", icon: "file-text", steps: ["Uses a Text Parser", "Extracts name, email and message"] },
        { tag: "STAGE 3", title: "Validate", icon: "check-circle", hot: true, steps: ["Checks that the name exists", "Checks that the email exists", "Checks that the email contains ‘@’"] },
        { tag: "STAGE 4", title: "Log", icon: "database", steps: ["Adds the valid submission to Google Sheets", "Stores the main lead and processing fields"] },
        { tag: "STAGE 5", title: "Notify and Respond", icon: "bell", steps: ["Posts a Slack notification", "Sends an Outlook automatic confirmation reply"] }
      ]
    },
    evidence: {
      eyebrow: "Workflow evidence",
      title: "Real screenshots will document the working Make.com scenario",
      lede: "The workflow was built and tested with demonstration submissions. The final screenshots will show each part of the real scenario without using mockups.",
      browserLabel: "make.com — Lead Capture Automation",
      screenshotPending: "SCREENSHOT TO BE ADDED",
      viewLarger: "View larger",
      close: "Close enlarged screenshot",
      note: "Validation is the key differentiator: a submission that fails the required-field check stops before logging, notification and reply.",
      tabs: [
        { id: "full", label: "Full workflow", detail: "Full Lead Capture workflow — all five stages connected" },
        { id: "capture", label: "Capture & Parse", detail: "Webflow form → Mailhook → Text Parser" },
        { id: "validate", label: "Validation", detail: "Name exists, email exists, email contains @" },
        { id: "log", label: "Logging & Notifications", detail: "Google Sheets log, Slack notification and Outlook reply" }
      ]
    },
    quality: {
      eyebrow: "Why validation matters",
      title: "Capturing a message is not the same as validating a lead.",
      lede: "A submission that fails the required-field check does not continue through the standard success path.",
      flow: ["Submitted lead", "Parse & validate", "Valid or invalid"],
      incompleteTitle: "Incomplete submission",
      readyTitle: "Ready to process",
      incomplete: [
        "Missing name — the lead cannot be identified clearly",
        "Missing email — there is no address for follow-up or reply",
        "Invalid email format — the confirmation reply may not be deliverable",
        "Should not continue through the standard success path"
      ],
      ready: [
        "Name is present",
        "Email is present",
        "Basic email check passes because the address contains ‘@’",
        "Submission can be logged and followed up"
      ],
      clarification: "This is basic field validation. It does not verify whether an email address actually exists or belongs to the sender."
    },
    capabilities: {
      eyebrow: "Core capabilities",
      title: "What the system actually does",
      items: [
        { icon: "globe", label: "Website-form capture" },
        { icon: "file-text", label: "Email-body parsing" },
        { icon: "check-circle", label: "Required-field validation" },
        { icon: "database", label: "Shared lead logging" },
        { icon: "message-square", label: "Internal Slack notification" },
        { icon: "mail", label: "Automatic Outlook reply" }
      ]
    },
    stack: {
      eyebrow: "Technology stack",
      title: "Five tools, five clear responsibilities",
      tools: [
        { label: "Webflow", icon: "globe", color: "#4353FF", description: "Receives the original website enquiry." },
        { label: "Make.com", icon: "workflow", color: "#2563EB", description: "Connects and controls the workflow steps." },
        { label: "Google Sheets", icon: "database", color: "#34A853", description: "Provides a simple shared demonstration log." },
        { label: "Slack", icon: "message-square", color: "#E01E5A", description: "Notifies the team about a valid new lead." },
        { label: "Outlook", icon: "mail", color: "#0078D4", description: "Sends the automatic confirmation reply." }
      ]
    },
    states: {
      eyebrow: "Workflow stages & testing",
      title: "Every lead moves through one connected lifecycle",
      lede: "These are explanatory workflow stages — not stored database statuses — showing the journey from submission to confirmation.",
      invalid: "invalid",
      stops: "does not continue",
      final: "final outcome",
      labels: ["submitted", "received", "parsed", "validated", "logged", "notified", "confirmation sent"],
      testingTitle: "Testing status",
      testingText: "The main modules and validation routes were tested with demonstration submissions. The workflow was not deployed in a live client environment."
    },
    limitations: {
      eyebrow: "Honest by design",
      title: "Current limitations",
      items: [
        "The parser depends on the structure of the email body received from Webflow.",
        "The email check is basic and only confirms that the field exists and contains ‘@’.",
        "Google Sheets is suitable for this demonstration but is not the preferred database for a larger production workflow.",
        "The current version does not include duplicate prevention.",
        "Production use would require stronger monitoring, retries and error handling.",
        "The workflow was not tested in a live client environment."
      ]
    },
    planned: {
      eyebrow: "What’s next for this project",
      title: "Extending the lead capture workflow",
      badge: "PLANNED IMPROVEMENTS — NOT IMPLEMENTED",
      description: "The current version captures, parses, validates, logs, notifies and replies. A future version could add more robust data handling, duplicate prevention and monitoring.",
      items: [
        "Replace Google Sheets with a CRM or structured database",
        "Add duplicate detection",
        "Strengthen email validation",
        "Add error logging and retry routes",
        "Expand lead-source tracking beyond the current Webflow source",
        "Add consent and privacy handling appropriate to the production form",
        "Add monitoring for failed notifications or replies"
      ],
      goal: "The goal is not to replace human follow-up, but to make lead capture more consistent and easier to track.",
      note: "These are planned future improvements and are not part of the current implemented version."
    },
    learned: {
      eyebrow: "What I learned",
      quote: "I learned how to turn an unstructured email body into structured lead fields, validate required information and pass one submission through several connected business actions.",
      paragraph: "I also learned why a workflow needs clear validation and logging before notifications and automatic replies are sent.",
      transparencyTitle: "Project transparency",
      transparency1: "This is a functional portfolio demonstration built and tested with demonstration data. It was not developed for a live client environment.",
      transparency2: "The project demonstrates workflow logic, validation, logging and communication steps. It does not provide measured client results."
    },
    related: {
      eyebrow: "More case studies",
      title: "Related work",
      projects: [
        { tag: "Case study 02", title: "Order Handoff Automation", description: "Turns a HubSpot Closed Won deal into a documented customer handoff with validation, duplicate prevention, a welcome email and status logging.", action: "View case study", urlKey: "order" },
        { tag: "Case study 03", title: "AI Research Agent", description: "Turns repeated company research into a checked, structured report through three connected scenarios.", action: "Explore project", urlKey: "research" }
      ]
    },
    cta: {
      eyebrow: "Let’s talk",
      title: "Looking for someone who can map, build and clearly document practical workflows?",
      description: "I am looking for an internship, practice placement or junior opportunity in Malmö or Skåne where I can continue learning while contributing practical automation work.",
      portfolio: "Back to Portfolio",
      order: "View Order Handoff Case Study"
    },
    footer: {
      label: "Lead Capture Automation — functional portfolio demonstration",
      back: "Back to Portfolio"
    }
  },

  sv: {
    meta: {
      title: "Lead Capture Automation — Fallstudie",
      description: "Ett Make.com-arbetsflöde som tar emot webbplatsförfrågningar, validerar obligatoriska fält, loggar giltiga leads, meddelar teamet och skickar ett automatiskt bekräftelsesvar."
    },
    nav: {
      title: "Lead Capture Automation",
      back: "Tillbaka till portföljen",
      shortBack: "Portfölj",
      languageLabel: "Välj språk",
      themeDark: "Byt till ljust tema",
      themeLight: "Byt till mörkt tema"
    },
    hero: {
      eyebrow: "Portföljdemonstration",
      headingBefore: "Från en webbplatsförfrågan till ett ",
      headingAccent: "validerat, loggat och bekräftat",
      headingAfter: " lead.",
      description: "Jag byggde ett arbetsflöde som tar emot webbplatsförfrågningar, extraherar den inskickade informationen, validerar obligatoriska fält, loggar giltiga leads, meddelar teamet och skickar ett automatiskt bekräftelsesvar.",
      workflowButton: "Visa arbetsflödet",
      portfolioButton: "Tillbaka till portföljen",
      previewLabel: "Förhandsvisning av arbetsflödet för leadhantering",
      nodes: [
        { label: "Ta emot", detail: "Webflow-formulär mottaget", icon: "inbox" },
        { label: "Tolka", detail: "Namn, e-post och meddelande", icon: "file-text" },
        { label: "Validera", detail: "Obligatoriska fält kontrolleras", icon: "check-circle", hot: true },
        { label: "Logga", detail: "Post i Google Sheets", icon: "database" },
        { label: "Meddela", detail: "Slack-notis till teamet", icon: "bell" },
        { label: "Svara", detail: "Bekräftelse via Outlook", icon: "mail" }
      ]
    },
    snapshot: [
      { icon: "flask-conical", label: "Projekttyp", value: "Funktionell portföljdemonstration" },
      { icon: "git-branch", label: "Arbetsflödesstruktur", value: "Ett sammankopplat Make.com-scenario" },
      { icon: "check-circle", label: "Viktigaste skillnaden", value: "Validering före uppföljningsåtgärder" },
      { icon: "layers", label: "Verktyg", value: "Webflow, Make.com, Google Sheets, Slack och Outlook" }
    ],
    problem: {
      eyebrow: "Affärsproblemet",
      title: "Det är enkelt att ta emot förfrågningar. Det är svårare att hantera dem konsekvent.",
      paragraphs: [
        "Webbplatsförfrågningar kan komma som ostrukturerade e-postmeddelanden. Någon kan då behöva öppna varje meddelande, kopiera leadinformationen manuellt, kontrollera att viktiga fält finns, lägga till informationen i ett kalkylark, meddela teamet och skicka ett bekräftelsesvar.",
        "När detta upprepas för varje inskickning blir processen långsam och felkänslig — och ofullständiga leads kan fortsätta obemärkt."
      ],
      cards: [
        { icon: "file-text", title: "Manuell kopiering", description: "Någon behöver öppna varje e-postmeddelande, kopiera leadinformationen för hand och lägga till den i ett kalkylark." },
        { icon: "alert-triangle", title: "Ofullständig leadinformation", description: "Inskickningar kan sakna namn eller en användbar e-postadress, vilket gör uppföljning svår eller omöjlig." },
        { icon: "inbox", title: "Ingen gemensam uppföljningslogg", description: "Förfrågningar kan stanna i enskilda inkorgar, så teamet saknar en enkel gemensam logg över nya leads." }
      ]
    },
    map: {
      eyebrow: "Systemkarta",
      title: "Ett sammankopplat flöde för leadhantering",
      lede: "Varje steg tar emot inskickningen, extraherar obligatoriska fält, validerar dem, loggar leadet, meddelar teamet och skickar ett bekräftelsesvar. Ett lead som inte klarar valideringen stoppas före loggning, avisering och svar.",
      hubTitle: "Lead Capture Automation",
      hubMeta: "1 MAKE.COM-SCENARIO",
      invalidLabel: "ogiltigt → stoppas",
      groups: [
        { id: "input", label: "Inmatning", icon: "globe", chips: ["Webflow-formulär", "inskickad förfrågan"] },
        { id: "capture", label: "Ta emot", icon: "inbox", chips: ["Make.com Mailhook", "hela e-posttexten"] },
        { id: "parse", label: "Tolka", icon: "file-text", chips: ["Text Parser", "namn, e-post, meddelande"] },
        { id: "validate", label: "Validera", icon: "check-circle", chips: ["namn finns", "e-post finns", "e-post innehåller @"] },
        { id: "log", label: "Logga & meddela", icon: "bell", chips: ["Google Sheets-logg", "Slack-notis"] },
        { id: "reply", label: "Svara", icon: "mail", chips: ["automatiskt Outlook-svar"] }
      ]
    },
    workflow: {
      eyebrow: "Sammankopplat arbetsflöde",
      title: "En sammanhängande process med fem steg",
      lede: "Varje steg tar emot inskickningen, extraherar obligatoriska fält, validerar dem, loggar leadet, meddelar teamet och skickar ett bekräftelsesvar.",
      differentiator: "viktigaste skillnaden",
      validTitle: "Giltig inskickning",
      validText: "Fortsätter till loggning, avisering och svar.",
      invalidTitle: "Ofullständig eller ogiltig",
      invalidText: "Fortsätter inte i det vanliga flödet för giltiga inskickningar.",
      stages: [
        { tag: "STEG 1", title: "Ta emot", icon: "inbox", steps: ["Tar emot Webflow-inskickningen via en Make.com Mailhook", "Tar emot hela e-posttexten"] },
        { tag: "STEG 2", title: "Tolka", icon: "file-text", steps: ["Använder en Text Parser", "Extraherar namn, e-post och meddelande"] },
        { tag: "STEG 3", title: "Validera", icon: "check-circle", hot: true, steps: ["Kontrollerar att namn finns", "Kontrollerar att e-post finns", "Kontrollerar att e-postadressen innehåller ‘@’"] },
        { tag: "STEG 4", title: "Logga", icon: "database", steps: ["Lägger till den giltiga inskickningen i Google Sheets", "Sparar de viktigaste lead- och behandlingsfälten"] },
        { tag: "STEG 5", title: "Meddela och svara", icon: "bell", steps: ["Skickar en Slack-notis", "Skickar ett automatiskt bekräftelsesvar via Outlook"] }
      ]
    },
    evidence: {
      eyebrow: "Bevis på arbetsflödet",
      title: "Riktiga skärmbilder ska dokumentera det fungerande Make.com-scenariot",
      lede: "Arbetsflödet byggdes och testades med testinskickningar. De slutliga skärmbilderna ska visa varje del av det riktiga scenariot utan mockups.",
      browserLabel: "make.com — Lead Capture Automation",
      screenshotPending: "SKÄRMBILD LÄGGS TILL",
      viewLarger: "Visa större",
      close: "Stäng förstorad skärmbild",
      note: "Validering är den viktigaste skillnaden: en inskickning som inte klarar kontrollen av obligatoriska fält stoppas före loggning, avisering och svar.",
      tabs: [
        { id: "full", label: "Hela arbetsflödet", detail: "Hela Lead Capture-arbetsflödet — alla fem steg sammankopplade" },
        { id: "capture", label: "Ta emot & tolka", detail: "Webflow-formulär → Mailhook → Text Parser" },
        { id: "validate", label: "Validering", detail: "Namn finns, e-post finns, e-post innehåller @" },
        { id: "log", label: "Loggning & aviseringar", detail: "Google Sheets-logg, Slack-notis och Outlook-svar" }
      ]
    },
    quality: {
      eyebrow: "Varför validering är viktig",
      title: "Att ta emot ett meddelande är inte samma sak som att validera ett lead.",
      lede: "En inskickning som inte klarar kontrollen av obligatoriska fält fortsätter inte i det vanliga flödet för giltiga inskickningar.",
      flow: ["Inskickat lead", "Tolka & validera", "Giltigt eller ogiltigt"],
      incompleteTitle: "Ofullständig inskickning",
      readyTitle: "Redo att behandlas",
      incomplete: [
        "Namn saknas — leadet kan inte identifieras tydligt",
        "E-post saknas — det finns ingen adress för uppföljning eller svar",
        "Ogiltigt e-postformat — bekräftelsesvaret kanske inte kan levereras",
        "Ska inte fortsätta i det vanliga flödet för giltiga inskickningar"
      ],
      ready: [
        "Namn finns",
        "E-post finns",
        "Den grundläggande e-postkontrollen godkänns eftersom adressen innehåller ‘@’",
        "Inskickningen kan loggas och följas upp"
      ],
      clarification: "Detta är grundläggande fältvalidering. Den verifierar inte att e-postadressen faktiskt finns eller tillhör avsändaren."
    },
    capabilities: {
      eyebrow: "Grundläggande funktioner",
      title: "Vad systemet faktiskt gör",
      items: [
        { icon: "globe", label: "Tar emot webbformulär" },
        { icon: "file-text", label: "Tolkar e-posttext" },
        { icon: "check-circle", label: "Validerar obligatoriska fält" },
        { icon: "database", label: "Loggar leads gemensamt" },
        { icon: "message-square", label: "Intern Slack-notis" },
        { icon: "mail", label: "Automatiskt Outlook-svar" }
      ]
    },
    stack: {
      eyebrow: "Teknikstack",
      title: "Fem verktyg med fem tydliga ansvarsområden",
      tools: [
        { label: "Webflow", icon: "globe", color: "#4353FF", description: "Tar emot den ursprungliga webbplatsförfrågan." },
        { label: "Make.com", icon: "workflow", color: "#2563EB", description: "Kopplar samman och styr arbetsflödets steg." },
        { label: "Google Sheets", icon: "database", color: "#34A853", description: "Ger en enkel gemensam demonstrationslogg." },
        { label: "Slack", icon: "message-square", color: "#E01E5A", description: "Meddelar teamet om ett nytt giltigt lead." },
        { label: "Outlook", icon: "mail", color: "#0078D4", description: "Skickar det automatiska bekräftelsesvaret." }
      ]
    },
    states: {
      eyebrow: "Arbetsflödessteg & testning",
      title: "Varje lead rör sig genom en sammanhängande livscykel",
      lede: "Detta är förklarande arbetsflödessteg — inte lagrade databasstatusar — som visar resan från inskickning till bekräftelse.",
      invalid: "ogiltigt",
      stops: "fortsätter inte",
      final: "slutresultat",
      labels: ["inskickat", "mottaget", "tolkat", "validerat", "loggat", "teamet meddelat", "bekräftelse skickad"],
      testingTitle: "Teststatus",
      testingText: "Huvudmodulerna och valideringsvägarna testades med testinskickningar. Arbetsflödet driftsattes inte i en verklig kundmiljö."
    },
    limitations: {
      eyebrow: "Ärligt utformat",
      title: "Nuvarande begränsningar",
      items: [
        "Parsern är beroende av strukturen i e-posttexten som tas emot från Webflow.",
        "E-postkontrollen är grundläggande och bekräftar endast att fältet finns och innehåller ‘@’.",
        "Google Sheets passar denna demonstration men är inte den rekommenderade databasen för ett större produktionsflöde.",
        "Den nuvarande versionen innehåller inte dubblettkontroll.",
        "Produktionsanvändning skulle kräva starkare övervakning, återförsök och felhantering.",
        "Arbetsflödet testades inte i en verklig kundmiljö."
      ]
    },
    planned: {
      eyebrow: "Nästa steg för projektet",
      title: "Vidareutveckling av lead-arbetsflödet",
      badge: "PLANERADE FÖRBÄTTRINGAR — INTE IMPLEMENTERADE",
      description: "Den nuvarande versionen tar emot, tolkar, validerar, loggar, meddelar och svarar. En framtida version kan lägga till mer robust datahantering, dubblettkontroll och övervakning.",
      items: [
        "Ersätt Google Sheets med ett CRM-system eller en strukturerad databas",
        "Lägg till dubblettkontroll",
        "Förstärk e-postvalideringen",
        "Lägg till felloggning och återförsök",
        "Utöka spårningen av leadkälla utöver den nuvarande Webflow-källan",
        "Lägg till samtyckes- och integritetshantering för produktionsformuläret",
        "Lägg till övervakning av misslyckade aviseringar eller svar"
      ],
      goal: "Målet är inte att ersätta mänsklig uppföljning, utan att göra leadhanteringen mer konsekvent och lättare att följa.",
      note: "Detta är planerade framtida förbättringar och ingår inte i den nuvarande implementerade versionen."
    },
    learned: {
      eyebrow: "Vad jag lärde mig",
      quote: "Jag lärde mig att omvandla en ostrukturerad e-posttext till strukturerade leadfält, validera obligatorisk information och föra en inskickning genom flera sammankopplade affärsåtgärder.",
      paragraph: "Jag lärde mig också varför ett arbetsflöde behöver tydlig validering och loggning innan aviseringar och automatiska svar skickas.",
      transparencyTitle: "Projekttransparens",
      transparency1: "Detta är en funktionell portföljdemonstration som byggdes och testades med demonstrationsdata. Den utvecklades inte för en verklig kundmiljö.",
      transparency2: "Projektet visar arbetsflödeslogik, validering, loggning och kommunikationssteg. Det innehåller inga uppmätta kundresultat."
    },
    related: {
      eyebrow: "Fler fallstudier",
      title: "Relaterade projekt",
      projects: [
        { tag: "Fallstudie 02", title: "Order Handoff Automation", description: "Omvandlar en HubSpot-affär med status Closed Won till en dokumenterad kundöverlämning med validering, dubblettkontroll, välkomstmeddelande och statusloggning.", action: "Visa fallstudien", urlKey: "order" },
        { tag: "Fallstudie 03", title: "AI Research Agent", description: "Omvandlar återkommande företagsresearch till en kontrollerad och strukturerad rapport genom tre sammankopplade scenarier.", action: "Utforska projektet", urlKey: "research" }
      ]
    },
    cta: {
      eyebrow: "Låt oss prata",
      title: "Söker ni någon som kan kartlägga, bygga och tydligt dokumentera praktiska arbetsflöden?",
      description: "Jag söker en praktikplats, arbetspraktik eller juniorroll i Malmö eller Skåne där jag kan fortsätta lära mig och samtidigt bidra med praktiskt automationsarbete.",
      portfolio: "Tillbaka till portföljen",
      order: "Visa Order Handoff-fallstudien"
    },
    footer: {
      label: "Lead Capture Automation — funktionell portföljdemonstration",
      back: "Tillbaka till portföljen"
    }
  }
};
