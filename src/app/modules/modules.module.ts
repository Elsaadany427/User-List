import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, CoreModule],
})
export class PagesModule {}
