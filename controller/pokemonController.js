const pokemon = require('../models/pokemon')

const PokeModel = require('../models/PokeModel')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async(req, res) => {
try {
  const PokeData =  await PokeModel.find()
   res.render('Index', { pokemon:PokeData })
} catch(err) {
    console.log(err)
    res.send(err.message)
}
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async(req, res) => {
   const PokeData = await PokeModel.findById(req.params.id)
   res.render('Show', { pokemon: PokeData })
}

// GET /fruits/new
module.exports.new = (req, res) => {
    res.render('New')
}

// POST /fruits
module.exports.create = async(req, res) => {

    // console.log(req.body)
    // if (req.body.readyToEat) {
    //     req.body.readyToEat = true
    // } else {
    //     req.body.readyToEat = false
    // } 
    try{
        const PokeData = await PokeModel.create(req.body)
        console.log(PokeData)
    } catch(err){
        console.log('error is', err)
    }    
    
    pokemon.push(req.body)
    res.redirect('/pokemon')
}

// DELETE /fruits/:name
module.exports.delete = async(req, res) => {
    
   try{
     await PokeModel.findByIdAndDelete(req.params.id)
    res.redirect('/pokemon')
} catch(err) {
    console.log(err)
    res.send(err.message)
}
}
// GET /fruits/:name/edit
module.exports.edit = async(req, res) => {
    
    const poke = await PokeModel.findById(req.params.id)

    // let index = fruits.findIndex((item) => item.name === req.params.name)
    res.render('pokemon/Edit', { pokemon: pokemon })
}

// PUT /fruits/:name
module.exports.update = async (req, res) => {
    
    console.log(req.body)

    try{
       await PokeModel.findByIdAndUpdate(req.params.id, req.body)
    
    pokemon[index] = req.body
    res.redirect(`/pokemon/${req.params.id}`) 
    } catch(err) {
        console.log(error)
        res.send(err.message)
    }
    
    
}

// POST /fruits/seed
// module.exports.seed = async(req, res) => {

// try {
//     await PokeModel.deleteMany({})
//     await PokeModel.create(pokemon)
//     res.redirect('/pokemon')
// } catch(err){
//     console.log(err)
//     res,send(err.message)
// }
// }

// DELETE   /fruits/clear
module.exports.clear = async (req, res) => {
   
try {
    await PokeModel.deleteMany({})
    res.redirect('/pokemon')
} catch {
    console.log(err)
    res.send(err.message)
}
    
}