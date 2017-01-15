import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {} from '@angular/material'

export class Cover{
  id:number;
  bookId:number;
  miniatureImage:string;
  fullSizeImage:string;
}

export class Author {
  id:number;
  name:string;
  surname:string;
}

export class Book {
  id:number;
  title:string;
  authors:Author[];
  isbn:string;
  cover:Cover;
}



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {

  book:Book={
  id:1,
  title:'Book title',
  authors:[],
  isbn:null,
  cover:null
  }

  constructor() { }

  ngOnInit() {
  }

}
