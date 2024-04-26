import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PurchaseTransactionService } from 'src/app/core/services/purchase-transaction.service';

@Component({
  selector: 'app-file-upload-ticket-dialog',
  templateUrl: './file-upload-ticket-dialog.component.html',
  styleUrls: ['./file-upload-ticket-dialog.component.css']
})
export class FileUploadTicketDialogComponent {
  selectedFile: File | null = null;
  qrDataList: string[] = [];
  message: string = '';

  constructor(
    private qrCodeService: PurchaseTransactionService,
    private dialogRef: MatDialogRef<FileUploadTicketDialogComponent>,
    private router: Router
  ) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.qrCodeService.uploadPDF(this.selectedFile).subscribe({
        next: (response) => {
          this.qrDataList = response;
          this.dialogRef.close(); // Fermer la boîte de dialogue après réception des données
          // Afficher les informations extraites
          console.log("QR Data extracted:", this.qrDataList);
        },
        error: (error) => {
          console.error('Error during file upload:', error);
          this.message = 'Failed to upload file.';
          this.dialogRef.close(); // Fermer en cas d'erreur
        }
      });
    }
  }
}
