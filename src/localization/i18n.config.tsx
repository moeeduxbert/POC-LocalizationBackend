import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiKey = 'Mxjn9TbJ51fSRTuRr5y2KA';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['default'],
    defaultNS: 'default',
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
  });

export default i18next;
