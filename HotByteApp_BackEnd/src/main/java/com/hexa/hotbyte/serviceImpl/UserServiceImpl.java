package com.hexa.hotbyte.serviceImpl;

import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.UserDTO;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.repository.MenuItemRepository;
import com.hexa.hotbyte.repository.UserRepository;
import com.hexa.hotbyte.services.UserService;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	MenuItemRepository menuItemRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public User findByUsername(String username) throws ResourceNotFoundException {
		User user=userRepository.findByUsername(username);
        if(user==null)
        	throw new ResourceNotFoundException("User",username,400L);
		return userRepository.findByUsername(username);
	}
	public UserDTO createUser(UserDTO user) {
//		User u1=new User();
//		u1.setUsername(user.getUsername());
//		u1.setRole(user.getRole());
		User u1=modelMapper.map(user, User.class);
		u1.setPassword(passwordEncoder.encode(user.getPassword()));
//		u1.setEmail(user.getEmail());
	    User saveduser=userRepository.save(u1);
	    return modelMapper.map(saveduser, UserDTO.class);
	}
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	@Override
	public void addToCart(int userId, Long menuItemId, int quantity) {
        User user = userRepository.findById((long) userId).get();
        user.addToCart(menuItemId, quantity);
        user.setCartTotal(user.getCartTotal()+quantity*menuItemRepository.findById(menuItemId).get().getMenuItemPrice());
        userRepository.save(user);
    }
	@Override
    public void removeFromCart(int userId, Long menuItemId, int quantity) {
        User user = userRepository.findById((long) userId).get();
        user.setCartTotal(user.getCartTotal()-quantity*menuItemRepository.findById(menuItemId).get().getMenuItemPrice());
        user.removeFromCart(menuItemId, quantity);
        userRepository.save(user);
    }
	@Override
    public void placeOrder(int userId, Order order) {
        User user = userRepository.findById((long) userId).get();
//        order.setUser(user);
//        user.getOrders().add(order);
        userRepository.save(user);
    }
	@Override
	public User createUser1(User user) {
		// TODO Auto-generated method stub
		//user.setPassword(passwordEncoder.encode(user.getPassword()));
		User user1=userRepository.findById((long) user.getUserId()).get();
		user.setPassword(user1.getPassword());
		return userRepository.save(user);
	}
	@Override
	public Map<Long, Integer> getCart(Long userId) {
		User user=userRepository.findById(userId).get();
		return user.getCart();
	}


}
