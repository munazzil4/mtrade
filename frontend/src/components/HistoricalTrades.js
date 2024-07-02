import React, { useEffect, useState } from 'react';

const HistoricalTrades = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch('/api/historical_trades')
      .then(response => response.json())
      .then(data => setTrades(data));
  }, []);

  return (
    <div>
      {trades.length ? (
        <ul>
          {trades.map((trade, index) => (
            <li key={index}>
              Time: {new Date(trade.time * 1000).toLocaleString()}, Profit: {trade.profit}
            </li>
          ))}
        </ul>
      ) : (
        <p>No historical trades</p>
      )}
    </div>
  );
};

export default HistoricalTrades;
