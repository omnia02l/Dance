// list-registtrations.component.ts
import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/core/models/Registration';
import { RegistrationService } from 'src/app/core/services/registration.service';

@Component({
  selector: 'app-list-registtrations',
  templateUrl: './list-registtrations.component.html',
  styleUrls: ['./list-registtrations.component.css']
})
export class ListRegisttrationsComponent implements OnInit {
  registrations: Registration[] = [];
  pendingRegistrationsCount: number = 0;


  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe(registrations => {
      this.registrations = registrations;
    });
    this.loadPendingRegistrationsCount();
  }

  deleteRegistration(registrationId: number | undefined): void {
    if (registrationId !== undefined) {
      if (confirm('Are you sure you want to delete this registration?')) {
        this.registrationService.deleteRegistration(registrationId).subscribe(() => {
          // Reload the registrations after deletion
          this.registrationService.getRegistrations().subscribe(updatedRegistrations => {
            this.registrations = updatedRegistrations;
          });
        });
      }
    }
  }
  loadPendingRegistrationsCount(): void {
    this.registrationService.countPendingRegistrations().subscribe(count => {
      this.pendingRegistrationsCount = count;
    });
  }
  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'Approved':
        return 'status-approved';
      case 'Pending':
        return 'status-pending';
      case 'Rejected':
        return 'status-rejected';
      default:
        return ''; // Retourne une chaîne vide pour les états non reconnus
    }
  }






}
