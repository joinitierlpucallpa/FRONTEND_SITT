import { TestBed } from '@angular/core/testing';

import { SubsistemaService } from './subsistema.service';

describe('SubsistemaService', () => {
  let service: SubsistemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsistemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
