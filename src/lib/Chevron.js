import React from 'react';

import './Chevron.css';

const Chevron = ({ direction="" }) => (
  <span className={ `Chevron ${direction}` } />
);

export default Chevron;