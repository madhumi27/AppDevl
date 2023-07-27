package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Personal;

@Repository
public interface PersonalRepository extends JpaRepository<Personal, Integer> {
	@Query(value = "SELECT e.empId, p.firstName, p.lastName, w.position, w.team, w.salary " +
            "FROM empall e " +
            "INNER JOIN e.personal p " +
            "INNER JOIN e.work w " +
            "WHERE w.deptName = :deptName", nativeQuery = true)
	List<Object[]> getEmployeeDetailsByDeptName(String deptName);
}
