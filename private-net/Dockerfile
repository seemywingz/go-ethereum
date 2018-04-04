# Pull Geth into a second stage deploy alpine container
FROM ethereum/client-go

RUN apk update && apk add --no-cache curl ca-certificates make gcc musl-dev linux-headers

# Private Network Files
COPY ./private-net/files/ /private-net/files/
COPY ./private-net/scripts/ /private-net/scripts/
COPY ./private-net/keystore /root/.ethereum/keystore
COPY ./private-net/files/static-nodes.json /root/.ethereum/geth/static-nodes.json

RUN geth init /private-net/files/genesis.json

ENTRYPOINT ["/private-net/files/entrypoint.sh"]