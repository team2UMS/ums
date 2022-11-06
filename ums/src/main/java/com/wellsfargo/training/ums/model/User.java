package com.wellsfargo.training.ums.model;


import java.util.Base64;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.List;

/*
The @Entity annotation specifies that the class is an entity and is mapped to a database table. 
The @Table annotation specifies the name of the database table to be used for mapping. 
 */
@Entity
@Table(name="user")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="customer_id")
	private long customerId;




	@Column(name="contact_number", unique=true)
	private String contactNumber;

	@Column(name="first_name")
	private String firstName;

	@Column(name="last_name")
	private String lastName;

	@Column(name="city")
	private String city;

	@Column(name="ocupation")
	private String occupation;

	@Column(name="password")
	private String password;

	@Column(name="dob")
	@JsonFormat(pattern="yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date dob;

	@Column(name="branch")
	private String branch;

	@OneToMany(mappedBy ="user")
	private List<Transactions> transactions;


	//No-Argument Constructor
	public User() {

	}


	public String getContactNumber() {
		return contactNumber;
	}


	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getOccupation() {
		return occupation;
	}


	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}


	public String getPassword() {
		byte[] decodeBytes = Base64.getDecoder().decode(this.password);
		String decodedString = new String(decodeBytes);
		return decodedString;

	}


	public void setPassword(String password) {

		Base64.Encoder encoder = Base64.getEncoder();  // encrypt password in database field
		String normalString = password;

		String encodedString = encoder.encodeToString(
				normalString.getBytes());
		this.password = encodedString;
	}


	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}
	
	
	public String getBranch() {
		return branch;
	}


	public void setBranch(String branch) {
		this.branch = branch;
	}
	
	public long getCustomerId() {
		return customerId;
	}



}
