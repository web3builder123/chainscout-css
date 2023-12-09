import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from '../context/Web3Context';

const TopCard = () => { 
    const [balance, setBalance]= useState();
    const { connectWallet, address ,shortAddress, provider, network, handleNetworkChange, selectedNetwork} = useContext(Web3Context);

    const getbalance= async()=>{
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.formatUnits(balance);
        const netId = await provider.getNetwork(); 
        // setNetId(Number(netId.chainId));
        const bal = Number(formattedBalance).toFixed(4)
        setBalance(bal);
    }
    useEffect(()=>{
        getbalance()
    },[address])
    return (
        <div className='container mt-5 p-2'>
            <div className="row">
                <div className="col-12">
                    <div className="card p-2 d-flex">
                         <div>
                          <p >User Address: {address && shortAddress(address)}</p>
                          <p>User Balance : {balance && balance} {network && network}</p>
                         </div>
                         <select class="form-select form-select-lg mb-3" 
                         aria-label=".form-select-lg example"
                         onChange={(e)=>handleNetworkChange(e)}
                          value={selectedNetwork}
                         >
                        <option selected disabled>Select Network</option>
                        <option value="11155111">Sepolia</option>
                        <option value="80001">Polygon</option>
                        <option value="59140">Linea</option> 
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCard;