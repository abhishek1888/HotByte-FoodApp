package com.hexa.hotbyte.entity;

public class JwtRequest {
	private String username;
	private String password;
	public JwtRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JwtRequest(String username, String password) {
		super();
		this.username = username;
		this.password = password;
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


	// Builder class for JwtRequest
    public static class Builder {
        private JwtRequest jwtRequest;

        public Builder() {
            jwtRequest = new JwtRequest();
        }

        public Builder setUsername(String username) {
            jwtRequest.username = username;
            return this;
        }

        public Builder setPassword(String password) {
            jwtRequest.password = password;
            return this;
        }

        public JwtRequest build() {
            return jwtRequest;
        }
    }
	
}
