import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamituxShowcaseComponent } from './reclamitux-showcase/reclamitux-showcase.component';

import { NbCardModule, NbAccordionModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbCardModule, NbAccordionModule, NbSelectModule],
  declarations: [ReclamituxShowcaseComponent],
  exports: [ReclamituxShowcaseComponent, NbCardModule, NbAccordionModule, NbSelectModule]
})
export class ReclamituxModule {}
