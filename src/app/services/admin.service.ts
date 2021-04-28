import { Injectable } from '@angular/core';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor() { }


  // tslint:disable-next-line:typedef
  public login(userInfo: Admin){
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }


  // tslint:disable-next-line:typedef
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;


  }


  // tslint:disable-next-line:typedef
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
