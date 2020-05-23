package com.homework;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.bean.UserBean;
import com.homework.common.DB;


//用户信息数据库操作类
public class UserDao {

	public UserBean getlogininfo(String sql){
		DB db = new DB();
		db.getConnection();
		ResultSet rs = db.select(sql);
		UserBean ub = new UserBean();
		
		try {
			if(rs.next()){
				ub.setUsername(rs.getString("username"));
				ub.setPassword(rs.getString("password"));
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		db.close();
		return ub;
	}
	
	public JSONArray searchAll(String sql){
		JSONArray list = new JSONArray();
		DB db = new DB();
		db.getConnection();
		ResultSet rs = db.select(sql);
		
		
		try {
			while(rs.next()){
				JSONObject obj = new JSONObject();
				obj.put("username",rs.getString("username"));
				obj.put("password",rs.getString("password"));
				list.add(obj);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		db.close();
		return list;
	}
	
	public JSONArray getRegistinfo(String sql){
		DB db = new DB();
		db.getConnection();
		ResultSet rs = db.select(sql);
		UserBean ub = new UserBean();
		JSONArray array = new JSONArray();
		try {
			while(rs.next()){
				JSONObject obj = new JSONObject();
				obj.put("pasword", rs.getString("password"));
				obj.put("username", rs.getString("username"));
				array.add(obj);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		db.close();
		return array;
		
	}
	public boolean regist(String sql){
		DB db = new DB();
		db.getConnection();
		int result = db.insert(sql);
		db.close();
		if(result == 0){
			return false;
		}else{
			return true;
		}
	}
	
	public boolean update(String sql){
		DB db = new DB();
		db.getConnection();
		int result = db.insert(sql);
		db.close();
		if(result == 0){
			return false;
		}else{
			return true;
		}
	}
	
}
