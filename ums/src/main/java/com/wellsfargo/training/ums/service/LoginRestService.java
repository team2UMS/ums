package com.wellsfargo.training.ums.service;



import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.repository.UserRepository;

@Service
@Transactional
public class LoginRestService {
	
	@Autowired
	 private UserRepository userRepository;
	
	public User registerUser(User user) {
		
		return userRepository.save(user);
	}

	
	public Optional<User> loginUser(Long contactNumber) {
		
		return userRepository.findByContactNumber(contactNumber);
	}
	
}