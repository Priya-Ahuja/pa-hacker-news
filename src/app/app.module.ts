import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsChartComponent } from './news-chart/news-chart.component';

import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    NewsChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
