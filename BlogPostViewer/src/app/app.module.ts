import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './errors/error404/error404.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListResolver } from './blog/post-list/post-list-resolver.service';
import { UserModule } from './user/user.module';
import { PostThumbnailComponent } from './blog/post-thumbnail/post-thumbnail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    Error404Component,
    PostListComponent,
    PostThumbnailComponent
  ],
  providers: [
    PostListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
