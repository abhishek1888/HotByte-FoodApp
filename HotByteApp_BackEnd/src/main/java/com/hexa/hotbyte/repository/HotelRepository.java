package com.hexa.hotbyte.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexa.hotbyte.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel,Long> {
	Hotel findByUsername(String username);
	
	@Query("SELECT h FROM Hotel h WHERE h.hotelName LIKE CONCAT ('%',:query,'%')")
	List<Hotel> searchHotelByName(String query);
	@Query("SELECT h FROM Hotel h WHERE h.hotelAddress.city LIKE CONCAT ('%',:query,'%')")
	List<Hotel> searchHotelByCity(String query);
}
