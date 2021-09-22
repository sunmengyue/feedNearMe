import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`/events.json`).then((res) => setEvents(res.data.results));
  }, []);

  return (
    <Router>
      <div>
        <Route path="/" exact render={() => <Home events={events} />} />
      </div>
    </Router>
  );
};

export default App;
