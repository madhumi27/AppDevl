package com.iamneo.security.controller;

import java.util.List;

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

import com.iamneo.security.entity.Work;
import com.iamneo.security.service.WorkService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/auth/works")
public class WorkController {

    private final WorkService workService;

    @Autowired
    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    @GetMapping
    public List<Work> getAllWorks() {
        return workService.getAllWorks();
    }

    @GetMapping("/{workId}")
    public Work getWorkById(@PathVariable int workId) {
        return workService.getWorkById(workId).orElse(null);
    }

    @PostMapping
    public String addWork(@RequestBody Work work) {
        return workService.saveWork(work);
    }

    @PutMapping("/{workId}")
    public Work updateWork(@PathVariable int workId, @RequestBody Work work) {
        return workService.updateWork(workId, work);
    }

    @DeleteMapping("/{workId}")
    public void deleteWork(@PathVariable int workId) {
        workService.deleteWork(workId);
    }
}
