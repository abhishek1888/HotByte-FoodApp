package com.hexa.hotbyte.entity;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "hotel")
public class Hotel implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long hotelId;
	@Column(unique=true)
	private String username;
	private String password;
	@Column(unique=true)
	private String email;
	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
	private String hotelName;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id")
	private Address hotelAddress;
	private String hotelContactNumber;

	private String hotelDescription;
	@JsonIgnore
	@OneToMany(mappedBy="hotelID",cascade = CascadeType.ALL)
	private List<Order> hotelOrderList=new ArrayList<>();
	private List<String> hotelImagesList=new ArrayList<>();
	private boolean hotelIsActive;
	private LocalTime hotelStartTiming;
	private LocalTime hotelEndTiming;
	private int hotelRating;
	
	
	public Hotel() {
		super();
		this.role=new Role(2L,"HOTEL");
	}

	public Hotel(Long hotelId, String username, String password, String email, Role role, String hotelName,
			Address hotelAddress, String hotelContactNumber, List<MenuItem> hotelMenuList, String hotelDescription,
			List<Order> hotelOrderList, List<String> hotelImagesList, boolean hotelIsActive, LocalTime hotelStartTiming,
			LocalTime hotelEndTiming, int hotelRating) {
		this();
		this.hotelId = hotelId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.hotelContactNumber = hotelContactNumber;
		//this.hotelMenuList = hotelMenuList;
		this.hotelDescription = hotelDescription;
		this.hotelOrderList = hotelOrderList;
		this.hotelImagesList = hotelImagesList;
		this.hotelIsActive = hotelIsActive;
		this.hotelStartTiming = hotelStartTiming;
		this.hotelEndTiming = hotelEndTiming;
		this.hotelRating = hotelRating;
	}

	public Long getHotelId() {
		return hotelId;
	}

	public void setHotelId(Long hotelId) {
		this.hotelId = hotelId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public Address getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(Address hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	public String getHotelContactNumber() {
		return hotelContactNumber;
	}

	public void setHotelContactNumber(String hotelContactNumber) {
		this.hotelContactNumber = hotelContactNumber;
	}

//	public List<MenuItem> getHotelMenuList() {
//		return hotelMenuList;
//	}
//
//	public void setHotelMenuList(List<MenuItem> hotelMenuList) {
//		this.hotelMenuList = hotelMenuList;
//	}

	public String getHotelDescription() {
		return hotelDescription;
	}

	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}

	public List<Order> getHotelOrderList() {
		return hotelOrderList;
	}

	public void setHotelOrderList(List<Order> hotelOrderList) {
		this.hotelOrderList = hotelOrderList;
	}

	public List<String> getHotelImagesList() {
		return hotelImagesList;
	}

	public void setHotelImagesList(List<String> hotelImagesList) {
		this.hotelImagesList = hotelImagesList;
	}

	public boolean isHotelIsActive() {
		return hotelIsActive;
	}

	public void setHotelIsActive(boolean hotelIsActive) {
		this.hotelIsActive = hotelIsActive;
	}

	public LocalTime getHotelStartTiming() {
		return hotelStartTiming;
	}

	public void setHotelStartTiming(LocalTime hotelStartTiming) {
		this.hotelStartTiming = hotelStartTiming;
	}

	public LocalTime getHotelEndTiming() {
		return hotelEndTiming;
	}

	public void setHotelEndTiming(LocalTime hotelEndTiming) {
		this.hotelEndTiming = hotelEndTiming;
	}

	public int getHotelRating() {
		return hotelRating;
	}

	public void setHotelRating(int hotelRating) {
		this.hotelRating = hotelRating;
	}

	@Override
	public String toString() {
		return "Hotel [hotelId=" + hotelId + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", role=" + role + ", hotelName=" + hotelName + ", hotelAddress=" + hotelAddress
				+ ", hotelContactNumber=" + hotelContactNumber + ", hotelMenuList=" + 
				 ", hotelDescription=" + hotelDescription + ", hotelOrderList=" + hotelOrderList + ", hotelImagesList="
				+ hotelImagesList + ", hotelIsActive=" + hotelIsActive + ", hotelStartTiming=" + hotelStartTiming
				+ ", hotelEndTiming=" + hotelEndTiming + ", hotelRating=" + hotelRating + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Set<GrantedAuthority> authorities = new HashSet<>();

		// Assuming Role has a getName() method that returns the role name
		authorities.add(new SimpleGrantedAuthority("ROLE_" +role.getName()));

		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
