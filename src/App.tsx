import React from 'react';
import './App.css';
import { connectedWalletT, signatureT } from '@/api'
function App() {
  const connectedWallet = async () => {
    const res = await connectedWalletT()
    console.log('res', res);
  }
  const signature = async () => {
    const res = await signatureT('你好，世界')
    console.log('res', res);

  }
  return (
    <div className="App">
      <button onClick={connectedWallet}>连接钱包</button>
      <button onClick={signature}>签名</button>
    
    </div>
  );
}

export default App;
