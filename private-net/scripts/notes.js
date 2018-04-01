loadScript("/private-net/scripts/gethLoad.js")

web3.fromWei(eth.getBalance("0x3cd1db5f09b51c56c266989aae66a61a13064039"), "ether") // etherbase
web3.fromWei(eth.getBalance("0xa1640b88f612be6c2031ca07f0f4862dae4a3fae"), "ether") // 0 init
web3.fromWei(eth.getBalance("0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155"), "ether") // 10000 init

web3.fromWei(eth.getBalance(eth.coinbase), "ether")

eth.sendTransaction({from:'0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155', to:'0xC96D52Ea2aC094FBd259745B962aCC4b06274D8C', value: web3.toWei(0.05, "ether"), gas:21000});
eth.pendingTransactions
web3.eth.getTransactionReceipt("receiptHash")

admin.addPeer("enode://3b8fd7c0bec1010461eeb9694a08ff512b19be7bbaf9bcc99626b0a47d3948350d97a482cbbab4f2f8a15ecc07de3c9c4bb9091246a33d3431678ac3cd036539@172.19.0.2:30303")