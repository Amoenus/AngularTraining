import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';

Injectable();
@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.route?.snapshot?.data.posts;
  }

}
