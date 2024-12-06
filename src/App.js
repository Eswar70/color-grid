import { useState } from "react";
import "./App.css";

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [clicks, setClicks] = useState([]);

  const handleClick = (index) => {
    if (!grid[index]) {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);

      const newClicks = [...clicks, index];
      setClicks(newClicks);

      if (newClicks.length === 9) {
        setTimeout(() => {
          changeToOrange(newClicks);
        }, 1000);
      }
    }
  };

  const changeToOrange = (sequence) => {
    const newGrid = [...grid];
    sequence.forEach((index, i) => {
      setTimeout(() => {
        newGrid[index] = "orange";
        setGrid([...newGrid]);
      }, i * 1000);
    });
  };

  return (
    <>
      <h1>3 * 3 color grid</h1>    
      <div className="grid">
        {grid.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color || "white" }}
            onClick={() => handleClick(index)}
          >
            {" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
