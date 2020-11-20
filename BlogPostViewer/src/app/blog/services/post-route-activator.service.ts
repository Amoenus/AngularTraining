import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class PostRouteActivator implements CanActivate {

  constructor(
    private blogService: BlogService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const postId = Number(route.params.id);
    const eventExists = !!this.blogService.getPost(postId);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
