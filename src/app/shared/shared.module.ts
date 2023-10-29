import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './components/error404/error404.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FooterComponent,
    NavBarComponent
  ]
})
export class SharedModule { }

//! Este modulo va  a tener los compoentnes que se van a compartir en varias paginas.
//! Error 404, footer, nav-bar
