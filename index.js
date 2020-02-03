const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))
app.get('/rob', (req, res) => res.send("This better work"))
app.listen(port, () => console.log("Example app listening on port ${port}!"))
