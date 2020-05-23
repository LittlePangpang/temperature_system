package com.homework.bean;

public class UserBean {

	private int uid = 0;
	private String username = "";
	private String password = "";


	
	public UserBean(String username, String password){
		this.username = username;
		this.password = password;

	}
	
	public UserBean(){
		
	}
	
	

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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
