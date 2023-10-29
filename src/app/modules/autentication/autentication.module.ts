import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AutenticationRoutingModule } from './autentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [

  ]
})
export class AutenticationModule { }
