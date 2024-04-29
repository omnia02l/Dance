import { TestBed } from '@angular/core/testing';

import { ResultCommentService } from './result-comment.service';

describe('ResultCommentService', () => {
  let service: ResultCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
