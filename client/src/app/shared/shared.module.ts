import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [LoaderSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  entryComponents: [LoaderSpinnerComponent],
  providers: [SharedService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: [
        ]
    };
}
}
