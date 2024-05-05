import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { Observable } from 'rxjs';
import { TicketCountByMonthDTO } from 'src/app/core/models/TicketCountByMonthDTO';
import { DancecategoryandstyleService } from 'src/app/core/services/dancecategoryandstyle.service';
import { TicketService } from 'src/app/core/services/ticket.service';


@Component({
  selector: 'app-statistique-dance-style-per-month',
  templateUrl: './statistique-dance-style-per-month.component.html',
  styleUrls: ['./statistique-dance-style-per-month.component.css']
})
export class StatistiqueDanceStylePerMonthComponent {
  public lineChartOptions: ChartOptions = {
   
  };
  public lineChartData: ChartDataset[] = [];
  selectedYear: number = new Date().getFullYear(); // Default to current year
  currentYear: number = new Date().getFullYear();
  lastYear: number = this.currentYear - 1;

  constructor(
    private ticketService: TicketService,
    
  ) {}

  ngOnInit(): void {
   
    this.loadYearlyTicketCounts(this.currentYear);
  }

  loadYearlyTicketCounts(year: number): void {
   
    this.ticketService.getAllStylesTicketCountsByYear(year).subscribe({
      next: (yearlyData) => {
        this.processYearlyData(yearlyData);
      },
      error: (error) => console.error('Error fetching yearly ticket data:', error)
    });
  }
  onSelectYear(year: number): void {
    this.selectedYear = year;
    this.loadYearlyTicketCounts(year);
  }
  processYearlyData(yearlyData: { [key: number]: { [styleName: string]: TicketCountByMonthDTO[] } }): void {
    this.lineChartData = [];
  
    const stylesData = yearlyData[this.selectedYear]; // Utilisez `selectedYear` qui sera mis à jour par `onSelectYear`
  
    if (stylesData) {
      Object.entries(stylesData).forEach(([styleName, monthlyData]) => {
        const dataPoints = monthlyData.map(dataPoint => dataPoint.ticketCount);
        const newDataset: ChartDataset<'line'> = {
          label: styleName,
          data: dataPoints,
          //... autres propriétés du dataset
        };
        this.lineChartData.push(newDataset);
      });
    }

    this.lineChartOptions = {
      // ... your other options
      scales: {
        x: {
          type: 'category', // If you're using strings like month names
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
        }
      }
    };
    
  }
  

    // You may need to trigger chart update manually depending on how Chart.js is set up
  }

 
