import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Figure from './components/Figure';
import Information from './components/Information';
import Input from './components/Input';
import Message from './components/Message';
import TargetModal from './components/TargetModal';
import Target from './components/Target';
import { API } from './constants';

import './App.css';


const App = () => {
  const [showModal, setShowModal] = useState();
  const [currentWaterValue, setCurrentWaterValue] = useState(0);
  const [currentWaterTarget, setCurrentWaterTarget] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(API);

      const amountOfWater = parseInt(response.data.amount) || 0;
      setCurrentWaterValue(amountOfWater);

      const waterTarget = parseInt(response.data.target) || 0;
      setCurrentWaterTarget(waterTarget);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app__container">
      <header>
        <Information
          value={currentWaterValue / 1000}
          unit={'L'}
          text="TOTAL WATER DRUNK"
        />
        <Information />
      </header>
      <section>
        <Target
          setShowModal={setShowModal}
          currentWaterTarget={currentWaterTarget}
        />
        <Figure
          currentWaterValue={currentWaterValue}
          currentWaterTarget={currentWaterTarget}
        />
        <Message />
      </section>
      <Input
        currentWaterValue={currentWaterValue}
        setCurrentWaterValue={setCurrentWaterValue}
        currentWaterTarget={currentWaterTarget}
      />
      {
        showModal
          ? (
            <TargetModal
              setShowModal={setShowModal}
              currentWaterValue={currentWaterValue}
              setCurrentWaterValue={setCurrentWaterValue}
              setCurrentWaterTarget={setCurrentWaterTarget}
            />
          )
          : ''
      }
    </div>
  );
}
export default App;