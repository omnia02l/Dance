import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// Assuming PurchaseTransaction is already defined in your Angular app
import { PurchaseTransaction } from '../models/purchase-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseTransactionService {
  private baseUrl = 'http://localhost:8085/PurchaseTransaction'; // Update this with your actual backend URL

  constructor(private http: HttpClient) { }

  getAllPurchaseTransactions(): Observable<PurchaseTransaction[]> {
    return this.http.get<PurchaseTransaction[]>(`${this.baseUrl}/GetAllPurchaseTransaction`);
  }

  getPurchaseTransaction(id: number): Observable<PurchaseTransaction> {
    return this.http.get<PurchaseTransaction>(`${this.baseUrl}/GetAllPurchaseTransaction/${id}`);
  }

  addPurchaseTransaction(purchaseTransaction: PurchaseTransaction): Observable<PurchaseTransaction> {
    return this.http.post<PurchaseTransaction>(`${this.baseUrl}/AddPurchaseTransaction`, purchaseTransaction);
  }

  modifyPurchaseTransaction(purchaseTransaction: PurchaseTransaction): Observable<PurchaseTransaction> {
    return this.http.put<PurchaseTransaction>(`${this.baseUrl}/ModifyPurchaseTransaction`, purchaseTransaction);
  }

  deletePurchaseTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeletPurchaseTransaction/${id}`);
  }

  uploadPDF(file: File): Observable<string[]> { // Modifier le type de retour pour une liste
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string[]>(`${this.baseUrl}/upload`, formData);
  }
}
