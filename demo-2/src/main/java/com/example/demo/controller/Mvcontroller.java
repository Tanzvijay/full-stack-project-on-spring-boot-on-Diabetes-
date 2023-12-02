package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class Mvcontroller {
	
	@GetMapping("/country")
    public String showContent() {
        return "index";
    }
	@GetMapping("/Contend")
    public String showContent1() {
        return "Contend";
    }

}
