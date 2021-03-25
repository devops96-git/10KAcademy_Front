import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CallbackButtonComponent } from './callback-button/callback-button.component';
import {L10nIntlModule, L10nLoader, L10nTranslationModule} from 'angular-l10n';
import {initL10n, l10nConfig} from './l10n.config';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CallbackButtonComponent,
    LangSwitcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    L10nTranslationModule.forRoot(l10nConfig),
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
