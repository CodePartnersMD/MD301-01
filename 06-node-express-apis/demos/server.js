'use strict'

//import express from the express node module
const express = require('express')

//import superagent to make get requests
const superagent = require('superagent')

//require in the dotenv module and invoke the config method allowing us to add environment variables
require('dotenv').config()

//initiate an instance of express
const app = express()

// listen for a get request at route '/' and send back the response
app.get('/', (request, response) => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDcJVutG4txF0K0NBSMOsY8KRs60VqNJ3U&address=7600+Wisconsin+ave+bethesda+md'
  superagent.get(url)
    .then(res => response.send(res.body))
})

//listen for a get request at any route, this is a catch all, and send back an error
app.get('*', (request, response) => {
  response.send('<img src="http://http.cat/500" />')
})



//declare a variable called port that will use either the environment variable of port or 3000
const PORT = process.env.PORT || 3000




//tell express to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`)
})


// const geoLocationHelper = query => {
//   const url = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDcJVutG4txF0K0NBSMOsY8KRs60VqNJ3U&address=7600+Wisconsin+ave+bethesda+md'

//   superagent.get(url)
//     .then(res => res.send(res))
// }
