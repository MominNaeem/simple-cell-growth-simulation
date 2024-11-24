import React, { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import './styles.css';

const App: React.FC = () => {
  const [interval, setInterval] = useState<number>(1000); // Interval for cell division
  const [failureProbability, setFailureProbability] = useState<number>(0.1); // Probability of division failure
  const [lifespan, setLifespan] = useState<number>(6); // Lifespan of a cell in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false); // Simulation running state

  return (
    <div className="App">
      <h1>Bacterial Growth Simulation</h1>
      <Controls
        interval={interval}
        setInterval={setInterval}
        failureProbability={failureProbability}
        setFailureProbability={setFailureProbability}
        lifespan={lifespan}
        setLifespan={setLifespan}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <Grid
        interval={interval}
        failureProbability={failureProbability}
        lifespan={lifespan}
        isRunning={isRunning}
        setIsRunning={setIsRunning} // Pass this prop to Grid
      />
    </div>
  );
};

export default App;
