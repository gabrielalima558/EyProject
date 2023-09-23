import { TestBed } from '@angular/core/testing';

import { SubmitUserService } from './submit-user.service';

describe('SubmitUserService', () => {
  let service: SubmitUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
