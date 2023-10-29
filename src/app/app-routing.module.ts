import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';
import { LandingModule } from './modules/landing/landing.module';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [

//! LAZY LOADING - CARGA PERESOZA

{
  path: 'landing',
  loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
},
{
  path:'main',
  loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
},
{
  path: 'autentication',
  loadChildren: () => import('./modules/autentication/autentication.module').then(m => m.AutenticationModule)
},
{
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
},
{
  path: '**',
  component: Error404Component
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
