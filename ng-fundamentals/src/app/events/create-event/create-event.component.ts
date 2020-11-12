import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Injectable()
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  newEvent: any;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
