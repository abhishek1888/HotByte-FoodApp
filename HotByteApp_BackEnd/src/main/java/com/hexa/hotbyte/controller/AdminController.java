package com.hexa.hotbyte.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.dto.HotelDTO1;
import com.hexa.hotbyte.dto.UserDTO;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.services.HotelService;
import com.hexa.hotbyte.services.UserService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {
   
	@Autowired
	private HotelService hotelService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register-hotel")
	public ResponseEntity<HotelDTO1> registerHotel(@Valid @RequestBody HotelDTO1 hotel) {
		return  ResponseEntity.ok().body(hotelService.createHotel(hotel));
	}
	
	@DeleteMapping("/hotel/delete")
	public ResponseEntity<Void> deleteHotel(@RequestParam Long id ) throws ResourceNotFoundException {
	    hotelService.deleteHotel(id);
		return null;
	}
	
	@GetMapping("/all-hotel")
	public ResponseEntity<List<HotelDTO>> getallHotel()
	{
		return ResponseEntity.ok().body(hotelService.getallHotel());
	}
	
	@GetMapping("/all-user")
	public ResponseEntity<List<User>> getUsers()
	{
		return ResponseEntity.ok().body(userService.getUsers());
	}
	
}
