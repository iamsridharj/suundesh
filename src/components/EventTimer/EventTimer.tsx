import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

interface CountdownTimerProps {
  startDate: string;
  endDate: string;
  timeZone: string;
  startTime: string;
  endTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  startDate,
  endDate,
  timeZone,
  startTime,
  endTime,
}) => {
  const [countdown, setCountdown] = useState<string>('');

  useEffect(() => {
    const calculateCountdown = () => {
      const startDateTimeStr = `${startDate}T${startTime}`;
      const endDateTimeStr = `${endDate}T${endTime}`;

      const startDateTime = moment.tz(startDateTimeStr, timeZone);
      const endDateTime = moment.tz(endDateTimeStr, timeZone);

      const now = moment.tz(timeZone);
      const totalSeconds = endDateTime.diff(now, 'seconds');

      if (totalSeconds <= 0) {
        setCountdown('0D : 0H : 0M : 0S');
        return;
      }

      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const formattedCountdown = `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
      setCountdown(formattedCountdown);
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, endDate, timeZone, startTime, endTime]);

  return (
    <div>
      <p>{countdown}</p>
    </div>
  );
};

export default CountdownTimer;
