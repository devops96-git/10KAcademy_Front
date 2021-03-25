import {Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {L10N_CONFIG, L10N_LOCALE, L10nConfig, L10nIntlService, L10nLocale, L10nStorage, L10nTranslationService} from 'angular-l10n';
import {TranslationsService} from '../../services/translations/translations.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state('hidden', style({
        height: '0',
        // opacity: '0'
      })),
      state('open', style({
        height: '*',
        // opacity: '1'
      })),
      transition('hidden => open', animate('200ms ease-in')),
      transition('open => hidden', animate('200ms ease-out'))
    ])
  ]
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  @ViewChild('languageSwitcherElement', {static: false}) languageSwitcherElement: ElementRef;

  @Input() whiteStyle: boolean;

  public titleCurrentLanguage: string;
  public toggleState = 'hidden';

  constructor(
    private translation: L10nTranslationService,
    public translationsService: TranslationsService,
    private intl: L10nIntlService,
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) public l10nConfig: L10nConfig,
  ) {
    this.translation.onChange().subscribe({
      next: () => {
        this.setTitleCurrentLanguage();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public setTitleCurrentLanguage(): void {
    let titleCurrentLanguage: string;

    for (const language of this.l10nConfig.schema) {
      if (language.locale.language === this.locale.language) {
        titleCurrentLanguage = language.text;
        break;
      }
    }

    this.hideLanguagesList();
    this.titleCurrentLanguage = titleCurrentLanguage;
  }

  public slideToggleLanguagesList(): void {
    this.toggleState = this.toggleState === 'hidden' ? 'open' : 'hidden';
  }

  public hideLanguagesList(): void {
    this.toggleState = 'hidden';
  }

  public isLanguagesListOpened() {
    return this.toggleState === 'open';
  }

  @HostListener('window:click', ['$event'])
  onClick(event) {
    if (this.toggleState === 'hidden') {
      return;
    }

    const target = event.target;
    const languageSwitcher = this.languageSwitcherElement.nativeElement;

    if (languageSwitcher !== target && !languageSwitcher.contains(target)) {
      this.hideLanguagesList();
    }
  }

  public changeLanguage(language) {
    console.log('cnahge ', 1);

    this.translationsService.setLanguage(language.locale);
    this.hideLanguagesList();
  }
}
