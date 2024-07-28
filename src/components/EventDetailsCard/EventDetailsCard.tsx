import React from 'react';
import './EventDetailsCard.css';
import CountdownTimer from '../EventTimer/EventTimer';
import ReadableDate from '../ReadableDate/ReadableDate';

const EventDetailsCard = ({ eventData }: {eventData: any}) => {

  if(!eventData) return null
  const event = {
    title: eventData.name,
    type: 'Online',
    payment: 'Paid',
    liveLinkUrl: 'https://example.com',
    liveLinkText: 'Open streaming website',
    date: 'Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST',
    countdown: '3654D : 16H : 0M : 42S',
    startDate: eventData.start_date,
    endDate: eventData.end_date,
    startTime: eventData.start_time,
    endTime: eventData.end_time,
    timeZone: eventData.time_zone

  };
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
        <span>Date: </span>
        <ReadableDate
          startDate={event.startDate}
          endDate={event.endDate}
          timeZone={event.timeZone}
          startTime={event.startTime}
          endTime={event.endTime}
        />

      </div>
      <div className="event-countdown">
        <span>EVENT STARTS IN</span>
        <div className="countdown-timer"> 
        <CountdownTimer
          startDate={event.startDate}
          endDate={event.endDate}
          timeZone={event.timeZone}
          startTime={event.startTime}
          endTime={event.endTime}
        />
      </div>
      </div>
      
    </>
  );
};

export default EventDetailsCard;
