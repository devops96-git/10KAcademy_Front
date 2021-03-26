import {
  L10nConfig,
  L10nLoader,
  L10nLocale,
  L10nMissingTranslationHandler,
  L10nProvider,
  L10nStorage,
  L10nTranslationLoader
} from 'angular-l10n';
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    {
      name: 'app',
      asset: './assets/localizations/locale',
      options: { version: '1.0.0' }
    }
  ],
  cache: true,
  keySeparator: '.',
  fallback: true,
  defaultRouting: true,
  defaultLocale: { language: 'ru', currency: 'RUB' },
  schema: [
    { locale: { language: 'en', currency: 'USD' }, dir: 'ltr', text: 'ENG' },
    { locale: { language: 'ua', currency: 'UAH' }, dir: 'ltr', text: 'УКР' },
    { locale: { language: 'ru', currency: 'RUB' }, dir: 'ltr', text: 'РУС' }
  ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}

@Injectable() export class L10nCustomTranslationLoader implements L10nTranslationLoader {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(@Optional() private http: HttpClient) { }

  public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const url = `${provider.asset}-${language}.json`;
    const options = {
      headers: this.headers,
      params: new HttpParams().set('v', provider.options.version)
    };
    return this.http.get(url, options);
  }
}

@Injectable() export class L10nCustomMissingTranslationHandler implements L10nMissingTranslationHandler {
  public handle(key: string): string | any {
    return 'No translation';
  }
}

@Injectable() export class L10nCustomStorage implements L10nStorage {
  public async read(): Promise<L10nLocale | null> {
    return Promise.resolve(JSON.parse(localStorage.getItem('locale')) || null);
  }

  public async write(locale: L10nLocale): Promise<void> {
    localStorage.setItem('locale', JSON.stringify(locale));
  }
}


