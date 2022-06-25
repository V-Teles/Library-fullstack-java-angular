package com.victor.backend.controller;

import com.victor.backend.exception.ResourceNotFoundException;
import com.victor.backend.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.victor.backend.repository.BookRepository;

import java.util.List;

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



}
