import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LibraryComponent } from './components/library/library.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { AvailablePipe } from './pipes/available.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    BookDetailsComponent,
    LibraryComponent,
    UpdateBookComponent,
    AvailablePipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
