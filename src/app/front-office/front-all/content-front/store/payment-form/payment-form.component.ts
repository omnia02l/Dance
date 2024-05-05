import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/core/services/payment.service';
import { ShopcartComponent } from '../shopcart/shopcart.component';
import { SharedstoreService } from 'src/app/core/services/sharedstore.service';
//declare const paypal: any;

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
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
amount = 5647;

@ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

constructor(private router: Router, private payment: PaymentService, private sharedService: SharedstoreService) { }

ngOnInit(): void {
 /* this.sharedService.totalCartPrice$.subscribe(price => {
    console.log('Total cart price:', price); // Log the total cart price

    this.amount = price;
  });*/
  paypal.Buttons(
    {
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.amount.toString(),
                currency_code: 'USD'
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log(details);
          console.log('Transaction completed by ' + details.payer.name.given_name);
          if(details.status==='COMPLETED'){
            this.payment.transactionID = details.id;
            this.router.navigate(['confirm']);
          }
          // Redirect to success page or handle success
        });
      },
      onError: (error: any) => {
        console.error('Transaction failed:', error);
        // Handle error
      }
    }
  ).render(this.paymentRef.nativeElement);
}

cancel() {
  this.router.navigate(['produits']);
}
}