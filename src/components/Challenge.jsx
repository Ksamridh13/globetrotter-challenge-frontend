// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
//
// const Challenge = () => {
//     const { inviterId } = useParams();
//     const [inviterScore, setInviterScore] = useState(null);
//     const [inviteLink, setInviteLink] = useState('');
//
//     useEffect(() => {
//         if (inviterId) {
//             axios.get(`http://localhost:8080/api/users/score/${inviterId}`)
//                 .then(response => setInviterScore(response.data.score))
//                 .catch(error => console.error('Error fetching score:', error));
//         }
//     }, [inviterId]);
//
//     const generateInviteLink = () => {
//         const link = `${window.location.origin}/challenge/${inviterId}`;
//         setInviteLink(link);
//     };
//
//     const shareOnWhatsApp = () => {
//         const text = `Join me in this challenge! My score: ${inviterScore}. Play now: ${inviteLink}`;
//         window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
//     };
//
//     return (
//         <div>
//             <h2>Challenge a Friend</h2>
//             {inviterScore !== null && <p>Inviter's Score: {inviterScore}</p>}
//             <button onClick={generateInviteLink}>Generate Invite Link</button>
//             {inviteLink && (
//                 <div>
//                     <p>Share this link: <a href={inviteLink} target="_blank" rel="noopener noreferrer">{inviteLink}</a></p>
//                     <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Challenge;

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
// import "../styles/Challenge.css";

const Challenge = () => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(100); // Example score, replace with actual score logic

  const inviteLink = `https://yourgame.com/play?inviter=${username}&score=${score}`;

  const shareOnWhatsApp = () => {
    const message = `I've scored ${score} points! Can you beat me? Play now: ${inviteLink}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="challenge-container">
      <h2 className="challenge-title">🎉 Challenge a Friend</h2>
      <p className="challenge-description">Enter your username and invite your friends to beat your score!</p>
      <input
        type="text"
        className="challenge-input"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="challenge-btn" onClick={shareOnWhatsApp} disabled={!username}>
        <FaWhatsapp className="whatsapp-icon" /> Challenge a Friend
      </button>
    </div>
  );
};

export default Challenge;

// import React, { useState, useEffect } from "react";
// import { FaWhatsapp, FaCopy } from "react-icons/fa";
// import { generateShareImage } from "../services/api";
// import "../App.css";
// import "../index.css";
//
// const Challenge = () => {
//   const [username, setUsername] = useState("");
//   const [score, setScore] = useState(100); // Example score, replace with actual logic
//   const [inviteLink, setInviteLink] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     if (username) {
//       const link = `${window.location.origin}/play?inviter=${username}&score=${score}`;
//       setInviteLink(link);
//     }
//   }, [username, score]);

//   const generateImage = async () => {
//     setLoading(true);
//     try {
//       const image = await generateShareImage(username, score);
//       setImageUrl(image);
//     } catch (error) {
//       console.error("Error generating image:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

// const generateImage = async () => {
//   setLoading(true);
//   try {
//     console.log("Generating image for:", username, score); // Debugging
//     const image = await generateShareImage(username, score);
//     if (image) {
//       setImageUrl(image);
//       console.log("Generated Image URL:", image); // Debugging
//     } else {
//       console.error("No image received");
//     }
//   } catch (error) {
//     console.error("Error generating image:", error);
//   } finally {
//     setLoading(false);
//   }
// };
//
//
//   const shareOnWhatsApp = () => {
//     const message = `I've scored ${score} points! Can you beat me? Play now: ${inviteLink}`;
//     window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, "_blank");
//   };
//
//   const copyLink = () => {
//     navigator.clipboard.writeText(inviteLink)
//       .then(() => alert("Link copied to clipboard!"))
//       .catch((err) => console.error("Error copying link:", err));
//   };
//
//   return (
//     <div className="challenge-container">
//       <h2 className="challenge-title">🎉 Challenge a Friend</h2>
//       <p className="challenge-description">Enter your username and invite friends to beat your score!</p>
//       <input
//         type="text"
//         className="challenge-input"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button className="challenge-btn" onClick={generateImage} disabled={!username || loading}>
//         {loading ? "Generating..." : "Generate Invite Image"}
//       </button>
//       {imageUrl && <img src={imageUrl} alt="Challenge Share" className="challenge-image" />}
//       {inviteLink && (
//         <div className="share-actions">
//           <button className="challenge-btn whatsapp" onClick={shareOnWhatsApp}>
//             <FaWhatsapp /> Share on WhatsApp
//           </button>
//           <button className="challenge-btn copy" onClick={copyLink}>
//             <FaCopy /> Copy Link
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default Challenge;

// import React, { useState, useRef } from "react";
// import { FaWhatsapp, FaCopy } from "react-icons/fa";
// import "../App.css";
// import "../index.css";
//
// const Challenge = () => {
//   const [username, setUsername] = useState("");
//   const [score, setScore] = useState(100); // Example score
//   const [inviteLink, setInviteLink] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const canvasRef = useRef(null);
//
//   const generateImage = () => {
//     if (!username) {
//       alert("Please enter a username first.");
//       return;
//     }
//
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//
//     // Set canvas background color
//     ctx.fillStyle = "teal"; // White background
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//
//     // Add text
//     ctx.fillStyle = "#333"; // Dark text color
//     ctx.font = "bold 24px Arial";
//     ctx.fillText("Challenge from:", 50, 80);
//     ctx.fillText(username, 50, 120);
//     ctx.fillText(`Score: ${score}`, 50, 160);
//
//     // Convert canvas to image URL
//     const imageDataUrl = canvas.toDataURL("image/png");
//     setImageUrl(imageDataUrl);
//
//     // Generate invite link
//     setInviteLink(`${window.location.origin}/play?inviter=${username}&score=${score}`);
//   };
//
//   const shareOnWhatsApp = () => {
//     if (!inviteLink) return;
//     const message = `I've scored ${score} points! Can you beat me? Play now: ${inviteLink}`;
//     window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, "_blank");
//   };
//
//   const copyLink = () => {
//     if (!inviteLink) return;
//     navigator.clipboard.writeText(inviteLink).then(() => alert("Link copied to clipboard!"));
//   };
//
//   return (
//     <div className="challenge-container">
//       <h2 className="challenge-title">🎉 Challenge a Friend</h2>
//       <p className="challenge-description">Enter your username and invite friends to beat your score!</p>
//
//       <input
//         type="text"
//         className="challenge-input"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//
//       <button className="challenge-btn" onClick={generateImage} disabled={!username}>
//         Generate Invite Image
//       </button>
//
//       {/* Hidden Canvas for Image Generation */}
//       <canvas ref={canvasRef} width={400} height={200} style={{ display: "none" }} />
//
//       {/* Show Generated Image */}
//       {imageUrl && <img src={imageUrl} alt="Challenge Invite" className="challenge-image" />}
//
//       {/* Share Options */}
//       {inviteLink && (
//         <div className="share-actions">
//           <button className="challenge-btn whatsapp" onClick={shareOnWhatsApp}>
//             <FaWhatsapp /> Share on WhatsApp
//           </button>
//           <button className="challenge-btn copy" onClick={copyLink}>
//             <FaCopy /> Copy Link
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default Challenge;
