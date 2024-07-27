import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }: {ticket: any}) => {
  return (
    <div className="ticket-card">
      <div className="title-section">
        <div className="name-section">
          <p className="ticket-name">{ticket.name}</p>
        </div>
        <div className="desc-section">
          <p className="ticket-desc">{ticket.description}</p>
        </div>
        <a href={ticket.locationUrl} target="_blank" rel="noopener noreferrer" className="location-link">
          <i className="fa-solid fa-location-dot location-icon"></i>{ticket.location}
        </a>
        <div className="venue-details">
          <p>{ticket.venueDetails}</p>
        </div>
      </div>
      <div className="availability">
        <p>Available Till: {ticket.availability}</p>
      </div>
      <div className="footer">
        <p className="ticket-price">{ticket.price}</p>
        <div className="register-button-container">
          <a href={ticket.registerUrl} className="register-link">
            <button className="minimalistic-btn">{ticket.buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
