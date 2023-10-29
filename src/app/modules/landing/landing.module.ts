import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ],
  exports:[]
})
export class LandingModule { }
