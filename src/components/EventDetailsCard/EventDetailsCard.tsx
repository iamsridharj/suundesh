import React from 'react';
import './EventDetailsCard.css';

const EventDetailsCard = ({ event }: {event: any}) => {
  return (
    <>

      <h3 className="event-title">{event.title}</h3>
      <div className="event-type">
        <span className="event-type-item">
          <i className="fa fa-video-camera" aria-hidden="true"></i> {event.type}
        </span>
        <span className="event-type-item">
          <i className="fa fa-credit-card" aria-hidden="true"></i> {event.payment}
        </span>
      </div>
      <div className="event-live-link">
        <span>Event Live Link : </span>
        <a href={event.liveLinkUrl} target="_blank" rel="noopener noreferrer">
          {event.liveLinkText}
        </a>
      </div>
      <div className="event-date">
        <span>Date: </span>{event.date}
      </div>
      <div className="event-countdown">
        <span>EVENT STARTS IN</span>
        <div className="countdown-timer">{event.countdown}</div>
      </div>
      
    </>
  );
};

export default EventDetailsCard;
