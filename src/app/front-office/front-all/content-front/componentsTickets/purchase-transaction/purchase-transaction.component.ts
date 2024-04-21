import { Component, OnInit } from '@angular/core';
import { TicketCard } from 'src/app/core/models/ticket-card.model';
import { AccountService } from 'src/app/core/services/account.service';
import { TicketCardService } from 'src/app/core/services/ticket-card.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-purchase-transaction',
  templateUrl: './purchase-transaction.component.html',
  styleUrls: ['./purchase-transaction.component.css']
})
export class PurchaseTransactionComponent implements OnInit {
  ticketCardDetails: TicketCard | null = null;
  userId: number | null = null;
  userName: string | null = null; 

  constructor(
    private ticketCardService: TicketCardService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getPrincipal();  // Récupérer l'ID utilisateur dès l'initialisation du composant
  }

  getPrincipal(): void {
    this.accountService.getPrincipal().subscribe({
      next: (data) => {
        this.userId = data.id;
        this.userName = data.firsName; 
        this.loadTicketCardDetails(this.userId);
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }

  private loadTicketCardDetails(userId: number): void {
    this.ticketCardService.getLastTicketCardDetails(userId).subscribe({
      next: (data) => {
        this.ticketCardDetails = data;
      },
      error: (err) => {
        console.error('Failed to fetch ticket card details', err);
      }
    });
  }


  downloadAsPDF() {
    const data = document.getElementById('downloadableContent');
    if (data) {  // Check if the element is not null
      html2canvas(data).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('ticket-card-details.pdf');
      }).catch(error => {
        console.error('Failed to generate PDF', error);
      });
    } else {
      console.error('Element not found');
    }
  }
}

