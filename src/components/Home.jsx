import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const Home = ({ username, setUsername }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username to continue');
      return;
    }
    
    setLoading(true);
    try {
      // Register the user with the backend
      await registerUser(username);
      navigate('/game');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="logo">Globetrotter Challenge</h1>
        <p className="tagline">The Ultimate Travel Guessing Game!</p>
      </div>
      
      <div className="card welcome-card">
        <h2>Welcome, Traveler!</h2>
        <p>Test your knowledge of famous destinations around the world. Guess correctly to unlock fun facts and trivia!</p>
        
        <form onSubmit={handleSubmit} className="form-group" style={{ marginTop: '2rem' }}>
          <label htmlFor="username" className="form-label">Choose your traveler name:</label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            disabled={loading}
          />
          {error && <p style={{ color: 'var(--error-color)', marginTop: '0.5rem' }}>{error}</p>}
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ marginTop: '1.5rem', width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Starting Journey...' : 'Start Your Journey'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;