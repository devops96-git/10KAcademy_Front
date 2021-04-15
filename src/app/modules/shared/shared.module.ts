import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { L10nTranslationModule } from 'angular-l10n';
import { NgSelectModule } from '@ng-select/ng-select';
import { TickerComponent } from './components/ticker/ticker.component';



@NgModule({
  declarations: [
    TickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    L10nTranslationModule,
    NgSelectModule,
    TickerComponent
  ]
})
export class SharedModule { }
