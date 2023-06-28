import { TestBed } from '@angular/core/testing';

import { VendaServiceService } from './venda-service.service';

describe('VendaServiceService', () => {
  let service: VendaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
