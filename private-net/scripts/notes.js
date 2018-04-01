loadScript("/private-net/scripts/gethLoad.js")


web3.fromWei(eth.getBalance("0x3cd1db5f09b51c56c266989aae66a61a13064039"), "ether")
web3.fromWei(eth.getBalance("0xa1640b88f612be6c2031ca07f0f4862dae4a3fae"), "ether")
web3.fromWei(eth.getBalance("0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155"), "ether")

web3.fromWei(eth.getBalance(eth.coinbase), "ether")

eth.sendTransaction({from:'0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155', to:'0xa1640b88f612be6c2031ca07f0f4862dae4a3fae', value: web3.toWei(0.05, "ether"), gas:21000});

web3.eth.getTransactionReceipt("receiptHash")