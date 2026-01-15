const express = require('express')
const routes = express.Router()
const fetchCharacters = require('../utils/fetchCharacters.js')

routes.get('/', async (req, res) => {
  const data = await fetchCharacters()
  return res.json(data)
  // try {
  //   const response = await axios.get(url)

  //  const characters = response.data.results.map(c => {
  //     const {name, status, species, gender, origin, image} = c
  //     return  {name, status, species, gender, origin, image}
  //   })
})

routes.get('/:name', async (req, res) => {
  const charactersName = req.params.name
  const url = `https://rickandmortyapi.com/api/character/?name=${(charactersName)}`

  try {
    const response = await axios.get(url)
    const {name, status, species, gender, origin, image} = response.data.results[0]

    res.json({name, status, species, gender, origin, image})
  } catch (err) {
    res.status(404).json({error: 'Character not found'})
  }
})

module.exports = routes


// Código DATA

// const express = require("express")
// const route = express.Router()
// const fetchCharacters = require("../utils/fetchCharacters")

// route.get("/", async (req, res) => {
//   const data = await fetchCharacters() 
//   res.json(data)
// })

// route.get("/:name", async (req, res) => {
//   const queryname = req.query.nombre
//   console.log(queryname)
//   const name = req.params.name
//   const data = await fetchCharacters(name) 
//   res.json(data)
// })

// module.exports = route