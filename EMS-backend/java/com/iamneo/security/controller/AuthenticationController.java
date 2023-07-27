package com.iamneo.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.dto.request.AuthenticationRequest;
import com.iamneo.security.dto.request.RegisterRequest;
import com.iamneo.security.dto.response.AuthenticationResponse;
import com.iamneo.security.entity.User;
import com.iamneo.security.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    
    @GetMapping("/getUserByEmail")
    public ResponseEntity<Long> getUserByEmail(@RequestParam String email) {
        User user=authenticationService.getUserByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user.getId());
        } else {
            // If user not found, return an appropriate response, e.g., 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<User> getEmployeeDetails(@PathVariable Long id) {
      User employee = authenticationService.getUserById(id);
      if (employee != null) {
        return ResponseEntity.ok(employee);
      } else {
        // If employee not found, return an appropriate response, e.g., 404 Not Found
        return ResponseEntity.notFound().build();
      }
    }
}
