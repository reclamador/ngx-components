import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbAccordionModule, NbSelectModule } from '@nebular/theme';

import { ReclamituxShowcaseComponent } from './reclamitux-showcase/reclamitux-showcase.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDirective } from './spinner/spinner.directive';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    NbSelectModule
  ],
  declarations: [
    ReclamituxShowcaseComponent,
    SpinnerComponent,
    SpinnerDirective
  ],
  exports: [
    ReclamituxShowcaseComponent,
    NbCardModule,
    NbAccordionModule,
    NbSelectModule,
    SpinnerComponent,
    SpinnerDirective
  ],
  entryComponents: [
    SpinnerComponent
  ]
})
export class ReclamituxModule {}
