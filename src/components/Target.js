import React from 'react';

const Target = ({ currentWaterTarget, setShowModal }) => {
  return (
    <div className="target__value-container">
      <div className="target__pointer" />
      <p className="p__large target__value">
        { currentWaterTarget / 1000 } L
        <button className="target__open-modal" onClick={() => setShowModal(true)}>
          <img className="p__large target__icon" src="./edit_white_24dp.svg" alt="edit target" />
        </button>
      </p>
    </div>
  )
}

export default Target;
