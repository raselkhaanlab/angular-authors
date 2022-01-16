import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IAuthors,IAuthor } from './authors-model';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorsService) { }
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
    this.authorService.setToFavorateAuthorsList(item);
  };

  getAuthors():void {
    this.authorService.getAuthors(this.pageSize,this.pageIndex).subscribe((data:IAuthors)=>{
      this.length = data.totalCount;
      this.pageSize = data.count;
      this.pageIndex =  data.page - 1;
      let localStorageList = this.authorService.getFavorateAuthorsList();

      this.items = data.results.map((item:Omit<IAuthor,'isFavorate'>)=>{
        let find = localStorageList.find(element=>element.slug === item.slug);
        return {
          name:item.name,
          bio:item.bio,
          link:item.link,
          slug:item.slug,
          isFavorate:find?true:false
        }
      });
    })
  }
}
