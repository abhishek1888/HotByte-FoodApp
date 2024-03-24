package com.hexa.hotbyte.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu_item")

public class MenuItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long menuItemID;
	private String menuItemName;
//	@ManyToOne
//	@JoinColumn(name = "hotelID")
	private int hotelID;
	private String menuItemImage;
	private float menuItemPrice;
	private String menuItemType;
	private String menuItemDescription;
	private String isVeg;
	private int menuItemRating;

	public MenuItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MenuItem(Long menuItemID, String menuItemName,  int hotelID, String menuItemImage,
			float menuItemPrice, String menuItemType, String menuItemDescription, String isVeg, int menuItemRating) {
		super();
		this.menuItemID = menuItemID;
		this.menuItemName = menuItemName;
		this.hotelID = hotelID;
		this.menuItemImage = menuItemImage;
		this.menuItemPrice = menuItemPrice;
		this.menuItemType = menuItemType;
		this.menuItemDescription = menuItemDescription;
		this.isVeg = isVeg;
		this.menuItemRating = menuItemRating;
	}
   
	public Long getMenuItemID() {
		return menuItemID;
	}

	public void setMenuItemID(Long menuItemID) {
		this.menuItemID = menuItemID;
	}

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
		return "MenuItem [menuItemID=" + menuItemID + ", menuItemName=" + menuItemName + ", hotelID=" + hotelID
				+ ", menuItemImage=" + menuItemImage + ", menuItemPrice=" + menuItemPrice
				+ ", menuItemType=" + menuItemType + ", menuItemDescription=" + menuItemDescription + ", isVeg=" + isVeg
				+ ", menuItemRating=" + menuItemRating + "]";
	}

  
}
