import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../shared/material/material.module';
import { userReducer } from './state/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    StoreModule.forFeature('users', userReducer),
    MaterialModule,
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})

export class UserModule { }
