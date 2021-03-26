import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

@Component({
  selector: 'app-callback-button',
  templateUrl: './callback-button.component.html',
  styleUrls: ['./callback-button.component.scss']
})
export class CallbackButtonComponent implements OnInit, OnDestroy {

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
