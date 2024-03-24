package com.hexa.hotbyte.services;

import java.util.List;
import java.util.Map;

import com.hexa.hotbyte.dto.OrderDTO;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.exception.ResourceNotFoundException;

public interface OrderService {
public OrderDTO createOrder(OrderDTO order);

public List<Order> getOrder(Long userId);
  
public List<Order> getOrderHotel(Long hotelId) throws ResourceNotFoundException;

public Order updateOrderStatus(int orderId, int statusId);



}
