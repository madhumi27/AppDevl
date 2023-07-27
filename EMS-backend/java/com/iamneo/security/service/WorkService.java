package com.iamneo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Work;
import com.iamneo.security.repository.WorkRepository;

@Service
public class WorkService {

    private final WorkRepository workRepository;

    @Autowired
    public WorkService(WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    public String saveWork(Work work) {
        workRepository.save(work);
        return "true";
    }

    public List<Work> getAllWorks() {
        return workRepository.findAll();
    }

    public Optional<Work> getWorkById(int workId) {
        return workRepository.findById(workId);
    }

    public Work updateWork(int workId, Work work) {
        Optional<Work> existingWork = workRepository.findById(workId);
        if (existingWork.isPresent()) {
            Work updatedWork = existingWork.get();
            updatedWork.setDeptName(work.getDeptName());
            updatedWork.setPosition(work.getPosition());
            updatedWork.setTeam(work.getTeam());
            updatedWork.setHireDate(work.getHireDate());
            updatedWork.setSalary(work.getSalary());
            return workRepository.save(updatedWork);
        }
        return null;
    }

    public void deleteWork(int workId) {
        workRepository.deleteById(workId);
    }
}
