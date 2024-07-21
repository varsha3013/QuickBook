package com.sgt.booking.web;


import com.sgt.booking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowCredentials="true")

public class UserResource {

    @Autowired
    UserService userService;

    @Autowired
    JdbcTemplate jdbcTemplate;

    @PostMapping("/register")
    public ResponseEntity<Map<String,String>> registerUser(@RequestBody Map<String,Object> body)
    {
        return userService.registerUser(body);
    }


    @PostMapping("/login")
    public Map<String,Object> LoginUser(@RequestBody Map<String,Object> body)
    {
        return userService.loginUser(body);
    }

    @PostMapping("/cleaning")
    public ResponseEntity<String> insertBooking(@RequestBody Map<String,Object> body)
    {
        return userService.insertBooking(body);
    }

    @PostMapping("/register-worker")
    public ResponseEntity<Map<String,String>> registerWorker(@RequestBody Map<String,Object> body)
    {
        return userService.registerWorker(body);
    }
}
