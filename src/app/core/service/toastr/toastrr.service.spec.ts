import { TestBed } from '@angular/core/testing';

import { ToastrrService } from './toastrr.service';

describe('ToastrrService', () => {
  let service: ToastrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
