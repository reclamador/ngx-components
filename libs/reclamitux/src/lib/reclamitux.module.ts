import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbAccordionModule, NbSelectModule, NbMenuModule, NbActionsModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';

import { ReclamituxShowcaseComponent } from './reclamitux-showcase/reclamitux-showcase.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerDirective } from './spinner/spinner.directive';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SwitchModule } from './switch/switch.module';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    SwitchModule,
    NbSelectModule,
    NbMenuModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule
  ],
  declarations: [
    ReclamituxShowcaseComponent,
    SpinnerComponent,
    MultiselectComponent,
    SpinnerDirective
  ],
  exports: [
    ReclamituxShowcaseComponent,
    NbCardModule,
    NbAccordionModule,
    NbSelectModule,
    SpinnerComponent,
    SpinnerDirective,
    MultiselectComponent
  ],
  entryComponents: [
    SpinnerComponent
  ]
})
export class ReclamituxModule {}
