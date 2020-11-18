
// State for this feature (Blog)

import { Post } from '../models/post.model';

export interface BlogState {
  showPostCode: boolean;
  currentPostId: number | null;
  posts: Post[];
  error: string;
}
