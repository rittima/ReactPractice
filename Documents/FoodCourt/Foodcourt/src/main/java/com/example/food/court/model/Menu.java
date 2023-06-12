package com.example.food.court.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Menu")
public class Menu {

	@Id
	private int id;
    String name;
    String description;
    String cost;
    
	public Menu(int id, String name, String description, String cost) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.cost = cost;
	}

	public Menu() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "Menu [id=" + id + ", name=" + name + ", description=" + description + ", cost=" + cost + "]";
	}
	
}
