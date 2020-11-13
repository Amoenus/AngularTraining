import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession, restrictedWords } from '../../shared/index';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;

  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.level = new FormControl('', [Validators.required]);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(sessionData: any) {

    const sessionModel: ISession = {
      id: undefined,
      name: sessionData.name,
      presenter: sessionData.presenter,
      duration: Number(sessionData.duration),
      level: sessionData.level,
      abstract: sessionData.abstract,
      voters: []
    };
    console.log(sessionModel);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
