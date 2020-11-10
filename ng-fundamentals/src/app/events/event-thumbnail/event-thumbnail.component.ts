import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

  public getTimeStyle(time?: string) {
    switch (time) {
       case '8:00 am': {
          return ['early-start'];
        }
        case '10:00 am': {
          return ['late-start'];
        }
       default: {
        return [];
       }
    }
  }
}
