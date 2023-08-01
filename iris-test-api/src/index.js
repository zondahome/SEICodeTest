const express = require('express')
const app = express()
const port = 3000
const subdivisions = require('./subdivision.json')

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/v1/subdivisions', (req, res) => {
    res.send(subdivisions);
})

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});

