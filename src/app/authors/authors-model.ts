

export interface IAuthors {
    count:number,
    totalCount:number,
    page:number,
    totalPages:number,
    lastItemIndex:number,
    results: IAuthor[]
  }
  export interface IAuthor {
    name:string,
    bio:string,
    link:string,
    slug:string,
    isFavorate:boolean
  }