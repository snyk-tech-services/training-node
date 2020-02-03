<<<<<<< Updated upstream
console.log("Hello world");
=======
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))
app.get('/scott', (req, res) => res.send("Who wants sushi for dinner?"))

app.listen(port, () => console.log("Example app listening on port ${port}!"))
>>>>>>> Stashed changes
