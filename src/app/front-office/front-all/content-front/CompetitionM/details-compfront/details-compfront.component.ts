import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competition } from 'src/app/core/models/Competition';
import { CompetitionService } from 'src/app/core/services/competition.service';

@Component({
  selector: 'app-details-compfront',
  templateUrl: './details-compfront.component.html',
  styleUrls: ['./details-compfront.component.css']
})
export class DetailsCompfrontComponent implements OnInit {
  competitionId!: number;
  competition!: Competition;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionService) { }

  ngOnInit(): void {
    // Récupérer l'ID de la compétition depuis les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.competitionId = +params['id']; // Convertir la chaîne en nombre
      // Charger les détails de la compétition
      this.loadCompetitionDetails(this.competitionId);
    });
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
}
