package com.hexa.hotbyte;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HotByteApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotByteApplication.class, args);
	}
	@Bean
	  public ModelMapper modelMapper() {
	    return new ModelMapper();
	  }
}
