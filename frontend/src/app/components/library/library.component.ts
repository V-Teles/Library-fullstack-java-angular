import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  book!: Book

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

}
