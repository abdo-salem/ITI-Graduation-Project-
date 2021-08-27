import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForDocsSliderComponent } from './first-nav-links/for-docs-slider/for-docs-slider.component';
import { ForDocsComponent } from './first-nav-links/for-docs/for-docs.component';
import { ForInsurersSliderComponent } from './first-nav-links/for-insurers-slider/for-insurers-slider.component';
import { ForInsurersComponent } from './first-nav-links/for-insurers/for-insurers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'for-docs', component: ForDocsComponent },
  { path: 'for-docs-slider', component: ForDocsSliderComponent },
  { path: 'for-insures', component: ForInsurersComponent },
  { path: 'for-insures-slider', component: ForInsurersSliderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
