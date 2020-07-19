import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  constructor() { }

  public saveVotes(feedObj): void {
    localStorage.setItem(`${feedObj.objectID}`, JSON.stringify({ voteCount: feedObj.upVote, isHidden: feedObj.isHidden }));
  }

  public getVotes(feedObj): any {
    const count = JSON.parse(localStorage.getItem(`${feedObj.objectID}`));
    return count;
  }
}
