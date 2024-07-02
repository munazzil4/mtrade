import React, { useEffect, useState } from 'react';

const OpenPositions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch('/api/open_positions')
      .then(response => response.json())
      .then(data => setPositions(data));
  }, []);

  return (
    <div>
      {positions.length ? (
        <ul>
          {positions.map((position, index) => (
            <li key={index}>
              Symbol: {position.symbol}, Volume: {position.volume}
            </li>
          ))}
        </ul>
      ) : (
        <p>No open positions</p>
      )}
    </div>
  );
};

export default OpenPositions;
