import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { fetchDestination, updateUserScore } from '../services/api';

const Game = ({ score, setScore, username }) => {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/');
      return;
    }
    
    loadNewDestination();
  }, [username, navigate]);

  const loadNewDestination = async () => {
    setLoading(true);
    setShowFeedback(false);
    setSelectedOption(null);
    
    try {
      const data = await fetchDestination();
      setDestination(data);
    } catch (error) {
      console.error('Error loading destination:', error);
      // Use mock data for demonstration if API fails
      setDestination(getMockDestination());
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = async (option) => {
    setSelectedOption(option);
    const correct = option === destination.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Update score
      setScore(prev => ({
        ...prev,
        correct: prev.correct + 1
      }));
    } else {
      // Update score for incorrect answer
      setScore(prev => ({
        ...prev,
        incorrect: prev.incorrect + 1
      }));
    }
    
    // Update score in the backend
    try {
      await updateUserScore(username, correct);
    } catch (error) {
      console.error('Error updating score:', error);
    }
    
    setShowFeedback(true);
  };

  const handleNextDestination = () => {
    loadNewDestination();
  };

  const handleChallengeFriend = () => {
    navigate(`/challenge/${username}`);
  };

  if (loading) {
    return <div className="game-container"><p>Loading your destination...</p></div>;
  }

  return (
    <div className="game-container">
      <div className="header">
        <h1 className="logo">Globetrotter Challenge</h1>
        <p className="tagline">Hello, {username}!</p>
      </div>
      
      <div className="score-display">
        <span className="correct-score">Correct: {score.correct}</span>
        <span className="incorrect-score">Incorrect: {score.incorrect}</span>
      </div>
      
      {!showFeedback ? (
        <>
          <div className="card clue-card">
            <h2>Guess the Destination</h2>
            {destination.clues.map((clue, index) => (
              <p key={index} className="clue-text">{clue}</p>
            ))}
          </div>
          
          <div className="options-container">
            {destination.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="feedback-container">
          <h2 className={`feedback-title ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
            {isCorrect ? 'Correct! 🎉' : 'Incorrect 😢'}
          </h2>
          
          <div className="card">
            <h3>The correct answer is: {destination.correctAnswer}</h3>
            <p className="fun-fact">{destination.funFact}</p>
            <p>{destination.trivia}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleNextDestination}>
              Next Destination
            </button>
            <button className="btn btn-accent" onClick={handleChallengeFriend}>
              Challenge a Friend
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Mock data for demonstration (fallback if API fails)
const getMockDestination = () => {
  const destinations = [
    {
      id: 1,
      clues: [
        "I am home to one of the Seven Wonders of the World.",
        "My ancient civilization built massive pyramids."
      ],
      options: ["Egypt", "Mexico", "Greece", "China"],
      correctAnswer: "Egypt",
      funFact: "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World and the only one that remains largely intact.",
      trivia: "Ancient Egyptians believed that cats were sacred animals and symbols of grace."
    },
    {
      id: 2,
      clues: [
        "I am known as the 'Land of the Rising Sun'.",
        "Cherry blossoms are an important cultural symbol in my country."
      ],
      options: ["China", "South Korea", "Japan", "Thailand"],
      correctAnswer: "Japan",
      funFact: "Japan consists of 6,852 islands.",
      trivia: "Slurping noodles is considered polite in Japan as it shows you're enjoying your meal."
    },
    {
      id: 3,
      clues: [
        "I am home to the world's tallest building.",
        "I transformed from a desert to a futuristic city in just a few decades."
      ],
      options: ["Qatar", "Saudi Arabia", "United Arab Emirates", "Kuwait"],
      correctAnswer: "United Arab Emirates",
      funFact: "The Burj Khalifa in Dubai is so tall that you can watch the sunset from the base of the building, then take the elevator to the top and watch the same sunset again.",
      trivia: "Dubai has indoor ski slopes despite being in one of the hottest regions in the world."
    }
  ];
  
  return destinations[Math.floor(Math.random() * destinations.length)];
};

export default Game;