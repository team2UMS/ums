package com.wellsfargo.training.ums.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.training.ums.model.User;


public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByContactNumber(String contactNumber);
	

}
