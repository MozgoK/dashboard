import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { DesktopComponent } from './desktop/desktop.component';
import { SystemComponent } from './system.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    ClarityModule
  ],
  declarations: [
    SystemComponent,
    DesktopComponent
  ]
})
export class SystemModule {

}
