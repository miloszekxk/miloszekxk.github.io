import type { Lang } from "../i18n/ui";

type Localized<T> = Record<Lang, T>;

export interface Project {
  tag: string;
  name: string;
  description: string;
  stack: string;
  url: string;
}

const projectData: {
  text: Localized<Pick<Project, "tag" | "name" | "description">>;
  stack: string;
  url: string;
}[] = [
  {
    text: {
      pl: {
        tag: "Inteligentny dom",
        name: "Stacja pogodowa",
        description:
          "Małe urządzenie, które samo mierzy temperaturę, wilgotność i ciśnienie, a wyniki wysyła do internetu.",
      },
      en: {
        tag: "Smart home",
        name: "Weather station",
        description:
          "A small device that measures temperature, humidity and pressure on its own and sends the readings to the internet.",
      },
    },
    stack: "C++, ESP32",
    url: "https://github.com/miloszekxk/Smart-Weather-Station",
  },
  {
    text: {
      pl: {
        tag: "Inteligentny dom",
        name: "Czujnik temperatury SUPLA",
        description:
          "Czujnik, który pokazuje temperaturę w aplikacji na telefonie i pozwala na jej podstawie np. włączać ogrzewanie.",
      },
      en: {
        tag: "Smart home",
        name: "SUPLA temperature sensor",
        description:
          "A sensor that shows the temperature in a phone app and can use it to, for example, turn the heating on.",
      },
    },
    stack: "C++, SUPLA",
    url: "https://github.com/miloszekxk/Temperature-Sensor-SUPLA",
  },
  {
    text: {
      pl: {
        tag: "Aplikacja",
        name: "Tracker nawyków",
        description:
          "Aplikacja, która pomaga budować dobre nawyki i pokazuje postępy dzień po dniu.",
      },
      en: {
        tag: "App",
        name: "Habit tracker",
        description:
          "An app that helps build good habits and shows progress day by day.",
      },
    },
    stack: "TypeScript",
    url: "https://github.com/miloszekxk/Tracker-Nawykow",
  },
  {
    text: {
      pl: {
        tag: "Algorytmy",
        name: "Grafy i kalkulator",
        description:
          "Programy rozwiązujące problemy matematyczne: szukanie drogi w sieci połączeń i liczenie złożonych wyrażeń.",
      },
      en: {
        tag: "Algorithms",
        name: "Graphs and calculator",
        description:
          "Programs that solve math problems: finding paths in a network of connections and evaluating complex expressions.",
      },
    },
    stack: "C++",
    url: "https://github.com/miloszekxk/Graf",
  },
];

export function getProjects(lang: Lang): Project[] {
  return projectData.map(({ text, stack, url }) => ({ ...text[lang], stack, url }));
}

export interface SkillGroup {
  group: string;
  plain: string;
  items: string;
}

const skillData: Localized<SkillGroup[]> = {
  pl: [
    {
      group: "Komputery i serwery",
      plain: "Zakładam konta, nadaję uprawnienia i dbam o porządek w firmowych systemach.",
      items: "Windows Server, Active Directory, Linux",
    },
    {
      group: "Sieci",
      plain: "Konfiguruję połączenia między urządzeniami i szybko znajduję, co blokuje internet.",
      items: "Routery, przełączniki, diagnostyka",
    },
    {
      group: "Programowanie",
      plain: "Piszę programy i automatyzuję powtarzalne zadania.",
      items: "C++, TypeScript, PowerShell",
    },
    {
      group: "Elektronika",
      plain: "Buduję urządzenia do inteligentnego domu.",
      items: "ESP32, Arduino, SUPLA",
    },
  ],
  en: [
    {
      group: "Computers and servers",
      plain: "I create accounts, assign permissions and keep company systems in order.",
      items: "Windows Server, Active Directory, Linux",
    },
    {
      group: "Networking",
      plain: "I configure connections between devices and quickly find what is blocking the internet.",
      items: "Routers, switches, troubleshooting",
    },
    {
      group: "Programming",
      plain: "I write programs and automate repetitive tasks.",
      items: "C++, TypeScript, PowerShell",
    },
    {
      group: "Electronics",
      plain: "I build smart home devices.",
      items: "ESP32, Arduino, SUPLA",
    },
  ],
};

export function getSkillGroups(lang: Lang): SkillGroup[] {
  return skillData[lang];
}

export interface TimelineItem {
  period: string;
  title: string;
  detail: string;
}

const timelineData: Localized<TimelineItem[]> = {
  pl: [
    {
      period: "2024 — teraz",
      title: "Informatyka, [Nazwa uczelni]",
      detail: "[Specjalność, tryb studiów]",
    },
    {
      period: "[2025]",
      title: "[Staż / praktyki — nazwa firmy]",
      detail: "[Czym się zajmowałeś]",
    },
    {
      period: "[2025]",
      title: "[Nazwa certyfikatu, np. Cisco CCNA]",
      detail: "[Status: ukończony / w trakcie]",
    },
  ],
  en: [
    {
      period: "2024 — present",
      title: "Computer Science, [University name]",
      detail: "[Specialization, mode of study]",
    },
    {
      period: "[2025]",
      title: "[Internship — company name]",
      detail: "[What you worked on]",
    },
    {
      period: "[2025]",
      title: "[Certificate name, e.g. Cisco CCNA]",
      detail: "[Status: completed / in progress]",
    },
  ],
};

export function getTimeline(lang: Lang): TimelineItem[] {
  return timelineData[lang];
}
