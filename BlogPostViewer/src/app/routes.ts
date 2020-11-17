import { Routes } from '@angular/router';
import { PostListResolver } from './blog/post-list/post-list-resolver.service';
import { PostListComponent } from './blog/post-list/post-list.component';
import { Error404Component } from './errors/error404/error404.component';


export const appRoutes: Routes = [
//  { path: 'posts/new', component: CreatePostComponent, canDeactivate: ['canDeactivatePostEvent'] },
 // { path: 'posts/comment/new', component: CreateCommentComponent},
  { path: 'posts', component: PostListComponent, resolve: {posts: PostListResolver} },
  { path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];
