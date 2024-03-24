package com.hexa.hotbyte.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.dto.HotelDTO1;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.services.HotelService;
@Service
public class HotelServiceImpl implements HotelService {
	@Autowired
	HotelRepository hotelRepository;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public HotelDTO findByUsername(String username) {
		Hotel h=hotelRepository.findByUsername(username);
		HotelDTO hotel=modelMapper.map(h,HotelDTO.class);
		return hotel;
	}
	@Override
	public HotelDTO1 createHotel(HotelDTO1 hotel) {
        Hotel h1=modelMapper.map(hotel,Hotel.class);

		h1.setPassword(passwordEncoder.encode(hotel.getPassword()));
		 hotelRepository.save(h1);
		 HotelDTO1 h2=modelMapper.map(h1,HotelDTO1.class);
		 return h2;
	}
	@Override
	public List<HotelDTO> getallHotel() {
		
		return convertToDTOList(hotelRepository.findAll());
	}
	@Override
	public List<HotelDTO> getallHotelByName(String query) throws ResourceNotFoundException {
		List<HotelDTO> list=convertToDTOList(hotelRepository.searchHotelByName(query));
		if(list.isEmpty())
			throw new ResourceNotFoundException("Hotel",query, 400L);
		return list;
		
	}
	@Override
	public List<HotelDTO> getallHotelByCity(String query) throws ResourceNotFoundException {
		List<HotelDTO> list=convertToDTOList(hotelRepository.searchHotelByCity(query));
//		if(list.isEmpty())
//			throw new ResourceNotFoundException("Hotel",query, 400L);
		return list;
	}
	
	public List<HotelDTO> convertToDTOList(List<Hotel> yourEntityList) {
        return yourEntityList.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
	public HotelDTO convertToDTO(Hotel yourEntity) {
        return modelMapper.map(yourEntity, HotelDTO.class);
    }
	@Override
	public void deleteHotel(Long id) throws ResourceNotFoundException {
		Hotel hotel=hotelRepository.findById(id).get();
		if(hotel==null)
			throw new ResourceNotFoundException("Hotel","id", id);
		hotelRepository.deleteById(id);
		
	}
	@Override
	public Hotel createHotel1(Hotel hotel) {
		
		Hotel u1=new Hotel();
		hotel.setPassword(passwordEncoder.encode(hotel.getPassword()));
		return hotelRepository.save(hotel);
	}
	@Override
	public Hotel findById(Long id) {
		return hotelRepository.findById(id).get();
	}

}
