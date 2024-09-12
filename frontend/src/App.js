import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/destinations`);
      setDestinations(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/destinations`, { country });
      setCountry('');
      fetchDestinations();
    } catch (error) {
      console.error('Error adding destination:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/destinations/${id}`);
      fetchDestinations();
    } catch (error) {
      console.error('Error deleting destination:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dream Vacation Destinations</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter a country"
          required
        />
        <button type="submit">Add Destination</button>
      </form>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>
            <h3>{dest.country}</h3>
            <p>Capital: {dest.capital}</p>
            <p>Population: {dest.population.toLocaleString()}</p>
            <p>Region: {dest.region}</p>
            <button onClick={() => handleDelete(dest.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;