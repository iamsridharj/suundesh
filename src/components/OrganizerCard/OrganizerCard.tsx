import React from 'react';
import './OrganizerCard.css';

const OrganizerCard = ({ organizer }: {organizer: any}) => {
  return (
    <div className="organizer-card">
      <h3 className="hosted-by">HOSTED BY</h3>
      <div className="organizer-details">
        <img src={organizer.image} alt={organizer.name} className="organizer-image" />
        <div className="organizer-info">
          <h4 className="organizer-name">{organizer.name}</h4>
          <p className="organizer-description">{organizer.description}</p>
          <h5 className="contact-us">Contact Us On</h5>
          <div className="contact-icons">
            {organizer.contacts.map((contact: any, index: any) => (
              <a href={contact.url} target="_blank" rel="noopener noreferrer" key={index}>
                <img src={contact.icon} alt={contact.type} className="contact-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerCard;
