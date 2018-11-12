'use strict'

//import express from the express to set up our routes
const express = require('express')

//import superagent to make xhttp requests to 3rd party API's
const superagent = require('superagent')

//import cors to handle cross origin requests
const cors = require('cors')

//require in the dotenv module and invoke the config method allowing us to add environment variables
require('dotenv').config()

//require in mongoose in order to connect and interact with our database
const mongoose = require('mongoose')
//invoke the connect method and pass the uri for our DB
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ds255253.mlab.com:55253/md301`)
//destructuring with ES6 to retrieve the Shema object off of mongoose
const { Schema } = mongoose
//same thing as above
// const Schema = mongoose.Schema
//retreive the connection object off of mongoose
const db = mongoose.connection
//invoke the on method on our connection object to look for error's and send back a response
db.on('error', console.error.bind(console, 'connection error'))
//invoke the once method on our connection object to look for an 'open' event and call a callback method that we pass to it
db.once('open', () => {
  console.log('DB connection open!')
})

//initiate an instance of express
const app = express()

//tell our express app to use cors (cross origin resource sharing) to allow us to make requests to other domains
app.use(cors())

// listen for a get request at route '/' and send back the response
app.get('/location', (request, response) => {
  getLocation(request.query.data)
    .then(res => response.send(res))
    .catch(err => response.send(handleError(err)))
})

app.get('/weather', getWeather)

//listen for a get request at any route, this is a catch all, and send back an error
app.get('*', (request, response) => {
  response.send('<img src="http://http.cat/500" />')
})



//declare a variable called port that will use either the environment variable of port or 3000
const PORT = process.env.PORT || 3000




//tell express to listen on the specified port
app.listen(PORT, () => {
  console.log(`Complete Demo Server is now running on port ${PORT}`)
})

// function Location(query, lat, long) {
//   this.search_query = query
//   this.latitude = lat
//   this.longitude = long
// }

function Weather(summary, temp, humidity) {
  this.summary = summary
  this.temp = temp
  this.humidity = humidity
}

// declare a variable that will hold a new Schema or blueprint for our locations collection in our DB, similar to our constructor functions we have used in the past
let locationSchema = new Schema({
  address: String,
  latitude: Number,
  longitude: Number,
})

//invoke the model method that when called will pass an instance of our location schema into a Locations collection in our DB
let Location = mongoose.model('Location', locationSchema)



function getLocation(query) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GEOCODE_API_KEY}&address=${query}`
  //use the findOne method to look in our Location collection to see if the key/value pair exists in our collection
  return Location.findOne({address: query})
    .then(res => {
    //if the collection exists, send it back to the client
      if(res) {
        return res
      } else {
      //if it does not exist, send a superagent request to the API and get the lat/long for the query location
        return superagent.get(url)
          .then(res => {
            //once a response is received instantiate a new Location model based on our locationSchema blueprint
            let currentLocation = new Location({
              address: query,
              latitude: res.body.results[0].geometry.location.lat,
              longitude: res.body.results[0].geometry.location.lng
            })
            //save our new model to our db
            currentLocation.save()
            return res
          })
      }
    })
}

function getWeather(request, response) {
  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/37.8267,-122.4233`

  return superagent(url)
    .then(res => {
      let resBody = res.body.currently
      return response.send(new Weather(resBody.summary, resBody.temperature, resBody.humidity))
    })
    .catch(err => response.send(handleError(err)))
}

let handleError = err => ({error: err, message: 'Something Broke!!!'})



// let locationSchema = new Schema({
//   latitude: Number,
//   longitude: Number
// })

// let Location = mongoose.model('Location', locationSchema)