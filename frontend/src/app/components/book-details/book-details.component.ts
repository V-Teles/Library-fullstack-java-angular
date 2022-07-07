import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id!: number
  book!: Book

  constructor(private route: ActivatedRoute,
    private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

    this.book=new Book()
    this.libraryService.getBookById(this.id).subscribe(
      data => this.book=data
    )
  }

  returnToLibrary(){
    this.router.navigate(['library'])
  }

}
