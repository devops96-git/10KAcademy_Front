import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { L10nIntlModule, L10nLoader, L10nTranslationModule } from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CallbackButtonComponent } from './callback-button/callback-button.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

import {
  initL10n,
  l10nConfig,
  L10nCustomMissingTranslationHandler,
  L10nCustomStorage,
  L10nCustomTranslationLoader
} from './l10n.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CallbackButtonComponent,
    LanguageSwitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(
      l10nConfig,
      {
        translationLoader: L10nCustomTranslationLoader,
        missingTranslationHandler: L10nCustomMissingTranslationHandler,
        storage: L10nCustomStorage
      }
    ),

    L10nIntlModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
