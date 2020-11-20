import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { getPosts, State } from '../state';
import { BlogPageActions } from '../state/actions';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$?: Observable<Post[]> = of([]);
  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.posts$ = this.store.select(getPosts);

    this.store.dispatch(BlogPageActions.loadPosts());
  }
}
