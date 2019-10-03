package io.agileintelligence.ppmtool.payload;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank(message = "Username can not be blank")
	private String username;
	@NotBlank(message = "Password can not be blank")
	private String password;
	
	public LoginRequest(@NotBlank(message = "Username can not be blank") String username,
			@NotBlank(message = "Password can not be blank") String password) {
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
	
}
