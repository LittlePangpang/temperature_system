package com.homework.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
//实际的数据库操作类
public class DB {
	private Connection conn = null;
	private Statement stmt = null;
	private ResultSet rs = null;
	//数据库连接

	public void getConnection(){
//		System.out.println("开始连接数据库");

		try {
			Class.forName(PublicInfo.DRIVER);
			conn = DriverManager.getConnection(PublicInfo.URL, PublicInfo.USERNAME, PublicInfo.PASSWORD);
			stmt = conn.createStatement();
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		
	}
	//读取数据

	public ResultSet select(String sql){
		try {
			rs = stmt.executeQuery(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
//		try {

//			while(rs.next()){

//				System.out.println(rs.getString("USERNAME")+"----"+rs.getString("PASSWORD"));

//			}

//		} catch (SQLException e) {

//			// TODO Auto-generated catch block

//			e.printStackTrace();

//		}

		return rs;
	}
	//更新数据

	public int update(String sql){
		try {
			int result = stmt.executeUpdate(sql);
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		return 0;
	}
	//插入数据

	public int insert(String sql){
		try {
			int result = stmt.executeUpdate(sql);
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}
		return 0;
	}
	//关闭数据库连接

	public void close(){
		if(stmt!=null){
			try{
				stmt.close();
				stmt = null;
			}catch(SQLException e){
				e.printStackTrace();  
                System.out.println("关闭stmt失败");  
			}
		}
		if(rs!=null){  
            try{  
                rs.close();  
                rs=null;  
            }catch(SQLException e){  
                e.printStackTrace();  
                System.out.println("关闭ResultSet失败");  
            }  
        }  
      
        if(conn!=null){  
            try{  
                conn.close();  
                conn=null;  
            }catch(SQLException e){  
                e.printStackTrace();  
                System.out.println("关闭Connection失败");  
            }  
        }  
	}
}