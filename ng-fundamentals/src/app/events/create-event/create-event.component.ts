import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public cancel() {
    this.router.navigate(['/events']);
  }

}
