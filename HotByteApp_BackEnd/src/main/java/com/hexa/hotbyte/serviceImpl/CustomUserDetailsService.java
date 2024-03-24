package com.hexa.hotbyte.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.hexa.hotbyte.entity.Admin;
import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.User;
import com.hexa.hotbyte.repository.AdminRepository;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.repository.UserRepository;
@Component
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private HotelRepository hotelRepository;
     
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		Hotel hotel = hotelRepository.findByUsername(username);
        Admin admin= adminRepository.findByUsername(username);
		if (user != null) {
			return user;
		} else if (hotel != null) {
			return hotel;
		} else if(admin!= null)
		{
			return admin;
		}
		else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

}
