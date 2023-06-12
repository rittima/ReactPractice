package com.example.bookstore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.Exception.SequenceException;
import com.example.bookstore.model.Bookdetails;
import com.example.bookstore.repository.BookRepository;

import com.example.bookstore.service.SequenceDaoImpl;



@RestController
@CrossOrigin(origins="*",methods = {
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.DELETE} )
@RequestMapping("/books")
public class BookController {

	@Autowired(required = false)
	private BookRepository repo;
	
	@Autowired
    private SequenceDaoImpl sequenceDao;
	
	@PostMapping("/add")
	public String addBook(@RequestBody Bookdetails book)throws SequenceException {
		long sequenceid = sequenceDao.getNextSequenceId("hosting");
    	System.out.println("*********" + sequenceid + "********");
    	book.setId(sequenceid);
		repo.save(book);
		return "book is added with id : "+book.getId();
	}
	
	@GetMapping("/getAll")
	public List<Bookdetails>getBookdetails(){
		return repo.findAll();
	}
	
	@GetMapping("/getById/{id}")
	public Optional<Bookdetails>getBookdetails(@PathVariable Long id) {
		return repo.findById(id);		
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id) {
		repo.deleteById(id);
		return "book is deleted with id : "+id;
	}
	
	
}
