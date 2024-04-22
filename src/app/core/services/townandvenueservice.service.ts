import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Town } from '../models/Town';
import { Venue } from '../models/Venue';
import { TownWithVenuesDTO } from '../models/TownWithVenuesDTO';
import { CompetitionWithVenueDTO } from '../models/CompetitionWithVenueDTO';


@Injectable({
  providedIn: 'root'
})
export class TownandvenueserviceService {

  private baseUrl = 'http://localhost:8085';  // Remplacez par votre URL de base si elle est différente

  constructor(private http: HttpClient) { }

  getAllTowns(): Observable<Town[]> {
    return this.http.get<Town[]>(`${this.baseUrl}/town/retrieve_all_towns`);
  }

  addTown(town: Town): Observable<Town> {
    return this.http.post<Town>(`${this.baseUrl}/town/add_town`, town);
  }

  updateTown(id: number, town: Town): Observable<Town> {
    return this.http.put<Town>(`${this.baseUrl}/town/update_town/${id}`, town);
  }

  getTownById(id: number): Observable<Town> {
    return this.http.get<Town>(`${this.baseUrl}/town/retrieve_town/${id}`);
  }

  removeTown(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/town/remove_town/${id}`, { responseType: 'text' });
  }

  getAllVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(`${this.baseUrl}/venue/retrieve_all_venues`);
  }

  getVenueById(id: number): Observable<Venue> {
    return this.http.get<Venue>(`${this.baseUrl}/venue/retrieve_venue/${id}`);
  }

  removeVenue(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/venue/remove_venue/${id}`, { responseType: 'text' });
  }

  getVenuesByTown(townId: number): Observable<Venue[]> {
    return this.http.get<Venue[]>(`${this.baseUrl}/venue/getVenuesByTown/${townId}`);
  }
  getAllTownsWithVenues(): Observable<TownWithVenuesDTO[]> {
    return this.http.get<TownWithVenuesDTO[]>(`${this.baseUrl}/town/townswithvenues`);
  }
  getCompetitionWithVenueById(id: number): Observable<CompetitionWithVenueDTO> {
    const url = `${this.baseUrl}/venue/${id}/competitionwithvenue`;
    return this.http.get<CompetitionWithVenueDTO>(url);
  }
}
