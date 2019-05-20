import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamituxShowcaseComponent } from './reclamitux-showcase/reclamitux-showcase.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReclamituxShowcaseComponent],
  exports: [ReclamituxShowcaseComponent]
})
export class ReclamituxModule {}
