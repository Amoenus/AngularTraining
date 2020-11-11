import { TestBed } from '@angular/core/testing';

import { EventListResolver } from './event-list-resolver.service';

describe('EventListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventListResolver = TestBed.get(EventListResolver);
    expect(service).toBeTruthy();
  });
});
