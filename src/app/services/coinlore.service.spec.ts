import { TestBed } from '@angular/core/testing';

import { CoinloreService } from './coinlore.service';

describe('CoinloreService', () => {
  let service: CoinloreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinloreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
