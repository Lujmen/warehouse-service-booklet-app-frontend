import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en.json';
import esTranslation from '../locales/pl.json';

// Initialize i18n once
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'es', // Set the default language
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

// Export i18n for direct usage if needed
export default i18n;
