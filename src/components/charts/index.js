import React from 'react';
import GasPriceEstimate from './GasPrice';
import GasHistory from './GasHistory';

const Index = () => {
    return (
        <div className='container'>
            <div className="row  mt-4"> 
                <div className="col-6">
                 <h3>Real-Time Gas Prices</h3>
                    <div className="card">
                    <GasPriceEstimate />
                    </div>
                </div>
                <div className="col-6">
                <h3> Access Gas Price History</h3>
                <div className="card">
                    <GasHistory />
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Index;