import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';

//import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from '../material.module';
const modules: any[] = [
  MaterialModule,
  BrowserAnimationsModule,
  CommonModule,
  HttpClientModule,
  RouterModule
]
@NgModule({
  declarations: [],
  imports: [ ...modules ],
  exports: [ ...modules ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

}