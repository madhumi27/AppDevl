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
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int contactId;
	private String city;
	private String state;

	private String email;
	
	private String phoneNumber;
	private String gitHub;
	private String linkedIn;
	
	@OneToOne(mappedBy = "contact", cascade = CascadeType.ALL)
	@JsonBackReference
    private Empall empall;
	
}
