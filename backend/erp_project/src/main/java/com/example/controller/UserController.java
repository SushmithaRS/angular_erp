package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.UserService;


@RestController
public class UserController {
	@Autowired
	private UserService userservice;
	@GetMapping("employees/{emailId}/{password}")
	public int UserLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password1) {
		int flag=userservice.loginValidation(emailId, password1);
		if(flag==0) {
			return 0;
		}
		return flag;
	}
}
