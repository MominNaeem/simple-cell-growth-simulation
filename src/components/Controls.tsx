import React from 'react';

interface ControlsProps {
    interval: number;
    setInterval: (value: number) => void;
    failureProbability: number;
    setFailureProbability: (value: number) => void;
    lifespan: number;
    setLifespan: (value: number) => void;
    isRunning: boolean;
    setIsRunning: (value: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({
    interval,
    setInterval,
    failureProbability,
    setFailureProbability,
    lifespan,
    setLifespan,
    isRunning,
    setIsRunning,
}) => {
    return (
        <div className="controls">
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {/* <button onClick={() => setIsRunning(false)}>Reset</button> */}
            <div>
                <label>Time Interval (ms):</label>
                <input
                    type="number"
                    value={interval}
                    onChange={(e) => setInterval(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Division Failure Probability:</label>
                <input
                    type="number"
                    step="0.01"
                    value={failureProbability}
                    onChange={(e) => setFailureProbability(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Cell Lifespan (seconds):</label>
                <input
                    type="number"
                    value={lifespan}
                    onChange={(e) => setLifespan(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Controls;
