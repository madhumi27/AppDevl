package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Work;

public interface WorkRepository extends JpaRepository<Work, Integer> {
    // You can add custom query methods here if needed
}
