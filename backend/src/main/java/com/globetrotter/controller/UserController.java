package com.globetrotter.controller;

import com.globetrotter.model.User;
import com.globetrotter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        User user = userService.registerUser(username);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUserScore(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        
        Map<String, Integer> scoreMap = new HashMap<>();
        scoreMap.put("correct", user.getCorrectAnswers());
        scoreMap.put("incorrect", user.getIncorrectAnswers());
        
        return ResponseEntity.ok(scoreMap);
    }

    @PostMapping("/{username}/score")
    public ResponseEntity<User> updateUserScore(
            @PathVariable String username,
            @RequestBody Map<String, Boolean> request) {
        
        boolean isCorrect = request.get("isCorrect");
        User updatedUser = userService.updateUserScore(username, isCorrect);
        return ResponseEntity.ok(updatedUser);
    }
}