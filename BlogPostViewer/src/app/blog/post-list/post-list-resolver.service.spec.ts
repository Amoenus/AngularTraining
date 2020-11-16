import { TestBed } from '@angular/core/testing';

import { PostListResolverService } from './post-list-resolver.service';

describe('PostListResolverService', () => {
  let service: PostListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
