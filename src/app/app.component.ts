import { Component } from '@angular/core';
import { NewsDataService } from './news-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewsDataService]
})
export class AppComponent {
  title = 'hacker-news';
}
