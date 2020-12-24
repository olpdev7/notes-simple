import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

export const materialResources = [MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialResources
  ],
  exports: [
    materialResources
  ]
})
export class MaterialHubModule { }
