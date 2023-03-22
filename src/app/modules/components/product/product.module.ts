import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
