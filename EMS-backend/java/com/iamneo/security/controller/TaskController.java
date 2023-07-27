package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.iamneo.security.entity.Task;
import com.iamneo.security.service.TaskService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/auth/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Optional<Task> getTaskById(@PathVariable int id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public String addTask(@RequestBody Task task) {
        return taskService.addTask(task);
    }

    @PutMapping("/{id}")
    public void updateTask(@PathVariable int id, @RequestBody Task task) {
        Task existingTask = taskService.getTaskById(id).orElse(null);
        if (existingTask != null) {
            // Update the existing task with the new data
            existingTask.setTitle(task.getTitle());
            existingTask.setAssignedBy(task.getAssignedBy());
            existingTask.setDueDate(task.getDueDate());
            existingTask.setAttachment(task.getAttachment());
            existingTask.setEmpId(task.getEmpId());
            taskService.updateTask(existingTask);
        }
    }
    @GetMapping("/employee/{empId}")
    public ResponseEntity<List<Task>> getAllTasksByEmpId(@PathVariable int empId) {
        List<Task> tasks = taskService.getAllTasksByEmpId(empId);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskService.deleteTask(id);
    }
}
