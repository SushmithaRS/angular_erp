package com.example.controller;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.UserService;
import com.example.exception.ResourceNotFoundException;
import com.example.model.Employee;
import com.example.repository.EmployeeRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private UserService userservice;
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepository.save(employee);
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:"+id));
		return ResponseEntity.ok(employee);
	}
	
	@GetMapping("employees/{emailId}/{password}")
		public int UserLogin(@PathVariable("emailId") String emailId1,@PathVariable("password")String password1) {
			int flag=userservice.loginValidation(emailId1,password1);
			if (flag==0)
			{
			return 0;
		}
			return flag;
	}
	
	// Update password
		@PutMapping("/employees/{id}/password")
		public ResponseEntity<String> updatePassword(@PathVariable("id") Long id,
				@RequestBody PasswordUpdateRequest request) {
			userservice.updatePassword(id, request.getPassword());
			return ResponseEntity.ok("Password updated successfully");
		}


}


