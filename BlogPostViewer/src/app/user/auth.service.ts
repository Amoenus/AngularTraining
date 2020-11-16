import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser?: IUser;
  constructor() { }

  loginUser(username: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: username,
      name: 'Kara',
      surname: 'Denvers'
    };
  }

  logout(): void {
    this.currentUser = undefined;
  }

  isAuthenicated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    if (this.currentUser){
      this.currentUser.name = firstName;
      this.currentUser.surname = lastName;
    }
  }
}
