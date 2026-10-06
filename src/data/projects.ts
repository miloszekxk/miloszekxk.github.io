export interface Project {
  tag: string;
  name: string;
  description: string;
  stack: string;
  url: string;
}

export const projects: Project[] = [
  {
    tag: "Inteligentny dom",
    name: "Stacja pogodowa",
    description:
      "Małe urządzenie, które samo mierzy temperaturę, wilgotność i ciśnienie, a wyniki wysyła do internetu.",
    stack: "C++, ESP32",
    url: "https://github.com/miloszekxk/Smart-Weather-Station",
  },
  {
    tag: "Inteligentny dom",
    name: "Czujnik temperatury SUPLA",
    description:
      "Czujnik, który pokazuje temperaturę w aplikacji na telefonie i pozwala na jej podstawie np. włączać ogrzewanie.",
    stack: "C++, SUPLA",
    url: "https://github.com/miloszekxk/Temperature-Sensor-SUPLA",
  },
  {
    tag: "Aplikacja",
    name: "Tracker nawyków",
    description:
      "Aplikacja, która pomaga budować dobre nawyki i pokazuje postępy dzień po dniu.",
    stack: "TypeScript",
    url: "https://github.com/miloszekxk/Tracker-Nawykow",
  },
  {
    tag: "Algorytmy",
    name: "Grafy i kalkulator",
    description:
      "Programy rozwiązujące problemy matematyczne: szukanie drogi w sieci połączeń i liczenie złożonych wyrażeń.",
    stack: "C++",
    url: "https://github.com/miloszekxk/Graf",
  },
];

export interface SkillGroup {
  group: string;
  plain: string;
  items: string;
}

export const skillGroups: SkillGroup[] = [
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
];