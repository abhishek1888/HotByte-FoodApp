package com.hexa.hotbyte.controller;

import java.util.List;
import java.util.Map;

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

import com.hexa.hotbyte.dto.OrderDTO;
import com.hexa.hotbyte.entity.MenuItem;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.services.MenuItemService;
import com.hexa.hotbyte.services.OrderService;
import com.hexa.hotbyte.services.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private MenuItemService menuItemService;

	@GetMapping("/{username}")
	public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws ResourceNotFoundException {
		User user = userService.findByUsername(username);
		return ResponseEntity.ok(user);
	}
	
	@PutMapping("/update-user")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User user1 = userService.createUser1(user);
		return ResponseEntity.ok(user1);
	}
	
	@PostMapping("/add-to-cart")
	public ResponseEntity<String> addToCart(@RequestParam int userId, Long menuItemId, int quantity) {
		userService.addToCart(userId, menuItemId, quantity);
		return ResponseEntity.ok("Added to cart successfully");
	}
	
	@PostMapping("/remove-from-cart")
	public ResponseEntity<String> removeFromCart(@RequestParam int userId, Long menuItemId, int quantity) {
		userService.removeFromCart(userId, menuItemId, quantity);
		return ResponseEntity.ok("Removed from cart succesfully");
	}
	
	@PostMapping("/create-order")
	public ResponseEntity<OrderDTO> placeOrder(@RequestBody OrderDTO order) {
		return ResponseEntity.ok().body(orderService.createOrder(order));
	}
	
	@GetMapping("/orders")
	public ResponseEntity<List<Order>> getOrder(@RequestParam Long userId) {
		return ResponseEntity.ok().body(orderService.getOrder(userId));
	}
	
	@GetMapping("/cart")
	public ResponseEntity<Map<Long, Integer>> getCart(@RequestParam Long userId)
	{
		return ResponseEntity.ok().body(userService.getCart(userId));
	}
	
	@GetMapping("/menu")
	public ResponseEntity<MenuItem> getMenuItemByID(@RequestParam Long id) {
		return ResponseEntity.ok().body(menuItemService.getMenuItemByID(id));
	}
	
}
