import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderSpinnerComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<LoaderSpinnerComponent>) {}


}
