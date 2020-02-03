const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))

app.get('/Matt', (req,res) => res.send("Matt here again"))
app.listen(port, () => console.log("Example app listening on port %s!",port))
