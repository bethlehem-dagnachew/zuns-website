import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule
  ],
  exports: [ServiceComponent]
})
export class ServiceModule { }
