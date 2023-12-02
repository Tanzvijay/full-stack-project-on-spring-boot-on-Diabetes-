package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


import com.example.demo.Models.Models;
import com.example.demo.Repositary.ModelsRepository;



@Controller
public class ModelsController {
	 @Autowired
	   private ModelsRepository modelsRepository;
	 
	  @GetMapping("/AllData")
      @ResponseBody
      public ResponseEntity<List<Models>> getAllData() {
          List<Models> dataList = modelsRepository.findAll();
          return ResponseEntity.ok(dataList);
	  }
	  
	  @PostMapping("/your-endpoint")
	    public ResponseEntity<String> saveUserData(@RequestBody Models userData) {
	        try {
	            // Save the data to the MySQL database using the repository
	            modelsRepository.save(userData); // Assuming "UserData" is compatible with "Models"
	            return new ResponseEntity<>("Data saved successfully", HttpStatus.OK);
	        } catch (Exception e) {
	            e.printStackTrace();
	            return new ResponseEntity<>("Failed to save data", HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	  

}
