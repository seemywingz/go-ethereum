// loadScript("/private-net/scripts/gethLoad.js")

function all() {
  var totalBal = 0;
  for (var acctNum in eth.accounts) {
      var acct = eth.accounts[acctNum];
      var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
      totalBal += parseFloat(acctBal);
      console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
  }
  console.log("  Total balance: " + totalBal + " ether");
};

function send() {
  eth.sendTransaction({from:"0xa1640b88f612be6c2031ca07f0f4862dae4a3fae", to:"0xbebe38ec6ef2b5f3b56bfebb353ebc860e382155", value:900})
}