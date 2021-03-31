import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.modle';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CallbackButtonComponent } from './components/callback-button/callback-button.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CallbackButtonComponent,
    LanguageSwitchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
