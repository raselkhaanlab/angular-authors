import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IAuthor } from '../authors-model';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-favorate-authors',
  templateUrl: './favorate-authors.component.html',
  styleUrls: ['./favorate-authors.component.css']
})
export class FavorateAuthorsComponent implements OnInit {

  constructor(private authorService:AuthorsService) { }
  length:number = 0;
  pageSize:number = 10;
  pageIndex:number = 0;
  showFirstLastButtons:boolean = true;
  items:IAuthor[] = [];

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getAuthors();
  }
  ngOnInit(): void {
    this.getAuthors();
  }
  handleaddOrRemoveFromFavorateList (item:IAuthor,index:number) {
    this.items[index].isFavorate = !this.items[index].isFavorate;
    this.items = this.authorService.setToFavorateAuthorsList(item).reverse();
  };

  getAuthors():void {
      let localStorageList = this.authorService.getFavorateAuthorsList();
      this.length = localStorageList.length;
      
      this.items = localStorageList.reverse().slice(this.pageIndex*this.pageSize, (this.pageSize*this.pageIndex)+this.pageSize);
  }
}
