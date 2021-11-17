import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({});
  private firstName?: FormControl;
  private lastName?: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser?.name, [Validators.required, Validators['pattern']('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.surname, [Validators.required, Validators['pattern']('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(): void {
    this.router.navigate(['posts']);
  }

  saveProfile(profileFormData: any): void {
    if (this.profileForm?.valid) {
      this.authService.updateCurrentUser(profileFormData.firstName, profileFormData.lastName);
      this.router.navigate(['posts']);
    }
  }

  isValidLastName(): boolean {
    return (this.lastName?.valid
      || this.lastName?.untouched) ? true : false;
  }

  isValidFirstName(): boolean {
    return (this.firstName?.valid
      || this.firstName?.untouched) ? true : false;
  }
}
