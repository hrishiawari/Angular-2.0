import { TestBed, inject } from '@angular/core/testing';

import { HugeService } from './huge.service';

describe('HugeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HugeService]
    });
  });

  it('should be created', inject([HugeService], (service: HugeService) => {
    expect(service).toBeTruthy();
  }));
});
