import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Buffer} from "buffer"
import Header from './components/Header';
import TopCard from './components/TopCard';
import Index from './components/charts';

const Auth = Buffer.from(
  process.env.REACT_APP_INFURA_KEY + ":" + process.env.REACT_APP_INFURA_SECRET,
).toString("base64");

const getGasEstimate= async(chainId)=>{
  const { data } = await axios.get(
    `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
    {
      headers: {
        Authorization: `Basic ${Auth}`,
      },
    },
  );
  console.log("Suggested gas fees:", data);
}

function App() {
  return (
    <>
     <Header/>
     <TopCard/>
     <Index/>
     <div className="container" >
      <div className="row">
        <div className="col">
          <h1>Hello World</h1>
          <button onClick={()=>getGasEstimate(1)}>Get Gas</button>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default App;
