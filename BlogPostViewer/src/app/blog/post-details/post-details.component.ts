import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { getPosts, State } from '../state';
import { BlogPageActions } from '../state/actions';

Injectable();
@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  posts$: Observable<Post[]> = of([]);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.

    // this.posts$ = this.store.select(getPosts);

    // this.store.dispatch(BlogPageActions.loadPosts());
  }
}
