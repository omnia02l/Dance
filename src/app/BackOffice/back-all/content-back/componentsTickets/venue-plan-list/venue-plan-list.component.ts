import { Component, OnInit } from '@angular/core';
import { Row } from 'src/app/core/models/row.model';
import { VenuePlan } from 'src/app/core/models/venue-plan.model';
import { VenuePlanService } from 'src/app/core/services/venue-plan.service';

@Component({
  selector: 'app-venue-plan-list',
  templateUrl: './venue-plan-list.component.html',
  styleUrls: ['./venue-plan-list.component.css']
})
export class VenuePlanListComponent implements OnInit {
  newVenuePlan: VenuePlan = new VenuePlan();
  selectedRowLabel: string = '';
  numberOfSeatsInRow: number | null = null;
  rowLabels: string[] = ['A', 'B', 'C', 'D', 'E']; // Exemple de labels pour les rangées

  constructor(private venuePlanService: VenuePlanService) { }

  ngOnInit(): void {
    // Initialiser le newVenuePlan.seatStructure ici si nécessaire
    this.newVenuePlan.seatStructure = {};
  }

  addRow(): void {
    if (this.selectedRowLabel && this.numberOfSeatsInRow) {
      // Ajouter ou mettre à jour le nombre de sièges pour la rangée sélectionnée
      this.newVenuePlan.seatStructure![this.selectedRowLabel] = this.numberOfSeatsInRow;
      this.selectedRowLabel = ''; // Réinitialiser la sélection
      this.numberOfSeatsInRow = null; // Réinitialiser le nombre de sièges
    }
  }

  addVenuePlan(): void {
    if (this.isValidVenuePlan(this.newVenuePlan)) {
      this.venuePlanService.addVenuePlan(this.newVenuePlan).subscribe({
        next: (result) => {
          console.log('Plan de salle ajouté avec succès', result);
          this.resetForm();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du plan de salle', error);
        }
      });
    } else {
      // Gérer la validation ou afficher une erreur à l'utilisateur
      console.error('Le formulaire de plan de salle est invalide');
    }
  }

  isValidVenuePlan(venuePlan: VenuePlan): boolean {
    // Check if the seatStructure is defined or default to an empty object.
    const seatStructureKeys = Object.keys(venuePlan.seatStructure ?? {});
    // Check if totalSeats, length_S, width_S are defined and seatStructure has keys
    return !!venuePlan.totalSeats && 
           !!venuePlan.length_S && 
           !!venuePlan.width_S && 
           seatStructureKeys.length > 0;
  }
  

  resetForm(): void {
    // Réinitialiser le formulaire et toutes les propriétés liées au formulaire
    this.newVenuePlan = new VenuePlan();
    this.newVenuePlan.seatStructure = {};
    this.selectedRowLabel = '';
    this.numberOfSeatsInRow = null;
  }
}