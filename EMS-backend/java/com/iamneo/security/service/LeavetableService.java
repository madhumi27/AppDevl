package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Leavetable;
import com.iamneo.security.repository.LeavetableRepository;

@Service
public class LeavetableService {

    private final LeavetableRepository leavetableRepository;

    @Autowired
    public LeavetableService(LeavetableRepository leavetableRepository) {
        this.leavetableRepository = leavetableRepository;
    }

    public List<Leavetable> getAllLeavetables() {
        return leavetableRepository.findAll();
    }

    public Leavetable getLeavetableById(int leaveId) {
        return leavetableRepository.findById(leaveId).orElse(null);
    }

    public Leavetable saveLeavetable(Leavetable leavetable) {
        return leavetableRepository.save(leavetable);
    }

    public void deleteLeavetableById(int leaveId) {
        leavetableRepository.deleteById(leaveId);
    }
}
