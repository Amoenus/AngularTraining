import { TestBed } from '@angular/core/testing';

import { PostRouteActivatorService } from './post-route-activator.service';

describe('PostRouteActivatorService', () => {
  let service: PostRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
