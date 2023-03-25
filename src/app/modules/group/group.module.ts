import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { LogoCardModule } from '../logo-card/logo-card.module';



@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    LogoCardModule
  ],
  exports: [
    GroupComponent
  ]
})
export class GroupModule { }
