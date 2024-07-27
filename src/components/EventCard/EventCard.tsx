import React from 'react';
import './EventCard.css';

const EventCard = ({ event }: {event: any}) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <h3 className="event-title">{event.title}</h3>
      <p className="event-date">{event.date}</p>
      <div className="event-footer">
        <img src={event.icon} alt="event icon" className="event-icon" />
        <button className="event-button">View Details</button>
      </div>
    </div>
  );
};

export default EventCard;
