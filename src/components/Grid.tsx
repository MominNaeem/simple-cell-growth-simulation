import React, { useState, useEffect } from 'react';
import { initializeGrid, updateGrid } from '../utils/simulationLogic';

interface GridProps {
    interval: number;
    failureProbability: number;
    lifespan: number;
    isRunning: boolean;
    setIsRunning: (value: boolean) => void; // Add this prop to control simulation state
}

const Grid: React.FC<GridProps> = ({
    interval,
    failureProbability,
    lifespan,
    isRunning,
    setIsRunning, // Passed from parent to control running state
}) => {
    const GRID_SIZE = 200;

    const [grid, setGrid] = useState<boolean[][]>(initializeGrid(GRID_SIZE));
    const [lifespanGrid, setLifespanGrid] = useState<number[][]>(
        Array(GRID_SIZE)
            .fill(0)
            .map(() => Array(GRID_SIZE).fill(0))
    );

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setGrid((prevGrid) => {
                    const { newGrid, newLifespanGrid } = updateGrid(
                        prevGrid,
                        lifespanGrid,
                        failureProbability,
                        lifespan
                    );
                    setLifespanGrid(newLifespanGrid);
                    return newGrid;
                });
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isRunning, interval, failureProbability, lifespan, lifespanGrid]);

    const toggleCell = (row: number, col: number) => {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[row][col] = !newGrid[row][col];
            return newGrid;
        });

        setLifespanGrid((prevLifespanGrid) => {
            const newLifespanGrid = [...prevLifespanGrid];
            newLifespanGrid[row][col] = lifespan;
            return newLifespanGrid;
        });
    };

    const resetGrid = () => {
        setIsRunning(false); // Stop the simulation
        setGrid(initializeGrid(GRID_SIZE)); // Reset the grid to empty
        setLifespanGrid(
            Array(GRID_SIZE)
                .fill(null)
                .map(() => Array(GRID_SIZE).fill(0)) // Reset all lifespans to 0
        );
    };

    return (
        <div>
            <div>
                <button onClick={resetGrid}>Reset</button>
            </div>
            <div className="grid">
                {grid.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <div
                                className={`cell ${cell ? 'occupied' : ''}`}
                                key={colIndex}
                                onClick={() => toggleCell(rowIndex, colIndex)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grid;
