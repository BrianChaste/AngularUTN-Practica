import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/modules/autentication/services/user.service';
import { MainPageComponent } from 'src/app/modules/main/components/main-page/main-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})


export class LoginComponent {

  public user = new User();

  isLogin: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService) { }


  // public login(email: string, password: string) {

  //   this.apiService.getUserForLogin(email, password).subscribe({

  //     next: (result) => {

  //       result.length == 1 ? this.router.navigate(['/main']) : console.error('Error en autenticacion');

  //     },
  //     error: (error) => {
  //       console.error('Error en el componente login', error)
  //     },

  //   })
  // }

  public login1() {

    const {email, password} = this.user; //!Destrucutre el objeto

    this.apiService.getUserForLogin(email, password).subscribe({

      next: (result) => {

        if(result.length == 1){
          this.userService.setUser(result[0]);
          this.isLogin = true;
          this.router.navigate(['/main'])
        }
      },
      error: (error) => {
        console.error('Error en el componente login', error)
      },

    })
  }







}







