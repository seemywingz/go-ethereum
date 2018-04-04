#!/bin/ash

geth \
  --networkid $NETWORK_ID \
  --password /private-net/files/password.txt \
  --unlock $UNLOCKED_ACCOUNTS \
  --rpc \
  --rpccorsdomain "*" \
  --rpcaddr 0.0.0.0 \
  --rpcapi="eth,net,web3,personal" \
  --mine \
  --minerthreads=1 \
  --etherbase $ETHERBASE \
  --nodekeyhex $MINER_KEY_HEX 