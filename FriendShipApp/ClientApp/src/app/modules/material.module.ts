import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatInputModule } from "@angular/material";
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatInputModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule]
})
export class MaterialModule { }
