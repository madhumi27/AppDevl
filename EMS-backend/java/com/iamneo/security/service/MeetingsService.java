package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Meetings;
import com.iamneo.security.repository.MeetingsRepository;

@Service
public class MeetingsService {

    private final MeetingsRepository meetingsRepository;

    @Autowired
    public MeetingsService(MeetingsRepository meetingsRepository) {
        this.meetingsRepository = meetingsRepository;
    }

    public List<Meetings> getAllMeetings() {
        return meetingsRepository.findAll();
    }

    public Meetings getMeetingById(int meetingId) {
        return meetingsRepository.findById(meetingId).orElse(null);
    }

    public List<Meetings> getAllMeetingsByEmpId(int empId) {
        return meetingsRepository.findByEmpId(empId);
    }
    public Meetings saveMeeting(Meetings meeting) {
        return meetingsRepository.save(meeting);
    }

    public void deleteMeeting(int meetingId) {
        meetingsRepository.deleteById(meetingId);
    }
}
