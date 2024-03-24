package com.hexa.hotbyte.services;

import java.util.List;

import com.hexa.hotbyte.dto.MenuItemDTO;
import com.hexa.hotbyte.entity.MenuItem;

import jakarta.validation.Valid;

public interface MenuItemService {
    public MenuItemDTO saveMenuItem(@Valid MenuItemDTO menuItem);

	public List<MenuItem> getallMenuItemByIsVeg(Long hotelId, String query);

	public List<MenuItem>  getallMenuItemByItemType(Long hotelId, String query);

	public List<MenuItem> fetchAllMenu(Long hotelID);

	public MenuItem getMenuItemByID(Long id);

	
      
      
}
