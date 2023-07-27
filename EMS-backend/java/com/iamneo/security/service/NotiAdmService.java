package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.NotiAdm;
import com.iamneo.security.repository.NotiAdmRepository;

@Service
public class NotiAdmService {
    private final NotiAdmRepository notiAdmRepository;

    @Autowired
    public NotiAdmService(NotiAdmRepository notiAdmRepository) {
        this.notiAdmRepository = notiAdmRepository;
    }

    public NotiAdm saveNotiAdm(NotiAdm notiAdm) {
        return notiAdmRepository.save(notiAdm);
    }

    public List<NotiAdm> getAllNotiAdms() {
        return notiAdmRepository.findAll();
    }

    public NotiAdm getNotiAdmById(int empId) {
        return notiAdmRepository.findById(empId).orElse(null);
    }

    public void deleteNotiAdmById(int empId) {
        notiAdmRepository.deleteById(empId);
    }
}
