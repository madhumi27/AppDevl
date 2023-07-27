package com.iamneo.security.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@JsonInclude(Include.ALWAYS)
public class Work {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int workId;
	private String deptName;
	private String position;
	private String team;
//	@Temporal(TemporalType.DATE)
	private String hireDate;
	private int salary;
	
	@OneToOne(mappedBy = "work", cascade = CascadeType.ALL)
	@JsonBackReference
    private Empall empall;
	
}
