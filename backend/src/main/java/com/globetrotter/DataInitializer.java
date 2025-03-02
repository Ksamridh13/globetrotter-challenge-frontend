package com.globetrotter;

import com.globetrotter.model.Destination;
import com.globetrotter.repository.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final DestinationRepository destinationRepository;

    @Autowired
    public DataInitializer(DestinationRepository destinationRepository) {
        this.destinationRepository = destinationRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Only initialize if the database is empty
        if (destinationRepository.count() == 0) {
            initializeDestinations();
        }
    }

    private void initializeDestinations() {
        // Destination 1: Egypt
        Destination egypt = new Destination();
        egypt.setCorrectAnswer("Egypt");
        egypt.setClues(Arrays.asList(
                "I am home to one of the Seven Wonders of the World.",
                "My ancient civilization built massive pyramids."
        ));
        egypt.setOptions(Arrays.asList("Egypt", "Mexico", "Greece", "China"));
        egypt.setFunFact("The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World and the only one that remains largely intact.");
        egypt.setTrivia("Ancient Egyptians believed that cats were sacred animals and symbols of grace.");

        // Destination 2: Japan
        Destination japan = new Destination();
        japan.setCorrectAnswer("Japan");
        japan.setClues(Arrays.asList(
                "I am known as the 'Land of the Rising Sun'.",
                "Cherry blossoms are an important cultural symbol in my country."
        ));
        japan.setOptions(Arrays.asList("China", "South Korea", "Japan", "Thailand"));
        japan.setFunFact("Japan consists of 6,852 islands.");
        japan.setTrivia("Slurping noodles is considered polite in Japan as it shows you're enjoying your meal.");

        // Destination 3: UAE
        Destination uae = new Destination();
        uae.setCorrectAnswer("United Arab Emirates");
        uae.setClues(Arrays.asList(
                "I am home to the world's tallest building.",
                "I transformed from a desert to a futuristic city in just a few decades."
        ));
        uae.setOptions(Arrays.asList("Qatar", "Saudi Arabia", "United Arab Emirates", "Kuwait"));
        uae.setFunFact("The Burj Khalifa in Dubai is so tall that you can watch the sunset from the base of the building, then take the elevator to the top and watch the same sunset again.");
        uae.setTrivia("Dubai has indoor ski slopes despite being in one of the hottest regions in the world.");

        // Destination 4: Venice
        Destination venice = new Destination();
        venice.setCorrectAnswer("Venice");
        venice.setClues(Arrays.asList(
                "I am known for my canals and gondolas.",
                "My city is built on more than 100 small islands."
        ));
        venice.setOptions(Arrays.asList("Amsterdam", "Venice", "Bangkok", "Stockholm"));
        venice.setFunFact("Venice is sinking at a rate of 1-2 millimeters per year.");
        venice.setTrivia("There are no cars or roads in Venice, just canals and boats.");

        // Destination 5: Rio de Janeiro
        Destination rio = new Destination();
        rio.setCorrectAnswer("Rio de Janeiro");
        rio.setClues(Arrays.asList(
                "I am home to the famous Christ the Redeemer statue.",
                "My beaches like Copacabana and Ipanema are world-renowned."
        ));
        rio.setOptions(Arrays.asList("Rio de Janeiro", "Buenos Aires", "Lima", "Santiago"));
        rio.setFunFact("The Christ the Redeemer statue is struck by lightning several times a year.");
        rio.setTrivia("Rio de Janeiro means 'January River' in Portuguese, although there is no river there.");

        // Save all destinations
        destinationRepository.saveAll(Arrays.asList(egypt, japan, uae, venice, rio));
    }
}