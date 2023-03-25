import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { AboutModule } from '../about/about.module';
import { FooterModule } from '../footer/footer.module';
import { GroupModule } from '../group/group.module';
import { LandingModule } from '../landing/landing.module';
import { NavbarModule } from '../navbar/navbar.module';

import { ProductsModule } from '../products/products.module';
import { ServicesModule } from '../services/services.module';
import { HomeRoutingModule } from './home.routing-module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NavbarModule,
    FooterModule,
    LandingModule,
    ProductsModule,
    ServicesModule,
    AboutModule,
    GroupModule
  ]
})
export class HomeModule { }
