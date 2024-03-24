package com.hexa.hotbyte.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.entity.Admin;
import com.hexa.hotbyte.entity.Role;
import com.hexa.hotbyte.repository.AdminRepository;
import com.hexa.hotbyte.services.AdminService;
@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AdminRepository adminRepository;
	@Override
	public Admin createAdmin() {
		Admin a1=new Admin();
		a1.setUsername("abhishek");
		a1.setEmail("abhinegi188@gmail.com");
		a1.setPassword(passwordEncoder.encode("abhishek"));
		Role role=new Role();
		role.setName("ADMIN");
		role.setRoleId(3L);
		a1.setRole(role);
		return adminRepository.save(a1);
	}

}
