import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchComponent } from './switch.component';
import { UI_SWITCH_OPTIONS } from './switch.token';
import { UiSwitchModuleConfig } from './switch.config';

@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    SwitchComponent
  ]
})
export class SwitchModule {
  static forRoot(config: UiSwitchModuleConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: SwitchModule,
      providers: [
        {provide: UI_SWITCH_OPTIONS, useValue: config || {}}
      ]
    };
  }
}
