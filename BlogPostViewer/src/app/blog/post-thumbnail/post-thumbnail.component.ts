import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Author } from '../models/author.model';
import { Post } from '../models/post.model';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.scss']
})


export class PostThumbnailComponent implements OnInit {

  @Input() post?: Post | null;

  author: Observable<Author> = of();

  imageUrl = 'https://picsum.photos/seed/';
  size = '/640/480/';

  constructor(private authorService: AuthorService) { }


  ngOnInit(): void {
    if (this.post?.userId) {
      this.author = this.authorService.getAuthor(this.post.userId);
    }
  }

  getLinkPicture(): string {
    return `${this.imageUrl}${this.post?.id}${this.size}`;
  }

}
