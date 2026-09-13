# docker-app-template

A starter template for containerized web apps with automated deployment.

☕ **Support:** [Buy Me a Coffee](https://buymeacoffee.com/hackatoa)

## Overview

A batteries-included template: a Next.js app, a Dockerfile, and a GitHub Actions workflow that builds and publishes an image to GHCR, which Watchtower then auto-deploys. Clone it to spin up a new self-hosted service fast.

## Features

- Next.js app scaffold
- Production Dockerfile
- GitHub Actions → GHCR image build on push
- Watchtower-based auto-deploy

## Tech Stack

Next.js · Docker · GitHub Actions · Watchtower

## Usage

Use this repo as a template, set the image name in the workflow + compose file, and push — the container updates itself on the host via Watchtower.

## Support

If this project is useful to you, consider supporting development:

☕ **[Buy Me a Coffee](https://buymeacoffee.com/hackatoa)**

---

Part of the **[Hackatoa](https://hackatoa.com)** ecosystem — self-hosted apps, browser games, and bots. · [All repositories »](https://github.com/Hackatoan)
