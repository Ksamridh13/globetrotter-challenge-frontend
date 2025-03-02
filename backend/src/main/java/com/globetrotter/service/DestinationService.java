package com.globetrotter.service;

import com.globetrotter.model.Destination;
import com.globetrotter.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DestinationService {

    private final DestinationRepository destinationRepository;

    @Autowired
    public DestinationService(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    public Destination getRandomDestination() {
        return destinationRepository.findRandomDestination();
    }
}