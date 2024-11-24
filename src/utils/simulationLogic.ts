export const initializeGrid = (size: number): boolean[][] => {
    return Array(size)
        .fill(false)
        .map(() => Array(size).fill(false));
};

export const updateGrid = (
    grid: boolean[][],
    lifespanGrid: number[][],
    failureProbability: number,
    lifespan: number
): { newGrid: boolean[][]; newLifespanGrid: number[][] } => {
    const rows = grid.length;
    const cols = grid[0].length;

    const newGrid = grid.map((row) => [...row]);
    const newLifespanGrid = lifespanGrid.map((row) => [...row]);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col]) {
                // Decrement lifespan
                newLifespanGrid[row][col] -= 1;
                if (newLifespanGrid[row][col] <= 0) {
                    newGrid[row][col] = false; // Remove cell
                    newLifespanGrid[row][col] = 0;
                } else {
                    // Check for empty neighbors
                    const neighbors = [
                        [row - 1, col], // Up
                        [row + 1, col], // Down
                        [row, col - 1], // Left
                        [row, col + 1], // Right
                    ];

                    for (const [nRow, nCol] of neighbors) {
                        if (
                            nRow >= 0 &&
                            nRow < rows &&
                            nCol >= 0 &&
                            nCol < cols &&
                            !grid[nRow][nCol] &&
                            Math.random() > failureProbability
                        ) {
                            newGrid[nRow][nCol] = true;
                            newLifespanGrid[nRow][nCol] = lifespan;
                            break; // Stop after one successful division
                        }
                    }
                }
            }
        }
    }

    return { newGrid, newLifespanGrid };
};
