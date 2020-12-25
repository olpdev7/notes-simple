import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { ForInMemoryInterceptor } from './for-in-memory-interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 250 }
    ),
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ForInMemoryInterceptor, multi: true }]
})
export class CoreModule { }
