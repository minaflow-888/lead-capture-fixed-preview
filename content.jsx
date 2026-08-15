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
      description: "I built a Make.com workflow that receives a Webflow form submission as an email, extracts the name, email and message using a Text Parser, validates three required fields with an AND filter, logs the valid lead to Google Sheets, notifies the team on Slack and sends an automatic confirmation reply via Outlook.",
      workflowButton: "View the workflow",
      portfolioButton: "Back to Portfolio",
      previewLabel: "Lead Capture workflow preview",
      nodes: [
        { label: "Capture", detail: "Webflow form → Make Mailhook", icon: "inbox" },
        { label: "Parse", detail: "Text Parser extracts fields", icon: "file-text" },
        { label: "Validate", detail: "3 AND conditions checked", icon: "check-circle", hot: true },
        { label: "Log", detail: "Row added to Google Sheets", icon: "database" },
        { label: "Notify", detail: "Slack message to team", icon: "bell" },
        { label: "Reply", detail: "Outlook confirmation sent", icon: "mail" }
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
        "When a website form sends submissions as plain email, someone has to open each one, copy the lead data by hand, check that the name and email are actually there, add everything to a shared sheet, ping the team and write a reply. That is five manual steps for every single enquiry.",
        "Skip any one of those steps and a lead goes cold, gets missed or ends up in one person's inbox instead of a shared log. This workflow removes all five steps."
      ],
      cards: [
        { icon: "file-text", title: "Manual copying", description: "Someone needs to open each email, copy the lead information by hand and add it to a tracking sheet — every time." },
        { icon: "alert-triangle", title: "Incomplete submissions slip through", description: "A submission without a name or a working email address is not useful. Without a filter, it gets logged and followed up anyway." },
        { icon: "inbox", title: "No shared log", description: "When enquiries stay in individual inboxes, the team has no single place to see what has come in and what still needs a reply." }
      ]
    },
    map: {
      eyebrow: "System map",
      title: "One connected lead capture flow",
      lede: "Each stage receives the submission, extracts the required fields, validates them, logs the lead, notifies the team and sends a confirmation reply. A lead that fails validation stops here — it does not reach the log, the Slack message or the reply.",
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
      lede: "The filter at stage 3 is the key decision point. Everything before it prepares the data. Everything after it acts on data that has already been verified.",
      differentiator: "key differentiator",
      validTitle: "Valid submission",
      validText: "Continues to the log, notification and reply.",
      invalidTitle: "Incomplete or invalid",
      invalidText: "Stops here — no log entry, no Slack message, no reply.",
      stages: [
        { tag: "STAGE 1", title: "Capture", icon: "inbox", steps: ["Webflow sends the form as an email to the Make.com Mailhook address", "The Mailhook is the only entry point into the scenario"] },
        { tag: "STAGE 2", title: "Parse", icon: "file-text", steps: ["Text Parser reads the email body using a regex pattern", "Extracts name, email and message as separate variables", "Without this step, the next module has no idea which field is which"] },
        { tag: "STAGE 3", title: "Validate", icon: "check-circle", hot: true, steps: ["Three AND conditions must all pass: name exists, email exists, email contains '@'", "A submission that fails any condition stops here", "Nothing after this point runs on incomplete data"] },
        { tag: "STAGE 4", title: "Log", icon: "database", steps: ["Adds a new row to Google Sheets with the validated lead details", "Creates a shared log visible to the whole team"] },
        { tag: "STAGE 5", title: "Notify and Reply", icon: "bell", steps: ["Posts a Slack notification so the team sees the new lead immediately", "Sends an automatic Outlook confirmation to the person who submitted the form"] }
      ]
    },
    evidence: {
      eyebrow: "Workflow evidence",
      title: "Real screenshots from the working Make.com scenario",
      lede: "The workflow was built and tested with demonstration submissions. Screenshots show the actual configured scenario, not a mockup.",
      browserLabel: "make.com — Lead Capture Automation",
      screenshotPending: "SCREENSHOT TO BE ADDED",
      viewLarger: "View larger",
      close: "Close enlarged screenshot",
      note: "Validation is the key differentiator: a submission that fails the required-field check stops before logging, notification and reply.",
      tabs: [
        { id: "full", label: "Full workflow", detail: "Full Lead Capture workflow — all five stages connected" },
        { id: "capture", label: "Capture & Parse", detail: "Webflow form → Mailhook → Text Parser" },
        { id: "validate", label: "Validation", detail: "Filter with three AND conditions open" },
        { id: "log", label: "Logging & Notifications", detail: "Google Sheets log, Slack notification and Outlook reply" }
      ]
    },
    quality: {
      eyebrow: "Why validation matters",
      title: "Receiving a message is not the same as validating a lead.",
      lede: "A submission that fails the required-field check does not continue. It stops before any action leaves the system.",
      flow: ["Submitted lead", "Parse & validate", "Valid or invalid"],
      incompleteTitle: "Incomplete submission — stops here",
      readyTitle: "Valid submission — continues",
      incomplete: [
        "Name is missing — the lead cannot be identified or addressed",
        "Email is missing — there is no address for follow-up or reply",
        "Email does not contain '@' — the format is not usable",
        "Does not reach the log, the Slack message or the confirmation reply"
      ],
      ready: [
        "Name is present",
        "Email is present",
        "Email contains '@' — basic format check passes",
        "Submission is logged and the team is notified"
      ],
      clarification: "This is basic field validation. It confirms that the fields exist and that the email contains '@'. It does not verify whether the address is real or belongs to the sender."
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
        { label: "Webflow", icon: "globe", color: "#4353FF", description: "Sends the form submission as an email to Make.com." },
        { label: "Make.com", icon: "workflow", color: "#2563EB", description: "Connects and controls all five workflow stages." },
        { label: "Google Sheets", icon: "database", color: "#34A853", description: "Stores validated leads in a shared log." },
        { label: "Slack", icon: "message-square", color: "#E01E5A", description: "Notifies the team when a valid lead arrives." },
        { label: "Outlook", icon: "mail", color: "#0078D4", description: "Sends the automatic confirmation reply." }
      ]
    },
    states: {
      eyebrow: "Workflow stages & testing",
      title: "Every submission follows a clear, connected lifecycle",
      lede: "These are the stages a submission moves through — not stored database statuses. A submission that fails validation stops at the validate stage and never reaches the log.",
      invalid: "invalid",
      stops: "stops here",
      final: "final outcome",
      labels: ["submitted", "received", "parsed", "validated", "logged", "team notified", "confirmation sent"],
      testingTitle: "Testing status",
      testingText: "The main modules and all three validation conditions were tested with demonstration submissions. The workflow was not deployed in a live client environment."
    },
    limitations: {
      eyebrow: "Honest by design",
      title: "Current limitations",
      items: [
        "The Text Parser depends on a consistent email body structure from Webflow. A format change would break the regex pattern.",
        "The email check only confirms that the field exists and contains '@'. It does not verify deliverability or ownership.",
        "Google Sheets works for this demonstration but is not the right choice for a production workflow with high submission volume.",
        "The current version does not check for duplicate submissions.",
        "Production use would need error handling, retry logic and monitoring for failed Slack messages or Outlook replies.",
        "The workflow was tested with demonstration data, not in a live client environment."
      ]
    },
    planned: {
      eyebrow: "What's next for this project",
      title: "Extending the lead capture workflow",
      badge: "PLANNED IMPROVEMENTS — NOT IMPLEMENTED",
      description: "The current version captures, parses, validates, logs, notifies and replies. A future version could add stronger data handling and make the workflow ready for production use.",
      items: [
        "Replace Google Sheets with a CRM or structured database",
        "Add duplicate detection based on email address",
        "Strengthen email validation beyond the '@' check",
        "Add error logging and retry routes for failed Slack or Outlook actions",
        "Expand lead-source tracking beyond the current Webflow source",
        "Add consent and privacy handling appropriate to a production form",
        "Add monitoring for failed notifications or replies"
      ],
      goal: "The goal is not to replace human follow-up. It is to make sure every valid lead reaches the team and gets a reply — automatically, every time.",
      note: "These are planned future improvements and are not part of the current implemented version."
    },
    learned: {
      eyebrow: "What I learned",
      quote: "I learned how to turn an unstructured email body into structured lead fields using a Text Parser, validate required information with a multi-condition AND filter, and move a submission through several connected actions — all in a single Make.com scenario.",
      paragraph: "I also learned why the filter has to come before the actions, not after. Sending a Slack notification or an Outlook reply to an incomplete lead would be worse than sending nothing at all.",
      transparencyTitle: "Project transparency",
      transparency1: "This is a functional portfolio demonstration built and tested with demonstration data. It was not developed for a live client environment.",
      transparency2: "The project demonstrates workflow logic, parsing, validation, logging and automated communication. It does not include measured client results."
    },
    related: {
      eyebrow: "More case studies",
      title: "Related work",
      projects: [
        { tag: "Case study 02", title: "Order Handoff Automation", description: "Turns a HubSpot Closed Won deal into a documented customer handoff with contact validation, duplicate prevention, a welcome email and status logging.", action: "View case study", urlKey: "order" },
        { tag: "Case study 03", title: "AI Research Agent", description: "Turns repeated company research into a quality-checked, structured report through three connected Make.com scenarios.", action: "Explore project", urlKey: "research" }
      ]
    },
    cta: {
      eyebrow: "Let's talk",
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
      description: "Jag byggde ett Make.com-flöde som tar emot ett Webflow-formulär som e-post, extraherar namn, e-post och meddelande med en Text Parser, validerar tre obligatoriska fält med ett AND-filter, loggar det giltiga leadet i Google Sheets, meddelar teamet i Slack och skickar ett automatiskt bekräftelsesvar via Outlook.",
      workflowButton: "Visa arbetsflödet",
      portfolioButton: "Tillbaka till portföljen",
      previewLabel: "Förhandsvisning av arbetsflödet för leadhantering",
      nodes: [
        { label: "Ta emot", detail: "Webflow-formulär → Make Mailhook", icon: "inbox" },
        { label: "Tolka", detail: "Text Parser extraherar fält", icon: "file-text" },
        { label: "Validera", detail: "3 AND-villkor kontrolleras", icon: "check-circle", hot: true },
        { label: "Logga", detail: "Rad läggs till i Google Sheets", icon: "database" },
        { label: "Meddela", detail: "Slack-meddelande till teamet", icon: "bell" },
        { label: "Svara", detail: "Outlook-bekräftelse skickas", icon: "mail" }
      ]
    },
    snapshot: [
      { icon: "flask-conical", label: "Projekttyp", value: "Funktionell portföljdemonstration" },
      { icon: "git-branch", label: "Arbetsflödesstruktur", value: "Ett sammankopplat Make.com-scenario" },
      { icon: "check-circle", label: "Viktigaste skillnaden", value: "Validering innan åtgärder skickas ut" },
      { icon: "layers", label: "Verktyg", value: "Webflow, Make.com, Google Sheets, Slack och Outlook" }
    ],
    problem: {
      eyebrow: "Affärsproblemet",
      title: "Det är enkelt att ta emot förfrågningar. Det är svårare att hantera dem konsekvent.",
      paragraphs: [
        "När ett webbformulär skickar inskickningar som vanlig e-post behöver någon öppna varje meddelande, kopiera leadinformationen för hand, kontrollera att namn och e-post faktiskt finns, lägga till allt i ett gemensamt kalkylark, meddela teamet och skriva ett svar. Det är fem manuella steg för varje enskild förfrågan.",
        "Missar man något av de stegen glöms leadet bort, hamnar i en enskilds inkorg i stället för en gemensam logg, eller följs upp trots att informationen är ofullständig. Det här arbetsflödet tar bort alla fem stegen."
      ],
      cards: [
        { icon: "file-text", title: "Manuell kopiering", description: "Någon behöver öppna varje e-postmeddelande, kopiera leadinformationen för hand och lägga till den i ett kalkylark — varje gång." },
        { icon: "alert-triangle", title: "Ofullständiga inskickningar passerar", description: "En inskickning utan namn eller en fungerande e-postadress är inte användbar. Utan ett filter loggas den och följs upp ändå." },
        { icon: "inbox", title: "Ingen gemensam logg", description: "När förfrågningar stannar i enskilda inkorgar har teamet ingen samlad plats att se vad som kommit in och vad som fortfarande behöver svar." }
      ]
    },
    map: {
      eyebrow: "Systemkarta",
      title: "Ett sammankopplat flöde för leadhantering",
      lede: "Varje steg tar emot inskickningen, extraherar obligatoriska fält, validerar dem, loggar leadet, meddelar teamet och skickar ett bekräftelsesvar. Ett lead som inte klarar valideringen stannar här — det når inte loggen, Slack-meddelandet eller svaret.",
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
      lede: "Filtret i steg 3 är den avgörande beslutspunkten. Allt före förbereder datan. Allt efter agerar på data som redan har kontrollerats.",
      differentiator: "viktigaste skillnaden",
      validTitle: "Giltig inskickning",
      validText: "Fortsätter till loggning, avisering och svar.",
      invalidTitle: "Ofullständig eller ogiltig",
      invalidText: "Stannar här — ingen loggpost, inget Slack-meddelande, inget svar.",
      stages: [
        { tag: "STEG 1", title: "Ta emot", icon: "inbox", steps: ["Webflow skickar formuläret som ett e-postmeddelande till Make.com Mailhook-adressen", "Mailhooken är scenariots enda ingångspunkt"] },
        { tag: "STEG 2", title: "Tolka", icon: "file-text", steps: ["Text Parser läser e-posttexten med ett regex-mönster", "Extraherar namn, e-post och meddelande som separata variabler", "Utan det här steget vet nästa modul inte vilket fält som är vilket"] },
        { tag: "STEG 3", title: "Validera", icon: "check-circle", hot: true, steps: ["Tre AND-villkor måste alla uppfyllas: namn finns, e-post finns, e-post innehåller '@'", "En inskickning som missar ett villkor stannar här", "Ingenting efter det här steget körs på ofullständig data"] },
        { tag: "STEG 4", title: "Logga", icon: "database", steps: ["Lägger till en ny rad i Google Sheets med de validerade leaduppgifterna", "Skapar en gemensam logg som hela teamet kan se"] },
        { tag: "STEG 5", title: "Meddela och svara", icon: "bell", steps: ["Skickar en Slack-notis så att teamet ser det nya leadet direkt", "Skickar ett automatiskt Outlook-bekräftelsesvar till den som skickade in formuläret"] }
      ]
    },
    evidence: {
      eyebrow: "Dokumentation av arbetsflödet",
      title: "Riktiga skärmbilder från det fungerande Make.com-scenariot",
      lede: "Arbetsflödet byggdes och testades med testinskickningar. Skärmbilderna visar det faktiska konfigurerade scenariot, inte en mockup.",
      browserLabel: "make.com — Lead Capture Automation",
      screenshotPending: "SKÄRMBILD LÄGGS TILL",
      viewLarger: "Visa större",
      close: "Stäng förstorad skärmbild",
      note: "Validering är den viktigaste skillnaden: en inskickning som inte klarar kontrollen av obligatoriska fält stoppas före loggning, avisering och svar.",
      tabs: [
        { id: "full", label: "Hela arbetsflödet", detail: "Hela Lead Capture-scenariot — alla fem steg sammankopplade" },
        { id: "capture", label: "Ta emot & tolka", detail: "Webflow-formulär → Mailhook → Text Parser" },
        { id: "validate", label: "Validering", detail: "Filter med tre AND-villkor öppet" },
        { id: "log", label: "Loggning & aviseringar", detail: "Google Sheets-logg, Slack-notis och Outlook-svar" }
      ]
    },
    quality: {
      eyebrow: "Varför validering är viktig",
      title: "Att ta emot ett meddelande är inte samma sak som att validera ett lead.",
      lede: "En inskickning som inte klarar kontrollen stannar här. Den når inte loggen, Slack-meddelandet eller bekräftelsesvaret.",
      flow: ["Inskickat lead", "Tolka & validera", "Giltigt eller ogiltigt"],
      incompleteTitle: "Ofullständig inskickning — stannar här",
      readyTitle: "Giltig inskickning — fortsätter",
      incomplete: [
        "Namn saknas — leadet kan inte identifieras eller adresseras",
        "E-post saknas — det finns ingen adress för uppföljning eller svar",
        "E-post innehåller inte '@' — formatet är inte användbart",
        "Når inte loggen, Slack-meddelandet eller bekräftelsesvaret"
      ],
      ready: [
        "Namn finns",
        "E-post finns",
        "E-post innehåller '@' — grundläggande formatkontroll godkänd",
        "Inskickningen loggas och teamet meddelas"
      ],
      clarification: "Det här är grundläggande fältvalidering. Den bekräftar att fälten finns och att e-posten innehåller '@'. Den verifierar inte om adressen faktiskt fungerar eller tillhör avsändaren."
    },
    capabilities: {
      eyebrow: "Grundläggande funktioner",
      title: "Vad systemet faktiskt gör",
      items: [
        { icon: "globe", label: "Tar emot webbformulär" },
        { icon: "file-text", label: "Tolkar e-posttext med regex" },
        { icon: "check-circle", label: "Validerar tre obligatoriska fält" },
        { icon: "database", label: "Loggar leads i en gemensam logg" },
        { icon: "message-square", label: "Intern Slack-notis" },
        { icon: "mail", label: "Automatiskt Outlook-bekräftelsesvar" }
      ]
    },
    stack: {
      eyebrow: "Teknikstack",
      title: "Fem verktyg med fem tydliga ansvarsområden",
      tools: [
        { label: "Webflow", icon: "globe", color: "#4353FF", description: "Skickar formulärinskickningen som ett e-postmeddelande till Make.com." },
        { label: "Make.com", icon: "workflow", color: "#2563EB", description: "Kopplar samman och styr alla fem steg i arbetsflödet." },
        { label: "Google Sheets", icon: "database", color: "#34A853", description: "Lagrar validerade leads i en gemensam logg." },
        { label: "Slack", icon: "message-square", color: "#E01E5A", description: "Meddelar teamet när ett giltigt lead kommer in." },
        { label: "Outlook", icon: "mail", color: "#0078D4", description: "Skickar det automatiska bekräftelsesvaret." }
      ]
    },
    states: {
      eyebrow: "Arbetsflödessteg & testning",
      title: "Varje inskickning följer en tydlig och sammanhängande livscykel",
      lede: "Det här är de steg en inskickning rör sig igenom — inte lagrade databasstatusar. En inskickning som inte klarar valideringen stannar vid valideringssteget och når aldrig loggen.",
      invalid: "ogiltigt",
      stops: "stannar här",
      final: "slutresultat",
      labels: ["inskickat", "mottaget", "tolkat", "validerat", "loggat", "teamet meddelat", "bekräftelse skickad"],
      testingTitle: "Teststatus",
      testingText: "Huvudmodulerna och alla tre valideringsvillkor testades med testinskickningar. Arbetsflödet driftsattes inte i en verklig kundmiljö."
    },
    limitations: {
      eyebrow: "Ärligt utformat",
      title: "Nuvarande begränsningar",
      items: [
        "Text Parser är beroende av en konsekvent e-poststruktur från Webflow. En formatändring skulle bryta regex-mönstret.",
        "E-postkontrollen bekräftar bara att fältet finns och innehåller '@'. Den verifierar inte om adressen faktiskt kan ta emot e-post.",
        "Google Sheets fungerar för den här demonstrationen men är inte rätt val för ett produktionsflöde med hög inskickningsvolym.",
        "Den nuvarande versionen kontrollerar inte om samma e-postadress skickat in tidigare.",
        "Produktionsanvändning skulle behöva felhantering, återförsökslogik och övervakning av misslyckade Slack-meddelanden eller Outlook-svar.",
        "Arbetsflödet testades med demonstrationsdata, inte i en verklig kundmiljö."
      ]
    },
    planned: {
      eyebrow: "Nästa steg för projektet",
      title: "Vidareutveckling av lead-arbetsflödet",
      badge: "PLANERADE FÖRBÄTTRINGAR — INTE IMPLEMENTERADE",
      description: "Den nuvarande versionen tar emot, tolkar, validerar, loggar, meddelar och svarar. En framtida version kan lägga till starkare datahantering och göra flödet redo för produktionsbruk.",
      items: [
        "Ersätt Google Sheets med ett CRM-system eller en strukturerad databas",
        "Lägg till dubblettdetektering baserad på e-postadress",
        "Förstärk e-postvalideringen bortom '@'-kontrollen",
        "Lägg till felloggning och återförsök för misslyckade Slack- eller Outlook-åtgärder",
        "Utöka spårningen av leadkälla utöver den nuvarande Webflow-källan",
        "Lägg till samtyckes- och integritetshantering för ett produktionsformulär",
        "Lägg till övervakning av misslyckade aviseringar eller svar"
      ],
      goal: "Målet är inte att ersätta mänsklig uppföljning. Det är att se till att varje giltigt lead når teamet och får ett svar — automatiskt, varje gång.",
      note: "Detta är planerade framtida förbättringar och ingår inte i den nuvarande implementerade versionen."
    },
    learned: {
      eyebrow: "Vad jag lärde mig",
      quote: "Jag lärde mig hur man omvandlar en ostrukturerad e-posttext till strukturerade leadfält med en Text Parser, validerar obligatorisk information med ett filter som innehåller flera AND-villkor och för en inskickning genom flera sammankopplade åtgärder — allt i ett enda Make.com-scenario.",
      paragraph: "Jag lärde mig också varför filtret måste komma före åtgärderna, inte efter. Att skicka ett Slack-meddelande eller ett Outlook-svar på ett ofullständigt lead skulle vara sämre än att inte skicka något alls.",
      transparencyTitle: "Projekttransparens",
      transparency1: "Det här är en funktionell portföljdemonstration som byggdes och testades med demonstrationsdata. Den utvecklades inte för en verklig kundmiljö.",
      transparency2: "Projektet visar arbetsflödeslogik, tolkning, validering, loggning och automatiserad kommunikation. Det innehåller inga uppmätta kundresultat."
    },
    related: {
      eyebrow: "Fler fallstudier",
      title: "Relaterade projekt",
      projects: [
        { tag: "Fallstudie 02", title: "Order Handoff Automation", description: "Omvandlar en HubSpot-affär med status Closed Won till en dokumenterad kundöverlämning med kontaktvalidering, dubblettkontroll, välkomstmeddelande och statusloggning.", action: "Visa fallstudien", urlKey: "order" },
        { tag: "Fallstudie 03", title: "AI Research Agent", description: "Omvandlar återkommande företagsresearch till en kvalitetskontrollerad och strukturerad rapport genom tre sammankopplade Make.com-scenarier.", action: "Utforska projektet", urlKey: "research" }
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
