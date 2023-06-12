package com.example.bookstore.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "BookDetails")
public class Bookdetails {

	@Id
	Long id;
	String bookname;
	String author;
	String details;	
	
	public Bookdetails() {
		super();
	}
	public Bookdetails(Long id, String bookname, String author, String details) {
		super();
		this.id = id;
		this.bookname = bookname;
		this.author = author;
		this.details=details;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	@Override
	public String toString() {
		return "bookdetails [id=" + id + ", bookname=" + bookname + ", author=" + author + ", details=" + details + "]";
	}
	
}
