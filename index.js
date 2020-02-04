const express = require('express')
const functions = require('./functions')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', function(req, res) {
	nameToBestify = req.query.name ? req.query.name : 'Someone'
	res.render('page', { title: "Home", headline: functions.bestify(nameToBestify) })
})

app.get('/antoine', (req,res) => res.render('page', { title: "Antoine's Page", headline: functions.bestify('Antoine') }))

// Last catchall if nothing matches before that !
app.get('/*', (req,res) => res.render('page', { title: "Hmmmm....", headline: functions.figureOutWhatToSay(req.path) }))

app.listen(port, () => console.log("Example app listening on port %s!",port))

module.exports = app

console.log("This is Laura's code change")

console.log("This is Angelina's copy code change")