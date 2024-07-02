import React, { useEffect, useState } from 'react';

const AccountBalance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    fetch('/api/account_balance')
      .then(response => response.json())
      .then(data => setBalance(data));
  }, []);

  return (
    <div>
      {balance ? (
        <div>
          <p>Balance: {balance.balance}</p>
          <p>Equity: {balance.equity}</p>
          <p>Margin: {balance.margin}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AccountBalance;
