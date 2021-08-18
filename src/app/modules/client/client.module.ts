import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { PostsComponent } from './post/posts/posts.component';
import { ClientRoutingModule } from './client-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatCardModule
  ]
})
export class ClientModule { }
