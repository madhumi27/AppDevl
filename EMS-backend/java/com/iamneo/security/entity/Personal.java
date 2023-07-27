
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
public class Personal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int personalId;
	private String firstName;
	private String lastName;
//	@Temporal(TemporalType.DATE)
	private String dob;
	private String gender;
	private String maritalStatus;
	private String password;
	
	@OneToOne(mappedBy = "personal", cascade = CascadeType.ALL)
	@JsonBackReference
    private Empall empall;
	
	public String getPassword() {
        return password;
    }
	
}
