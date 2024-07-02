import React from 'react';
import AccountBalance from './components/AccountBalance';
import OpenPositions from './components/OpenPositions';
import HistoricalTrades from './components/HistoricalTrades';

const App = () => {
  return (
    <div>
      <h1>Financial Dashboard</h1>
      <AccountBalance />
      <OpenPositions />
      <HistoricalTrades />
    </div>
  );
};

export default App;
