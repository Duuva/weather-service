const express = require('express') 
const http = require('http');
const https = require('https');
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const app = express();


const port = process.env.PORT || 3000; //hosting provides the PORT
const NODE_RED_URL = process.env.NODE_RED_URL || 'https://example.ngrok-free.app'; // Node-RED URL from environment variables

// cors - allow connection from different domains and ports
app.use(cors())

// convert json string to json object (from request)
app.use(express.json())

// Serve the static HTML file from the public folder
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
//app.use(express.static(path.join(__dirname, 'public')));

//serve the code.js file for users opening the website
app.get('/assets/js/code.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/assets/js/code.js'));
});
//serve the CSS file for users opening the website
app.get('/assets/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/assets/css/style.css'));
});

app.post("/weather", async (req, res) => {
    console.log("Received POST request from clientside javascript")
    let data = req.body
    let city = data.city
    let country = data.country
    //form the url for nodered server
    const url = `${NODE_RED_URL}/weather/${city}/${country}`;

    try {
        console.log("Making a GET request to Node-Red(RaspberryPi) server")
        //make request to Node-RED server
        const response = await axios.get(url);
        console.log("Received data from Node-red(RaspberryPi) Server, forwarding to clientside javascript")
        console.log("")
        //send the data to code.js
        res.json(response.data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
})


// Listen on port
app.listen(port, () => {
    console.log(`Server is on port ${port}`);
  })