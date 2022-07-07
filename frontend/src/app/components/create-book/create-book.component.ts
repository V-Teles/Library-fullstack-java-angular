import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book()

  constructor(private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBook(){
    this.libraryService.createBook(this.book).subscribe({
      next: data => {
        console.log(data)
        this.goToLibrary()
      },
      error: error => console.log(error)
    })
  }
  
  goToLibrary(){
    this.router.navigate(['library'])
  }

  onSubmit(){
    console.log(this.book)
    this.saveBook()
  }
}
