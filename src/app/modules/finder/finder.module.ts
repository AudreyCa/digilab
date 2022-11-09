import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinderRoutingModule } from './finder-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FinderComponent } from 'src/app/components/finder/finder.component';


@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    FinderRoutingModule,
    SharedModule
  ]
})
export class FinderModule { }
