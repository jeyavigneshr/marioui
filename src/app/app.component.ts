import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "./api.service";
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addFeedbackForm: FormGroup;
  constructor(private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.createForms();
  }

  createForms() {
    this.addFeedbackForm = this.formBuilder.group({
      'age': [null, [Validators.required]],
      'gender': [null, [Validators.required]],
      'original_enjoyment': [null, [Validators.required]],
      'original_difficulty': [null, [Validators.required]],
      'original_playability': [null, [Validators.required]],
      'generated_enjoyment': [null, [Validators.required]],
      'generated_difficulty': [null, [Validators.required]],
      'generated_playability': [null, [Validators.required]],
      'play_again': [null, [Validators.required]],
    });
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: data
    });
  }


  onClickAddFeedback(feedbackData) {
    this.apiService.addFeedback(feedbackData).subscribe(data => {
      this.openDialog(data);
    })
  }
}
