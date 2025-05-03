#FROM node:21-alpine3.18
FROM node:22-slim
RUN set -x \
  && apt update \
  && apt upgrade -y \
  && apt install -y git vim less curl jq
ENV LESSCHARSET=utf-8
WORKDIR /usr/src/app
COPY ./profile.d/alias.sh /etc/profile.d
