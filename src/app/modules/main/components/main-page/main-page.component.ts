import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/modules/autentication/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {

  user: User;

 constructor(private userService: UserService, private router: Router) {
  this.user = userService.getUser();
 }

 logOut() {
  this.router.navigate(['/landing'])
 }



}
