import { TestBed } from '@angular/core/testing';

import { FethApiService } from './feth-api.service';

describe('FethApiService', () => {
  let service: FethApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FethApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
