export const languages = {
  pl: "Polski",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pl";

/** Pełne kody regionów dla hreflang, og:locale i sitemapy. */
export const localeTags: Record<Lang, string> = {
  pl: "pl-PL",
  en: "en-US",
};

export const ui = {
  pl: {
    "meta.title": "Miłosz Baron - Student informatyki",
    "meta.description":
      "Student informatyki zajmujący się administracją systemów, sieciami i elektroniką IoT.",
    "person.jobTitle": "Student informatyki",

    "a11y.skip": "Przejdź do treści",
    "a11y.mainNav": "Nawigacja główna",
    "a11y.backToTop": "Wróć na górę",
    "a11y.switchLang": "Zmień język na polski",

    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.contact": "Kontakt",

    "hero.greeting": "Cześć, jestem Miłosz",
    "hero.lead":
      "Studiuję informatykę. Dbam o to, żeby komputery, serwery i sieci w firmie działały sprawnie i bezpiecznie — a po godzinach buduję własne urządzenia, np. domową stację pogodową.",
    "hero.cta": "Napisz do mnie",
    "hero.cv": "Pobierz CV (PDF)",

    "about.title": "O mnie",
    "about.p1":
      "Lubię wiedzieć, jak rzeczy działają od środka. Konfiguruję konta i uprawnienia pracowników, zarządzam serwerami z systemami Windows i Linux, a gdy coś przestaje działać — szukam przyczyny i ją naprawiam.",
    "about.p2":
      "Programuję też własne projekty: od urządzeń do inteligentnego domu po proste aplikacje. Coraz bardziej interesuje mnie bezpieczeństwo w sieci.",

    "projects.title": "Wybrane projekty",
    "projects.builtWith": "Zbudowane w:",
    "projects.view": "Zobacz projekt →",

    "skills.title": "Co umiem",

    "experience.title": "Doświadczenie",

    "contact.title": "Porozmawiajmy",
    "contact.lead":
      "Szukasz profesjonalej osoby albo masz pytanie o któryś z projektów? Odpisuję zwykle w ciągu jednego dnia.",
  },
  en: {
    "meta.title": "Miłosz Baron - Computer Science Student",
    "meta.description":
      "Computer science student working with system administration, networking and IoT electronics.",
    "person.jobTitle": "Computer Science Student",

    "a11y.skip": "Skip to content",
    "a11y.mainNav": "Main navigation",
    "a11y.backToTop": "Back to top",
    "a11y.switchLang": "Switch language to English",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm Miłosz",
    "hero.lead":
      "I study computer science. I keep company computers, servers and networks running smoothly and securely — and after hours I build my own devices, like a home weather station.",
    "hero.cta": "Get in touch",
    "hero.cv": "Download CV (PDF)",

    "about.title": "About me",
    "about.p1":
      "I like knowing how things work under the hood. I set up employee accounts and permissions, manage Windows and Linux servers, and when something stops working — I find the cause and fix it.",
    "about.p2":
      "I also build my own projects: from smart home devices to simple apps. I'm becoming more and more interested in network security.",

    "projects.title": "Selected projects",
    "projects.builtWith": "Built with:",
    "projects.view": "View project →",

    "skills.title": "What I do",

    "experience.title": "Experience",

    "contact.title": "Let's talk",
    "contact.lead":
      "Looking for someone reliable or have a question about one of my projects? I usually reply within a day.",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
