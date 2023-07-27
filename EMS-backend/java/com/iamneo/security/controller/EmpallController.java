package com.iamneo.security.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Empall;
import com.iamneo.security.service.EmpallService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/auth/empalls")
public class EmpallController {

    private final EmpallService empallService;

    @Autowired
    public EmpallController(EmpallService empallService) {
        this.empallService = empallService;
    }

    @GetMapping
    public List<Empall> getAllEmpalls() {
        return empallService.getAllEmpalls();
    }

    @GetMapping("/{empId}")
    public Empall getEmpallById(@PathVariable int empId) {
        return empallService.getEmpallById(empId).orElse(null);
    }

    @PostMapping
    public String addEmpall(@RequestBody Empall empall) {
        return empallService.saveEmpall(empall);
    }

    @PutMapping("/{empId}")
    public Empall updateEmpall(@PathVariable int empId, @RequestBody Empall empall) {
        return empallService.updateEmpall(empId, empall);
    }

    @DeleteMapping("/{empId}")
    public void deleteEmpall(@PathVariable int empId) {
        empallService.deleteEmpall(empId);
    }
    
    @GetMapping("/department/{deptName}")
    public ResponseEntity<List<Object[]>> getEmployeesWithSpecificFieldsByDeptName(@PathVariable String deptName) {
        List<Object[]> employees = empallService.getEmployeesWithSpecificFieldsByDeptName(deptName);
        return ResponseEntity.ok(employees);
    }
   
}
