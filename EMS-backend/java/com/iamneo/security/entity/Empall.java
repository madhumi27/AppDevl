package com.iamneo.security.entity;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class Empall {
@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
private int empId;


@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "personalId")
@JsonManagedReference

private Personal personal;

@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "contactId")
@JsonManagedReference

private Contact contact;

@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "workId")
@JsonManagedReference

private Work work;


//
//
//@Override
//public Collection<? extends GrantedAuthority> getAuthorities() {
//	// TODO Auto-generated method stub
//    return List.of(new SimpleGrantedAuthority(role.name()));
//
//	
//}
//
//@Override
//public String getPassword() {
//	// TODO Auto-generated method stub
//	return personal.getPassword();
//}
//
//
//@Override
//public String getUsername() {
//	// TODO Auto-generated method stub
//	return contact.getEmail();
//}
//
//@Override
//public boolean isAccountNonExpired() {
//	// TODO Auto-generated method stub
//	return true;
//}
//
//@Override
//public boolean isAccountNonLocked() {
//	// TODO Auto-generated method stub
//	return true;
//}
//
//@Override
//public boolean isCredentialsNonExpired() {
//	// TODO Auto-generated method stub
//	return true;
//}
//
//@Override
//public boolean isEnabled() {
//	// TODO Auto-generated method stub
//	return true;
//}


}
