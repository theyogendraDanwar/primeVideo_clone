import { useState, useEffect } from 'react';
import { useStateContext } from '../reduxhooks/state'

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    const pass = () => {
      setIsLoading(true);
      console.log('Sending Http request to URL: ' + url);
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(data => {
          setIsLoading(false);
          setFetchedData(data);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    }
    dependencies = dependencies ? pass() : ''
  }, [dependencies]);

  return [isLoading, fetchedData];
};