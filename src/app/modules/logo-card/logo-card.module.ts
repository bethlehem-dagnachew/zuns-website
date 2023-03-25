import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCardComponent } from './logo-card.component';



@NgModule({
  declarations: [
    LogoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LogoCardComponent]
})
export class LogoCardModule { }
