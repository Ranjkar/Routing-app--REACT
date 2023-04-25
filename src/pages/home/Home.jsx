import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Welcome to the homepage</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
