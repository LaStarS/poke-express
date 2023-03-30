const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pokeSchema = new Schema({
    name: {type: String, required:true},
    img: {type: String, required:true}
    })

const PokeModel = mongoose.model('pokemon', pokeSchema)

module.exports = PokeModel