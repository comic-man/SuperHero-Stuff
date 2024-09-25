import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '89e9bb2a28a8870a2b32ae61e214dc76';
  private baseUrl = `https://superheroapi.com/api/${this.apiKey}`;

  constructor(private http: HttpClient) {}

  // Fetch all details by superhero ID
  getSuperheroById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero powerstats by ID
  getSuperheroPowerstatsById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/powerstats`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero biography by ID
  getSuperheroBiographyById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/biography`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero appearance by ID
  getSuperheroAppearanceById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/appearance`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero work by ID
  getSuperheroWorkById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/work`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero connections by ID
  getSuperheroConnectionsById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/connections`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Fetch superhero image by ID
  getSuperheroImageById(superheroId: string): Observable<any> {
    const url = `${this.baseUrl}/${superheroId}/image`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Search superhero by name
  searchSuperheroByName(fullName: string): Observable<any> {
    const url = `${this.baseUrl}/search/${fullName}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data from API:', error);
    return throwError(`Error fetching data: ${error.message}`);
  }
}
