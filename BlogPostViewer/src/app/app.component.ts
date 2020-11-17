import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private meta: Meta, public title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Home page of Angular Training Application' },
      { name: 'author', content: 'Romans Pokrovskis' },
      { name: 'keywords', content: 'Angular, Amoenus, Training' }
    ]);
    this.setTitle('Blog Post Viewer');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

}
