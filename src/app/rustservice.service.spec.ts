import { TestBed } from '@angular/core/testing';

import { RustserviceService } from './rustservice.service';

describe('RustserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RustserviceService = TestBed.get(RustserviceService);
    expect(service).toBeTruthy();
  });
});
