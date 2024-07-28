import React, { useState, useRef } from 'react';
import './App.css';
import useGetEventData from './hooks/useGetEventData';
import HeroImage from './design-system/components/HeroImage/HeroImage';
import useTabsData from './hooks/useTabsData';
import Tabs from './design-system/components/Tabs/Tabs';
import { Header } from '@design-system/ui-kit';
import EventDetailsCard from './components/EventDetailsCard/EventDetailsCard';

const App: React.FC = () => {
  const { eventData } = useGetEventData();
  const { tabHeaders, tabContents } = useTabsData(eventData);



  const event = {
    title: 'KonfHub Frontend Evaluation Task',
    type: 'Online',
    payment: 'Paid',
    liveLinkUrl: 'https://example.com',
    liveLinkText: 'Open streaming website',
    date: 'Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST',
    countdown: '3654D : 16H : 0M : 42S'
  };

  return (
    <>
     <Header />
    <div className="container">
      <div className="left-content">
        <HeroImage
          url={"https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"}
          altText='heroImage'
        />
        {
          tabHeaders.length && tabContents.length && (
            <Tabs tabHeaders={tabHeaders} tabContents={tabContents} />
          )
        }

      </div>
      <div className="right-content">
        <div className="event-details">
          <EventDetailsCard event={event} />
        </div>
        <div>
          <a href={"https://dev.konfhub.com/checkout/konfhub-frontend-evaluation-task"} className="buy-now-button">
                  Buy Now
              </a>
              <a href={"https://dev.konfhub.com/konfhub-frontend-evaluation-task"} className="official-website-button">
                  Official Website <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
        </div>
        <div className="hosted-by">
          <h3>Hosted By</h3>
          <p><strong>Manjunath R</strong></p>
          <p>This is the description of the organiser. You can get to know more about the organiser here.</p>
          <p>Contact Us On:</p>
          <div className="contact-icons">
            <a href="https://facebook.com/konfhub" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/konfhub" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/konfhub" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:manjunath@konfhub.com">Email</a>
          </div>
        </div>
      </div>
    </div>
    </>
     
  );
}

export default App;
