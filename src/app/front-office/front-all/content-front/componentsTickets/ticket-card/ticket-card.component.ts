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
  discountApplied: boolean = false;
  discountError: string = '';
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
  
    
    goBack(): void {
      this.router.navigate(['/Place']); // Use the navigate method with the path as an argument
    }
    openDiscountDialog(): void {
      const dialogRef = this.dialog.open(DiscountDialogComponent, {
        width: '300px',
        data: { userId: this.userId }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (result.discountApplied) {
            this.discountApplied = result.discountApplied;
            this.ticketCard = result.ticketCard;
            // Peut-être voulez-vous rafraîchir les détails ici
            this.refreshTicketCard();
          } else {
            this.discountError = result.discountError;
          }
        }
      });
    }
    goToPurchaseTransaction(): void {
      this.router.navigate(['/purchase-transaction']).then(success => {
        console.log('Navigation success:', success);
      }).catch(err => {
        console.error('Navigation error:', err);
      });
    }
        
}
  

