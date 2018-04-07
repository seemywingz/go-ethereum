#!/bin/ash

geth \
  --networkid $NETWORK_ID \
  --nodiscover \
  --rpc \
  --rpccorsdomain "*" \
  --rpcaddr 0.0.0.0 \
  --rpcapi="eth,net,web3,personal" \
  "${@}"