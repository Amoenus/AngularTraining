import { TestBed } from '@angular/core/testing';

import { PostRouteActivator } from './post-route-activator.service';

describe('PostRouteActivator', () => {
  let service: PostRouteActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRouteActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
