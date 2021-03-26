import { Component, Inject, Input, OnInit } from '@angular/core';
import { L10N_CONFIG, L10N_LOCALE, L10nConfig, L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {
  @Input() whiteStyle: boolean;

  public languageSchema = this.l10nConfig.schema;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    private translation: L10nTranslationService
  ) { }

  ngOnInit(): void {
  }

  public setLocale(locale: L10nLocale): void {
    this.translation.setLocale(locale).then();
  }
}
