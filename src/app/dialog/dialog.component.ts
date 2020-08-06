import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import{Mario_dialog} from "./mario_dialog";

class DialogData {
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Mario_dialog) { }

  close(){
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
    console.log('This is the data ' + this.data.message);
  }

}
