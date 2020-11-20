import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostRouteActivator } from './post-route-activator.service';

describe('PostRouteActivator', () => {
  let service: PostRouteActivator;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule,
      RouterTestingModule
    ] });
    service = TestBed.inject(PostRouteActivator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
