package com.iamneo.security.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Empall;
import com.iamneo.security.repository.EmpallRepository;

@Service
public class EmpallService {

    private final EmpallRepository empallRepository;

    @Autowired
    public EmpallService(EmpallRepository empallRepository) {
        this.empallRepository = empallRepository;
    }

    public String saveEmpall(Empall empall) {
        empallRepository.save(empall);
        return "true";
    }

    public List<Empall> getAllEmpalls() {
        return empallRepository.findAll();
    }

    public Optional<Empall> getEmpallById(int empId) {
        return empallRepository.findById(empId);
    }

    public Empall updateEmpall(int empId, Empall empall) {
        Optional<Empall> existingEmpall = empallRepository.findById(empId);
        if (existingEmpall.isPresent()) {
            Empall updatedEmpall = existingEmpall.get();
            // Update any specific attributes of Empall entity if needed
            // e.g., updatedEmpall.setSomeAttribute(empall.getSomeAttribute());
            return empallRepository.save(updatedEmpall);
        }
        return null;
    }

    public void deleteEmpall(int empId) {
        empallRepository.deleteById(empId);
    }
    
    public List<Object[]> getEmployeesWithSpecificFieldsByDeptName(String deptName) {
        return empallRepository.getEmployeesWithSpecificFieldsByDeptName(deptName);
    }
}
