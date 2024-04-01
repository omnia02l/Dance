import { Component, OnInit } from '@angular/core';
import { TicketCardService } from 'src/app/core/services/ticket-card.service';
import { Ticket } from 'src/app/core/models/ticket.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketCard } from 'src/app/core/models/ticket-card.model';
import { Price } from 'src/app/core/models/price.model';
import { TrancheAge } from 'src/app/core/models/tranche-age.model';
import { TicketService } from 'src/app/core/services/ticket.service';
import { AccountService } from 'src/app/core/services/account.service';
import { MatDialog } from '@angular/material/dialog';
import { DiscountDialogComponent } from '../discount-dialog/discount-dialog.component';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {
  price: Price;
  ticketCard: TicketCard | null = null;
  TrancheAge = TrancheAge;
  userId: number | null = null;
  discountCode: string = '';
  constructor(
    private route: ActivatedRoute,
    public ticketCardService: TicketCardService,
    public ticketService: TicketService,
    private accountService: AccountService,
    private router: Router,
    private dialog: MatDialog
    

  ) {this.price = new Price();}

  ngOnInit(): void {

    this.refreshTicketCard();
    this.getPrincipal();
    }
    getPrincipal() {
      this.accountService.getPrincipal().subscribe({
        next: (data) => {
          this.userId = data.id; 
          console.log(this.userId);
        },
        error: (err) => {
          console.error('Error fetching user details:', err);
        }
      });
    }

    getTicketCardDetails(userId: number): void {
      this.ticketCardService.getTicketCard(userId).subscribe({
        next: (ticketCard) => {
          this.ticketCard = ticketCard;
        },
        error: (error) => {
          console.error('Error fetching TicketCard', error);
        }
      });
    }
    refreshTicketCard(): void {
      const userId = +this.route.snapshot.params['userId'];
      if (userId) {
        this.getTicketCardDetails(userId);
      } else {
        console.error('No userId provided');
      }
    }
    changeAgeGroup(ticketId: number, trancheAge: TrancheAge) {
      const trancheAgeValue = TrancheAge[trancheAge];
      this.ticketService.updateTicketAgeGroup(ticketId, trancheAgeValue).subscribe(() => {
        this.refreshTicketCard(); 
        // Ou utilisez window.location.reload(); pour rafraîchir la page entière
      });
    }
  
  
    applyDiscount(): void {
      const userId = +this.route.snapshot.params['userId'];
      if (userId && this.discountCode) {
        this.ticketCardService.applyDiscountToMostRecentTicketCard(userId, this.discountCode).subscribe({
          next: (updatedTicketCard) => {
            this.ticketCard = updatedTicketCard;
            // Fetch the updated ticket card details
            this.getTicketCardDetails(userId);
            console.log(`Discount code '${this.discountCode}' applied successfully:`, updatedTicketCard);
          },
          error: (error) => {
            console.error(`Error applying discount code '${this.discountCode}':`, error);
          }
        });
      } else {
        console.error('UserId or DiscountCode is missing');
      }
    }
    
    goBack(): void {
      this.router.navigate(['/Place']); // Use the navigate method with the path as an argument
    }
    openDiscountDialog(): void {
      const dialogRef = this.dialog.open(DiscountDialogComponent, {
        width: '300px',
        data: { userId: this.userId } // Passer l'ID utilisateur si nécessaire
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The discount dialog was closed', result);
        // Actualiser les données du ticketCard ici si vous recevez une réponse
      });
    }
}
  


