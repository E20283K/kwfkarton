import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import uzTranslation from './locales/uz.json';
import ruTranslation from './locales/ru.json';
import enTranslation from './locales/en.json';

const resources = {
  uz: {
    translation: uzTranslation,
    footer: uzTranslation.footer,
    navbar: uzTranslation.navbar,
    about: uzTranslation.about,
    portfolio: uzTranslation.portfolio,
    contact: uzTranslation.contact,
    servicesPage: uzTranslation.servicesPage,
    factoryLocation: uzTranslation.factoryLocation,
    partners: uzTranslation.partners,
  },
  ru: {
    translation: ruTranslation,
    footer: ruTranslation.footer,
    navbar: ruTranslation.navbar,
    about: ruTranslation.about,
    portfolio: ruTranslation.portfolio,
    contact: ruTranslation.contact,
    servicesPage: ruTranslation.servicesPage,
    factoryLocation: ruTranslation.factoryLocation,
    partners: ruTranslation.partners,
  },
  en: {
    translation: enTranslation,
    footer: enTranslation.footer,
    navbar: enTranslation.navbar,
    about: enTranslation.about,
    portfolio: enTranslation.portfolio,
    contact: enTranslation.contact,
    servicesPage: enTranslation.servicesPage,
    factoryLocation: enTranslation.factoryLocation,
    partners: enTranslation.partners,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    ns: ['translation', 'footer', 'navbar', 'about', 'portfolio', 'contact', 'servicesPage', 'factoryLocation', 'partners'],
    defaultNS: 'translation',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
