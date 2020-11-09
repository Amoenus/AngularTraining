import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  public event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '26/09/2036',
    time: '11:00',
    price: '599,99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
