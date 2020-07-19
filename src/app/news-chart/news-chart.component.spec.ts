import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsChartComponent } from './news-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsChartComponent', () => {
  let component: NewsChartComponent;
  let fixture: ComponentFixture<NewsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsChartComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expect chart component to receive data from parent container', () => {
    component.newsfeedData = [{ objectId: 12345, upVote: 3 }, { objectId: 12346, upVote: 0 }];
    component.ngOnChanges();
    expect(component.lineChartLabels.length).toBeGreaterThan(0);
    expect(component.lineChartData[0].data.length).toBeGreaterThan(0);
  });
});
