import type { Lang } from "../i18n/ui";

type Localized<T> = Record<Lang, T>;

export interface ProjectLink {
  url: string;
  /** Własny podpis przycisku; bez niego przycisk to "Zobacz projekt". */
  label?: string;
}

export interface Project {
  tag: string;
  name: string;
  description: string;
  stack: string;
  links: ProjectLink[];
}

const projectData: {
  text: Localized<Pick<Project, "tag" | "name" | "description">>;
  stack: string;
  /** Kilka linków, gdy karta opisuje więcej niż jedno repozytorium. */
  links: { url: string; label?: Localized<string> }[];
}[] = [
  {
    text: {
      pl: {
        tag: "Infrastruktura IT",
        name: "Firma IT Lab",
        description:
          "Wirtualna sieć małej firmy zbudowana od zera: firewall pfSense, domena Active Directory z GPO, helpdesk GLPI logujący przez LDAP, monitoring w Zabbixie i automatyczny backup z przetestowanym odtwarzaniem.",
      },
      en: {
        tag: "IT infrastructure",
        name: "Company IT Lab",
        description:
          "A small company network built from scratch: pfSense firewall, Active Directory domain with GPO, GLPI helpdesk with LDAP login, Zabbix monitoring and automated backups with a tested restore.",
      },
    },
    stack: "VirtualBox, pfSense, Windows Server, Active Directory, Debian, GLPI, Zabbix, PowerShell, Bash",
    links: [{ url: "https://github.com/miloszekxk/Firma-It-Lab" }],
  },
  {
    text: {
      pl: {
        tag: "IoT",
        name: "Stacja pogodowa",
        description:
          "Stacja pogodowa na ESP32, która pobiera dane z API OpenWeatherMap. Sieć Wi-Fi ustawia się przez przeglądarkę, bez ponownego wgrywania programu.",
      },
      en: {
        tag: "IoT",
        name: "Weather station",
        description:
          "An ESP32 weather station that pulls data from the OpenWeatherMap API. Wi-Fi is set up from a web browser, without reflashing the firmware.",
      },
    },
    stack: "C++, ESP32, PlatformIO, OpenWeatherMap API",
    links: [{ url: "https://github.com/miloszekxk/Smart-Weather-Station" }],
  },
  {
    text: {
      pl: {
        tag: "Inteligentny dom",
        name: "Czujnik temperatury SUPLA",
        description:
          "Czujnik temperatury i ciśnienia (BMP280) na ESP32, który wysyła odczyty do chmury Supla, więc widać je w aplikacji na telefonie.",
      },
      en: {
        tag: "Smart home",
        name: "SUPLA temperature sensor",
        description:
          "An ESP32 temperature and pressure sensor (BMP280) that sends readings to the Supla cloud, so they show up in the phone app.",
      },
    },
    stack: "C++, ESP32, PlatformIO, BMP280, Supla",
    links: [{ url: "https://github.com/miloszekxk/Temperature-Sensor-SUPLA" }],
  },
  {
    text: {
      pl: {
        tag: "Algorytmy",
        name: "Grafy i kalkulator",
        description:
          "Dwa projekty na studia: program sprawdzający, czy graf jest dwudzielny (przeszukiwanie wszerz, listy sąsiedztwa), oraz kalkulator wyrażeń w odwrotnej notacji polskiej (algorytm Shunting-yard).",
      },
      en: {
        tag: "Algorithms",
        name: "Graphs and calculator",
        description:
          "Two university projects: a program that checks whether a graph is bipartite (breadth-first search, adjacency lists) and an expression calculator using Reverse Polish Notation (shunting-yard algorithm).",
      },
    },
    stack: "C++",
    links: [
      { url: "https://github.com/miloszekxk/Graf", label: { pl: "Graf", en: "Graph" } },
      { url: "https://github.com/miloszekxk/Kalkulator-ONP", label: { pl: "Kalkulator ONP", en: "RPN calculator" } },
    ],
  },
];

export function getProjects(lang: Lang): Project[] {
  return projectData.map(({ text, stack, links }) => ({
    ...text[lang],
    stack,
    links: links.map(({ url, label }) => ({ url, label: label?.[lang] })),
  }));
}

export interface SkillGroup {
  group: string;
  plain: string;
  items: string;
}

