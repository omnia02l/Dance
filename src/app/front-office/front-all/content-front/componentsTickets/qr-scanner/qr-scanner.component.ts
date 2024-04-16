import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('qrScanner') qrScannerElement!: ElementRef<HTMLDivElement>;
  private html5QrcodeScanner: Html5Qrcode | null = null;
  private isScanning: boolean = false;
  private hasErrorBeenShown: boolean = false;

  constructor(private snackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.html5QrcodeScanner = new Html5Qrcode(this.qrScannerElement.nativeElement.id);

    this.html5QrcodeScanner.start(
      { facingMode: "environment" }, 
      {
        fps: 10,
        qrbox: 250
      },
      (decodedText, decodedResult) => {
        // QR code detected successfully
        this.isScanning = false;
        this.hasErrorBeenShown = false;
        this.snackBar.open(`Code QR détecté : ${decodedText}`, 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
      },
      (errorMessage) => {
        // Only show the error if scanning is active and the error has not been shown
        if (this.isScanning && !this.hasErrorBeenShown) {
          this.hasErrorBeenShown = true;
          this.snackBar.open('Impossible de lire le code QR. Veuillez essayer à nouveau.', 'Fermer', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      })
      .catch((err) => {
        // Handle initialization errors
        this.isScanning = false;
        this.snackBar.open(`Erreur lors de l'initialisation du scanner: ${err}`, 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      });
    this.isScanning = true;
  }

  ngOnDestroy(): void {
    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.stop().then(() => {
        // Scanner stopped
        this.isScanning = false;
      }).catch((err) => {
        // Error stopping the scanner
        console.error(`Erreur lors de l'arrêt du scanner: ${err}`);
      });
    }
  }
}
