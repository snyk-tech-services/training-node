const express = require('express')
const functions = require('./functions')
const app = express()
const port = 3000
const redis_port = 6379
const redis_host = process.env.REDIS_HOST
const redis = (process.env.NODE_ENV == 'test') ? require('redis-mock') : require('redis')

redis_client = redis.createClient({
  port: redis_port,
  host: redis_host,
});

app.set('view engine', 'pug')

app.get('/', function(req, res) {
	nameToBestify = req.query.name ? req.query.name : 'Someone'

    redis_client.get('names', function(err, names) {

      names_list = names ? JSON.parse(names) : []

      names_list.push(nameToBestify)
      redis_client.set('names', JSON.stringify(names_list));

      res.render('page', { title: "Home", headline: functions.bestify(nameToBestify), names: names_list })

    });
})

app.get('/antoine', (req,res) => res.render('page', { title: "Antoine's Page", headline: functions.bestify('Antoine') }))

// Last catchall if nothing matches before that !
app.get('/*', (req,res) => res.render('page', { title: "Hmmmm....", headline: functions.figureOutWhatToSay(req.path) }))

app.listen(port, () => console.log("Example app listening on port %s!",port))

module.exports = app

console.log("This is Laura's code change")