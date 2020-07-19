import { Component, OnInit, OnDestroy, EventEmitter, Output  } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { VotesService } from '../votes.service';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit, OnDestroy {
  public allFeeds;
  public feedHeaders;
  public currentPage;
  public totalPages; 
  constructor(public httpService: NewsDataService, public votesService: VotesService, private route: ActivatedRoute) {
    this.feedHeaders = [{ label: 'Comments' }, { label: 'Vote Count' }, { label: 'UpVote' }, { label: 'News Details' }];
  }



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
          upVote: !this.getVotes(ele) ? 0 : this.getVotes(ele).voteCount,
          isHidden: !this.getVotes(ele) ? false : this.getVotes(ele).isHidden
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
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 0));
  }

  ngOnDestroy(): void {
  }

  onClickVote(value): void {
    value.upVote++;
    this.votesService.saveVotes(value);
  }
  onClickHide(value): void {
    value.isHidden = true;
    this.votesService.saveVotes(value);
  }

  private getVotes(ele): any {
    return this.votesService.getVotes(ele);
  }
}
