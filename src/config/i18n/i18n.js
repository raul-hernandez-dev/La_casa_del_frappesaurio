import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEN from './locales/common_en.json';
import homeEN from '../../features/home/i18n/en.json'
import aboutEN from '../../features/about/i18n/en.json';
import contactEN from '../../features/contact/i18n/en.json';
import menuEN from '../../features/menu/i18n/en.json'

import commonES from './locales/common_es.json';
import homeES from '../../features/home/i18n/es.json'
import aboutES from '../../features/about/i18n/es.json';
import contactES from '../../features/contact/i18n/es.json';
import menuES from '../../features/menu/i18n/es.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'contact', 'menu'],
    resources: {
      en: {
        common: commonEN,
        home: homeEN,
        about: aboutEN,
        contact: contactEN,
        menu: menuEN,
      },
      es: {
        common: commonES,
        home: homeES,
        about: aboutES,
        contact: contactES,
        menu: menuES
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
