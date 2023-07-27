package com.iamneo.security.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Leavetable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int leaveId;
	private String firstName;
	private String lastName;
	private String reason;
	private String email;
//	@Temporal(TemporalType.DATE)
	private String fromDate;
	private String endDate;
	private String status;
	private int empId;
	
	
}
