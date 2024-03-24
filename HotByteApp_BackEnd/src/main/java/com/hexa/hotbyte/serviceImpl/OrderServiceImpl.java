package com.hexa.hotbyte.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.OrderDTO;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.repository.OrderRepository;
import com.hexa.hotbyte.repository.UserRepository;
import com.hexa.hotbyte.services.OrderService;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	OrderRepository orderRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	HotelRepository hotelRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public OrderDTO createOrder(OrderDTO o1) {
		Order order=modelMapper.map(o1, Order.class);
		long userID=order.getUserID().getUserId();
		User user=userRepository.findById(userID).get();
		Hotel h1=hotelRepository.findById(order.getHotelID().getHotelId()).get();
		order.setUserID(user);
		order.setHotelID(h1);
		order.setAmount((float)user.getCartTotal());
		Map<Long, Integer> cart1 = new HashMap<>(user.getCart());
		user.getCart().clear();
		order.setOrderItems(cart1);
		user.setCartTotal(0);
		userRepository.save(user);
		Order savedorder=orderRepository.save(order);
		OrderDTO savedDTO=modelMapper.map(savedorder, OrderDTO.class);
		return savedDTO;
	}
	
	@Override
	public List<Order> getOrder(Long userId) {
		User user=userRepository.findById(userId).get();
		return orderRepository.findAllByUserID(user);
	}

	@Override
	public List<Order> getOrderHotel(Long hotelId) throws ResourceNotFoundException {
		Hotel hotel=hotelRepository.findById(hotelId).get();
		List<Order> list=orderRepository.findAllByHotelID(hotel);
		if(list.isEmpty())
			throw new ResourceNotFoundException("Order","hotelID", hotelId);
		return list;
	}

	@Override
	public Order updateOrderStatus(int orderId, int statusId) {
		Order order=orderRepository.findById(orderId).get();
		order.setOrderStatusID(statusId);
		return  orderRepository.save(order);
	}


	
	

}


