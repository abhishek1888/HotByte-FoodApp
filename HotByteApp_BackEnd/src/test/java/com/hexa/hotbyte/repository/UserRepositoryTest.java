package com.hexa.hotbyte.repository;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import com.hexa.hotbyte.entity.User;

import jakarta.transaction.Transactional;

@SpringBootTest
@Transactional
public class UserRepositoryTest {
	public final static Logger LOGGER=Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
     @Autowired 
     UserRepository userRepository;
     
     @Disabled
     @Test
     public void findByUsernameTest()
     {
    	 User user=userRepository.findByUsername("bob_jones");
    	LOGGER.log(Level.INFO, "User found"+user);
     }
     @Disabled
     @Test
     @Rollback(false)
     public void updateUserTest()
     {
    	 
    	 User user=userRepository.findByUsername("bob_jones");
    	 user.setUserContactNumber("9511972196");
    	 userRepository.save(user);
    	 LOGGER.log(Level.INFO, "User updated"+user);
     }
     
     @Disabled
     @Test
     public void findByIdTest()
     {
    	 User user=userRepository.findById(1L).get();
    	LOGGER.log(Level.INFO, "User found"+user);
     }
     
}
