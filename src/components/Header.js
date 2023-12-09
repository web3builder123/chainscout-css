import React, { useContext } from 'react';
import { Web3Context } from '../context/Web3Context';

const Header = () => {
    const { connectWallet, address ,shortAddress} = useContext(Web3Context);
    return (
        <div className='container-fluid' style={{backgroundColor:'#362465'}}>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between p-3">
                    <div className="logo-text">ChainScout</div>
                  {
                    address ? <p className='text-white'>{shortAddress(address)}</p> : <div className="btn btn-primary" onClick={connectWallet}>Connect</div>
                  }  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;