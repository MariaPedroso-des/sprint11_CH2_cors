const express = require('express')
const app = express()
const routes = require('./routes/RickMor-routes.js')
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/characters', routes)

app.listen(PORT, () => {
  console.log('Expresss está escuchando en el puerto http://localhost:3000')
})

// Código DATA

// const express = require("express")
// const app = express()
// const routes = require("./routes/rickRoutes")
// const cors = require("cors")
// const PORT = 4000

// app.use(cors())
// app.use("/characters", routes)

// app.listen(PORT, () => console.log(`el servidor está escuchando en el puerto http://loacalhost:${PORT}`))