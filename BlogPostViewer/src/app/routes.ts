import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';


export const appRoutes: Routes = [
  //  { path: 'posts/new', component: CreatePostComponent, canDeactivate: ['canDeactivatePostEvent'] },
  // { path: 'posts/comment/new', component: CreateCommentComponent},
  //  { path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator] },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'posts', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }

];
