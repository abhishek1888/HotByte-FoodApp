package com.hexa.hotbyte.repository;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.User;

import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional
public class HotelRepositoryTest {
	public final static Logger LOGGER=Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	 @Autowired 
     HotelRepository hotelRepository;
	 @Disabled
	 @Test
     public void findByHotelIdTest()
     {
    	 Hotel hotel=hotelRepository.findById(1L).get();
    	LOGGER.log(Level.INFO, "Hotel found"+hotel.getHotelName());
     }
	 @Disabled
	 @Test
     public void findByHotelUsernameTest()
     {
    	 Hotel hotel=hotelRepository.findByUsername("ocean_view");
    	LOGGER.log(Level.INFO, "Hotel found"+hotel.getHotelName());
     }
	 
	 @Disabled
	 @Test
     @Rollback(false)
     public void updateHotelTest()
     {
    	 
    	 Hotel hotel=hotelRepository.findByUsername("ocean_view");
    	 hotel.setHotelContactNumber("+918906844756");
    	 hotelRepository.save(hotel);
    	 LOGGER.log(Level.INFO, "hotel updated");
     }
}
