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
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Gender Stats',
          data: counts,
          backgroundColor: [
            'rgba(128, 0, 128, 0.7)', // Mauve foncé pour male
            'rgba(220, 180, 220, 0.7)'  // Lilas clair pour female
          ],
          borderColor: [
            'rgba(128, 0, 128, 1)', // Mauve foncé pour male
            'rgba(220, 180, 220, 1)'  // Lilas clair pour female
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: '#ffffff',
            formatter: (value, ctx) => {
              return value;
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
