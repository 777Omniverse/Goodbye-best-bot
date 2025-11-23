#!/usr/bin/env bash
set -e
apt-get update -y
apt-get install -y build-essential python3 libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev libpixman-1-dev
npm ci --unsafe-perm=true --allow-root || npm install --unsafe-perm=true --allow-root
