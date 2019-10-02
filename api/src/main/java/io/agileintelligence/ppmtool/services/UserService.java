package io.agileintelligence.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.agileintelligence.ppmtool.domain.User;
import io.agileintelligence.ppmtool.exceptions.UsernameAlreadyExistsException;
import io.agileintelligence.ppmtool.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User saveUser(User newUser) {
		try {
			// confirm password and confirm password
			// don't persist or show confirm password
			newUser.setUsername(newUser.getUsername());
			newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
			newUser.setConfirmPassword("");
			return userRepository.save(newUser);
		} catch (Exception ex) {
			throw new UsernameAlreadyExistsException("Username '" + newUser.getUsername() + "' already exists.");
		}
	}

}
