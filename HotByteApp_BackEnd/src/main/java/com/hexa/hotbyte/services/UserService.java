package com.hexa.hotbyte.services;

import java.util.List;
import java.util.Map;

import com.hexa.hotbyte.dto.UserDTO;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;

import jakarta.validation.Valid;

public interface UserService {
	
	
	public User findByUsername(String username) throws ResourceNotFoundException ;
	
	public UserDTO createUser(@Valid UserDTO user);
	

	public List<User> getUsers();
	
	  public void addToCart(int userId, Long menuItemId, int quantity);
	
	  public void removeFromCart(int userId, Long menuItemId, int quantity);
		 
	  public void placeOrder(int userId, Order order);

	  public User createUser1(User user);

	public Map<Long, Integer> getCart(Long userId);

	
	
}
