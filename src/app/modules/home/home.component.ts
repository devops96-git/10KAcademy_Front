import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { L10N_LOCALE, L10nLocale, L10nTranslationService } from 'angular-l10n';

import { QuestionInterface } from './models/question.interface';
import { ExperienceInterface } from './models/experience.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  ownerProjects: string[];
  ownerExperience: ExperienceInterface[];
  questions: QuestionInterface[];

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService
  ) { }

  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: () => {
        this.ownerProjects = this.translation.translate('home.owner.projects');
        this.ownerExperience = this.translation.translate('home.owner.experience');
        this.questions = this.translation.translate('home.faq.questions');
      }
    });
  }

  ngOnDestroy(): void {
  }

  toggleQuestion(questionIndex: number): void {
    this.questions[questionIndex].isOpen = !this.questions[questionIndex].isOpen;
  }
}
