import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    const params = {
      location: 'Hong Kong',
      limit: 50,
      term: searchTerm,
    };
    console.log(params);
    try {
      const response = await yelp.get('/search', {
        params: params,
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
