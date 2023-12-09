import axios from "axios";
import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import { Buffer } from "buffer";

export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {   
  const [address, setAddress] = useState();
  const [update, setUpdate] = useState(false);
  const [aLoading, setaLoading] = useState(false);
  const [data, setData]= useState();

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null); 
  const [chainId, setChainId]= useState(80001);

  let add = localStorage.getItem("address");

  useEffect(() => {
    const initialize = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); 
      const netId = await provider.getNetwork(); 
      setChainId(Number(netId.chainId));
      setProvider(provider);
      setSigner(signer);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
    };

    if (add) {
      initialize();
    }
  }, [add]);

  function setProviderAndSigner(provider, signer) {
    setProvider(provider);
    setSigner(signer);
  }

  const connectWallet = async () => {
    const { ethereum } = window;
    setaLoading(true);

    if (!ethereum) {
      alert("Please install the Metamask Extension!");
    }
    try {
      const accounts = await ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
       
 
          setAddress(accounts[0]);
          window.localStorage.setItem("address", accounts[0]);
          setUpdate(!update);
          setaLoading(false);
    } catch (err) {
      setaLoading(false);
      if (err.code === 4902) {
        try {
          setaLoading(true);
          const accounts = await ethereum.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }],
          });
          setAddress(accounts[0]);
          window.localStorage.setItem("address", accounts[0]);
          setUpdate(!update);
          setaLoading(false);
        } catch (err) {
          setaLoading(false); 
        }
      }
    }
  };
  const disconnectWallet = () => { 
    window.localStorage.removeItem("address");
    setUpdate(!update);
    window.location.reload();
  };

  const shortAddress = (addr) =>
    addr.length > 10 && addr.startsWith("0x")
      ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
      : addr;

      

  const Auth = Buffer.from(
    process.env.REACT_APP_INFURA_KEY + ":" + process.env.REACT_APP_INFURA_SECRET,
  ).toString("base64");
  
  const getGasEstimate= async()=>{
    const { data } = await axios.get(
      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
        },
      },
    );
    setData(data);
    console.log("Suggested gas fees:", data);
  }

  useEffect(()=>{
    getGasEstimate();
  },[chainId])


    return (
        <Web3Context.Provider
          value={{
            connectWallet,  
            disconnectWallet,
            shortAddress,
            address,
            update,
            provider ,
            data
          }}
        >
          {props.children}
        </Web3Context.Provider>
      );
}
export default Web3ContextProvider;