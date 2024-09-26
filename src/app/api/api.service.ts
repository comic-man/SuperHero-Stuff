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
  getSuperheroByName(searchValue: string): Observable<any> {
    const url = `${this.baseUrl}/search/${searchValue}`;
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
// Function to handle null values in JavaScript
function handleNull(value: string | null, defaultValue = '') {
  // Return the default value if the value is null or 'null'
  return value === null || value === 'null' ? defaultValue : value;
}

// Function to process superhero data
function processSuperheroData(data: { powerstats: any; biography: any; appearance: any; work: any; connections: any; image: any; }) {
  // Return processed superhero data with null values handled
  return {
    ...data,  // Spread the original data
    powerstats: {
      intelligence: handleNull(data.powerstats?.intelligence, 'Not enough information at this time.'),
      strength: handleNull(data.powerstats?.strength, 'Not enough information at this time.'),
      speed: handleNull(data.powerstats?.speed, 'Not enough information at this time.'),
      durability: handleNull(data.powerstats?.durability, 'Not enough information at this time.'),
      power: handleNull(data.powerstats?.power, 'Not enough information at this time.'),
      combat: handleNull(data.powerstats?.combat, 'Not enough information at this time.')
    },
    biography: {
      ...data.biography,
      'full-name': handleNull(data.biography?.['full-name']),
      'place-of-birth': handleNull(data.biography?.['place-of-birth']),
      'first-appearance': handleNull(data.biography?.['first-appearance'])
    },
    appearance: {
      ...data.appearance,
      race: handleNull(data.appearance?.race)
    },
    work: {
      ...data.work,
      occupation: handleNull(data.work?.occupation)
    },
    connections: {
      ...data.connections,
      'group-affiliation': handleNull(data.connections?.['group-affiliation']),
      relatives: handleNull(data.connections?.relatives)
    },
    image: {
      ...data.image,
      url: handleNull(data.image?.url)
    }
  };
}

// Example usage (replace this with your actual data-fetching logic)
const superheroData = {
  powerstats: {
    intelligence: 100,
    strength: null,
    speed: 85,
    durability: 'null',
    power: 95,
    combat: null
  },
  biography: {
    'full-name': 'Clark Kent',
    'place-of-birth': 'Krypton',
    'first-appearance': null
  },
  appearance: {
    race: 'Kryptonian'
  },
  work: {
    occupation: 'Reporter'
  },
  connections: {
    'group-affiliation': 'Justice League',
    relatives: null
  },
  image: {
    url: 'https://example.com/superhero.jpg'
  }
};

// Process the superhero data
const processedData = processSuperheroData(superheroData);

// Output the processed data (for example purposes)
console.log(processedData);

// Export the function for use in other scripts
export { processSuperheroData };



