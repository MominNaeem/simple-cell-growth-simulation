Bacterial Growth Simulation

Summary:
The Bacterial Growth Simulation is a web-based interactive application built using React and TypeScript. It simulates the growth of bacterial colonies in a confined grid (representing a petri dish) based on biological rules. Users can control the simulation by starting, pausing, resetting, and customizing parameters such as:

- The time interval for bacterial division.
- The probability of division failure.
- The lifespan of bacteria.

Main Features
- Interactive 200x200 grid representing a petri dish.
- Simulation of bacterial growth based on:
- Division Rules: Bacteria divide into neighboring empty cells.
- Failure Probability: Cell divisions may fail based on user-defined probabilities.
- Lifespan: Bacteria die after a specified number of seconds.

User Controls:
- Start, pause, and reset the simulation.
- Adjust division interval, failure probability, and lifespan dynamically.
- Add or remove bacteria by clicking on grid cells.
- Smooth updates and efficient state management to handle large grids.


Project Structure
The project is organized into a modular structure for maintainability and clarity:

The project is structured to ensure modularity, clarity, and ease of maintainability. The components folder contains reusable React components such as Grid.tsx and Controls.tsx. The Grid.tsx component manages the grid rendering, bacterial growth simulation, and interactions like clicking on cells to add or remove bacteria. The Controls.tsx component provides user controls for starting, pausing, and resetting the simulation, as well as input fields for adjusting settings such as the division interval, failure probability, and lifespan of bacteria.

The utils folder holds helper files, including simulationLogic.ts, which contains the core logic for bacterial growth, such as handling division rules, lifespan, and failure probability. It also includes constants.ts, which stores shared constants like the grid size.

The App.tsx file serves as the root component, integrating the Grid and Controls components into a cohesive interface. The index.tsx file acts as the entry point, rendering the App component into the DOM. Lastly, styles.css contains custom styles for the grid layout, UI controls, and overall application appearance, ensuring the interface is both functional and visually appealing.


Key Components:

Grid.tsx

Manages the grid state (grid and lifespanGrid) and handles bacterial growth logic.
Handles user interactions like clicking on cells to add or remove bacteria.
Renders the 200x200 grid with each cell dynamically updated during the simulation.

Controls.tsx

Provides user inputs for:
Simulation interval.
Division failure probability.
Bacterial lifespan.
Includes buttons to start, pause, and reset the simulation.

simulationLogic.ts

Contains the logic for updating the grid during each simulation tick:
Handles bacterial division into neighboring cells.
Accounts for lifespan and failure probability.
Ensures the simulation runs efficiently even for large grids.


Assumptions
Initial State:
- The grid starts empty until the user manually adds bacteria by clicking on cells.
Division Rules:
- A cell can only divide if at least one neighboring cell (up, down, left, or right) is empty.
- A bacterial division has a user-defined probability of failure (default: 10%).
Lifespan:
- Bacteria die after a specified number of seconds (default: 6 seconds).
- Lifespan is measured per bacterial cell.
User Controls:
- Resetting stops the simulation and clears all bacteria from the grid.
- Users can adjust simulation parameters dynamically.

Performance Analysis

Grid Update Speed:
Optimization:
- State updates are batched using React’s useState and useEffect.
- Grid updates are localized to affected cells, avoiding unnecessary re-renders.
Performance:
- The grid can handle large-scale updates (200x200 cells) smoothly, even at short intervals (e.g., 500ms).

Memory Usage:
Memory Management:
- Grid and lifespan data are stored in 2D arrays for efficient lookup and update.
- Lifespan counters are decremented only for occupied cells to minimize computation.
Analysis:
- Memory usage scales linearly with grid size (O(n^2) for n x n grid).

Tested Scenarios
Maximum grid size: 200x200.
Minimum interval: 500ms.
Maximum bacteria: ~5,000 active cells.

Performance Metrics
Average Frame Render Time: ~16ms (60fps) with ~1,000 active cells.
Memory Usage: ~10MB for grid and lifespan state combined.


Future Improvements
Add support for diagonal cell division.
Display a real-time graph of bacterial population growth over time.
Enable users to save and load simulation states.
Introduce advanced biological rules, such as nutrient consumption or competitive species.
Due to final exams, many improvements have not been implemented yet. Soon to come. :D
