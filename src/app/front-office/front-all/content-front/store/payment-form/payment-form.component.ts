import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  /*cardNumber: string;
  expirationDate: string;
  cvc: string;
  cardholderName: string;

  constructor(private paymentService: PaymentService) { }

  submitPayment(): void {
    const paymentDetails = {
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      cvc: this.cvc,
      cardholderName: this.cardholderName
    };

    // Call the payment service to process the payment
    this.paymentService.processPayment(paymentDetails).subscribe(
      (response) => {
        // Handle success response
        console.log('Payment successful:', response);
      },
      (error) => {
        // Handle error response
        console.error('Payment error:', error);
      }
    );
  }
*/
}
