package com.example.service;



import org.springframework.stereotype.Repository;


@Repository
public interface UserService {
	public int loginValidation(String emailId,String password);
	public void updatePassword(Long userId, String password);
}
