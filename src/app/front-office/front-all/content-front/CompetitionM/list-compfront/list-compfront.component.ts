import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/core/models/Competition';
import { CompetitionService } from 'src/app/core/services/competition.service';

@Component({
  selector: 'app-list-compfront',
  templateUrl: './list-compfront.component.html',
  styleUrls: ['./list-compfront.component.css']
})
export class ListCompfrontComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(
    private competitionService: CompetitionService,
    private router: Router,
    private route: ActivatedRoute // Injection du service ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.competitionService.getAllCompetitions().subscribe(
      competitions => {
        this.competitions = competitions;
      },
      error => {
        console.log('Error fetching competitions:', error);
      }
    );
  }

  viewCompetitionDetails(competitionId?: number) {
    if (competitionId) {
      this.router.navigate(['/details-compfront', competitionId]);
    } else {
      console.error('Competition ID is undefined.');
    }
  }

  registerForCompetition(competitionId: number): void {
    // Redirection vers AddRegistrationComponent avec l'ID de la compétition dans l'URL
    this.router.navigate(['/add-registration', competitionId]);
  }
}
