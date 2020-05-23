package com.homework.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.homework.dao.SoilDao;

//服务类
public class SoilService {
// 查询列表
	//查询预处理
	public static boolean add() {
		Random random = new Random();
		int value = random.nextInt(20)+10;
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String sql = "insert into wendu values('"+value+"','"+sf.format(new Date())+"')";
		SoilDao ud = new SoilDao();
		boolean result = ud.insert(sql);
		if(result){
			System.out.println("添加成功："+sql);
		}else{
			System.out.println("添加失败："+sql);

		}
		
		return result;
	}
	
	public static void main(String[] args){
		Timer timer = new Timer();
		timer.schedule(new TimerTask() {
		        public void run() {
		            add();
		        }
		}, 0 , 5000);
	}
	
}
