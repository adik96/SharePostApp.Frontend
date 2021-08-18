import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../../environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthenticationService } from './authentication/authentication.service';
import { PostService } from '../core/http/post.service';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

const modules: any[] = [
  MaterialModule,
  CommonModule,
  HttpClientModule,
  RouterModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: [ ...modules ],
  exports: [ ...modules ],
  providers: [
    AuthenticationService,
    PostService,
    MatSnackBar,
    Overlay,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpTokenInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiPrefixInterceptor,
        multi: true,
      },
    // { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

}