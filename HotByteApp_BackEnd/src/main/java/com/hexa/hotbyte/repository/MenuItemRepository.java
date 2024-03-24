package com.hexa.hotbyte.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.MenuItem;

import jakarta.transaction.Transactional;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem,Long>{
     
	@Query("SELECT m FROM MenuItem m WHERE m.hotelID=:hotelId AND m.isVeg=:query")
	List<MenuItem> searchIsVeg(Long hotelId, String query);
	
	@Query("SELECT m FROM MenuItem m WHERE m.hotelID=:hotelId AND m.menuItemType=:query")
	List<MenuItem> searchMenuType(Long hotelId, String query);
	
	@Modifying
	@Transactional
	@Query("INSERT INTO MenuItem (menuItemName, hotelID, menuItemImage, menuItemPrice, menuItemType, menuItemDescription, isVeg, menuItemRating) " +
	            "VALUES (:menuItemName, :hotelID, :menuItemImage, :menuItemPrice, :menuItemType, :menuItemDescription, :isVeg, :menuItemRating)")
	void saveMenuItem(@Param("menuItemName") String menuItemName,
	                  @Param("hotelID") int hotelID,
	                  @Param("menuItemImage") String menuItemImage,
	                  @Param("menuItemPrice") float menuItemPrice,
	                  @Param("menuItemType") String menuItemType,
	                  @Param("menuItemDescription") String menuItemDescription,
	                  @Param("isVeg") String isVeg,
	                  @Param("menuItemRating") int menuItemRating);

	
	List<MenuItem> findAllByHotelID(Long hotelID);




}
