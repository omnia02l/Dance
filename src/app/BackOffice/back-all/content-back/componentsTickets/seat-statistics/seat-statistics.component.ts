import { ChangeDetectorRef, Component } from '@angular/core';
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

export class SeatStatisticsComponent {
  seatNumbersByRow: { [key: string]: Place[] } = {};
  venuePlanId = Number(this.route1.snapshot.paramMap.get('venuePlanId'));
  placeStatistics: PlaceStatistics | null = null;

  constructor(private placeService: PlaceService,
    private route1: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
   
    
    this.route1.paramMap.subscribe(params => {
      const id = params.get('venuePlanId');
      if (id) {
        this.venuePlanId = Number(id);
        this.refreshSeatNumbers(this.venuePlanId);
    console.log(this.venuePlanId);
    this.refreshSeatNumbers(this.venuePlanId); // Start refreshing seat numbers for planId 1
      } else { 
        console.log(this.venuePlanId);
      }

  });
  }



  private refreshSeatNumbers(planId: number): void {
    this.placeService.getSeatNumbersByRow(planId).subscribe({
      next: (seatData: any) => {
        this.transformSeatData(seatData);
        // Après la transformation des données des sièges, récupérer les statistiques
        this.loadPlaceStatistics(planId);
      },
      error: (error) => console.error('Error fetching seat numbers:', error)
    });
  }
  private loadPlaceStatistics(planId: number): void {
    this.placeService.getPlaceStatistics(planId).subscribe({
      next: (stats) => {
        this.placeStatistics = stats;
        this.applyStatisticsToSeats();
      },
      error: (err) => console.error('Error loading place statistics:', err)
    });
  }
  private applyStatisticsToSeats(): void {
    if (this.placeStatistics) {
      for (let row in this.seatNumbersByRow) {
        this.seatNumbersByRow[row].forEach(seat => {
          if (this.placeStatistics!.neverBooked.some(p => p.seatNumber === seat.seatNumber)) {
            seat.status = 'never-booked';
          } else if (this.placeStatistics!.bookedOnce.some(p => p.seatNumber === seat.seatNumber)) {
            seat.status = 'booked-once';
          } else if (this.placeStatistics!.bookedMoreThanOnce.some(p => p.seatNumber === seat.seatNumber)) {
            seat.status = 'booked-more-than-once';
          }
        });
      }
    }
    this.cdr.detectChanges();
  }
      
    
  private transformSeatData(data: { [row: string]: Array<{ seatNumber: string, idPlace?: number }> }): void {
    const transformedData: SeatNumbersByRow = {};

// Assume data structure to be the same as provided by the backend:
// { [row: string]: Array<{ seatNumber: string, isSelected: boolean, isOccupied: boolean }> }
Object.entries(data).forEach(([row, seatInfos]: [string, Array<{ seatNumber: string }>]) => {
  transformedData[row] = seatInfos.map(seatInfo => ({
    
    seatNumber: seatInfo.seatNumber,
    row: row, 
  }));
});

this.seatNumbersByRow = transformedData;
this.cdr.detectChanges(); // If needed to trigger change detection
}

}

