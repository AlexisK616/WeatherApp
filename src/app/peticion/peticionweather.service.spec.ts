import { TestBed } from '@angular/core/testing';

import { PeticionweatherService } from './peticionweather.service';

describe('PeticionweatherService', () => {
  let service: PeticionweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
