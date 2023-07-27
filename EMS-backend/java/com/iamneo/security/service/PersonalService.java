package com.iamneo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Personal;
import com.iamneo.security.repository.PersonalRepository;

@Service
public class PersonalService {

    private final PersonalRepository personalRepository;

    @Autowired
    public PersonalService(PersonalRepository personalRepository) {
        this.personalRepository = personalRepository;
    }

    public String savePersonal(Personal personal) {
        personalRepository.save(personal);
        return "true";
    }

    public List<Personal> getAllPersonals() {
        return personalRepository.findAll();
    }

    public Optional<Personal> getPersonalById(int personalId) {
        return personalRepository.findById(personalId);
    }

    public Personal updatePersonal(int personalId, Personal personal) {
        Optional<Personal> existingPersonal = personalRepository.findById(personalId);
        if (existingPersonal.isPresent()) {
            Personal updatedPersonal = existingPersonal.get();
            updatedPersonal.setFirstName(personal.getFirstName());
            updatedPersonal.setLastName(personal.getLastName());
            updatedPersonal.setDob(personal.getDob());
            updatedPersonal.setGender(personal.getGender());
            updatedPersonal.setMaritalStatus(personal.getMaritalStatus());
            return personalRepository.save(updatedPersonal);
        }
        return null;
    }

    public String deletePersonal(int personalId) {
        personalRepository.deleteById(personalId);
        return "deleted";
    }
    
    public List<Object[]> getEmployeeDetailsByDeptName(String deptName) {
        return personalRepository.getEmployeeDetailsByDeptName(deptName);
    }
}
