package com.iamneo.security.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.NotiAdm;
import com.iamneo.security.service.NotiAdmService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/notiadm")
public class NotiAdmController {

    private final NotiAdmService notiAdmService;

    @Autowired
    public NotiAdmController(NotiAdmService notiAdmService) {
        this.notiAdmService = notiAdmService;
    }

    @PostMapping
    public ResponseEntity<NotiAdm> saveNotiAdm(@RequestBody NotiAdm notiAdm) {
        NotiAdm savedNotiAdm = notiAdmService.saveNotiAdm(notiAdm);
        return new ResponseEntity<>(savedNotiAdm, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<NotiAdm>> getAllNotiAdms() {
        List<NotiAdm> notiAdms = notiAdmService.getAllNotiAdms();
        return new ResponseEntity<>(notiAdms, HttpStatus.OK);
    }

    @GetMapping("/{empId}")
    public ResponseEntity<NotiAdm> getNotiAdmById(@PathVariable int empId) {
        NotiAdm notiAdm = notiAdmService.getNotiAdmById(empId);
        if (notiAdm != null) {
            return new ResponseEntity<>(notiAdm, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{empId}")
    public ResponseEntity<Void> deleteNotiAdmById(@PathVariable int empId) {
        notiAdmService.deleteNotiAdmById(empId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
