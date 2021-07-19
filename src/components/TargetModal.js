import React, { useState } from 'react';
import axios from 'axios';
import { API, ITEM_ID } from '../constants';


const TargetModal = ({
  setShowModal,
  setCurrentWaterValue,
  currentWaterValue,
  setCurrentWaterTarget,
}) => {
  const [ targetValue, setTargetValue ] = useState(null);

  const handleSubmit = async (e, a) => {
    e.preventDefault();

    try {
      await axios.put(API, {
        id: ITEM_ID,
        amount: currentWaterValue,
        target: targetValue
      });

      setCurrentWaterValue(currentWaterValue < 0 ? 0 : currentWaterValue);
      setCurrentWaterTarget(targetValue);
    } catch (error) {
      console.error(error);
    }

    setShowModal(false);
  };

  return (
    <div className="target-modal__container">
      <div className="target-modal__modal">
        <button
          className="target-modal__close"
          onClick={() => setShowModal(false)}
        >
          +
        </button>

        <h2>Update Target Water</h2>

        <p>Please enter your new water target below:</p>

        <form>
          <div className="form__ml-container">
            <input
              className="target-modal__input"
              type="number"
              onChange={(e) => setTargetValue(e.target.value)}
            />

            <div className="form__ml">ml</div>
          </div>

          <input
            className="target-modal__input"
            type="submit"
            onClick={(handleSubmit)}
            value="UPDATE"
          />
        </form>
      </div>
    </div>
  );
}

export default TargetModal;
