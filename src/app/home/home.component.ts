import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { questionsList } from './question-list';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggleQuestion(questionIndex: number): void {
    this.questions[questionIndex].isOpen = !this.questions[questionIndex].isOpen;
  }
}
