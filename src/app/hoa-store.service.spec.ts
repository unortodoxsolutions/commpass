import { TestBed } from '@angular/core/testing';

import { HoaStoreService } from './hoa-store.service';

describe('HoaStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoaStoreService = TestBed.get(HoaStoreService);
    expect(service).toBeTruthy();
  });
});
