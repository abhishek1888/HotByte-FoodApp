package com.hexa.hotbyte.services;

import java.util.List;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.dto.HotelDTO1;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.exception.ResourceNotFoundException;

import jakarta.validation.Valid;

public interface HotelService {
	 HotelDTO findByUsername(String username);
	 
	 HotelDTO1 createHotel(@Valid HotelDTO1 hotel);
	 
	 List<HotelDTO> getallHotel();

	List<HotelDTO> getallHotelByName(String query) throws ResourceNotFoundException;

	List<HotelDTO> getallHotelByCity(String query) throws ResourceNotFoundException;

	void deleteHotel(Long id) throws ResourceNotFoundException;

	Hotel createHotel1(Hotel hotel);

	Hotel findById(Long id);
	 
	 
}
