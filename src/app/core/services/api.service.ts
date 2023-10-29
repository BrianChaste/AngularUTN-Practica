import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public urlApi: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getUserForLogin (email: string, password: string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.urlApi}/users?email=${email}&password=${password}`);
  }

  registerUser(user: User){
    return this.http.post<User>(`${this.urlApi}/users`, user);
  }

  getAllUsers () : Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`)
  }

  // updateUser(user: User) : Observable<User> {
  //   return this.http.patch<User>(`${this.urlApi}/${user.id}`, user)
  // }






}

//! Aca va la conexion con el json server
