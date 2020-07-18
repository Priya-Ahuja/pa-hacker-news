import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsChartComponent } from './news-chart/news-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    NewsChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
