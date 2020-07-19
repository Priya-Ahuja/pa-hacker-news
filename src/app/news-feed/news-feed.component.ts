import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { VotesService } from '../votes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'] 
})
export class NewsFeedComponent implements OnInit {
  public allFeeds;
  public feedHeaders;
  public currentPage;
  public totalPages;


  constructor(public httpService: NewsDataService, public votesService: VotesService, private route: ActivatedRoute) {
    this.feedHeaders = [
    { label: 'Comments' },
    { label: 'Vote Count' },
    { label: 'UpVote' },
    { label: 'News Details' }];
  }

  // Initialise Data for Feeds

  private loadPage(page): void {
    const feedData = [];
    this.httpService.getAllFeeds(page).subscribe(data => {
      data.hits.forEach(ele => {
        feedData.push({
          author: ele.author,
          createdAt: ele.created_at,
          objectID: ele.objectID,
          numComments: ele.num_comments,
          title: ele.title,
          createdAtUrl: ele.url,
          upVote: !this.getLocalData(ele) ? 0 : this.getLocalData(ele).voteCount,
          isHidden: !this.getLocalData(ele) ? false : this.getLocalData(ele).isHidden
        });
      });
      this.currentPage = data.page;
      this.totalPages = data.nbPages;
      this.allFeeds = feedData;
    }, error => {
      console.log('Error while retreiving feeds on front page', error);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 0)); // Initialise the feeds with page 0
  }

  // On click of vote & hide, save the info in local storage
  onClickVote(value): void {
    value.upVote++;
    this.votesService.saveLocalData(value);
  }
  onClickHide(value): void {
    value.isHidden = true;
    this.votesService.saveLocalData(value);
  }

  getLocalData(ele): any {
    return this.votesService.getLocalData(ele);
  }
}
