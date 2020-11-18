import { Injectable } from '@angular/core';
import { User } from './user.model';


@Injectable({
    providedIn: 'root',
})
export class AuthService {

    currentUser?: User;
    redirectUrl = 'profile';

    constructor() { }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
        this.currentUser = {
          id: 1,
          name: 'Kara',
          surname: 'Denvers',
          userName: 'supergirl'
        };
    }

    updateCurrentUser(firstName: string, lastName: string) {
      if (this.currentUser) {
        this.currentUser.name = firstName;
        this.currentUser.surname = lastName;
      };
    }

    logout(): void {
        this.currentUser = undefined;
    }
}
