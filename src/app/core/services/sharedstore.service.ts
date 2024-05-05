// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedstoreService {
  private totalCartPriceSubject = new BehaviorSubject<number>(0);
  totalCartPrice$ = this.totalCartPriceSubject.asObservable();

  updateTotalCartPrice(price: number) {
    this.totalCartPriceSubject.next(price);
  }
}
