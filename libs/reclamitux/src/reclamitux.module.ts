import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbAccordionModule, NbSelectModule, NbMenuModule, NbActionsModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';

import { SpinnerComponent } from './lib/spinner/spinner.component';
import { SpinnerDirective } from './lib/spinner/spinner.directive';

import { SwitchModule } from './lib/switch/index';
import { HeaderModule } from './lib/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    SwitchModule,
    NbSelectModule,
    HeaderModule,
    NbMenuModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule
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
