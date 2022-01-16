import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IAuthor } from '../authors-model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() { }
   @Input('item') item: IAuthor = {
     name:'',
     bio:'',
     link:'',
     slug:'',
     isFavorate:false
   };

   @Output('changeFavarite') changeFavarite = new EventEmitter<IAuthor>();

   handleChangeFavarite(value:IAuthor) {
    this.changeFavarite.emit(value);
   }

  ngOnInit(): void {
  }

}
