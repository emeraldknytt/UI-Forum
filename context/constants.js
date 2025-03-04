import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


import socialMediaDapp from "./SocialMediaDapp.json";

export const CONTRACT_ABI = socialMediaDapp.abi;
export const CONTRACT_ADDRESS = "0x9334C7113a66Abb257dcE66547193B8b24664AE0";

//PINATA KEYS
export const PINATA_API_KEY = "00a364b9358023ca667c";
export const PINATA_SECRECT_KEY = "df0c8527be34eff21dfa17f19cd22cc0cdfeaf7e1a6ecbf98fc9c9cbd18d44ba";

//NETWORK
const networks = {
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  sepolia: {
    chainId: "0xaa36a7",
    chainName: "Ethereum Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const DEFAULT_NETWORK = "polygon_amoy";

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    // await window.ethereum.request({
    //   method: "wallet_addEthereumChain",
    //   params: [
    //     {
    //       ...networks[networkName],
    //     },
    //   ],
    // });

    await window.ethereum.request({
      "method": "wallet_switchEthereumChain",
      "params": [
       {
         chainId: "0xaa36a7"
       }
     ],
     });
  } catch (err) {
    // console.log(error);
    console.error("Network switch failed:", err);
    toast.error(`Failed to switch network: ${err}`); 
  }
};


const getCurrentNetwork = async () => {
  if (!window.ethereum) return null;
  const chainId = await window.ethereum.request({
    "method": "eth_chainId",
    "params": [],
   });
  return chainId;
};

export const handleNetworkSwitch = async () => {
  const currentNetwork = await getCurrentNetwork();
  if (currentNetwork === networks[DEFAULT_NETWORK].chainId) {
    return; // No need to switch if already on the right network
  } else{
      await changeNetwork({ DEFAULT_NETWORK });
      toast.success(`Network changed to ${DEFAULT_NETWORK} successfully`);
  }

};




// export const handleNetworkSwitch = async () => {
//   await changeNetwork({ networkName: DEFAULT_NETWORK });
// };

export const checkIfWalletConnected = async () => {
  if (!window.ethereum) return console.log("Please Install MetaMask");
  // const network = await handleNetworkSwitch();
  // await handleNetworkSwitch();

  const accounts = await window.ethereum.request({ method: "eth_accounts" });

  if (accounts.length) {
    await handleNetworkSwitch(); // NEW: Only switch if a wallet is connected
    return accounts[0]; 
  } else {
    console.log("Please Install MetaMask & Connect, Reload");
  }
};



export const connectWallet = async () => {
  try {
    // if (!window.ethereum) return alert("Please install MetaMask");
    if (!window.ethereum) throw new Error("Please install MetaMask");

    // const network = await handleNetworkSwitch();
    // await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return accounts;

  } catch (error) {
    // console.log(error);
    console.error("Error connecting wallet:", error);
    toast.error(`Error connecting wallet: ${error}`); 
    return null;
  }
};
