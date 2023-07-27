package com.iamneo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.NotiEmp;
import com.iamneo.security.repository.NotiEmpRepository;

@Service
public class NotiEmpService {

    @Autowired
    private NotiEmpRepository notiEmpRepository;

    public List<NotiEmp> getAllNotifications() {
        return notiEmpRepository.findAll();
    }

    public Optional<NotiEmp> getNotificationById(int id) {
        return notiEmpRepository.findById(id);
    }

    public void addNotification(NotiEmp notification) {
        notiEmpRepository.save(notification);
    }

    public void updateNotification(NotiEmp notification) {
        notiEmpRepository.save(notification);
    }

    public void deleteNotification(int id) {
        notiEmpRepository.deleteById(id);
    }
}
