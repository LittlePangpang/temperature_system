package com.homework;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.bean.UserBean;

//用户服务类
public class UserUtil {
	// 登录
	public JSONObject login(String uname,String pwd) {
		JSONObject json = new JSONObject();
		String sql = "SELECT * FROM userinfo where username='"
				+ uname + "' AND password='" + pwd
				+ "'";
		UserDao ud = new UserDao();
		UserBean nub = new UserBean();
		nub = ud.getlogininfo(sql);
		System.out.println(sql);

		String username = nub.getUsername();
		String password = nub.getPassword();
		if (username == null || password == null) {
			json.put("result", "error");
			json.put("msg", "登录失败，请重试");
		} else if (username.equals(uname)
				&& password.equals((pwd))) {
			
			json.put("result", "success");
			json.put("msg", "登录成功");
		} else {
			json.put("result", "error");
			json.put("msg", "用户名或密码错误");
		}

		return json;
	}
	
	//查询所有用户
	public JSONObject search() {
		JSONObject json = new JSONObject();
		String sql = "SELECT * FROM userinfo";
		UserDao ud = new UserDao();
		JSONArray array = ud.searchAll(sql);
		json.put("data", array);
		json.put("result", "success");
		json.put("msg", "查询成功");
		return json;
		
	}

	

	
}
