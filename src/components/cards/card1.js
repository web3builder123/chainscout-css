import React, { useContext } from 'react'; 
import { Web3Context } from '../../context/Web3Context';

const Card1 = () => {
    const { connectWallet, address } = useContext(Web3Context);
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">0.000000015</h4>
								<p>Estimated Base Fee</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">0.000000015</h4>
								<p>Estimated Base Fee</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">0.000000015</h4>
								<p>Estimated Base Fee</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">0.000000015</h4>
								<p>Estimated Base Fee</p> 
							</div>	 
						</div> 
					</div>
                </div>
            </div>
        </div>
    );
};

export default Card1;