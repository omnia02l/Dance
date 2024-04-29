import { Injectable } from '@angular/core';
import { Competition } from '../models/Competition';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderstatDTO } from '../models/GenderstatDTO';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private baseUrl = 'http://localhost:8085/competition';

  constructor(private http: HttpClient) { }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.baseUrl}/retrieve_all_comps`);
  }

  getCompetitionById(id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.baseUrl}/retrieve_comp/${id}`);
  }



  updateCompetition(id: number, competition: Competition): Observable<Competition> {
    return this.http.put<Competition>(`${this.baseUrl}/update_comp/${id}`, competition);
  }

  deleteCompetition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove_comp/${id}`);
  }
  addCompetitionWithCategoryAndStyle(competition: Competition, categoryId: number, styleId: number): Observable<Competition> {
    return this.http.post<Competition>(`${this.baseUrl}/addcompetition/${categoryId}/${styleId}`, competition);
  }
  updateCompetitionWithCategoryAndStyle(id: number, competition: Competition, categoryId: number, styleId: number): Observable<Competition> {
    // Construire l'URL avec les paramètres d'URL
    const url = `${this.baseUrl}/updatecomp/${id}/${categoryId}/${styleId}`;

    // Effectuer la requête PUT avec les données de la compétition
    return this.http.put<Competition>(url, competition);
  }
  GenderStatsForCompetition(competitionId: number): Observable<GenderstatDTO> {
    const url = `${this.baseUrl}/GenderStatsForCompetition/${competitionId}`;
    return this.http.put<GenderstatDTO>(url, {});
  }
}
