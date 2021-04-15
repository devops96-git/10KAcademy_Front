import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  @Input() lineText: string;

  constructor() { }

  ngOnInit(): void {
  }
}
