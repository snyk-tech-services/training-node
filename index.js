const express = require('express')
const bestify = require('./functions')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))



app.get('/antoine', (req,res) => res.send(bestify('Antoine')))

app.listen(port, () => console.log("Example app listening on port %s!",port))

