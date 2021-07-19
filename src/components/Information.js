import React from 'react';

const Information = ({ value = 15, unit = '', text = 'ACHIEVED GOAL DAYS'}) => {
  return (
    <div className="information__container">
      <p className="p__huge">{value} {unit}</p>
      <p className="p__medium">{text}</p>
    </div>
  );
}

export default Information;
