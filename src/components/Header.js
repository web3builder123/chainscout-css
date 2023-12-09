import React from 'react';

const Header = () => {
    return (
        <div className='container-fluid' style={{backgroundColor:'#362465'}}>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between p-3">
                    <div className="logo-text">ChainScout</div>
                    <div className="btn btn-primary">Connect</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;