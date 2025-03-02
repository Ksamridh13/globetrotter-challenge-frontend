package com.globetrotter.controller;

import com.globetrotter.model.User;
import com.globetrotter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/share")
public class ShareController {

    private final UserService userService;

    @Autowired
    public ShareController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/generate/{username}")
    public ResponseEntity<?> generateShareImage(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        
        // In a real application, you would generate an actual image here
        // For this demo, we'll just return a URL to a placeholder image
        Map<String, Object> response = new HashMap<>();
        String imageUrl = "https://via.placeholder.com/800x400?text=Challenge+from+" + 
                username + "+-+Score:+" + user.getCorrectAnswers() + "/" + 
                (user.getCorrectAnswers() + user.getIncorrectAnswers());
        
        response.put("imageUrl", imageUrl);
        response.put("username", username);
        response.put("correctAnswers", user.getCorrectAnswers());
        response.put("incorrectAnswers", user.getIncorrectAnswers());
        
        return ResponseEntity.ok(response);
    }
}