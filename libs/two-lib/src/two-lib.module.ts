import { TwoLibButtonComponent } from './my-button/my-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbButtonModule } from "@nebular/theme";

@NgModule({
  imports: [CommonModule, NbButtonModule],
  declarations: [TwoLibButtonComponent],
  exports: [TwoLibButtonComponent]
})
export class TwoLibModule {}
