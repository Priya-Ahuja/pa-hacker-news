import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsDataService } from './news-data.service';

describe('NewsDataService', () => {
  let service: NewsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsDataService]
    });
    service = TestBed.inject(NewsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
