eth.sendTransaction({from:eth.accounts[0], to:"0x4f29512243576EaFe5C2122dFA73B08B30D28D1f", value:20})


eth.sendTransaction({from:"0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155", to:"0xb106dd9b8423b75787a4542c6dd183c468bf2442", value:9})
eth.getBalance("0xb106dd9b8423b75787a4542c6dd183c468bf2442")


eth.getBalance(eth.coinbase)

web3.fromWei(eth.getBalance(eth.coinbase), "ether")
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")

loadScript("/private-net/scripts/gethLoad.js")