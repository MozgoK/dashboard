import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { DesktopComponent } from './desktop/desktop.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'desktop', component: DesktopComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
