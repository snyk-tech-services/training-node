const express = require('express')
const functions = require('./functions')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world - Eat at Joe's"))



app.get('/antoine', (req,res) => res.send(functions.bestify('Antoine')))


// Last catchall if nothing matches before that !
app.get('/*', (req,res) => res.send(functions.figureOutWhatToSay(req.path)))

app.listen(port, () => console.log("Example app listening on port %s!",port))

module.exports = app

console.log("This is Laura's code change")