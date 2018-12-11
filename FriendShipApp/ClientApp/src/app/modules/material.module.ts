import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule
}
  from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatIconModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule, MatIconModule]
})
export class MaterialModule { }
