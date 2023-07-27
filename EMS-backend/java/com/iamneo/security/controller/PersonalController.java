package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Personal;
import com.iamneo.security.service.PersonalService;

@RestController
@RequestMapping("/api/personals")
public class PersonalController {

    private final PersonalService personalService;

    @Autowired
    public PersonalController(PersonalService personalService) {
        this.personalService = personalService;
    }

    @GetMapping
    public List<Personal> getAllPersonals() {
        return personalService.getAllPersonals();
    }

    @GetMapping("/{personalId}")
    public Personal getPersonalById(@PathVariable int personalId) {
        return personalService.getPersonalById(personalId).orElse(null);
    }

    @PostMapping
    public String addPersonal(@RequestBody Personal personal) {
        return personalService.savePersonal(personal);
    }

    @PutMapping("/{personalId}")
    public Personal updatePersonal(@PathVariable int personalId, @RequestBody Personal personal) {
        return personalService.updatePersonal(personalId, personal);
    }

    @DeleteMapping("/{personalId}")
    public String deletePersonal(@PathVariable int personalId) {
        return personalService.deletePersonal(personalId);
    }
    
    @GetMapping("/departments/{deptName}")
    public List<Object[]> getEmployeesByDepartment(@PathVariable String deptName) {
        return personalService.getEmployeeDetailsByDeptName(deptName);
    }
    
    
}
