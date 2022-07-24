import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <Link to="/student/questionnaire">Begin</Link>
    </div>
  );
};

export default Welcome;
