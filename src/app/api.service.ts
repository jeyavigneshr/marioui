import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Feedback} from "./Feedback";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addFeedback(feedbackData: Feedback) {
    return this.http.post(environment.API_URL + environment.ADD_FEEDBACK, {
      age: feedbackData.age,
      gender: feedbackData.gender,
      original_enjoyment: feedbackData.original_enjoyment,
      original_difficulty: feedbackData.original_difficulty,
      original_playability: feedbackData.original_playability,
      generated_enjoyment: feedbackData.generated_enjoyment,
      generated_difficulty: feedbackData.generated_difficulty,
      generated_playability: feedbackData.generated_playability,
      play_again: feedbackData.play_again
    });
  }

  getFeedbackData() {
    return this.http.get(environment.API_URL + environment.GET_FEEDBACK_DATA);
  }

  getGenderBreakdown() {
    return this.http.get(environment.API_URL + environment.GET_GENDER_BREAKDOWN);
  }
}
