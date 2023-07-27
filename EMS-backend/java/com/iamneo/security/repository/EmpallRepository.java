package com.iamneo.security.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Empall;

@Repository
public interface EmpallRepository extends JpaRepository<Empall, Integer> {
//	@Query(value = "SELECT empId, " +
//            "personal.firstName AS firstName, " +
//            "personal.lastName AS lastName, " +
//            "contact.email AS email, " +
//            "contact.phoneNumber AS phoneNumber, " +
//            "work.deptName AS deptName, " +
//            "work.position AS position, " +
//            "work.team AS team, " +
//            "work.salary AS salary " +
//            "FROM empall " +
//            "WHERE work.deptName = :deptName", nativeQuery = true)
//    List<Empall> getEmployeesWithSpecificFieldsByDeptName(String deptName);
	@Query(value = "SELECT empall.emp_id, personal.first_name,contact.email, contact.phone_number , work.dept_name,work.position,work.team,work.salary " +
            "FROM empall " +
            "INNER JOIN personal ON empall.personal_id = personal.personal_id " +
            "INNER JOIN work ON empall.work_id = work.work_id " +
            "INNER JOIN contact ON empall.contact_id = contact.contact_id " +
            "WHERE work.dept_name = ?1", nativeQuery = true)
//	 List<Empall> getEmployeesWithSpecificFieldsByDeptName(String deptName);
	 public List<Object[]> getEmployeesWithSpecificFieldsByDeptName(String deptname);
	 
	 Optional<Empall> findByContactEmail(String email);
	
	 
}
