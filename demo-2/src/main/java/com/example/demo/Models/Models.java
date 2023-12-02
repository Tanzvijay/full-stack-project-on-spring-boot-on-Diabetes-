package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Medical_data")
public class Models {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String username ;
	private int Pincode;
	
	private int Age;
	private String diabetesProviderPhone;
	private String country;
	private String Address;
	private String MaritalStatus;
	private String household;
	private String diabetesType;
	private String familyDiabetes;

	private String lowBloodSugarSymptoms;
	private String hospitalizedLowBloodSugar;
	private String diabetesUnderstanding;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getPincode() {
		return Pincode;
	}
	public void setPincode(int pincode) {
		Pincode = pincode;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}
	public String getDiabetesProviderPhone() {
		return diabetesProviderPhone;
	}
	public void setDiabetesProviderPhone(String diabetesProviderPhone) {
		this.diabetesProviderPhone = diabetesProviderPhone;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getMaritalStatus() {
		return MaritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		MaritalStatus = maritalStatus;
	}
	public String getHousehold() {
		return household;
	}
	public void setHousehold(String household) {
		this.household = household;
	}
	public String getDiabetesType() {
		return diabetesType;
	}
	public void setDiabetesType(String diabetesType) {
		this.diabetesType = diabetesType;
	}
	public String getFamilyDiabetes() {
		return familyDiabetes;
	}
	public void setFamilyDiabetes(String familyDiabetes) {
		this.familyDiabetes = familyDiabetes;
	}
	public String getLowBloodSugarSymptoms() {
		return lowBloodSugarSymptoms;
	}
	public void setLowBloodSugarSymptoms(String lowBloodSugarSymptoms) {
		this.lowBloodSugarSymptoms = lowBloodSugarSymptoms;
	}
	public String getHospitalizedLowBloodSugar() {
		return hospitalizedLowBloodSugar;
	}
	public void setHospitalizedLowBloodSugar(String hospitalizedLowBloodSugar) {
		this.hospitalizedLowBloodSugar = hospitalizedLowBloodSugar;
	}
	public String getDiabetesUnderstanding() {
		return diabetesUnderstanding;
	}
	public void setDiabetesUnderstanding(String diabetesUnderstanding) {
		this.diabetesUnderstanding = diabetesUnderstanding;
	}



	

}
