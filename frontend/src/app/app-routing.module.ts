import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { LibraryComponent } from './components/library/library.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [
  {path: 'library', component: LibraryComponent},
  {path: 'create-book', component: CreateBookComponent},
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'update-book/:id', component: UpdateBookComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'search/:keyword', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
