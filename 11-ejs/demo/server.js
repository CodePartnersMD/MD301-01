'use strict'

const express = require('express')

const superagent = require('superagent')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.post('/search', (req, res) => {
  const data = req.body
  let url = `https://www.googleapis.com/books/v1/volumes?q=+`
  req.body.param === 'title' ? url += `intitle:${data.searchText}` : url += `inauthor:${data.searchText}`
  superagent.get(url)
    .then(book => {
      let booksArr = book.body.items.map(val => {
        return new Book(val)
      })
      res.render('pages/searchResults', { books: booksArr})
    })
    .catch(err => res.send({error: err, message: 'Something Broke, do better!'}))
})

app.get('*', (req, res) => {
  res.status(404).send({status: res.status, message: 'Something broke'})
})

app.listen(PORT, () => {
  console.log(`Server is now running on Port ${PORT}`)
})

const Book = function(book) {
  this.title = book.volumeInfo.title
  this.author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'none'
}

