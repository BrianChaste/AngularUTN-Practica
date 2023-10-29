//! Aca van los modelos que implemtan la interfas

import { IUser } from './interfaces'


export class User implements IUser {


  id: number;
  name: string;
  email: string;
  password: string;

  constructor() {
    this.id = 0;
    this.email = '';
    this.name = '';
    this.password = '';
  }


  // name: string;
  // email: string;
  // password: string;


  // constructor(name: string, email: string, password: string){
  //   this.name = name;
  //   this.email = email;
  //   this.password = password;
  }




