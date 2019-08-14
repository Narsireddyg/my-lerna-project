import { TestBed } from '@angular/core/testing';

import { CommonRegisterService } from './common-register.service';

describe('CommonRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonRegisterService = TestBed.get(CommonRegisterService);
    expect(service).toBeTruthy();
  });
});
