import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Competition } from 'src/app/core/models/Competition';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendercomp',
  templateUrl: './calendercomp.component.html',
  styleUrls: ['./calendercomp.component.css']
})
export class CalendercompComponent implements OnInit {
  competitions: Competition[] = [];
  calendarOptions!: CalendarOptions;

  constructor(
    private competitionService: CompetitionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions() {
    this.competitionService.getAllCompetitions().subscribe(
      competitions => {
        this.competitions = competitions;
        this.prepareCalendarEvents();
      },
      error => {
        console.log('Error fetching competitions:', error);
      }
    );
  }

  prepareCalendarEvents() {
    const events = this.competitions.map(competition => ({
      id: competition.idcomp?.toString(),
      title: competition.compname,
      start: competition.startdate ? new Date(competition.startdate) : new Date(),
      end: competition.enddate ? new Date(competition.enddate) : new Date(),
      display: 'auto',
      color: '#cccccc', // Couleur de fond des événements (gris)
      extendedProps: {
        competitionId: competition.idcomp // Ajouter l'ID de la compétition aux propriétés étendues de l'événement
      }
    }));

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'

      },
      eventDisplay: 'block',
      eventBackgroundColor: 'rgba(255, 255, 255, 0.8)',
      eventBorderColor: 'rgb(0, 0, 0)',
      eventTextColor: 'rgb(0, 0, 0)',
      events: events,
      eventDidMount: this.eventStyle.bind(this),
      height: 'auto', // Ajuster la hauteur automatiquement en fonction du contenu

    };
  }

  eventStyle(info: any) {
    const event = info.event;
    const eventEl = info.el;
    const competitionId = event.extendedProps.competitionId;

    // Créer le conteneur pour les boutons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'event-buttons';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '5px'; // Ajouter un espace entre les boutons et le titre

    // Créer le bouton "Register"
    const registerButton = document.createElement('button');
    registerButton.textContent = 'Register';
    registerButton.className = 'register-button';
    registerButton.style.backgroundColor = '#FFFF99'; // Jaune
    registerButton.style.color = 'rgb(0, 0, 0)';
    registerButton.style.border = 'none';
    registerButton.style.padding = '5px 10px';
    registerButton.style.borderRadius = '5px';
    registerButton.style.cursor = 'pointer';
    registerButton.onclick = () => this.registerForCompetition(competitionId);

    // Créer le bouton "View Details"
    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'Details';
    detailsButton.className = 'details-button';
    detailsButton.style.backgroundColor = '#FFFF99'; // Jaune
    detailsButton.style.color ='rgb(0, 0, 0)';
    detailsButton.style.border = 'none';
    detailsButton.style.padding = '5px 10px';
    detailsButton.style.borderRadius = '5px';
    detailsButton.style.cursor = 'pointer';
    detailsButton.onclick = () => this.viewCompetitionDetails(competitionId);

    // Ajouter les boutons au conteneur
    buttonContainer.appendChild(registerButton);
    buttonContainer.appendChild(detailsButton);

    // Ajouter le conteneur de boutons à l'événement
    eventEl.appendChild(buttonContainer);

    // Appliquer le style au titre de l'événement
    const titleEl = eventEl.querySelector('.fc-title');
    if (titleEl) {
      titleEl.style.backgroundColor = '#FF6347'; // Couleur de fond différente pour le titre de l'événement
      titleEl.style.padding = '5px'; // Espacement intérieur
      titleEl.style.borderRadius = '5px'; // Rayon de bordure
      titleEl.style.color = '#fff'; // Couleur du texte
      titleEl.style.marginBottom = '5px'; // Ajouter un espace entre le titre et les boutons
    }
  }



  registerForCompetition(competitionId: number): void {
    // Redirection vers le composant AddRegistration avec l'ID de la compétition dans l'URL
    this.router.navigate(['/add-registration', competitionId]);
  }

  viewCompetitionDetails(competitionId: number): void {
    // Redirection vers le composant DetailsCompfront avec l'ID de la compétition dans l'URL
    this.router.navigate(['/details-compfront', competitionId]);
  }

  getEventColor(start: Date, end: Date) {
    if (start && end) {
      const startDate = new Date(start);
      const endDate = new Date(end);

      if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return '#FFD54F'; // Weekend color
      }
    }
    return '';
  }
}
