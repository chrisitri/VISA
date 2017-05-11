import { TestBed, inject } from '@angular/core/testing';

import { WebcommService } from './webcomm.service';

describe('WebcommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebcommService]
    });
  });

  it('should ...', inject([WebcommService], (service: WebcommService) => {
    expect(service).toBeTruthy();
  }));
});
