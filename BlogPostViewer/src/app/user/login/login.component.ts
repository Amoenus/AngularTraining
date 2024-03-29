import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';


/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { getMaskPassword } from '../state/user.reducer';
import { UserPageActions } from '../state/actions';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  userName = '';
  password = '';

  maskPassword$: Observable<boolean> = of(true);

  constructor(private store: Store<State>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.maskPassword$ = this.store.select(getMaskPassword);
  }

  checkChanged(): void {
    this.store.dispatch(UserPageActions.maskPassword());
  }

  login(formValues: {
    userName: string;
    password: string;
  }): void {

    this.authService.login(formValues.userName, formValues.password);

    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    } else {
      this.router.navigate(['/posts']);
    }

    this.authService.login(formValues.userName, formValues.password);
    this.router.navigate(['posts']);
  }

  cancel(): void {
    this.router.navigate(['posts']);
  }

  isRequired(loginForm: NgForm, controlName: string): boolean {
    return loginForm.controls[controlName]?.errors?.['required'];
  }

  isInvalidPassword(loginForm: NgForm, controlName: string): boolean {
    return loginForm.controls[controlName]?.errors?.['invalid'];
  }
}
