package com.hexa.hotbyte.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.MenuItemDTO;
import com.hexa.hotbyte.entity.MenuItem;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.repository.MenuItemRepository;
import com.hexa.hotbyte.services.MenuItemService;

import jakarta.transaction.Transactional;

@Service
public class MenuItemServiceImpl implements MenuItemService{
	@Autowired
	private MenuItemRepository menuItemRepository;
	@Autowired
	private HotelRepository hotelRepository;
	@Autowired
	private ModelMapper modelMapper;
	
	public MenuItemServiceImpl(MenuItemRepository menuItemRepository)
	{
		this.menuItemRepository=menuItemRepository;
	}
	@Override
	public MenuItemDTO saveMenuItem(MenuItemDTO menuItem) {
		MenuItem m=modelMapper.map(menuItem,MenuItem.class);
		menuItemRepository.saveMenuItem(menuItem.getMenuItemName(), menuItem.getHotelID(), menuItem.getMenuItemImage(),
                menuItem.getMenuItemPrice(), menuItem.getMenuItemType(), menuItem.getMenuItemDescription(),
                menuItem.getIsVeg(), menuItem.getMenuItemRating());

		MenuItemDTO d= menuItem;
		//return modelMapper.map(savedmenu,MenuItemDTO.class);
		return d;
	}
	
	
	@Override
	public List<MenuItem> getallMenuItemByIsVeg(Long hotelId, String query) {
		
		return menuItemRepository.searchIsVeg(hotelId,query);
	}
	@Override
	public List<MenuItem> getallMenuItemByItemType(Long hotelId, String query) {
		
		return menuItemRepository.searchMenuType(hotelId, query);
	}
	@Override
	public List<MenuItem> fetchAllMenu(Long hotelID) {
		
		return menuItemRepository.findAllByHotelID(hotelID);
	}
	@Override
	public MenuItem getMenuItemByID(Long id) {
		MenuItem menuitem=menuItemRepository.findById(id).get();
		return menuitem;
	}
    
	
}
