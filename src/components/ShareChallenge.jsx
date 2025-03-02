import { useState, useEffect } from 'react';
import { generateShareImage } from '../services/api';

const ShareChallenge = ({ username, score }) => {
  const [shareUrl, setShareUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateShare = async () => {
      try {
        // Generate the challenge URL
        const baseUrl = window.location.origin;
        const challengeUrl = `${baseUrl}/challenge/${username}`;
        setShareUrl(challengeUrl);
        
        // Generate share image
        const image = await generateShareImage(username, score);
        setImageUrl(image);
      } catch (error) {
        console.error('Error generating share:', error);
      } finally {
        setLoading(false);
      }
    };
    
    generateShare();
  }, [username, score]);

  const handleWhatsAppShare = () => {
    const text = `I scored ${score.correct} out of ${score.correct + score.incorrect} in the Globetrotter Challenge! Can you beat me? Play here: ${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        alert('Challenge link copied to clipboard!');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  if (loading) {
    return <div className="share-container"><p>Generating your challenge...</p></div>;
  }

  return (
    <div className="share-container">
      <h2>Challenge Your Friends!</h2>
      <p>Share your score and challenge your friends to beat it.</p>
      
      {imageUrl && (
        <img src={imageUrl} alt="Challenge Share" className="share-image" />
      )}
      
      <div className="share-buttons">
        <button className="btn whatsapp-btn" onClick={handleWhatsAppShare}>
          Share on WhatsApp
        </button>
        <button className="btn btn-secondary" onClick={handleCopyLink}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareChallenge;