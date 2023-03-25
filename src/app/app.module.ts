import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { FooterModule } from './modules/footer/footer.module';
import { GroupModule } from './modules/group/group.module';
import { LandingModule } from './modules/landing/landing.module';
import { NavbarModule } from './modules/navbar/navbar.module';

import { ProductsModule } from './modules/products/products.module';
import { ServicesModule } from './modules/services/services.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    LandingModule,
    ProductsModule,
    ServicesModule,
    AboutModule,
    GroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
