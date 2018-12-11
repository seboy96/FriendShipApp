import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatInputModule, MatMenuModule } from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatMenuModule]
})
export class MaterialModule { }
