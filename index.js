const Web3 = require("web3");
const constants = require("./constants");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const accountOne = "0x1c5d1F530A68F266578dADF1d5366a8051C510c8";
const accountTwo = "0xebc58F1CbE122b1dF15818F83ccc2Fd7709b914a";
const contractAddress = "0xc4f07F96413c0Bc26b5310B615E510E58060E8E5";

// // Get wallet balance
// web3.eth.getBalance(account_one).then((res) => { console.log(web3.utils.fromWei(res, "ether")) });


// // Make transaction
// web3.eth.sendTransaction({ 
// 	from: accountOne, 
// 	to: contractAddress, 
// 	value: web3.utils.toWei("1", "ether") 
// }).then(console.log);


// instantiate a contract with ABI and contract address
const sharedWalletContract = new web3.eth.Contract(constants.ABI, contractAddress);


// call a function using the contract instance
sharedWalletContract.methods.getContractBalance().call().then(console.log);