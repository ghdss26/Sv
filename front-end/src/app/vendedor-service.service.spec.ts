import { TestBed } from '@angular/core/testing';

import { VendedorServiceService } from './vendedor-service.service';

describe('VendedorServiceService', () => {
  let service: VendedorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendedorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
