import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { CarouselModule } from 'ngx-owl-carousel-o';

// import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForDocsComponent } from './first-nav-links/for-docs/for-docs.component';
import { ForDocsSliderComponent } from './first-nav-links/for-docs-slider/for-docs-slider.component';
import { ForInsurersComponent } from './first-nav-links/for-insurers/for-insurers.component';
import { ForInsurersSliderComponent } from './first-nav-links/for-insurers-slider/for-insurers-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    FirstNavbarComponent,
    SecondNavbarComponent,
    HomePageComponent,
    FooterComponent,
    NotFoundComponent,
    ForDocsComponent,
    ForDocsSliderComponent,
    ForInsurersComponent,
    ForInsurersSliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
