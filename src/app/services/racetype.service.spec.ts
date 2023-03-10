import { TestBed } from '@angular/core/testing';

import { RacetypeService } from './racetype.service';

describe('RacetypeService', () => {
  let service: RacetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
