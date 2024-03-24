package com.hexa.hotbyte.dto;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.hexa.hotbyte.entity.Hotel;
import com.hexa.hotbyte.entity.User;



public class OrderDTO {

	private User user;
	private Hotel hotel;
	private float amount;
	private String note;
	private boolean isPaid;
	private int orderStatusID;
	public OrderDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderDTO(User user, Hotel hotel, float amount, String note, boolean isPaid, int orderStatusID) {
		super();
		this.user = user;
		this.hotel = hotel;
		this.amount = amount;
		this.note = note;
		this.isPaid = isPaid;
		this.orderStatusID = orderStatusID;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User userID) {
		this.user = userID;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotelID) {
		this.hotel = hotelID;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public boolean isPaid() {
		return isPaid;
	}
	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}
	public int getOrderStatusID() {
		return orderStatusID;
	}
	public void setOrderStatusID(int orderStatusID) {
		this.orderStatusID = orderStatusID;
	}
	@Override
	public String toString() {
		return "OrderDTO [userID=" + user + ", hotelID=" + hotel + ", amount=" + amount + ", note=" + note
				+ ", isPaid=" + isPaid + ", orderStatusID=" + orderStatusID + "]";
	}
}
