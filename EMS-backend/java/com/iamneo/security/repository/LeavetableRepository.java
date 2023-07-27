package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Leavetable;

public interface LeavetableRepository extends JpaRepository<Leavetable, Integer> {
    // Add custom queries if needed
}
