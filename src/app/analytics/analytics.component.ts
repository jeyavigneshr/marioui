import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  maleCount: any;
  femaleCount: any;
  genderData: any;
  constructor(private apiService: ApiService) { }

  getGenderBreakdown() {
    this.apiService.getGenderBreakdown().subscribe(data => {
      this.genderData = [{y: this.maleCount, label: "Male"}, {y: this.femaleCount, label: "Female"}];
    })
  }

  ngOnInit(): void {
    this.getGenderBreakdown();
  }

}
