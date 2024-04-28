import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

import {en, ar, fr, es} from './translations/index';

const apiKey = 'Mxjn9TbJ51fSRTuRr5y2KA';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en', 'fr', 'ar', 'es'], // Include your imported languages here
    ns: ['default'],
    defaultNS: 'default',
    compatibilityJSON: 'v3',
    supportedLngs: ['en', 'fr', 'ar', 'es'],
    backend: {
      loadPath: loadPath,
    },
    detection: {
      order: ['asyncStorage', 'navigator'],
      caches: ['asyncStorage'],
      lookupLocalStorage: 'lng',
      lookupQuerystring: 'lng',
      lookupCookie: 'lng',
      lookupSessionStorage: 'lng',
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
    react: {
      useSuspense: false,
    },
    resources: {
      en: {translation: en},
      ar: {translation: ar},
      fr: {translation: fr},
      es: {translation: es},
    },
  });

export default i18next;
