import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "../api.service";
import {HomeComponent} from "../../home/home.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent
  ],
  providers: [ApiService]
})
export class ApiModule { }
