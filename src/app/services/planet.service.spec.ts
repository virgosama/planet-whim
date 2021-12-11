import { TestBed } from '@angular/core/testing';

import { PlanetService } from './planet.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PlanetService', () => {
  let service: PlanetService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
