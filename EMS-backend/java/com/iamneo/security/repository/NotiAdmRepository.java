package com.iamneo.security.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.NotiAdm;

@Repository
public interface NotiAdmRepository extends JpaRepository<NotiAdm, Integer> {
}
