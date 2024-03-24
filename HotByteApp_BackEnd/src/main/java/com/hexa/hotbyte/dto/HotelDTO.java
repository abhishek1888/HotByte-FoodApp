package com.hexa.hotbyte.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hexa.hotbyte.entity.Address;
import com.hexa.hotbyte.entity.MenuItem;
import com.hexa.hotbyte.entity.Order;
import com.hexa.hotbyte.entity.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

public class HotelDTO {
		
		private Long hotelId;
		private String hotelName;
		private Address hotelAddress;
		private String hotelContactNumber;
		private String hotelDescription;
		private List<String> hotelImagesList=new ArrayList<>();
		private boolean hotelIsActive;
		private LocalTime hotelStartTiming;
		private LocalTime hotelEndTiming;
		private int hotelRating;
		
		public HotelDTO() {
			super();
			// TODO Auto-generated constructor stub
		}
		public HotelDTO(Long hotelId, String hotelName, Address hotelAddress, String hotelContactNumber,
				String hotelDescription, List<String> hotelImagesList, boolean hotelIsActive,
				LocalTime hotelStartTiming, LocalTime hotelEndTiming, int hotelRating) {
			super();
			this.hotelId = hotelId;
			this.hotelName = hotelName;
			this.hotelAddress = hotelAddress;
			this.hotelContactNumber = hotelContactNumber;
			this.hotelDescription = hotelDescription;
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
		public String getHotelDescription() {
			return hotelDescription;
		}
		public void setHotelDescription(String hotelDescription) {
			this.hotelDescription = hotelDescription;
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
			return "HotelDTO [hotelId=" + hotelId + ", hotelName=" + hotelName + ", hotelAddress=" + hotelAddress
					+ ", hotelContactNumber=" + hotelContactNumber + ", hotelDescription=" + hotelDescription
					+ ", hotelImagesList=" + hotelImagesList + ", hotelIsActive=" + hotelIsActive
					+ ", hotelStartTiming=" + hotelStartTiming + ", hotelEndTiming=" + hotelEndTiming + ", hotelRating="
					+ hotelRating + "]";
		}
		
		
		
}
