eth.sendTransaction({from:eth.accounts[0], to:"0x4f29512243576EaFe5C2122dFA73B08B30D28D1f", value:20})

eth.sendTransaction({from:eth.coinbase, to:"0x4f29512243576EaFe5C2122dFA73B08B30D28D1f", value: web3.toWei(0.05, "ether")})

eth.getBalance(eth.coinbase)
eth.getBalance("0x3cd1db5f09b51c56c266989aae66a61a13064039")

web3.fromWei(eth.getBalance(eth.coinbase), "ether")
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")

loadScript("/private-net/scripts/gethLoad.js")