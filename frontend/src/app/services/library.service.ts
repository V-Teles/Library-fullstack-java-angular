import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private httpClient: HttpClient) { }

  private baseURL: string = "http://localhost:8080/api/v1/library"
  private baseURLBook: string = "http://localhost:8080/api/v1/book"

  getLibrary(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`)
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURLBook}/${id}`)
  }

  updateBook(id: number, book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURLBook}/${id}`, book)
  }

  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLBook}/${id}`)
  }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURLBook}`,book)
  }

  searchBooks(theKeyword: string): Observable<Book[]> {
    
    const searchUrl = `${this.baseURLBook}/search/findByTitleContaining?title=${theKeyword}`;

    return this.getBooks(searchUrl);
  }
  private getBooks(searchUrl: string): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.bookSearch)
    );
  }
}

interface GetResponseBooks{
  _embedded:{
    bookSearch: Book[];
  }
}