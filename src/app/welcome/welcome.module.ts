import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [WelcomeComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class WelcomeModule { }
