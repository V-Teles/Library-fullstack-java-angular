import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private httpClient: HttpClient) { }

  private baseURL: string = "http://localhost:8080/api/v1/library/"

  getLibrary(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`)
  }
}
