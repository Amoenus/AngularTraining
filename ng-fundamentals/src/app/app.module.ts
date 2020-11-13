import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index';

import { EventsAppComponent } from './app-events.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/error404/error404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event. Do you really want to cancel?');
  }
  return true;
}
