package com.victor.backend.controller;

import com.victor.backend.exception.ResourceNotFoundException;
import com.victor.backend.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.victor.backend.repository.BookRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    // Get all books - Rest api
    @GetMapping("/library")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    // Get book by id - Rest api
    @GetMapping("/book/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Book with id "+id+" does not exit!"));
        return ResponseEntity.ok(book);
    }

    // Create a new book entry - Rest api
    @PostMapping("/book")
    public Book createBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    // Update a book entry - Rest api
    @PutMapping("/book/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookDetails){
        Book book = bookRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Book with id "+id+" does not exit!"));

        book.setAuthor(bookDetails.getAuthor());
        book.setLanguage(bookDetails.getLanguage());
        book.setPages(bookDetails.getPages());
        book.setPublisher(bookDetails.getPublisher());
        book.setYear(bookDetails.getYear());
        book.setTitle(bookDetails.getTitle());
        book.setAvailability(bookDetails.isAvailability());

        Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }

    // Delete a book entry - Rest api
    @DeleteMapping("/book/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Book with id "+id+" does not exit!"));
        bookRepository.delete(book);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }

}
