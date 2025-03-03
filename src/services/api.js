import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
fetch(`${API_BASE_URL}/api/some-endpoint`)


// Destination API
export const fetchDestination = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destination:', error);
    throw error;
  }
};

// User API
export const registerUser = async (username) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, { username });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const updateUserScore = async (username, isCorrect) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${username}/score`, { isCorrect });
    return response.data;
  } catch (error) {
    console.error('Error updating user score:', error);
    throw error;
  }
};

export const getUserScore = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user score:', error);
    throw error;
  }
};

// Share API
export const generateShareImage = async (username, score) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/share/generate/${username}`);
    return response.data.imageUrl;
  } catch (error) {
    console.error('Error generating share image:', error);
    // Fallback to placeholder if API fails
    return `https://via.placeholder.com/800x400?text=Challenge+from+${username}+-+Score:+${score.correct}/${score.correct + score.incorrect}`;
  }
};