package com.hexa.hotbyte.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hexa.hotbyte.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	Admin findByUsername(String username);

}
