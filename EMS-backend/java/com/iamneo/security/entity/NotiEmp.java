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
public class NotiEmp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int notiEmpId;
	private String sender;
	private String type;
	private String description;
//	@Temporal(TemporalType.DATE)
	private String time;
	private int empId;

}
