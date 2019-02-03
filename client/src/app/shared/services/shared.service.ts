import { Injectable, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';

@Injectable()
export class SharedService {

  constructor(private dialog: MatDialog) { }

  private spinner(isopen: boolean) {
    if (isopen) {
      this.dialog.open(LoaderSpinnerComponent, {
        disableClose: true
      });
    } else {
      this.dialog.closeAll();
    }
  }

  hideSpinner() {
    this.spinner(false);
  }

  showSpinner() {
    this.spinner(true);
  }

}
