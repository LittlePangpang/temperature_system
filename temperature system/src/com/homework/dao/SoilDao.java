package com.homework.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.common.DB;


//数据库操作类
public class SoilDao {
	
	//数据库查询
	public JSONArray getYuce(String sql){
		DB db = new DB();
		db.getConnection();
		ResultSet rs = db.select(sql);
		JSONArray obj = new JSONArray();
		try {
			while(rs.next()){
				JSONObject o = new JSONObject();
				o.put("addtime", rs.getString("addtime"));
				o.put("wendu", rs.getString("wendu"));
				obj.add(o);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		db.close();
		return obj;
		
	}
	
}
