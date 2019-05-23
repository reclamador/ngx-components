import { HeaderComponent } from './header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbActionsModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbMenuModule.forRoot()
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    HeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class HeaderModule { }
