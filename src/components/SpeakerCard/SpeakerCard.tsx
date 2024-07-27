import React from 'react';
import './SpeakerCard.css';

const SpeakerCard = ({ speaker }: {speaker: any}) => {
  return (
    <div className="speaker-card">
      <div className="speaker-image-container">
        <img src={speaker.image} alt={`${speaker.name} profile`} className="speaker-image" />
      </div>
      <div className="speaker-details">
        <p className="name">{speaker.name}</p>
        <p className="designation">{speaker.designation}</p>
        <p className="company">{speaker.company}</p>
        <div className="social-links">
          {speaker.facebookUrl && (
            <a href={speaker.facebookUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://dev.konfhub.com/img/facebook01.svg" alt="Facebook" />
            </a>
          )}
          {speaker.twitterUrl && (
            <a href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://dev.konfhub.com/img/twitter-mini.svg" alt="Twitter" />
            </a>
          )}
          {speaker.linkedinUrl && (
            <a href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://dev.konfhub.com/img/linkedin01.svg" alt="LinkedIn" />
            </a>
          )}
          {speaker.websiteUrl && (
            <a href={speaker.websiteUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://dev.konfhub.com/img/Website01.svg" alt="Website" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
