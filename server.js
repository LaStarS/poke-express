require('dotenv').config()

const express = require('express')
const app = express()

const PORT = 3000

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

const connectDB = require('./config/db')

const pokemonController = require('./controller/pokemonController')

app.get('/pokemon', pokemonController.index)

app.get('/pokemon/:id', pokemonController.show)

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
    connectDB()
})
