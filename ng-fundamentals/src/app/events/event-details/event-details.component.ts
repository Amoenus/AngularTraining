import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/models/event.model';
import { EventService } from '../shared/event.service';
import { ISession } from '../shared/models/session.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']));
  }

  addSession() {
    this.addMode = true;
  }

  createNewSession(session: ISession) {
    session.id = Math.max(...this.event.sessions.map(e => e.id)) + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelSessionCreation() {
    this.addMode = false;
  }
}
