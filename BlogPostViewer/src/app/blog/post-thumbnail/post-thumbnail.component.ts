import { Component, Injectable, Input, OnInit } from '@angular/core';
import { IPost } from '../models/Post';

@Injectable()
@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.scss']
})
export class PostThumbnailComponent {
  @Input() post!: IPost;

  constructor() { }
}
