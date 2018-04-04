#!/bin/ash

geth \
  --networkid $NETWORK_ID \
  --password /private-net/files/password.txt \
  --unlock $UNLOCKED_ACCOUNTS \
  --nodiscover \
  --rpc \
  --rpccorsdomain "*" \
  --rpcaddr 0.0.0.0 \
  --rpcapi="eth,net,web3,personal" \
  --verbosity 9 \
  --nodekeyhex $BOOTNODE_KEY_HEX 