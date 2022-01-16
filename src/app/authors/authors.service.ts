import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthor, IAuthors } from './authors-model';
import { getItems, setItem, deleteItem } from 'src/utils/localStorage';
const baseUrl = 'https://api.quotable.io/authors';



@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }
  getAuthors(limit:number,skip:number) {
    skip = limit*skip;
    const myUrlWithParams = new URL(baseUrl);
    myUrlWithParams.searchParams.append("limit", limit.toString());
    myUrlWithParams.searchParams.append("skip", skip.toString());

    return this.http.get<IAuthors>(myUrlWithParams.href);
  }

  setToFavorateAuthorsList(item:IAuthor) : IAuthor[] {
    return setItem(item);
  }
  deleteAutor (item:IAuthor) :IAuthor[] {
    return deleteItem(item);
  }
  getFavorateAuthorsList() : IAuthor [] {
    return getItems();
  }
}

