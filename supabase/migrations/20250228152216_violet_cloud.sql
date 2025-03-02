-- Initial destinations data
INSERT INTO destination (id, correct_answer, fun_fact, trivia) VALUES 
(1, 'Egypt', 'The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World and the only one that remains largely intact.', 'Ancient Egyptians believed that cats were sacred animals and symbols of grace.');

INSERT INTO destination_clues (destination_id, clues) VALUES 
(1, 'I am home to one of the Seven Wonders of the World.'),
(1, 'My ancient civilization built massive pyramids.');

INSERT INTO destination_options (destination_id, options) VALUES 
(1, 'Egypt'),
(1, 'Mexico'),
(1, 'Greece'),
(1, 'China');

INSERT INTO destination (id, correct_answer, fun_fact, trivia) VALUES 
(2, 'Japan', 'Japan consists of 6,852 islands.', 'Slurping noodles is considered polite in Japan as it shows you''re enjoying your meal.');

INSERT INTO destination_clues (destination_id, clues) VALUES 
(2, 'I am known as the ''Land of the Rising Sun''.'),
(2, 'Cherry blossoms are an important cultural symbol in my country.');

INSERT INTO destination_options (destination_id, options) VALUES 
(2, 'China'),
(2, 'South Korea'),
(2, 'Japan'),
(2, 'Thailand');

INSERT INTO destination (id, correct_answer, fun_fact, trivia) VALUES 
(3, 'United Arab Emirates', 'The Burj Khalifa in Dubai is so tall that you can watch the sunset from the base of the building, then take the elevator to the top and watch the same sunset again.', 'Dubai has indoor ski slopes despite being in one of the hottest regions in the world.');

INSERT INTO destination_clues (destination_id, clues) VALUES 
(3, 'I am home to the world''s tallest building.'),
(3, 'I transformed from a desert to a futuristic city in just a few decades.');

INSERT INTO destination_options (destination_id, options) VALUES 
(3, 'Qatar'),
(3, 'Saudi Arabia'),
(3, 'United Arab Emirates'),
(3, 'Kuwait');

INSERT INTO destination (id, correct_answer, fun_fact, trivia) VALUES 
(4, 'Venice', 'Venice is sinking at a rate of 1-2 millimeters per year.', 'There are no cars or roads in Venice, just canals and boats.');

INSERT INTO destination_clues (destination_id, clues) VALUES 
(4, 'I am known for my canals and gondolas.'),
(4, 'My city is built on more than 100 small islands.');

INSERT INTO destination_options (destination_id, options) VALUES 
(4, 'Amsterdam'),
(4, 'Venice'),
(4, 'Bangkok'),
(4, 'Stockholm');

INSERT INTO destination (id, correct_answer, fun_fact, trivia) VALUES 
(5, 'Rio de Janeiro', 'The Christ the Redeemer statue is struck by lightning several times a year.', 'Rio de Janeiro means ''January River'' in Portuguese, although there is no river there.');

INSERT INTO destination_clues (destination_id, clues) VALUES 
(5, 'I am home to the famous Christ the Redeemer statue.'),
(5, 'My beaches like Copacabana and Ipanema are world-renowned.');

INSERT INTO destination_options (destination_id, options) VALUES 
(5, 'Rio de Janeiro'),
(5, 'Buenos Aires'),
(5, 'Lima'),
(5, 'Santiago');