import React, { useState } from 'react';
import axios from 'axios';
import { API, ITEM_ID } from '../constants';


const Input = ({
  currentWaterValue,
  setCurrentWaterValue,
  currentWaterTarget
}) => {
  const values = [150, 250, 350, 450];
  const [active, setActive] = useState(150);

  const updateWater = async (amount) => {
    try {
      await axios.put(API, {
        id: ITEM_ID,
        amount,
        target: currentWaterTarget
      });

      setCurrentWaterValue(amount < 0 ? 0 : amount);
    } catch (error) {
      console.error(error);
    }
  };

  const addWater = () => {
    updateWater(parseInt(currentWaterValue) + parseInt(active));
  };
  
  const removeWater = () => {
    updateWater(parseInt(currentWaterValue) - parseInt(active));
  };

  const handleScroll = (e) => {
    const centerY = window.innerWidth / 2;

    const values = document.querySelectorAll('.slider__value');

    values.forEach((val) => {
      const el = val.getBoundingClientRect();

      if (el.left < centerY && el.right > centerY) {
        const currentValSet = val.getAttribute('data-value');

        if (currentValSet !== active) {
          setActive(currentValSet);
        }
      }
    });
  };

  return (
    <>
      <div className="input__slider-container">
        <div onScroll={handleScroll} className="input__slider">
          {
            values.map((value) => (
              <span
                key={value}
                data-value={value}
                className={`slider__value slider__value${active.toString() === value.toString() ? '--active': '' }`
              }>
                {value} ml
              </span>
            ))
          }
        </div>
      </div>
      <div className="input__buttons">
        <span className="input__button input__button--minus">
          <img alt="remove water" src="./minus.svg" onClick={removeWater} />
        </span>
        <span className="input__button input__button--plus">
          <img alt="add water" src="./plus.svg"  onClick={addWater} />
        </span>
      </div>
    </>
  );
}

export default Input;
