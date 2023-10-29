import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [

//!http://localhost:4200/landing/
{
  path: '',
  component: LandingPageComponent
},
//!http://localhost:4200/landing/prueba1
{
  path: 'prueba1',
  component: PruebaComponent
},
//!http://localhost:4200/landing/prueba2/1234 o http://localhost:4200/landing/prueba2/123
{
  path:'prueba2',
  children: [
    {path: '1234', component: PruebaComponent},
    {path: '123', component: LandingPageComponent}
  ]
}
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
})
export class LandingRoutingModule { }
