import { Injectable } from '@angular/core';
// Import http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  public allFeeds;
  private baseUrl = 'https://hn.algolia.com/api/v1/';

  constructor(private http: HttpClient) {
    console.log('news feed service is called');
  }

  public getAllFeeds(page): any {
    const frontPageFeeds = this.http.get(this.baseUrl + `search?tags=front_page&page=${page}`);
    return frontPageFeeds;
  }
}
