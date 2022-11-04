package com.wellsfargo.training.ums.service;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.training.ums.model.User;
import com.wellsfargo.training.ums.repository.UserRepository;

@Service
@Transactional
public class LoginService {

	@Autowired
	private UserRepository userRepository;
	
	public void saveUser(User user) {
		userRepository.save(user); //Invokes predefined save() method of JPA Repository
	}
	
	
}
