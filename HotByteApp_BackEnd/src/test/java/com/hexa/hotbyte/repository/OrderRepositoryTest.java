package com.hexa.hotbyte.repository;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexa.hotbyte.entity.Order;

import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional
public class OrderRepositoryTest {
	public final static Logger LOGGER=Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	@Autowired
	OrderRepository orderRepository;
	@Autowired 
    HotelRepository hotelRepository;
	@Autowired 
    UserRepository userRepository;
	
	@Disabled
	@Test
	public void orderByHotelID() {
		List<Order> list=orderRepository.findAllByHotelID(hotelRepository.findById(1L).get());
		for (Order order : list) {
			LOGGER.log(Level.INFO, "order "+order.getOrderID());
		}
		
	}
	
	@Test
	public void orderByUserID() {
		List<Order> list=orderRepository.findAllByUserID(userRepository.findById(1L).get());
		for (Order order : list) {
			LOGGER.log(Level.INFO, "order "+order.getOrderID());
		}
		
	}
	

}
