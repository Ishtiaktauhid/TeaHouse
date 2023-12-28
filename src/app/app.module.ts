import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    StoreComponent,
    ContactComponent,
    HomeComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,CarouselModule,BrowserAnimationsModule, HttpClientModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
