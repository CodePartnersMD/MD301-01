'use strict'

const express = require('express')

const superagent = require('superagent')

const mongoose = require('mongoose')

const { Schema } = mongoose
//same as above with ES5
//const Schema = mongoose.Schema

require('dotenv').config()

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@ds263493.mlab.com:63493/md301books`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'DB is broke, fix it!'))
db.once('open', () => console.log('DB connected!'))

const app = express()

const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.post('/search', (request, response) => {
  const data = request.body
  let url = `https://www.googleapis.com/books/v1/volumes?q=+`
  request.body.param === 'title' ? url += `intitle:${data.searchText}` : url += `inauthor:${data.searchText}`
  // Book.findOne({ title: data.searchText })
  //   .then(res => {
  //     if(res) {
  //       console.log(res)
  //       response.render('pages/searchResults', { book: res })
  //     } else {
        superagent.get(url)
          .then(book => {
            return book.body.items.map(val => {
              console.log(val.volumeInfo.title)
              // return new Book(val)
              let newBook = new Book({
                title: val.volumeInfo.title,
                author: val.volumeInfo.authors[0] ? val.volumeInfo.authors[0] : 'none'
              })
              newBook.save()
              .then(res => res)
            })
          })
          .then(book => {
            console.log(book)
            response.render('pages/searchResults', { books: book})
          })
          .catch(err => response.send({ error: err, message: 'Your db is broke!' }))
      // }
    // })

    // .catch(err => response.send({error: err, message: 'Something Broke, do better!'}))
})

app.get('*', (req, res) => {
  res.status(404).send({status: res.status, message: 'Something broke'})
})

app.listen(PORT, () => {
  console.log(`Server is now running on Port ${PORT}`)
})

const bookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  }
})

const Book = mongoose.model('Book', bookSchema)


// const Book = function(book) {
//   this.title = book.volumeInfo.title
//   this.author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'none'
// }

