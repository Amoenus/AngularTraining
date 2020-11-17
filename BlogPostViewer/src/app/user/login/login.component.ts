import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues: {
    userName: string;
    password: string;
  }): void {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['posts']);
  }

  cancel(): void {
    this.router.navigate(['posts']);
  }

}
