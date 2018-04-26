#!/bin/ash

[[ -d "/root/.ethereum/geth/chaindata"  ]] || geth init /private-net/genesis.json

geth \
  --networkid $NETWORK_ID \
  --nodiscover \
  --rpc \
  --rpccorsdomain "*" \
  --rpcaddr 0.0.0.0 \
  --rpcapi="eth,net,web3,personal" \
  "${@}"