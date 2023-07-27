package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Meetings;

@Repository
public interface MeetingsRepository extends JpaRepository<Meetings, Integer> {
	List<Meetings> findByEmpId(int empId);
}
