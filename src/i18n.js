import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './pages/Landing/en.json';
import esTranslation from './pages/Landing/es.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
