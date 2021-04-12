import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const modules: any[] = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [ ...modules ],
  exports: [ ...modules ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
