# weather-service
This repository contains a Node.js server that serves a website and communicates with a remote Node-RED server through ngrok. The Node-RED server retrieves weather data for the Node.js server.

## Features
Node.js Server: Hosts a website that displays weather information.
Node-RED Integration: Communicates with a remote Node-RED server to fetch weather data.
ngrok: Facilitates secure tunneling to the Node-RED server.

## Getting started

### Prequisites

Node.js installed on your machine.
ngrok account and installation.
Node-RED server set up remotely.

## Installation

1. Clone the repository:
git clone https://github.com/duuva/weather-service.git
cd weather-service

2. Install the dependencies:
npm install

3. Start the Node.js server:
npm start

4. Set up ngrok to tunnel to your Node-RED server:
ngrok http <your-node-red-server-port>

5. Update the Node.js server configuration to use the ngrok URL for the Node-RED server.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Node.js
Node-RED
ngrok
