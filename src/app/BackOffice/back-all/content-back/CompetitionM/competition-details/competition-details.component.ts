import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/core/models/Competition';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { GenderstatDTO } from 'src/app/core/models/GenderstatDTO';
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
  competitionId!: number;
  competition!: Competition;
  genderStats!: GenderstatDTO;
  chart: any;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.competitionId = +params['id'];
      this.loadCompetitionDetails(this.competitionId);
    });

    // Appel du service pour récupérer les statistiques de genre
    this.competitionService.GenderStatsForCompetition(this.competitionId).subscribe(
      genderStats => {
        // Utilisation des données récupérées pour créer la chart
        this.createGenderStatsChart(genderStats);
      },
      error => {
        console.log('Error fetching gender statistics:', error);
      }
    );
  }

  loadCompetitionDetails(competitionId: number) {
    this.competitionService.getCompetitionById(competitionId).subscribe(
      competition => {
        this.competition = competition;
      },
      error => {
        console.log('Error fetching competition details:', error);
      }
    );
  }

  createGenderStatsChart(genderStats: GenderstatDTO): void {
    const labels = ['Male', 'Female'];
    const counts = [genderStats.totalMaleDancers, genderStats.totalFemaleDancers];

    const chart = new Chart('genderStatsCanvas', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: counts,
          backgroundColor: [
            'rgba(117, 91, 238, 1)', // Darker shade of purple for male
            'rgba(255, 99, 132, 1)'   // Darker shade of red for female
          ],
          borderColor: 'white',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          datalabels: {
            color: '#ffffff',
            formatter: (value, ctx) => {
              const sum = counts.reduce((a, b) => a + b, 0);
              const percentage = ((value as number) * 100 / sum).toFixed(2) + "%";
              return percentage;
            },
            anchor: 'end',
            align: 'start',
            offset: 10,
          }
        }
      }
    });
  }


}
