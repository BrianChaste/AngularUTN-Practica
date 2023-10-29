import { Injectable } from '@angular/core';
import { User } from '../../../core/models';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user!: User;

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

}

