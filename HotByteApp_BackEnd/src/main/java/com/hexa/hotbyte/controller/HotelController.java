package com.hexa.hotbyte.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.dto.MenuItemDTO;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.MenuItem;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.services.HotelService;
import com.hexa.hotbyte.services.MenuItemService;
import com.hexa.hotbyte.services.OrderService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/hotel")
@CrossOrigin(origins = "http://localhost:5173")
public class HotelController {
	@Autowired
	private HotelService hotelService;
	@Autowired
	private OrderService orderService;
	@Autowired
	private MenuItemService menuItemService;

	@GetMapping("/{username}")
	public ResponseEntity<HotelDTO> getHotelByUsername(@PathVariable String username) {
		HotelDTO hotel = hotelService.findByUsername(username);
		return ResponseEntity.ok(hotel);
	}
	
	@PutMapping("/update-hotel")
	public ResponseEntity<Hotel> updateHotel(@RequestBody Hotel hotel) {
		Hotel hotel1 = hotelService.createHotel1(hotel);
		return ResponseEntity.ok(hotel1);
	}
	
	@PostMapping("/add-menuitem")
	public ResponseEntity<MenuItemDTO> createMenuItem(@Valid @RequestBody MenuItemDTO menuItem)
	{
		return ResponseEntity.ok().body(menuItemService.saveMenuItem(menuItem));
	}
	
	@GetMapping("/orders")
	public ResponseEntity<List<Order>> getOrder(@RequestParam Long hotelId) throws ResourceNotFoundException {
		return ResponseEntity.ok(orderService.getOrderHotel(hotelId));
	}
	
	@PutMapping("/orders/update")
	public ResponseEntity<Order> updateOrderStatus(@RequestParam int orderId, int statusId) {
		return ResponseEntity.ok(orderService.updateOrderStatus(orderId,statusId));
	}
	
	@GetMapping("/menu")
	public ResponseEntity<MenuItem> getMenuItemByID(@RequestParam Long id) {
		return ResponseEntity.ok().body(menuItemService.getMenuItemByID(id));
	}
	
	
}
