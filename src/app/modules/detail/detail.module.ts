import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detal-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { LandingModule } from '../landing/landing.module';
import { ServicesModule } from '../services/services.module';
import { ProductsModule } from '../products/products.module';




@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NavbarModule,
    FooterModule,
    LandingModule,
    ServicesModule,
    ProductsModule

  ],
  exports: [
    DetailComponent,

  ]
})
export class DetailModule { }
