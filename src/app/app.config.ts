import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";


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


}

export class appConfig {
}
