import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import en from "dayjs/locale/en-ca";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

const locales = { fr, "en-ca": en };
dayjs.extend(LocalizedFormat);

/**
 * Update the lang of dayjs
 * @param {string} lang - The lang wanted
 * @returns {Promise<void>}
 */
export async function setDayjsLanguage(lang) {
  const newLang = lang === "en" ? "en-ca" : lang;
  let locale = locales[newLang];
  if (!locale) {
    locale = (await import(`dayjs/locale/${newLang}`)).default;
    locales[newLang] = locale;
  }
  dayjs.locale(locale);
}

// set default language
setDayjsLanguage("en-ca");

export default dayjs;
