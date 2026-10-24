export const languages = {
  pl: "Polski",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pl";

export const localeTags: Record<Lang, string> = {
  pl: "pl-PL",
  en: "en-US",
};

export const ui = {
  pl: {
    "meta.title": "Miłosz Baron - Student informatyki",
    "meta.description":
      "Miłosz Baron, student informatyki. Sieci komputerowe, administracja Windows Server i Linux, Active Directory oraz projekty IoT na ESP32.",
    "person.jobTitle": "Student informatyki",

    "a11y.skip": "Przejdź do treści",
    "a11y.mainNav": "Nawigacja główna",
    "a11y.backToTop": "Wróć na górę",
    "a11y.switchLang": "Zmień język na polski",

    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.experience": "Doświadczenie",
    "nav.contact": "Kontakt",

    "hero.greeting": "Cześć, jestem Miłosz",
    "hero.lead":
      "Studiuję informatykę. Zajmuję się sieciami i administracją systemów Windows i Linux, a w wolnym czasie programuję własne projekty, od aplikacji po urządzenia IoT na ESP32.",
    "hero.cta": "Napisz do mnie",
    "hero.cv": "Pobierz CV (PDF)",

    "about.title": "O mnie",
    "about.p1":
      "Skończyłem technikum informatyczne, a teraz studiuję informatykę. Najbardziej interesują mnie sieci komputerowe i administracja systemów, dlatego dużo rzeczy sprawdzam w praktyce, na przykład we własnym labie z siecią małej firmy.",
    "about.interests": "Zainteresowania",
    "about.p2":
      "W wolnych chwilach robię własne projekty: urządzenia do inteligentnego domu, elektronikę na ESP32 i strony internetowe. Poza komputerami latam dronami i mam uprawnienia pilota A1/A3.",

    "projects.title": "Wybrane projekty",
    "projects.builtWith": "Zbudowane w:",
    "projects.view": "Zobacz projekt →",

    "skills.title": "Co umiem",

    "experience.title": "Doświadczenie i wykształcenie",
    "experience.work": "Doświadczenie",
    "experience.education": "Wykształcenie",
    "experience.certificates": "Certyfikaty",

    "contact.title": "Porozmawiajmy",
    "contact.lead":
      "Masz pytanie o któryś z moich projektów albo pomysł na współpracę? Napisz, chętnie odpowiem.",
    "contact.reply": "Odpowiadam zwykle w ciągu jednego dnia.",
    "contact.cta": "Napisz e-mail",
    "contact.mailSubject": "Kontakt ze strony",
    "contact.email": "E-mail",
    "contact.copy": "Kopiuj",
    "contact.copied": "Skopiowano",
    "contact.copyLabel": "Kopiuj adres e-mail",
  },
  en: {
    "meta.title": "Miłosz Baron - Computer Science Student",
    "meta.description":
      "Miłosz Baron, a computer science student. Networking, Windows Server and Linux administration, Active Directory and ESP32 IoT projects.",
    "person.jobTitle": "Computer Science Student",

    "a11y.skip": "Skip to content",
    "a11y.mainNav": "Main navigation",
    "a11y.backToTop": "Back to top",
    "a11y.switchLang": "Switch language to English",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm Miłosz",
    "hero.lead":
      "I study computer science. I work with networking and Windows and Linux system administration, and in my free time I build my own projects, from apps to IoT devices on the ESP32.",
    "hero.cta": "Get in touch",
    "hero.cv": "Download CV (PDF)",

    "about.title": "About me",
    "about.p1":
      "I graduated from an IT technical school and now I study computer science. I'm most interested in computer networking and system administration, so I like to try things out in practice, for example in my own lab with a small company network.",
    "about.interests": "Interests",
    "about.p2":
      "In my free time I work on my own projects: smart home devices, ESP32 electronics and websites. Away from the computer I fly drones and hold an A1/A3 drone pilot certificate.",

    "projects.title": "Selected projects",
    "projects.builtWith": "Built with:",
    "projects.view": "View project →",

    "skills.title": "What I do",

    "experience.title": "Experience & education",
    "experience.work": "Experience",
    "experience.education": "Education",
    "experience.certificates": "Certifications",

    "contact.title": "Let's talk",
    "contact.lead":
      "Have a question about one of my projects or an idea for working together? Drop me a line, I'm happy to answer.",
    "contact.reply": "I usually reply within a day.",
    "contact.cta": "Send an email",
    "contact.mailSubject": "Contact from your website",
    "contact.email": "Email",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.copyLabel": "Copy email address",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
