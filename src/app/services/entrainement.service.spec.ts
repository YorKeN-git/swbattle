import { TestBed } from '@angular/core/testing';

import { EntrainementService } from './entrainement.service';

describe('EntrainementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrainementService = TestBed.get(EntrainementService);
    expect(service).toBeTruthy();
  });
});
