package com.globetrotter.service;

import com.globetrotter.model.User;
import com.globetrotter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(String username) {
        User user = new User();
        user.setUsername(username);
        user.setCorrectAnswers(0);
        user.setIncorrectAnswers(0);
        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findById(username).orElse(null);
    }

    public User updateUserScore(String username, boolean isCorrect) {
        User user = userRepository.findById(username).orElse(new User(username, 0, 0));
        
        if (isCorrect) {
            user.setCorrectAnswers(user.getCorrectAnswers() + 1);
        } else {
            user.setIncorrectAnswers(user.getIncorrectAnswers() + 1);
        }
        
        return userRepository.save(user);
    }
}