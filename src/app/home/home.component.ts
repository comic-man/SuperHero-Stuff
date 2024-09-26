import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FormsModule,
    NgIf,
    CommonModule
  ],
  standalone: true
})
export class HomeComponent {
  searchType: string = 'id';
  searchValue: string = '';
  result: any = null;
  powerstats: any = null;
  biography: any = null;
  appearance: any = null;

  constructor(private apiService: ApiService) {}

  // Fetch superhero by ID and get specific data based on user choice
  onSubmit() {
    if (this.searchType === 'id') {
      this.apiService.getSuperheroById(this.searchValue).subscribe(
        data => this.result = data,
        error => console.error('Error fetching superhero by ID:', error)
      );
    } else if (this.searchType === 'full_name') {
      this.apiService.getSuperheroByName(this.searchValue).subscribe(
          (data: any) => this.result = data,
          (error: any) => console.error('Error fetching superhero by name:', error)
      );
    }
  }

  // Fetch additional details (powerstats, biography, etc.)
  fetchAdditionalData(superheroId: string) {
    this.apiService.getSuperheroPowerstatsById(superheroId).subscribe(
      data => this.powerstats = data,
      error => console.error('Error fetching powerstats:', error)
    );

    this.apiService.getSuperheroBiographyById(superheroId).subscribe(
      data => this.biography = data,
      error => console.error('Error fetching biography:', error)
    );

    this.apiService.getSuperheroAppearanceById(superheroId).subscribe(
      data => this.appearance = data,
      error => console.error('Error fetching appearance:', error)
    );
    this.apiService.getSuperheroWorkById(superheroId).subscribe(
      data => this.appearance = data,
      error => console.error('Error fetching appearance:', error)
    );
    this.apiService.getSuperheroConnectionsById(superheroId).subscribe(
      data => this.appearance = data,
      error => console.error('Error fetching appearance:', error)
    );
    this.apiService.getSuperheroImageById(superheroId).subscribe(
      data => this.appearance = data,
      error => console.error('Error fetching appearance:', error)
    );
  }
}
