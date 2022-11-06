package com.wellsfargo.training.ums.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ums.model.User;


public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByContactNumber(String contactNumber);
	
	/*
     * This interface has save(),findAll(),findById(),deleteById(),count()
       etc.. inbuilt methods of jpa repository for various database operations.
       This interface will be implemented by class automatically
    */	




}
