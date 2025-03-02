import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import Challenge from './components/Challenge';

function App() {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={<Home username={username} setUsername={setUsername} />} 
          />
          <Route 
            path="/game" 
            element={<Game score={score} setScore={setScore} username={username} />} 
          />
          <Route 
            path="/challenge/:inviterId" 
            element={<Challenge setUsername={setUsername} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;