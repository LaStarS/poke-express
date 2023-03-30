const express = require('express')

const router = express.Router()

const pokemonController = require('../controller/pokemonController')

router.get('/', pokemonController.index)
router.post('/', pokemonController.create)
router.get('/new', pokemonController.new)
router.get('/:id', pokemonController.show)



module.exports = router