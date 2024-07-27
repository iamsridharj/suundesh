import { useState, useEffect } from 'react';
import EventCard from 'src/components/EventCard/EventCard';
import SpeakerCard from 'src/components/SpeakerCard/SpeakerCard';
import TicketCard from 'src/components/TicketCard/TickerCard';

interface TabData {
  tabHeaders: { key: string; label: string }[];
  tabContents: { key: string; component: React.ReactNode }[];
}

const speakers = [{
  name: "Bruce Wayne",
  designation: "Chairman",
  company: "Wayne Enterprises",
  image: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
  facebookUrl: "https://www.facebook.com/konfhub",
  twitterUrl: "https://x.com/konfhub",
  linkedinUrl: "https://www.linkedin.com/konfhub?_l=en_US",
  websiteUrl: "https://konfhub.com/"
},  {
  name: "Dark Knight",
  designation: "Batman",
  company: "Gotham",
  image: "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
  facebookUrl: "https://www.facebook.com/konfhub",
  twitterUrl: "https://x.com/konfhub",
  linkedinUrl: "https://www.linkedin.com/konfhub?_l=en_US",
  websiteUrl: "https://konfhub.com/"
}]

const events =[ {
  image: "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=3840&q=75",
  title: "How to make more money",
  date: "Jun 11th, 2024 at 10:00 AM (IST)",
  icon: "https://via.placeholder.com/32.png?text=Icon",
},
{
  image: "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=3840&q=75",
  title: "How to fight crime",
  date: "Jun 1st, 2034 at 10:00 AM (IST)",
  icon: "https://via.placeholder.com/32.png?text=Icon",
},
{
  image: "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=3840&q=75",
  title: "This is a workshop connected to a ticket",
  date: "Jun 1st, 2034 at 10:00 AM (IST)",
  icon: "https://via.placeholder.com/32.png?text=Icon",
}]

const tickets = [
  {
    name: 'Free Ticket',
    description: 'This is a ticket description. This is a free ticket. This ticket is uncategorised.',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India',
    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
    venueDetails: 'This is additional venue details.',
    availability: '31st Aug 2034, 02:30 PM IST',
    price: 'FREE',
    registerUrl: '/checkout/konfhub-frontend-evaluation-task?ticketId=99858',
    buttonText: 'Register'
  },
  {
    name: 'Paid Ticket',
    description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised.',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India',
    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
    venueDetails: 'This is additional venue details.',
    availability: '31st Aug 2034, 02:30 PM IST',
    price: '₹ 1,000',
    registerUrl: '/checkout/konfhub-frontend-evaluation-task?ticketId=99859',
    buttonText: 'Register'
  },
  {
    name: 'Donation Ticket',
    description: 'This is a ticket description. This is a donation ticket. This ticket is uncategorised.',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India',
    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
    venueDetails: 'This is additional venue details.',
    availability: '31st Aug 2034, 02:30 PM IST',
    price: 'Min ₹ 10 - Max ₹ 1,000',
    registerUrl: '/checkout/konfhub-frontend-evaluation-task?ticketId=99860',
    buttonText: 'Donate'
  },
  {
    name: 'Ticket With Coupon',
    description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.',
    locationUrl: 'https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India',
    location: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
    venueDetails: 'This is additional venue details.',
    availability: '31st Aug 2034, 02:30 PM IST',
    price: '₹ 1,000',
    registerUrl: '/checkout/konfhub-frontend-evaluation-task?ticketId=99862',
    buttonText: 'Register'
  }]

const useTabsData = (eventData: any): TabData => {
  const [tabData, setTabData] = useState<TabData>({
    tabHeaders: [],
    tabContents: [],
  });

  useEffect(() => {
    if (!eventData) return
    const {
      description,
      speaker_section_title,
      speaker_section_description,
      sponsor_section_title,
      sponsor_section_description,
      workshop_section_title,
      workshop_section_description
    } = eventData;

    const tabHeaders = [
      { key: 'about', label: 'About' },
      { key: 'speakers', label: speaker_section_title },
      { key: 'sponsors', label: sponsor_section_title },
      { key: 'workshops', label: workshop_section_title },
    ];

    const tabContents = [
      {
        key: 'about',
        component: (
          <>
          <h1>ABOUT EVENT</h1>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          </>
        ),
      },
      {
        key: 'tickets',
        component: (
          <>
            <h1>TICKETS</h1>
            <div className="ticket-cards-container">
            {tickets.map((ticket, index) => (
              <TicketCard key={index} ticket={ticket} />
            ))}
            </div>
          </>
        ),
      },

      {
        key: 'speakers',
        component: (
          <>
            <h1>THIS IS SPEAKERS SECTION</h1>
            <div dangerouslySetInnerHTML={{ __html: speaker_section_description }} />
            <div className="speaker-cards-container">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} />
              ))}
            </div>
          </>
        ),
      },
      {
        key: 'sponsors',
        component: (
          <>
            <h1>THIS IS SPONSORS SECTION</h1>
            <div dangerouslySetInnerHTML={{ __html: sponsor_section_description }} />
            <div className="speaker-cards-container">
            {events.map((speaker, index) => (
                <EventCard key={index} event={speaker} />
              ))}
            </div>
          </>
        ),
      },
      {
        key: 'workshops',
        component: (
          <>
            <h1>THIS IS WORKSHOP SECTION</h1>
            <div dangerouslySetInnerHTML={{ __html: workshop_section_description }} />
            <div className="workshop-img-container">
            <img src='https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=3840&q=75' width={"100%"}/>

            </div>
          </>
        ),
      },
      {
        key: 'sponsors',
        component: (
          <>
            <h1>Sponsors</h1>
            <div className="workshop-img-container">
            <img src='https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg' width={"100%"}/>

            </div>
          </>
        ),
      },
    ];

    setTabData({ tabHeaders, tabContents });
  }, [eventData]);

  return tabData;
};

export default useTabsData;
