package com.example.bookstore.repository;

import com.example.bookstore.Exception.SequenceException;

public interface SequenceDao {
	long getNextSequenceId(String key) throws SequenceException;
}
