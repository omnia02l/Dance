import { Component, OnInit } from '@angular/core';
import { Row } from 'src/app/core/models/row.model';
import { VenuePlan } from 'src/app/core/models/venue-plan.model';
import { VenuePlanService } from 'src/app/core/services/venue-plan.service';
import { MatDialog } from '@angular/material/dialog';
import { VenuePlanDialogComponent } from '../venue-plan-dialog/venue-plan-dialog.component';
@Component({
  selector: 'app-venue-plan-list',
  templateUrl: './venue-plan-list.component.html',
  styleUrls: ['./venue-plan-list.component.css']
})
export class VenuePlanListComponent implements OnInit {
  venuePlans: VenuePlan[] = [];
  constructor(private venuePlanService: VenuePlanService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadVenuePlans();
  }
  loadVenuePlans(): void {
    this.venuePlanService.getAllVenuePlans().subscribe((data) => {
      this.venuePlans = data;
    });
  }
  deleteVenuePlan(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce plan de lieu ?')) {
      this.venuePlanService.deleteVenuePlan(id).subscribe({
        next: () => {
          this.venuePlans = this.venuePlans.filter(vp => vp.idPlan !== id);
        },
        error: err => {
          console.error('Erreur lors de la suppression du plan de lieu:', err);
        }
      });
    }
  }
  openVenuePlanDialog(venuePlan?: VenuePlan): void {
    const dialogRef = this.dialog.open(VenuePlanDialogComponent, {
      width: '500px',
      data: venuePlan ? venuePlan : new VenuePlan() // Passer le plan existant ou un nouveau plan
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Le dialogue a été fermé avec le résultat:', result);
        this.loadVenuePlans(); // Recharger les données après la mise à jour
      }
    });
  }
}