const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('/users/:userID/movies/:moviesID', (req, res) => {
    res.send(
        `   <h1> Username: ${req.params.userID} </h1>
            <h1> Film name: ${req.params.moviesID} </h1>
        `
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})