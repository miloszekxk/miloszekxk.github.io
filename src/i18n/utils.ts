import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, ui, type Lang, type UiKey } from "./ui";

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Adres tej samej strony w innym języku, np. "/" -> "/en/". */
export function localizedPath(lang: Lang, path = "") {
  return getRelativeLocaleUrl(lang, path);
}
