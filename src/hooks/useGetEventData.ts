import { useState, useEffect } from 'react';
import { axiosWrapper } from 'src/utils/axios';

const useGetEventData = () => {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axiosWrapper.get('/event/public/konfhub-frontend-evaluation-task');
        setEventData(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  return { eventData, loading };
};

export default useGetEventData;
