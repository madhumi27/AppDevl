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

import com.iamneo.security.entity.Meetings;
import com.iamneo.security.service.MeetingsService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/auth/meetings")
public class MeetingsController {

    private final MeetingsService meetingsService;

    @Autowired
    public MeetingsController(MeetingsService meetingsService) {
        this.meetingsService = meetingsService;
    }

    @GetMapping
    public ResponseEntity<List<Meetings>> getAllMeetings() {
        List<Meetings> meetings = meetingsService.getAllMeetings();
        return new ResponseEntity<>(meetings, HttpStatus.OK);
    }

    @GetMapping("/{meetingId}")
    public ResponseEntity<Meetings> getMeetingById(@PathVariable int meetingId) {
        Meetings meeting = meetingsService.getMeetingById(meetingId);
        if (meeting != null) {
            return new ResponseEntity<>(meeting, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/employee/{empId}")
    public ResponseEntity<List<Meetings>> getAllMeetingsByEmpId(@PathVariable int empId) {
        List<Meetings> meetings = meetingsService.getAllMeetingsByEmpId(empId);
        return new ResponseEntity<>(meetings, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Meetings> saveMeeting(@RequestBody Meetings meeting) {
        Meetings savedMeeting = meetingsService.saveMeeting(meeting);
        return new ResponseEntity<>(savedMeeting, HttpStatus.CREATED);
    }

    @DeleteMapping("/{meetingId}")
    public ResponseEntity<Void> deleteMeeting(@PathVariable int meetingId) {
        meetingsService.deleteMeeting(meetingId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
