import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/core/models/Place.model';
import { PlaceStatistics } from 'src/app/core/models/PlaceStatistics.model';
import { SeatNumbersByRow } from 'src/app/core/models/seat-numbers-by-row';
import { PlaceService } from 'src/app/core/services/place.service';

@Component({
  selector: 'app-seat-statistics',
  templateUrl: './seat-statistics.component.html',
  styleUrls: ['./seat-statistics.component.css']
})
export class SeatStatisticsComponent implements OnInit {
  seatNumbersByRow: { [key: string]: Place[] } = {};
  venuePlanId: number;
  placeStatistics: PlaceStatistics | null = null;
  placeStatusById: { [id: number]: string } = {};

  constructor(
    private placeService: PlaceService,
    private route1: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.venuePlanId = Number(this.route1.snapshot.paramMap.get('venuePlanId'));
  }

  ngOnInit(): void {
    this.loadPlaceStatistics(this.venuePlanId);
  }

  private loadPlaceStatistics(planId: number): void {
    this.placeService.getPlaceStatistics(planId).subscribe({
      next: (stats) => {
        this.placeStatistics = stats;
        this.createStatusMapping(stats);
        this.refreshSeatNumbers(planId); // Assurez-vous que cette fonction est appelée après le mapping.
      },
      error: (err) => console.error('Error loading place statistics:', err)
    });
  }

  private refreshSeatNumbers(planId: number): void {
    this.placeService.getSeatNumbersByRow(planId).subscribe({
      next: (seatData: any) => {
        this.transformSeatData(seatData);
        this.applyStatisticsToSeats();
        this.cdr.detectChanges(); // Force la détection de changement après la mise à jour
      },
      error: (error) => console.error('Error fetching seat numbers:', error)
    });
  }

  private createStatusMapping(stats: PlaceStatistics): void {
    stats.neverBooked.forEach(place => this.placeStatusById[place.idPlace!] = 'never-booked');
    stats.bookedOnce.forEach(place => this.placeStatusById[place.idPlace!] = 'booked-once');
    stats.bookedMoreThanOnce.forEach(place => this.placeStatusById[place.idPlace!] = 'booked-more-than-once');
  }

  private applyStatisticsToSeats(): void {
    Object.keys(this.seatNumbersByRow).forEach(row => {
      this.seatNumbersByRow[row].forEach(seat => {
        if (seat.idPlace && this.placeStatusById[seat.idPlace]) {
          seat.status = this.placeStatusById[seat.idPlace];
          console.log(`Seat ${seat.seatNumber} status: ${seat.status}`); // Log pour vérifier les statuts
        }
      });
    });
  }

  private transformSeatData(data: { [row: string]: Array<{ seatNumber: string, idPlace?: number }> }): void {
    const transformedData: SeatNumbersByRow = {};
    Object.entries(data).forEach(([row, seats]) => {
      transformedData[row] = seats.map(seat => ({ ...seat }));
    });
    this.seatNumbersByRow = transformedData;
  }

  trackByRow(index: number, item: any): any {
    return item.key;
  }

  trackBySeat(index: number, item: any): any {
    return item.idPlace;
  }
}