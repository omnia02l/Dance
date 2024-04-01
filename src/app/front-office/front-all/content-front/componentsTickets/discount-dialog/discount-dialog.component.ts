import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketCardService } from 'src/app/core/services/ticket-card.service';

@Component({
  selector: 'app-discount-dialog',
  templateUrl: './discount-dialog.component.html',
  styleUrls: ['./discount-dialog.component.css']
})
export class DiscountDialogComponent {
  discountCode: string = '';

  constructor(
    public dialogRef: MatDialogRef<DiscountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Si nécessaire
    private ticketCardService: TicketCardService
  ) {}

  applyDiscount(): void {
    if (this.discountCode) {
      // Logique pour appliquer le rabais, peut-être besoin de userID ou de ticketCard ID
      this.ticketCardService.applyDiscountToMostRecentTicketCard(this.data.userId, this.discountCode).subscribe({
        next: (response) => {
          this.dialogRef.close(response); // Ferme le dialogue et passe la réponse
        },
        error: (error) => {
          console.error('Error applying discount:', error);
          this.dialogRef.close(); // Ferme le dialogue même en cas d'erreur
        }
      });
    }
  }
}