import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [

  {
    path: '',
    component: MainPageComponent
  }

]

@NgModule({


  imports: [
    RouterModule.forChild(routes),
  ]
})
export class MainRoutingModule { }
