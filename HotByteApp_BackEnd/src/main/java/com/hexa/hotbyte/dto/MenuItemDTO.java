package com.hexa.hotbyte.dto;

import java.util.ArrayList;
import java.util.List;

import com.hexa.hotbyte.entity.Hotel;



public class MenuItemDTO {
	//private int menuItemID;
	private String menuItemName;
	private int hotelID;
	private String menuItemImage;
	private float menuItemPrice;
	private String menuItemType;
	private String menuItemDescription;
	private String isVeg;
	private int menuItemRating;
	public MenuItemDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MenuItemDTO( String menuItemName, int hotelID, String menuItemImage,
			float menuItemPrice, String menuItemType, String menuItemDescription, String isVeg, int menuItemRating) {
		super();
		//this.menuItemID = menuItemID;
		this.menuItemName = menuItemName;
		this.hotelID = hotelID;
		this.menuItemImage = menuItemImage;
		this.menuItemPrice = menuItemPrice;
		this.menuItemType = menuItemType;
		this.menuItemDescription = menuItemDescription;
		this.isVeg = isVeg;
		this.menuItemRating = menuItemRating;
	}
//	public int getMenuItemID() {
//		return menuItemID;
//	}
//	public void setMenuItemID(int menuItemID) {
//		this.menuItemID = menuItemID;
//	}
	public String getMenuItemName() {
		return menuItemName;
	}
	public void setMenuItemName(String menuItemName) {
		this.menuItemName = menuItemName;
	}
	public int getHotelID() {
		return hotelID;
	}
	public void setHotelID(int hotelID) {
		this.hotelID = hotelID;
	}
	public String getMenuItemImage() {
		return menuItemImage;
	}
	public void setMenuItemImage(String menuItemImage) {
		this.menuItemImage = menuItemImage;
	}
	public float getMenuItemPrice() {
		return menuItemPrice;
	}
	public void setMenuItemPrice(float menuItemPrice) {
		this.menuItemPrice = menuItemPrice;
	}
	public String getMenuItemType() {
		return menuItemType;
	}
	public void setMenuItemType(String menuItemType) {
		this.menuItemType = menuItemType;
	}
	public String getMenuItemDescription() {
		return menuItemDescription;
	}
	public void setMenuItemDescription(String menuItemDescription) {
		this.menuItemDescription = menuItemDescription;
	}
	public String getIsVeg() {
		return isVeg;
	}
	public void setIsVeg(String isVeg) {
		this.isVeg = isVeg;
	}
	public int getMenuItemRating() {
		return menuItemRating;
	}
	public void setMenuItemRating(int menuItemRating) {
		this.menuItemRating = menuItemRating;
	}
	@Override
	public String toString() {
		return "MenuItemDTO [" + ", menuItemName=" + menuItemName + ", hotelID=" + hotelID
				+ ", menuItemImage=" + menuItemImage + ", menuItemPrice=" + menuItemPrice
				+ ", menuItemType=" + menuItemType + ", menuItemDescription=" + menuItemDescription + ", isVeg=" + isVeg
				+ ", menuItemRating=" + menuItemRating + "]";
	}
	
	
}
