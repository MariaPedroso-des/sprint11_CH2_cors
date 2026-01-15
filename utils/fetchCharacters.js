const axios = require('axios')
const url = 'https://rickandmortyapi.com/api/character'

async function fetchCharacters(name = null) {
  try {
    const urlSingle = name ? `${url}/?name=${name}` : url
    const response = await axios.get(urlSingle)
    const data = response.data.results
    return data
  } catch (error) {
    console.error('Error', error)
    return {error: 'No se han encontrado los personajes'} 
  }
}

module.exports = fetchCharacters


//Código DATA

// const axios = require("axios")
// const baseURL = "https://rickandmortyapi.com/api/character"

// async function fetchCharacters(name = null) {
//   try {
//     const url = name ? `${baseURL}/?name=${name}` : baseURL
//     const response = await axios.get(url)
//     const data = response.data.results
//     return data
//   } catch (error) {
//     console.error("Error:", error)
//     return {error: "NO se ha encontrado los personajes"}
//   }
// }

// module.exports = fetchCharacters