const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))

function bestify(name) {
    return name + " is the best"
}

app.get('/antoine', (req,res) => res.send(bestify('Antoine')))

app.listen(port, () => console.log("Example app listening on port %s!",port))

module.exports = bestify;