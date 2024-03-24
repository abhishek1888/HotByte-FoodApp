package com.hexa.hotbyte.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.MenuItem;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.services.AdminService;
import com.hexa.hotbyte.services.HotelService;
import com.hexa.hotbyte.services.MenuItemService;
import com.hexa.hotbyte.services.UserService;


@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private HotelService hotelService;
	
	@Autowired
	private MenuItemService menuItemService;
	
	
	@Autowired
	private AdminService adminService;
	
	
	@GetMapping("/all-hotel")
	public ResponseEntity<List<HotelDTO>> getallHotel()
	{
		return ResponseEntity.ok().body(hotelService.getallHotel());
	}
	
	@GetMapping("/all-hotel/byname")
	public ResponseEntity<List<HotelDTO>> getallHotelByName(@RequestParam String query) throws ResourceNotFoundException
	{
		return ResponseEntity.ok().body(hotelService.getallHotelByName(query));
	}
	@GetMapping("/all-hotel/bycity")
	public ResponseEntity<List<HotelDTO>> getallHotelByCity(@RequestParam String query) throws ResourceNotFoundException
	{
		return ResponseEntity.ok().body(hotelService.getallHotelByCity(query));
	}
	@GetMapping("/hotel/isveg")
	public ResponseEntity<List<MenuItem>> getallMenuItemByIsVeg(@RequestParam Long hotelId,String query)
	{
		return ResponseEntity.ok().body(menuItemService.getallMenuItemByIsVeg(hotelId,query));
	}
	@GetMapping("/hotel/itemtype")
	public ResponseEntity<List<MenuItem>> getallMenuItemByItemType(@RequestParam Long hotelId,String query)
	{
		return ResponseEntity.ok().body(menuItemService.getallMenuItemByItemType(hotelId,query));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
		Hotel hotel = hotelService.findById(id);
		return ResponseEntity.ok(hotel);
	}
	@GetMapping("/menu/{hotelID}")
	public ResponseEntity<List<MenuItem>> fetchAllMenu(@PathVariable Long hotelID)
	{
		return ResponseEntity.ok().body(menuItemService.fetchAllMenu(hotelID));
	}
	/*@PostMapping("/xyz")
	public ResponseEntity<Void> xyz()
	{
		adminService.createAdmin();
		System.out.println("Admin created");
		return null;
	}*/
}
