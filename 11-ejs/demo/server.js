'use strict'

const express = require('express')

const superagent = require('superagent')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // let heroes = [
  //   { name: 'Thanos', role: 'Villian' },
  //   { name: 'Thor', role: 'Hero' },
  //   { name: 'Black Panther', role: 'Hero' }
  // ]

  res.render('pages/index')
})

app.get('/search', (req, res) => {
  const data = req.body.searches

  const url = `https://www.googleapis.com/books/v1/volumes?q=${data}` 
  console.log(data)
  superagent.get(url)
    .then(book => res.send(book.body))
})

app.get('*', (req, res) => {
  res.status(404).send({status: res.status, message: 'Something broke'})
})

app.listen(PORT, () => {
  console.log(`Server is now running on Port ${PORT}`)
})

