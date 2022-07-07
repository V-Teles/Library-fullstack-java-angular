import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books!: Book[]
  searchMode!: boolean

  constructor(private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.books=[{"id":1,"title":"Les Miserables","author":"Victor Hugo","publisher":"Lacroix, Verboeckhoven & Co.","year":1862,"language":"French","pages":1900,"availability":true,"dateCreated":"2022-05-29T16:28:06.000+00:00","lastUpdate":"2022-05-29T16:28:06.000+00:00"},{"id":2,"title":"Os Lusíadas","author":"Luís de Camões","publisher":"Antonio Gocalvez","year":1572,"language":"portuguese","pages":380,"availability":true,"dateCreated":"2022-05-29T16:28:06.000+00:00","lastUpdate":"2022-05-29T16:28:06.000+00:00"},{"id":3,"title":"La Divina Commedia","author":"Dante Allighieri","publisher":"Johann Numeister and Evangelista Angelini ","year":1472,"language":"italian","pages":750,"availability":false,"dateCreated":"2022-05-29T16:28:06.000+00:00","lastUpdate":"2022-05-29T16:28:06.000+00:00"},{"id":31,"title":"Les Miserables","author":"Victor Hugo","publisher":"Lacroix, Verboeckhoven & Co.","year":1862,"language":"French","pages":1900,"availability":true,"dateCreated":"2022-06-25T19:12:32.000+00:00","lastUpdate":"2022-06-25T19:16:35.000+00:00"}]
    //this.getBooks()

    this.route.paramMap.subscribe(() => this.getBooks())
  
  }

  private getBooks(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword')

    if(this.searchMode){
      this.handleSearch();
    }
    else{
      this.handleLibraryCatalog();
    }
    //this.libraryService.getLibrary().subscribe(data => this.books=data)
  }
  handleSearch() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!

    this.libraryService.searchBooks(theKeyword).subscribe(data => this.books=data)
  }
  handleLibraryCatalog() {
    this.libraryService.getLibrary().subscribe(data => this.books=data)
  }

  updateBook(id: number){
    this.router.navigate(['update-book',id])
  }

  deleteBook(id: number){
    this.libraryService.deleteBook(id).subscribe(
      data =>{
        console.log(data)
        this.getBooks()
      }
    )
  }

  bookDetails(id: number){
    this.router.navigate(['book-details', id])
  }

}
