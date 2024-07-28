import React from 'react';
import moment from 'moment-timezone';

interface ReadableDateProps {
  startDate: string;
  endDate: string;
  timeZone: string;
  startTime: string;
  endTime: string;
}

const ReadableDate: React.FC<ReadableDateProps> = ({
  startDate,
  endDate,
  timeZone,
  startTime,
  endTime,
}) => {
  const formatDateString = (dateStr: string, timeStr: string, timeZone: string) => {
    const dateTimeStr = `${dateStr}T${timeStr}`;
    const dateTime = moment.tz(dateTimeStr, timeZone);
    return dateTime.format('MMM Do, YYYY h:mm A');
  };

  const startDateTime = formatDateString(startDate, startTime, timeZone);
  const endDateTime = formatDateString(endDate, endTime, timeZone);
  const timeZoneAbbr = moment.tz(timeZone).zoneAbbr();

  return (
    <div>
      <p>{`${startDateTime} - ${endDateTime} ${timeZoneAbbr}`}</p>
    </div>
  );
};

export default ReadableDate;
