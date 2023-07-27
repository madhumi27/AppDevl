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

import com.iamneo.security.entity.Leavetable;
import com.iamneo.security.service.LeavetableService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/auth/leavetables")
public class LeavetableController {

    private final LeavetableService leavetableService;

    @Autowired
    public LeavetableController(LeavetableService leavetableService) {
        this.leavetableService = leavetableService;
    }

    @GetMapping
    public ResponseEntity<List<Leavetable>> getAllLeavetables() {
        List<Leavetable> leavetables = leavetableService.getAllLeavetables();
        return new ResponseEntity<>(leavetables, HttpStatus.OK);
    }

    @GetMapping("/{leaveId}")
    public ResponseEntity<Leavetable> getLeavetableById(@PathVariable int leaveId) {
        Leavetable leavetable = leavetableService.getLeavetableById(leaveId);
        if (leavetable != null) {
            return new ResponseEntity<>(leavetable, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Leavetable> addLeavetable(@RequestBody Leavetable leavetable) {
        Leavetable savedLeavetable = leavetableService.saveLeavetable(leavetable);
        return new ResponseEntity<>(savedLeavetable, HttpStatus.CREATED);
    }

    @DeleteMapping("/{leaveId}")
    public ResponseEntity<Void> deleteLeavetableById(@PathVariable int leaveId) {
        Leavetable leavetable = leavetableService.getLeavetableById(leaveId);
        if (leavetable != null) {
            leavetableService.deleteLeavetableById(leaveId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
