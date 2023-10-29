import { NgForm } from '@angular/forms';
import { UserService } from './../../../../core/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';


  constructor(private apiService: ApiService, private router: Router, private userService: UserService) { }

  public register() {

    this.apiService.registerUser(new User(this.name, this.email, this.password)).subscribe({

      next: (result) => {

        this.userService.setUser(this);
        this.router.navigate(['/main']);

      },
      error: (error) => {
        console.error('Error en el componente register');
      }

    });
  }


}
