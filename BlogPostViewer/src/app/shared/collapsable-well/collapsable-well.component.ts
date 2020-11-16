import { Component, Injectable, Input, OnInit } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})

export class CollapsableWellComponent implements OnInit {
  contentVisible = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleContent() {
    this.contentVisible = !this.contentVisible;
  }

}
