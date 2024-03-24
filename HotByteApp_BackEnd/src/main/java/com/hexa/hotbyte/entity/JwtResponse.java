package com.hexa.hotbyte.entity;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse {
	private String jwtToken;
	private String username;
	private GrantedAuthority role;
	private JwtResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JwtResponse(String jwtToken, String username,GrantedAuthority role) {
		super();
		this.jwtToken = jwtToken;
		this.username = username;
		this.role=role;
	}
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public GrantedAuthority getRole() {
		return role;
	}
	public void setRole(GrantedAuthority role) {
		this.role = role;
	}
	
	public static class Builder {
        private JwtResponse jwtResponse;

        public Builder() {
            jwtResponse = new JwtResponse();
        }

        public Builder setJwtToken(String jwtToken) {
            jwtResponse.jwtToken = jwtToken;
            return this;
        }

        public Builder setUsername(String username) {
            jwtResponse.username = username;
            return this;
        }
        
        public Builder setRole(GrantedAuthority role)
        {
        	jwtResponse.role = role;
            return this;
        }
        public JwtResponse build() {
            return jwtResponse;
        }
    }

	@Override
	public String toString() {
		return "JwtResponse [jwtToken=" + jwtToken + ", username=" + username+ "]";
	}
	

	
}
