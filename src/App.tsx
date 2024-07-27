import React, { useState, useRef } from 'react';
import './App.css';
import useGetEventData from './hooks/useGetEventData';
import HeroImage from './design-system/components/HeroImage/HeroImage';
import useTabsData from './hooks/useTabsData';
import Tabs from './design-system/components/Tabs/Tabs';

const App: React.FC = () => {
  const { eventData } = useGetEventData();
  const { tabHeaders, tabContents } = useTabsData(eventData);


  return (
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
          <h2>KonfHub Frontend Evaluation Task</h2>
          <p><strong>Event Live Link:</strong> <a href="https://dev.konfhub.com/konfhub-frontend-evaluation-task/" target="_blank" rel="noopener noreferrer">Open streaming website</a></p>
          <p><strong>Date:</strong> Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</p>
          <p><strong>Event Starts In:</strong> 3655D : 14H : 30M : 30S</p>
          <button className="buy-now">Buy Now</button>
          <button className="official-website">Official Website</button>
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
  );
}

export default App;
