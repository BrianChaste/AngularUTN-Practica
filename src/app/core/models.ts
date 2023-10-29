//! Aca van los modelos que implemtan la interfas

import { IUser } from './interfaces'


export class User implements IUser{

  name: string;
  email: string;
  password: string;


  constructor(name: string, email: string, password: string){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}



