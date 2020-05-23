package com.homework.common;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

public class Ajax extends HttpServlet{
	/**

	 * ajax返回

	 * @param response

	 * @param json 需要返回的json格式数组

	 * @throws IOException

	 */
	public static void ajaxReturn(HttpServletResponse response,String json) throws IOException{
		response.setContentType("application/json;charset=utf-8");   
        response.setHeader("Cache-Control", "no-cache");  
		response.getWriter().write(json);
		response.getWriter().flush();
		response.getWriter().close();
	}

}
