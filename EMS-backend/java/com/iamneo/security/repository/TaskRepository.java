package com.iamneo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {
	List<Task> findByEmpId(int empId);
}
