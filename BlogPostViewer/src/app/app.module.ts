import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './errors/error404/error404.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './shared/toastr/toastr.service';
import { PostListComponent } from './blog/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListResolver } from './blog/post-list/post-list-resolver.service';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    PostListComponent
  ],
  providers: [
    ToastrService,
    PostListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
