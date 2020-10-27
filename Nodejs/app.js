const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()

const dbURI = 'mongodb+srv://reza:1234@cluster0.dkk1h.mongodb.net/nodejs?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => app.listen(3000) )
    .catch((err) => {console.log(err)})

// register view engine
app.set('view engine' , 'ejs')


app.listen(3000)

app.use(express.static('public'))
app.use(morgan('tiny'))

app.get('/' , (req,res) => {
    res.redirect('/blogs')
})

app.get('/about' , (req,res) => {
    res.render('about')
})

app.get('/blogs/create' , (req,res) => {
    res.render('create')
})

app.get('/blogs' , (req,res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render("blogs" , { title: 'Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err)
    })
})


app.use((req,res) => {
    res.status(404).render('404')
})