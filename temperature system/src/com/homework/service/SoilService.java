package com.homework.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.poi.ss.usermodel.DateUtil;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.dao.SoilDao;

//服务类
public class SoilService {
// 查询列表
	//查询预处理
	public JSONObject search() {
		JSONObject json = new JSONObject();
		String sql = "select * from wendu";
		SoilDao ud = new SoilDao();
		JSONArray array = ud.getYuce(sql);
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date nowDate = new Date();
		Calendar begin=Calendar.getInstance();
		begin.setTime(nowDate);
		begin.add(Calendar.HOUR_OF_DAY,-1);
		Date startDate = begin.getTime();
		int count = 0;
		for(int i = 0;i<array.size();i++){
			JSONObject obj = (JSONObject) array.get(i);
			String wendu =  obj.getString("addtime");		
			try {
				Date wddate = sf.parse(wendu);
				if(wddate.getTime() >= startDate.getTime()){
					
					count ++ ;
				}
				
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		System.out.println("count:"+count);
		String[] wd = new String[count];
		String[] x = new String[count];
		
		int index = 0;
		for(int i = 0;i<array.size();i++){
			JSONObject obj = (JSONObject) array.get(i);
			String wendu =  obj.getString("addtime");		
			try {
				Date wddate = sf.parse(wendu);
				if(wddate.getTime() >= startDate.getTime() && index < count){
					wd[index] = obj.getString("wendu");		
					x[index] = obj.getString("addtime");
					index ++ ;
				}
				
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		System.out.println("index:"+index);
		String current = "";

		if(index > 0){
		    current = wd[index-1];

		}
		
		json.put("result", "success");
		json.put("data", wd);
		json.put("datetime", x);
		json.put("current", current);
		json.put("msg", "查询成功");
		return json;
	}
	
	
}