const skillData: Localized<SkillGroup[]> = {
  pl: [
    {
      group: "Systemy i Active Directory",
      plain: "Administruję Windows (klient i Server) i Linuksem, a w domenie AD zarządzam kontami, GPO i uprawnieniami NTFS.",
      items: "Windows Server, Debian, AD DS, DNS, GPO, NTFS, VirtualBox",
    },
    {
      group: "Sieci i bezpieczeństwo",
      plain: "Konfiguruję sieci od adresacji po firewall, routery i switche. Znam podstawy cyberbezpieczeństwa.",
      items: "TCP/IP, DHCP, DNS, VLAN, SNMP, pfSense",
    },
    {
      group: "Helpdesk i monitoring",
      plain: "Stawiam i konfiguruję system zgłoszeń (ITSM) oraz monitoring serwerów, żeby awaria nie była niespodzianką.",
      items: "GLPI, integracja LDAP, Zabbix, runbooki",
    },
    {
      group: "Skrypty i kopie zapasowe",
      plain: "Automatyzuję powtarzalne zadania i robię kopie zapasowe, których odtwarzanie sprawdzam w praktyce.",
      items: "PowerShell, Bash, cron",
    },
    {
      group: "Bazy danych i narzędzia",
      plain: "Pracuję z bazami danych i trzymam swoje projekty w repozytoriach Git.",
      items: "MySQL / MariaDB, MS SQL, Git, GitHub, MS Office",
    },
    {
      group: "Elektronika i IoT",
      plain: "Programuję urządzenia na ESP32 i naprawiam elektronikę, łącznie z lutowaniem.",
      items: "C++, ESP32, PlatformIO, lutowanie",
    },
  ],
  en: [
    {
      group: "Systems and Active Directory",
      plain: "I administer Windows (client and Server) and Linux, and manage accounts, GPOs and NTFS permissions in an AD domain.",
      items: "Windows Server, Debian, AD DS, DNS, GPO, NTFS, VirtualBox",
    },
    {
      group: "Networking and security",
      plain: "I configure networks from addressing to firewalls, routers and switches. I know the basics of cybersecurity.",
      items: "TCP/IP, DHCP, DNS, VLAN, SNMP, pfSense",
    },
    {
      group: "Helpdesk and monitoring",
      plain: "I set up a ticketing system (ITSM) and server monitoring, so outages don't come as a surprise.",
      items: "GLPI, LDAP integration, Zabbix, runbooks",
    },
    {
      group: "Scripting and backups",
      plain: "I automate repetitive tasks and make backups whose restore I actually test.",
      items: "PowerShell, Bash, cron",
    },
    {
      group: "Databases and tools",
      plain: "I work with databases and keep my projects in Git repositories.",
      items: "MySQL / MariaDB, MS SQL, Git, GitHub, MS Office",
    },
    {
      group: "Electronics and IoT",
      plain: "I program ESP32 devices and repair electronics, including soldering.",
      items: "C++, ESP32, PlatformIO, soldering",
    },
  ],
};

export function getSkillGroups(lang: Lang): SkillGroup[] {
  return skillData[lang];
}

export interface TimelineItem {
  period: string;
  title: string;
  /** Opcjonalnie: bez nazw szkół, firm i miejscowości (prywatność). */
  place?: string;
  description?: string;
}

export interface Timeline {
  experience: TimelineItem[];
  education: TimelineItem[];
}

const timelineData: Localized<Timeline> = {
  pl: {
    experience: [
      {
        period: "2020 - obecnie",
        title: "Wsparcie techniczne IT (nieformalnie)",
        place: "Pomoc dla rodziny i znajomych",
        description:
          "Diagnostyka i naprawa sprzętu, reinstalacja i konfiguracja systemów, konfiguracja sieci domowych oraz usuwanie złośliwego oprogramowania.",
      },
      {
        period: "03.2022 - 04.2022\n10.2022 - 11.2022",
        title: "Praktyki zawodowe",
        place: "Serwis elektroniki",
        description:
          "Wsparcie zespołu w bieżących zadaniach technicznych i serwisowych: diagnostyka, lutowanie i wymiana uszkodzonych komponentów (kondensatory, rezystory, układy scalone) oraz obsługa klienta.",
      },
    ],
    education: [
      {
        period: "10.2025 - obecnie",
        title: "Informatyka - studia inżynierskie",
      },
      {
        period: "09.2019 - 04.2024",
        title: "Technik informatyk (kwalifikacje INF.02, INF.03)",
        place: "Technikum informatyczne",
      },
    ],
  },
  en: {
    experience: [
      {
        period: "2020 - present",
        title: "IT support (informal)",
        place: "Helping family and friends",
        description:
          "Hardware diagnostics and repair, OS reinstallation and configuration, home network setup and malware removal.",
      },
      {
        period: "03.2022 - 04.2022\n10.2022 - 11.2022",
        title: "Vocational internship",
        place: "Electronics repair service",
        description:
          "Supported the team with day-to-day technical and service tasks: diagnostics, soldering and replacing faulty components (capacitors, resistors, ICs), and customer support.",
      },
    ],
    education: [
      {
        period: "10.2025 - present",
        title: "Computer Science - engineering degree",
      },
      {
        period: "09.2019 - 04.2024",
        title: "IT Technician (qualifications INF.02, INF.03)",
        place: "IT technical secondary school",
      },
    ],
  },
};

export function getTimeline(lang: Lang): Timeline {
  return timelineData[lang];
}

export interface Certificate {
  name: string;
  issuer: string;
}

/** Zwykły tekst = ten sam w obu językach (np. oficjalne angielskie nazwy kursów Cisco). */
type MaybeLocalized = string | Localized<string>;

const certificateData: { name: MaybeLocalized; issuer: MaybeLocalized }[] = [
  {
    name: "CCNA Routing and Switching: Introduction to Networks",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    name: {
      pl: "Uprawnienia pilota drona A1/A3",
      en: "Drone pilot certificate A1/A3",
    },
    issuer: {
      pl: "Urząd Lotnictwa Cywilnego",
      en: "Civil Aviation Authority of Poland",
    },
  },
];

const pick = (value: MaybeLocalized, lang: Lang) =>
  typeof value === "string" ? value : value[lang];

export function getCertificates(lang: Lang): Certificate[] {
  return certificateData.map(({ name, issuer }) => ({
    name: pick(name, lang),
    issuer: pick(issuer, lang),
  }));
}

const interestData: Localized<string[]> = {
  pl: [
    "Smart home",
    "Sieci komputerowe",
    "Drony - budowa i pilotaż",
    "Tworzenie stron internetowych",
    "Elektronika",
    "Nowe technologie",
  ],
  en: [
    "Smart home",
    "Computer networking",
    "Drones - building and flying",
    "Web development",
    "Electronics",
    "New technologies",
  ],
};

export function getInterests(lang: Lang): string[] {
  return interestData[lang];
}
