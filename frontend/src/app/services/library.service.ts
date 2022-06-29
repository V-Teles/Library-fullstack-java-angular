import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  updateBook(id: number, book: Book){
    return this.httpClient.put(`${this.baseURLBook}/${id}`, book)
  }
}
