import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbAccordionModule, NbSelectModule } from '@nebular/theme';

import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDirective } from './spinner/spinner.directive';

import { SwitchModule } from './switch/index';

export * from './spinner';
export * from './switch';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    SwitchModule,
    NbSelectModule
  ],
  declarations: [
    SpinnerComponent,
    SpinnerDirective
  ],
  exports: [
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
