package com.example.bookstore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.model.Bookdetails;
@Repository
public interface BookRepository extends MongoRepository<Bookdetails, Long> {

}
