package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.NotiEmp;
import com.iamneo.security.service.NotiEmpService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/notiemp")
public class NotiEmpController {

    @Autowired
    private NotiEmpService notiEmpService;

    @GetMapping
    public List<NotiEmp> getAllNotifications() {
        return notiEmpService.getAllNotifications();
    }

    @GetMapping("/{id}")
    public Optional<NotiEmp> getNotificationById(@PathVariable int id) {
        return notiEmpService.getNotificationById(id);
    }

    @PostMapping
    public void addNotification(@RequestBody NotiEmp notification) {
        notiEmpService.addNotification(notification);
    }

    @PutMapping("/{id}")
    public void updateNotification(@PathVariable int id, @RequestBody NotiEmp notification) {
        NotiEmp existingNotification = notiEmpService.getNotificationById(id).orElse(null);
        if (existingNotification != null) {
            // Update the existing notification with the new data
            existingNotification.setSender(notification.getSender());
            existingNotification.setType(notification.getType());
            existingNotification.setDescription(notification.getDescription());
            existingNotification.setTime(notification.getTime());
            existingNotification.setEmpId(notification.getEmpId());
            notiEmpService.updateNotification(existingNotification);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteNotification(@PathVariable int id) {
        notiEmpService.deleteNotification(id);
    }
}
