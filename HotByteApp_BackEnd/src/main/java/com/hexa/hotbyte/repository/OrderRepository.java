package com.hexa.hotbyte.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.User;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer>{
    
	List<Order> findAllByUserID(User userID);
	List<Order> findAllByHotelID(Hotel hotelID);
}
