import {Component, Inject, OnInit} from '@angular/core';
import { Application } from '../application';
import { questionsList } from './question-list';
import {L10N_LOCALE, L10nLocale} from 'angular-l10n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  application: Application = {
    id: 'roman_golovakha',
    name: 'Roman Golovakha'
  };
  questions = questionsList;

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) { }

  ngOnInit(): void {
  }

  toggleQuestion(questionIndex: number): void {
    this.questions[questionIndex].isOpen = !this.questions[questionIndex].isOpen;
  }
}
