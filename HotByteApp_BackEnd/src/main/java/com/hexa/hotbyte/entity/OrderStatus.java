package com.hexa.hotbyte.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_status")
public class OrderStatus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int statusID;
	private String status;
	public OrderStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderStatus(int statusID, String status) {
		super();
		this.statusID = statusID;
		this.status = status;
	}
	public int getStatusID() {
		return statusID;
	}
	public void setStatusID(int statusID) {
		this.statusID = statusID;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "OrderStatus [statusID=" + statusID + ", status=" + status + "]";
	}
	
}

