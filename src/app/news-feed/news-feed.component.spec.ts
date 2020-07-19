import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsFeedComponent } from './news-feed.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VotesService } from '../votes.service';
import { DebugElement } from '@angular/core';
describe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;
  let debugElement: DebugElement;
  let votesService: VotesService;
  let getLocalDataSpy;
  let saveLocalDataSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;


    /* Spying on service library */
    votesService = debugElement.injector.get(VotesService);
    getLocalDataSpy = spyOn(votesService, 'getLocalData').and.callThrough();
    saveLocalDataSpy = spyOn(votesService, 'saveLocalData').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase voteCount if upvote btn is clicked', () => {
    const value = {
      upVote: 0
    };
    component.onClickVote(value);
    expect(value.upVote).toBeGreaterThan(0);
    expect(saveLocalDataSpy).toHaveBeenCalledWith(value);
  });

  it('should hide the element if ishide btn is clicked', () => {
    const value = {
      isHidden: false
    };
    component.onClickHide(value);
    expect(value.isHidden).toBeTrue();
    expect(saveLocalDataSpy).toHaveBeenCalledWith(value);
  });
  it('should retreive the data from storage on page refresh', () => {
    const feed = {
      objectID: 112345
    };
    component.getLocalData(feed);
    expect(getLocalDataSpy).toHaveBeenCalledWith(feed);
  });
});
