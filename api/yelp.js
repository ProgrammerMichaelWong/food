import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer P7BCYzFjuV6JrDZ8Oei7TDWgID6KfS2Etu1FXi8QpRJ-VypeejI8OY9RVEg8BUK9lHNHPDG_8mfzQ9JjwycJcBCFH9Ba0Bk44b6tJ2ycd1EvEQJWk-NrCHiH7C-WYHYx',
  },
});
