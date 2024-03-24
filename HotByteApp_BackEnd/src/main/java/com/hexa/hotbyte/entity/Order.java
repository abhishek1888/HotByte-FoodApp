package com.hexa.hotbyte.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderID;
	@ManyToOne
	@JoinColumn(name="user_ID")
	private User userID;
	@ManyToOne
	@JoinColumn(name = "hotel_ID")
	private Hotel hotelID;
	@ElementCollection
	@CollectionTable(name = "order_items", joinColumns = @JoinColumn(name = "order_id"))
	@MapKeyColumn(name = "menu_item_id")
	@Column(name = "quantity")
	private Map<Long, Integer> orderItems = new HashMap<>();
	private float amount;
	private String note;
	private boolean isPaid;
	@CreationTimestamp
	private LocalDateTime orderTime;
	@UpdateTimestamp
	private LocalDateTime deliveryTime;
	private int orderStatusID;
	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(int orderID, User userID, Hotel hotelID, float amount, String note,
			boolean isPaid, LocalDateTime orderTime, LocalDateTime deliveryTime, int orderStatusID) {
		super();
		this.orderID = orderID;
		this.userID = userID;
		this.hotelID = hotelID;
		this.amount = amount;
		this.note = note;
		this.isPaid = isPaid;
		this.orderTime = orderTime;
		this.deliveryTime = deliveryTime;
		this.orderStatusID = orderStatusID;
	}



	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public User getUserID() {
		return userID;
	}

	public void setUserID(User userID) {
		this.userID = userID;
	}

	public Hotel getHotelID() {
		return hotelID;
	}

	public void setHotelID(Hotel hotelID) {
		this.hotelID = hotelID;
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

	public boolean getisPaid() {
		return isPaid;
	}

	public void setisPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}

	public LocalDateTime getOrderTime() {
		return orderTime;
	}

	public void setOrderTime(LocalDateTime orderTime) {
		this.orderTime = orderTime;
	}

	public LocalDateTime getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(LocalDateTime deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public int getOrderStatusID() {
		return orderStatusID;
	}

	public void setOrderStatusID(int orderStatusID) {
		this.orderStatusID = orderStatusID;
	}
	public Map<Long, Integer> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(Map<Long, Integer> cart1) {
		this.orderItems = cart1;
	}

	@Override
	public String toString() {
		return "Order [orderID=" + orderID + ", userID=" + userID + ", hotelID=" + hotelID + ", orderItems="
				+ orderItems + ", amount=" + amount + ", note=" + note + ", isPaid=" + isPaid + ", orderTime="
				+ orderTime + ", deliveryTime=" + deliveryTime + ", orderStatusID=" + orderStatusID + "]";
	}
   
	
	
}

