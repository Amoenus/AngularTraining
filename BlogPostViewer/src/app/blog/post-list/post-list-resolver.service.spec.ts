import { TestBed } from '@angular/core/testing';
import { PostListResolver } from './post-list-resolver.service';


describe('PostListResolverService', () => {
  let service: PostListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
