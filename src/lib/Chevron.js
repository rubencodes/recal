import React from 'react';

import ChevronStyles from './Chevron.style.js';

const Chevron = ({ direction="" }) => (
  <span className={ `Chevron ${direction}` } style={ { ...ChevronStyles.root, ...(ChevronStyles[direction] || {}) } } />
);

export default Chevron;