import React, { useMemo } from 'react';
import './App.css';
import { TronLinkAdapter, BitKeepAdapter } from '@tronweb3/tronwallet-adapters';

function App() {
  const adapters = useMemo(() => [new BitKeepAdapter()], []);
 const connectedWallet = () => {
  
 }
  return (
    <div className='APPEALS'>
       <button onClick={connectedWallet}>连接钱包</button>
    </div >
  );
}



export default App;

