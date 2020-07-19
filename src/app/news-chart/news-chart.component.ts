import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-news-chart',
  templateUrl: './news-chart.component.html',
  styleUrls: ['./news-chart.component.css']
})
export class NewsChartComponent implements OnInit, OnChanges {
  @Input() newsfeedData: any;
  lineChartData: ChartDataSets[] = [{ data: [], label: 'TotalVotes' }];

  lineChartLabels: Label[] = [];
  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    // If newsFeed data receives the data, load the chart with correct information
    if (this.newsfeedData) {
      this.newsfeedData.forEach(element => {
        this.lineChartData[0].data.push(element.upVote);
        this.lineChartLabels.push(element.objectID);
      });
    }
  }
}
