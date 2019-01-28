# Nuve Media Server

Nuve media server is lightweight and beautiful.

![nuve logo](https://i.imgur.com/lzUYzuD.png)

## Screenshots

![](https://i.imgur.com/ab7QIv3.png)
![](https://roberthosking.com/wp-content/uploads/2018/05/capture2-1-768x576.png)

## Installation

A .deb installer will be created for the first release.

## Design Philosophy

Nuve is the first and only no-comprimise, roll-your-own media server designed to run on low-power hardware like a Raspberry Pi. This is accomplished by moving computation to the viewing client where possible and eliminating non-essential features.

## Development Setup

`cd Nuve`

Install dependencies

`npm install`

Build the bundle in watch mode

`webpack --watch`

Start up the server

`npm start`

## Project Milestones

### V1

- [ ] Automatically Categorize Media Library
- [ ] Stream media in the browser

### V2

- [ ] Mobile Friendly UI
- [ ] Multicast - CPU efficient synchronized streaming to multiple clients
- [ ] Chromecast support
- [ ] Store library in the cloud (Pay per usage)
