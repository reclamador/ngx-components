import { TestComponent } from './pages/test/test.component';
import { NgModule } from '@angular/core';

import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    children: [{
      path: 'test',
      component: TestComponent
    }]
  },
  { path: '', redirectTo: 'pages/test', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];


const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
