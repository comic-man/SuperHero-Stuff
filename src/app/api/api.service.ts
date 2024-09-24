import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey = '89e9bb2a28a8870a2b32ae61e214dc76';
  private baseUrl = 'https://superheroapi.com/api';

  constructor(private http: HttpClient) { }

  // Fetch superhero by ID
  getSuperheroById(superheroId: string): Observable<any> {
    if (!superheroId) {
      return throwError('Superhero ID is required');
    }

    const url = `${this.baseUrl}/${this.apiKey}/${superheroId}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch superhero by name
  getSuperheroByName(fullName: string): Observable<any> {
    if (!fullName) {
      return throwError('Superhero name is required');
    }

    const url = `${this.baseUrl}/${this.apiKey}/search/${fullName}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Search for character by name and return character IDs
  searchByName(name: string): Observable<string[]> {
    if (!name) {
      return throwError('Name parameter is required');
    }

    const url = `${this.baseUrl}/${this.apiKey}/search/${name}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError),
      map((response: { results: any[]; }) => response.results.map((character: any) => character.id))
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    console.error('API request failed:', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      return throwError('A network error occurred.');
    } else {
      // Server-side error
      return throwError(`API request failed with status ${error.status}: ${error.message}`);
    }
  }
}
