package com.example.food.court.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.food.court.model.Menu;
import com.example.food.court.repository.MenuRepo;

@RestController
@RequestMapping("/menu")
public class MenuController {

	@Autowired
	private MenuRepo repo;
	
	@PostMapping("/add")
	public String addMenu(@RequestBody Menu dish) {
		repo.save(dish);
		return "Dish is added with id : " + dish.getId();
	}
	
	@GetMapping("/allDish")
	public List<Menu> getMenus(){
		return repo.findAll();
	}
	
	@GetMapping("/dish/{id}")
	public Optional<Menu> getMenu(@PathVariable Integer id){
		return repo.findById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteMenu(@PathVariable Integer id) {
		repo.deleteById(id);
		return "Menu deleted succesfully ! " +id;
	}
	
	
}
