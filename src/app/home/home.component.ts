import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, CommonModule]
})
export class HomeComponent {
  searchType: string = 'superhero_id';
  searchValue: string = '';
  result: any;

  constructor(private apiService: ApiService) {}

  onSubmit() {

    if (this.searchType === 'superhero_id') {
      this.apiService.getSuperheroById(this.searchValue).subscribe(
        data => this.result = data,
        error => console.error('Error fetching superhero by ID:', error)
      );
    } else if (this.searchType === 'full_name') {
      this.apiService.getSuperheroByName(this.searchValue).subscribe(
        data => this.result = data,
        error => console.error('Error fetching superhero by name:', error)
      );
    }
  }
}
