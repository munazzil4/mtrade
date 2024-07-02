from flask import Flask, jsonify
import MetaTrader5 as mt5
import config

app = Flask(__name__)

# Initialize MT5 connection
def init_mt5():
    if not mt5.initialize():
        return False
    if not mt5.login(config.MT5_LOGIN, password=config.MT5_PASSWORD, server=config.MT5_SERVER):
        return False
    return True

@app.route('/api/account_balance', methods=['GET'])
def get_account_balance():
    if init_mt5():
        account_info = mt5.account_info()
        mt5.shutdown()
        if account_info:
            return jsonify(account_info._asdict())
    return jsonify({"error": "Failed to get account info"})

@app.route('/api/open_positions', methods=['GET'])
def get_open_positions():
    if init_mt5():
        positions = mt5.positions_get()
        mt5.shutdown()
        if positions:
            return jsonify([position._asdict() for position in positions])
    return jsonify({"error": "No open positions"})

@app.route('/api/historical_trades', methods=['GET'])
def get_historical_trades():
    if init_mt5():
        from datetime import datetime
        now = datetime.now()
        trades = mt5.history_deals_get(datetime(2021,1,1), now)
        mt5.shutdown()
        if trades:
            return jsonify([trade._asdict() for trade in trades])
    return jsonify({"error": "No trades found"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
