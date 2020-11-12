import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.name, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.surname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(profileFormData: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(profileFormData.firstName, profileFormData.lastName);
      this.router.navigate(['events']);
    }
  }

  isValidLastName(): boolean {
    return this.lastName.valid
      || this.lastName.untouched;
  }

  isValidFirstName(): boolean {
    return this.firstName.valid
      || this.firstName.untouched;
  }
}
