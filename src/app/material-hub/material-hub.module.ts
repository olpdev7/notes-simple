import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

export const materialResources = [
  MatToolbarModule,
  MatListModule,
  MatPaginatorModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
];

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
