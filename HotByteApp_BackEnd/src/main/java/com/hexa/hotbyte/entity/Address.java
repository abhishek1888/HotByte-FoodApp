package com.hexa.hotbyte.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int addressID;
	private String street1;
	private String street2;
	private String landmark;
	private String city;
	private int postalCode;
	
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Address(int addressID, String street1, String street2, String landmark, String city, int postalCode) {
		super();
		this.addressID = addressID;
		this.street1 = street1;
		this.street2 = street2;
		this.landmark = landmark;
		this.city = city;
		this.postalCode = postalCode;
	}
	public int getAddressID() {
		return addressID;
	}
	public void setAddressID(int addressID) {
		this.addressID = addressID;
	}
	public String getStreet1() {
		return street1;
	}
	public void setStreet1(String street1) {
		this.street1 = street1;
	}
	public String getStreet2() {
		return street2;
	}
	public void setStreet2(String street2) {
		this.street2 = street2;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}
	
	@Override
	public String toString() {
		return "Address [addressID=" + addressID + ", street1=" + street1 + ", street2=" + street2 + ", landmark="
				+ landmark + ", city=" + city + ", postalCode=" + postalCode + "]";
	}
    
	
	

}
