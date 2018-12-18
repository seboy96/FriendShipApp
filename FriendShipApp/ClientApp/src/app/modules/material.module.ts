import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule
}
  from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatIconModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatIconModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule]
})
export class MaterialModule { }
