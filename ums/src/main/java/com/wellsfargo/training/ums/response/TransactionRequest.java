package com.wellsfargo.training.ums.response;

import java.util.Date;

import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TransactionRequest {
	
	private long c_id;
	private String t_type;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date fDate;
	private Date tDate;
	public long getC_id() {
		return c_id;
	}
	public void setC_id(long c_id) {
		this.c_id = c_id;
	}
	public String getT_type() {
		return t_type;
	}
	public void setT_type(String t_type) {
		this.t_type = t_type;
	}
	public Date getfDate() {
		return fDate;
	}
	public void setfDate(Date fDate) {
		this.fDate = fDate;
	}
	public Date gettDate() {
		return tDate;
	}
	public void settDate(Date tDate) {
		this.tDate = tDate;
	}
	

}
