import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      name: 'Kara',
      surname: 'Denvers'
    };
  }

  logout() {
    this.currentUser = null;
  }

  isAuthenicated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.name = firstName;
    this.currentUser.surname = lastName;
  }
}
