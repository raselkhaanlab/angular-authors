import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { AuthorsService } from './authors.service';
import {MatIconModule} from '@angular/material/icon';
import { AuthorComponent } from './author/author.component';
import { FavorateAuthorsComponent } from './favorate-authors/favorate-authors.component'; 
@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorComponent,
    FavorateAuthorsComponent
  ],
  providers:[HttpClient,AuthorsService],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class AuthorsModule { }
