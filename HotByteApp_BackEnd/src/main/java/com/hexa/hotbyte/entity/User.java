package com.hexa.hotbyte.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;



import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User implements UserDetails{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	@Column(unique=true)
	private String username;
	private String password;
	@Column(unique=true)
	private String email;
    

	private String userGender;
	private String userContactNumber;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_id")
	private Address address;
	@JsonIgnore
    @OneToMany(mappedBy="userID",cascade =CascadeType.ALL)
    private List<Order> orders=new ArrayList<>();
	@ElementCollection
    @CollectionTable(name = "user_cart", joinColumns = @JoinColumn(name = "user_id"))
    @MapKeyColumn(name = "menu_item_id")
    @Column(name = "quantity")
    private Map<Long, Integer> cart = new HashMap<>();
	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
	private double cartTotal;

	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
		this.role=new Role(1L,"USER");
	}



	public User(Long userId, String username, String password, String email, String userGender,
			String userContactNumber, Address address,List<Order> order, Map<Long, Integer> cart, Role role) {
		this();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.userGender = userGender;
		this.userContactNumber = userContactNumber;
		this.address = address;
		this.orders=order;
		this.cart = cart;
		this.role = role;
	}



	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
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



	public String getUserGender() {
		return userGender;
	}



	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}



	public String getUserContactNumber() {
		return userContactNumber;
	}



	public void setUserContactNumber(String userContactNumber) {
		this.userContactNumber = userContactNumber;
	}



	public Address getAddress() {
		return address;
	}



	public void setAddress(Address address) {
		this.address = address;
	}



	public List<Order> getOrders() {
		return orders;
	}



	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}



	public Map<Long, Integer> getCart() {
		return cart;
	}



	public void setCart(Map<Long, Integer> cart) {
		this.cart = cart;
	}



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}
	public double getCartTotal() {
		return this.cartTotal;
	}

	public void setCartTotal(double cartTotal) {
		this.cartTotal = cartTotal;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", userGender=" + userGender + ", userContactNumber=" + userContactNumber + ", address=" + address
				+ ", cart=" + cart + ", role=" + role + "]";
	}
	
	public void addToCart(Long menuItemId, int quantity) {
        this.cart.put(menuItemId, this.cart.getOrDefault(menuItemId, 0) + quantity);
    }
	
	public void removeFromCart(Long menuItemId, int quantity) {
        int currentQuantity = this.cart.getOrDefault(menuItemId, 0);
        int newQuantity = Math.max(0, currentQuantity - quantity);
        if (newQuantity == 0) {
            this.cart.remove(menuItemId);
        } else {
            this.cart.put(menuItemId, newQuantity);
        }
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
