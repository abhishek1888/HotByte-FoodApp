package com.hexa.hotbyte.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.hotbyte.dto.UserDTO;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.JwtRequest;
import com.hexa.hotbyte.entity.JwtResponse;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.repository.UserRepository;
import com.hexa.hotbyte.security.JwtHelper;
import com.hexa.hotbyte.serviceImpl.CustomUserDetailsService;
import com.hexa.hotbyte.services.HotelService;
import com.hexa.hotbyte.services.UserService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
	@Autowired
	private UserDetailsService userDetailsService;
//	@Autowired
//	CustomUserDetailsService customUserDetailsService;
	@Autowired
	private AuthenticationManager manager;
	@Autowired
	UserService userService;
	@Autowired
	HotelService hotelService;
	
	@Autowired
	private JwtHelper helper;
	@Autowired
	PasswordEncoder passwordEncoder;

	private Logger logger = LoggerFactory.getLogger(AuthController.class);

	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

		this.doAuthenticate(request.getUsername(),request.getPassword());

		// UserDetails userDetails =
		// userDetailsService.loadUserByUsername(request.getEmail());
		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
		String token = this.helper.generateToken(userDetails);

		JwtResponse response = new JwtResponse.Builder().setJwtToken(token).setUsername(userDetails.getUsername()).setRole(userDetails.getAuthorities().iterator().next())
				.build();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping("/register-user")
	public ResponseEntity<UserDTO> registerUser(@Valid @RequestBody UserDTO user) {
		return  ResponseEntity.ok().body(userService.createUser(user));
	}
	

	private void doAuthenticate(String username, String password) {

		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username,
				password);
		try {
			manager.authenticate(authentication);

		} catch (BadCredentialsException e) {
			throw new BadCredentialsException(" Invalid Username or Password  !!");
		}

	}

	@ExceptionHandler(BadCredentialsException.class)
	public String exceptionHandler() {
		return "Credentials Invalid !!";
	}
}
