package com.victor.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length=50)
    private String author;

    private String publisher;

    private int year;

    @Column(length=50)
    private String language;

    private int pages;

    private boolean availability;

    @Column(name = "date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_update")
    @UpdateTimestamp
    private Date lastUpdate;

    public Book(String title, String author, String publisher, int year, String language, int pages, boolean availability) {
        super();
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.language = language;
        this.pages = pages;
        this.availability = availability;
    }

}
