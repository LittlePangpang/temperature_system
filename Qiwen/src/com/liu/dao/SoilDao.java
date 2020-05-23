package com.homework.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.common.DB;


//数据库操作类
public class SoilDao {
	
	
	
	//数据库添加
	public boolean insert(String sql){
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
