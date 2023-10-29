import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models';

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

