import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {ResultService} from "../../../../../core/services/result.service";



@Component({
  selector: 'app-like-dislike-chart',
  templateUrl: './like-dislike-stat.component.html',
  styleUrls: ['./like-dislike-stat.component.css']
})
export class LikeDislikeChartComponent implements OnInit {
  @Input() resultId: number = 0;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1 // This will force the step size to be 1, thus showing only whole numbers
        }
      }]
    }
  };

  public barChartLabels: Label[] = ['Likes and Dislikes'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    if (this.resultId > 0) {
      this.resultService.getLikesAndDislikesById(this.resultId).subscribe(data => {
        if (data && typeof data.totalLikes === 'number' && typeof data.totalDislikes === 'number') {
          this.barChartData = [
            { data: [data.totalLikes], label: 'Likes' },
            { data: [data.totalDislikes], label: 'Dislikes' }
          ];
        } else {
          console.error('Data for likes and dislikes is undefined or incorrect structure.');
        }
      }, error => {
        console.error('Error fetching likes and dislikes data:', error);
      });
    } else {
      console.error('Invalid resultId:', this.resultId);
    }
  }



}
