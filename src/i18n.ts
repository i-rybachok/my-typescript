import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// * Locales
import ua from './assets/locale/ua.json';
import en from './assets/locale/en.json';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // * Default language
    lng: 'ua',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
