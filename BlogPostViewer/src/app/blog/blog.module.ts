import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './state/blog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './state/blog.effects';
import { UserModule } from '../user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './post-details/post-details.component';

const postRoutes: Routes = [
  { path: '', component: PostListComponent },
  { path: ':id', component: PostDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(postRoutes),
    StoreModule.forFeature('posts', blogReducer),
    EffectsModule.forFeature([BlogEffects]),
    UserModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostListComponent,
    PostThumbnailComponent,
    PostDetailsComponent
  ]
})
export class BlogModule { }
