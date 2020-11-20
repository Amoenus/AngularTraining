import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { AuthorService } from '../services/author.service';
import { BlogService } from '../services/blog.service';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Observable<Post> = of();
  author: Observable<Author> = of();
  cachedPost?: Post;
  imageUrl = 'https://picsum.photos/seed/';
  size = '/640/480/';

  constructor(private blogService: BlogService, private authorService: AuthorService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.post = this.blogService.getPost(Number(this.route.snapshot.params.id)).pipe();
    this.post.subscribe(post => {
      this.cachedPost = post;
      this.author = this.authorService.getAuthor(post?.userId);
    });
  }

  getLinkPicture(): string {
    return `${this.imageUrl}${this.cachedPost?.id}${this.size}`;
  }
}
