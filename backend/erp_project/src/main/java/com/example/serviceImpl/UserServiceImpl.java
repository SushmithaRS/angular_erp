
package com.example.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.service.UserService;
import com.example.dbutil.DBUtil;
import com.example.exception.ResourceNotFoundException;
import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@Service 
public class UserServiceImpl implements UserService{
	Connection connection;
	int flag=0;
	public UserServiceImpl() throws SQLException {
		connection=DBUtil.getConnection();
	}
	@Override
	public int loginValidation(String emailId,String password) {
		try {
			PreparedStatement statement = connection.prepareStatement("select * from employees where email_id='"+emailId+"'");
			//statement.setString(1, emailId);
			ResultSet rs=statement.executeQuery();
			System.out.println(rs);
			while(rs.next()) {
				if(rs.getString(5).equals(emailId)&& rs.getString(9).equals(password)) {
					flag=1;
				}else {
					System.out.println("INVALID USER");
					flag=0;
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return flag;
	}
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public void updatePassword(Long id, String password) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found"));
		employee.setPassword(password);
		employee.setConfirmPassword(password);
		employeeRepository.save(employee);
	}
}
