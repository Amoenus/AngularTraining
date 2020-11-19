import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { PostListComponent } from './post-list.component';
import { MemoizedSelector } from '@ngrx/store';
import { getPosts, State } from '../state';
import { Post } from '../models/post.model';


const activatedRouteStub = new BehaviorSubject({ route: { snapshot: {} } });

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  const initialState = { posts: [] };
  let mockStore: MockStore;
  let mockUsernameSelector: MemoizedSelector<State, Post[]>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        provideMockStore({ initialState })
      ],
      imports: [
        RouterTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    mockStore = TestBed.inject(MockStore);
    mockUsernameSelector = mockStore.overrideSelector(
      getPosts,
      initialState.posts
    );

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
