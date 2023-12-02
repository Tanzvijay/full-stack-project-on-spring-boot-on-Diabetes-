package com.example.demo.Repositary;

import org.springframework.data.jpa.repository.JpaRepository; 

import com.example.demo.Models.Models;

public interface ModelsRepository extends JpaRepository<Models,Long> {

}
