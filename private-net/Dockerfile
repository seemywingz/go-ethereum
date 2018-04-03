# Build Geth in a stock Go builder container
FROM golang:1.10-alpine as builder

RUN apk add --no-cache make gcc musl-dev linux-headers

ADD . /go-ethereum
RUN cd /go-ethereum && make all

# Pull Geth into a second stage deploy alpine container
FROM alpine:latest

RUN apk update && apk add --no-cache curl ca-certificates

# Install dig So We Can Get bootnode IP
# RUN curl -L https://github.com/sequenceiq/docker-alpine-dig/releases/download/v9.10.2/dig.tgz|tar -xzv -C /usr/local/bin/

COPY --from=builder /go-ethereum/build/bin/geth /usr/local/bin/
COPY --from=builder /go-ethereum/build/bin/bootnode /usr/local/bin/

# Private Network Files
COPY ./private-net/files/ /private-net/files/
COPY ./private-net/scripts/ /private-net/scripts/
COPY ./private-net/keystore /root/.ethereum/keystore
# COPY ./private-net/files/static-nodes.json /root/.ethereum/geth/static-nodes.json

RUN geth init /private-net/files/genesis.json
