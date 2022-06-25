package com.victor.backend;

import com.victor.backend.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.victor.backend.repository.BookRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

//    @Autowired
//    private BookRepository bookRepository;

    @Override
    public void run(String... args) throws Exception {
//        Book book1 = new Book("Les Miserables",
//                "Victor Hugo",
//                "Lacroix, Verboeckhoven & Co.",
//                1862,
//                "French",
//                1900,
//                true);
//        bookRepository.save(book1);
//
//        Book book2 = new Book("Os Lusíadas",
//                "Luís de Camões",
//                "Antonio Gocalvez",
//                1572,
//                "portuguese",
//                380,
//                true);
//        bookRepository.save(book2);
//
//        Book book3 = new Book("La Divina Commedia",
//                "Dante Allighieri",
//                "Johann Numeister and Evangelista Angelini ",
//                1472,
//                "italian",
//                750,
//                false);
//        bookRepository.save(book3);

    }
}
