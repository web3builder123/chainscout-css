import React from 'react';

const TopCard = () => {
    return (
        <div className='container mt-5 p-2'>
            <div className="row">
                <div className="col-12">
                    <div className="card p-2">
                        <p>User Address: {"Address"}</p>
                         <p>User Balance : 1ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCard;