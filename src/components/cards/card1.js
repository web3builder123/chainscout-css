import React, { useContext } from 'react'; 
import { Web3Context } from '../../context/Web3Context';

const Card1 = () => {
    const {  data,percent,thresh } = useContext(Web3Context);
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">{data && data.estimatedBaseFee}</h4>
								<p>Estimated Base Fee</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">{data && data.baseFeeTrend}</h4>
								<p>Base Fee Trend</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">{percent && percent}</h4>
								<p>base Fee Percentile</p> 
							</div>	 
						</div> 
					</div>
                </div>
                <div className="col-lg-3">
                 <div className="card card-wiget">
						<div className="card-body">
							<div className="card-wiget-info">
								<h4 className="count-num">{thresh && thresh}</h4>
								<p>Busy Threshold</p> 
							</div>	 
						</div> 
					</div>
                </div>
            </div>
        </div>
    );
};

export default Card1;