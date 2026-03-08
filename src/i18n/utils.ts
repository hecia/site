import { ui, defaultLang, showDefaultLang, type UiKey } from "./ui"

export type Lang = keyof typeof ui

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function tDynamic(lang: Lang, key: string): string {
  const langUi = ui[lang] as Record<string, string>
  const defaultUi = ui[defaultLang] as Record<string, string>
  return langUi[key] || defaultUi[key] || key
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang): string {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function getDateLocale(lang: Lang): string {
  return lang === "fr" ? "fr-CA" : "en-CA"
}

export function getPathWithoutLocale(url: URL): string {
  const parts = url.pathname.split("/").filter(Boolean)
  if (parts[0] && parts[0] in ui) {
    return parts.slice(1).join("/")
  }
  return parts.join("/")
}

export function getLocaleUrl(url: URL, targetLang: Lang): string {
  const pathWithoutLocale = getPathWithoutLocale(url)
  const base = pathWithoutLocale ? `/${pathWithoutLocale}` : "/"

  if (!showDefaultLang && targetLang === defaultLang) {
    return base
  }
  return `/${targetLang}${base}`
}

export function filterByLocale<T extends { id: string }>(
  entries: T[],
  lang: Lang
): T[] {
  return entries.filter((entry) => entry.id.startsWith(`${lang}/`))
}

export function getSlugFromId(id: string): string {
  const parts = id.split("/")
  return parts.slice(1).join("/")
}
