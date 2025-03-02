package com.globetrotter.model;

import com.globetrotter.model.Destination;
import com.globetrotter.model.User;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "app_user") // 'user' is a reserved keyword in some databases
@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class User {

    @Id
    private String username;
    
    private int correctAnswers;
    
    private int incorrectAnswers;

    public User() {}

    public User(String username, int correctAnswers, int incorrectAnswers) {
        this.username = username;
        this.correctAnswers = correctAnswers;
        this.incorrectAnswers = incorrectAnswers;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    public void setCorrectAnswers(int correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public int getIncorrectAnswers() {
        return incorrectAnswers;
    }

    public void setIncorrectAnswers(int incorrectAnswers) {
        this.incorrectAnswers = incorrectAnswers;
    }
}