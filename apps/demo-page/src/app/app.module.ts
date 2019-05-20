import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReclamituxModule } from './../../../../libs/reclamitux/src/lib/reclamitux.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReclamituxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
