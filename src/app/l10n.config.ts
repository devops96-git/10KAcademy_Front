import { L10nConfig, L10nLoader } from 'angular-l10n';

const i18nAsset = {
  'en-US': {
    home: {
      firstScreen: {
        title: 'Mentoring in IT'
      }
    },
    whoIAm: 'I am {{name}}'
  },
  'ru-RU': {
    home: {
      firstScreen: {
        title: 'Менторство<br>в сфере IT'
      }
    },
    whoIAm: 'Sono {{name}}'
  },
  'uk-UA': {
    home: {
      firstScreen: {
        title: 'Mentoring in IT1'
      }
    },
    whoIAm: 'Sono {{name}}'
  }
};

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    { name: 'app', asset: i18nAsset }
  ],
  cache: true,
  keySeparator: '.',
  defaultLocale: { language: 'en-US', currency: 'USD' },
  schema: [
    { locale: { language: 'en-US', currency: 'USD' }, dir: 'ltr', text: 'United States' },
    { locale: { language: 'it-IT', currency: 'EUR' }, dir: 'ltr', text: 'Italia' }
  ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}

