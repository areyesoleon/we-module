import {MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule, MatButtonModule ],
  exports: [MatIconModule, MatButtonModule ],
})
export class MaterialModule { }