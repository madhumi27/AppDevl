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
public class Meetings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int meetingId;
	private String meetingTitle;
	private String startTime;
//	@Temporal(TemporalType.DATE)
	private String endTime;
	private String manager;
	private int empId;

	
}
