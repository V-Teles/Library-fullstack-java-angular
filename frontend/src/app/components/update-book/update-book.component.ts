import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id!: number
  book: Book = new Book()

  constructor(private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id']
    this.libraryService.getBookById(this.id).subscribe({
      next: data => this.book = data,
      error: error => console.log(error)
    })
  }

  onSubmit(){
    this.libraryService.updateBook(this.id, this.book).subscribe({
      next: data => this.goToLibrary(),
      error: error => console.log(error)
    })
  }

  goToLibrary(){
    this.router.navigate(['library'])
  }

}
