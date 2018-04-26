# Build Geth in a stock Go builder container
FROM golang:1.10-alpine as builder

RUN apk add --no-cache make gcc musl-dev linux-headers

ADD . /go-ethereum
RUN cd /go-ethereum && make

# Pull all binaries into a second stage deploy alpine container
FROM alpine:latest

RUN apk add --no-cache ca-certificates
COPY --from=builder /go-ethereum/build/bin/* /usr/local/bin/

# Private Network Files
COPY ./private-net/files/ /private-net/files/
COPY ./private-net/scripts/ /private-net/scripts/
COPY ./private-net/keystore /root/.ethereum/keystore
# COPY ./private-net/files/static-nodes.json /root/.ethereum/geth/static-nodes.json

RUN geth init /private-net/files/genesis.json

ENTRYPOINT ["/private-net/files/entrypoint.sh"]